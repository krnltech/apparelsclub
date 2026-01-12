"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Search, TrendingUp } from "lucide-react";
import { searchProducts, getAllAvailableSizes, getAllAvailableColors, getPriceRange } from "@/lib/products";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@/components/ui/dialog";

type SearchModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Load recent searches from localStorage
  useEffect(() => {
    const recent = localStorage.getItem("recentSearches");
    if (recent) {
      setRecentSearches(JSON.parse(recent));
    }
  }, []);

  // Search with debounce
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      const searchResults = searchProducts(query);
      setResults(searchResults.slice(0, 8)); // Limit to 8 results
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = useCallback((productSlug: string, productName: string) => {
    // Save to recent searches
    const updated = [productName, ...recentSearches.filter(s => s !== productName)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));

    // Navigate to product
    router.push(`/product/${productSlug}`);
    onOpenChange(false);
    setQuery("");
  }, [recentSearches, router, onOpenChange]);

  const handleRecentSearch = (search: string) => {
    setQuery(search);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-full sm:max-w-2xl p-0 gap-0 mx-4 sm:mx-auto">
        <VisuallyHidden>
          <DialogTitle>Search Products</DialogTitle>
        </VisuallyHidden>
        <Command className="rounded-lg border-0">
          <CommandInput
            placeholder="Search for school uniforms..."
            value={query}
            onValueChange={setQuery}
            className="border-0"
          />
          <CommandList className="max-h-[50vh] sm:max-h-[400px]">
            {query.length === 0 && recentSearches.length > 0 && (
              <CommandGroup heading="Recent Searches">
                {recentSearches.map((search) => (
                  <CommandItem
                    key={search}
                    onSelect={() => handleRecentSearch(search)}
                    className="cursor-pointer"
                  >
                    <TrendingUp className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{search}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            {query.length > 0 && results.length === 0 && (
              <CommandEmpty>
                <div className="py-6 text-center">
                  <Search className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    No products found for "{query}"
                  </p>
                </div>
              </CommandEmpty>
            )}

            {results.length > 0 && (
              <CommandGroup heading="Products">
                {results.map((product) => (
                  <CommandItem
                    key={product.id}
                    value={product.product_name}
                    onSelect={() => handleSelect(product.slug, product.product_name)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <img
                        src={product.images.main}
                        alt={product.product_name}
                        className="w-12 h-12 object-cover rounded border"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium line-clamp-1">
                          {product.product_name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>

        {/* Quick Filters */}
        <div className="border-t p-4 bg-slate-50">
          <p className="text-xs font-semibold text-muted-foreground mb-2">QUICK FILTERS</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => router.push("/shop?category=girls")}
              className="text-xs px-3 py-1.5 rounded-full border border-border bg-white hover:bg-slate-100 transition"
            >
              Girls Uniform
            </button>
            <button
              onClick={() => router.push("/shop?category=boys")}
              className="text-xs px-3 py-1.5 rounded-full border border-border bg-white hover:bg-slate-100 transition"
            >
              Boys Uniform
            </button>
            <button
              onClick={() => router.push("/shop?category=accessories")}
              className="text-xs px-3 py-1.5 rounded-full border border-border bg-white hover:bg-slate-100 transition"
            >
              Accessories
            </button>
            <button
              onClick={() => router.push("/shop?category=clearance")}
              className="text-xs px-3 py-1.5 rounded-full border border-border bg-white hover:bg-slate-100 transition"
            >
              Clearance
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
