"use client"

import { useEffect, useRef, useState } from "react"
import ClientOnly from "./client-only"

type Point = {
  id: string
  name: string
  description: string
  coordinates: [number, number]
  path?: [number, number][]
}

type Route = {
  from: string
  to: string
  path: [number, number][]
}

type MapComponentProps = {
  center: [number, number]
  zoom: number
  points: Point[]
  activePointId: string
  onMarkerClick: (id: string) => void
  showPaths?: boolean
  pathOptions?: any
  customIcon?: {
    html: string
    iconSize: [number, number]
    iconAnchor: [number, number]
  }
  routes?: Route[]
}

function MapContent({
  center,
  zoom,
  points,
  activePointId,
  onMarkerClick,
  showPaths = false,
  pathOptions = { color: "#16a34a", weight: 3 },
  customIcon,
  routes,
}: MapComponentProps) {
  const mapRef = useRef<any>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const markersRef = useRef<{ [key: string]: any }>({})
  const pathsRef = useRef<{ [key: string]: any }>({})
  const routePathsRef = useRef<any[]>([])
  const [leaflet, setLeaflet] = useState<any>(null)
  const [isMapInitialized, setIsMapInitialized] = useState(false)

  // Load Leaflet dynamically
  useEffect(() => {
    const loadLeaflet = async () => {
      try {
        const L = await import("leaflet")
        setLeaflet(L)
      } catch (error) {
        console.error("Failed to load Leaflet:", error)
      }
    }

    loadLeaflet()
  }, [])

  // Initialize map when Leaflet is loaded
  useEffect(() => {
    if (!leaflet || !mapContainerRef.current || isMapInitialized) return

    const L = leaflet.default || leaflet

    try {
      // Initialize map
      mapRef.current = L.map(mapContainerRef.current).setView(center, zoom)

      // Add OpenStreetMap tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(mapRef.current)

      setIsMapInitialized(true)
    } catch (error) {
      console.error("Error initializing map:", error)
    }

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
        setIsMapInitialized(false)
      }
    }
  }, [leaflet, mapRef, mapContainerRef])

  // Update map with markers and paths
  useEffect(() => {
    if (!leaflet || !mapRef.current || !isMapInitialized) return

    const L = leaflet.default || leaflet

    // Clear existing markers
    Object.values(markersRef.current).forEach((marker: any) => {
      marker.remove()
    })
    markersRef.current = {}

    // Clear existing paths
    Object.values(pathsRef.current).forEach((path: any) => {
      path.remove()
    })
    pathsRef.current = {}

    // Clear existing route paths
    routePathsRef.current.forEach((path: any) => {
      path.remove()
    })
    routePathsRef.current = []

    // Create default icon or use custom icon
    const createIcon = (point: Point, isActive: boolean) => {
      if (customIcon) {
        return L.divIcon({
          html: customIcon.html,
          className: "",
          iconSize: customIcon.iconSize,
          iconAnchor: customIcon.iconAnchor,
        })
      }

      // Default icon
      return L.divIcon({
        html: `<div class="flex items-center justify-center w-6 h-6 rounded-full ${
          isActive ? "bg-green-600 ring-2 ring-white" : "bg-green-500"
        }"></div>`,
        className: "",
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      })
    }

    try {
      // Add markers for each point
      points.forEach((point) => {
        const isActive = point.id === activePointId
        const icon = createIcon(point, isActive)

        const marker = L.marker(point.coordinates, { icon })
          .addTo(mapRef.current)
          .bindPopup(`<b>${point.name}</b><br>${point.description}`)
          .on("click", () => {
            onMarkerClick(point.id)
          })

        markersRef.current[point.id] = marker

        // If active, open popup
        if (isActive) {
          marker.openPopup()
        }

        // Add path if available and showPaths is true
        if (showPaths && point.path && point.path.length > 0) {
          const path = L.polyline(point.path, pathOptions).addTo(mapRef.current)
          pathsRef.current[point.id] = path

          // Hide all paths except the active one
          if (!isActive) {
            path.setStyle({ opacity: 0.3 })
          }
        }
      })

      // Add routes if available
      if (routes && routes.length > 0) {
        routes.forEach((route) => {
          if (route.path && route.path.length > 0) {
            const routePath = L.polyline(route.path, {
              ...pathOptions,
              dashArray: "5, 5",
            }).addTo(mapRef.current)

            routePathsRef.current.push(routePath)
          }
        })
      }
    } catch (error) {
      console.error("Error adding markers and paths:", error)
    }
  }, [leaflet, points, activePointId, onMarkerClick, showPaths, pathOptions, customIcon, routes, isMapInitialized])

  // Update paths visibility when active point changes
  useEffect(() => {
    if (!leaflet || !isMapInitialized || !showPaths) return

    Object.entries(pathsRef.current).forEach(([id, path]) => {
      if (id === activePointId) {
        path.setStyle({ opacity: 1 })
      } else {
        path.setStyle({ opacity: 0.3 })
      }
    })
  }, [leaflet, activePointId, showPaths, isMapInitialized])

  return <div ref={mapContainerRef} className="w-full h-full min-h-[400px] relative z-10" />
}

export default function MapComponent(props: MapComponentProps) {
  return (
    <ClientOnly
      fallback={
        <div className="w-full h-full min-h-[400px] bg-gray-100 flex items-center justify-center">
          <div className="text-gray-500">Loading map...</div>
        </div>
      }
    >
      <MapContent {...props} />
    </ClientOnly>
  )
}
