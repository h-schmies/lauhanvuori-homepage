"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Globe, Utensils, ShoppingBag } from "lucide-react"
import Rating from "@/components/rating"

const accommodations = [
  {
    id: "hotel-hirvikoski",
    name: "Hotel Hirvikoski",
    type: "Hotel",
    description:
      "A comfortable hotel located near the Hirvikoski rapids. Offers modern rooms, a restaurant serving local cuisine, and easy access to hiking trails.",
    amenities: ["Restaurant", "Free WiFi", "Sauna", "E-bike rental", "Meeting rooms"],
    location: "Hirvikoskentie 225, Kauhajoki",
    contact: "+358 40 123 4567",
    website: "www.hotelhirvikoski.fi",
    image: "/images/hotel-hirvikoski.jpg",
    rating: 4.5,
    totalRatings: 128,
  },
  {
    id: "lakeside-cabins",
    name: "Lakeside Cabins",
    type: "Cabins",
    description:
      "Traditional Finnish cabins on the shores of Lake Spitaalijärvi. Each cabin has its own sauna and rowing boat. Perfect for those seeking a peaceful nature experience.",
    amenities: ["Private sauna", "Fully equipped kitchen", "Rowing boat", "Fishing equipment", "Fireplace"],
    location: "Järventie 45, Isojoki",
    contact: "+358 40 765 4321",
    website: "www.lakesidecabins.fi",
    image: "/images/lakeside-cabins.jpg",
    rating: 4.8,
    totalRatings: 96,
  },
  {
    id: "geopark-guesthouse",
    name: "GeoPark Guesthouse",
    type: "Guesthouse",
    description:
      "A charming guesthouse in a renovated traditional Finnish building. Located in the heart of the GeoPark with easy access to main attractions.",
    amenities: ["Shared kitchen", "Bicycle storage", "Garden", "Barbecue area", "Laundry facilities"],
    location: "Puistotie 10, Kauhajoki",
    contact: "+358 40 987 6543",
    website: "www.geoparkguesthouse.fi",
    image: "/images/geopark-guesthouse.jpg",
    rating: 4.3,
    totalRatings: 75,
  },
  {
    id: "wilderness-glamping",
    name: "Wilderness Glamping",
    type: "Glamping",
    description:
      "Experience luxury camping in the heart of nature. Comfortable tents with proper beds and amenities, situated in a peaceful forest setting.",
    amenities: ["Comfortable beds", "Heating", "Shared bathroom facilities", "Campfire area", "Breakfast included"],
    location: "Metsätie 78, Isojoki",
    contact: "+358 40 246 8135",
    website: "www.wildernessglamping.fi",
    image: "/images/wilderness-glamping.jpg",
    rating: 4.6,
    totalRatings: 52,
  },
]

const restaurants = [
  {
    id: "mire-view",
    name: "Mire View Restaurant",
    type: "Finnish cuisine",
    description:
      "Restaurant specializing in local Finnish cuisine with ingredients sourced from the GeoPark region. Enjoy panoramic views of the mire landscapes while dining.",
    specialties: ["Wild game", "Forest mushrooms", "Berries", "Freshwater fish"],
    location: "Näkötornintie 15, Kauhajoki",
    contact: "+358 40 111 2222",
    hours: "11:00-21:00 daily (May-September), 12:00-20:00 (October-April)",
    image: "/images/mire-view.jpg",
    rating: 4.4,
    totalRatings: 87,
  },
  {
    id: "forest-cafe",
    name: "Forest Café",
    type: "Café",
    description:
      "Cozy café located near popular hiking trails. Perfect for a coffee break during your outdoor activities. Serves homemade pastries and light lunches.",
    specialties: ["Cinnamon buns", "Wild berry pies", "Sandwiches", "Local coffee blends"],
    location: "Polkutie 3, Isojoki",
    contact: "+358 40 333 4444",
    hours: "9:00-17:00 daily (May-September), 10:00-16:00 weekends only (October-April)",
    image: "/images/forest-cafe.jpg",
    rating: 4.7,
    totalRatings: 112,
  },
  {
    id: "lauha-bistro",
    name: "Lauha Bistro",
    type: "Modern Finnish",
    description:
      "Modern bistro offering contemporary Finnish cuisine with international influences. Located in the GeoPark Gateway Center.",
    specialties: ["Seasonal menu", "Craft beers", "Vegetarian options", "Local cheeses"],
    location: "Keskustie 8, Kauhajoki",
    contact: "+358 40 555 6666",
    hours: "12:00-22:00 Tuesday-Saturday, 12:00-18:00 Sunday, Closed Monday",
    image: "/images/lauha-bistro.jpg",
    rating: 4.2,
    totalRatings: 64,
  },
]

