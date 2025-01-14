import { NavLinkWithIcon } from "@/data/model/navigation/NavLink"

/**
 * Props do componente `CategoryCard`.
 */
export interface CategoryCardProps {
  /** Objeto da categoria a ser renderizada. */
  category: NavLinkWithIcon
}

/**
 * Componente do card de categoria.
 *
 * @author Alexandre Raminelli
 */
export default function CategoryCard(
  { category }: CategoryCardProps // props
) {
  return (
    <div>
      <h3>{category.text}</h3>
    </div>
  )
}
