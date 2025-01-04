import Link from "next/link"
import Logo from "./Logo"

/**
 * Logo com um link pra página inicial.
 * @author Alexandre Raminelli Junior
 */
export default function LogoLink() {
  return (
    <Link href={"/"}>
      <Logo />
    </Link>
  )
}
