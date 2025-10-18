import React from "react";
import { cn } from "@/lib/utils"; // or replace with your own className joiner if not using this utility

const Button = React.forwardRef(
  ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
    // Tailwind variant styles defined
    const baseStyles =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:elevate active:elevate-2";

    const variantStyles = {
      default: "bg-primary text-primary-foreground border border-primary-border",
      destructive: "bg-destructive text-destructive-foreground border border-destructive-border",
      outline: "border [border-color:var(--button-outline)] shadow-xs active:shadow-none",
      secondary: "bg-secondary text-secondary-foreground border border-secondary-border",
      ghost: "border border-transparent",
    };

    const sizeStyles = {
      default: "min-h-9 px-4 py-2",
      sm: "min-h-8 rounded-md px-3 text-xs",
      lg: "min-h-10 rounded-md px-8",
      icon: "h-9 w-9",
    };

    const classes = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const Comp = asChild ? "span" : "button";

    return <Comp ref={ref} className={classes} {...props} />;
  }
);

Button.displayName = "Button";

export { Button };
