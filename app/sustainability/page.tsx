import type { Metadata } from "next"
import SustainabilityContent from "./sustainability-content"

export const metadata: Metadata = {
    title: "Sustainability & Visitor Responsibility | Lauhanvuori GeoPark",
    description:
        "Learn about sustainable practices, protected areas, waste management, and low-impact travel options at Lauhanvuori GeoPark.",
}

export default function SustainabilityPage() {
    return <SustainabilityContent />
}
