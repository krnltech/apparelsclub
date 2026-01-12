"use client";

type ColorFilterProps = {
  selectedColors: string[];
  onColorChange: (colors: string[]) => void;
};

const COLORS = [
  { name: "Navy", code: "#001f3f" },
  { name: "Black", code: "#111111" },
  { name: "Grey", code: "#7f8c8d" },
  { name: "White", code: "#ffffff" },
  { name: "Red", code: "#e74c3c" },
  { name: "Blue", code: "#3498db" },
  { name: "Green", code: "#27ae60" },
  { name: "Burgundy", code: "#8b0000" },
];

export function ColorFilter({ selectedColors, onColorChange }: ColorFilterProps) {
  const handleColorToggle = (colorName: string) => {
    const updated = selectedColors.includes(colorName)
      ? selectedColors.filter((c) => c !== colorName)
      : [...selectedColors, colorName];
    onColorChange(updated);
  };

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-sm">Color</h3>
      <div className="grid grid-cols-4 gap-3">
        {COLORS.map((color) => (
          <button
            key={color.name}
            onClick={() => handleColorToggle(color.name)}
            className={`relative flex flex-col items-center gap-1 group`}
            title={color.name}
          >
            <div
              className={`w-10 h-10 rounded-full border-2 transition-all ${
                selectedColors.includes(color.name)
                  ? "border-primary ring-2 ring-primary/20 scale-110"
                  : "border-border hover:border-primary/50"
              }`}
              style={{
                backgroundColor: color.code,
                boxShadow: color.name === "White" ? "inset 0 0 0 1px #e5e7eb" : "none",
              }}
            >
              {selectedColors.includes(color.name) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white drop-shadow-md"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{
                      filter: color.name === "White" ? "invert(1)" : "none",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </div>
            <span className="text-xs text-muted-foreground text-center">
              {color.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
