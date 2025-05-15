import type { Metadata } from "next"
import ItineraryContent from "./itinerary-content"

export const metadata: Metadata = {
    title: "7-day Itinerary | Lauhanvuori GeoPark",
    description:
        "Explore Lauhanvuori GeoPark with our 7-day itinerary, featuring hiking, biking, and skiing activities. Discover the best routes and accommodations.",
}

export default function SustainabilityPage() {
    return <ItineraryContent />
}
