// app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

// Bebas Neue — eyebrows, app-UI titles, chapter labels (single weight)
const bebas = localFont({
  src: "./fonts/BebasNeue-Regular.ttf",
  variable: "--font-bebas",
  weight: "400",
  display: "swap",
});

// Hanken Grotesk — body + app-UI text (variable, use 400/600/800 only)
const hanken = localFont({
  src: "./fonts/HankenGrotesk-VariableFont_wght.ttf",
  variable: "--font-hanken",
  weight: "400 800",
  display: "swap",
});

// Playfair Display — editorial headings (web-only addition), 600 only
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GroceryGuru",
  description: "Smart lists made simple",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${hanken.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
