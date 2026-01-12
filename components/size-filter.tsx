"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type SizeFilterProps = {
  selectedSizes: string[];
  onSizeChange: (sizes: string[]) => void;
};

const SIZES = [
  { value: "3-4Y", label: "3-4 years" },
  { value: "5-6Y", label: "5-6 years" },
  { value: "7-8Y", label: "7-8 years" },
  { value: "9-10Y", label: "9-10 years" },
  { value: "11-12Y", label: "11-12 years" },
  { value: "13-14Y", label: "13-14 years" },
  { value: "15-16Y", label: "15-16 years" },
];

export function SizeFilter({ selectedSizes, onSizeChange }: SizeFilterProps) {
  const handleSizeToggle = (size: string) => {
    const updated = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];
    onSizeChange(updated);
  };

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-sm">Size</h3>
      <div className="space-y-2">
        {SIZES.map((size) => (
          <div key={size.value} className="flex items-center space-x-2">
            <Checkbox
              id={`size-${size.value}`}
              checked={selectedSizes.includes(size.value)}
              onCheckedChange={() => handleSizeToggle(size.value)}
            />
            <Label
              htmlFor={`size-${size.value}`}
              className="text-sm font-normal cursor-pointer"
            >
              {size.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
