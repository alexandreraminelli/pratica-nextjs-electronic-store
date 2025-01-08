import { Metadata } from "next"

/**
 * Metadados da página de sobre nós.
 */
export const metadata: Metadata = {
  title: "About us",
}

/**
 * Página de sobre nós.
 */
export default function AboutPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">About us Page</h1>
    </main>
  )
}
