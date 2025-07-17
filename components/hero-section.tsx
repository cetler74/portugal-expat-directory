"use client"

import { Utensils, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.4), rgba(30, 58, 138, 0.3)), url('/images/portugal-hero.jpg')`,
        }}
      />

      {/* Content - Responsive design */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading - Responsive text sizes */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight text-white">
          Your Guide to
          <span className="block text-sunshine-yellow mt-2">Expat Life in Portugal</span>
        </h1>

        {/* Subtitle - Responsive text and spacing */}
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed text-white px-4 sm:px-0">
          Discover the best places to eat, live, and experience the Portuguese way of life
        </p>

        {/* Buttons - Responsive layout and sizing */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-xs sm:max-w-md mx-auto px-4 sm:px-0">
          <Button
            size="lg"
            className="bg-ocean-blue hover:bg-ocean-blue/90 text-white px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center text-sm sm:text-base font-medium"
          >
            <Home className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            Find Places to Live
          </Button>
          <Button
            size="lg"
            className="bg-terracotta hover:bg-terracotta/90 text-white px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center text-sm sm:text-base font-medium"
          >
            <Utensils className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            Discover Food
          </Button>
        </div>

        {/* Mobile-specific spacing adjustment */}
        <div className="h-16 sm:h-0" />
      </div>
    </section>
  )
}
