import Image from "next/image"

/**
 * Página inicial do site.
 * @author Alexandre Raminelli Junior
 */
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-full">
      <h1>Electronic Store</h1>
      <Image src={"/favicon.svg"} alt="Logo" width={80} height={80} />
    </main>
  )
}
