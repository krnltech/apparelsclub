import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Parent",
    school: "Riverside Secondary School",
    text: "Excellent quality and amazing customer service. My son loves his uniforms and they've held up perfectly all year.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "School Administrator",
    school: "Central Primary School",
    text: "We've been ordering from ApparelsClub for 3 years. The consistency and reliability are unmatched in our experience.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Parent",
    school: "Westfield Academy",
    text: "Fast delivery, great prices, and the uniforms fit perfectly. Highly recommend to all parents!",
    rating: 5,
  },
]

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Trusted by Parents & Schools</h2>
          <p className="text-muted-foreground text-lg">See what our customers have to say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">{testimonial.text}</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-primary">{testimonial.school}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
