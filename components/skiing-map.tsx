"use client"

import { useState } from "react"
import MapComponent from "@/components/map-component"

const skiTracks = [
  {
    id: "lauhanvuori-track",
    name: "Lauhanvuori Winter Trail",
    description: "A beautiful winter trail around Lauhanvuori hill",
    coordinates: [62.1437, 22.1579],
    path: [
      [62.1437, 22.1579],
      [62.1467, 22.1609],
      [62.1497, 22.1639],
      [62.1527, 22.1609],
      [62.1557, 22.1579],
      [62.1527, 22.1549],
      [62.1497, 22.1519],
      [62.1467, 22.1549],
      [62.1437, 22.1579],
    ],
  },
  {
    id: "muurahainen-track",
    name: "Muurahainen Forest Loop",
    description: "A beginner-friendly loop through winter forests",
    coordinates: [62.1737, 22.2079],
    path: [
      [62.1737, 22.2079],
      [62.1767, 22.2109],
      [62.1797, 22.2139],
      [62.1827, 22.2109],
      [62.1797, 22.2079],
      [62.1767, 22.2049],
      [62.1737, 22.2079],
    ],
  },
  {
    id: "katikankanjoni-winter",
    name: "Katikankanjoni Winter Route",
    description: "Experience the ravine in its winter glory",
    coordinates: [62.1921, 22.2154],
    path: [
      [62.1921, 22.2154],
      [62.1951, 22.2184],
      [62.1981, 22.2214],
      [62.2011, 22.2184],
      [62.2041, 22.2154],
      [62.2011, 22.2124],
      [62.1981, 22.2094],
      [62.1951, 22.2124],
      [62.1921, 22.2154],
    ],
  },
]

export default function SkiingMap() {
  const [activeTrack, setActiveTrack] = useState(skiTracks[0].id)

  const activeTrackData = skiTracks.find((track) => track.id === activeTrack)

  return (
    <div className="relative aspect-[4/3] bg-blue-50 rounded-lg overflow-hidden">
      <MapComponent
        center={activeTrackData?.coordinates || [62.1437, 22.1579]}
        zoom={12}
        points={skiTracks}
        activePointId={activeTrack}
        onMarkerClick={(id) => setActiveTrack(id)}
        showPaths={true}
        pathOptions={{ color: "#2563eb", weight: 4 }}
      />

      {/* Map legend */}
      <div className="absolute bottom-3 left-3 z-[1000] bg-white/90 p-2 rounded-md text-xs">
        <div className="flex items-center mb-1">
          <div className="w-3 h-1 bg-blue-600 mr-2"></div>
          <span>Classic style tracks</span>
        </div>
        <div className="flex items-center mb-1">
          <div className="w-3 h-1 bg-green-600 mr-2 border-b border-dashed border-green-800"></div>
          <span>Skating style tracks</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <span>Rest areas</span>
        </div>
      </div>
    </div>
  )
}
