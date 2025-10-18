import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Target, BarChart, Calendar, Plus, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";



function LandingPage(){
    return(
        <>
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-24 text-center">
                 <div className="max-w-3xl mx-auto">
                    <Badge variant="secondary" className="mb-4">
                        Intelligent Goal Management
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                        Transform Your Goals Into
                        <span className="text-primary"> Actionable Plans</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Smart To-Do Planner automatically breaks down your long-term goals into daily tasks, 
                        tracks your progress visually, and helps you stay productive with intelligent insights.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8" data-testid="button-start-free">Start Free Today<ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8" data-testid="button-demo">Watch Demo</Button>
                    </div>
                 </div>
            </section>
            {/* Features Grid */}
             <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Everything You Need to Stay Organized
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Powerful features designed to help students and professionals achieve their goals efficiently.
                    </p>      
                </div>
                {/*cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="hover-elevate">
                        <CardHeader>
                            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                <Target className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle>Smart Goal Breakdown</CardTitle>
                            <CardDescription>Automatically converts complex goals into manageable daily and weekly tasks</CardDescription>
                        </CardHeader>
                    </Card> 
                    <Card className="hover-elevate">
                        <CardHeader>
                            <div className="h-12 w-12 bg-chart-2/10 rounded-lg flex items-center justify-center mb-4">
                                <BarChart className="h-6 w-6 text-chart-2" />
                            </div>
                            <CardTitle>Visual Progress Tracking</CardTitle>
                            <CardDescription>
                                Beautiful charts and progress bars show your advancement toward each goal
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="hover-elevate">
                        <CardHeader>
                            <div className="h-12 w-12 bg-chart-3/10 rounded-lg flex items-center justify-center mb-4">
                                <Calendar className="h-6 w-6 text-chart-3" />
                            </div>
                            <CardTitle>Smart Scheduling</CardTitle>
                            <CardDescription>
                                Intelligent deadline management with reminders and calendar integration
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="hover-elevate">
                        <CardHeader>
                            <div className="h-12 w-12 bg-chart-4/10 rounded-lg flex items-center justify-center mb-4">
                                <CheckCircle className="h-6 w-6 text-chart-4" />
                            </div>
                            <CardTitle>Category Organization</CardTitle>
                            <CardDescription>
                                Color-coded categories keep your personal and professional goals organized
                            </CardDescription>
                        </CardHeader>
                    </Card>
                     <Card className="hover-elevate">
                        <CardHeader>
                            <div className="h-12 w-12 bg-chart-5/10 rounded-lg flex items-center justify-center mb-4">
                                <BarChart className="h-6 w-6 text-chart-5" />
                            </div>
                            <CardTitle>Productivity Analytics</CardTitle>
                            <CardDescription>
                                Detailed insights into your productivity patterns and goal completion rates
                            </CardDescription>
                        </CardHeader>
                     </Card>
                     <Card className="hover-elevate">
                        <CardHeader>
                            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                <Plus className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle>Quick Task Creation</CardTitle>
                            <CardDescription>
                                Rapidly add goals and tasks with smart suggestions and templates
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
             </section>
             {/* CTA Section */}
            <section className="container mx-auto px-4 py-16">
                <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-12 pt-20 text-center">
                        <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Productivity?</h3>
                            <p className="text-lg mb-8 text-[#001F3F] dark:text-primary-foreground/90">
                                Join thousands of users who have achieved their goals with Smart To-Do Planner
                            </p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-cta">
                        Start Your Free Trial
                        <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}
export default LandingPage;