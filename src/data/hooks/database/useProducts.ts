import ProductModel from "@/data/model/products/ProductModel"

import { useEffect, useState } from "react"

/**
 * Hook que obtêm os produtos do banco de dados usando uma API Rest.
 * @author Alexandre Raminelli
 */
export function useProducts() {
  // definição de estados
  const [products, setProducts] = useState<ProductModel[]>([])
  const [loading, setLoading] = useState(true)

  // buscar os produtos
  useEffect(() => {
    async function fetchProducts() {
      try {
        // Fazer requisição GET para o API Rest de produtos
        const response = await fetch("/api/products")
        const data = await response.json()
        setProducts(data)
      } catch (e) {
        console.log("Error fetching products:", e)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  // Retornar os dados
  return { products, loading }
}
