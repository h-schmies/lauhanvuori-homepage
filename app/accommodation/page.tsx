import type { Metadata } from "next"
import AccommodationClientPage from "./AccommodationClientPage"

export const metadata: Metadata = {
  title: "Accommodation & Services | Lauhanvuori GeoPark",
  description: "Find accommodation, restaurants, and services in Lauhanvuori GeoPark",
}

export default function AccommodationPage() {
  return <AccommodationClientPage />
}
