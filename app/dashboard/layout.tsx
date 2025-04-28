"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart3, BookOpen, FileText, User, Menu, LogOut , LayoutDashboardIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
   {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboardIcon className="h-5 w-5" />,
  },
  {
    title: "Fitness",
    href: "/dashboard/fitness",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "Learning",
    href: "/dashboard/learning",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Notes",
    href: "/dashboard/notes",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: <User className="h-5 w-5" />,
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="mr-2">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                  <div className="px-2 py-6">
                    <Link href="/" className="flex items-center gap-2 font-bold">
                      Personal Growth Hub
                    </Link>
                    <nav className="mt-8 flex flex-col gap-2">
                      {navItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <Button
                            variant={pathname === item.href ? "default" : "ghost"}
                            className="w-full justify-start"
                          >
                            {item.icon}
                            <span className="ml-2">{item.title}</span>
                          </Button>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            )}
            <Link href="/" className="flex items-center gap-2 font-bold">
              <span>Personal Growth Hub</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Logout</span>
              </Button>
            </Link>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        {!isMobile && (
          <aside className="w-64 border-r bg-muted/40">
            <nav className="flex flex-col gap-2 p-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button variant={pathname === item.href ? "default" : "ghost"} className="w-full justify-start">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </Button>
                </Link>
              ))}
            </nav>
          </aside>
        )}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
