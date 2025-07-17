import { HeroSection } from "@/components/hero-section"
import { NavigationBar } from "@/components/navigation-bar"
import { DirectorySection } from "@/components/directory-section"
import { PlacesToLive } from "@/components/places-to-live"
import { PlacesToEat } from "@/components/places-to-eat"
import { PortugueseWayOfLife } from "@/components/portuguese-way-of-life"
import { AdSenseUnit } from "@/components/adsense-unit"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <NavigationBar />
      <HeroSection />

      {/* Header Banner Ad - positioned like in reference */}
      <div className="bg-soft-gray/20 py-4">
        <AdSenseUnit type="banner" className="mx-auto" />
      </div>

      <main className="container mx-auto px-4 py-12 space-y-16">
        <DirectorySection />

        {/* In-content Ad */}
        <AdSenseUnit type="rectangle" className="mx-auto" />

        <PlacesToLive />

        {/* In-content Ad */}
        <AdSenseUnit type="native" className="my-12" />

        <PlacesToEat />

        {/* In-content Ad */}
        <AdSenseUnit type="rectangle" className="mx-auto" />

        <section id="culture">
          <PortugueseWayOfLife />
        </section>
      </main>

      <Footer />
    </div>
  )
}
