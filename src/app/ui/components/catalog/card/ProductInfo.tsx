import priceToCurrency from "@/utils/dataProcessing/monetary/priceToCurrency"

/** Texto com as informações do produto no card.
 * @author Alexandre Raminelli
 */
export default function ProductInfo(
  { name, price }: ProductInfoProps // props
) {
  return (
    <div>
      {/* Nome do produto */}
      <h2>{name}</h2>
      {/* Preço do produto */}
      <p>{priceToCurrency(price)}</p>
    </div>
  )
}
/** Props de `ProductInfo`. */
interface ProductInfoProps {
  /** Nome do produto. */
  name: string
  /** Preço do produto. */
  price: number
}
