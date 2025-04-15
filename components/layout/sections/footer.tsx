"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Poshan</h3>
            <p className="text-sm text-muted-foreground">
              Your personal healthcare companion, making medical assistance accessible to all.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/report" className="text-sm text-muted-foreground hover:text-primary">
                  Report Analysis
                </Link>
              </li>
              <li>
                <Link href="/searchmedicine" className="text-sm text-muted-foreground hover:text-primary">
                  Medicine Search
                </Link>
              </li>
              <li>
                <Link href="/food" className="text-sm text-muted-foreground hover:text-primary">
                  Nutrition Guide
                </Link>
              </li>
              <li>
                <Link href="/assistant" className="text-sm text-muted-foreground hover:text-primary">
                  AI Assistant
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/termsandcondition" className="text-sm text-muted-foreground hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@poshan.com" className="text-sm text-muted-foreground hover:text-primary">
                  support@poshan.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center">
            Made with <Heart className="mx-1 h-4 w-4 text-red-500" /> for better healthcare
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Poshan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 