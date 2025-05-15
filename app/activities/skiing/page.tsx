import type { Metadata } from "next"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SkiingMap from "@/components/skiing-map"

export const metadata: Metadata = {
  title: "Skiing | Lauhanvuori GeoPark",
  description: "Explore cross-country skiing trails in Lauhanvuori GeoPark",
}

const skiingRoutes = [
  {
    id: "lauhanvuori-track",
    name: "Lauhanvuori Winter Trail",
    difficulty: "Moderate",
    length: "12 km",
    duration: "2-3 hours",
    description:
      "A beautiful winter trail that circles around the Lauhanvuori hill. The track is machine-groomed and suitable for both classic and skating styles. Offers stunning winter views of the snow-covered landscapes.",
    style: "Classic and skating",
    highlights: ["Snow-covered forests", "Scenic viewpoints", "Wildlife tracks"],
    startingPoint: "Lauhanvuori Winter Parking",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "muurahainen-track",
    name: "Muurahainen Forest Loop",
    difficulty: "Easy",
    length: "5 km",
    duration: "1-1.5 hours",
    description:
      "A beginner-friendly loop through the peaceful winter forests. This track is perfect for families and those new to cross-country skiing. The terrain is mostly flat with gentle slopes.",
    style: "Classic",
    highlights: ["Gentle terrain", "Family-friendly", "Rest area with fire pit"],
    startingPoint: "Muurahainen Outdoor Center",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "katikankanjoni-winter",
    name: "Katikankanjoni Winter Route",
    difficulty: "Challenging",
    length: "8 km",
    duration: "2-3 hours",
    description:
      "Experience the dramatic Katikankanjoni ravine in its winter glory. This more challenging route features some steeper sections and is recommended for experienced skiers. The unique winter landscape makes the effort worthwhile.",
    style: "Classic",
    highlights: ["Snow-covered ravine", "Frozen waterfalls", "Challenging terrain"],
    startingPoint: "Katikankanjoni Winter Parking",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function SkiingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Cross-Country Skiing in Lauhanvuori GeoPark</h1>
        <p className="text-xl text-gray-600 max-w-4xl">
          Experience the winter wonderland of Lauhanvuori GeoPark on well-maintained cross-country skiing tracks. From
          easy loops to more challenging routes, our winter trails offer a peaceful way to explore the snow-covered
          landscapes.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Winter Skiing Tracks</h2>
          <p className="mb-6">
            During the winter months (typically December to March, depending on snow conditions), Lauhanvuori GeoPark
            maintains several cross-country skiing tracks that allow visitors to experience the park's unique beauty
            under a blanket of snow.
          </p>
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Cross-country skiing in Lauhanvuori GeoPark"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <SkiingMap />
      </div>

      <Tabs defaultValue={skiingRoutes[0].id} className="mb-12">
        <TabsList className="grid grid-cols-3 mb-8">
          {skiingRoutes.map((route) => (
            <TabsTrigger key={route.id} value={route.id}>
              {route.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {skiingRoutes.map((route) => (
          <TabsContent key={route.id} value={route.id}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src={route.image || "/placeholder.svg"} alt={route.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{route.name}</h3>
                <div className="flex gap-2 mb-4">
                  <Badge className="bg-green-600">{route.difficulty}</Badge>
                  <Badge variant="outline">{route.length}</Badge>
                  <Badge variant="outline">{route.duration}</Badge>
                </div>
                <p className="mb-4">{route.description}</p>
                <p className="mb-4">
                  <strong>Style:</strong> {route.style}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Highlights:</h4>
                  <ul className="list-disc pl-5">
                    {route.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <p>
                  <strong>Starting Point:</strong> {route.startingPoint}
                </p>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Winter Skiing Information</CardTitle>
          <CardDescription>Important information for cross-country skiing in Lauhanvuori GeoPark</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Tracks are typically maintained from December to March, depending on snow conditions</li>
            <li>Check the current track conditions on our website or at visitor centers before heading out</li>
            <li>Dress in layers and be prepared for changing weather conditions</li>
            <li>Carry a small backpack with water, snacks, and extra clothing</li>
            <li>Ski equipment rental is available at several locations throughout the park</li>
            <li>Some tracks have rest areas with fire pits - firewood is provided but bring your own matches</li>
            <li>
              Follow track etiquette: classic skiers use the grooved tracks, skating style skiers use the flat middle
              section
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
