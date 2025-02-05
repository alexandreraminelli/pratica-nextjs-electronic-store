import Button from "@/app/ui/components/buttons/Button"
import ProductModel from "@/data/model/products/ProductModel"
import { HeartIcon } from "lucide-react"
import Image from "next/image"
import ProductInfo from "./ProductInfo"

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
      className="flex flex-col items-center justify-between
      bg-color-16 hover:bg-color-39 rounded-lg
      cursor-pointer
      transition-colors
      py-6 px-3 gap-2
      "
    >
      {/* Ícone de favorito */}
      <HeartIcon className="ms-auto" />

      {/* Imagem do produto */}
      <ProductImage image={product.image} altText={product.name} />

      <div className="flex flex-col w-full gap-4">
        {/* Informações */}
        <ProductInfo name={product.name} price={product.price_in_cents} />
        {/* Botão de comprar */}
        <Button text="Buy Now" size="small" className="text-nowrap" />
      </div>
    </div>
  )
}
/** Props de `ProductCards`. */
interface ProductCardsProps {
  /** Produto a ser renderizado. */
  product: ProductModel
}

/** Imagem do produto. */
function ProductImage(
  { image = "/favicon.svg", altText }: ProductImageProps // props
) {
  return (
    <picture>
      <Image
        src={image !== "" ? image : "/favicon.svg"} // image URL
        alt={altText}
        // dimensões:
        height={1600}
        width={1600}
        className="object-contain w-auto h-26 md:h-40
        rounded-md transition-all"
      />
    </picture>
  )
}
/** Props de `ProductImage`. */
interface ProductImageProps {
  /** Imagem do produto. */
  image?: string
  /** Texto alternativo. */
  altText: string
}
