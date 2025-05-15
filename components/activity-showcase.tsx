import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const activities = [
  {
    title: "Hiking",
    description: "Explore well-marked trails through diverse landscapes, from ancient forests to expansive mires.",
    image: "/images/hiking.jpg",
    link: "/activities/hiking",
  },
  {
    title: "Biking",
    description: "Discover the GeoPark on two wheels with routes suitable for all skill levels.",
    image: "/images/biking.webp",
    link: "/activities/biking",
  },
  {
    title: "Skiing",
    description: "Experience the winter wonderland on well-maintained cross-country skiing tracks.",
    image: "/images/skiing.jpg",
    link: "/activities/skiing",
  },
]

export default function ActivityShowcase() {
  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Explore Our Activities</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the many ways to experience Lauhanvuori GeoPark throughout the seasons
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={activity.image || "/placeholder.svg"}
                alt={activity.title}
                fill
                className="object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
              <p className="mb-4">{activity.description}</p>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link href={activity.link}>Explore {activity.title}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
