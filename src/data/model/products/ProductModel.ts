/**
 * Modelo de dados de produtos.
 * @author Alexandre Raminelli
 */
export default interface ProductModel {
  /** ID do produto no banco de dados. */
  product_id: number
  /** Marca do produto. */
  brand: string
  /** Nome do produto. */
  name: string
  /** Preço do produto (em centavos). */
  price_in_cents: number
  /** Descrição do produto. */
  description: string
  /** Detalhes do produto. */
  details?: string
  /** Anos de garantia do produto em anos. */
  guaranteed_years?: number
}