const services = [
  {
    category: "Supermarkets",
    places: [
      {
        id: "k-market",
        name: "K-Market Kauhajoki",
        location: "Topeekankatu 5, Kauhajoki",
        hours: "8:00-21:00 Mon-Sat, 10:00-18:00 Sun",
        description: "Full-service supermarket with groceries, local products, and basic camping supplies.",
        rating: 4.1,
        totalRatings: 43,
      },
      {
        id: "s-market",
        name: "S-Market Isojoki",
        location: "Kristiinantie 2, Isojoki",
        hours: "8:00-20:00 Mon-Sat, 11:00-18:00 Sun",
        description: "Supermarket with fresh produce, prepared foods, and outdoor equipment.",
        rating: 4.0,
        totalRatings: 38,
      },
    ],
  },
  {
    category: "Outdoor Equipment",
    places: [
      {
        id: "geopark-outfitters",
        name: "GeoPark Outfitters",
        location: "Puistotie 12, Kauhajoki",
        hours: "10:00-18:00 Mon-Fri, 10:00-16:00 Sat, Closed Sun",
        description:
          "Specialized outdoor store with hiking, biking, and camping equipment. Also offers rentals and repair services.",
        rating: 4.6,
        totalRatings: 72,
      },
      {
        id: "nature-sports",
        name: "Nature Sports",
        location: "Kauppatie 8, Isojoki",
        hours: "11:00-17:00 Mon-Fri, 10:00-15:00 Sat, Closed Sun",
        description: "Small shop with basic outdoor gear, maps, and local guidebooks.",
        rating: 4.2,
        totalRatings: 31,
      },
    ],
  },
  {
    category: "Visitor Centers",
    places: [
      {
        id: "lauhanvuori-center",
        name: "Lauhanvuori Visitor Center",
        location: "Lauhanvuorentie 645, Isojoki",
        hours: "9:00-17:00 daily (May-September), 10:00-16:00 Wed-Sun (October-April)",
        description: "Main visitor center with exhibitions, information services, café, and souvenir shop.",
        rating: 4.8,
        totalRatings: 156,
      },
      {
        id: "geopark-gateway",
        name: "GeoPark Gateway Center",
        location: "Keskustie 10, Kauhajoki",
        hours: "9:00-18:00 Mon-Sat, 11:00-16:00 Sun",
        description:
          "Information center with interactive geological exhibitions, tour booking services, and local product shop.",
        rating: 4.5,
        totalRatings: 98,
      },
    ],
  },
]

