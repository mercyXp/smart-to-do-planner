import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function TaskCard({ task, onToggle, onEdit }) {
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const handleToggle = () => {
    const newCompleted = !isCompleted;
    setIsCompleted(newCompleted);
    console.log("Task toggled:", task.id, newCompleted);
    onToggle?.(task.id, newCompleted);
  };

  const handleEdit = () => {
    console.log("Edit task:", task.id);
    onEdit?.(task.id);
  };

  const isOverdue = new Date(task.dueDate) < new Date() && !isCompleted;
  const daysUntilDue = Math.ceil(
    (new Date(task.dueDate).getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24)
  );

  // Dashboard-styled color maps
  const priorityColors = {
    high: "destructive",
    medium: "secondary",
    low: "outline",
  };

  const categoryColors = {
    work: "#3b82f6", // blue
    personal: "#ec4899", // pink
    health: "#22c55e", // green
    learning: "#facc15", // yellow
  };

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 ease-in-out border border-border/40 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm ${
        isCompleted ? "opacity-60" : "hover:-translate-y-[2px] hover:shadow-lg"
      }`}
    >
      {/* Category Accent Bar */}
      <div
        className="absolute left-0 top-0 h-full w-[4px] rounded-l-2xl"
        style={{ backgroundColor: categoryColors[task.category] }}
      />

      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          {/* Checkbox */}
          <Checkbox
            checked={isCompleted}
            onCheckedChange={handleToggle}
            data-testid={`checkbox-task-${task.id}`}
            className="mt-1 border-border"
          />

          {/* Text Section */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              {/* Title */}
              <h4
                className={`text-sm font-semibold transition-colors ${
                  isCompleted
                    ? "line-through text-muted-foreground"
                    : "text-foreground"
                }`}
                data-testid={`text-task-title-${task.id}`}
              >
                {task.title}
              </h4>

              {/* Priority Badge */}
              <Badge
                variant={priorityColors[task.priority]}
                className="text-[10px] uppercase tracking-wide"
              >
                {task.priority}
              </Badge>
            </div>

            {/* Description */}
            {task.description && (
              <p className="text-xs text-muted-foreground mb-3 leading-snug">
                {task.description}
              </p>
            )}

            {/* Bottom Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                {/* Due Date */}
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span
                    className={
                      isOverdue ? "text-destructive font-medium" : "font-normal"
                    }
                  >
                    {daysUntilDue === 0
                      ? "Today"
                      : daysUntilDue === 1
                      ? "Tomorrow"
                      : daysUntilDue > 0
                      ? `${daysUntilDue} days`
                      : "Overdue"}
                  </span>
                </div>

                {/* Category Indicator Dot */}
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor: categoryColors[task.category],
                  }}
                />
              </div>

              {/* Edit Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleEdit}
                data-testid={`button-edit-task-${task.id}`}
                className="h-7 px-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
