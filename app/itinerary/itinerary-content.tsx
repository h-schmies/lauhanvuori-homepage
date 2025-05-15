"use client"

// Let's update the imports first to include all the components we need
import {useState} from "react"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import {Checkbox} from "@/components/ui/checkbox"
import {Label} from "@/components/ui/label"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Separator} from "@/components/ui/separator"
import {Clock, Utensils, Home, Bus, Printer, Download, Star, X} from "lucide-react"

// Replace the entire component with this enhanced version
export default function ItineraryContent() {
    const [season, setSeason] = useState("summer")
    const [itineraryLength, setItineraryLength] = useState("7-day")
    const [selectedActivities, setSelectedActivities] = useState<string[]>([])
    const [printDays, setPrintDays] = useState<number[]>([1, 2, 3, 4, 5, 6, 7])
    const [isPrintView, setIsPrintView] = useState(false)

    const togglePrintDay = (day: number) => {
        if (printDays.includes(day)) {
            setPrintDays(printDays.filter((d) => d !== day))
        } else {
            setPrintDays([...printDays, day].sort())
        }
    }

    const preparePrint = () => {
        setIsPrintView(true)
        setTimeout(() => {
            window.print()
            setIsPrintView(false)
        }, 500)
    }

    return (
        <div className={`container mx-auto py-8 px-4 ${isPrintView ? "print-view" : ""}`}>
            {/* Page Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Explore Lauhanvuori GeoPark</h1>
                <p className="text-xl max-w-3xl mx-auto">
                    Discover the perfect itinerary for your visit to Lauhanvuori GeoPark, with day-by-day activities,
                    accommodation recommendations, and insider tips.
                </p>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </div>

            {/* Main Tabs for Different Features */}
            <Tabs defaultValue="itineraries" className="mb-12">
                <TabsList
                    className={`
    grid w-full h-full grid-cols-1 md:grid-cols-5
  `}
                >
                    <TabsTrigger
                        className="flex-shrink-0 md:flex-1 ml-1"
                        value="itineraries"
                    >
                        Itineraries
                    </TabsTrigger>
                    <TabsTrigger
                        className="flex-shrink-0 md:flex-1"
                        value="seasonal"
                    >
                        Seasonal Variations
                    </TabsTrigger>
                    <TabsTrigger
                        className="flex-shrink-0 md:flex-1"
                        value="builder"
                    >
                        Itinerary Builder
                    </TabsTrigger>
                    <TabsTrigger
                        className="flex-shrink-0 md:flex-1"
                        value="testimonials"
                    >
                        Visitor Testimonials
                    </TabsTrigger>
                    <TabsTrigger
                        className="flex-shrink-0 md:flex-1"
                        value="print"
                    >
                        Print & Download
                    </TabsTrigger>
                </TabsList>


                {/* Itineraries Tab Content */}
                <TabsContent value="itineraries" className="space-y-8 pt-4">
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center mb-8">
                        <Button
                            variant={itineraryLength === "3-day" ? "default" : "outline"}
                            onClick={() => setItineraryLength("3-day")}
                        >
                            3-Day Itinerary
                        </Button>
                        <Button
                            variant={itineraryLength === "5-day" ? "default" : "outline"}
                            onClick={() => setItineraryLength("5-day")}
                        >
                            5-Day Itinerary
                        </Button>
                        <Button
                            variant={itineraryLength === "7-day" ? "default" : "outline"}
                            onClick={() => setItineraryLength("7-day")}
                        >
                            7-Day Itinerary
                        </Button>
                    </div>


                    {itineraryLength === "7-day" && (
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Itinerary Overview</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <Badge className="mr-2">Day 1</Badge> Arrival & Visitor Center
                                        </li>
                                        <li className="flex items-center">
                                            <Badge className="mr-2">Day 2</Badge> Lauhanvuori Hill Exploration
                                        </li>
                                        <li className="flex items-center">
                                            <Badge className="mr-2">Day 3</Badge> Cycling Adventure
                                        </li>
                                        <li className="flex items-center">
                                            <Badge className="mr-2">Day 4</Badge> Cultural Experiences
                                        </li>
                                        <li className="flex items-center">
                                            <Badge className="mr-2">Day 5</Badge> Lake Activities
                                        </li>
                                        <li className="flex items-center">
                                            <Badge className="mr-2">Day 6</Badge> Geological Wonders
                                        </li>
                                        <li className="flex items-center">
                                            <Badge className="mr-2">Day 7</Badge> Final Experiences & Departure
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <Accordion type="single" collapsible className="w-full">
                                    {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                                        <AccordionItem key={day} value={`day-${day}`}>
                                            <AccordionTrigger>
                                                <div className="flex items-center">
                                                    <Badge className="mr-2">Day {day}</Badge>
                                                    <span>{getDayTitle(day)}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="space-y-4">
                                                    <div>
                                                        <h4 className="font-semibold flex items-center">
                                                            <Clock className="w-4 h-4 mr-2"/> Morning
                                                        </h4>
                                                        <p>{getDayMorningActivity(day)}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold flex items-center">
                                                            <Clock className="w-4 h-4 mr-2"/> Afternoon
                                                        </h4>
                                                        <p>{getDayAfternoonActivity(day)}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold flex items-center">
                                                            <Clock className="w-4 h-4 mr-2"/> Evening
                                                        </h4>
                                                        <p>{getDayEveningActivity(day)}</p>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                                        <div>
                                                            <h4 className="font-semibold flex items-center">
                                                                <Home className="w-4 h-4 mr-2"/> Accommodation
                                                            </h4>
                                                            <p>{getDayAccommodation(day)}</p>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold flex items-center">
                                                                <Utensils className="w-4 h-4 mr-2"/> Dining
                                                            </h4>
                                                            <p>{getDayDining(day)}</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold flex items-center">
                                                            <Bus className="w-4 h-4 mr-2"/> Transportation
                                                        </h4>
                                                        <p>{getDayTransportation(day)}</p>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    )}

                    {itineraryLength === "5-day" && (
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">5-Day Itinerary Overview</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <Badge className="mr-2">Day 1</Badge> Arrival & Park Introduction
                                        </li>
                                        <li className="flex items-center">
                                            <Badge className="mr-2">Day 2</Badge> Hiking Highlights
                                        </li>
                                        <li className="flex items-center">
                                            <Badge className="mr-2">Day 3</Badge> Cultural Day
                                        </li>
                                        <li className="flex items-center">
                                            <Badge className="mr-2">Day 4</Badge> Adventure Activities
                                        </li>
                                        <li className="flex items-center">
                                            <Badge className="mr-2">Day 5</Badge> Final Explorations & Departure
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <Accordion type="single" collapsible className="w-full">
                                    {[1, 2, 3, 4, 5].map((day) => (
                                        <AccordionItem key={day} value={`day-${day}`}>
                                            <AccordionTrigger>
                                                <div className="flex items-center">
                                                    <Badge className="mr-2">Day {day}</Badge>
                                                    <span>{getShortDayTitle(day)}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="space-y-4">
                                                    <div>
                                                        <h4 className="font-semibold flex items-center">
                                                            <Clock className="w-4 h-4 mr-2"/> Morning
                                                        </h4>
                                                        <p>{getShortDayMorningActivity(day)}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold flex items-center">
                                                            <Clock className="w-4 h-4 mr-2"/> Afternoon
                                                        </h4>
                                                        <p>{getShortDayAfternoonActivity(day)}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold flex items-center">
                                                            <Clock className="w-4 h-4 mr-2"/> Evening
                                                        </h4>
                                                        <p>{getShortDayEveningActivity(day)}</p>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                                        <div>
                                                            <h4 className="font-semibold flex items-center">
                                                                <Home className="w-4 h-4 mr-2"/> Accommodation
                                                            </h4>
                                                            <p>{getShortDayAccommodation(day)}</p>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold flex items-center">
                                                                <Utensils className="w-4 h-4 mr-2"/> Dining
                                                            </h4>
                                                            <p>{getShortDayDining(day)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    )}

                    {itineraryLength === "3-day" && (
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">3-Day Itinerary Overview</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <Badge className="mr-2">Day 1</Badge> Arrival & Essential Highlights
                                        </li>
                                        <li className="flex items-center">
                                            <Badge className="mr-2">Day 2</Badge> Nature Immersion
                                        </li>
                                        <li className="flex items-center">
                                            <Badge className="mr-2">Day 3</Badge> Final Experiences & Departure
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <Accordion type="single" collapsible className="w-full">
                                    {[1, 2, 3].map((day) => (
                                        <AccordionItem key={day} value={`day-${day}`}>
                                            <AccordionTrigger>
                                                <div className="flex items-center">
                                                    <Badge className="mr-2">Day {day}</Badge>
                                                    <span>{getWeekendDayTitle(day)}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="space-y-4">
                                                    <div>
                                                        <h4 className="font-semibold flex items-center">
                                                            <Clock className="w-4 h-4 mr-2"/> Morning
                                                        </h4>
                                                        <p>{getWeekendDayMorningActivity(day)}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold flex items-center">
                                                            <Clock className="w-4 h-4 mr-2"/> Afternoon
                                                        </h4>
                                                        <p>{getWeekendDayAfternoonActivity(day)}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold flex items-center">
                                                            <Clock className="w-4 h-4 mr-2"/> Evening
                                                        </h4>
                                                        <p>{getWeekendDayEveningActivity(day)}</p>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                                        <div>
                                                            <h4 className="font-semibold flex items-center">
                                                                <Home className="w-4 h-4 mr-2"/> Accommodation
                                                            </h4>
                                                            <p>{getWeekendDayAccommodation(day)}</p>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold flex items-center">
                                                                <Utensils className="w-4 h-4 mr-2"/> Dining
                                                            </h4>
                                                            <p>{getWeekendDayDining(day)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    )}
                </TabsContent>

                {/* Seasonal Variations Tab Content */}
                <TabsContent value="seasonal" className={"pt-4"}>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Seasonal Itineraries</h2>
                        <p className="mb-6">
                            Lauhanvuori GeoPark offers unique experiences in every season. Choose the time of year for
                            your visit and
                            discover tailored itineraries that showcase the best seasonal activities.
                        </p>

                        <Tabs defaultValue="summer" onValueChange={setSeason}>
                            <TabsList className="grid grid-cols-4 mb-8">
                                <TabsTrigger value="summer">Summer</TabsTrigger>
                                <TabsTrigger value="autumn">Autumn</TabsTrigger>
                                <TabsTrigger value="winter">Winter</TabsTrigger>
                                <TabsTrigger value="spring">Spring</TabsTrigger>
                            </TabsList>

                            <TabsContent value="summer" className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <img
                                            src="/images/seasons/summer.jpg"
                                            alt="Summer in Lauhanvuori"
                                            className="rounded-lg object-cover w-full h-64"
                                        />
                                        <h3 className="text-xl font-bold mt-4">Summer Highlights (June-August)</h3>
                                        <p className="mt-2">
                                            Experience the midnight sun and warm temperatures perfect for hiking,
                                            swimming in natural lakes,
                                            and enjoying the abundant wildlife. Summer offers the longest days and most
                                            accessible trails.
                                        </p>
                                        <div className="mt-4">
                                            <h4 className="font-semibold">Best Activities:</h4>
                                            <ul className="list-disc pl-5 mt-2">
                                                <li>Swimming in Lake Spitaalijärvi</li>
                                                <li>Midnight sun hikes</li>
                                                <li>Berry picking (blueberries, cloudberries)</li>
                                                <li>Canoeing and kayaking</li>
                                                <li>Wildlife photography</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Summer 7-Day Itinerary</CardTitle>
                                                <CardDescription>Optimized for warm weather and long daylight
                                                    hours</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 1</Badge>
                                                        <span>Arrival, swimming at Lake Spitaalijärvi, evening nature walk</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 2</Badge>
                                                        <span>Full-day hike on Lauhanvuori Hill, sunset picnic at the summit</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 3</Badge>
                                                        <span>Cycling tour through forest trails, afternoon berry picking</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 4</Badge>
                                                        <span>Cultural day with local museums, evening sauna experience</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 5</Badge>
                                                        <span>Canoeing adventure, fishing, and beach barbecue</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 6</Badge>
                                                        <span>Bog walking tour, wildlife photography, midnight sun experience</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 7</Badge>
                                                        <span>Morning yoga in nature, final swim, departure</span>
                                                    </li>
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button>View Full Summer Itinerary</Button>
                                            </CardFooter>
                                        </Card>

                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h4 className="font-semibold text-green-800">Summer Weather</h4>
                                            <p className="text-green-700 mt-1">
                                                Average temperatures: 15-25°C (59-77°F)
                                                <br/>
                                                Daylight: 18-20 hours
                                                <br/>
                                                Rainfall: Moderate, occasional thunderstorms
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="autumn" className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <img
                                            src="/images/seasons/fall.jpg"
                                            alt="Autumn in Lauhanvuori"
                                            className="rounded-lg object-cover w-full h-64"
                                        />
                                        <h3 className="text-xl font-bold mt-4">Autumn Highlights
                                            (September-November)</h3>
                                        <p className="mt-2">
                                            Experience the spectacular fall colors as the forests transform into a
                                            canvas of red, orange, and
                                            gold. Autumn is mushroom season and offers crisp, clear days perfect for
                                            photography.
                                        </p>
                                        <div className="mt-4">
                                            <h4 className="font-semibold">Best Activities:</h4>
                                            <ul className="list-disc pl-5 mt-2">
                                                <li>Mushroom foraging (guided tours available)</li>
                                                <li>Fall foliage photography</li>
                                                <li>Cranberry picking in the bogs</li>
                                                <li>Hiking through colorful forests</li>
                                                <li>Wildlife viewing (rutting season)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Autumn 7-Day Itinerary</CardTitle>
                                                <CardDescription>Optimized for fall colors and harvest
                                                    season</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 1</Badge>
                                                        <span>Arrival, forest walk to view fall colors, evening by fireplace</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 2</Badge>
                                                        <span>Guided mushroom foraging tour, cooking class with local ingredients</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 3</Badge>
                                                        <span>Photography tour of the most scenic autumn viewpoints</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 4</Badge>
                                                        <span>Bog walk for cranberry picking, evening sauna with berry treatments</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 5</Badge>
                                                        <span>Wildlife viewing tour (moose, deer), traditional harvest dinner</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 6</Badge>
                                                        <span>Cycling through golden forest trails, picnic with local produce</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 7</Badge>
                                                        <span>Final hike to Lauhanvuori summit for panoramic autumn views, departure</span>
                                                    </li>
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button>View Full Autumn Itinerary</Button>
                                            </CardFooter>
                                        </Card>

                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h4 className="font-semibold text-orange-800">Autumn Weather</h4>
                                            <p className="text-orange-700 mt-1">
                                                Average temperatures: 0-15°C (32-59°F)
                                                <br/>
                                                Daylight: 8-14 hours (decreasing)
                                                <br/>
                                                Rainfall: Moderate, occasional early snow
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="winter" className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <img
                                            src="/images/seasons/winter.jpg"
                                            alt="Winter in Lauhanvuori"
                                            className="rounded-lg object-cover w-full h-64"
                                        />
                                        <h3 className="text-xl font-bold mt-4">Winter Highlights
                                            (December-February)</h3>
                                        <p className="mt-2">
                                            Experience the magical snow-covered landscape and the possibility of seeing
                                            the Northern Lights.
                                            Winter offers unique activities like cross-country skiing, snowshoeing, and
                                            ice fishing.
                                        </p>
                                        <div className="mt-4">
                                            <h4 className="font-semibold">Best Activities:</h4>
                                            <ul className="list-disc pl-5 mt-2">
                                                <li>Cross-country skiing on maintained trails</li>
                                                <li>Snowshoeing through pristine forests</li>
                                                <li>Ice fishing on frozen lakes</li>
                                                <li>Northern Lights viewing (weather permitting)</li>
                                                <li>Winter wildlife tracking</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Winter 7-Day Itinerary</CardTitle>
                                                <CardDescription>Optimized for snow activities and cozy
                                                    experiences</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 1</Badge>
                                                        <span>Arrival, equipment rental, evening by fireplace with hot chocolate</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 2</Badge>
                                                        <span>Cross-country skiing lesson and short trail, afternoon sauna</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 3</Badge>
                                                        <span>Snowshoeing adventure through snow-covered forests</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 4</Badge>
                                                        <span>Ice fishing experience, traditional Finnish winter meal</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 5</Badge>
                                                        <span>Winter wildlife tracking tour, evening Northern Lights watch</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 6</Badge>
                                                        <span>Full-day skiing adventure, evening ice sauna experience</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 7</Badge>
                                                        <span>Morning snowmobile tour, final sauna, departure</span>
                                                    </li>
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button>View Full Winter Itinerary</Button>
                                            </CardFooter>
                                        </Card>

                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h4 className="font-semibold text-blue-800">Winter Weather</h4>
                                            <p className="text-blue-700 mt-1">
                                                Average temperatures: -15 to 0°C (5-32°F)
                                                <br/>
                                                Daylight: 4-8 hours
                                                <br/>
                                                Snowfall: Regular, snow cover from November to April
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="spring" className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <img
                                            src="/images/seasons/spring.jpg"
                                            alt="Spring in Lauhanvuori"
                                            className="rounded-lg object-cover w-full h-64"
                                        />
                                        <h3 className="text-xl font-bold mt-4">Spring Highlights (March-May)</h3>
                                        <p className="mt-2">
                                            Experience the awakening of nature as snow melts, birds return, and the
                                            first flowers bloom.
                                            Spring offers a unique combination of lingering winter activities and
                                            emerging summer
                                            possibilities.
                                        </p>
                                        <div className="mt-4">
                                            <h4 className="font-semibold">Best Activities:</h4>
                                            <ul className="list-disc pl-5 mt-2">
                                                <li>Birdwatching during migration season</li>
                                                <li>Witnessing spring floods and waterfalls</li>
                                                <li>Early season hiking on drying trails</li>
                                                <li>Spotting the first wildflowers</li>
                                                <li>Photography of contrasting landscapes</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Spring 7-Day Itinerary</CardTitle>
                                                <CardDescription>Optimized for nature awakening and fewer
                                                    crowds</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 1</Badge>
                                                        <span>Arrival, orientation walk, evening presentation on spring phenomena</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 2</Badge>
                                                        <span>Guided birdwatching tour, afternoon visit to melting waterfalls</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 3</Badge>
                                                        <span>Photography tour focusing on spring contrasts and first flowers</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 4</Badge>
                                                        <span>Hiking to observe beaver activity, evening wildlife spotting</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 5</Badge>
                                                        <span>Cycling on early season trails, picnic by thawing lake</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 6</Badge>
                                                        <span>Bog walk to observe spring awakening, traditional spring meal</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Badge className="mr-2 mt-1">Day 7</Badge>
                                                        <span>Final hike to collect spring herbs (guided), departure</span>
                                                    </li>
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button>View Full Spring Itinerary</Button>
                                            </CardFooter>
                                        </Card>

                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h4 className="font-semibold text-green-800">Spring Weather</h4>
                                            <p className="text-green-700 mt-1">
                                                Average temperatures: 0-15°C (32-59°F)
                                                <br/>
                                                Daylight: 13-18 hours (increasing)
                                                <br/>
                                                Precipitation: Varied, melting snow, occasional rain
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </TabsContent>

                {/* Itinerary Builder Tab Content */}
                <TabsContent value="builder" className="pt-4">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Custom Itinerary Builder</h2>
                        <p className="mb-6">
                            Create your own personalized itinerary by selecting activities that match your interests,
                            available time,
                            and preferences. Drag and drop activities to build your perfect park experience.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-1">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Available Activities</CardTitle>
                                        <CardDescription>Filter and select activities to add to your
                                            itinerary</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div>
                                                <Label htmlFor="activity-filter">Filter by type</Label>
                                                <Select defaultValue="all">
                                                    <SelectTrigger id="activity-filter">
                                                        <SelectValue placeholder="Select activity type"/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="all">All Activities</SelectItem>
                                                        <SelectItem value="hiking">Hiking</SelectItem>
                                                        <SelectItem value="cycling">Cycling</SelectItem>
                                                        <SelectItem value="water">Water Activities</SelectItem>
                                                        <SelectItem value="wildlife">Wildlife & Nature</SelectItem>
                                                        <SelectItem value="cultural">Cultural Experiences</SelectItem>
                                                        <SelectItem value="winter">Winter Activities</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div>
                                                <Label htmlFor="difficulty-filter">Difficulty level</Label>
                                                <Select defaultValue="all">
                                                    <SelectTrigger id="difficulty-filter">
                                                        <SelectValue placeholder="Select difficulty"/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="all">All Levels</SelectItem>
                                                        <SelectItem value="easy">Easy</SelectItem>
                                                        <SelectItem value="moderate">Moderate</SelectItem>
                                                        <SelectItem value="challenging">Challenging</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div>
                                                <Label htmlFor="duration-filter">Duration</Label>
                                                <Select defaultValue="all">
                                                    <SelectTrigger id="duration-filter">
                                                        <SelectValue placeholder="Select duration"/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="all">Any Duration</SelectItem>
                                                        <SelectItem value="short">1-2 hours</SelectItem>
                                                        <SelectItem value="medium">Half day</SelectItem>
                                                        <SelectItem value="long">Full day</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <Separator/>

                                            <div className="space-y-2 max-h-96 overflow-y-auto">
                                                {activityOptions.map((activity) => (
                                                    <div
                                                        key={activity.id}
                                                        className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer"
                                                    >
                                                        <Checkbox
                                                            id={`activity-${activity.id}`}
                                                            checked={selectedActivities.includes(activity.id)}
                                                            onCheckedChange={(checked) => {
                                                                if (checked) {
                                                                    setSelectedActivities([...selectedActivities, activity.id])
                                                                } else {
                                                                    setSelectedActivities(selectedActivities.filter((id) => id !== activity.id))
                                                                }
                                                            }}
                                                        />
                                                        <div>
                                                            <Label htmlFor={`activity-${activity.id}`}
                                                                   className="font-medium cursor-pointer">
                                                                {activity.name}
                                                            </Label>
                                                            <p className="text-sm text-gray-500">
                                                                {activity.duration} • {activity.difficulty}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="md:col-span-2">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Your Custom Itinerary</CardTitle>
                                        <CardDescription>Selected activities will appear here. Arrange them by
                                            day.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        {selectedActivities.length === 0 ? (
                                            <div className="text-center py-8 border-2 border-dashed rounded-lg">
                                                <p className="text-gray-500">Select activities from the left panel to
                                                    build your itinerary</p>
                                            </div>
                                        ) : (
                                            <div className="space-y-6">
                                                {[1, 2, 3, 4, 5, 6, 7].slice(0, Math.ceil(selectedActivities.length / 3)).map((day) => (
                                                    <div key={day} className="border rounded-lg p-4">
                                                        <h3 className="font-semibold mb-2">Day {day}</h3>
                                                        <div className="space-y-2">
                                                            {selectedActivities.slice((day - 1) * 3, day * 3).map((activityId) => {
                                                                const activity = activityOptions.find((a) => a.id === activityId)
                                                                return activity ? (
                                                                    <div
                                                                        key={activity.id}
                                                                        className="flex justify-between items-center p-2 bg-gray-50 rounded"
                                                                    >
                                                                        <div>
                                                                            <p className="font-medium">{activity.name}</p>
                                                                            <p className="text-sm text-gray-500">
                                                                                {activity.duration} • {activity.difficulty}
                                                                            </p>
                                                                        </div>
                                                                        <Button
                                                                            variant="ghost"
                                                                            size="sm"
                                                                            onClick={() =>
                                                                                setSelectedActivities(selectedActivities.filter((id) => id !== activity.id))
                                                                            }
                                                                        >
                                                                            <X className="h-4 w-4"/>
                                                                        </Button>
                                                                    </div>
                                                                ) : null
                                                            })}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <Button variant="outline" onClick={() => setSelectedActivities([])}>
                                            Clear All
                                        </Button>
                                        <Button disabled={selectedActivities.length === 0}>Save Itinerary</Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                {/* Visitor Testimonials Tab Content */}
                <TabsContent value="testimonials" className="pt-4">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Visitor Testimonials</h2>
                        <p className="mb-6">
                            Read about the experiences of visitors who have followed our itineraries. Their stories and
                            tips might
                            help you plan your own perfect visit to Lauhanvuori GeoPark.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="/placeholder-visitor1.png"
                                            alt="Emma S."
                                            className="rounded-full w-12 h-12 object-cover"
                                        />
                                        <div>
                                            <CardTitle className="text-lg">Emma S.</CardTitle>
                                            <CardDescription>Visited Summer 2023</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex mb-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400"/>
                                        ))}
                                    </div>
                                    <p className="text-sm">
                                        "The 7-day itinerary was perfect for our family vacation. We especially loved
                                        the cycling day and
                                        the cultural experiences. The accommodation recommendations were spot-on, and we
                                        appreciated the
                                        detailed time estimates that helped us plan each day."
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <p className="text-xs text-gray-500">
                                        Followed the: <Badge variant="outline">Summer 7-Day Itinerary</Badge>
                                    </p>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="/placeholder-visitor2.png"
                                            alt="Mikko T."
                                            className="rounded-full w-12 h-12 object-cover"
                                        />
                                        <div>
                                            <CardTitle className="text-lg">Mikko T.</CardTitle>
                                            <CardDescription>Visited Winter 2024</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex mb-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`w-4 h-4 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-sm">
                                        "As an experienced cross-country skier, I found the winter itinerary to be
                                        well-balanced between
                                        challenging activities and relaxation. The Northern Lights viewing spot
                                        recommendation was excellent
                                        - we saw an amazing display on our fifth night!"
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <p className="text-xs text-gray-500">
                                        Followed the: <Badge variant="outline">Winter 5-Day Itinerary</Badge>
                                    </p>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="/placeholder-visitor3.png"
                                            alt="Sarah & John"
                                            className="rounded-full w-12 h-12 object-cover"
                                        />
                                        <div>
                                            <CardTitle className="text-lg">Sarah & John</CardTitle>
                                            <CardDescription>Visited Autumn 2023</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex mb-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400"/>
                                        ))}
                                    </div>
                                    <p className="text-sm">
                                        "We customized the 3-day itinerary for a weekend trip and it was perfect! The
                                        mushroom foraging
                                        experience was a highlight - we collected chanterelles and learned how to
                                        prepare them from a local
                                        guide. The fall colors were absolutely stunning."
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <p className="text-xs text-gray-500">
                                        Followed the: <Badge variant="outline">Autumn 3-Day Itinerary</Badge>
                                    </p>
                                </CardFooter>
                            </Card>
                        </div>

                        <div className="mt-8 text-center">
                            <h3 className="text-xl font-semibold mb-4">Share Your Experience</h3>
                            <p className="mb-4">
                                Have you visited Lauhanvuori GeoPark following one of our itineraries? We'd love to hear
                                about your
                                experience!
                            </p>
                            <Button>Submit Your Testimonial</Button>
                        </div>
                    </div>
                </TabsContent>

                {/* Print & Download Tab Content */}
                <TabsContent value="print" className="pt-4">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Print & Download Your Itinerary</h2>
                        <p className="mb-6">
                            Create a printer-friendly version of your selected itinerary to take with you on your trip.
                            You can choose
                            which days to include and download as a PDF for offline access.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Select Days to Print</CardTitle>
                                    <CardDescription>Choose which days you want to include in your printed
                                        itinerary</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                                                <div key={day} className="flex items-center space-x-2">
                                                    <Checkbox
                                                        id={`print-day-${day}`}
                                                        checked={printDays.includes(day)}
                                                        onCheckedChange={() => togglePrintDay(day)}
                                                    />
                                                    <Label htmlFor={`print-day-${day}`}>Day {day}</Label>
                                                </div>
                                            ))}
                                        </div>

                                        <Separator/>

                                        <div>
                                            <h3 className="font-semibold mb-2">Include in printout:</h3>
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="print-map" defaultChecked/>
                                                    <Label htmlFor="print-map">Map</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="print-accommodations" defaultChecked/>
                                                    <Label htmlFor="print-accommodations">Accommodation details</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="print-dining" defaultChecked/>
                                                    <Label htmlFor="print-dining">Dining recommendations</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="print-transport" defaultChecked/>
                                                    <Label htmlFor="print-transport">Transportation information</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="print-contacts" defaultChecked/>
                                                    <Label htmlFor="print-contacts">Emergency contacts</Label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button variant="outline" onClick={() => setPrintDays([1, 2, 3, 4, 5, 6, 7])}>
                                        Select All Days
                                    </Button>
                                    <div className="space-x-2">
                                        <Button variant="outline" onClick={preparePrint}
                                                disabled={printDays.length === 0}>
                                            <Printer className="mr-2 h-4 w-4"/>
                                            Print
                                        </Button>
                                        <Button disabled={printDays.length === 0}>
                                            <Download className="mr-2 h-4 w-4"/>
                                            Download PDF
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>

                            <div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Print Preview</CardTitle>
                                        <CardDescription>This is how your printed itinerary will look</CardDescription>
                                    </CardHeader>
                                    <CardContent className="h-96 overflow-y-auto border rounded-md p-4 bg-white">
                                        {printDays.length === 0 ? (
                                            <div className="h-full flex items-center justify-center text-gray-500">
                                                <p>Select at least one day to see the print preview</p>
                                            </div>
                                        ) : (
                                            <div className="space-y-6">
                                                <div className="text-center">
                                                    <h1 className="text-2xl font-bold">Lauhanvuori GeoPark
                                                        Itinerary</h1>
                                                    <p className="text-gray-500">Your personalized travel plan</p>
                                                </div>

                                                {printDays.map((day) => (
                                                    <div key={day} className="border-b pb-4">
                                                        <h2 className="text-xl font-bold mb-2">
                                                            Day {day}: {getDayTitle(day)}
                                                        </h2>
                                                        <div className="space-y-2">
                                                            <div>
                                                                <h3 className="font-semibold">Morning</h3>
                                                                <p>{getDayMorningActivity(day)}</p>
                                                            </div>
                                                            <div>
                                                                <h3 className="font-semibold">Afternoon</h3>
                                                                <p>{getDayAfternoonActivity(day)}</p>
                                                            </div>
                                                            <div>
                                                                <h3 className="font-semibold">Evening</h3>
                                                                <p>{getDayEveningActivity(day)}</p>
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div>
                                                                    <h3 className="font-semibold">Accommodation</h3>
                                                                    <p>{getDayAccommodation(day)}</p>
                                                                </div>
                                                                <div>
                                                                    <h3 className="font-semibold">Dining</h3>
                                                                    <p>{getDayDining(day)}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}

                                                <div className="mt-4">
                                                    <h3 className="font-semibold">Emergency Contacts</h3>
                                                    <p>Park Visitor Center: +358 123 456 789</p>
                                                    <p>Emergency Services: 112</p>
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>

            {/* Call to Action */}
            <div className="bg-green-50 rounded-lg p-8 text-center mt-12">
                <h2 className="text-2xl font-bold mb-4">Ready to Experience Lauhanvuori GeoPark?</h2>
                <p className="max-w-2xl mx-auto mb-6">
                    Whether you follow one of our suggested itineraries or create your own custom plan, Lauhanvuori
                    GeoPark offers
                    unforgettable experiences in every season.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center mb-8 ">
                    <Button size="lg">Book Your Accommodation</Button>
                    <Button variant="outline" size="lg">
                        Contact Us for More Information
                    </Button>
                </div>
            </div>

            {/* Print-specific styles */}
            <style jsx global>{`
                @media print {
                    .print-view {
                        background: white;
                        padding: 2cm;
                        font-size: 12pt;
                    }

                    .print-view nav,
                    .print-view footer,
                    .print-view button,
                    .print-view .tabs-list,
                    .print-view .call-to-action {
                        display: none !important;
                    }

                    .print-view h1 {
                        font-size: 24pt;
                        margin-bottom: 1cm;
                    }

                    .print-view h2 {
                        font-size: 18pt;
                        margin-top: 1cm;
                        margin-bottom: 0.5cm;
                    }

                    .print-view h3 {
                        font-size: 14pt;
                        margin-top: 0.5cm;
                        margin-bottom: 0.2cm;
                    }

                    .print-view p {
                        margin-bottom: 0.3cm;
                    }

                    .print-view .day-section {
                        page-break-inside: avoid;
                        margin-bottom: 1cm;
                    }
                }
            `}</style>
        </div>
    )
}

// Helper functions for day content
function getDayTitle(day: number) {
    const titles = [
        "Arrival & Visitor Center",
        "Lauhanvuori Hill Exploration",
        "Cycling Adventure",
        "Cultural Experiences",
        "Lake Activities",
        "Geological Wonders",
        "Final Experiences & Departure",
    ]
    return titles[day - 1] || ""
}

function getDayMorningActivity(day: number) {
    const activities = [
        "Arrive at Lauhanvuori GeoPark. Check in at the Visitor Center for orientation and maps. Take a short introductory walk on the nature trail near the center.",
        "Early morning hike to Lauhanvuori Hill summit (231m). Enjoy panoramic views and learn about the unique geology of the area from information boards.",
        "Rent bicycles from the visitor center and embark on a guided cycling tour through forest trails. Explore the diverse landscapes and learn about local flora and fauna.",
        "Visit the local heritage museum to learn about the cultural history of the region. Participate in a traditional crafts workshop.",
        "Morning boat trip on Lake Spitaalijärvi. Try fishing with a local guide who will teach you traditional Finnish fishing techniques.",
        "Guided geological tour to explore the unique formations created during the Ice Age. Visit the 'devil's fields' and ancient shorelines.",
        "Early morning nature photography walk to capture the morning light on the landscapes. Visit any spots you may have missed during your stay.",
    ]
    return activities[day - 1] || ""
}

function getDayAfternoonActivity(day: number) {
    const activities = [
        "Easy hike on the Katikankanjoni nature trail (3km) to see the beautiful river canyon. Stop for a picnic lunch at a designated area.",
        "Continue exploring the hill area with a visit to the ancient stone formations. Afternoon break at a wilderness hut with coffee made over an open fire.",
        "Cycle to the raised bog area and take a guided walk on the duckboard trails. Learn about the unique bog ecosystem and its importance.",
        "Afternoon visit to a local farm to learn about sustainable agriculture practices. Sample local produce and participate in seasonal activities.",
        "Afternoon relaxation at a lakeside sauna. Experience the traditional Finnish sauna ritual followed by a refreshing swim in the lake.",
        "Afternoon visit to the springs area to see the crystal-clear groundwater emerging from the earth. Learn about the water cycle and its importance to the ecosystem.",
        "Visit the local market to purchase souvenirs and local products. Final lunch at a restaurant serving traditional Finnish cuisine.",
    ]
    return activities[day - 1] || ""
}

function getDayEveningActivity(day: number) {
    const activities = [
        "Dinner at your accommodation. Evening presentation at the visitor center about the UNESCO Global Geopark status and what makes Lauhanvuori special.",
        "Evening wildlife watching from a dedicated hide. Possibility to spot moose, deer, and various bird species. Dinner as a wilderness meal experience.",
        "Return to accommodation for dinner. Evening presentation about the night sky and star-gazing session if weather permits.",
        "Traditional Finnish dinner experience with local specialties. Evening cultural performance or storytelling session about local legends.",
        "Evening barbecue by the lake with locally sourced ingredients. After dinner, take a sunset walk along the lakeshore.",
        "Dinner at a local restaurant. Evening presentation about the Northern Lights phenomenon (with viewing opportunity in winter months).",
        "Farewell dinner with a menu featuring highlights of Finnish cuisine. Evening packing and preparation for departure the next day.",
    ]
    return activities[day - 1] || ""
}

function getDayAccommodation(day: number) {
    const accommodations = [
        "Lauhanvuori Lodge - Comfortable rooms with forest views, restaurant on-site, and easy access to trails.",
        "Lauhanvuori Lodge - Second night with option for wilderness sauna experience.",
        "Forest Cabins - Cozy wooden cabins with private sauna, kitchenette, and terrace overlooking the forest.",
        "Forest Cabins - Second night with evening campfire option.",
        "Lakeside Cottages - Traditional Finnish cottages with direct lake access, private sauna, and fully equipped kitchen.",
        "Lakeside Cottages - Second night with option for midnight sun experience (summer) or Northern Lights viewing (winter).",
        "Geopark Hotel - Modern hotel with all amenities, restaurant serving local cuisine, and convenient location for departure.",
    ]
    return accommodations[day - 1] || ""
}

function getDayDining(day: number) {
    const dining = [
        "Visitor Center Café for lunch, Lauhanvuori Lodge Restaurant for dinner with local specialties.",
        "Packed lunch during hike, wilderness cooking experience for dinner with local guide.",
        "Picnic lunch at designated spot along cycling route, dinner at Forest Cabin restaurant.",
        "Lunch at heritage museum café, dinner at traditional Finnish restaurant in nearby village.",
        "Packed lunch during boat trip, evening barbecue with fresh local ingredients.",
        "Lunch at local family-owned restaurant, dinner featuring geological-themed menu at Geopark Restaurant.",
        "Lunch at local market café, farewell dinner at Geopark Hotel restaurant featuring Finnish specialties.",
    ]
    return dining[day - 1] || ""
}

function getDayTransportation(day: number) {
    const transportation = [
        "Arrival by public bus or private car. Short walks around visitor center and to nearby trails.",
        "Morning shuttle to trailhead, hiking throughout the day, return shuttle to accommodation.",
        "Bicycle rental for the entire day, all exploration done by bike on designated trails.",
        "Local shuttle service to museum and farm, return shuttle to accommodation.",
        "Morning boat transport, afternoon walking, evening shuttle return to accommodation.",
        "Guided tour van to geological sites, short walks at each location.",
        "Morning walking, afternoon local shuttle to market, departure by public transport or private car.",
    ]
    return transportation[day - 1] || ""
}

// Helper functions for 5-day itinerary
function getShortDayTitle(day: number) {
    const titles = [
        "Arrival & Park Introduction",
        "Hiking Highlights",
        "Cultural Day",
        "Adventure Activities",
        "Final Explorations & Departure",
    ]
    return titles[day - 1] || ""
}

function getShortDayMorningActivity(day: number) {
    const activities = [
        "Arrive at Lauhanvuori GeoPark. Check in at the Visitor Center for orientation, maps, and an introduction to the park's highlights.",
        "Early morning hike to Lauhanvuori Hill summit. Enjoy panoramic views and learn about the unique geology of the area.",
        "Visit the local heritage museum to learn about the cultural history of the region. Participate in a traditional crafts workshop.",
        "Morning adventure activity of your choice: mountain biking on forest trails or guided canoeing on Lake Spitaalijärvi.",
        "Morning visit to the unique raised bog ecosystem. Walk on duckboard trails and learn about the flora and fauna of this special environment.",
    ]
    return activities[day - 1] || ""
}

function getShortDayAfternoonActivity(day: number) {
    const activities = [
        "Afternoon hike on the Katikankanjoni nature trail to see the beautiful river canyon. Stop for a picnic lunch at a designated area.",
        "Afternoon visit to the ancient stone formations and springs area. Learn about the geological history of the region.",
        "Afternoon visit to a local farm to learn about sustainable agriculture practices. Sample local produce and participate in seasonal activities.",
        "Afternoon visit to the geological wonders of the park: 'devil's fields' and ancient shorelines formed after the Ice Age.",
        "Final lunch at a local restaurant. Visit the local market to purchase souvenirs and local products before departure.",
    ]
    return activities[day - 1] || ""
}

function getShortDayEveningActivity(day: number) {
    const activities = [
        "Dinner at your accommodation. Evening presentation about the UNESCO Global Geopark status and what makes Lauhanvuori special.",
        "Evening wildlife watching from a dedicated hide. Possibility to spot moose, deer, and various bird species. Dinner as a wilderness meal experience.",
        "Traditional Finnish dinner experience with local specialties. Evening cultural performance or storytelling session about local legends.",
        "Evening sauna experience by the lake followed by a refreshing swim. Dinner featuring fresh local ingredients.",
        "Farewell dinner with a menu featuring highlights of Finnish cuisine before departure.",
    ]
    return activities[day - 1] || ""
}

function getShortDayAccommodation(day: number) {
    const accommodations = [
        "Lauhanvuori Lodge - Comfortable rooms with forest views, restaurant on-site, and easy access to trails.",
        "Lauhanvuori Lodge - Second night with option for wilderness sauna experience.",
        "Forest Cabins - Cozy wooden cabins with private sauna, kitchenette, and terrace overlooking the forest.",
        "Lakeside Cottages - Traditional Finnish cottages with direct lake access, private sauna, and fully equipped kitchen.",
        "Final night at Geopark Hotel - Modern hotel with all amenities, restaurant serving local cuisine, and convenient location for departure.",
    ]
    return accommodations[day - 1] || ""
}

function getShortDayDining(day: number) {
    const dining = [
        "Visitor Center Café for lunch, Lauhanvuori Lodge Restaurant for dinner with local specialties.",
        "Packed lunch during hike, wilderness cooking experience for dinner with local guide.",
        "Lunch at heritage museum café, dinner at traditional Finnish restaurant in nearby village.",
        "Picnic lunch during adventure activity, evening barbecue with fresh local ingredients.",
        "Lunch at local restaurant, farewell dinner at Geopark Hotel restaurant featuring Finnish specialties.",
    ]
    return dining[day - 1] || ""
}

// Helper functions for 3-day itinerary
function getWeekendDayTitle(day: number) {
    const titles = ["Arrival & Essential Highlights", "Nature Immersion", "Final Experiences & Departure"]
    return titles[day - 1] || ""
}

function getWeekendDayMorningActivity(day: number) {
    const activities = [
        "Arrive at Lauhanvuori GeoPark. Check in at the Visitor Center for orientation and a quick introduction to the park's highlights.",
        "Early morning hike to Lauhanvuori Hill summit. Enjoy panoramic views and learn about the unique geology of the area.",
        "Morning visit to the unique raised bog ecosystem. Walk on duckboard trails and learn about the flora and fauna of this special environment.",
    ]
    return activities[day - 1] || ""
}

function getWeekendDayAfternoonActivity(day: number) {
    const activities = [
        "Afternoon hike on the Katikankanjoni nature trail to see the beautiful river canyon. Visit the springs area to see crystal-clear groundwater.",
        "Afternoon adventure activity of your choice: mountain biking on forest trails or guided canoeing on Lake Spitaalijärvi.",
        "Final lunch at a local restaurant. Visit the local market to purchase souvenirs and local products before departure.",
    ]
    return activities[day - 1] || ""
}

function getWeekendDayEveningActivity(day: number) {
    const activities = [
        "Dinner at your accommodation. Evening presentation about the UNESCO Global Geopark status and what makes Lauhanvuori special.",
        "Evening sauna experience by the lake followed by a refreshing swim. Dinner featuring fresh local ingredients.",
        "Early evening departure or optional extension with dinner at Geopark Hotel restaurant.",
    ]
    return activities[day - 1] || ""
}

function getWeekendDayAccommodation(day: number) {
    const accommodations = [
        "Lauhanvuori Lodge - Comfortable rooms with forest views, restaurant on-site, and easy access to trails.",
        "Lakeside Cottages - Traditional Finnish cottages with direct lake access, private sauna, and fully equipped kitchen.",
        "Departure day or optional extension at Geopark Hotel.",
    ]
    return accommodations[day - 1] || ""
}

function getWeekendDayDining(day: number) {
    const dining = [
        "Visitor Center Café for lunch, Lauhanvuori Lodge Restaurant for dinner with local specialties.",
        "Packed lunch during adventure activity, evening barbecue with fresh local ingredients.",
        "Lunch at local restaurant, optional farewell dinner at Geopark Hotel restaurant.",
    ]
    return dining[day - 1] || ""
}

// Sample activity options for the itinerary builder
const activityOptions = [
    {id: "hiking-summit", name: "Lauhanvuori Summit Hike", duration: "4-5 hours", difficulty: "Moderate"},
    {id: "canyon-trail", name: "Katikankanjoni Canyon Trail", duration: "2-3 hours", difficulty: "Easy"},
    {id: "cycling-forest", name: "Forest Cycling Tour", duration: "Half day", difficulty: "Moderate"},
    {id: "bog-walk", name: "Guided Bog Walk", duration: "2 hours", difficulty: "Easy"},
    {id: "wildlife-watching", name: "Wildlife Watching Hide", duration: "2-3 hours", difficulty: "Easy"},
    {id: "canoeing", name: "Lake Canoeing Adventure", duration: "3-4 hours", difficulty: "Moderate"},
    {id: "geology-tour", name: "Geological Wonders Tour", duration: "Half day", difficulty: "Easy"},
    {id: "cultural-museum", name: "Heritage Museum Visit", duration: "2 hours", difficulty: "Easy"},
    {id: "farm-visit", name: "Local Farm Experience", duration: "3 hours", difficulty: "Easy"},
    {id: "sauna-experience", name: "Traditional Finnish Sauna", duration: "2 hours", difficulty: "Easy"},
    {id: "fishing-trip", name: "Guided Fishing Trip", duration: "4 hours", difficulty: "Easy"},
    {id: "star-gazing", name: "Evening Star Gazing", duration: "2 hours", difficulty: "Easy"},
    {id: "photography-walk", name: "Nature Photography Walk", duration: "3 hours", difficulty: "Easy"},
    {id: "berry-picking", name: "Seasonal Berry Picking", duration: "2-3 hours", difficulty: "Easy"},
    {id: "cooking-class", name: "Finnish Cuisine Workshop", duration: "3 hours", difficulty: "Easy"},
    {id: "cross-country-ski", name: "Cross-Country Skiing", duration: "Half day", difficulty: "Moderate"},
    {id: "snowshoeing", name: "Winter Snowshoeing", duration: "3 hours", difficulty: "Moderate"},
    {id: "ice-fishing", name: "Ice Fishing Experience", duration: "3 hours", difficulty: "Easy"},
    {id: "northern-lights", name: "Northern Lights Viewing", duration: "2-3 hours", difficulty: "Easy"},
    {id: "mushroom-foraging", name: "Mushroom Foraging Tour", duration: "4 hours", difficulty: "Easy"},
]
