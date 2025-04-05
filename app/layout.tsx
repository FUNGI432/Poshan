import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/layout/theme-provider";
import Navbar from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team Kuposhan - Poshan",
  description:
    "Poshan is an AI-driven healthcare platform designed to provide accessible and reliable medical assistance, especially for rural communities. It offers features such as medical report analysis, medication details, and nutrition insights through an intuitive chatbot interface. The platform supports multiple languages, ensuring inclusivity and ease of use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              <div className="">{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
