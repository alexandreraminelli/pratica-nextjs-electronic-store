"use client"

import { mainNavbar } from "@/data/constants/navigation/mainNavbar" // links do navbar
import NavLink from "@/data/model/navigation/NavLink"
import clsx from "clsx" // classes condicionais
import Link from "next/link"
import { usePathname } from "next/navigation" // obter caminho da rota atual

/**
 * Interface dos props do componente `MainNavbar`.
 *
 * @author Alexandre Raminelli
 */
interface MainNavbarProps {
  /** Classes personalizadas. (opcional) */
  className?: string
}

/**
 * Barra de navegação principal.
 * Possui os links das principais páginas do site.
 *
 * @author Alexandre Raminelli
 */
export default function MainNavbar({ className }: MainNavbarProps) {
  /** Caminho da rota atual. */
  const pathname = usePathname()

  return (
    <nav className={className}>
      <ul
        className="
        flex flex-row justify-between
        w-full
        gap-5 lg:gap-12
        "
      >
        {mainNavbar.map((link, index) => (
          <LinkNavbar key={index} link={link} active={pathname === link.href} />
        ))}
      </ul>
    </nav>
  )
}

/**
 * Interface dos props do componente `LinkNavbar`.
 *
 * @author Alexandre Raminelli
 */
interface LinkNavbarProps {
  /** Objeto do link a ser renderizado. */
  link: NavLink
  /** Se o link é da página atual. */
  active: boolean
}
/**
 * Link do navbar principal.
 *
 * @author Alexandre Raminelli
 */
function LinkNavbar({ link, active }: LinkNavbarProps) {
  return (
    <li>
      <Link
        href={link.href} // endereço
        // estilos:
        className={clsx(
          `text-base font-medium
          hover:opacity-100 transition-opacity`,
          {
            "opacity-30 hover:opacity-100": !active, // links não ativos
            "opacity-100": active, // links ativos
          }
        )}
      >
        {link.text} {/* texto */}
      </Link>
    </li>
  )
}
