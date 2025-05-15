import type { Metadata } from "next"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import BikingMap from "@/components/biking-map"

export const metadata: Metadata = {
  title: "Biking | Lauhanvuori GeoPark",
  description: "Explore biking trails and routes in Lauhanvuori GeoPark",
}

const bikingRoutes = [
  {
    id: "geopark-circle",
    name: "GeoPark Circle Route",
    difficulty: "Moderate",
    length: "45 km",
    duration: "4-6 hours",
    description:
      "This circular route takes you through the diverse landscapes of the GeoPark, connecting several key attractions. Suitable for experienced cyclists with moderate fitness levels.",
    surface: "Mixed (gravel roads, forest paths, some paved sections)",
    highlights: ["Panoramic viewpoints", "Lake Spitaalijärvi", "Ancient shorelines"],
    startingPoint: "Lauhanvuori Visitor Center",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "forest-trail",
    name: "Forest Trail Network",
    difficulty: "Easy to Challenging",
    length: "Various (5-20 km)",
    duration: "1-4 hours",
    description:
      "A network of interconnected trails through the forests of Lauhanvuori, suitable for mountain biking. Trails range from beginner-friendly paths to more technical sections for experienced riders.",
    surface: "Natural forest trails, some technical sections",
    highlights: ["Ancient forest sections", "Small streams", "Wildlife spotting opportunities"],
    startingPoint: "Multiple access points (see map)",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "haapakeidas-route",
    name: "Haapakeidas Mire Route",
    difficulty: "Easy",
    length: "18 km",
    duration: "2-3 hours",
    description:
      "A scenic route around the impressive Haapakeidas mire complex. This mostly flat route offers excellent views of the open bog landscapes and is suitable for families and casual cyclists.",
    surface: "Mostly gravel roads, some paved sections",
    highlights: ["Extensive mire views", "Bird observation points", "Peaceful countryside"],
    startingPoint: "Haapakeidas Parking Area",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function BikingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Biking in Lauhanvuori GeoPark</h1>
        <p className="text-xl text-gray-600 max-w-4xl">
          Explore Lauhanvuori GeoPark on two wheels. From leisurely rides through scenic landscapes to more challenging
          forest trails, the park offers biking experiences for all levels.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Biking Routes</h2>
          <p className="mb-6">
            Lauhanvuori GeoPark features a variety of biking routes that allow you to experience the region's unique
            geological features and natural beauty. Routes are marked with signs and range from easy family rides to
            more challenging trails for experienced cyclists.
          </p>
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Biking in Lauhanvuori GeoPark"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <BikingMap />
      </div>

      <Tabs defaultValue={bikingRoutes[0].id} className="mb-12">
        <TabsList className="grid grid-cols-3 mb-8">
          {bikingRoutes.map((route) => (
            <TabsTrigger key={route.id} value={route.id}>
              {route.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {bikingRoutes.map((route) => (
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
                  <strong>Surface:</strong> {route.surface}
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
          <CardTitle>Biking Tips</CardTitle>
          <CardDescription>Make the most of your biking experience in Lauhanvuori GeoPark</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Check your bike before starting your journey</li>
            <li>Wear a helmet and appropriate clothing</li>
            <li>Carry a repair kit and spare inner tube</li>
            <li>Bring sufficient water and snacks</li>
            <li>Respect other trail users and wildlife</li>
            <li>Download route maps before your visit as mobile coverage may be limited in some areas</li>
            <li>Consider renting an e-bike from our transportation service for longer routes</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
