"use client";

import { useState, useMemo } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { products, Product } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { FilterSidebar, FilterState } from "@/components/filter-sidebar";
import { FilterSheet } from "@/components/filter-sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SortOption = "popular" | "price-low" | "price-high" | "newest";

export default function Shop() {
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    subcategory: "all",
    sizes: [],
    colors: [],
    priceRange: [0, 100],
  });
  const [sortBy, setSortBy] = useState<SortOption>("popular");

  // Apply filters
  const filteredProducts = useMemo(() => {
    let result = products;

    // Category filter
    if (filters.category !== "all") {
      result = result.filter((p) => p.category === filters.category);
    }

    // Subcategory filter
    if (filters.subcategory !== "all") {
      result = result.filter((p) => p.subcategory === filters.subcategory);
    }

    // Size filter
    if (filters.sizes.length > 0) {
      result = result.filter((p) =>
        p.sizes.available.some((size) => filters.sizes.includes(size))
      );
    }

    // Color filter
    if (filters.colors.length > 0) {
      result = result.filter((p) =>
        p.colors.some((color) => filters.colors.includes(color.name))
      );
    }

    // Price filter
    result = result.filter((p) => {
      const price = parseFloat(p.price.replace("£", ""));
      return price >= filters.priceRange[0] && price <= filters.priceRange[1];
    });

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort(
          (a, b) =>
            parseFloat(a.price.replace("£", "")) -
            parseFloat(b.price.replace("£", ""))
        );
        break;
      case "price-high":
        result.sort(
          (a, b) =>
            parseFloat(b.price.replace("£", "")) -
            parseFloat(a.price.replace("£", ""))
        );
        break;
      case "newest":
        result.sort((a, b) =>
          a.isNewArrival === b.isNewArrival ? 0 : a.isNewArrival ? -1 : 1
        );
        break;
      case "popular":
      default:
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [filters, sortBy]);

  // Count active filters
  const activeFilterCount =
    (filters.category !== "all" ? 1 : 0) +
    (filters.subcategory !== "all" ? 1 : 0) +
    filters.sizes.length +
    filters.colors.length +
    (filters.priceRange[0] !== 0 || filters.priceRange[1] !== 100 ? 1 : 0);

  const clearFilters = () => {
    setFilters({
      category: "all",
      subcategory: "all",
      sizes: [],
      colors: [],
      priceRange: [0, 100],
    });
  };

  const removeFilter = (type: string, value?: string) => {
    switch (type) {
      case "category":
        setFilters({ ...filters, category: "all", subcategory: "all" });
        break;
      case "subcategory":
        setFilters({ ...filters, subcategory: "all" });
        break;
      case "size":
        if (value) {
          setFilters({
            ...filters,
            sizes: filters.sizes.filter((s) => s !== value),
          });
        }
        break;
      case "color":
        if (value) {
          setFilters({
            ...filters,
            colors: filters.colors.filter((c) => c !== value),
          });
        }
        break;
      case "price":
        setFilters({ ...filters, priceRange: [0, 100] });
        break;
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-slate-50 py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Shop School Uniforms
          </h1>
          <p className="text-muted-foreground">
            Premium quality uniforms for every student
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8">
            {/* Desktop Sidebar - hidden on mobile */}
            <div className="hidden lg:block">
              <FilterSidebar
                filters={filters}
                onFilterChange={setFilters}
                onClearFilters={clearFilters}
              />
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  {/* Mobile Filter Button */}
                  <div className="lg:hidden">
                    <FilterSheet
                      filters={filters}
                      onFilterChange={setFilters}
                      onClearFilters={clearFilters}
                      activeFilterCount={activeFilterCount}
                    />
                  </div>

                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {filteredProducts.length}
                    </span>{" "}
                    products
                  </p>
                </div>

                {/* Sort */}
                <Select
                  value={sortBy}
                  onValueChange={(value) => setSortBy(value as SortOption)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Active Filters */}
              {activeFilterCount > 0 && (
                <div className="flex items-center gap-2 mb-6 flex-wrap">
                  <span className="text-sm font-medium">Active Filters:</span>
                  {filters.category !== "all" && (
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => removeFilter("category")}
                      className="h-7 text-xs"
                    >
                      {filters.category}
                      <X className="w-3 h-3 ml-1" />
                    </Button>
                  )}
                  {filters.subcategory !== "all" && (
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => removeFilter("subcategory")}
                      className="h-7 text-xs"
                    >
                      {filters.subcategory}
                      <X className="w-3 h-3 ml-1" />
                    </Button>
                  )}
                  {filters.sizes.map((size) => (
                    <Button
                      key={size}
                      variant="secondary"
                      size="sm"
                      onClick={() => removeFilter("size", size)}
                      className="h-7 text-xs"
                    >
                      {size}
                      <X className="w-3 h-3 ml-1" />
                    </Button>
                  ))}
                  {filters.colors.map((color) => (
                    <Button
                      key={color}
                      variant="secondary"
                      size="sm"
                      onClick={() => removeFilter("color", color)}
                      className="h-7 text-xs"
                    >
                      {color}
                      <X className="w-3 h-3 ml-1" />
                    </Button>
                  ))}
                  {(filters.priceRange[0] !== 0 ||
                    filters.priceRange[1] !== 100) && (
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => removeFilter("price")}
                      className="h-7 text-xs"
                    >
                      £{filters.priceRange[0]} - £{filters.priceRange[1]}
                      <X className="w-3 h-3 ml-1" />
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="h-7 text-xs text-primary hover:text-primary"
                  >
                    Clear All
                  </Button>
                </div>
              )}

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg mb-4">
                    No products found matching your filters.
                  </p>
                  <Button onClick={clearFilters}>Clear All Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
