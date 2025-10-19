import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import api from "@/lib/api";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("auth/token/", {
        email: formData.email,
        password: formData.password,
      });

      // Save tokens in localStorage
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || "Login failed. Check your credentials.");
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[hsl(var(--color-foreground))]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-ring))] transition"
                required
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[hsl(var(--color-foreground))]">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-ring))] transition"
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-[hsl(var(--color-primary))] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="w-full bg-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-ring))] text-[hsl(var(--color-primary-foreground))] font-semibold py-2 rounded-lg transition"
            >
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
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

export default LoginPage;
