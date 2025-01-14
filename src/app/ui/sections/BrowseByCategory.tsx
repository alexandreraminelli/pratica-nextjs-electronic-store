import CategoryCardGroup from "@/app/ui/components/cards/CategoryCardGroup"
import PaginationArrows from "@/app/ui/components/pagination/PaginationArrows"

/**
 * Seção de buscar produtos por categoria.
 * Possui um grupo de cards com um link que abre o catálogo de produtos na categoria.
 *
 * @author Alexandre Raminelli
 */
export default function BrowseByCategory() {
  return (
    <section
      className="flex flex-col
        pd-container py-16 md:py-20 gap-12 md:gap-8 
        bg-color-26"
    >
      <header className="flex flex-row justify-between items-center">
        {/* Título */}
        <h2 className="font-medium text-2xl">Browse By Category</h2>

        {/* Setas de paginação */}
        <PaginationArrows />
      </header>

      {/* Cards de categorias */}
      <CategoryCardGroup />
    </section>
  )
}
