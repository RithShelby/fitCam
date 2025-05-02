import Link from 'next/link';
import React from 'react';
import { Button } from "@/components/ui/button"
import ModeToggle from '@/components/ModalToggle';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex justify-evenly py-5 ">
          <div className="self-center">
            <Link href="/" className="mr-6 flex items-center space-x-2 font-bold">
              <span>FitCam</span>
            </Link>
          </div>
          <div>
            <nav className="flex items-center space-x-2">
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm">Sign Up</Button>
              </Link>
            <ModeToggle/>
            </nav>
          </div>
        </div>
      </header>
    );
}

export default Header;
