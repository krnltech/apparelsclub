"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, User } from "lucide-react";
import { WishlistSheet } from "@/components/wishlist-sheet";
import { categories } from "@/lib/products";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";
import { SearchModal } from "@/components/search-modal";

const TRUST_MESSAGES = [
  { mobile: "FREE delivery over £50", desktop: "FREE delivery on orders over £50" },
  { mobile: "30-Day Money Back Guarantee", desktop: "30-Day Money Back Guarantee • No Questions Asked" },
  { mobile: "Next Day Delivery Available", desktop: "Next Day Delivery Available • Order Before 3pm" }
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
          <span className="sm:hidden">{TRUST_MESSAGES[currentMessageIndex].mobile}</span>
          <span className="hidden sm:inline">{TRUST_MESSAGES[currentMessageIndex].desktop}</span>
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
              <WishlistSheet />

              {/* Mobile Menu Button */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <button className="lg:hidden p-2">
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
                  <VisuallyHidden>
                    <SheetTitle>Navigation Menu</SheetTitle>
                  </VisuallyHidden>
                  <nav className="flex flex-col py-6">
                    {/* Main Navigation Links */}
                    <div className="space-y-2 mb-6">
                      <Link
                        href="/"
                        className="block px-4 py-3.5 text-lg font-semibold hover:bg-primary/10 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        href="/shop"
                        className="block px-4 py-3.5 text-lg font-semibold hover:bg-primary/10 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Shop
                      </Link>
                      <Link
                        href="/contact"
                        className="block px-4 py-3.5 text-lg font-semibold hover:bg-primary/10 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Contact
                      </Link>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-border my-2"></div>

                    {/* Categories Section */}
                    <div className="mt-4">
                      <div className="px-4 mb-3">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Shop by Category</span>
                      </div>

                      <Accordion type="single" collapsible className="w-full">
                        {categories.filter(cat => cat.id !== "clearance").map((category) => (
                          <AccordionItem key={category.id} value={category.id} className="border-0 mb-1">
                            <AccordionTrigger className="px-4 py-3 text-base font-semibold hover:bg-primary/5 rounded-lg hover:no-underline data-[state=open]:bg-primary/10 data-[state=open]:text-primary [&>svg]:data-[state=open]:text-primary">
                              {category.name}
                            </AccordionTrigger>
                            <AccordionContent className="pb-1 pt-1">
                              <div className="bg-slate-50/50 rounded-lg p-2 mx-2 space-y-0.5">
                                {/* "All [Category]" link */}
                                <Link
                                  href={`/shop?category=${category.slug}`}
                                  className="block py-2.5 px-3 text-sm font-semibold text-primary hover:bg-white rounded-md transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  View All {category.name}
                                </Link>

                                {/* Subcategory links */}
                                {category.subcategories.map((sub) => (
                                  <Link
                                    key={sub.id}
                                    href={`/shop?category=${category.slug}&subcategory=${sub.slug}`}
                                    className="block py-2 px-3 text-sm text-foreground/80 hover:text-foreground hover:bg-white rounded-md transition-colors"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>

                      {/* Clearance as standalone link */}
                      <Link
                        href="/shop?category=clearance"
                        className="block px-4 py-3 text-base font-semibold hover:bg-red-50 text-red-600 hover:text-red-700 rounded-lg transition-colors mt-2"
                        onClick={() => setIsOpen(false)}
                      >
                        🏷️ Clearance Sale
                      </Link>
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
