"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
    AlertTriangle,
    Trash2,
    Recycle,
    Leaf,
    MapPin,
    Bus,
    Bike,
    Info,
    CheckCircle2,
    XCircle,
    ArrowRight,
} from "lucide-react"

export default function SustainabilityContent() {
    const [activeTab, setActiveTab] = useState("protected-areas")

    return (
        <main className="container mx-auto px-4 py-8 max-w-7xl">
            <div className="space-y-6">
                {/* Hero Section */}
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
                    <Image
                        src="/images/landscape.webp"
                        alt="Sustainable practices in Lauhanvuori GeoPark"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent flex items-center">
                        <div className="p-6 md:p-10 max-w-2xl">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                                Sustainability & Visitor Responsibility
                            </h1>
                            <p className="text-white text-lg md:text-xl">
                                Help us preserve the natural beauty of Lauhanvuori GeoPark for future generations
                            </p>
                        </div>
                    </div>
                </div>

                {/* Introduction */}
                <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Lauhanvuori GeoPark is a precious natural environment with unique geological features, diverse ecosystems,
                        and cultural heritage. As visitors, we all share the responsibility to protect and preserve this special
                        place. This guide provides essential information on how to enjoy the park responsibly while minimizing your
                        environmental impact.
                    </p>
                </div>

                {/* Navigation Tabs */}
                <Tabs defaultValue="protected-areas" value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full h-full grid-cols-1 md:grid-cols-3">
                        <TabsTrigger value="protected-areas" className="text-sm md:text-base">
                            Protected Areas & No-Camping Zones
                        </TabsTrigger>
                        <TabsTrigger value="waste-management" className="text-sm md:text-base">
                            Waste Management Instructions
                        </TabsTrigger>
                        <TabsTrigger value="low-impact-travel" className="text-sm md:text-base">
                            Low-Impact Travel Guide
                        </TabsTrigger>
                    </TabsList>

                    {/* Protected Areas & No-Camping Zones */}
                    <TabsContent value="protected-areas" className="space-y-8 py-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-6">
                                <h2 className="text-2xl font-bold text-green-800">Protected Areas & No-Camping Zones</h2>

                                <p className="text-gray-700">
                                    Lauhanvuori GeoPark contains several strictly protected areas that are vital for preserving
                                    biodiversity, geological features, and cultural heritage. Understanding and respecting these zones is
                                    essential for all visitors.
                                </p>

                                <Alert className="bg-amber-50 border-amber-200">
                                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                                    <AlertTitle className="text-amber-800">Important Notice</AlertTitle>
                                    <AlertDescription className="text-amber-700">
                                        Always check current restrictions before your visit as protected zones may change seasonally to
                                        accommodate wildlife breeding periods or for conservation efforts.
                                    </AlertDescription>
                                </Alert>

                                <h3 className="text-xl font-semibold text-green-700 mt-6">Strictly Protected Areas</h3>
                                <p className="text-gray-700">
                                    These areas are designated for scientific research and conservation. Public access is either
                                    prohibited or strictly limited to designated paths. These include:
                                </p>

                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>
                                        <span className="font-medium">Kauhaneva-Pohjankangas National Park Core Zone</span> - Home to rare
                                        mire ecosystems and endangered species
                                    </li>
                                    <li>
                                        <span className="font-medium">Lauhanvuori Summit Area</span> - Contains sensitive geological
                                        formations and unique plant communities
                                    </li>
                                    <li>
                                        <span className="font-medium">Ancient Forest Reserves</span> - Old-growth forests with high
                                        biodiversity value
                                    </li>
                                    <li>
                                        <span className="font-medium">Research Plots</span> - Marked areas used for scientific monitoring
                                        and research
                                    </li>
                                </ul>

                                <h3 className="text-xl font-semibold text-green-700 mt-6">No-Camping Zones</h3>
                                <p className="text-gray-700">Camping is prohibited in the following areas:</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-red-700 flex items-center gap-2">
                                                <XCircle className="h-5 w-5" /> Within 500m of Nature Centers
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>
                                                To prevent overcrowding and maintain the natural experience for day visitors
                                            </CardDescription>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-red-700 flex items-center gap-2">
                                                <XCircle className="h-5 w-5" /> Protected Mire Areas
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>
                                                These fragile ecosystems can be easily damaged by camping activities
                                            </CardDescription>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-red-700 flex items-center gap-2">
                                                <XCircle className="h-5 w-5" /> Archaeological Sites
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>To preserve historical and cultural artifacts from disturbance</CardDescription>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-red-700 flex items-center gap-2">
                                                <XCircle className="h-5 w-5" /> Marked Wildlife Habitats
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>Areas where sensitive wildlife species breed or feed</CardDescription>
                                        </CardContent>
                                    </Card>
                                </div>

                                <h3 className="text-xl font-semibold text-green-700 mt-6">Designated Camping Areas</h3>
                                <p className="text-gray-700">
                                    We provide several designated camping areas that are designed to minimize environmental impact while
                                    offering a great outdoor experience:
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-green-700 flex items-center gap-2">
                                                <CheckCircle2 className="h-5 w-5" /> Lauhanvuori Camping Ground
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>Full facilities including water, toilets, and fire pits</CardDescription>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-green-700 flex items-center gap-2">
                                                <CheckCircle2 className="h-5 w-5" /> Katikankanjoni Wilderness Camp
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>
                                                Basic facilities with composting toilets and designated fire areas
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div className="lg:col-span-1">
                                <div className="sticky top-24 space-y-6">
                                    <div className="relative h-full w-full rounded-lg overflow-hidden">
                                        <Image
                                            src="/images/no-camping.jpg"
                                            alt="Protected area sign in forest"
                                            height={600}
                                            width={600}
                                            className="object-cover"
                                        />
                                    </div>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-green-700">Why We Protect These Areas</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Biodiversity Conservation:</strong> Protected areas serve as refuges for rare and
                                                endangered species that depend on undisturbed habitats.
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                <strong>Geological Preservation:</strong> Many unique geological formations are fragile and can
                                                be damaged by human activity.
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                <strong>Scientific Research:</strong> These areas provide valuable baseline data for
                                                understanding natural processes and climate change impacts.
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                <strong>Cultural Heritage:</strong> Many protected sites have significant historical or cultural
                                                importance to local communities.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                        <h4 className="font-medium text-green-800 flex items-center gap-2 mb-2">
                                            <Info className="h-5 w-5" /> Download Resources
                                        </h4>
                                        <ul className="space-y-2">
                                            <li>
                                                <Link href="#" className="text-green-700 hover:underline flex items-center gap-1">
                                                    <ArrowRight className="h-4 w-4" /> Protected Areas Map (PDF)
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="text-green-700 hover:underline flex items-center gap-1">
                                                    <ArrowRight className="h-4 w-4" /> Camping Guidelines (PDF)
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    {/* Waste Management Instructions */}
                    <TabsContent value="waste-management" className="space-y-8 py-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-6">
                                <h2 className="text-2xl font-bold text-green-800">Waste Management Instructions</h2>

                                <p className="text-gray-700">
                                    Proper waste management is crucial for preserving the natural beauty and ecological health of
                                    Lauhanvuori GeoPark. We operate on a "Pack it in, pack it out" principle, encouraging visitors to take
                                    responsibility for their waste.
                                </p>

                                <Alert className="bg-green-50 border-green-200">
                                    <Leaf className="h-5 w-5 text-green-600" />
                                    <AlertTitle className="text-green-800">Our Commitment</AlertTitle>
                                    <AlertDescription className="text-green-700">
                                        Lauhanvuori GeoPark is working toward a zero-waste goal. Help us by minimizing your waste and
                                        properly disposing of what you cannot avoid generating.
                                    </AlertDescription>
                                </Alert>

                                <h3 className="text-xl font-semibold text-green-700 mt-6">Waste Disposal Facilities</h3>
                                <p className="text-gray-700">
                                    Waste disposal and recycling stations are available at the following locations:
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="flex items-center gap-2">
                                                <MapPin className="h-5 w-5 text-green-700" /> Visitor Centers
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>
                                                Full recycling facilities for paper, cardboard, glass, metal, plastic, and mixed waste
                                            </CardDescription>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="flex items-center gap-2">
                                                <MapPin className="h-5 w-5 text-green-700" /> Main Parking Areas
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>Basic waste and recycling bins for the most common materials</CardDescription>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="flex items-center gap-2">
                                                <MapPin className="h-5 w-5 text-green-700" /> Designated Camping Grounds
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>Separate bins for combustible waste, compost, and recyclables</CardDescription>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="flex items-center gap-2">
                                                <MapPin className="h-5 w-5 text-green-700" /> Trail Entrances
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>
                                                Basic waste bins for small items (not for camping or picnic waste)
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                </div>

                                <h3 className="text-xl font-semibold text-green-700 mt-6">Recycling Guidelines</h3>
                                <p className="text-gray-700">Please sort your waste according to these categories:</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex gap-3">
                                        <div className="mt-1">
                                            <div className="bg-blue-100 p-2 rounded-full">
                                                <Recycle className="h-5 w-5 text-blue-700" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-blue-800">Paper & Cardboard</h4>
                                            <p className="text-sm text-blue-700 mt-1">Clean paper, magazines, cardboard boxes (flattened)</p>
                                        </div>
                                    </div>

                                    <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex gap-3">
                                        <div className="mt-1">
                                            <div className="bg-green-100 p-2 rounded-full">
                                                <Recycle className="h-5 w-5 text-green-700" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-green-800">Glass</h4>
                                            <p className="text-sm text-green-700 mt-1">Bottles and jars (rinsed, without caps)</p>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex gap-3">
                                        <div className="mt-1">
                                            <div className="bg-gray-100 p-2 rounded-full">
                                                <Recycle className="h-5 w-5 text-gray-700" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-800">Metal</h4>
                                            <p className="text-sm text-gray-700 mt-1">Cans, aluminum foil, metal caps (rinsed)</p>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 flex gap-3">
                                        <div className="mt-1">
                                            <div className="bg-yellow-100 p-2 rounded-full">
                                                <Recycle className="h-5 w-5 text-yellow-700" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-yellow-800">Plastic</h4>
                                            <p className="text-sm text-yellow-700 mt-1">Clean plastic packaging, bottles, containers</p>
                                        </div>
                                    </div>

                                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 flex gap-3">
                                        <div className="mt-1">
                                            <div className="bg-amber-100 p-2 rounded-full">
                                                <Leaf className="h-5 w-5 text-amber-700" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-amber-800">Compost</h4>
                                            <p className="text-sm text-amber-700 mt-1">Food scraps, tea bags, coffee grounds, napkins</p>
                                        </div>
                                    </div>

                                    <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex gap-3">
                                        <div className="mt-1">
                                            <div className="bg-red-100 p-2 rounded-full">
                                                <Trash2 className="h-5 w-5 text-red-700" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-red-800">Mixed Waste</h4>
                                            <p className="text-sm text-red-700 mt-1">Items that cannot be recycled or composted</p>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-green-700 mt-6">Special Waste Items</h3>
                                <p className="text-gray-700">Some waste requires special handling:</p>

                                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                                    <li>
                                        <span className="font-medium">Batteries:</span> Collect separately and deposit at visitor centers
                                    </li>
                                    <li>
                                        <span className="font-medium">Medication:</span> Return to pharmacies, never dispose in nature
                                    </li>
                                    <li>
                                        <span className="font-medium">Cooking oils:</span> Collect in a sealed container and dispose at
                                        designated points
                                    </li>
                                    <li>
                                        <span className="font-medium">Hazardous materials:</span> Take to municipal collection points
                                        outside the park
                                    </li>
                                </ul>

                                <h3 className="text-xl font-semibold text-green-700 mt-6">Waste Minimization Tips</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-green-700 text-lg">Before Your Visit</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <p className="text-gray-700 flex items-start gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                                <span>Remove excess packaging from food and supplies</span>
                                            </p>
                                            <p className="text-gray-700 flex items-start gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                                <span>Pack food in reusable containers instead of disposable packaging</span>
                                            </p>
                                            <p className="text-gray-700 flex items-start gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                                <span>Bring reusable water bottles, coffee cups, and utensils</span>
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-green-700 text-lg">During Your Visit</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <p className="text-gray-700 flex items-start gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                                <span>Carry a small bag for collecting your trash</span>
                                            </p>
                                            <p className="text-gray-700 flex items-start gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                                <span>Consider participating in our "Collect More Than Your Own" initiative</span>
                                            </p>
                                            <p className="text-gray-700 flex items-start gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                                <span>Use digital maps instead of paper when possible</span>
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div className="lg:col-span-1">
                                <div className="sticky top-24 space-y-6">
                                    <div className="relative h-full w-full rounded-lg overflow-hidden">
                                        <Image
                                            src="/images/waste-disposal.webp"
                                            alt="Recycling bins in nature park"
                                            height={600}
                                            width={600}
                                            className="object-cover"
                                        />
                                    </div>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-green-700">Impact of Waste in Nature</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Wildlife Harm:</strong> Animals can ingest or become entangled in trash, leading to
                                                injury or death.
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                <strong>Soil & Water Pollution:</strong> Decomposing waste can release harmful chemicals into
                                                soil and waterways.
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                <strong>Visual Pollution:</strong> Litter diminishes the natural beauty and visitor experience
                                                of the park.
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                <strong>Decomposition Time:</strong> Many items take decades or even centuries to decompose in
                                                nature.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                                        <h4 className="font-medium text-amber-800 flex items-center gap-2 mb-2">
                                            <Info className="h-5 w-5" /> Did You Know?
                                        </h4>
                                        <p className="text-sm text-amber-700">
                                            A single plastic bottle can take up to 450 years to decompose in nature, while an aluminum can
                                            takes 80-200 years. Glass bottles may never fully decompose.
                                        </p>
                                    </div>

                                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                        <h4 className="font-medium text-green-800 flex items-center gap-2 mb-2">
                                            <Info className="h-5 w-5" /> Volunteer Opportunities
                                        </h4>
                                        <p className="text-sm text-green-700 mb-3">
                                            Join our monthly clean-up events to help keep the park pristine. Check our events calendar for
                                            upcoming dates.
                                        </p>
                                        <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-100">
                                            View Calendar
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    {/* Low-Impact Travel Guide */}
                    <TabsContent value="low-impact-travel" className="space-y-8 py-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-6">
                                <h2 className="text-2xl font-bold text-green-800">Low-Impact Travel Guide</h2>

                                <p className="text-gray-700">
                                    Transportation is one of the largest contributors to a visitor's environmental footprint. By choosing
                                    sustainable travel options, you can significantly reduce your impact on the environment while enjoying
                                    a more authentic experience of Lauhanvuori GeoPark.
                                </p>

                                <Alert className="bg-blue-50 border-blue-200">
                                    <Bus className="h-5 w-5 text-blue-600" />
                                    <AlertTitle className="text-blue-800">Carbon Footprint Reduction</AlertTitle>
                                    <AlertDescription className="text-blue-700">
                                        Using public transportation instead of a private car can reduce your carbon footprint by up to 70%
                                        for the same journey.
                                    </AlertDescription>
                                </Alert>

                                <h3 className="text-xl font-semibold text-green-700 mt-6">Public Transportation Options</h3>

                                <div className="grid grid-cols-1 gap-4 mt-4">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-blue-700 flex items-center gap-2">
                                                <Bus className="h-5 w-5" /> Bus Services
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <p className="text-gray-700">Several regional bus routes serve the Lauhanvuori GeoPark area:</p>
                                            <div className="overflow-x-auto">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <thead className="bg-gray-50">
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Route
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Frequency
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Stops Near Park
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Pori - Kauhajoki</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Daily, 4 departures</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                            South Entrance, Visitor Center
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Seinäjoki - Isojoki</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                            Weekdays, 2 departures
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                            East Entrance, Lauhansarvi
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Parkano - Karvia</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Mon, Wed, Fri</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">North Entrance</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                For up-to-date schedules and to plan your journey, visit{" "}
                                                <Link href="#" className="text-blue-600 hover:underline">
                                                    Matkahuolto
                                                </Link>{" "}
                                                or{" "}
                                                <Link href="#" className="text-blue-600 hover:underline">
                                                    local transport websites
                                                </Link>
                                                .
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-blue-700 flex items-center gap-2">
                                                <Bus className="h-5 w-5" /> Train Connections
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-700">
                                                The nearest train stations are in Parkano (45km) and Seinäjoki (80km). From these stations, you
                                                can connect to local buses or use our shuttle service (summer season only, reservation
                                                required).
                                            </p>
                                            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                                <h4 className="font-medium text-blue-800">Summer Shuttle Service</h4>
                                                <p className="text-sm text-blue-700 mt-1">
                                                    During June-August, we operate a weekend shuttle service from Parkano train station to the
                                                    main visitor center. Reservations must be made at least 24 hours in advance.
                                                </p>
                                                <Button variant="outline" className="mt-3 border-blue-300 text-blue-700 hover:bg-blue-100">
                                                    Book Shuttle
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <h3 className="text-xl font-semibold text-green-700 mt-6">Cycling to and around the Park</h3>
                                <p className="text-gray-700">
                                    Cycling is an excellent low-impact way to experience Lauhanvuori GeoPark. The region offers several
                                    cycling routes with varying difficulty levels.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="flex items-center gap-2">
                                                <Bike className="h-5 w-5 text-green-700" /> Bike Rental Services
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-700 mb-3">Rent conventional or electric bikes at these locations:</p>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-2">
                                                    <MapPin className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                                                    <span>Main Visitor Center - Regular and e-bikes</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <MapPin className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                                                    <span>Lauhansarvi Nature Resort - Mountain bikes</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <MapPin className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                                                    <span>Kauhajoki Town Center - City bikes</span>
                                                </li>
                                            </ul>
                                            <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">View Rental Options</Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="flex items-center gap-2">
                                                <Bike className="h-5 w-5 text-green-700" /> Recommended Cycling Routes
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-700 mb-3">Explore these popular cycling routes:</p>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                                                    <span>
                            <strong>GeoPark Circle</strong> - 45km, moderate difficulty
                          </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                                                    <span>
                            <strong>Lauha Summit Route</strong> - 15km, easy
                          </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                                                    <span>
                            <strong>Mire Explorer</strong> - 30km, moderate
                          </span>
                                                </li>
                                            </ul>
                                            <Button variant="outline" className="mt-4 border-green-300 text-green-700 hover:bg-green-100">
                                                Download Route Maps
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>

                                <h3 className="text-xl font-semibold text-green-700 mt-6">Walking and Hiking</h3>
                                <p className="text-gray-700">
                                    For the ultimate low-impact experience, explore the park on foot. Many of our trails connect to public
                                    transportation stops, allowing for car-free adventures.
                                </p>

                                <div className="mt-4 p-5 bg-green-50 rounded-lg border border-green-200">
                                    <h4 className="font-medium text-green-800 mb-3">Connected Trail Network</h4>
                                    <p className="text-green-700 mb-4">
                                        Our trail network is designed to connect with public transportation hubs, allowing you to create
                                        multi-day hiking itineraries without a car. Look for the "Transit-Connected Trail" symbol on our
                                        trail maps.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div className="bg-white p-3 rounded-md shadow-sm">
                                            <h5 className="font-medium text-green-800 mb-1">Beginner</h5>
                                            <p className="text-sm text-gray-600">2-5km trails with bus connections at both ends</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-md shadow-sm">
                                            <h5 className="font-medium text-green-800 mb-1">Intermediate</h5>
                                            <p className="text-sm text-gray-600">5-15km trails with rest stops and facilities</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-md shadow-sm">
                                            <h5 className="font-medium text-green-800 mb-1">Advanced</h5>
                                            <p className="text-sm text-gray-600">15km+ trails for experienced hikers</p>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-green-700 mt-6">Carpooling and Ride Sharing</h3>
                                <p className="text-gray-700">
                                    If public transportation doesn't work for your schedule, consider carpooling to reduce your
                                    environmental impact.
                                </p>

                                <div className="mt-4 p-5 bg-blue-50 rounded-lg border border-blue-200">
                                    <h4 className="font-medium text-blue-800 mb-3">GeoPark Ride Share Program</h4>
                                    <p className="text-blue-700 mb-4">
                                        Connect with other visitors planning to visit the park through our dedicated ride-sharing platform.
                                        Share costs, reduce emissions, and meet fellow nature enthusiasts.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Offer a Ride</Button>
                                        <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                                            Find a Ride
                                        </Button>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-green-700 mt-6">Carbon Offsetting</h3>
                                <p className="text-gray-700">
                                    If you must travel by car or fly to reach the region, consider offsetting your carbon footprint.
                                </p>

                                <div className="mt-4 p-5 bg-green-50 rounded-lg border border-green-200">
                                    <h4 className="font-medium text-green-800 mb-3">GeoPark Carbon Offset Initiative</h4>
                                    <p className="text-green-700 mb-4">
                                        Contribute to our local reforestation and peatland restoration projects to offset your travel
                                        emissions. 100% of contributions go directly to conservation work within the GeoPark region.
                                    </p>
                                    <div className="bg-white p-4 rounded-md">
                                        <h5 className="font-medium text-green-800 mb-2">Calculate Your Trip's Carbon Footprint</h5>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Transportation Type</label>
                                                <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500">
                                                    <option>Car (gasoline)</option>
                                                    <option>Car (diesel)</option>
                                                    <option>Car (hybrid)</option>
                                                    <option>Car (electric)</option>
                                                    <option>Flight</option>
                                                    <option>Train</option>
                                                    <option>Bus</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Distance (km, round trip)
                                                </label>
                                                <input
                                                    type="number"
                                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
                                                    placeholder="Enter distance"
                                                />
                                            </div>
                                        </div>
                                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Calculate & Offset</Button>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-1">
                                <div className="sticky top-24 space-y-6">
                                    <div className="relative h-full w-full rounded-lg overflow-hidden">
                                        <Image
                                            src="/images/e-car.jpg"
                                            alt="Electric bikes in nature park"
                                            width={600}
                                            height={600}
                                            className="object-cover"
                                        />
                                    </div>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-green-700">Benefits of Low-Impact Travel</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <p className="text-sm text-gray-600">
                                                <strong>Reduced Carbon Emissions:</strong> Public transport and cycling produce significantly
                                                fewer greenhouse gases than private cars.
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                <strong>Less Traffic Congestion:</strong> Fewer cars mean less congestion in sensitive natural
                                                areas and parking lots.
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                <strong>Enhanced Experience:</strong> Slower travel methods allow you to notice details and
                                                connect more deeply with the landscape.
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                <strong>Support Local Economy:</strong> Using local transport services helps sustain rural
                                                communities and businesses.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                        <h4 className="font-medium text-blue-800 flex items-center gap-2 mb-2">
                                            <Info className="h-5 w-5" /> Accessibility Information
                                        </h4>
                                        <p className="text-sm text-blue-700 mb-3">
                                            All public buses serving the park are wheelchair accessible. Selected trails and facilities are
                                            also designed for visitors with mobility challenges.
                                        </p>
                                        <Link href="#" className="text-blue-700 hover:underline text-sm flex items-center gap-1">
                                            <ArrowRight className="h-4 w-4" /> View Accessibility Guide
                                        </Link>
                                    </div>

                                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                        <h4 className="font-medium text-green-800 flex items-center gap-2 mb-2">
                                            <Info className="h-5 w-5" /> Download Resources
                                        </h4>
                                        <ul className="space-y-2">
                                            <li>
                                                <Link href="#" className="text-green-700 hover:underline flex items-center gap-1 text-sm">
                                                    <ArrowRight className="h-4 w-4" /> Sustainable Travel Guide (PDF)
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="text-green-700 hover:underline flex items-center gap-1 text-sm">
                                                    <ArrowRight className="h-4 w-4" /> Cycling Routes Map (PDF)
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="text-green-700 hover:underline flex items-center gap-1 text-sm">
                                                    <ArrowRight className="h-4 w-4" /> Public Transport Timetables (PDF)
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>

                {/* Call to Action */}
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-8">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">Help Us Protect Lauhanvuori GeoPark</h3>
                    <p className="text-green-700 mb-4">
                        By following these guidelines, you're contributing to the preservation of this unique natural environment
                        for future generations. Thank you for being a responsible visitor!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-green-600 hover:bg-green-700 text-white">
                            <Link href={"/itinerary"}>
                                Plan Your Visit
                            </Link>
                        </Button>
                        <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-100">
                            Learn About Conservation Efforts
                        </Button>
                    </div>
                </div>

                {/* Feedback Section */}
                <div className="border-t border-gray-200 pt-8 mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Share Your Feedback</h3>
                    <p className="text-gray-700 mb-4">
                        Have suggestions for improving our sustainability practices? We'd love to hear from you!
                    </p>
                    <Button variant="outline">Submit Feedback</Button>
                </div>
            </div>
        </main>
    )
}
