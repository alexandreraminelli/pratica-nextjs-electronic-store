import { Metadata } from "next"

/**
 * Metadados da página de câmeras.
 */
export const metadata: Metadata = {
  title: "Cameras",
}

/**
 * Página de categoria de câmeras.
 */
export default function CameraPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-extrabold">Camera Category</h1>
    </main>
  )
}
