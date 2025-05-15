import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {LucideBike, LucideBook, LucideTrees} from "lucide-react";

export default function InfoSection() {
  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Welcome to Lauhanvuori GeoPark</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A UNESCO Global GeoPark showcasing Finland's unique geological heritage and natural beauty
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-lg mb-4">
            Lauhanvuori-Hämeenkangas UNESCO Global GeoPark is located in western Finland, spanning across three regions:
            South Ostrobothnia, Satakunta, and Pirkanmaa. The GeoPark tells a fascinating story of how the landscape has
            evolved from ancient mountains to mires over billions of years.
          </p>
          <p className="text-lg mb-4">
            The area is characterized by its unique combination of geological features, including Finland's largest
            raised bog complex, the highest point in western Finland, and distinctive landforms shaped by the last Ice
            Age.
          </p>
          <p className="text-lg">
            The park offers visitors a chance to explore diverse ecosystems, from ancient forests to expansive mires,
            through well-maintained trails and guided experiences. Whether you're hiking, biking, or skiing, Lauhanvuori
            GeoPark provides unforgettable encounters with Finnish nature.
          </p>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="/images/info-picture.png"
            alt="Lauhanvuori landscape"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <div className="bg-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LucideBike height={40} width={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Outdoor Activities</h3>
            </div>
            <p>
              Explore the GeoPark through a variety of outdoor activities including hiking on well-marked trails,
              mountain biking on forest paths, and cross-country skiing on winter tracks. Each season offers unique
              experiences of the park's natural beauty.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <div className="bg-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LucideTrees height={40} width={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Geological Wonders</h3>
            </div>
            <p>
              Discover the park's unique geological features, from ancient bedrock over 1.9 billion years old to
              landforms shaped by the last Ice Age. The park's diverse landscapes include Finland's largest raised bog
              complex, distinctive ridges, and the highest point in western Finland.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <div className="bg-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LucideBook height={40} width={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Cultural Heritage</h3>
            </div>
            <p>
              Experience the rich cultural heritage of the region, where traditional Finnish ways of life have been
              shaped by the unique natural environment. Visit local villages, taste regional specialties, and learn
              about how communities have adapted to life between mountains and mires.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
