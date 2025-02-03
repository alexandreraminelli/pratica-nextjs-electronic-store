import Link from "next/link"
import Logo from "./Logo"

/**
 * Props do componente `LogoLink`.
 */
interface LogoLinkProps {
  /** Classes personalizadas. (opcional) */
  className?: string
  /** Tamanho do logo em px (width, height). (opcional) */
  size?: { w: number; h: number }
}

/**
 * Logo com um link pra página inicial.
 * @author Alexandre Raminelli Junior
 */
export default function LogoLink(
  { className, size = { w: 96, h: 32 } }: LogoLinkProps // props
) {
  return (
    <Link href={"/"} className={`hover:opacity-75 transition-opacity ${className}`}>
      <Logo width={size.w} height={size.h} />
    </Link>
  )
}
