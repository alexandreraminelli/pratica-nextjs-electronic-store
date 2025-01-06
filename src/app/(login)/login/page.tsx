import { Metadata } from "next"

/**
 * Metadados da página de login.
 */
export const metadata: Metadata = {
  title: "Login",
}

/**
 * Página de sobre nós.
 */
export default function LoginPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Login Page</h1>
    </main>
  )
}
