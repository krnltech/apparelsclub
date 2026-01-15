import Header from "@/components/header"
import Hero from "@/components/hero"
import ShopByCategory from "@/components/shop-by-category"
import Bestsellers from "@/components/bestsellers"
import Features from "@/components/features"
import CTA from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ShopByCategory />
      <Bestsellers />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}
