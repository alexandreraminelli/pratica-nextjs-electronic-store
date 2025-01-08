import { Metadata } from "next"

/**
 * Metadados da página de termos de uso.
 */
export const metadata: Metadata = {
  title: "Terms of Use",
}

/**
 * Página de termos de uso.
 */
export default function TermsOfUsePage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Terms of Use Page</h1>
    </main>
  )
}
