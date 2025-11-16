import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Leaf } from "lucide-react"

export default function Promotions() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* Main Promotion */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-accent via-yellow-300 to-yellow-200 p-8 md:p-12 text-gray-900">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="w-6 h-6" />
                <span className="font-semibold text-sm">LIMITED TIME OFFER</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">Get 20% Off Your First Order</h3>
              <p className="text-gray-800">Use code WELCOME20 at checkout. Valid for new customers only.</p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Shop Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="text-center text-5xl md:text-7xl font-bold text-primary/20">20%</div>
          </div>
        </div>

        {/* Two Column Promotions */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sustainability */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-green-100 p-8 border border-green-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-green-200 p-3 rounded-lg">
                <Leaf className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-green-900">Eco-Conscious Choices</h4>
                <p className="text-green-700 text-sm">Made with sustainable materials</p>
              </div>
            </div>
            <p className="text-green-800 mb-4">
              Our new eco-friendly collection uses recycled materials without compromising on quality or comfort.
            </p>
            <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50 bg-transparent">
              Learn More
            </Button>
          </div>

          {/* School Partnerships */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 p-8 border border-purple-200">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-purple-900">Partner with Your School</h4>
              <p className="text-purple-800">
                Schools and PTAs get special discounts and bulk ordering benefits. Contact us for more details.
              </p>
              <div className="space-y-2 text-sm text-purple-700">
                <p>✓ Bulk discounts up to 15%</p>
                <p>✓ Custom branding options</p>
                <p>✓ Dedicated account manager</p>
              </div>
              <Button variant="outline" className="border-purple-600 text-purple-700 hover:bg-purple-50 bg-transparent">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
