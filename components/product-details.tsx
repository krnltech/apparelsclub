"use client";

import { Product } from "@/lib/products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";

type ProductDetailsProps = {
  product: Product;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <Tabs defaultValue="details" className="w-full">
      <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
        <TabsTrigger
          value="details"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
        >
          Details
        </TabsTrigger>
        <TabsTrigger
          value="care"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
        >
          Care Instructions
        </TabsTrigger>
        <TabsTrigger
          value="delivery"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
        >
          Delivery & Returns
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
        >
          Reviews ({product.reviews})
        </TabsTrigger>
      </TabsList>

      {/* Details Tab */}
      <TabsContent value="details" className="py-8 space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Product Description</h3>
          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        </div>

        {product.features.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Key Features</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.materials.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Materials</h3>
            <ul className="space-y-2">
              {product.materials.map((material, index) => (
                <li key={index} className="text-muted-foreground">
                  • {material}
                </li>
              ))}
            </ul>
          </div>
        )}
      </TabsContent>

      {/* Care Instructions Tab */}
      <TabsContent value="care" className="py-8 space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Care Instructions</h3>
          {product.careInstructions.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {product.careInstructions.map((instruction, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg"
                >
                  <span className="text-2xl">🧺</span>
                  <span className="text-sm text-muted-foreground">{instruction}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              Please refer to the care label attached to the garment.
            </p>
          )}
        </div>

        <div className="bg-sky-50 p-6 rounded-lg">
          <h4 className="font-semibold mb-2">Care Tips</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Always check the care label before washing</li>
            <li>• Wash dark colors separately</li>
            <li>• Turn garments inside out before washing</li>
            <li>• Remove promptly from washing machine</li>
            <li>• Iron on reverse side if needed</li>
          </ul>
        </div>
      </TabsContent>

      {/* Delivery & Returns Tab */}
      <TabsContent value="delivery" className="py-8 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Delivery Options</h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Standard Delivery</span>
                  <span className="text-primary font-semibold">FREE</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Orders over £50 • 3-5 working days
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Next Day Delivery</span>
                  <span className="text-primary font-semibold">£5.99</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Order before 3pm • Next working day
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Returns Policy</h3>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="font-medium text-green-900 mb-2">
                30-Day Money Back Guarantee
              </p>
              <p className="text-sm text-green-800">
                Not happy with your purchase? Return it within 30 days for a full refund. No questions asked.
              </p>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Items must be unworn and in original packaging</li>
              <li>• Include all tags and labels</li>
              <li>• Return shipping is FREE</li>
              <li>• Refunds processed within 5-7 working days</li>
            </ul>
          </div>
        </div>
      </TabsContent>

      {/* Reviews Tab */}
      <TabsContent value="reviews" className="py-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl font-bold">{product.rating}</span>
              <div>
                <div className="flex items-center">
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
                <p className="text-sm text-muted-foreground mt-1">
                  Based on {product.reviews} reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-6 border-t">
          {/* Sample Reviews */}
          {[
            {
              name: "Sarah Johnson",
              rating: 5,
              date: "2 weeks ago",
              comment: "Excellent quality! My daughter loves these trousers. They wash well and keep their shape.",
              verified: true,
            },
            {
              name: "Michael Brown",
              rating: 4,
              date: "1 month ago",
              comment: "Good value for money. Sizing is accurate. Would recommend.",
              verified: true,
            },
            {
              name: "Emma Williams",
              rating: 5,
              date: "1 month ago",
              comment: "Perfect fit! The stain-resistant fabric actually works. Very impressed.",
              verified: true,
            },
          ].map((review, index) => (
            <div key={index} className="p-6 bg-slate-50 rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{review.name}</span>
                    {review.verified && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-slate-200 text-slate-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{review.comment}</p>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
