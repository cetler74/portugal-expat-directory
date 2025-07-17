"use client"

import { Home, Utensils, Users, Map } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function DirectorySection() {
  const sections = [
    {
      icon: Home,
      title: "Places to Live",
      description: "Discover the best neighborhoods and regions across Portugal for expats",
      features: ["Lisbon & Surroundings", "Porto & North", "Algarve & South", "Central Portugal", "Islands"],
      color: "text-ocean-blue",
      bgColor: "bg-ocean-blue/5",
    },
    {
      icon: Utensils,
      title: "Places to Eat",
      description: "From traditional tascas to fine dining, explore Portugal's culinary scene",
      features: ["Traditional Tascas", "Fine Dining", "Regional Specialties", "Expat-Friendly", "Local Favorites"],
      color: "text-terracotta",
      bgColor: "bg-terracotta/5",
    },
    {
      icon: Users,
      title: "Portuguese Way of Life",
      description: "Cultural insights and practical tips for living like a local",
      features: ["Cultural Insights", "Festivals & Events", "Language Tips", "Bureaucracy Guide", "Social Customs"],
      color: "text-sunshine-yellow",
      bgColor: "bg-sunshine-yellow/10",
    },
  ]

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-blue mb-4">Explore Portugal Your Way</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Navigate through our comprehensive directory to find exactly what you're looking for
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <Card key={index} className={`${section.bgColor} border-0 hover:shadow-lg transition-shadow duration-300`}>
            <CardHeader className="text-center pb-4">
              <div className={`inline-flex p-3 rounded-full ${section.bgColor} mb-4`}>
                <section.icon className={`h-8 w-8 ${section.color}`} />
              </div>
              <CardTitle className="text-xl font-serif text-gray-900">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">{section.description}</p>
              <ul className="space-y-2 mb-6">
                {section.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-center justify-center">
                    <Map className="h-4 w-4 mr-2 text-gray-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className={`w-full border-2 ${section.color} hover:bg-current hover:text-white transition-colors duration-200`}
              >
                Explore {section.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
