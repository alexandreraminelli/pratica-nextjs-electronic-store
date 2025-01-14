import CategoryCard from "./CategoryCard"
import { categoryRoutes } from "@/data/constants/navigation/categoryRoutes"

/**
 * Grupo de cards de categorias.
 */
export default function CategoryCardGroup() {
  return (
    <div>
      {categoryRoutes.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </div>
  )
}
