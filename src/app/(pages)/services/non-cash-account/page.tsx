import { Metadata } from "next"

/**
 * Metadados da página de conta não monetária.
 */
export const metadata: Metadata = {
  title: "Non-Cash Account",
}

/**
 * Página de conta não monetária.
 */
export default function NonCashAccountPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Non-Cash Account Page</h1>
    </main>
  )
}
