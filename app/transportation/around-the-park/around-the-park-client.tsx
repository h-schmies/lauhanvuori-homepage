"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Bike, Leaf } from "lucide-react"
import BookingDialog from "@/components/booking-dialog"

const ebikeStations = [
    {
        id: "visitor-center",
        name: "Lauhanvuori Visitor Center",
        bikes: 10,
        coordinates: "62.1456, 22.1734",
        hours: "9:00 - 18:00 daily (May-September)",
        facilities: ["Charging station", "Repair tools", "Information desk", "Restrooms"],
        nearbyAttractions: ["Lauhanvuori Summit", "Nature exhibition", "Café"],
        image: "/placeholder.svg?key=ls6io",
    },
    {
        id: "kauhanevan-center",
        name: "Kauhaneva Information Point",
        bikes: 6,
        coordinates: "62.2341, 22.4012",
        hours: "10:00 - 17:00 daily (May-September)",
        facilities: ["Charging station", "Basic repair tools", "Information boards"],
        nearbyAttractions: ["Kauhaneva Bog", "Birdwatching tower", "Hiking trails"],
        image: "/placeholder.svg?key=yxn1a",
    },
    {
        id: "hotel-hirvikoski",
        name: "Hotel Hirvikoski",
        bikes: 8,
        coordinates: "62.1921, 22.2154",
        hours: "8:00 - 20:00 daily (year-round)",
        facilities: ["Charging station", "Repair service", "Accommodation", "Restaurant"],
        nearbyAttractions: ["Katikankanjoni Ravine", "Hirvikoski Rapids", "Local crafts shop"],
        image: "/placeholder.svg?height=300&width=500&query=hotel with e-bikes",
    },
    {
        id: "geopark-gateway",
        name: "GeoPark Gateway Center",
        bikes: 12,
        coordinates: "62.1637, 22.3012",
        hours: "8:00 - 19:00 daily (year-round)",
        facilities: ["Charging station", "Full repair service", "Information center", "Café", "Shop"],
        nearbyAttractions: ["Geological exhibition", "Local products market", "Tour booking"],
        image: "/placeholder.svg?height=300&width=500&query=modern visitor center",
    },
]

const electricQuads = [
    {
        id: "standard-quad",
        name: "Standard Electric Quad",
        description:
            "Perfect for individuals or couples wanting to explore the park's main trails. Easy to operate with automatic transmission.",
        capacity: "1-2 persons",
        range: "Up to 60 km on a single charge",
        features: ["Automatic transmission", "GPS navigation", "Storage compartment", "USB charging port"],
        restrictions: "Minimum age: 18 years with valid driver's license",
        priceHourly: 35,
        priceHalfDay: 85,
        priceFullDay: 150,
        image: "/placeholder.svg?height=300&width=500&query=electric quad bike in forest",
    },
    {
        id: "family-quad",
        name: "Family Electric Quad",
        description:
            "Larger model suitable for families with children. Features comfortable seating and enhanced safety features.",
        capacity: "2 adults + 2 children",
        range: "Up to 50 km on a single charge",
        features: [
            "Automatic transmission",
            "GPS navigation",
            "Child safety harnesses",
            "Increased storage space",
            "Adjustable seats",
        ],
        restrictions: "Minimum age: 21 years with valid driver's license, 3+ years driving experience",
        priceHourly: 45,
        priceHalfDay: 110,
        priceFullDay: 190,
        image: "/placeholder.svg?height=300&width=500&query=family electric quad vehicle",
    },
    {
        id: "adventure-quad",
        name: "Adventure Electric Quad",
        description:
            "High-performance model for experienced riders wanting to explore more challenging terrain. Features enhanced suspension and power.",
        capacity: "1-2 persons",
        range: "Up to 70 km on a single charge",
        features: [
            "Selectable driving modes",
            "Advanced suspension",
            "Off-road tires",
            "Digital dashboard",
            "Action camera mount",
        ],
        restrictions: "Minimum age: 21 years with valid driver's license, previous off-road experience required",
        priceHourly: 55,
        priceHalfDay: 130,
        priceFullDay: 220,
        image: "/placeholder.svg?height=300&width=500&query=adventure quad bike on trail",
    },
]

