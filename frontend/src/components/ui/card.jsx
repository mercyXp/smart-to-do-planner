import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

// ==============================
// Main Card container
// ==============================
const Card = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group relative rounded-2xl border border-border/60 bg-gradient-to-br from-background via-background/95 to-muted/30 text-foreground shadow-sm transition-all duration-300",
      "hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 dark:hover:border-primary/30",
      "backdrop-blur-sm overflow-hidden",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

// ==============================
// Card Header
// ==============================
const CardHeader = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-1.5 p-5 border-b border-border/40 bg-gradient-to-r from-transparent via-transparent to-background/50",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

// ==============================
// Card Title
// ==============================
const CardTitle = forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight text-foreground/90 group-hover:text-primary transition-colors",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

// ==============================
// Card Description
// ==============================
const CardDescription = forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// ==============================
// Card Content
// ==============================
const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-4 flex flex-col gap-3", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

// ==============================
// Card Footer
// ==============================
const CardFooter = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-between p-5 pt-0 border-t border-border/40", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// ==============================
// Export all
// ==============================
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
