import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"; // Assuming utils file will be created for cn

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "MarTech Landing Page",
  description: "Impactful Marketing Campaigns that deliver results",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        "min-h-screen bg-slate-900 font-sans antialiased text-gray-200",
        inter.variable
      )}>
        {children}
      </body>
    </html>
  );
}
