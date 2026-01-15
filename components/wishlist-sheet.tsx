"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Heart, Trash2, X } from "lucide-react";
import { useWishlist } from "@/contexts/wishlist-context";
import { products } from "@/lib/products";
import Link from "next/link";
import { useState } from "react";

export function WishlistSheet() {
  const { wishlist, removeFromWishlist, clearWishlist, wishlistCount } = useWishlist();
  const [open, setOpen] = useState(false);

  // Get full product details for wishlisted items
  const wishlistProducts = wishlist
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="p-2 hover:bg-accent rounded-lg transition-colors relative">
          <Heart className="w-5 h-5" />
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
              {wishlistCount}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              Your Wishlist
            </SheetTitle>
          </div>
          {wishlistCount > 0 && (
            <p className="text-sm text-muted-foreground">
              {wishlistCount} {wishlistCount === 1 ? "item" : "items"} saved
            </p>
          )}
        </SheetHeader>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto py-4">
          {wishlistProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <Heart className="w-16 h-16 text-muted-foreground/30 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Your wishlist is empty</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Browse our catalogue and save items you like by clicking the heart icon.
              </p>
              <Button onClick={() => setOpen(false)} asChild>
                <Link href="/shop">Browse Catalogue</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlistProducts.map((product) => (
                <div
                  key={product!.id}
                  className="flex gap-4 p-3 rounded-lg border border-border hover:border-primary/30 transition-colors group"
                >
                  {/* Product Image */}
                  <Link
                    href={`/product/${product!.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex-shrink-0"
                  >
                    <div className="w-20 h-20 rounded-md overflow-hidden bg-slate-100">
                      <img
                        src={product!.images.main}
                        alt={product!.product_name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/product/${product!.slug}`}
                      onClick={() => setOpen(false)}
                      className="block"
                    >
                      <h4 className="font-medium text-sm line-clamp-2 hover:text-primary transition-colors">
                        {product!.product_name}
                      </h4>
                    </Link>
                    <p className="text-xs text-muted-foreground mt-1 capitalize">
                      {product!.subcategory}
                    </p>
                    {/* Color swatches preview */}
                    {product!.colors.length > 0 && (
                      <div className="flex items-center gap-1 mt-2">
                        {product!.colors.slice(0, 4).map((color, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 rounded-full border border-border"
                            style={{ backgroundColor: color.code }}
                            title={color.name}
                          />
                        ))}
                        {product!.colors.length > 4 && (
                          <span className="text-xs text-muted-foreground">
                            +{product!.colors.length - 4}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromWishlist(product!.id)}
                    className="flex-shrink-0 p-2 text-muted-foreground hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {wishlistProducts.length > 0 && (
          <div className="border-t pt-4 space-y-3">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                clearWishlist();
              }}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear Wishlist
            </Button>
            <Button className="w-full" onClick={() => setOpen(false)} asChild>
              <Link href="/shop">Continue Browsing</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
