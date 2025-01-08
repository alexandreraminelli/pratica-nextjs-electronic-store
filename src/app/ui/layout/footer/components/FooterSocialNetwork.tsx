import { socialNetworkWithIcon } from "@/data/constants/socialNetwork" // lista das redes sociais
import { SocialNetworkWithIcon } from "@/data/model/socialNetwork"
import Link from "next/link"

/**
 * Links de redes sociais do footer.
 *
 * @author Alexandre Raminelli
 */
export default function FooterSocialNetwork() {
  return (
    <aside
      className="
      flex flex-row
      w-full justify-center md:justify-start
      gap-4
      text-white"
    >
      {socialNetworkWithIcon.map((social, index) => (
        <SocialLink key={index} socialNetwork={social} />
      ))}
    </aside>
  )
}

/**
 * Props de `SocialLink`.
 *
 * @author Alexandre Raminelli
 */
interface SocialLinkProps {
  /** Objeto com as informações da rede social. */
  socialNetwork: SocialNetworkWithIcon
}
/**
 * Link de rede social.
 *
 * @author Alexandre Raminelli
 */
function SocialLink(
  { socialNetwork }: SocialLinkProps // props
) {
  return (
    <Link
      href={socialNetwork.url} // link
      target="_blank"
      aria-label={`Link para ${socialNetwork.socialNetwork.title}`}
      className="size-6"
    >
      <socialNetwork.Icon />
    </Link>
  )
}
