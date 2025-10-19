import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function ProgressChart({
  title = "Category Progress",
  data = [],
}) {
  return (
    <Card className="relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      {/* HEADER */}
      <CardHeader className="border-b border-border/40 pb-4 bg-background/50 backdrop-blur-sm">
        <CardTitle className="text-lg font-semibold text-foreground flex items-center justify-between">
          {title}
        </CardTitle>
      </CardHeader>

      {/* CONTENT */}
      <CardContent className="pt-4 space-y-5">
        {data.map((item) => (
          <div
            key={item.category}
            className="space-y-3 group rounded-xl p-2 transition-all duration-300 hover:bg-muted/20"
          >
            {/* CATEGORY + STATS ROW */}
            <div className="flex items-center justify-between">
              {/* Category + Icon */}
              <div className="flex items-center gap-2">
                <div
                  className={`w-3.5 h-3.5 rounded-full`}
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium text-foreground">
                  {item.category}
                </span>
              </div>

              {/* Progress Stats + Change */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {item.completed}/{item.total}
                </span>
                <div className="flex items-center gap-1">
                  {item.change > 0 ? (
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
                  ) : (
                    <TrendingDown className="h-3.5 w-3.5 text-destructive" />
                  )}
                  <span
                    className={`text-xs font-medium ${
                      item.change > 0
                        ? "text-emerald-500"
                        : "text-destructive"
                    }`}
                  >
                    {Math.abs(item.change)}%
                  </span>
                </div>
              </div>
            </div>

            {/* PROGRESS BAR */}
            <div className="space-y-1">
              <Progress
                value={item.progress}
                className="h-2 overflow-hidden rounded-full bg-muted"
                style={{
                  "--tw-progress-color": item.color,
                }}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0%</span>
                <span className="font-medium text-foreground">
                  {item.progress}%
                </span>
                <span>100%</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>

      {/* HOVER GLOW OVERLAY */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-primary transition-opacity pointer-events-none"></div>
    </Card>
  );
}
