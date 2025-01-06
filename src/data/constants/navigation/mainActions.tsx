import { NavLinkWithIcon } from "@/data/model/navigation/NavLink"
import { HeartIcon, ShoppingCart, UserIcon } from "lucide-react" // ícones

/**
 * Lista de links que redireciona o usuário pras principais páginas da loja.
 *
 * @author Alexandre Raminelli
 */
export const mainActions: NavLinkWithIcon[] = [
  { text: "Favorites", href: "/favorites", icon: HeartIcon },
  { text: "Cart", href: "/card", icon: ShoppingCart },
  { text: "Login", href: "/login", icon: UserIcon },
]
