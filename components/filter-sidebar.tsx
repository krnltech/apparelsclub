"use client";

import { SizeFilter } from "@/components/size-filter";
import { ColorFilter } from "@/components/color-filter";
import { PriceRangeFilter } from "@/components/price-range-filter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { categories } from "@/lib/products";

export type FilterState = {
  category: string;
  subcategory: string;
  sizes: string[];
  colors: string[];
  priceRange: [number, number];
};

type FilterSidebarProps = {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
};

export function FilterSidebar({
  filters,
  onFilterChange,
  onClearFilters,
}: FilterSidebarProps) {
  const hasActiveFilters =
    filters.category !== "all" ||
    filters.subcategory !== "all" ||
    filters.sizes.length > 0 ||
    filters.colors.length > 0 ||
    filters.priceRange[0] !== 0 ||
    filters.priceRange[1] !== 100;

  return (
    <aside className="w-64 bg-white border-r border-border p-6 space-y-6 sticky top-[120px] h-fit max-h-[calc(100vh-140px)] overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Filters</h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-xs"
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Category Filter */}
      <Accordion type="single" collapsible defaultValue="category">
        <AccordionItem value="category" className="border-b">
          <AccordionTrigger className="text-sm font-semibold hover:no-underline">
            Category
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              <button
                onClick={() =>
                  onFilterChange({ ...filters, category: "all", subcategory: "all" })
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
          <AccordionItem value="subcategory" className="border-b">
            <AccordionTrigger className="text-sm font-semibold hover:no-underline">
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
                  All {categories.find((c) => c.slug === filters.category)?.name}
                </button>
                {categories
                  .find((c) => c.slug === filters.category)
                  ?.subcategories.map((subcategory) => (
                    <button
                      key={subcategory.id}
                      onClick={() =>
                        onFilterChange({ ...filters, subcategory: subcategory.slug })
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
      <div className="border-b pb-6">
        <SizeFilter
          selectedSizes={filters.sizes}
          onSizeChange={(sizes) => onFilterChange({ ...filters, sizes })}
        />
      </div>

      {/* Color Filter */}
      <div className="border-b pb-6">
        <ColorFilter
          selectedColors={filters.colors}
          onColorChange={(colors) => onFilterChange({ ...filters, colors })}
        />
      </div>

      {/* Price Range Filter */}
      <div className="pb-6">
        <PriceRangeFilter
          priceRange={filters.priceRange}
          onPriceChange={(range) => onFilterChange({ ...filters, priceRange: range })}
        />
      </div>
    </aside>
  );
}
