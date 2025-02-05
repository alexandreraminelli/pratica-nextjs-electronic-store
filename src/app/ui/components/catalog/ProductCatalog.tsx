"use client"

import { useProducts } from "@/data/hooks/database/useProducts"
import ProductCard from "./card/ProductCard"

/**
 * Catálogo de produtos.
 * Realiza a listagem dos produtos existentes no banco de dados.
 * @author Alexandre Raminelli
 */
export default function ProductCatalog() {
  //
  const { products, loading } = useProducts()

  // Mensagem de carregamento
  if (loading) return <p>Getting products...</p>

  return (
    <div
      aria-label="products catalog"
      className="grid grid-cols-auto-fit-42 lg:grid-cols-auto-fit-66
      gap-4 px-container
      transition-all"
    >
      {products.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </div>
  )
}
