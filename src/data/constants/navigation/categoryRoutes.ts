import { NavLinkWithIcon } from "@/data/model/navigation/NavLink"
import { CameraIcon, Gamepad2Icon, HeadphonesIcon, LaptopIcon, SmartphoneIcon, WatchIcon } from "lucide-react" // ícones

/** Rota de pesquisa de categoria. */
const categoryRoute: string = "/catalog"

/**
 * Lista de rotas para pesquisa de categorias de produtos.
 *
 * @author Alexandre Raminelli
 */
export const categoryRoutes: NavLinkWithIcon[] = [
  { text: "Phones", href: `${categoryRoute}/smartphones`, Icon: SmartphoneIcon },
  { text: "Computers", href: `${categoryRoute}/computers`, Icon: LaptopIcon },
  { text: "Smart Watches", href: `${categoryRoute}/smartwatches`, Icon: WatchIcon },
  { text: "Cameras", href: `${categoryRoute}/cameras`, Icon: CameraIcon },
  { text: "Headphones", href: `${categoryRoute}/headphones`, Icon: HeadphonesIcon },
  { text: "Gaming", href: `${categoryRoute}/gaming`, Icon: Gamepad2Icon },
]
