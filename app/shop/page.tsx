"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Filter } from 'lucide-react'
import { useState } from "react"
import { uniformData } from "@/lib/products"

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("Boys School Uniform")
  const [cart, setCart] = useState(0)

  // Get all products and organize by category
  const currentCategory = uniformData.find(cat => cat.category === selectedCategory)
  const products = currentCategory?.items || []

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-balance">Shop Our Collection</h1>
          <p className="text-purple-100 mt-2">Discover our full range of premium school uniforms</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-8">
            {uniformData.map((category) => (
              <Button
                key={category.category}
                onClick={() => setSelectedCategory(category.category)}
                variant={selectedCategory === category.category ? "default" : "outline"}
                className={selectedCategory === category.category 
                  ? "bg-primary text-white" 
                  : "bg-transparent border-primary text-primary hover:bg-primary/10"
                }
              >
                {category.category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product: any) => (
              <Card key={product.id} className="bg-card overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 bg-muted overflow-hidden group">
                  <img
                    src={product.image_url || "/placeholder.svg?height=256&width=256&query=school%20uniform"}
                    alt={product.product_name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full hover:bg-white transition shadow-md">
                    <Heart className="w-5 h-5 text-primary" />
                  </button>
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2 line-clamp-2">{product.product_name}</h3>
                    <div className="flex items-center gap-2">
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
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
                  </div>

                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => setCart(cart + 1)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
