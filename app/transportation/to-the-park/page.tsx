import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bus, Car, Train, Bike, Leaf } from "lucide-react"

export const metadata: Metadata = {
    title: "To the Park | Transportation | Lauhanvuori GeoPark",
    description: "Information on how to reach Lauhanvuori GeoPark using public transportation, car, or bicycle",
}

const publicTransportOptions = [
    {
        type: "Bus",
        icon: Bus,
        routes: [
            {
                name: "Pori - Kauhajoki",
                schedule: "Daily: 7:30, 10:15, 14:00, 17:45",
                duration: "1h 45min",
                operator: "Western Finland Bus Co.",
                ticketPrice: "€12-18",
                notes: "Stops at Lauhanvuori Visitor Center on request",
                accessibility: "Wheelchair accessible, bike transport available (limited space)",
            },
            {
                name: "Seinäjoki - Isojoki",
                schedule: "Mon-Fri: 8:00, 12:30, 16:45 | Sat-Sun: 9:30, 15:00",
                duration: "1h 30min",
                operator: "Regional Transport Ltd.",
                ticketPrice: "€10-15",
                notes: "Connection to GeoPark Gateway Center",
                accessibility: "Wheelchair accessible",
            },
        ],
    },
    {
        type: "Train + Bus",
        icon: Train,
        routes: [
            {
                name: "Helsinki - Seinäjoki (train) + Seinäjoki - Isojoki (bus)",
                schedule: "Multiple daily connections",
                duration: "4h 30min total",
                operator: "VR (train) + Regional Transport Ltd. (bus)",
                ticketPrice: "€45-75 (combined)",
                notes: "Purchase combined ticket online for discount",
                accessibility: "Fully accessible journey",
            },
            {
                name: "Tampere - Parkano (train) + Parkano - Kauhajoki (bus)",
                schedule: "3-5 daily connections",
                duration: "3h total",
                operator: "VR (train) + Western Finland Bus Co. (bus)",
                ticketPrice: "€35-55 (combined)",
                notes: "Reservation recommended during summer season",
                accessibility: "Wheelchair accessible with assistance",
            },
        ],
    },
]

const parkingLocations = [
    {
        name: "Lauhanvuori Visitor Center Parking",
        coordinates: "62.1456, 22.1734",
        capacity: "80 cars, 5 buses, 10 RVs",
        facilities: ["Electric vehicle charging (4 stations)", "Accessible parking spaces", "Overnight parking allowed"],
        fees: "Free for day visitors, €5/night for overnight parking",
        notes: "Main parking area with direct access to visitor center and main trails",
    },
    {
        name: "Kauhaneva Bog Parking",
        coordinates: "62.2341, 22.4012",
        capacity: "40 cars, 2 buses",
        facilities: ["Accessible parking spaces", "Information boards"],
        fees: "Free",
        notes: "Closest parking to the boardwalk trails through Kauhaneva bog",
    },
    {
        name: "Katikankanjoni Trailhead Parking",
        coordinates: "62.1921, 22.2154",
        capacity: "25 cars",
        facilities: ["Picnic area"],
        fees: "Free",
        notes: "Small parking area with direct access to Katikankanjoni ravine trails",
    },
    {
        name: "GeoPark Gateway Center Parking",
        coordinates: "62.1637, 22.3012",
        capacity: "100 cars, 8 buses, 15 RVs",
        facilities: [
            "Electric vehicle charging (6 stations)",
            "Accessible parking spaces",
            "Overnight parking allowed",
            "Security cameras",
        ],
        fees: "€2/hour, €10/day, €15/night for overnight parking",
        notes: "Large parking facility with amenities and shuttle service to various park locations",
    },
]

