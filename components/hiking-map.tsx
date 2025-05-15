"use client"

import { useState } from "react"
import MapComponent from "@/components/map-component"

const trailPoints = [
  {
    id: "lauhanvuori-summit",
    name: "Lauhanvuori Summit Trail",
    description: "A gentle climb to the highest point in Western Finland",
    coordinates: [62.1437, 22.1579],
    // Trail path coordinates would be added here in a real implementation
    path: [
      [62.1437, 22.1579],
      [62.1467, 22.1609],
      [62.1497, 22.1639],
      [62.1527, 22.1609],
      [62.1557, 22.1579],
    ],
  },
  {
    id: "kauhaneva-bog",
    name: "Kauhaneva Bog Trail",
    description: "Experience the unique mire ecosystems of the GeoPark",
    coordinates: [62.2341, 22.4012],
    path: [
      [62.2341, 22.4012],
      [62.2371, 22.4042],
      [62.2401, 22.4072],
      [62.2431, 22.4042],
      [62.2461, 22.4012],
    ],
  },
  {
    id: "katikankanjoni",
    name: "Katikankanjoni Ravine Trail",
    description: "Explore the dramatic Katikankanjoni ravine",
    coordinates: [62.1921, 22.2154],
    path: [
      [62.1921, 22.2154],
      [62.1951, 22.2184],
      [62.1981, 22.2214],
      [62.2011, 22.2184],
      [62.2041, 22.2154],
    ],
  },
]

export default function HikingMap() {
  const [activeTrail, setActiveTrail] = useState(trailPoints[0].id)

  const activeTrailData = trailPoints.find((trail) => trail.id === activeTrail)

  return (
    <div className="relative aspect-[4/3] bg-green-100 rounded-lg overflow-hidden">
      <MapComponent
        center={activeTrailData?.coordinates || [62.1437, 22.1579]}
        zoom={12}
        points={trailPoints}
        activePointId={activeTrail}
        onMarkerClick={(id) => setActiveTrail(id)}
        showPaths={true}
      />

      {/* Map legend */}
      <div className="absolute bottom-3 left-3 z-[1000] bg-white/90 p-2 rounded-md text-xs">
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
          <span>Easy trails</span>
        </div>
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <span>Moderate trails</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <span>Challenging trails</span>
        </div>
      </div>
    </div>
  )
}
