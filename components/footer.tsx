import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-primary/90 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
          <p className="mb-6 opacity-90">
            Subscribe to our newsletter for new arrivals and exclusive offers
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-foreground"
            />
            <button className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="text-xl font-bold mb-4">ApparelsClub</h4>
          <p className="opacity-90 text-sm mb-4">
            Premium school uniforms for students of all ages.
          </p>
          <div className="flex gap-4">
            <button className="hover:opacity-80 transition">
              <Facebook className="w-5 h-5" />
            </button>
            <button className="hover:opacity-80 transition">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="hover:opacity-80 transition">
              <Instagram className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Shopping */}
        <div>
          <h5 className="font-semibold mb-4">Shopping</h5>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <Link href="#" className="hover:opacity-100 transition">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-100 transition">
                Best Sellers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-100 transition">
                Clearance
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-100 transition">
                Size Guide
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h5 className="font-semibold mb-4">Support</h5>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <Link href="/contact" className="hover:opacity-100 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-100 transition">
                Returns Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-100 transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-100 transition">
                Shipping Info
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h5 className="font-semibold mb-4">Legal</h5>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <Link href="#" className="hover:opacity-100 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-100 transition">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-100 transition">
                Cookie Settings
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-100 transition">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-6 text-center text-sm opacity-75">
        <p>&copy; 2025 ApparelsClub. All rights reserved. | apparelsclub.com</p>
      </div>
    </footer>
  );
}
