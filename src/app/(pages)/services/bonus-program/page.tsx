import { Metadata } from "next"

/**
 * Metadados da página de programa de bônus.
 */
export const metadata: Metadata = {
  title: "Bonus Program",
}

/**
 * Página de programa de bônus.
 */
export default function BonusProgramPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Bonus Program Page</h1>
    </main>
  )
}
