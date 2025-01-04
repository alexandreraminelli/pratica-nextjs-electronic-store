import { inter } from "@/app/ui/fonts/fonts" // fontes
import Header from "@/app/ui/layout/header/Header"
import type { Metadata } from "next" // formato dos metadados
import "./globals.css"

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
      <body className={`${inter.className} antialiased`}>
        {/* Cabeçalho */}
        <Header />
        {/* Conteúdo da página */}
        {children}
      </body>
    </html>
  )
}
