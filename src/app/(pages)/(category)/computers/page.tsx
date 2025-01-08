import { Metadata } from "next"

/**
 * Metadados da página de computadores.
 */
export const metadata: Metadata = {
  title: "Computers",
}

/**
 * Página de categoria de câmeras.
 */
export default function ComputersPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Computers Category</h1>
    </main>
  )
}
