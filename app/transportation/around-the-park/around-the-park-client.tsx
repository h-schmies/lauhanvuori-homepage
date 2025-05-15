"use client"

import {useState} from "react"
import Image from "next/image"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Leaf} from "lucide-react"
import BookingDialog from "@/components/booking-dialog"

const electricQuads = [
    {
        id: "standard-LauhaCruiser",
        name: "Standard LauhaCruiser",
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
        id: "family-LauhaCruiser",
        name: "Family LauhaCruiser",
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
        id: "adventure-LauhaCruiser",
        name: "Adventure LauhaCruiser",
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
                    Discover eco-friendly transportation options for exploring Lauhanvuori GeoPark. Our electric
                    vehicles allow
                    you to experience the natural beauty of the park while minimizing environmental impact.
                </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                        <Leaf className="h-8 w-8 text-green-600"/>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl font-bold text-green-800 mb-2">Sustainable Exploration</h2>
                        <p className="text-green-700">
                            Our electric transportation options produce zero direct emissions, helping to preserve the
                            pristine
                            environment of Lauhanvuori GeoPark. By choosing electric mobility, you're contributing to
                            our
                            sustainability efforts while enjoying a quiet, immersive experience in nature.
                        </p>
                    </div>
                </div>
            </div>


            <div className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Electric LauhaCruiser rental</h3>
                        <p className="mb-4">
                            Experience the GeoPark from a different perspective with our electric LauhaCruisers. These
                            silent,
                            eco-friendly vehicles allow you to cover more ground and access areas that would be
                            challenging on
                            foot, all while minimizing environmental impact.
                        </p>
                        <p className="mb-4">
                            Our electric LauhaCruisers are easy to operate and come with comprehensive safety instructions. Each
                            vehicle
                            is equipped with GPS navigation pre-loaded with approved routes to ensure you stay on
                            designated
                            trails and protect sensitive natural areas.
                        </p>
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                            <h4 className="font-bold mb-2">LauhaCruiser Rental Information</h4>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>All rentals include safety equipment, basic training, and route maps</li>
                                <li>Advance booking is strongly recommended, especially during peak season</li>
                                <li>Valid driver's license required for all operators</li>
                                <li>Rentals available from Lauhanvuori Visitor Center and GeoPark Gateway Center</li>
                                <li>Guided tours available for those who prefer an accompanied experience</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                            src="/images/lauha-cruiser.jpg"
                            alt="LauhaCruiser rentals in Lauhanvuori GeoPark"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">Available LauhaCruisers</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {electricQuads.map((quad) => (
                        <Card key={quad.id} className="overflow-hidden">
                            <div className="relative h-48">
                                <Image src={quad.image || "/placeholder.svg"} alt={quad.name} fill
                                       className="object-cover"/>
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
                                <Button className="w-full bg-green-600 hover:bg-green-700"
                                        onClick={() => handleBookQuad(quad)}>
                                    Book This LauhaCruiser
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

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
