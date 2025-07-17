"use client"

import { Utensils, Star, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function PlacesToEat() {
  const categories = [
    {
      title: "Traditional Tascas",
      description: "Authentic Portuguese taverns serving local favorites",
      restaurants: [
        {
          name: "Taberna do Largo",
          location: "Lisbon",
          rating: 4.9,
          priceRange: "€€",
          specialty: "Bacalhau à Brás",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "O Diplomata",
          location: "Porto",
          rating: 4.7,
          priceRange: "€€",
          specialty: "Francesinha",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      title: "Fine Dining",
      description: "Michelin-starred and upscale restaurants",
      restaurants: [
        {
          name: "Belcanto",
          location: "Lisbon",
          rating: 4.8,
          priceRange: "€€€€",
          specialty: "Modern Portuguese",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "The Yeatman",
          location: "Porto",
          rating: 4.9,
          priceRange: "€€€€",
          specialty: "Contemporary",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
  ]

  return (
    <section id="places-to-eat" className="py-16 bg-soft-gray/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-blue mb-4">Places to Eat</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover Portugal's incredible culinary scene from traditional tascas to fine dining
        </p>
      </div>

      <div className="space-y-12">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-terracotta mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.restaurants.map((restaurant, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 bg-gray-200">
                    <img
                      src={restaurant.image || "/placeholder.svg"}
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                      <Star className="h-4 w-4 text-sunshine-yellow mr-1" />
                      <span className="text-sm font-medium">{restaurant.rating}</span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="font-serif text-ocean-blue">{restaurant.name}</span>
                      <Utensils className="h-5 w-5 text-terracotta" />
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{restaurant.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">{restaurant.priceRange}</Badge>
                      <Badge variant="outline">{restaurant.specialty}</Badge>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-terracotta text-terracotta hover:bg-terracotta hover:text-white bg-transparent"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
