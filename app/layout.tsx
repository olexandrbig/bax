"use client";

import React from "react";
import { ThemeProvider } from "@/components/theme-provider"
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
    <head>
      <link rel="preconnect" href="https://fonts.mailerlite.com" crossOrigin=""/>
    </head>
    <body className={`min-h-screen bg-(--color-4) text-foreground antialiased ${montserrat.variable}`} suppressHydrationWarning>
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
