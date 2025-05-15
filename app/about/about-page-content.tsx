"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPageContent() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">About Lauhanvuori GeoPark</h1>
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-gray-700 mb-6">
                        Lauhanvuori-Hämeenkangas UNESCO Global GeoPark is a testament to Finland's geological heritage, showcasing
                        the evolution of the landscape from ancient mountains to mires over billions of years. Designated as a
                        UNESCO Global GeoPark in 2020, this area represents the unique natural and cultural heritage of western
                        Finland spanning across three regions: South Ostrobothnia, Satakunta, and Pirkanmaa.
                    </p>
                </div>
            </div>

            {/* Main Image */}
            <div className="relative h-[400px] w-full mb-16 rounded-xl overflow-hidden">
                <Image
                    src="/images/forest-panorama.png"
                    alt="Panoramic view of Lauhanvuori GeoPark"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* History and Geology Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-center">History and Geology</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-lg mb-4">
                            The geological story of Lauhanvuori begins approximately 1.9 billion years ago, when the bedrock of the
                            area was formed during the Svecofennian orogeny. The ancient mountain range that once dominated the
                            landscape has since been eroded, leaving behind the distinctive features we see today.
                        </p>
                        <p className="text-lg mb-4">
                            During the last Ice Age, which ended about 10,000 years ago, the entire area was covered by a massive ice
                            sheet. As the ice retreated, it sculpted the landscape, creating unique geological formations such as
                            eskers, kames, and kettle holes that are characteristic of the region.
                        </p>
                        <p className="text-lg">
                            The post-glacial rebound, where the land rises after being freed from the weight of the ice, continues to
                            this day at a rate of about 7 mm per year. This phenomenon has contributed to the formation of the
                            extensive mire systems that are now a defining feature of the GeoPark.
                        </p>
                    </div>
                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                        <Image
                            src="/images/mire.webp"
                            alt="Geological formations in Lauhanvuori"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Why It's Unique Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-center">Why It's Unique</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Biodiversity Tile */}
                    <Card className="overflow-hidden">
                        <div className="relative h-48">
                            <Image src="/images/mire.webp" alt="Biodiversity in Lauhanvuori" fill className="object-cover" />
                        </div>
                        <CardContent className="pt-6">
                            <h3 className="text-xl font-bold mb-3">Biodiversity</h3>
                            <p>
                                Lauhanvuori GeoPark hosts an exceptional variety of ecosystems, from old-growth forests to expansive
                                mires. The park is home to over 500 plant species, including rare orchids and carnivorous plants. The
                                diverse habitats support numerous bird species, including the endangered white-backed woodpecker, as
                                well as mammals like moose, lynx, and flying squirrels. The clean waters of the park's streams and lakes
                                provide a habitat for native fish species and freshwater pearl mussels.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Silence Tile */}
                    <Card className="overflow-hidden">
                        <div className="relative h-48">
                            <Image
                                src="/images/silence.webp"
                                alt="Silent landscape of Lauhanvuori"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <CardContent className="pt-6">
                            <h3 className="text-xl font-bold mb-3">Silence</h3>
                            <p>
                                One of the most precious resources in our modern world is silence, and Lauhanvuori GeoPark offers this
                                in abundance. The park is recognized as one of Finland's quietest natural areas, with noise levels often
                                below 30 decibels. This natural silence allows visitors to experience the subtle sounds of nature—the
                                rustle of leaves, the calls of birds, and the gentle flow of water. The park has designated "silence
                                spots" where visitors can immerse themselves in the tranquility of the Finnish wilderness.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Landscape Tile */}
                    <Card className="overflow-hidden">
                        <div className="relative h-48">
                            <Image src="/images/landscape.webp" alt="Landscape of Lauhanvuori" fill className="object-cover" />
                        </div>
                        <CardContent className="pt-6">
                            <h3 className="text-xl font-bold mb-3">Landscape</h3>
                            <p>
                                The landscape of Lauhanvuori GeoPark is characterized by its striking contrasts. The park features
                                Finland's largest raised bog complex, with extensive mire systems that have developed over thousands of
                                years. Rising from these flat wetlands is Lauhanvuori Hill, the highest point in western Finland at 231
                                meters above sea level. The park also includes distinctive esker formations, crystal-clear springs, and
                                meandering rivers. This diverse topography creates a mosaic of habitats and offers visitors panoramic
                                views that showcase the unique beauty of the Finnish natural environment.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Did You Know Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-center">Did You Know?</h2>
                <div className="bg-green-50 rounded-xl p-8">
                    <Tabs defaultValue="fact1" className="w-full">
                        <TabsList className="grid grid-cols-3 mb-6">
                            <TabsTrigger value="fact1">Fact 1</TabsTrigger>
                            <TabsTrigger value="fact2">Fact 2</TabsTrigger>
                            <TabsTrigger value="fact3">Fact 3</TabsTrigger>
                        </TabsList>
                        <TabsContent value="fact1" className="p-4 bg-white rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-3">Ancient Shorelines</h3>
                            <p className="text-lg">
                                Lauhanvuori Hill was one of the first islands to emerge from the sea after the last Ice Age,
                                approximately 10,000 years ago. The ancient shorelines are still visible on the slopes of the hill,
                                marked by distinctive stone fields at different elevations. These stone fields, known as "devil's
                                fields" in Finnish folklore, were formed by wave action when they were at sea level.
                            </p>
                        </TabsContent>
                        <TabsContent value="fact2" className="p-4 bg-white rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-3">Groundwater Phenomenon</h3>
                            <p className="text-lg">
                                The GeoPark is home to a unique groundwater phenomenon. The permeable sandstone bedrock of Lauhanvuori
                                Hill acts as a massive natural water filter, creating numerous springs around its base. These springs
                                produce some of the purest natural water in Finland, with a constant temperature of around 4°C
                                year-round. Some of these springs never freeze, even during the harshest winter months.
                            </p>
                        </TabsContent>
                        <TabsContent value="fact3" className="p-4 bg-white rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-3">Cultural Heritage</h3>
                            <p className="text-lg">
                                The GeoPark area has been inhabited since the Stone Age, with archaeological findings dating back
                                approximately 9,000 years. The landscape has shaped the local culture and traditions, particularly
                                around mire utilization. The park contains over 200 tar-burning pits from the 18th and 19th centuries,
                                evidence of the historical tar production that was once a major industry in the region and an important
                                export product for Finland.
                            </p>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
                <h2 className="text-2xl font-bold mb-4">Experience Lauhanvuori GeoPark</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                    Whether you're interested in geology, biodiversity, or simply seeking peace in nature, Lauhanvuori GeoPark
                    offers something for everyone. Plan your visit today and discover the wonders of this unique UNESCO Global
                    GeoPark.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="/activities"
                        className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                    >
                        Explore Activities
                    </a>
                    <a
                        href="/transportation/to-the-park"
                        className="bg-white border border-green-600 text-green-600 hover:bg-green-50 font-medium py-2 px-6 rounded-md transition-colors"
                    >
                        Plan Your Visit
                    </a>
                </div>
            </section>
        </div>
    )
}
