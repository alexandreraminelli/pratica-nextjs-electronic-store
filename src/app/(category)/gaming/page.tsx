import { Metadata } from "next"

/**
 * Metadados da página de videogames.
 */
export const metadata: Metadata = {
  title: "Gaming",
}

/**
 * Página de categoria de câmeras.
 */
export default function GamingPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Gaming Category</h1>
    </main>
  )
}
