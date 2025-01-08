import { Metadata } from "next"

/**
 * Metadados da página de troca e devolução de mercadorias.
 */
export const metadata: Metadata = {
  title: "Exchange and Return of Goods",
}

/**
 * Página de troca e devolução de mercadorias.
 */
export default function ExchangeAndReturnPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Exchange and Return of Goods Page</h1>
    </main>
  )
}
