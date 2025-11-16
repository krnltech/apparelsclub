import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/school-uniform-students-smiling-classroom.jpg"
          alt="Students in school uniforms"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12 w-full h-full py-16 md:py-20">
        {/* Left Text Content */}
        <div className="text-white space-y-6 flex-1 md:max-w-lg">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Premium School Uniforms Trusted by 1000+ Schools
            </h1>
            <p className="text-lg md:text-xl text-gray-100">
              Where quality meets affordability. Comfortable, durable, and stylish uniforms for every student.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/shop">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-yellow-400 font-semibold shadow-lg">
                Start Shopping
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 bg-transparent font-semibold">
              Learn More
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div>
              <p className="font-bold text-2xl md:text-3xl text-accent">1000+</p>
              <p className="text-sm text-gray-200">Partner Schools</p>
            </div>
            <div>
              <p className="font-bold text-2xl md:text-3xl text-accent">30 Days</p>
              <p className="text-sm text-gray-200">Free Returns</p>
            </div>
            <div>
              <p className="font-bold text-2xl md:text-3xl text-accent">Next Day</p>
              <p className="text-sm text-gray-200">Delivery</p>
            </div>
          </div>
        </div>

        {/* Right Feature Box - Similar to Trutex style */}
        <div className="hidden md:flex flex-1 justify-end">
          <div className="relative bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-10 max-w-md">
            <div className="absolute -top-2 -right-2 w-24 h-24 bg-accent rounded-full opacity-10 blur-2xl"></div>
            <h3 className="text-2xl font-bold text-primary mb-4">Why ApparelsClub?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
                <span>Premium quality uniforms made to last</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
                <span>Affordable pricing for bulk orders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
                <span>Fast shipping & hassle-free returns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
                <span>Trusted by 1000+ schools nationwide</span>
              </li>
            </ul>
            <Link href="/shop" className="inline-block mt-6">
              <Button className="w-full bg-primary text-white hover:bg-purple-700 font-semibold">
                Explore Uniforms
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
