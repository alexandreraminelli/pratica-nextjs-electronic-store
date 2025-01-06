import { NavLinkWithIcon } from "@/data/model/navigation/NavLink"
import { CameraIcon, Gamepad2Icon, HeadphonesIcon, LaptopIcon, SmartphoneIcon, WatchIcon } from "lucide-react" // ícones

/**
 * Links do navbar de categorias.
 *
 * @author Alexandre Raminelli
 */
export const categoryNavbar: NavLinkWithIcon[] = [
  { text: "Phones", href: "/smartphones", Icon: SmartphoneIcon },
  { text: "Computers", href: "/computers", Icon: LaptopIcon },
  { text: "Smart Watches", href: "/smartwatches", Icon: WatchIcon },
  { text: "Cameras", href: "/cameras", Icon: CameraIcon },
  { text: "Headphones", href: "/headphones", Icon: HeadphonesIcon },
  { text: "Gaming", href: "/gaming", Icon: Gamepad2Icon },
]
