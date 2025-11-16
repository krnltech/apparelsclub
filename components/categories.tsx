import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Shirt, Paintbrush as Pants, Pocket as Jacket, Briefcase, Shovel as Shoe, Sparkles } from "lucide-react"

const categories = [
  {
    name: "Polo Shirts",
    icon: Shirt,
    color: "bg-blue-100 text-blue-600",
    href: "#",
  },
  {
    name: "Trousers",
    icon: Pants,
    color: "bg-purple-100 text-primary",
    href: "#",
  },
  {
    name: "Blazers",
    icon: Jacket,
    color: "bg-red-100 text-red-600",
    href: "#",
  },
  {
    name: "Skirts",
    icon: Briefcase,
    color: "bg-pink-100 text-pink-600",
    href: "#",
  },
  {
    name: "Shoes",
    icon: Shoe,
    color: "bg-green-100 text-green-600",
    href: "#",
  },
  {
    name: "PE Kit",
    icon: Sparkles,
    color: "bg-accent/20 text-accent",
    href: "#",
  },
]

export default function Categories() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Shop by Category</h2>
          <p className="text-muted-foreground text-lg">Explore our wide range of school apparel</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.name} href={category.href}>
                <Card className="h-full p-6 hover:shadow-lg transition-all cursor-pointer hover:scale-105 flex flex-col items-center justify-center text-center space-y-3 bg-card hover:bg-muted">
                  <div className={`${category.color} p-4 rounded-full`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.name}</h3>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
