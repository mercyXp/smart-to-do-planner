import { useState, useEffect, useCallback, useContext } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, Target, CheckCircle, TrendingUp, Calendar, Filter } from "lucide-react";
import API from "@/lib/api"; // axios instance -> baseURL: http://127.0.0.1:8000/api/
import { AuthContext } from "@/contexts/AuthContext";
import GoalCard from "@/GoalCard";
import TaskCard from "@/TaskCard";
import ProgressChart from "@/ProgressChart";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("overview");
  const [goals, setGoals] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data from backend
  const fetchData = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const [goalsRes, tasksRes] = await Promise.all([
        API.get("goals/"),
        API.get("tasks/")
      ]);
      setGoals(goalsRes.data || []);
      setTasks(tasksRes.data || []);
    } catch (err) {
      setError("Failed to fetch data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Derived UI data
  const today = new Date();
  const todaysTasks = tasks.filter(t => !t.completed && new Date(t.due_date).toDateString() === today.toDateString());
  const weeklyGoals = goals.filter(g => {
    const due = new Date(g.due_date);
    const diff = (due - today) / (1000 * 60 * 60 * 24);
    return diff <= 7 && diff >= 0;
  });
  const monthlyGoals = goals.filter(g => {
    const due = new Date(g.due_date);
    return due.getMonth() === today.getMonth();
  });

  const completedTasks = tasks.filter(t => t.completed).length;
  const inProgressTasks = tasks.length - completedTasks;
  const completionRate = tasks.length ? Math.round((completedTasks / tasks.length) * 100) : 0;

  // CRUD Handlers
  const createGoal = async (data) => {
    const res = await API.post("goals/", data);
    setGoals([res.data, ...goals]);
  };

  const deleteGoal = async (id) => {
    await API.delete(`goals/${id}/`);
    setGoals(goals.filter(g => g.id !== id));
  };

  const createTask = async (data) => {
    const res = await API.post("tasks/", data);
    setTasks([res.data, ...tasks]);
  };

  const toggleTask = async (id, completed) => {
    await API.patch(`tasks/${id}/`, { completed });
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed } : t)));
  };

  return (
    <div className="space-y-6 p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Track and break down your goals into daily, weekly, and monthly tasks.</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => createTask({ title: "New Task" })}>
            <Plus className="h-4 w-4 mr-2" /> Add Task
          </Button>
          <Button variant="outline" onClick={() => createGoal({ title: "New Goal" })}>
            <Plus className="h-4 w-4 mr-2" /> New Goal
          </Button>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex justify-between items-center pb-2">
            <CardTitle>Active Goals</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{goals.length}</div>
            <p className="text-xs text-muted-foreground">Total in progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex justify-between items-center pb-2">
            <CardTitle>Tasks Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedTasks}</div>
            <p className="text-xs text-muted-foreground">From all time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex justify-between items-center pb-2">
            <CardTitle>Completion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completionRate}%</div>
            <p className="text-xs text-muted-foreground">Overall performance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex justify-between items-center pb-2">
            <CardTitle>Due This Week</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{weeklyGoals.length}</div>
            <p className="text-xs text-muted-foreground">Goals with near deadlines</p>
          </CardContent>
        </Card>
      </div>

      {/* MAIN TABS */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* OVERVIEW TAB */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Today's Tasks</CardTitle>
                <CardDescription>Your focus for today</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {todaysTasks.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No tasks for today 🎉</p>
                ) : (
                  todaysTasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onToggle={(id, completed) => toggleTask(id, completed)}
                    />
                  ))
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Goals</CardTitle>
                <CardDescription>Goals due this week</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {weeklyGoals.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No upcoming goals</p>
                ) : (
                  weeklyGoals.map((goal) => (
                    <GoalCard key={goal.id} goal={goal} onDelete={deleteGoal} />
                  ))
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* GOALS TAB */}
        <TabsContent value="goals">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">All Goals</h2>
            <Button variant="outline" onClick={() => createGoal({ title: "New Goal" })}>
              <Plus className="h-4 w-4 mr-2" /> Add Goal
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {goals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} onDelete={deleteGoal} />
            ))}
          </div>
        </TabsContent>

        {/* TASKS TAB */}
        <TabsContent value="tasks">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">All Tasks</h2>
            <Button onClick={() => createTask({ title: "New Task" })}>
              <Plus className="h-4 w-4 mr-2" /> Add Task
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} onToggle={(id, completed) => toggleTask(id, completed)} />
            ))}
          </div>
        </TabsContent>

        {/* ANALYTICS TAB */}
        <TabsContent value="analytics">
          <ProgressChart
            totalGoals={goals.length}
            completionRate={completionRate}
            completed={completedTasks}
            inProgress={inProgressTasks}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
