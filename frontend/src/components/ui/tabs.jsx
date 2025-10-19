import React, { forwardRef } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

// ==============================
// Tabs List (container for triggers)
// ==============================
const TabsList = forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-11 items-center justify-center rounded-2xl bg-muted/40 p-1.5 backdrop-blur-sm",
      "border border-border/60 shadow-sm",
      "text-muted-foreground transition-all duration-300",
      "hover:border-border/80",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

// ==============================
// Tabs Trigger (each tab button)
// ==============================
const TabsTrigger = forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      // layout
      "relative inline-flex items-center justify-center whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium",
      // transitions
      "transition-all duration-300 ease-in-out",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      // default state
      "text-muted-foreground hover:text-foreground hover:bg-background/60",
      // active state (matches dashboard theme)
      "data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/10 data-[state=active]:to-primary/5",
      "data-[state=active]:text-primary data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-primary/30",
      "data-[state=active]:backdrop-blur-sm",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// ==============================
// Tabs Content (the panel below)
// ==============================
const TabsContent = forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 rounded-xl border border-border/40 bg-card/40 p-4",
      "shadow-sm backdrop-blur-sm",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2",
      "transition-all duration-300",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// ==============================
// Export all
// ==============================
export { Tabs, TabsList, TabsTrigger, TabsContent };
