import { mainNavbar } from "@/data/constants/navigation/mainNavbar" // links do navbar
import NavLink from "@/data/model/navigation/NavLink"
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
 * Link do navbar principal.
 *
 * @author Alexandre Raminelli
 */
function LinkNavbar({ link }: { link: NavLink }) {
  return (
    <li>
      <Link
        href={link.href} // endereço
        // estilos:
        className="
        text-base font-medium opacity-30
        hover:opacity-100 transition-opacity
        "
      >
        {link.text} {/* texto */}
      </Link>
    </li>
  )
}
