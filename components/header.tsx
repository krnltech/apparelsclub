"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, User, ShoppingBag } from "lucide-react";
import { categories } from "@/lib/products";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";
import { SearchModal } from "@/components/search-modal";

const TRUST_MESSAGES = [
  "FREE delivery on orders over £50",
  "30-Day Money Back Guarantee • No Questions Asked",
  "Next Day Delivery Available • Order Before 3pm",
  "Trusted by 1000+ Schools Across the UK"
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Rotate trust messages every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        (prevIndex + 1) % TRUST_MESSAGES.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground py-2.5 text-center text-sm font-medium">
        <p className="transition-opacity duration-300">
          {TRUST_MESSAGES[currentMessageIndex]}
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-primary flex-shrink-0">
              ApparelsClub
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center flex-1 justify-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  {/* Girls Category */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium">
                      Girls
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4">
                        <div className="grid gap-3">
                          <Link
                            href="/shop?category=girls"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">All Girls Uniform</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Browse our complete range for girls
                            </p>
                          </Link>
                          {categories
                            .find(c => c.id === "girls")
                            ?.subcategories.map((sub) => (
                              <Link
                                key={sub.id}
                                href={`/shop?category=girls&subcategory=${sub.slug}`}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{sub.name}</div>
                              </Link>
                            ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Boys Category */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium">
                      Boys
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4">
                        <div className="grid gap-3">
                          <Link
                            href="/shop?category=boys"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">All Boys Uniform</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Browse our complete range for boys
                            </p>
                          </Link>
                          {categories
                            .find(c => c.id === "boys")
                            ?.subcategories.map((sub) => (
                              <Link
                                key={sub.id}
                                href={`/shop?category=boys&subcategory=${sub.slug}`}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{sub.name}</div>
                              </Link>
                            ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Accessories */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium">
                      Accessories
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4">
                        <div className="grid gap-3">
                          <Link
                            href="/shop?category=accessories"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">All Accessories</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Complete your uniform
                            </p>
                          </Link>
                          {categories
                            .find(c => c.id === "accessories")
                            ?.subcategories.map((sub) => (
                              <Link
                                key={sub.id}
                                href={`/shop?category=accessories&subcategory=${sub.slug}`}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{sub.name}</div>
                              </Link>
                            ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* PE Kit */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium">
                      PE Kit
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4">
                        <div className="grid gap-3">
                          <Link
                            href="/shop?category=pe-kit"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">All PE Kit</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Everything for sports and PE
                            </p>
                          </Link>
                          {categories
                            .find(c => c.id === "pe-kit")
                            ?.subcategories.map((sub) => (
                              <Link
                                key={sub.id}
                                href={`/shop?category=pe-kit&subcategory=${sub.slug}`}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{sub.name}</div>
                              </Link>
                            ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Clearance */}
                  <NavigationMenuItem>
                    <Link
                      href="/shop?category=clearance"
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      )}
                    >
                      Clearance
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <button
                className="p-2 hover:bg-accent rounded-lg transition-colors"
                onClick={() => setSearchOpen(true)}
                aria-label="Search products"
              >
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-accent rounded-lg transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  0
                </span>
              </button>

              {/* Mobile Menu Button */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <button className="lg:hidden p-2">
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <VisuallyHidden>
                    <SheetTitle>Navigation Menu</SheetTitle>
                  </VisuallyHidden>
                  <nav className="flex flex-col gap-4 mt-8">
                    <Link
                      href="/"
                      className="text-lg font-semibold hover:text-primary transition"
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/shop"
                      className="text-lg font-semibold hover:text-primary transition"
                      onClick={() => setIsOpen(false)}
                    >
                      Shop
                    </Link>
                    <Link
                      href="/contact"
                      className="text-lg font-semibold hover:text-primary transition"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>

                    <div className="border-t pt-4 mt-4">
                      <div className="text-sm font-semibold mb-3">Categories</div>
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/shop?category=${category.slug}`}
                          className="block py-2 text-sm hover:text-primary transition"
                          onClick={() => setIsOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}
