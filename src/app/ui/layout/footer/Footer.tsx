import LogoLink from "@/app/ui/logo/LogoLink"
import FooterNavigation from "./components/FooterNavigation"
import FooterSocialNetwork from "./components/FooterSocialNetwork"

/**
 * Rodapé do site.
 *
 * @author Alexandre Raminelli
 */
export default function Footer() {
  return (
    <footer
      className="
      flex flex-col
      gap-8 md:gap-6
      bg-dark-27 lg:bg-black
      text-light-9
      py-12 px-container
      "
    >
      <div
        className="
        flex flex-col md:flex-row items-center md:items-start  md:justify-between
        gap-8
        w-full
        "
      >
        {/* Logo */}
        <FooterLogo />
        {/* Footer Nav */}
        <FooterNavigation />
      </div>

      {/* Social Networks */}
      <FooterSocialNetwork />
    </footer>
  )
}

/**
 * Logo do footer.
 *
 * @author Alexandre Raminelli
 */
function FooterLogo() {
  return (
    <header
      className="
      flex flex-col items-center md:items-start
      gap-4 md:gap-6
      w-fit"
    >
      {/* Logo */}
      <LogoLink className="max-w-24 text-white" />
      {/* Texto */}
      <p
        className="
        text-light-9 text-sm leading-6
        text-center md:text-start"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quasi enim quia distinctio illum officia.
      </p>
    </header>
  )
}
