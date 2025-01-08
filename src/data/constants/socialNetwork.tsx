import SocialNetworkList, { SocialNetworkWithIcon } from "@/data/model/socialNetwork"
import { siFacebook, siInstagram, SimpleIcon, siTiktok, siX } from "simple-icons"

/**
 * Lista das redes sociais da loja.
 *
 * @author Alexandre Raminelli
 */
export const socialNetworkList: SocialNetworkList[] = [
  { socialNetwork: siX, url: "https://x.com/" },
  { socialNetwork: siFacebook, url: "https://www.facebook.com/" },
  { socialNetwork: siTiktok, url: "https://www.tiktok.com/" },
  { socialNetwork: siInstagram, url: "https://www.instagram.com/" },
]

/**
 * Lista das redes sociais da loja com o ícone SVG da rede social.
 *
 * @author Alexandre Raminelli
 */
export const socialNetworkWithIcon: SocialNetworkWithIcon[] = socialNetworkList.map((item) => ({
  ...item,
  Icon: () => <SocialIcon icon={item.socialNetwork} />, // Geração do ícone SVG
}))

/**
 * Props do componente `SocialIcon`.
 *
 * @author Alexandre Raminelli
 */
interface SocialIconProps {
  /** Ícone. */
  icon: SimpleIcon
}
/**
 * Função que gera os componentes de ícones SVGs das redes sociais.
 *
 * @author Alexandre Raminelli
 */
function SocialIcon({ icon }: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor" // preenchimento
      dangerouslySetInnerHTML={{ __html: icon.svg }} // SVG
      className="size-6" // styles
    />
  )
}
