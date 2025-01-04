import LogoLink from "@/app/ui/logo/LogoLink"
import { MenuIcon } from "lucide-react"

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
      "
    >
      <LogoLink />

      {/* Mobile */}
      <MenuIcon width={40} height={40} />
    </div>
  )
}
