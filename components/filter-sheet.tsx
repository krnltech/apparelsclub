"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { SizeFilter } from "@/components/size-filter";
import { ColorFilter } from "@/components/color-filter";
import { PriceRangeFilter } from "@/components/price-range-filter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { categories } from "@/lib/products";
import { FilterState } from "@/components/filter-sidebar";

type FilterSheetProps = {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
  activeFilterCount: number;
};

export function FilterSheet({
  filters,
  onFilterChange,
  onClearFilters,
  activeFilterCount,
}: FilterSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Filters
          {activeFilterCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          {activeFilterCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-xs"
            >
              Clear All ({activeFilterCount})
            </Button>
          )}
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Category Filter */}
          <Accordion type="single" collapsible defaultValue="category">
            <AccordionItem value="category">
              <AccordionTrigger className="text-sm font-semibold">
                Category
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() =>
                      onFilterChange({
                        ...filters,
                        category: "all",
                        subcategory: "all",
                      })
                    }
                    className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                      filters.category === "all"
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-slate-100"
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() =>
                        onFilterChange({
                          ...filters,
                          category: category.slug,
                          subcategory: "all",
                        })
                      }
                      className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                        filters.category === category.slug
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-slate-100"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Subcategory Filter */}
          {filters.category !== "all" && (
            <Accordion type="single" collapsible defaultValue="subcategory">
              <AccordionItem value="subcategory">
                <AccordionTrigger className="text-sm font-semibold">
                  Subcategory
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 pt-2">
                    <button
                      onClick={() =>
                        onFilterChange({ ...filters, subcategory: "all" })
                      }
                      className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                        filters.subcategory === "all"
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-slate-100"
                      }`}
                    >
                      All{" "}
                      {categories.find((c) => c.slug === filters.category)?.name}
                    </button>
                    {categories
                      .find((c) => c.slug === filters.category)
                      ?.subcategories.map((subcategory) => (
                        <button
                          key={subcategory.id}
                          onClick={() =>
                            onFilterChange({
                              ...filters,
                              subcategory: subcategory.slug,
                            })
                          }
                          className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                            filters.subcategory === subcategory.slug
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-slate-100"
                          }`}
                        >
                          {subcategory.name}
                        </button>
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}

          {/* Size Filter */}
          <div className="border-t pt-6">
            <SizeFilter
              selectedSizes={filters.sizes}
              onSizeChange={(sizes) => onFilterChange({ ...filters, sizes })}
            />
          </div>

          {/* Color Filter */}
          <div className="border-t pt-6">
            <ColorFilter
              selectedColors={filters.colors}
              onColorChange={(colors) =>
                onFilterChange({ ...filters, colors })
              }
            />
          </div>

          {/* Price Range Filter */}
          <div className="border-t pt-6">
            <PriceRangeFilter
              priceRange={filters.priceRange}
              onPriceChange={(range) =>
                onFilterChange({ ...filters, priceRange: range })
              }
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
