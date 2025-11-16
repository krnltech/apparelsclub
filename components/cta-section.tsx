import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  return (
    <section id="why-choose" className="py-16 md:py-24 bg-gradient-to-r from-primary to-purple-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
          Ready to Upgrade Your School Uniform Game?
        </h2>
        <p className="text-lg text-purple-100 mb-8 text-balance">
          Join thousands of satisfied parents and schools choosing ApparelsClub for quality, value, and reliability.
        </p>
        <Link href="/shop">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-yellow-400 font-semibold">
            Shop Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
