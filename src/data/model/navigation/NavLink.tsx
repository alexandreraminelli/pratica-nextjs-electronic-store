import { LucideIcon } from "lucide-react" // tipo de ícones do Lucide

/**
 * Interface dos links de navegação.
 *
 * @author Alexandre Raminelli
 */
export default interface NavLink {
  /** Endereço do link. */
  href: string
  /** Texto do link que explica a página de destino do usuário. */
  text: string
}

/**
 * Interface dos links de navegação com um ícone.
 * Herda os atributos do `NavLink`.
 *
 * @author Alexandre Raminelli
 */
export interface NavLinkWithIcon extends NavLink {
  /** Componente de ícone do Lucide Icons. */
  icon: LucideIcon
}
