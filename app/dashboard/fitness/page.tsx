import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, ArrowUpRight, ArrowDownRight, Dumbbell, Timer } from "lucide-react"

export default function FitnessPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Fitness Tracker</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Workout
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="workouts">Workouts</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Weekly Workouts</CardTitle>
                <Dumbbell className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <div className="flex items-center text-xs text-green-500">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  <span>+20% from last week</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Minutes</CardTitle>
                <Timer className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">120</div>
                <div className="flex items-center text-xs text-green-500">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  <span>+15% from last week</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,250</div>
                <div className="flex items-center text-xs text-green-500">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  <span>+12% from last week</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Goal Progress</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">60%</div>
                <div className="flex items-center text-xs text-red-500">
                  <ArrowDownRight className="mr-1 h-3 w-3" />
                  <span>-5% from target</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Workouts</CardTitle>
              <CardDescription>Your last 3 workout sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Upper Body Strength", date: "Today", duration: "45 min", calories: 320 },
                  { name: "HIIT Cardio", date: "Yesterday", duration: "30 min", calories: 450 },
                  { name: "Leg Day", date: "3 days ago", duration: "45 min", calories: 380 },
                ].map((workout, i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div>
                      <div className="font-medium">{workout.name}</div>
                      <div className="text-sm text-muted-foreground">{workout.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{workout.duration}</div>
                      <div className="text-sm text-muted-foreground">{workout.calories} calories</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workouts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Workout History</CardTitle>
              <CardDescription>View and manage your workout history</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Your workout history will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Fitness Goals</CardTitle>
              <CardDescription>Set and track your fitness goals</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Your fitness goals will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
