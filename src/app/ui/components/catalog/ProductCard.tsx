import ProductModel from "@/data/model/products/ProductModel"

/**
 * Cards de produtos.
 * @author Alexandre Raminelli
 */
export default function ProductCard(
  { product }: ProductCardsProps // props
) {
  return (
    <div key={product.product_id}>
      <h2>{product.name}</h2>
      <p>Preço: R$ {(product.price_in_cents / 100).toFixed(2)}</p>
      {product.description && <p>{product.description}</p>}
    </div>
  )
}
/** Props de `ProductCards`. */
interface ProductCardsProps {
  /** Produto a ser renderizado. */
  product: ProductModel
}
