"use client"
import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

const Index = () => {
  const { setTheme } = useTheme();
  const router = useRouter();

  return (
    <nav className="w-full border-b">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="text-2xl text-primary ml-12">Perfido</div>
        <div className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            <Link href="">Home</Link>
            <Link href="">About</Link>
            <Link href="">Help</Link>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-6 items-center">
            <Link
              href="signin"
              className="dark:bg-white bg-black text-white dark:text-black py-2 px-4 rounded-3xl"
            >
              Sign in / Sign up
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Index;
