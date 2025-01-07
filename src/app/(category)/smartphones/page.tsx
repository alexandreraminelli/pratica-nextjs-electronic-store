import { Metadata } from "next"

/**
 * Metadados da página de smartphones.
 */
export const metadata: Metadata = {
  title: "Smartphones",
}

/**
 * Página de categoria de câmeras.
 */
export default function SmartphonesPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Smartphones Category</h1>
    </main>
  )
}
