import LogoLink from "@/app/ui/logo/LogoLink"
import SearchBox from "@/app/ui/navigation/SearchBox"
import { MenuIcon } from "lucide-react" // ícones
import UtilityNavbar from "./navbar/UtilityNavbar"
import MainNavbar from "./navbar/MainNavbar"

/**
 * Componente superior do cabeçalho.
 * Possui a logo, barra de pesquisa, menu de navegação principal e atalhos de funções da loja.
 *
 * @author Alexandre Raminelli
 */
export default function HeaderTop() {
  return (
    <div
      // Estilos:
      className="
        py-6 pd-container
        flex flex-row items-center justify-between
        bg-background
        md:gap-8
      "
    >
      <LogoLink />

      {/* Desktop */}
      <SearchBox className="max-sm:hidden" inputId="headerSearchBox" />
      <MainNavbar className="max-lg:hidden" />
      <UtilityNavbar />

      {/* Mobile */}
      <MenuIcon width={40} height={40} className="lg:hidden" />
    </div>
  )
}
