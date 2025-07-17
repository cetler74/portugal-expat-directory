"use client"

import { Calendar, MessageCircle, FileText, Users, Heart, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PortugueseWayOfLife() {
  const lifeAspects = [
    {
      icon: Heart,
      title: "Cultural Insights",
      description: "Understanding Portuguese values, traditions, and social norms",
      topics: ["Family importance", "Hospitality culture", "Work-life balance", "Religious traditions"],
      color: "text-terracotta",
    },
    {
      icon: Calendar,
      title: "Festivals & Events",
      description: "Experience Portugal's vibrant festival calendar throughout the year",
      topics: ["Santos Populares", "Festa da Flor", "Festival de Fado", "Local celebrations"],
      color: "text-ocean-blue",
    },
    {
      icon: MessageCircle,
      title: "Language Tips",
      description: "Essential Portuguese phrases and language learning resources",
      topics: ["Basic phrases", "Pronunciation guide", "Language schools", "Practice opportunities"],
      color: "text-sunshine-yellow",
    },
    {
      icon: FileText,
      title: "Bureaucracy Guide",
      description: "Navigate Portuguese administrative processes with confidence",
      topics: ["NIF registration", "SEF appointments", "Healthcare system", "Banking setup"],
      color: "text-terracotta",
    },
    {
      icon: Users,
      title: "Social Customs",
      description: "Learn the unwritten rules of Portuguese social interactions",
      topics: ["Greeting etiquette", "Dining customs", "Business culture", "Friendship building"],
      color: "text-ocean-blue",
    },
    {
      icon: BookOpen,
      title: "Practical Living",
      description: "Day-to-day tips for living comfortably in Portugal",
      topics: ["Shopping habits", "Transportation", "Utilities setup", "Emergency contacts"],
      color: "text-sunshine-yellow",
    },
  ]

  return (
    <section id="way-of-life" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-blue mb-4">Portuguese Way of Life</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Immerse yourself in Portuguese culture and learn to live like a local
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {lifeAspects.map((aspect, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm"
          >
            <CardHeader className="text-center pb-4">
              <div className="inline-flex p-3 rounded-full bg-soft-gray/30 mb-4">
                <aspect.icon className={`h-8 w-8 ${aspect.color}`} />
              </div>
              <CardTitle className="text-xl font-serif text-gray-900">{aspect.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">{aspect.description}</p>
              <ul className="space-y-2 mb-6 text-left">
                {aspect.topics.map((topic, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${aspect.color.replace("text-", "bg-")}`} />
                    {topic}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className={`w-full border-2 ${aspect.color} hover:bg-current hover:text-white transition-colors duration-200`}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
