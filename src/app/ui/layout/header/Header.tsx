import HeaderTop from "./HeaderTop"
import Subnav from "./Subnav"

/**
 * Cabeçalho do site.
 *
 * @author Alexandre Raminelli Junior
 */
export default function Header() {
  return (
    <header className="sticky top-0">
      <HeaderTop />
      <Subnav />
    </header>
  )
}
