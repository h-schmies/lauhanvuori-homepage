import type { Metadata } from "next"
import AroundTheParkClient from "./around-the-park-client"

export const metadata: Metadata = {
    title: "Around the Park | Transportation | Lauhanvuori GeoPark",
    description: "Explore transportation options within Lauhanvuori GeoPark, including e-bike and electric quad rentals",
}

export default function AroundTheParkPage() {
    return <AroundTheParkClient />
}
