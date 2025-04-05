"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  ClipboardList,
  Utensils,
  Syringe,
  User,
} from "lucide-react";
import { ToggleTheme } from "./toogle-theme";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary rounded-md p-1.5">
                <span className="text-primary-foreground font-bold text-xl">
                  P
                </span>
              </div>
              <span className="font-bold text-xl hidden sm:inline-block">
                POSHAN
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-green-600 hover:text-green-800 font-medium text-sm flex items-center gap-1.5"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/report"
              className="text-green-600 hover:text-green-800 font-medium text-sm flex items-center gap-1.5"
            >
              <ClipboardList className="w-4 h-4" />
              <span>Report</span>
            </Link>

            <Link
              href="/food"
              className="text-green-600 hover:text-green-800 font-medium text-sm flex items-center gap-1.5"
            >
              <Utensils className="w-4 h-4" />
              <span>Food Analyzer</span>
            </Link>
            <Link
              href="/searchmedicine"
              className="text-green-600 hover:text-green-800 font-medium text-sm flex items-center gap-1.5"
            >
              <Syringe className="w-4 h-4" />
              <span>Medicine Query</span>
            </Link>
          </nav>

          {/* Right Section - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 text-green-600 border-green-600"
            >
              <User className="h-4 w-4 text-green-600" />
              <span>Account</span>
            </Button>
            <ToggleTheme />
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-5 w-5 text-green-600" />
              ) : (
                <Menu className="h-5 w-5 text-green-600" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-in slide-in-from-top-4 duration-200">
          <div className="px-2 py-3 space-y-1 sm:px-3 bg-background/95 border-b border-border/40">
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-md text-green-700 hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Home</span>
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-3 px-3 py-2.5 rounded-md text-green-700 hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              <Info className="w-5 h-5" />
              <span className="font-medium">About</span>
            </Link>
            <Link
              href="/recipes"
              className="flex items-center gap-3 px-3 py-2.5 rounded-md text-green-700 hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              <Book className="w-5 h-5" />
              <span className="font-medium">Recipes</span>
            </Link>
            <Link
              href="/notifications"
              className="flex items-center gap-3 px-3 py-2.5 rounded-md text-green-700 hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              <Bell className="w-5 h-5" />
              <span className="font-medium">Notifications</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
