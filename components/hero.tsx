import Image from "next/image"
import Link from "next/link"
import {Button} from "@/components/ui/button"

export default function Hero() {
    return (
        <div className="relative h-[600px] w-full mb-16 rounded-lg overflow-hidden">
            <Image
                src="/images/forest-panorama.png"
                alt="Panoramic view of Lauhanvuori GeoPark forest landscape"
                fill
                className="object-cover"
                priority
            />
            <div
                className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex flex-col justify-center px-8 md:px-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">From Mountains to Mires</h1>
                <p className="text-xl md:text-2xl text-white max-w-2xl mb-8">
                    Explore the untouched wild of Western Finland – free and unforgettable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                        asChild
                        size="lg"
                        className="!bg-green-800 hover:!bg-green-600 text-white border-0"
                        style={{backgroundColor: "#16a34a"}}
                    >
                        <Link href="/activities">Explore Activities</Link>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="!bg-white/20 text-white border-white hover:!bg-white/30"
                        style={{backgroundColor: "rgba(255, 255, 255, 0.2)"}}
                    >
                        <Link href="/itinerary">Plan Your Visit</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
