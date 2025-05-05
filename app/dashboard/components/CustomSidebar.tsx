import React from 'react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar
} from "@/components/ui/sidebar";
import Link from "next/link";
import {Activity, BarChart3, BookOpen, FileText, User} from "lucide-react";

import {usePathname, useRouter} from "next/navigation";

interface NavItem {
    title: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
}
const navItems: NavItem[] = [
    { title: "Fitness", href: "/dashboard/fitness", icon: BarChart3 },
    { title: "Learning", href: "/dashboard/learning", icon: BookOpen },
    { title: "Notes", href: "/dashboard/notes", icon: FileText },
    { title: "Profile", href: "/dashboard/profile", icon: User },
];

const CustomSidebar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const sidebar = useSidebar();

    const handleClick = (href: string) => {
        if (window.innerWidth < 768) {
            sidebar.setOpen(false); // Close the sidebar
        }
        router.push(href); // Navigate without full reload
    };

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
                <SidebarContent className="">
                    <SidebarGroup>
                        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {navItems.map((item) => (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton
                                            isActive={pathname === item.href}
                                            tooltip={item.title}
                                            onClick={() => handleClick(item.href)}
                                        >
                                            <div className='flex items-center gap-2'>
                                                <item.icon className='h-5 w-5' />
                                                <span>{item.title}</span>
                                            </div>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>

        </>

    );
};

export default CustomSidebar;