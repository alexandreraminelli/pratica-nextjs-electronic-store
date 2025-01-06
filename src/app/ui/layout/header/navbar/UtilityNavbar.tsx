import Link from "next/link"
import { utilityNavbar } from "@/data/constants/navigation/utilityNavbar"
import { NavLinkWithIcon } from "@/data/model/navigation/NavLink"

/**
 * Interface dos props do componente `UtilityNavbar`.
 *
 * @author Alexandre Raminelli
 */
interface UtilityNavbarProps {
  /** Classes personalizadas. (opcional) */
  className?: string
}
/**
 * Grupo de botões de ações da loja no header principal.
 *
 * @author Alexandre Raminelli
 */
export default function UtilityNavbar({ className }: UtilityNavbarProps) {
  return (
    <div
      className={`
        flex flex-row gap-6
        ${className}
      `}
    >
      {utilityNavbar.map((link, index) => (
        <UtilityLink key={index} icon={link.icon} text={link.text} href={link.href} />
      ))}
    </div>
  )
}

/**
 * Botões de ação da loja no header principal.
 *
 * @author Alexandre Raminelli
 */
function UtilityLink(props: NavLinkWithIcon) {
  return (
    <Link href={props.href} role="button">
      <span className="sr-only">{props.text}</span>
      <props.icon
        strokeWidth={1.5} // espessura
        className="w-7 h-7 md:w-8 md:h-8 hover:text-color-14" // estilos
      />
    </Link>
  )
}
