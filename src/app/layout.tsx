import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // CSS variable for Inter
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // CSS variable for Montserrat
});

export const metadata: Metadata = {
  title: "Immigration Consultant - Your Gateway to Global Opportunities",
  description:
    "Expert immigration consultation services for skilled workers, families, businesses, and students. Achieve your global aspirations with us.",
  keywords: [
    "immigration consultant",
    "visa application",
    "immigration lawyer",
    "skilled worker visa",
    "family sponsorship",
    "business immigration",
    "student visa",
    "Canada immigration", // Assuming a target, can be adjusted
    "USA immigration",    // Assuming a target, can be adjusted
    "global opportunities",
    "immigration services",
    "permanent residency",
    "citizenship application",
  ],
  authors: [{ name: "Immigration Consultancy Name" }], // Replace with actual name
  openGraph: {
    type: "website",
    locale: "en_US", // Adjust as needed
    url: "https://www.yourdomain.com", // Replace with actual domain
    title: "Immigration Consultant - Your Gateway to Global Opportunities",
    description: "Expert immigration consultation for visas, residency, and citizenship.",
    siteName: "Immigration Consultancy Name", // Replace
    // images: [ // Add images for social sharing if available
    //   {
    //     url: "https://www.yourdomain.com/og-image.jpg", // Replace
    //     width: 1200,
    //     height: 630,
    //     alt: "Immigration Consultant Services",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    // site: "@yourtwitterhandle", // Replace
    title: "Immigration Consultant - Your Gateway to Global Opportunities",
    description: "Expert immigration consultation for visas, residency, and citizenship.",
    // images: ["https://www.yourdomain.com/twitter-image.jpg"], // Replace
  },
  robots: { // Basic robots meta tag
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // viewport: "width=device-width, initial-scale=1", // Next.js handles viewport by default
  // icons: { // Add favicon links if they are in /public
  //   icon: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
