import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Muhammad Hammad - IT Security & System Engineer",
  description:
    "Professional portfolio of Muhammad Hammad, IT Security & System Engineer with 4+ years of experience in cybersecurity, system administration, and enterprise infrastructure.",
  generator: "v0.app",
  keywords: "IT Security, System Engineer, Cybersecurity, Network Security, Cloud Security, Muhammad Hammad",
  authors: [{ name: "Muhammad Hammad" }],
  openGraph: {
    title: "Muhammad Hammad - IT Security & System Engineer",
    description:
      "Professional portfolio showcasing expertise in IT security, system administration, and enterprise infrastructure.",
    type: "website",
  },
  icons: {
    icon: '/favicon/shield.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
          <Toaster position="top-right" richColors />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