export default function AroundTheParkClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false)
    const [selectedVehicle, setSelectedVehicle] = useState<any>(null)
    const [bookingType, setBookingType] = useState<"e-bike" | "quad">("e-bike")
    const [selectedStation, setSelectedStation] = useState<any>(null)

    const handleBookEBike = (station: any) => {
        setBookingType("e-bike")
        setSelectedStation(station)
        setSelectedVehicle({
            name: "E-Bike",
            priceHourly: 10,
            priceHalfDay: 25,
            priceFullDay: 40,
        })
        setIsBookingOpen(true)
    }

    const handleBookQuad = (quad: any) => {
        setBookingType("quad")
        setSelectedVehicle(quad)
        setSelectedStation(null)
        setIsBookingOpen(true)
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">Exploring Around Lauhanvuori GeoPark</h1>
                <p className="text-xl text-gray-600 max-w-4xl">
                    Discover eco-friendly transportation options for exploring Lauhanvuori GeoPark. Our electric vehicles allow
                    you to experience the natural beauty of the park while minimizing environmental impact.
                </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                        <Leaf className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl font-bold text-green-800 mb-2">Sustainable Exploration</h2>
                        <p className="text-green-700">
                            Our electric transportation options produce zero direct emissions, helping to preserve the pristine
                            environment of Lauhanvuori GeoPark. By choosing electric mobility, you're contributing to our
                            sustainability efforts while enjoying a quiet, immersive experience in nature.
                        </p>
                    </div>
                </div>
            </div>

            <Tabs defaultValue="e-bikes" className="mb-12">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="e-bikes" className="flex items-center gap-2">
                        <Bike className="h-4 w-4" />
                        E-Bike Rental System
                    </TabsTrigger>
                    <TabsTrigger value="electric-quads" className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Electric Quad Rentals
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="e-bikes">
                    <div className="space-y-8">
                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">E-Bike Rental System</h3>
                                <p className="mb-4">
                                    Our e-bike rental system offers a sustainable and enjoyable way to explore Lauhanvuori GeoPark. With
                                    multiple rental and return stations located throughout the park, you can easily plan one-way journeys
                                    or circular routes.
                                </p>
                                <p className="mb-4">
                                    The e-bikes are equipped with powerful batteries that can cover distances of up to 70km on a single
                                    charge, making them perfect for exploring the park's vast landscapes. Each bike comes with a basket or
                                    pannier for carrying personal items, a phone holder with USB charging, and a digital map display.
                                </p>
                                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                                    <h4 className="font-bold mb-2">How the E-Bike System Works</h4>
                                    <ol className="list-decimal pl-5 space-y-2">
                                        <li>Book your e-bike online or at any rental station</li>
                                        <li>Pay the rental fee (€10/hour, €25/half-day, €40/full day)</li>
                                        <li>Receive your e-bike and safety equipment</li>
                                        <li>Enjoy your ride through the GeoPark</li>
                                        <li>Return the e-bike to any station in the network</li>
                                    </ol>
                                </div>
                                <div className="relative aspect-video rounded-lg overflow-hidden">
                                    <Image
                                        src="/placeholder.svg?height=400&width=600&query=person riding e-bike on forest trail"
                                        alt="E-bike rental in Lauhanvuori GeoPark"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                    E-Bike Station Map
                                    <br />
                                    (Interactive map would be displayed here)
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">E-Bike Stations</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {ebikeStations.map((station) => (
                                <Card key={station.id} className="overflow-hidden">
                                    <div className="relative h-48">
                                        <Image src={station.image || "/placeholder.svg"} alt={station.name} fill className="object-cover" />
                                        <Badge className="absolute top-2 right-2 bg-green-600">{station.bikes} e-bikes available</Badge>
                                    </div>
                                    <CardHeader>
                                        <CardTitle>{station.name}</CardTitle>
                                        <CardDescription className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            {station.coordinates}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <div>
                                                <span className="font-medium">Hours:</span> {station.hours}
                                            </div>
                                            <div>
                                                <span className="font-medium">Facilities:</span>
                                                <div className="flex flex-wrap gap-1 mt-1">
                                                    {station.facilities.map((facility, i) => (
                                                        <Badge key={i} variant="outline" className="text-xs">
                                                            {facility}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <span className="font-medium">Nearby Attractions:</span>
                                                <ul className="list-disc pl-5 mt-1 text-sm">
                                                    {station.nearbyAttractions.map((attraction, i) => (
                                                        <li key={i}>{attraction}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => handleBookEBike(station)}>
                                            Book E-Bikes
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="electric-quads">
                    <div className="space-y-8">
                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Electric Quad Rentals</h3>
                                <p className="mb-4">
                                    Experience the GeoPark from a different perspective with our electric quad rentals. These silent,
                                    eco-friendly vehicles allow you to cover more ground and access areas that would be challenging on
                                    foot, all while minimizing environmental impact.
                                </p>
                                <p className="mb-4">
                                    Our electric quads are easy to operate and come with comprehensive safety instructions. Each vehicle
                                    is equipped with GPS navigation pre-loaded with approved routes to ensure you stay on designated
                                    trails and protect sensitive natural areas.
                                </p>
                                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                                    <h4 className="font-bold mb-2">Electric Quad Rental Information</h4>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>All rentals include safety equipment, basic training, and route maps</li>
                                        <li>Advance booking is strongly recommended, especially during peak season</li>
                                        <li>Valid driver's license required for all operators</li>
                                        <li>Rentals available from Lauhanvuori Visitor Center and GeoPark Gateway Center</li>
                                        <li>Guided tours available for those who prefer an accompanied experience</li>
                                    </ul>
                                </div>
                                <div className="relative aspect-video rounded-lg overflow-hidden">
                                    <Image
                                        src="/placeholder.svg?height=400&width=600&query=electric quad vehicles in nature"
                                        alt="Electric quad rentals in Lauhanvuori GeoPark"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                    Electric Quad Routes Map
                                    <br />
                                    (Interactive map would be displayed here)
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Available Electric Quads</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {electricQuads.map((quad) => (
                                <Card key={quad.id} className="overflow-hidden">
                                    <div className="relative h-48">
                                        <Image src={quad.image || "/placeholder.svg"} alt={quad.name} fill className="object-cover" />
                                    </div>
                                    <CardHeader>
                                        <CardTitle>{quad.name}</CardTitle>
                                        <CardDescription>{quad.capacity}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="mb-3 text-sm">{quad.description}</p>
                                        <div className="space-y-3 text-sm">
                                            <div>
                                                <span className="font-medium">Range:</span> {quad.range}
                                            </div>
                                            <div>
                                                <span className="font-medium">Features:</span>
                                                <ul className="list-disc pl-5 mt-1">
                                                    {quad.features.map((feature, i) => (
                                                        <li key={i}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <span className="font-medium">Pricing:</span>
                                                <ul className="list-disc pl-5 mt-1">
                                                    <li>€{quad.priceHourly}/hour</li>
                                                    <li>€{quad.priceHalfDay}/half-day (4 hours)</li>
                                                    <li>€{quad.priceFullDay}/full-day (8 hours)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => handleBookQuad(quad)}>
                                            Book This Quad
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </TabsContent>
            </Tabs>

            <BookingDialog
                open={isBookingOpen}
                onOpenChange={setIsBookingOpen}
                vehicle={selectedVehicle}
                station={selectedStation}
                type={bookingType}
            />
        </div>
    )
}
