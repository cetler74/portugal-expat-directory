"use client"

import { MapPin, Star, Euro, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function PlacesToLive() {
  const regions = [
    {
      name: "Lisbon & Surroundings",
      image: "/placeholder.svg?height=300&width=400",
      description: "Portugal's vibrant capital with rich history and modern amenities",
      avgRent: "€800-1500",
      expats: "High",
      rating: 4.8,
      highlights: ["Historic neighborhoods", "Great public transport", "International community", "Cultural scene"],
    },
    {
      name: "Porto & North",
      image: "/placeholder.svg?height=300&width=400",
      description: "Charming northern region known for wine and authentic Portuguese culture",
      avgRent: "€500-900",
      expats: "Medium",
      rating: 4.6,
      highlights: ["Lower cost of living", "UNESCO World Heritage", "Wine country", "Friendly locals"],
    },
    {
      name: "Algarve & South",
      image: "/placeholder.svg?height=300&width=400",
      description: "Sunny southern coast perfect for beach lovers and retirees",
      avgRent: "€600-1200",
      expats: "Very High",
      rating: 4.7,
      highlights: ["Beautiful beaches", "Golf courses", "Warm climate", "Expat communities"],
    },
    {
      name: "Central Portugal",
      image: "/placeholder.svg?height=300&width=400",
      description: "Peaceful countryside with medieval towns and natural beauty",
      avgRent: "€400-700",
      expats: "Low",
      rating: 4.5,
      highlights: ["Affordable living", "Historic towns", "Natural parks", "Quiet lifestyle"],
    },
  ]

  return (
    <section id="places-to-live" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-blue mb-4">Places to Live</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find your perfect home in Portugal with our detailed regional guides
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {regions.map((region, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 bg-gray-200">
              <img src={region.image || "/placeholder.svg"} alt={region.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                <Star className="h-4 w-4 text-sunshine-yellow mr-1" />
                <span className="text-sm font-medium">{region.rating}</span>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="font-serif text-ocean-blue">{region.name}</span>
                <MapPin className="h-5 w-5 text-terracotta" />
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-gray-600 mb-4">{region.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="flex items-center">
                  <Euro className="h-3 w-3 mr-1" />
                  {region.avgRent}
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Users className="h-3 w-3 mr-1" />
                  {region.expats} Expats
                </Badge>
              </div>

              <div className="space-y-2 mb-6">
                {region.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-terracotta rounded-full mr-3" />
                    {highlight}
                  </div>
                ))}
              </div>

              <Button className="w-full bg-ocean-blue hover:bg-ocean-blue/90">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
