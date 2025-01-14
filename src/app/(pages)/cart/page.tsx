import { Metadata } from "next"

/**
 * Metadados da página de carrinho.
 */
export const metadata: Metadata = {
  title: "Cart",
}

/**
 * Página de sobre nós.
 */
export default function CartPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Cart Page</h1>
    </main>
  )
}
