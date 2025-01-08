import { Metadata } from "next"

/**
 * Metadados da página de assistência ao consumidor.
 */
export const metadata: Metadata = {
  title: "Assistance to the Buyer",
}

/**
 * Página de assistência ao consumidor.
 */
export default function AssistancePage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Assistance to the Buyer Page</h1>
    </main>
  )
}
