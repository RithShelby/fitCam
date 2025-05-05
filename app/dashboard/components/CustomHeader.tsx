import React from 'react';
import {SidebarTrigger} from "@/components/ui/sidebar";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {LogOut} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import ModeToggle from "@/components/ModalToggle";

const CustomHeader = () => {
    return (
        <header className='items-center border-b'>
            <div className='flex justify-between px-10 py-1 '>
                <SidebarTrigger className='self-center' />
                <div className='flex items-center'>
                    <ModeToggle/>
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
    );
};

export default CustomHeader;