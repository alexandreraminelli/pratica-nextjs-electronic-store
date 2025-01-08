import { footerNavigation } from "@/data/constants/navigation/footerNav" // lista de links
import NavLink from "@/data/model/navigation/NavLink" // formato dos dados
import Link from "next/link"

/**
 * Seção de navegação do rodapé.
 *
 * @author Alexandre Raminelli
 */
export default function FooterNavigation() {
  return (
    <nav
      className="
      w-full"
    >
      <ul
        className="
        grid grid-cols-[repeat(auto-fit,minmax(224px,1fr))] md:grid-cols-2
        gap-8
        text-center md:text-start"
      >
        {footerNavigation.map((group, index) => (
          <li
            key={index}
            className="
            flex flex-col 
            gap-2"
          >
            {/* Link principal */}
            <FooterLink link={group.mainLink} />
            <ul
              className="
              flex flex-col
              gap-4"
            >
              {/* Sub-links  */}
              {group.subLinks.map((item, index) => (
                <FooterLink key={index} link={item} groupLink={group.mainLink.href} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/**
 * Props do `FooterLink`.
 *
 * @author Alexandre Raminelli
 */
interface FooterLinkProps {
  /** Link a ser renderizado. */
  link: NavLink
  /** Link principal do grupo. (opcional) */
  groupLink?: string
}
/**
 * Link do Footer Navigation.
 *
 * @author Alexandre Raminelli
 */
function FooterLink({ link, groupLink }: FooterLinkProps) {
  return (
    <Link
      // rota:
      href={groupLink ? `${groupLink}${link.href}` : link.href}
      // styles:
      className={
        groupLink
          ? "text-light-9 hover:text-white text-sm" // subLink
          : "text-white hover:text-light-9 font-semibold" // mainLink
      }
    >
      {link.text}
    </Link>
  )
}
