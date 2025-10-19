import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function LoginPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] transition-colors duration-300">
      <Card className="w-full max-w-md border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] text-[hsl(var(--color-card-foreground))] shadow-lg rounded-2xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold text-[hsl(var(--color-primary))]">
            Welcome Back 👋
          </CardTitle>
          <CardDescription className="text-[hsl(var(--color-muted-foreground))]">
            Sign in to your Smart To-Do Planner
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 px-8 pb-8">
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[hsl(var(--color-foreground))]">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-ring))] transition"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[hsl(var(--color-foreground))]">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-ring))] transition"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-[hsl(var(--color-primary))] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <Button className="w-full bg-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-ring))] text-[hsl(var(--color-primary-foreground))] font-semibold py-2 rounded-lg transition">
              Sign In
            </Button>

            <p className="text-center text-sm text-[hsl(var(--color-muted-foreground))]">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-[hsl(var(--color-primary))] hover:underline font-medium"
              >
                Create one
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default LoginPage;
