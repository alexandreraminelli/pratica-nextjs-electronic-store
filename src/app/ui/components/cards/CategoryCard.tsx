import { NavLinkWithIcon } from "@/data/model/navigation/NavLink"
import Link from "next/link"

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
  // desestruturação
  const { text, href, Icon } = category

  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center
        py-6 px-13 gap-2
        bg-color-36 text-foreground rounded-2xl
        hover:bg-color-39 border-2 hover:border-foreground transition-colors"
    >
      {/* Ícone */}
      <Icon aria-hidden className="size-12" strokeWidth={1.5} />

      {/* Título */}
      <h3 className="font-medium text-base text-center text-nowrap">{text}</h3>
    </Link>
  )
}
