import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Classic Polo Shirt",
    price: "£19.99",
    image: "/purple-polo-shirt.jpg",
    rating: 4.5,
    reviews: 128,
    colors: ["bg-purple-500", "bg-white", "bg-black"],
  },
  {
    id: 2,
    name: "School Trousers",
    price: "£34.99",
    image: "/school-trousers-uniform.jpg",
    rating: 4.8,
    reviews: 203,
    colors: ["bg-gray-800", "bg-gray-600", "bg-blue-900"],
  },
  {
    id: 3,
    name: "Blazer Jacket",
    price: "£89.99",
    image: "/purple-blazer-uniform.jpg",
    rating: 4.6,
    reviews: 87,
    colors: ["bg-purple-700", "bg-navy-900", "bg-gray-900"],
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Best Sellers</h2>
          <p className="text-muted-foreground text-lg">Our most popular items for this season</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-card overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 bg-muted overflow-hidden group">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full hover:bg-white transition shadow-md">
                  <Heart className="w-5 h-5 text-primary" />
                </button>
              </div>

              <div className="p-5 space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">{product.name}</h3>
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
                  <p className="text-2xl font-bold text-primary mb-3">{product.price}</p>
                  <div className="flex gap-2 mb-4">
                    {product.colors.map((color, i) => (
                      <button
                        key={i}
                        className={`w-6 h-6 rounded-full border-2 border-muted hover:border-primary transition ${color}`}
                      />
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Add to Cart</Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 bg-transparent">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
