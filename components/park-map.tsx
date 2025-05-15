"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MapComponent from "@/components/map-component"

const mapPoints = [
  {
    id: "lauhanvuori",
    name: "Lauhanvuori Hill",
    description: "The highest point in western Finland (231m), offering panoramic views of the surrounding landscapes.",
    coordinates: [62.1437, 22.1579], // Actual coordinates for Lauhanvuori
  },
  {
    id: "kauhaneva",
    name: "Kauhaneva Bog",
    description:
      "One of Finland's most impressive raised bog complexes with extensive boardwalks and observation towers.",
    coordinates: [62.2341, 22.4012], // Coordinates for Kauhaneva-Pohjankangas National Park
  },
  {
    id: "katikankanjoni",
    name: "Katikankanjoni Ravine",
    description:
      "A dramatic ravine formed by ancient geological processes, featuring unique vegetation and small waterfalls.",
    coordinates: [62.1921, 22.2154], // Approximate coordinates for Katikankanjoni
  },
  {
    id: "spitaalijarvi",
    name: "Lake Spitaalijärvi",
    description: "A peaceful lake surrounded by pine forests, offering swimming and fishing opportunities.",
    coordinates: [62.1789, 22.0912], // Approximate coordinates for Spitaalijärvi
  },
  {
    id: "visitor-center",
    name: "Visitor Center",
    description: "The main information point with exhibitions, café, and guided tour bookings.",
    coordinates: [62.1456, 22.1734], // Approximate coordinates for the visitor center
  },
]

export default function ParkMap() {
  const [activePoint, setActivePoint] = useState(mapPoints[0].id)

  const handlePointClick = (id: string) => {
    setActivePoint(id)
  }

  const activePointData = mapPoints.find((point) => point.id === activePoint)

  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Explore the GeoPark</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover key locations and attractions within Lauhanvuori GeoPark
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-[4/3] bg-green-100 rounded-lg overflow-hidden">
            <MapComponent
              center={activePointData?.coordinates || [62.1437, 22.1579]}
              zoom={10}
              points={mapPoints}
              activePointId={activePoint}
              onMarkerClick={handlePointClick}
            />
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>{activePointData?.name}</CardTitle>
              <CardDescription>Point of Interest</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{activePointData?.description}</p>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="mt-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="attractions">Key Attractions</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="p-4 border rounded-md mt-2">
              <p className="mb-4">
                Lauhanvuori GeoPark covers an area of approximately 1,300 square kilometers across three regions in
                western Finland. The park features diverse landscapes including:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ancient bedrock dating back 1.9 billion years</li>
                <li>Finland's largest raised bog complexes</li>
                <li>Distinctive landforms shaped by the last Ice Age</li>
                <li>The highest point in western Finland</li>
                <li>Pristine forests and watersheds</li>
              </ul>
            </TabsContent>
            <TabsContent value="attractions" className="p-4 border rounded-md mt-2">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Lauhanvuori Hill</strong> - The highest point in western Finland
                </li>
                <li>
                  <strong>Kauhaneva Bog</strong> - Extensive raised bog with boardwalks
                </li>
                <li>
                  <strong>Katikankanjoni Ravine</strong> - Dramatic geological formation
                </li>
                <li>
                  <strong>Alkkianvuori</strong> - Ancient shorelines from the Baltic Ice Lake
                </li>
                <li>
                  <strong>Hämeenkangas Ridge</strong> - Impressive glaciofluvial formation
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
