import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Bus } from "lucide-react"

export const metadata: Metadata = {
  title: "Transportation | Lauhanvuori GeoPark",
  description: "Transportation options to and around Lauhanvuori GeoPark",
}

export default function TransportationPage() {
  return (
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Transportation</h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            Discover the various ways to travel to and around Lauhanvuori GeoPark. We offer sustainable transportation
            options to help you enjoy the natural beauty while minimizing environmental impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden">
            <div className="relative h-64">
              <Image src="/images/to-the-park.jpg" alt="Transportation to the park" fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bus className="h-5 w-5 text-green-600" />
                To the Park
              </CardTitle>
              <CardDescription>
                Find the best ways to reach Lauhanvuori GeoPark from nearby cities and towns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Learn about public transportation options, parking facilities, and get helpful tips for planning your
                journey to Lauhanvuori GeoPark in a sustainable way.
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Public transportation routes and schedules</li>
                <li>Parking locations and information</li>
                <li>Sustainable travel recommendations</li>
                <li>Accessibility information</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link href="/transportation/to-the-park" className="flex items-center justify-center gap-2">
                  View Transportation Options
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-64">
              <Image
                  src="/images/around-the-park.jpg"
                  alt="Transportation around the park"
                  fill
                  className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-green-600" />
                Around the Park
              </CardTitle>
              <CardDescription>
                Explore transportation options for getting around within Lauhanvuori GeoPark
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Discover eco-friendly ways to explore the park, including our e-bike rental system and electric quad
                rentals. Book your preferred transportation method in advance to ensure availability.
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>E-bike rental stations and routes</li>
                <li>Electric quad booking</li>
                <li>Guided tour transportation</li>
                <li>Accessibility options within the park</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link href="/transportation/around-the-park" className="flex items-center justify-center gap-2">
                  Book Transportation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
  )
}
