import type { Metadata } from "next"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import HikingMap from "@/components/hiking-map"

export const metadata: Metadata = {
  title: "Hiking | Lauhanvuori GeoPark",
  description: "Explore hiking trails and routes in Lauhanvuori GeoPark",
}

const hikingRoutes = [
  {
    id: "lauhanvuori-summit",
    name: "Lauhanvuori Summit Trail",
    difficulty: "Easy",
    length: "5.2 km",
    duration: "2-3 hours",
    description:
      "A gentle climb to the highest point in Western Finland, offering panoramic views of the surrounding landscapes. The trail passes through old-growth forests and unique geological formations.",
    highlights: ["Summit viewpoint", "Ancient rock formations", "Diverse forest ecosystems"],
    startingPoint: "Lauhanvuori Visitor Center",
    image: "/images/lauhanvuori-summit.webp",
    color: "bg-green-600",
  },
  {
    id: "kauhaneva-bog",
    name: "Kauhaneva Bog Trail",
    difficulty: "Moderate",
    length: "7.8 km",
    duration: "3-4 hours",
    description:
      "Experience the unique mire ecosystems of the GeoPark on this boardwalk trail through one of Finland's most impressive bog landscapes. Great for birdwatching and experiencing the open mire views.",
    highlights: ["Extensive boardwalks", "Bird observation tower", "Pristine bog landscape"],
    startingPoint: "Kauhaneva Parking Area",
    image: "/images/kauhaneva-bog.webp",
    color: "bg-yellow-600",
  },
  {
    id: "katikankanjoni",
    name: "Katikankanjoni Ravine Trail",
    difficulty: "Challenging",
    length: "4.5 km",
    duration: "2-3 hours",
    description:
      "Explore the dramatic Katikankanjoni ravine, formed by ancient geological processes. The trail features steep sections and requires good footwear, but rewards hikers with unique landscapes and lush vegetation.",
    highlights: ["Deep ravine views", "Small waterfalls", "Rich biodiversity"],
    startingPoint: "Katikankanjoni Trailhead",
    image: "/images/katikankanjoni.jpeg",
    color: "bg-red-600",
  },
]

export default function HikingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Hiking in Lauhanvuori GeoPark</h1>
        <p className="text-xl text-gray-600 max-w-4xl">
          Discover the diverse landscapes of Lauhanvuori GeoPark on foot. From ancient mountains to expansive mires, our
          well-maintained trails offer experiences for hikers of all levels.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Featured Hiking Routes</h2>
          <p className="mb-6">
            Lauhanvuori GeoPark offers a variety of hiking trails that showcase the region's unique geological features,
            diverse ecosystems, and cultural heritage. All trails are marked with color-coded signs and maintained
            regularly.
          </p>
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src="/images/hiking_family.webp"
              alt="Hiking in Lauhanvuori GeoPark"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <HikingMap />
      </div>

      <Tabs defaultValue={hikingRoutes[0].id} className="mb-12">
        <TabsList className="grid w-full h-full grid-cols-1 md:grid-cols-3">
          {hikingRoutes.map((route) => (
            <TabsTrigger key={route.id} value={route.id}>
              {route.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {hikingRoutes.map((route) => (
          <TabsContent key={route.id} value={route.id} className={"pt-4"}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src={route.image || "/placeholder.svg"} alt={route.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{route.name}</h3>
                <div className="flex gap-2 mb-4">
                  <Badge className={route.color}>{route.difficulty}</Badge>
                  <Badge variant="outline">{route.length}</Badge>
                  <Badge variant="outline">{route.duration}</Badge>
                </div>
                <p className="mb-4">{route.description}</p>
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
          <CardTitle>Hiking Tips</CardTitle>
          <CardDescription>Make the most of your hiking experience in Lauhanvuori GeoPark</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Check weather conditions before starting your hike</li>
            <li>Wear appropriate footwear and clothing</li>
            <li>Carry sufficient water and snacks</li>
            <li>Follow marked trails and respect nature</li>
            <li>Take all trash with you when leaving</li>
            <li>Download trail maps before your visit as mobile coverage may be limited in some areas</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
