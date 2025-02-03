"use client"

import { useProducts } from "@/data/hooks/database/useProducts"

/**
 * Catálogo de produtos.
 * Realiza a listagem dos produtos existentes no banco de dados.
 * @author Alexandre Raminelli
 */
export default function ProductCatalog() {
  //
  const { products, loading } = useProducts()

  // Mensagem de carregamento
  if (loading) return <p>Carregando produtos...</p>

  return (
    <div>
      {products.map((product) => (
        <div key={product.product_id}>
          <h2>{product.name}</h2>
          <p>Preço: R$ {(product.price_in_cents / 100).toFixed(2)}</p>
          {product.description && <p>{product.description}</p>}
        </div>
      ))}
    </div>
  )
}
