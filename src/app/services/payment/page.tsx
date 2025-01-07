import { Metadata } from "next"

/**
 * Metadados da página de pagamento.
 */
export const metadata: Metadata = {
  title: "Payment",
}

/**
 * Página de pagamento.
 */
export default function PaymentPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Payment Page</h1>
    </main>
  )
}
