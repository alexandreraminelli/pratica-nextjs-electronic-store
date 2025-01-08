import { Metadata } from "next"

/**
 * Metadados da página de contato.
 */
export const metadata: Metadata = {
  title: "Contact",
}

/**
 * Página de sobre nós.
 */
export default function ContactPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Contact Page</h1>
    </main>
  )
}
