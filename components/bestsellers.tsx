'use client'

import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { getSampleProducts } from "@/lib/products"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const sampleProducts = getSampleProducts(3)

const featureCards = [
  {
    id: 1,
    title: "Heritage Collection",
    description: "Celebrating 160 Years of Heritage. Learn more about our journey from humble beginnings to a leading brand.",
    image: "/school-uniform-heritage-collection.jpg",
    color: "bg-blue-600",
    link: "/shop"
  },
  {
    id: 2,
    title: "Made to Last",
    description: "Wash after wash, our uniforms last longer than any high street brand. Premium quality that endures.",
    image: "/durable-school-uniform-fabric.jpg",
    color: "bg-yellow-400",
    link: "/shop"
  },
  {
    id: 3,
    title: "Sustainability",
    description: "We recycle plastic bottles to make uniform for future generations that really lasts.",
    image: "/eco-friendly-school-uniform.jpg",
    color: "bg-green-500",
    link: "/shop"
  }
]

export default function Bestsellers() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Bestsellers
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Your most wanted uniforms for this term
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {sampleProducts.map((product: any) => (
            <Link
              key={product.id}
              href="/shop"
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-300 to-yellow-300">
                <img
                  src={product.image_url || "/placeholder.svg?height=192&width=256&query=school%20uniform"}
                  alt={product.product_name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {product.product_name}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-muted"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  View <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Size Guide */}
          <div className="relative rounded-xl overflow-hidden h-64 bg-gradient-to-r from-orange-400 to-orange-600">
            <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">What's my size?</h3>
              <p className="text-white/90 mb-6">Get the right size first time</p>
              <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors w-fit">
                TRY IT NOW
              </button>
            </div>
            <img
              src="/girl-measuring-size-uniform.jpg"
              alt="Size guide"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
          </div>

          {/* Payment Plan */}
          <div className="relative rounded-xl overflow-hidden h-64 bg-gradient-to-r from-pink-400 to-pink-600">
            <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Spread the load</h3>
              <p className="text-white/90 mb-6">With payment plans, spread your uniform shop payment over three months.</p>
              <button className="bg-white text-pink-600 px-6 py-2 rounded-lg font-semibold hover:bg-pink-50 transition-colors w-fit">
                FIND OUT MORE
              </button>
            </div>
            <img
              src="/child-with-piggy-bank-payment-plan.jpg"
              alt="Payment plan"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
