import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Activities | Lauhanvuori GeoPark",
  description: "Explore hiking, biking, and skiing activities in Lauhanvuori GeoPark",
}

const activities = [
  {
    title: "Hiking",
    description: "Explore the diverse landscapes of Lauhanvuori GeoPark on foot through well-marked trails.",
    image: "/images/hiking.jpg",
    link: "/activities/hiking",
  },
  {
    title: "Biking",
    description: "Discover the park's natural beauty on two wheels with trails suitable for all skill levels.",
    image: "/images/biking.webp",
    link: "/activities/biking",
  },
  {
    title: "Skiing",
    description: "Experience the winter wonderland with cross-country skiing on maintained tracks.",
    image: "/images/skiing.jpg",
    link: "/activities/skiing",
  },
]

export default function ActivitiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Activities in Lauhanvuori GeoPark</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the many ways to experience the natural wonders of Lauhanvuori GeoPark throughout the seasons.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {activities.map((activity) => (
          <Card key={activity.title} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{activity.title}</CardTitle>
              <CardDescription>{activity.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link href={activity.link}>Explore {activity.title}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
