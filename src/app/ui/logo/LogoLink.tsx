import Link from "next/link"
import Logo from "./Logo"

/** Logo com um link pra página inicial. */
export default function LogoLink() {
  return (
    <Link href={"/"}>
      <Logo />
    </Link>
  )
}