export default function ToTheParkPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">Getting to Lauhanvuori GeoPark</h1>
                <p className="text-xl text-gray-600 max-w-4xl">
                    Find comprehensive information on how to reach Lauhanvuori GeoPark using various transportation options. We
                    encourage visitors to consider sustainable travel methods to help preserve our natural environment.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2">
                    <Tabs defaultValue="public-transport" className="mb-12">
                        <TabsList className="grid w-full grid-cols-2 mb-8">
                            <TabsTrigger value="public-transport" className="flex items-center gap-2">
                                <Bus className="h-4 w-4" />
                                Public Transportation
                            </TabsTrigger>
                            <TabsTrigger value="parking" className="flex items-center gap-2">
                                <Car className="h-4 w-4" />
                                Parking Information
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="public-transport">
                            <div className="space-y-8">
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                                    <h3 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                                        <Leaf className="h-5 w-5" />
                                        Sustainable Travel Tip
                                    </h3>
                                    <p className="text-green-700">
                                        Using public transportation to reach Lauhanvuori GeoPark reduces your carbon footprint by up to 70%
                                        compared to traveling alone by car. Consider combining train and bus journeys for the most
                                        environmentally friendly option.
                                    </p>
                                </div>

                                {publicTransportOptions.map((option, index) => (
                                    <div key={index}>
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                            <option.icon className="h-5 w-5 text-green-600" />
                                            {option.type} Options
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {option.routes.map((route, routeIndex) => (
                                                <Card key={routeIndex}>
                                                    <CardHeader>
                                                        <CardTitle>{route.name}</CardTitle>
                                                        <CardDescription>Duration: {route.duration}</CardDescription>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="space-y-3">
                                                            <div>
                                                                <span className="font-medium">Schedule:</span> {route.schedule}
                                                            </div>
                                                            <div>
                                                                <span className="font-medium">Operator:</span> {route.operator}
                                                            </div>
                                                            <div>
                                                                <span className="font-medium">Ticket Price:</span> {route.ticketPrice}
                                                            </div>
                                                            <div>
                                                                <span className="font-medium">Notes:</span> {route.notes}
                                                            </div>
                                                            <div>
                                                                <span className="font-medium">Accessibility:</span> {route.accessibility}
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                <div className="mt-6">
                                    <h3 className="text-xl font-bold mb-4">Additional Information</h3>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>
                                            Tickets can be purchased online through operators' websites or mobile apps for discounted rates.
                                        </li>
                                        <li>
                                            During peak season (June-August), advance booking is recommended for all public transportation.
                                        </li>
                                        <li>
                                            Visitors with mobility requirements should contact operators at least 24 hours in advance to
                                            arrange assistance.
                                        </li>
                                        <li>
                                            For the most up-to-date schedules, please check the operators' websites or contact the GeoPark
                                            visitor center.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="parking">
                            <div className="space-y-8">
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                                    <h3 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                                        <Leaf className="h-5 w-5" />
                                        Sustainable Parking Tip
                                    </h3>
                                    <p className="text-green-700">
                                        If arriving by car, consider carpooling with other visitors to reduce the number of vehicles. Our
                                        parking fees are used to maintain sustainable infrastructure and support conservation efforts within
                                        the GeoPark.
                                    </p>
                                </div>

                                <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                                    <Image
                                        src="/placeholder.svg?key=gid4z"
                                        alt="Map of parking locations in Lauhanvuori GeoPark"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-md text-sm">
                                        <p className="font-medium">Interactive map available at visitor centers</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {parkingLocations.map((location, index) => (
                                        <Card key={index}>
                                            <CardHeader>
                                                <CardTitle>{location.name}</CardTitle>
                                                <CardDescription>Coordinates: {location.coordinates}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="space-y-3">
                                                    <div>
                                                        <span className="font-medium">Capacity:</span> {location.capacity}
                                                    </div>
                                                    <div>
                                                        <span className="font-medium">Facilities:</span>
                                                        <div className="flex flex-wrap gap-2 mt-1">
                                                            {location.facilities.map((facility, i) => (
                                                                <Badge key={i} variant="outline">
                                                                    {facility}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="font-medium">Fees:</span> {location.fees}
                                                    </div>
                                                    <div>
                                                        <span className="font-medium">Notes:</span> {location.notes}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>

                                <div className="mt-6">
                                    <h3 className="text-xl font-bold mb-4">Parking Regulations</h3>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Please park only in designated areas to protect the natural environment.</li>
                                        <li>
                                            Overnight parking is only permitted in specified locations and requires payment of the overnight
                                            fee.
                                        </li>
                                        <li>Electric vehicle charging stations operate on a first-come, first-served basis.</li>
                                        <li>
                                            During peak season (June-August), parking areas may fill up quickly. Consider arriving early or
                                            using public transportation.
                                        </li>
                                        <li>RVs and campervans must use designated spaces only.</li>
                                    </ul>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Leaf className="h-5 w-5 text-green-600" />
                                Sustainable Travel
                            </CardTitle>
                            <CardDescription>
                                Help us preserve the natural beauty of Lauhanvuori GeoPark by choosing eco-friendly transportation
                                options
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="p-3 bg-green-50 rounded-md">
                                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                                        <Bus className="h-4 w-4 text-green-600" />
                                        Public Transportation
                                    </h4>
                                    <p className="text-sm">
                                        Using buses and trains reduces carbon emissions and allows you to enjoy the scenery without the
                                        stress of driving.
                                    </p>
                                </div>

                                <div className="p-3 bg-green-50 rounded-md">
                                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                                        <Bike className="h-4 w-4 text-green-600" />
                                        Cycling
                                    </h4>
                                    <p className="text-sm">
                                        For nearby visitors, cycling to the park is a zero-emission option that also provides a great
                                        warm-up for your adventure.
                                    </p>
                                </div>

                                <div className="p-3 bg-green-50 rounded-md">
                                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                                        <Car className="h-4 w-4 text-green-600" />
                                        Carpooling
                                    </h4>
                                    <p className="text-sm">
                                        If driving is necessary, share your journey with others. Check our social media groups for
                                        carpooling opportunities.
                                    </p>
                                </div>

                                <div className="mt-6">
                                    <h4 className="font-semibold mb-2">Carbon Offset Program</h4>
                                    <p className="text-sm mb-4">
                                        Calculate and offset the carbon footprint of your journey to the GeoPark through our partnership
                                        with local reforestation projects.
                                    </p>
                                    <Button className="w-full bg-green-600 hover:bg-green-700">Calculate & Offset</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="mt-6">
                        <CardHeader>
                            <CardTitle>Accessibility Information</CardTitle>
                            <CardDescription>We strive to make Lauhanvuori GeoPark accessible to all visitors</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <Badge className="mt-1">Mobility</Badge>
                                    <span className="text-sm">
                    All main parking areas have designated accessible spaces close to facilities
                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Badge className="mt-1">Transport</Badge>
                                    <span className="text-sm">
                    Wheelchair accessible public transportation available on all main routes
                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Badge className="mt-1">Assistance</Badge>
                                    <span className="text-sm">
                    Pre-arranged assistance available for transfers from parking to trails
                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Badge className="mt-1">Contact</Badge>
                                    <span className="text-sm">
                    For specific accessibility needs, please contact us at accessibility@lauhanvuorigeopark.fi
                  </span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
