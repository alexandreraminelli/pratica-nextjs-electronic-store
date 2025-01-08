import { Metadata } from "next"

/**
 * Metadados da página de serviços.
 */
export const metadata: Metadata = {
  title: "Services",
}

/**
 * Página de serviços.
 */
export default function ServicesPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Services Page</h1>
    </main>
  )
}
