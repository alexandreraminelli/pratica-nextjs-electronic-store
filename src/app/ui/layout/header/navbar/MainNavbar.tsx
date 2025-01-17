"use client"

import { mainNavbar } from "@/data/constants/navigation/mainNavbar" // links do navbar
import useIsActive from "@/data/hooks/navigation/useIsActive" // verificar se link está ativo
import NavLink from "@/data/model/navigation/NavLink"
import clsx from "clsx" // classes condicionais
import Link from "next/link"

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
          <LinkNavbar key={index} link={link} />
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
}
/**
 * Link do navbar principal.
 *
 * @author Alexandre Raminelli
 */
function LinkNavbar({ link }: LinkNavbarProps) {
  /** Se o link está ativo, ou seja, se seu href é da rota atual. */
  const active = useIsActive(link.href)

  return (
    <li>
      <Link
        href={link.href} // endereço
        // estilos:
        className={clsx(
          `text-base font-medium text-nowrap
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
