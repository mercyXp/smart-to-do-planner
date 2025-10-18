import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function LoginPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Card className="w-full max-w-md shadow-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-3xl font-bold text-[#3C83F6]">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Sign in to your Smart To-Do Planner account
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 px-8 pb-8">
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3C83F6] dark:bg-gray-800"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3C83F6] dark:bg-gray-800"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-[#3C83F6] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <Button className="w-full bg-[#3C83F6] hover:bg-[#2a5fb3] text-white font-semibold py-2 rounded-lg transition">
              Sign In
            </Button>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-[#3C83F6] hover:underline font-medium"
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
