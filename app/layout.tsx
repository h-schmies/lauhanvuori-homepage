import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "leaflet/dist/leaflet.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { AIProvider } from "@/components/ai-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lauhanvuori GeoPark - From Mountains to Mires",
  description: "Discover the natural wonders of Lauhanvuori GeoPark in South-Eastern Finland",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AIProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </AIProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
