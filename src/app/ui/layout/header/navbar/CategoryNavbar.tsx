"use client"

import { categoryNavbar } from "@/data/constants/navigation/categoryNavbar"
import clsx from "clsx"
import useIsActive from "@/data/hooks/navigation/isActive"
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
  /** Se o link está ativo (se seu href é pra rota atual). */
  const isActive = useIsActive(link.href)

  return (
    <Link
      href={link.href} // ro``ta
      // styles:
      className={clsx(
        `flex flex-row flex-1 
        gap-2
        transition-opacity`,
        {
          "opacity-50 hover:opacity-100": !isActive, // links não ativos
          "opacity-100": isActive, // links ativos
        }
      )}
    >
      <link.Icon className="h-6 w-6" /> {/* ícone */}
      <span>{link.text}</span> {/* texto */}
    </Link>
  )
}
