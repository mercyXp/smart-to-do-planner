import { useState, useEffect, useContext, useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GoalCard from "./GoalCard";
import TaskCard from "./TaskCard";
import ProgressChart from "./ProgressChart";
import { Plus, Calendar, CheckCircle, Target, TrendingUp, Filter } from "lucide-react";
import API from "@/lib/api"; // axios instance with baseURL = http://127.0.0.1:8000/api/
import { AuthContext } from "@/contexts/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext); // ensure AuthProvider wraps your app
  const [activeTab, setActiveTab] = useState("overview");

  // data states
  const [goals, setGoals] = useState([]);
  const [tasks, setTasks] = useState([]);

  // loading / error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch goals & tasks for the logged-in user
  const fetchData = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    setError(null);
    try {
      const [goalsRes, tasksRes] = await Promise.all([API.get("goals/"), API.get("tasks/")]);
      setGoals(goalsRes.data || []);
      setTasks(tasksRes.data || []);
    } catch (err) {
      console.error("Failed to fetch dashboard data:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Derived data for UI
  const todaysTasks = tasks.filter((t) => !t.completed).slice(0, 3);
  const upcomingDeadlines = goals
    .filter((g) => g.due_date) // ensure due_date exists
    .sort((a, b) => new Date(a.due_date) - new Date(b.due_date))
    .slice(0, 2);

  // Basic progress counts for the chart / stats (you can expand this)
  const progressData = {
    completed: tasks.filter((t) => t.completed).length,
    inProgress: tasks.filter((t) => !t.completed).length,
    notStarted: 0, // adjust if you have a field for not-started
  };

  // Placeholder weeklyData — you can compute by created_at if available
  const weeklyData = [
    { week: "W1", completed: progressData.completed > 0 ? Math.ceil(progressData.completed / 2) : 0, created: tasks.length },
    { week: "W2", completed: 0, created: 0 },
    { week: "W3", completed: 0, created: 0 },
    { week: "W4", completed: 0, created: 0 },
  ];

  // ---- CRUD functions ----
  // Create goal
  const createGoal = async (goalData) => {
    try {
      const res = await API.post("goals/", goalData);
      setGoals((prev) => [res.data, ...prev]);
      return res.data;
    } catch (err) {
      console.error("Create goal error:", err);
      throw err;
    }
  };

  // Update goal (patch)
  const updateGoal = async (id, patch) => {
    try {
      const res = await API.patch(`goals/${id}/`, patch);
      setGoals((prev) => prev.map((g) => (g.id === id ? res.data : g)));
      return res.data;
    } catch (err) {
      console.error("Update goal error:", err);
      throw err;
    }
  };

  // Delete goal
  const deleteGoal = async (id) => {
    try {
      await API.delete(`goals/${id}/`);
      setGoals((prev) => prev.filter((g) => g.id !== id));
    } catch (err) {
      console.error("Delete goal error:", err);
      throw err;
    }
  };

  // Create task
  const createTask = async (taskData) => {
    try {
      const res = await API.post("tasks/", taskData);
      setTasks((prev) => [res.data, ...prev]);
      return res.data;
    } catch (err) {
      console.error("Create task error:", err);
      throw err;
    }
  };

  // Update task
  const updateTask = async (id, patch) => {
    try {
      const res = await API.patch(`tasks/${id}/`, patch);
      setTasks((prev) => prev.map((t) => (t.id === id ? res.data : t)));
      return res.data;
    } catch (err) {
      console.error("Update task error:", err);
      throw err;
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await API.delete(`tasks/${id}/`);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Delete task error:", err);
      throw err;
    }
  };

  // Toggle task completion (optimistic update)
  const toggleTaskComplete = async (id, completed) => {
    // optimistic UI update
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed } : t)));
    try {
      const res = await API.patch(`tasks/${id}/`, { completed });
      setTasks((prev) => prev.map((t) => (t.id === id ? res.data : t)));
      return res.data;
    } catch (err) {
      // revert if error
      console.error("Toggle task error:", err);
      await fetchData(); // refresh from server to stay consistent
      throw err;
    }
  };

  // Handlers to pass into GoalCard / TaskCard
  const goalHandlers = {
    onEdit: (goal) => updateGoal(goal.id, goal),
    onDelete: (id) => deleteGoal(id),
    onView: (id) => {
      // implement navigation to goal detail page if you have routing
      console.log("View goal:", id);
    },
    onAddTask: (goalId) => {
      // sample flow: open modal to create task; here we just console.log
      console.log("Add task to goal:", goalId);
    },
  };

  const taskHandlers = {
    onToggleComplete: (id, completed) => toggleTaskComplete(id, completed),
    onEdit: (task) => updateTask(task.id, task),
    onDelete: (id) => deleteTask(id),
  };

  return (
    <div className="space-y-6" data-testid="dashboard">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card data-testid="stat-active-goals">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Goals</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{goals.length}</div>
            <p className="text-xs text-muted-foreground">Auto-updates from server</p>
          </CardContent>
        </Card>

        <Card data-testid="stat-tasks-today">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks Today</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tasks.length}</div>
            <p className="text-xs text-muted-foreground">
              {progressData.completed} completed, {progressData.inProgress} remaining
            </p>
          </CardContent>
        </Card>

        <Card data-testid="stat-completion-rate">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {tasks.length > 0 ? Math.round((progressData.completed / tasks.length) * 100) : 0}%
            </div>
            <p className="text-xs text-muted-foreground">Live from your tasks</p>
          </CardContent>
        </Card>

        <Card data-testid="stat-upcoming-deadlines">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Due This Week</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingDeadlines.length}</div>
            <p className="text-xs text-muted-foreground">Closest upcoming goals</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList data-testid="dashboard-tabs">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" data-testid="button-filter">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button
              size="sm"
              data-testid="button-add-goal-dashboard"
              onClick={() =>
                createGoal({
                  title: "New Goal",
                  description: "",
                  category: "",
                  category_color: "#3c83f6",
                  progress: 0,
                  priority: "medium",
                })
              }
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Goal
            </Button>
          </div>
        </div>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Today's Tasks */}
            <Card data-testid="card-todays-tasks">
              <CardHeader>
                <CardTitle>Today's Tasks</CardTitle>
                <CardDescription>Focus on these tasks to stay on track</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {loading && <div>Loading...</div>}
                {!loading && todaysTasks.length === 0 && <div>No tasks for today</div>}
                {todaysTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onToggleComplete={(id, completed) => taskHandlers.onToggleComplete(id, completed)}
                    onEdit={(taskData) => taskHandlers.onEdit(taskData)}
                    onDelete={(id) => taskHandlers.onDelete(id)}
                  />
                ))}
                <Button variant="outline" className="w-full" data-testid="button-view-all-tasks" onClick={() => setActiveTab("tasks")}>
                  View All Tasks
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines */}
            <Card data-testid="card-upcoming-deadlines">
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>Goals requiring attention soon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingDeadlines.length === 0 && <div>No upcoming deadlines</div>}
                {upcomingDeadlines.map((goal) => (
                  <div key={goal.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{goal.title}</span>
                        <Badge variant={goal.priority === "high" ? "destructive" : "secondary"}>
                          {goal.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Due: {goal.due_date ? new Date(goal.due_date).toLocaleDateString() : "—"}</span>
                        <div className="flex items-center gap-1">
                          <div className="w-20 bg-muted rounded-full h-2">
                            <div className="h-2 bg-primary rounded-full" style={{ width: `${goal.progress}%` }} />
                          </div>
                          <span>{goal.progress}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => goalHandlers.onView(goal.id)}>View</Button>
                      <Button size="sm" variant="ghost" onClick={() => goalHandlers.onDelete(goal.id)}>Delete</Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full" data-testid="button-view-all-goals" onClick={() => setActiveTab("goals")}>
                  View All Goals
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="goals" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.length === 0 && !loading && <div className="col-span-full">No goals yet — create one!</div>}
            {goals.map((goal) => (
              <GoalCard
                key={goal.id}
                goal={goal}
                onEdit={(g) => goalHandlers.onEdit(g)}
                onDelete={(id) => goalHandlers.onDelete(id)}
                onView={(id) => goalHandlers.onView(id)}
                onAddTask={(id) => goalHandlers.onAddTask(id)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {tasks.length === 0 && !loading && <div>No tasks available.</div>}
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggleComplete={(id, completed) => taskHandlers.onToggleComplete(id, completed)}
                onEdit={(t) => taskHandlers.onEdit(t)}
                onDelete={(id) => taskHandlers.onDelete(id)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <ProgressChart progressData={progressData} weeklyData={weeklyData} totalGoals={goals.length} completionRate={tasks.length ? Math.round((progressData.completed / tasks.length) * 100) : 0} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
