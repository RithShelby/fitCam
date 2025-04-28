import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, BookOpen, FileText, User } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
      <p className="mb-8 text-muted-foreground">
        Welcome to your personal growth hub. Track your progress across different areas of your life.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Link href="/dashboard/fitness">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fitness</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 Workouts</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/learning">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Learning</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2 Courses</div>
              <p className="text-xs text-muted-foreground">In progress</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/notes">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Notes</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5 Notes</div>
              <p className="text-xs text-muted-foreground">Created this month</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/profile">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">80%</div>
              <p className="text-xs text-muted-foreground">Profile completion</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
