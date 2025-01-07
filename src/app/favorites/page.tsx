import { Metadata } from "next"

/**
 * Metadados da página de favoritos.
 */
export const metadata: Metadata = {
  title: "Favorite Products",
}

/**
 * Página de favoritos.
 */
export default function FavoritesPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Favorites Page</h1>
    </main>
  )
}
