"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
 BarChart3,
 BookOpen,
 FileText,
 User,
 LogOut,
 Activity,
} from "lucide-react";

import {
 Sidebar,
 SidebarContent,
 SidebarGroup,
 SidebarGroupContent,
 SidebarGroupLabel,
 SidebarHeader,
 SidebarInset,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
 SidebarProvider,
 SidebarTrigger,
 useSidebar,
} from "@/components/ui/sidebar";

interface NavItem {
 title: string;
 href: string;
 icon: React.ComponentType<{ className?: string }>;
}

function useIsMobile() {
 const [isMobile, setIsMobile] = useState(false);

 useEffect(() => {
  const checkMobile = () => {
   setIsMobile(window.innerWidth < 768);
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);
  return () => window.removeEventListener("resize", checkMobile);
 }, []);

 return isMobile;
}

function DashboardContent({ children }: { children: React.ReactNode }) {
 return (
  <>
   <header className='items-center border-b'>
    <div className='flex justify-between px-10 py-1 '>
     <SidebarTrigger className='self-center' />
     <div className='flex items-center'>
      <Link href='/'>
       <Button variant='ghost' size='icon'>
        <LogOut className='h-5 w-5' />
        <span className='sr-only'>Logout</span>
       </Button>
      </Link>
      <Avatar>
       <AvatarImage src='/placeholder.svg?height=32&width=32' alt='User' />
       <AvatarFallback>U</AvatarFallback>
      </Avatar>
     </div>
    </div>
   </header>
   <div className='px-10'>{children}</div>
  </>
 );
}

const navItems: NavItem[] = [
 { title: "Fitness", href: "/dashboard/fitness", icon: BarChart3 },
 { title: "Learning", href: "/dashboard/learning", icon: BookOpen },
 { title: "Notes", href: "/dashboard/notes", icon: FileText },
 { title: "Profile", href: "/dashboard/profile", icon: User },
];

function SidebarLayout({ children }: { children: React.ReactNode }) {
 const pathname = usePathname();
 const isMobile = useIsMobile();
 const { setOpen } = useSidebar();

 return (
  <>
   <Sidebar collapsible='icon'>
    <SidebarHeader>
     <div className='px-2 py-2'>
      <Link href='/dashboard' className='font-bold'>
       <div className='flex items-center justify-center transition-opacity duration-200 opacity-0 group-data-[state=collapsed]:opacity-100'>
        <Activity className='h-6 w-6 text-primary' />
       </div>
       <span className='transition-opacity duration-200 group-data-[state=collapsed]:opacity-0'>
        Growth Hub
       </span>
      </Link>
     </div>
    </SidebarHeader>
    <SidebarContent>
     <SidebarGroup>
      <SidebarGroupLabel>Navigation</SidebarGroupLabel>
      <SidebarGroupContent>
       <SidebarMenu>
        {navItems.map((item) => (
         <SidebarMenuItem key={item.href}>
          <SidebarMenuButton
           asChild
           isActive={pathname === item.href}
           tooltip={item.title}
          >
           <Link
            href={item.href}
            onClick={() => {
             if (isMobile) {
              setOpen(false); // closes the offcanvas on mobile
             }
            }}
           >
            <item.icon className='h-5 w-5' />
            <span>{item.title}</span>
           </Link>
          </SidebarMenuButton>
         </SidebarMenuItem>
        ))}
       </SidebarMenu>
      </SidebarGroupContent>
     </SidebarGroup>
    </SidebarContent>
   </Sidebar>
   <SidebarInset>
    <DashboardContent>{children}</DashboardContent>
   </SidebarInset>
  </>
 );
}

export default function DashboardLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <SidebarProvider>
   <SidebarLayout>{children}</SidebarLayout>
  </SidebarProvider>
 );
}
