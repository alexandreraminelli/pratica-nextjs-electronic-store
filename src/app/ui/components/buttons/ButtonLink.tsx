import Button, { ButtonProps } from "./Button"
import Link from "next/link"

/**
 * Props do `ButtonLink`.
 *
 * @author Alexandre Raminelli
 */
interface ButtonLinkProps extends ButtonProps {
  /** Endereço da página. */
  href: string
}
/**
 * Componente de botão de link que redireciona o usuário para uma página específica.
 *
 * @author Alexandre Raminelli
 */
export default function ButtonLink(
  { href, ...props }: ButtonLinkProps // props
) {
  return (
    <Link href={href}>
      <Button {...props} />
    </Link>
  )
}
