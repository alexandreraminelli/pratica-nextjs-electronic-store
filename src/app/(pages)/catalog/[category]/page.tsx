/**
 * Interface dos props de rota dinâmica.
 */
interface CategoryPageProps {
  /**
   * Parâmetros de rota dinâmica.
   * Define o formato esperado para os props recebidos pelo componente da página.
   *
   * - `params`: parâmetros do sistema de rotas dinâmicas do Next.js
   * - `Promise<{ category: string }>`: retorna objeto contento um parâmetro `category`.
   */
  params: Promise<{ category: string }>
}
/**
 * Página dinâmica de categorias.
 * Exibe os produtos que pertencem a categoria pesquisada.
 *
 * @param param0 Props da rota dinâmica desestruturados.
 *
 * @author Alexandre Raminelli
 */
export default async function CategoryPage(
  { params }: CategoryPageProps // definir parâmetros props da página
) {
  /** Extração do parâmetro `category` do `params`. */
  const category = (await params).category

  // retorno da página
  return (
    <div className="pd-container py-20">
      <h1 className="text-center text-5xl">Catalog of {category}</h1>
    </div>
  )
}
