import { Metadata } from "next"

/**
 * Metadados da página de blog.
 */
export const metadata: Metadata = {
  title: "Blog",
}

/**
 * Página inicial do blog.
 */
export default function BlogPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Blog Page</h1>
    </main>
  )
}
