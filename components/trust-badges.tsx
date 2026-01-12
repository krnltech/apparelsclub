import { Shield, Truck, Zap, Lock, Star, Award } from "lucide-react";
import { cn } from "@/lib/utils";

type TrustBadge = {
  icon: React.ElementType;
  text: string;
  subtext: string;
};

const badges: TrustBadge[] = [
  {
    icon: Shield,
    text: "30-Day Returns",
    subtext: "No questions asked"
  },
  {
    icon: Truck,
    text: "Free Delivery",
    subtext: "Orders over £50"
  },
  {
    icon: Zap,
    text: "Next Day Delivery",
    subtext: "Order before 3pm"
  },
  {
    icon: Lock,
    text: "Secure Payment",
    subtext: "SSL encrypted"
  }
];

type TrustBadgesProps = {
  variant?: "default" | "compact" | "vertical";
  className?: string;
  showAll?: boolean;
};

export function TrustBadges({
  variant = "default",
  className,
  showAll = true
}: TrustBadgesProps) {
  const badgesToShow = showAll ? badges : badges.slice(0, 3);

  if (variant === "vertical") {
    return (
      <div className={cn("flex flex-col gap-3", className)}>
        {badgesToShow.map((badge) => {
          const Icon = badge.icon;
          return (
            <div
              key={badge.text}
              className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-foreground">
                  {badge.text}
                </div>
                <div className="text-xs text-muted-foreground">
                  {badge.subtext}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={cn("flex flex-wrap gap-4", className)}>
        {badgesToShow.map((badge) => {
          const Icon = badge.icon;
          return (
            <div
              key={badge.text}
              className="flex items-center gap-2 text-sm"
            >
              <Icon className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">{badge.text}</span>
            </div>
          );
        })}
      </div>
    );
  }

  // Default variant
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
        className
      )}
    >
      {badgesToShow.map((badge) => {
        const Icon = badge.icon;
        return (
          <div
            key={badge.text}
            className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm text-foreground">
                {badge.text}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {badge.subtext}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Alternate simpler version with inline badges
type SimpleTrustBadgesProps = {
  className?: string;
};

export function SimpleTrustBadges({ className }: SimpleTrustBadgesProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-6 text-sm", className)}>
      <div className="flex items-center gap-2">
        <Shield className="w-4 h-4 text-primary" />
        <span>30-Day Returns</span>
      </div>
      <div className="flex items-center gap-2">
        <Truck className="w-4 h-4 text-primary" />
        <span>Free Delivery £50+</span>
      </div>
      <div className="flex items-center gap-2">
        <Zap className="w-4 h-4 text-primary" />
        <span>Next Day Available</span>
      </div>
      <div className="flex items-center gap-2">
        <Lock className="w-4 h-4 text-primary" />
        <span>Secure Checkout</span>
      </div>
    </div>
  );
}
