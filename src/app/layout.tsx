import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"; // Assuming you'll create this for dark mode

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Matches primary font family name
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // As per design tokens
  variable: "--font-poppins", // Matches secondary font family name
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair", // Matches accent font family name
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baosh Creative Agency", // From theme.name
  description: "Modern creative agency design with bold solutions and high-impact services", // From theme.description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${inter.variable} ${poppins.variable} ${playfairDisplay.variable} font-sans antialiased bg-neutral-white dark:bg-neutral-gray900 text-neutral-gray900 dark:text-neutral-gray100`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
