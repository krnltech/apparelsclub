import { Card } from "@/components/ui/card"
import { CheckCircle, Leaf, Zap, Shield, Award } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "Superior Quality",
    description: "Premium materials built to last through the school year and beyond",
  },
  {
    icon: Leaf,
    title: "Sustainable Choices",
    description: "Eco-friendly fabrics and ethical manufacturing practices",
  },
  {
    icon: Zap,
    title: "Lightning Fast Shipping",
    description: "Next working day delivery available on most orders",
  },
  {
    icon: Shield,
    title: "Money Back Guarantee",
    description: "30-day returns policy, no questions asked",
  },
  {
    icon: Award,
    title: "Award Winning Service",
    description: "Trusted by schools and families across the UK",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Why ApparelsClub?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're committed to providing the best school uniforms with exceptional customer service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
