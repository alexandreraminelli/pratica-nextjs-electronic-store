"use client"

import { categoryRoutes } from "@/data/constants/navigation/categoryRoutes"
import clsx from "clsx"
import useIsActive from "@/data/hooks/navigation/useIsActive"
import { NavLinkWithIcon } from "@/data/model/navigation/NavLink"
import Link from "next/link"

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
      px-container
      bg-dark-3 text-white 
      font-medium text-nowrap 
      max-md:text-xs max-lg:text-sm
      divide-x
      flex flex-row py-2 justify-center items-center
      ${className}
    `}
    >
      {categoryRoutes.map((link, index) => (
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
  /** Se o link está ativo (se seu href é pra rota atual). */
  const isActive = useIsActive(link.href)

  return (
    <Link
      href={link.href} // rota
      // styles:
      className={clsx(
        `flex flex-row flex-1 justify-center items-center
        gap-1 lg:gap-2 px-1
        transition-opacity`,
        {
          "opacity-50 hover:opacity-100": !isActive, // links não ativos
          "opacity-100": isActive, // links ativos
        }
      )}
    >
      <link.Icon className="size-5 lg:size-6 transition-all" /> {/* ícone */}
      <span className="transition-all">{link.text}</span> {/* texto */}
    </Link>
  )
}
