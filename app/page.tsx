import Hero from "@/components/hero"
import ParkMap from "@/components/park-map"
import ActivityShowcase from "@/components/activity-showcase"
import InfoSection from "@/components/info-section"
import AccommodationShowcase from "@/components/accommodation-showcase"

export default function Home() {
  return (

    <div className="container mx-auto px-4 py-8">
      <Hero />
      <InfoSection />
      <ActivityShowcase />
      <AccommodationShowcase />
      <ParkMap />
    </div>
  )
}
