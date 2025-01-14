import CategoryCardGroup from "@/app/ui/components/cards/CategoryCardGroup"

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
        pd-container py-16 gap-12
        bg-color-26"
    >
      <header>
        {/* Título */}
        <h2 className="font-medium text-2xl">Browse By Category</h2>

        {/* Setas de paginação */}
      </header>

      {/* Cards de categorias */}
      <CategoryCardGroup />
    </section>
  )
}
