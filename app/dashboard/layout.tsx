"use client";
import type React from "react";
import {
 SidebarInset,
 SidebarProvider,
} from "@/components/ui/sidebar";
import CustomSidebar from "@/app/dashboard/components/CustomSidebar";
import CustomHeader from "@/app/dashboard/components/CustomHeader";

export default function DashboardLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <SidebarProvider>
      <CustomSidebar/>
      <SidebarInset>
          <CustomHeader/>
          <div className='px-10'>{children}</div>
      </SidebarInset>
  </SidebarProvider>
 );
}
