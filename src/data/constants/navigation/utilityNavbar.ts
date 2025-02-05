import { NavLinkWithIcon } from "@/data/model/navigation/NavLink"
import { HeartIcon, ShoppingCart, UserIcon } from "lucide-react" // ícones

/**
 * Lista de links que redireciona o usuário pras principais páginas da loja.
 *
 * @author Alexandre Raminelli
 */
export const utilityNavbar: NavLinkWithIcon[] = [
  { text: "Favorites", href: "/favorites", Icon: HeartIcon },
  { text: "Cart", href: "/cart", Icon: ShoppingCart },
  { text: "Login", href: "/login", Icon: UserIcon },
]
