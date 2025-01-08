import { Metadata } from "next"

/**
 * Metadados da página de buscar um pedido.
 */
export const metadata: Metadata = {
  title: "Find an Order",
}

/**
 * Página de buscar um pedido.
 */
export default function FindAnOrderPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Find an Order Page</h1>
    </main>
  )
}
