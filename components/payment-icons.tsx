"use client";

import { cn } from "@/lib/utils";
import { CreditCard } from "lucide-react";

type PaymentMethod = {
  name: string;
  icon: string;
  alt: string;
};

const paymentMethods: PaymentMethod[] = [
  { name: "Visa", icon: "/payment-icons/visa.svg", alt: "Visa" },
  { name: "Mastercard", icon: "/payment-icons/mastercard.svg", alt: "Mastercard" },
  { name: "PayPal", icon: "/payment-icons/paypal.svg", alt: "PayPal" },
  { name: "Klarna", icon: "/payment-icons/klarna.svg", alt: "Klarna" },
  { name: "Apple Pay", icon: "/payment-icons/apple-pay.svg", alt: "Apple Pay" },
  { name: "Google Pay", icon: "/payment-icons/google-pay.svg", alt: "Google Pay" },
];

type PaymentIconsProps = {
  className?: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
};

export function PaymentIcons({
  className,
  showLabel = true,
  size = "md"
}: PaymentIconsProps) {
  const sizeClasses = {
    sm: "h-5",
    md: "h-6",
    lg: "h-8"
  };

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {showLabel && (
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          We accept:
        </span>
      )}
      <div className="flex items-center gap-3 flex-wrap">
        {paymentMethods.map((method) => (
          <div
            key={method.name}
            className="relative opacity-70 hover:opacity-100 transition-opacity"
            title={method.alt}
          >
            <img
              src={method.icon}
              alt={method.alt}
              className={cn("w-auto object-contain", sizeClasses[size])}
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            {/* Fallback placeholder */}
            <div
              className={cn(
                "hidden items-center justify-center bg-muted rounded px-2 py-1 text-xs font-medium text-muted-foreground",
                sizeClasses[size]
              )}
            >
              {method.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Simplified version with just icon placeholders
export function SimplePaymentIcons({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="text-sm text-muted-foreground">Secure payments with:</span>
      <div className="flex items-center gap-2">
        <CreditCard className="w-5 h-5 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">
          Visa, Mastercard, PayPal, Klarna & more
        </span>
      </div>
    </div>
  );
}
