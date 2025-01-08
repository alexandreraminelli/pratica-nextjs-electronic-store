import { Metadata } from "next"

/**
 * Metadados da página de termos de entrega.
 */
export const metadata: Metadata = {
  title: "Terms of Delivery",
}

/**
 * Página de termos de entrega.
 */
export default function TermsOfDeliveryPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Terms of Delivery Page</h1>
    </main>
  )
}
