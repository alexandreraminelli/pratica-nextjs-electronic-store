import HeaderTop from "./HeaderTop"
import CategoryNavbar from "./navbar/CategoryNavbar"

/**
 * Cabeçalho do site.
 *
 * @author Alexandre Raminelli Junior
 */
export default function Header() {
  return (
    <header className="sticky top-0">
      <HeaderTop />
      <CategoryNavbar className="max-md:hidden" />
    </header>
  )
}
