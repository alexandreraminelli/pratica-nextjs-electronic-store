import { Metadata } from "next"

/**
 * Metadados da página de headphones.
 */
export const metadata: Metadata = {
  title: "Headphones",
}

/**
 * Página de categoria de câmeras.
 */
export default function HeadphonesPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Headphones Category</h1>
    </main>
  )
}
