import { SimpleIcon } from "simple-icons"

/**
 * Interface dos links de redes sociais da loja.
 *
 * @author Alexandre Raminelli
 */
export default interface SocialNetworkList {
  /** Qual rede social o link abre (inclui informações como o nome). */
  socialNetwork: SimpleIcon
  /** URL pra rede social. */
  url: string
}

/**
 * Interface dos links de redes sociais após a geração do ícone SVG.
 *
 * @author Alexandre Raminelli
 */
export interface SocialNetworkWithIcon extends SocialNetworkList {
  /** Componente da logo SVG da rede social. */
  Icon: React.ComponentType
}
