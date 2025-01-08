import { Metadata } from "next"

/**
 * Metadados da página de contratos de serviço.
 */
export const metadata: Metadata = {
  title: "Service Contracts",
}

/**
 * Página de contratos de serviço.
 */
export default function ServiceContractsPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Service Contracts Page</h1>
    </main>
  )
}
