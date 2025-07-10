import type { Metadata } from "next";
// Using system fonts as per wireframe, so no specific font import like Geist or Inter needed here
// unless we want to use next/font for optimizing system fonts, which is possible but not strictly necessary
// for the specified stack.
import "./globals.css";

export const metadata: Metadata = {
  title: "MarTech Landing Page", // Updated title
  description: "We Create Impactful Marketing Campaigns that deliver results", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Set dark mode globally, wireframe has dark theme focus
    <html lang="en" className="dark">
      <body
        // The font-family is set in globals.css to match the wireframe.
        // Tailwind's `antialiased` class is good for font rendering.
        // Base background and text colors are also in globals.css or can be reinforced here.
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
