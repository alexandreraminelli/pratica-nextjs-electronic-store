import { Metadata } from "next"

/**
 * Metadados da página de cartões de presentes.
 */
export const metadata: Metadata = {
  title: "Gift Cards",
}

/**
 * Página de cartões de presentes.
 */
export default function GiftCardsPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Gift Cards Page</h1>
    </main>
  )
}
