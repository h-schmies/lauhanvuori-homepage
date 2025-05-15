"use client"

import { useState } from "react"
import MapComponent from "@/components/map-component"

const bikeStations = [
  {
    id: "visitor-center",
    name: "Lauhanvuori Visitor Center",
    description: "Main visitor center with 10 e-bikes available",
    coordinates: [62.1456, 22.1734],
  },
  {
    id: "kauhanevan-center",
    name: "Kauhaneva Information Point",
    description: "Information point with 6 e-bikes available",
    coordinates: [62.2341, 22.4012],
  },
  {
    id: "hotel-hirvikoski",
    name: "Hotel Hirvikoski",
    description: "Hotel with 8 e-bikes available",
    coordinates: [62.1921, 22.2154],
  },
  {
    id: "lakeside-cabins",
    name: "Lakeside Cabins",
    description: "Cabins with 5 e-bikes available",
    coordinates: [62.1789, 22.0912],
  },
  {
    id: "geopark-gateway",
    name: "GeoPark Gateway Center",
    description: "Gateway center with 12 e-bikes available",
    coordinates: [62.1637, 22.3012],
  },
]

// Routes between stations
const bikeRoutes = [
  {
    from: "visitor-center",
    to: "kauhanevan-center",
    path: [
      [62.1456, 22.1734],
      [62.1656, 22.2234],
      [62.1856, 22.2734],
      [62.2056, 22.3234],
      [62.2341, 22.4012],
    ],
  },
  {
    from: "visitor-center",
    to: "hotel-hirvikoski",
    path: [
      [62.1456, 22.1734],
      [62.1556, 22.1834],
      [62.1656, 22.1934],
      [62.1756, 22.2034],
      [62.1921, 22.2154],
    ],
  },
  {
    from: "visitor-center",
    to: "lakeside-cabins",
    path: [
      [62.1456, 22.1734],
      [62.1556, 22.1534],
      [62.1656, 22.1334],
      [62.1756, 22.1134],
      [62.1789, 22.0912],
    ],
  },
  {
    from: "visitor-center",
    to: "geopark-gateway",
    path: [
      [62.1456, 22.1734],
      [62.1506, 22.2034],
      [62.1556, 22.2334],
      [62.1606, 22.2634],
      [62.1637, 22.3012],
    ],
  },
]

export default function EBikeMap() {
  const [activeStation, setActiveStation] = useState(bikeStations[0].id)

  const activeStationData = bikeStations.find((station) => station.id === activeStation)

  return (
    <div className="relative aspect-[4/3] bg-green-100 rounded-lg overflow-hidden">
      <MapComponent
        center={activeStationData?.coordinates || [62.1456, 22.1734]}
        zoom={10}
        points={bikeStations}
        activePointId={activeStation}
        onMarkerClick={(id) => setActiveStation(id)}
        showPaths={true}
        pathOptions={{ color: "#16a34a", weight: 3, dashArray: "5, 5" }}
        customIcon={{
          html: '<div class="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold">E</div>',
          iconSize: [24, 24],
          iconAnchor: [12, 12],
        }}
        routes={bikeRoutes}
      />

      {/* Map legend */}
      <div className="absolute bottom-3 left-3 z-[1000] bg-white/90 p-2 rounded-md text-xs">
        <div className="flex items-center mb-1">
          <div className="w-4 h-4 rounded-full bg-green-600 flex items-center justify-center mr-2">
            <span className="text-white text-[8px] font-bold">E</span>
          </div>
          <span>E-bike station</span>
        </div>
        <div className="flex items-center mb-1">
          <div className="w-3 h-1 bg-green-600 mr-2"></div>
          <span>Recommended routes</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-1 bg-gray-400 mr-2 border-b border-dashed border-gray-600"></div>
          <span>Alternative routes</span>
        </div>
      </div>
    </div>
  )
}
