import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Target, MoreVertical, Clock } from "lucide-react";

const categoryColors = {
  work: "from-blue-500/10 border-l-blue-500/40",
  personal: "from-pink-500/10 border-l-pink-500/40",
  health: "from-green-500/10 border-l-green-500/40",
  learning: "from-yellow-500/10 border-l-yellow-500/40",
};

const priorityColors = {
  high: "destructive",
  medium: "secondary",
  low: "outline",
};

export default function GoalCard({ goal, onEdit, onDelete }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleEdit = () => {
    onEdit?.(goal.id);
  };

  const handleDelete = () => {
    onDelete?.(goal.id);
  };

  const daysUntilDue = Math.ceil(
    (new Date(goal.dueDate).getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24)
  );

  return (
    <Card
      className={`group relative overflow-hidden border-l-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm bg-gradient-to-br ${categoryColors[goal.category]}`}
    >
      {/* HEADER */}
      <CardHeader className="pb-4 border-b border-border/40 bg-background/50 backdrop-blur-sm">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3
                className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors"
                data-testid={`text-goal-title-${goal.id}`}
              >
                {goal.title}
              </h3>
              <Badge
                variant={priorityColors[goal.priority]}
                className="text-xs capitalize"
              >
                {goal.priority}
              </Badge>
            </div>

            <p
              className="text-sm text-muted-foreground mb-3"
              data-testid={`text-goal-description-${goal.id}`}
            >
              {goal.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Target className="h-3.5 w-3.5" />
                <span>
                  {goal.completedTasks}/{goal.totalTasks} tasks
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                <span
                  className={`${
                    daysUntilDue < 3 ? "text-destructive font-medium" : ""
                  }`}
                >
                  {daysUntilDue > 0
                    ? `${daysUntilDue} days left`
                    : "Overdue"}
                </span>
              </div>
            </div>
          </div>

          {/* Menu / Expand Button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-background/60 transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
            data-testid={`button-goal-menu-${goal.id}`}
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      {/* CONTENT */}
      <CardContent className="pt-4 space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">Progress</span>
            <span
              className="font-medium text-foreground"
              data-testid={`text-goal-progress-${goal.id}`}
            >
              {goal.progress}%
            </span>
          </div>
          <Progress
            value={goal.progress}
            className="h-2 bg-muted overflow-hidden"
          />
        </div>

        {isExpanded && (
          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleEdit}
              className="hover:bg-primary/10 hover:text-primary transition-colors"
              data-testid={`button-edit-goal-${goal.id}`}
            >
              Edit
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDelete}
              className="hover:bg-destructive/10 hover:text-destructive transition-colors"
              data-testid={`button-delete-goal-${goal.id}`}
            >
              Delete
            </Button>
          </div>
        )}
      </CardContent>

      {/* Optional Glow on Hover */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-10 bg-primary transition-opacity"></div>
    </Card>
  );
}
