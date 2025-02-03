import type { Metadata } from "next"

/**
 * Metadados da página de catálogo.
 * @author Alexandre Raminelli
 */
export const metadata: Metadata = {
  title: {
    template: "%s | Catalog",
    default: "Catalog",
  },
}

/**
 * Parâmetros do layout `CatalogLayout()`.
 * @author Alexandre Raminelli
 */
interface CatalogLayoutProps {
  /** Páginas filhas do layout. */
  children: React.ReactNode
}
/**
 * Layout das páginas de catalogo.
 * @author Alexandre Raminelli
 */
export default function CatalogLayout(
  { children }: Readonly<CatalogLayoutProps> // params
) {
  return (
    <main>
      {/* Filtros */}

      {/* Lista de produtos */}
      {children}
    </main>
  )
}
