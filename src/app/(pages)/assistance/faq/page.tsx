import { Metadata } from "next"

/**
 * Metadados da página de FAQ (perguntas frequentes).
 */
export const metadata: Metadata = {
  title: "FAQ (Frequently Asked Questions)",
}

/**
 * Página de FAQ (perguntas frequentes).
 */
export default function FAQPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">FAQ (Frequently Asked Questions) Page</h1>
    </main>
  )
}
