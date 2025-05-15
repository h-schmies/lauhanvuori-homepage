"use client"

import { useState } from "react"
import MapComponent from "@/components/map-component"

const bikeRoutes = [
  {
    id: "geopark-circle",
    name: "GeoPark Circle Route",
    description: "A circular route through diverse landscapes",
    coordinates: [62.1637, 22.1779],
    path: [
      [62.1637, 22.1779],
      [62.1737, 22.1879],
      [62.1837, 22.1979],
      [62.1937, 22.1879],
      [62.2037, 22.1779],
      [62.1937, 22.1679],
      [62.1837, 22.1579],
      [62.1737, 22.1679],
      [62.1637, 22.1779],
    ],
  },
  {
    id: "forest-trail",
    name: "Forest Trail Network",
    description: "Network of trails through the forests",
    coordinates: [62.1537, 22.0979],
    path: [
      [62.1537, 22.0979],
      [62.1637, 22.1079],
      [62.1737, 22.1179],
      [62.1637, 22.1279],
      [62.1537, 22.1179],
      [62.1437, 22.1079],
      [62.1537, 22.0979],
    ],
  },
  {
    id: "haapakeidas-route",
    name: "Haapakeidas Mire Route",
    description: "Scenic route around the mire complex",
    coordinates: [62.2141, 22.2512],
    path: [
      [62.2141, 22.2512],
      [62.2241, 22.2612],
      [62.2341, 22.2712],
      [62.2441, 22.2612],
      [62.2341, 22.2512],
      [62.2241, 22.2412],
      [62.2141, 22.2512],
    ],
  },
]

export default function BikingMap() {
  const [activeRoute, setActiveRoute] = useState(bikeRoutes[0].id)

  const activeRouteData = bikeRoutes.find((route) => route.id === activeRoute)

  return (
    <div className="relative aspect-[4/3] bg-green-100 rounded-lg overflow-hidden">
      <MapComponent
        center={activeRouteData?.coordinates || [62.1637, 22.1779]}
        zoom={11}
        points={bikeRoutes}
        activePointId={activeRoute}
        onMarkerClick={(id) => setActiveRoute(id)}
        showPaths={true}
        pathOptions={{ color: "#16a34a", weight: 4 }}
      />

      {/* Map legend */}
      <div className="absolute bottom-3 left-3 z-[1000] bg-white/90 p-2 rounded-md text-xs">
        <div className="flex items-center mb-1">
          <div className="w-3 h-1 bg-green-600 mr-2"></div>
          <span>Paved routes</span>
        </div>
        <div className="flex items-center mb-1">
          <div className="w-3 h-1 bg-yellow-600 mr-2 border-b border-dashed border-yellow-800"></div>
          <span>Gravel routes</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-1 bg-red-500 mr-2 border-b border-dotted border-red-800"></div>
          <span>Forest trails</span>
        </div>
      </div>
    </div>
  )
}
