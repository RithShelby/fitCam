import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { MainData } from "../constants/maindata";

const Main = () => {
 return (
  <main className='flex flex-col'>
   <section className='py-[100px]'>
    <div className='space-y-5 text-center'>
     <div className='space-y-2'>
      <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>
       Your Personal Growth Journey Starts Here
      </h1>
      <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
       Track your fitness, expand your knowledge, organize your thoughts, and
       manage your profile all in one place.
      </p>
     </div>
     <div className='space-x-4'>
      <Link href='/auth/signup'>
       <Button className='px-8'>
        Get Started
        <ArrowRight className='ml-2 h-4 w-4' />
       </Button>
      </Link>
      <Link href='/auth/login'>
       <Button variant='outline' className='px-8'>
        Login
       </Button>
      </Link>
     </div>
    </div>
   </section>
   <section className='py-12 md:py-20 lg:py-20 bg-muted'>
    <div className=''>
     <div className='grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-10 lg:px-56 gap-5 px-5'>
      {MainData.map((item, index) => (
       <div className='flex flex-col justify-center space-y-4' key={index}>
              <h3 className='text-xl font-bold'>{item.title}</h3>
              <p className='text-gray-500 dark:text-gray-400'>{item.text}</p>
       </div>
      ))}
     </div>
    </div>
   </section>
  </main>
 );
};

export default Main;
