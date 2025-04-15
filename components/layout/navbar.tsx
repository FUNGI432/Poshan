"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ClipboardList,
  Syringe,
  Utensils,
  Moon,
  Sun,
} from "lucide-react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* Top Header */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-lg border-b border-border/40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image src={logo} width={28} height={28} alt="Logo" className="rounded-full"/>
                <span className="font-bold text-lg text-green-700 dark:text-green-500">
                  POSHAN
                </span>
              </Link>
            </div>
            {mounted && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme}
                className="h-9 w-9 hover:bg-green-50 dark:hover:bg-green-900/20"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border/40 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/report"
              className="flex flex-col items-center justify-center gap-1 w-1/3 text-green-700 dark:text-green-500 hover:text-green-800 dark:hover:text-green-400 transition-colors"
            >
              <ClipboardList className="h-6 w-6" />
              <span className="text-xs font-medium">Report</span>
            </Link>

            <Link
              href="/food"
              className="flex flex-col items-center justify-center gap-1 w-1/3"
            >
              <div className="bg-green-600 dark:bg-green-500 rounded-full p-3 shadow-lg">
                <Utensils className="h-6 w-6 text-white" />
              </div>
              <span className="text-xs font-medium text-green-700 dark:text-green-500">Nutrition</span>
            </Link>

            <Link
              href="/searchmedicine"
              className="flex flex-col items-center justify-center gap-1 w-1/3 text-green-700 dark:text-green-500 hover:text-green-800 dark:hover:text-green-400 transition-colors"
            >
              <Syringe className="h-6 w-6" />
              <span className="text-xs font-medium">Medicine</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
