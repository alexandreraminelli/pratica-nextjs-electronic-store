import ProductModel from "@/data/model/products/ProductModel"
import { HeartIcon } from "lucide-react"
import Button from "@/app/ui/components/buttons/Button"

/**
 * Cards de produtos.
 * @author Alexandre Raminelli
 */
export default function ProductCard(
  { product }: ProductCardsProps // props
) {
  return (
    <div
      aria-label="product card"
      className="flex flex-col
      bg-color-16 hover:bg-color-39 rounded-lg
      border-2 border-transparent hover:border-white
      transition-colors
      py-6 px-3 gap-2"
    >
      {/* Ícone de favorito */}
      <HeartIcon className="ms-auto" />

      {/* Imagem do produto */}
      <picture></picture>

      <div className="flex flex-col gap-4">
        {/* Informações */}
        <div>
          {/* Nome do produto */}
          <h2>{product.name}</h2>
          {/* Preço do produto */}
          <p>${product.price_in_cents / 100}</p>
        </div>
        {/* Botão de comprar */}
        <Button text="Buy Now" className="text-nowrap" />
      </div>
    </div>
  )
}
/** Props de `ProductCards`. */
interface ProductCardsProps {
  /** Produto a ser renderizado. */
  product: ProductModel
}
