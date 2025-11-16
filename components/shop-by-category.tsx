"use client";

import Link from "next/link";
import {
  Accessories,
  Blazer,
  Blouse,
  Clearance,
  PeKit,
  Polo,
  Skirt,
  Trousers,
} from "./icons";

const categories = [
  {
    name: "Skirts",
    icon: Skirt,
    link: "/shop?category=skirts",
  },
  {
    name: "Trousers",
    icon: Trousers,
    link: "/shop?category=trousers",
  },
  {
    name: "Polo Shirts",
    icon: Polo,
    link: "/shop?category=polo",
  },
  {
    name: "Blouses",
    icon: Blouse,
    link: "/shop?category=blouses",
  },
  {
    name: "Blazers",
    icon: Blazer,
    link: "/shop?category=blazers",
  },
  {
    name: "Accessories",
    icon: Accessories,
    link: "/shop?category=accessories",
  },
  {
    name: "PE Kit",
    icon: PeKit,
    link: "/shop?category=pe-kit",
  },
  {
    name: "Clearance",
    icon: Clearance,
    link: "/shop?category=clearance",
  },
];

export default function ShopByCategory() {
  return (
    <section className="py-16 bg-background emoji">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Shop by Category
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Browse our complete collection of school uniforms organized by type
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Link
                key={index}
                href={category.link}
                className="group flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-white border-2 border-transparent hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Circular Icon Container */}
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                  <Icon className="w-12 h-12" strokeWidth={1.75} />
                </div>
                <p className="text-center font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
