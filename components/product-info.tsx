"use client";

import { useState } from "react";
import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Star, Heart, Ruler, ShoppingBag } from "lucide-react";
import { SimpleTrustBadges } from "@/components/trust-badges";
import { PaymentIcons } from "@/components/payment-icons";
import { SizeGuide } from "@/components/size-guide";

type ProductInfoProps = {
  product: Product;
};

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "");
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  const selectedColorObj = product.colors.find((c) => c.name === selectedColor);

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {product.product_name}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-slate-200 text-slate-200"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-4xl font-bold text-foreground">
          {product.price}
        </span>
        {product.originalPrice && (
          <span className="text-xl text-muted-foreground line-through">
            {product.originalPrice}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Color Selector */}
      {product.colors.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold">
              Color: <span className="font-normal text-muted-foreground">{selectedColor}</span>
            </label>
          </div>
          <div className="flex flex-wrap gap-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                disabled={!color.inStock}
                className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                  selectedColor === color.name
                    ? "border-primary ring-2 ring-primary/20 scale-110"
                    : "border-border hover:border-primary/50"
                } ${!color.inStock && "opacity-50 cursor-not-allowed"}`}
                style={{ backgroundColor: color.code }}
                title={color.name}
              >
                {!color.inStock && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-red-500 rotate-45"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Size Selector */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-semibold">
            Size: {selectedSize && <span className="font-normal text-muted-foreground">{selectedSize}</span>}
          </label>
          <button
            onClick={() => setSizeGuideOpen(true)}
            className="text-sm text-primary hover:underline flex items-center gap-1"
          >
            <Ruler className="w-4 h-4" />
            Size Guide
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {product.sizes.available.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-3 px-4 rounded-md border-2 text-sm font-medium transition-all ${
                selectedSize === size
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-4">
        <Button
          size="lg"
          className="w-full text-base h-12"
          disabled={!selectedSize || !selectedColorObj?.inStock}
        >
          <ShoppingBag className="w-5 h-5 mr-2" />
          Add to Cart
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="w-full text-base h-12"
        >
          <Heart className="w-5 h-5 mr-2" />
          Add to Wishlist
        </Button>
      </div>

      {/* Trust Badges */}
      <div className="pt-6 border-t">
        <SimpleTrustBadges />
      </div>

      {/* Payment Methods */}
      <div className="pt-6 border-t">
        <PaymentIcons showLabel={true} size="sm" className="justify-center sm:justify-start" />
      </div>

      {/* Product Features */}
      {product.features.length > 0 && (
        <div className="pt-6 border-t">
          <h3 className="text-sm font-semibold mb-3">Key Features</h3>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Stock Status */}
      <div className="pt-4">
        {product.inStock ? (
          <p className="text-sm text-green-600 font-medium">✓ In Stock - Ready to ship</p>
        ) : (
          <p className="text-sm text-red-600 font-medium">Out of Stock</p>
        )}
      </div>

      {/* Size Guide Modal */}
      <SizeGuide
        open={sizeGuideOpen}
        onOpenChange={setSizeGuideOpen}
        sizeGuideId={product.sizes.sizeGuide}
      />
    </div>
  );
}
