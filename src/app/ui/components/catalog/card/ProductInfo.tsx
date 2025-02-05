import priceToCurrency from "@/utils/dataProcessing/monetary/priceToCurrency"

/** Texto com as informações do produto no card.
 * @author Alexandre Raminelli
 */
export default function ProductInfo(
  { name, price }: ProductInfoProps // props
) {
  return (
    <div
      className="flex flex-col gap-4
        text-center"
    >
      {/* Nome do produto */}
      <h3 className="font-medium">{name}</h3>
      {/* Preço do produto */}
      <p className="font-semibold text-2xl">{priceToCurrency(price)}</p>
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
