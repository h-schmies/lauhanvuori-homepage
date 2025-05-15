"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Rating from "@/components/rating"

const accommodations = [
  {
    id: "hotel-hirvikoski",
    name: "Hotel Hirvikoski",
    type: "Hotel",
    description:
      "A comfortable hotel located near the Hirvikoski rapids with modern rooms and a restaurant serving local cuisine.",
    location: "Hirvikoskentie 225, Kauhajoki",
    contact: "+358 40 123 4567",
    image: "/images/hotel-hirvikoski.jpg",
    rating: 4.5,
    totalRatings: 128,
  },
  {
    id: "lakeside-cabins",
    name: "Lakeside Cabins",
    type: "Cabins",
    description: "Traditional Finnish cabins on the shores of Lake Spitaalijärvi with private saunas and rowing boats.",
    location: "Järventie 45, Isojoki",
    contact: "+358 40 765 4321",
    image: "/images/lakeside-cabins.jpg",
    rating: 4.8,
    totalRatings: 96,
  },
  {
    id: "geopark-guesthouse",
    name: "GeoPark Guesthouse",
    type: "Guesthouse",
    description:
      "A charming guesthouse in a renovated traditional Finnish building with easy access to main attractions.",
    location: "Puistotie 10, Kauhajoki",
    contact: "+358 40 987 6543",
    image: "/images/geopark-guesthouse.jpg",
    rating: 4.3,
    totalRatings: 75,
  },
]

export default function AccommodationShowcase() {
  const [accommodationRatings, setAccommodationRatings] = useState(
    accommodations.map((acc) => ({ id: acc.id, rating: acc.rating, totalRatings: acc.totalRatings })),
  )

  const handleRatingSubmit = (id: string, newRating: number) => {
    setAccommodationRatings((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          // Calculate new average rating
          const newTotalRatings = item.totalRatings + 1
          const newAvgRating = (item.rating * item.totalRatings + newRating) / newTotalRatings
          return {
            ...item,
            rating: newAvgRating,
            totalRatings: newTotalRatings,
          }
        }
        return item
      }),
    )
  }

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Where to Stay</h2>
          <p className="text-xl text-gray-600 max-w-3xl">Find comfortable accommodations for your GeoPark adventure</p>
        </div>
        <Button asChild variant="outline" className="hidden md:flex">
          <Link href="/accommodation" className="flex items-center gap-2">
            View all accommodations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {accommodations.map((accommodation, index) => {
          const currentRating = accommodationRatings.find((r) => r.id === accommodation.id)

          return (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image
                  src={accommodation.image || "/placeholder.svg"}
                  alt={accommodation.name}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-300"
                />
                <Badge className="absolute top-2 right-2 bg-green-600">{accommodation.type}</Badge>
              </div>
              <CardContent className="pt-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{accommodation.name}</h3>
                <Rating
                  initialRating={currentRating?.rating || 0}
                  totalRatings={currentRating?.totalRatings || 0}
                  onRatingSubmit={(rating) => handleRatingSubmit(accommodation.id, rating)}
                  className="mb-3"
                />
                <p className="mb-4 text-gray-700">{accommodation.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>{accommodation.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span>{accommodation.contact}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href={`/accommodation#${accommodation.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      {/* New inspiration button */}
      <div className="mt-8 text-center">
        <Button className="bg-green-800 hover:bg-green-900 text-white">
          <Link href={"/itinerary"}>
            I need inspiration
          </Link>
        </Button>
      </div>
      <div>
        <p className="text-center text-gray-600 mt-4 font-bold">
          Not sure where to start?
        </p>
        <p className={"text-center text-gray-600 mt-2"}>
          Check out our pre-planned 7-day itinerary for the best experience in Lauhanvuori
          GeoPark.
        </p>
      </div>

      {/* Existing mobile view button */}
      <div className="mt-8 text-center md:hidden">
        <Button asChild variant="outline">
          <Link href="/accommodation" className="flex items-center gap-2 justify-center">
            View all accommodations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}