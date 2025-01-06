import { NavLinkWithIcon } from "@/data/model/navigation/NavLink"
import { CameraIcon, Gamepad2Icon, HeadphonesIcon, LaptopIcon, SmartphoneIcon, WatchIcon } from "lucide-react" // ícones

/**
 * Links do navbar de categorias.
 *
 * @author Alexandre Raminelli
 */
export const categoryNavbar: NavLinkWithIcon[] = [
  { text: "Phones", href: "/smartphones", icon: SmartphoneIcon },
  { text: "Computers", href: "/computers", icon: LaptopIcon },
  { text: "Smart Watches", href: "/smartwatches", icon: WatchIcon },
  { text: "Cameras", href: "/cameras", icon: CameraIcon },
  { text: "Headphones", href: "/headphones", icon: HeadphonesIcon },
  { text: "Gaming", href: "/gaming", icon: Gamepad2Icon },
]
