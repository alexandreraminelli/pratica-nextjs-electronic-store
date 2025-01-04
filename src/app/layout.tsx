import type { Metadata } from "next" // formato dos metadados
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

/**
 * Metadados principais do site.
 * @author Alexandre Raminelli Junior
 */
export const metadata: Metadata = {
  title: {
    template: "%s | Cyber Store",
    default: "Cyber Store",
  },
  description: "Electronics store. Buy your new cell phone, tablet, computer, smartwatch, camera, headphones, video game and more.",
}

/**
 * Layout root do site.
 * @author Next.js
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
