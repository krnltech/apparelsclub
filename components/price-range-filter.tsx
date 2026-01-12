"use client";

import { Slider } from "@/components/ui/slider";

type PriceRangeFilterProps = {
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
  min?: number;
  max?: number;
};

export function PriceRangeFilter({
  priceRange,
  onPriceChange,
  min = 0,
  max = 100,
}: PriceRangeFilterProps) {
  const handleValueChange = (values: number[]) => {
    onPriceChange([values[0], values[1]]);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-sm">Price Range</h3>
      <div className="space-y-4">
        <Slider
          min={min}
          max={max}
          step={5}
          value={[priceRange[0], priceRange[1]]}
          onValueChange={handleValueChange}
          className="w-full"
        />
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            £{priceRange[0]}
          </span>
          <span className="text-muted-foreground">
            £{priceRange[1]}
          </span>
        </div>
      </div>
    </div>
  );
}
