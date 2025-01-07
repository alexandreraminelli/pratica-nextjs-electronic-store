import LogoLink from "@/app/ui/logo/LogoLink"

/**
 * Rodapé do site.
 *
 * @author Alexandre Raminelli
 */
export default function Footer() {
  return (
    <footer
      className="
      flex flex-col items-center
      gap-8 md:gap-6
      bg-dark-27 lg:bg-black
      text-light-9
      py-12 pd-container
      "
    >
      <div
        className="
        flex flex-col items-center md:flex-row md:justify-between
        gap-8
        w-full
        "
      >
        {/* Logo */}
        <FooterLogo />
        {/* Footer Nav */}
        <nav>Footer Navigation</nav>
      </div>

      {/* Social Networks */}
      <div>Social Networks</div>
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
    <header>
      {/* Logo */}
      <LogoLink className="max-w-24 text-white" />
    </header>
  )
}
