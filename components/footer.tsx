import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { TrustBadges } from "@/components/trust-badges";
import { PaymentIcons } from "@/components/payment-icons";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      {/* Trust Badges Section */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <TrustBadges variant="default" showAll={true} />
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-sky-50 py-12 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-6 px-4 sm:px-0">
              Subscribe for the latest school uniform news and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-4 sm:px-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary w-full"
              />
              <button className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition whitespace-nowrap w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">ApparelsClub</h4>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Premium school uniforms trusted by over 1000+ schools across the UK.
              Quality meets affordability.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">
                <Facebook className="w-4 h-4 text-slate-600" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">
                <Twitter className="w-4 h-4 text-slate-600" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">
                <Instagram className="w-4 h-4 text-slate-600" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">
                <Linkedin className="w-4 h-4 text-slate-600" />
              </a>
            </div>
          </div>

          {/* Shopping */}
          <div>
            <h5 className="font-semibold text-foreground mb-4">Shopping</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=girls" className="text-muted-foreground hover:text-primary transition">
                  Girls Uniform
                </Link>
              </li>
              <li>
                <Link href="/shop?category=boys" className="text-muted-foreground hover:text-primary transition">
                  Boys Uniform
                </Link>
              </li>
              <li>
                <Link href="/shop?category=accessories" className="text-muted-foreground hover:text-primary transition">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/shop?category=clearance" className="text-muted-foreground hover:text-primary transition">
                  Clearance Sale
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-semibold text-foreground mb-4">Support</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Delivery & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Track My Order
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  School Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-semibold text-foreground mb-4">Legal</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition">
                  Modern Slavery Statement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="border-t border-border pt-8 pb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <PaymentIcons showLabel={true} size="md" />
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} ApparelsClub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
