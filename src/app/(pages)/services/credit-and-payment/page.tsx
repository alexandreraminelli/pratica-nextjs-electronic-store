import { Metadata } from "next"

/**
 * Metadados da página de crédito e pagamento.
 */
export const metadata: Metadata = {
  title: "Credit and Payment",
}

/**
 * Página de crédito e pagamento.
 */
export default function CreditAndPaymentPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Credit and Payment Page</h1>
    </main>
  )
}
