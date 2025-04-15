import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Stethoscope, Pill, Apple, Bot } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Your Personal{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Healthcare Companion
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Access reliable medical assistance, analyze reports, and get nutrition insights - all in one place. Designed especially for rural communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/assistant">
                Talk to AI Assistant
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/report">
                Analyze Medical Report
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full max-w-4xl">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-4 rounded-full bg-primary/10">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium">Report Analysis</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-4 rounded-full bg-primary/10">
                <Pill className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium">Medicine Search</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-4 rounded-full bg-primary/10">
                <Apple className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium">Nutrition Guide</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-4 rounded-full bg-primary/10">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium">AI Assistant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 