export default function AccommodationClientPage() {
  const [accommodationRatings, setAccommodationRatings] = useState(
    accommodations.map((acc) => ({ id: acc.id, rating: acc.rating, totalRatings: acc.totalRatings })),
  )

  const [restaurantRatings, setRestaurantRatings] = useState(
    restaurants.map((rest) => ({ id: rest.id, rating: rest.rating, totalRatings: rest.totalRatings })),
  )

  const [serviceRatings, setServiceRatings] = useState(
    services.flatMap((category) =>
      category.places.map((place) => ({
        id: place.id,
        rating: place.rating,
        totalRatings: place.totalRatings,
      })),
    ),
  )

  const handleAccommodationRating = (id: string, newRating: number) => {
    setAccommodationRatings((prev) =>
      prev.map((item) => {
        if (item.id === id) {
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

  const handleRestaurantRating = (id: string, newRating: number) => {
    setRestaurantRatings((prev) =>
      prev.map((item) => {
        if (item.id === id) {
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

  const handleServiceRating = (id: string, newRating: number) => {
    setServiceRatings((prev) =>
      prev.map((item) => {
        if (item.id === id) {
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
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Accommodation & Services</h1>
        <p className="text-xl text-gray-600 max-w-4xl">
          Find comfortable places to stay, delicious local cuisine, and essential services during your visit to
          Lauhanvuori GeoPark.
        </p>
      </div>

      <Tabs defaultValue="accommodation" className="mb-16">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
          <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
        </TabsList>

        <TabsContent value="accommodation">
          <div className="grid md:grid-cols-2 gap-8">
            {accommodations.map((accommodation, index) => {
              const currentRating = accommodationRatings.find((r) => r.id === accommodation.id)

              return (
                <Card key={index} className="overflow-hidden" id={accommodation.id}>
                  <div className="relative h-48">
                    <Image
                      src={accommodation.image || "/placeholder.svg"}
                      alt={accommodation.name}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-green-600">{accommodation.type}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>{accommodation.name}</CardTitle>
                    <CardDescription>{accommodation.description}</CardDescription>
                    <Rating
                      initialRating={currentRating?.rating || 0}
                      totalRatings={currentRating?.totalRatings || 0}
                      onRatingSubmit={(rating) => handleAccommodationRating(accommodation.id, rating)}
                      className="mt-2"
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Amenities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {accommodation.amenities.map((amenity, i) => (
                          <Badge key={i} variant="outline">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>{accommodation.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-green-600" />
                        <span>{accommodation.contact}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-green-600" />
                        <span>{accommodation.website}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Visit Website</Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="restaurants">
          <div className="grid md:grid-cols-3 gap-8">
            {restaurants.map((restaurant, index) => {
              const currentRating = restaurantRatings.find((r) => r.id === restaurant.id)

              return (
                <Card key={index} className="overflow-hidden" id={restaurant.id}>
                  <div className="relative h-48">
                    <Image
                      src={restaurant.image || "/placeholder.svg"}
                      alt={restaurant.name}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-green-600">{restaurant.type}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>{restaurant.name}</CardTitle>
                    <CardDescription>{restaurant.description}</CardDescription>
                    <Rating
                      initialRating={currentRating?.rating || 0}
                      totalRatings={currentRating?.totalRatings || 0}
                      onRatingSubmit={(rating) => handleRestaurantRating(restaurant.id, rating)}
                      className="mt-2"
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {restaurant.specialties.map((specialty, i) => (
                          <Badge key={i} variant="outline">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>{restaurant.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-green-600" />
                        <span>{restaurant.contact}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Utensils className="h-5 w-5 text-green-600" />
                        <span>{restaurant.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="services">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  {service.category === "Supermarkets" && <ShoppingBag className="mr-2 h-6 w-6 text-green-600" />}
                  {service.category === "Outdoor Equipment" && <ShoppingBag className="mr-2 h-6 w-6 text-green-600" />}
                  {service.category === "Visitor Centers" && <MapPin className="mr-2 h-6 w-6 text-green-600" />}
                  {service.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.places.map((place, i) => {
                    const currentRating = serviceRatings.find((r) => r.id === place.id)

                    return (
                      <Card key={i} id={place.id}>
                        <CardHeader>
                          <CardTitle>{place.name}</CardTitle>
                          <CardDescription className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                            {place.location}
                          </CardDescription>
                          <Rating
                            initialRating={currentRating?.rating || 0}
                            totalRatings={currentRating?.totalRatings || 0}
                            onRatingSubmit={(rating) => handleServiceRating(place.id, rating)}
                            size="sm"
                            className="mt-2"
                          />
                        </CardHeader>
                        <CardContent>
                          <p className="mb-3">{place.description}</p>
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="font-medium mr-2">Hours:</span> {place.hours}
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-800">Booking Information</h2>
        <p className="mb-4">
          For accommodation bookings, we recommend contacting the properties directly using the information provided
          above. During peak season (June-August), advance reservations are highly recommended.
        </p>
        <p className="mb-4">
          Many accommodations in the GeoPark offer special packages that include activities, meals, and transportation
          options. Ask about these when making your reservation.
        </p>
        <p>
          For assistance with planning your stay or for more accommodation options in the region, please contact the
          GeoPark visitor center at <span className="font-medium">info@lauhanvuorigeopark.fi</span> or call{" "}
          <span className="font-medium">+358 40 777 8888</span>.
        </p>
      </div>
    </div>
  )
}
