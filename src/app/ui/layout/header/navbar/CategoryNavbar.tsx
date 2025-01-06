import Link from "next/link"
import { categoryNavbar } from "@/data/constants/navigation/categoryNavbar"
import { NavLinkWithIcon } from "@/data/model/navigation/NavLink"

/**
 * Props do componente `CategoryNavbar`.
 *
 * @author Alexandre Raminelli
 */
interface CategoryNavbarProps {
  /** Classes personalizadas. (opcional) */
  className?: string
}

/**
 * Navbar de categorias.
 * Possui os links de navegação para as principais categoria de produtos da loja.
 *
 * @author Alexandre Raminelli
 */
export default function CategoryNavbar({ className }: CategoryNavbarProps) {
  return (
    <nav
      className={`
      pd-container
      bg-dark-03 text-white font-medium text-nowrap
      flex flex-row flex-wrap py-2 justify-center items-center
      ${className}
    `}
    >
      {categoryNavbar.map((link, index) => (
        <CategoryLink key={index} link={link} />
      ))}
    </nav>
  )
}

/**
 * Interface dos props do componente `CategoryLink`.
 *
 * @author Alexandre Raminelli
 */
interface CategoryLinkProps {
  /** Objeto do link a ser renderizado. */
  link: NavLinkWithIcon
}
/**
 * Link de categoria de produto.
 *
 * @author Alexandre Raminelli
 */
function CategoryLink({ link }: CategoryLinkProps) {
  return (
    <Link
      href={link.href} // ro``ta
      // styles:
      className={`
        flex flex-row flex-1
        gap-2
        opacity-50 hover:opacity-100
        transition-opacity
      `}
    >
      <link.Icon className="h-6 w-6" /> {/* ícone */}
      <span>{link.text}</span> {/* texto */}
    </Link>
  )
}
