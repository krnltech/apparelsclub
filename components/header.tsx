"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, User } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
        <p>FREE delivery on orders over £50 • Next working day delivery available</p>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          ApparelsClub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-foreground hover:text-primary transition">
            Features
          </Link>
          <Link href="#why-choose" className="text-foreground hover:text-primary transition">
            Why Choose Us
          </Link>
          <Link href="#testimonials" className="text-foreground hover:text-primary transition">
            Testimonials
          </Link>
          <Link href="/shop" className="text-foreground hover:text-primary transition font-semibold">
            Shop
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-muted rounded-lg transition">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-muted rounded-lg transition">
            <User className="w-5 h-5" />
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <Link href="#features" className="block text-foreground hover:text-primary">
              Features
            </Link>
            <Link href="#why-choose" className="block text-foreground hover:text-primary">
              Why Choose Us
            </Link>
            <Link href="#testimonials" className="block text-foreground hover:text-primary">
              Testimonials
            </Link>
            <Link href="/shop" className="block text-foreground hover:text-primary font-semibold">
              Shop
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
