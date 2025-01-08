import clsx from "clsx"
import { LucideIcon } from "lucide-react"

/**
 * Props do componente `Button`.
 *
 * @author Alexandre Raminelli
 */
interface ButtonProps {
  /** Texto do botão. */
  text: string
  /** Ícone exibido no botão. (opcional) */
  Icon?: LucideIcon

  /** Estilo do botão. */
  state?: "fill" | "white stroke" | "black stroke"
  /** Tamanho do botão. */
  size?: "normal" | "small"
}

/**
 * Componente do botão.
 *
 * @author Alexandre Raminelli
 */
export default function Button(
  {
    text,
    Icon,
    // style:
    state = "fill",
    size = "normal",
  }: ButtonProps // props
) {
  return (
    <button
      className={clsx(
        // Estilos gerais:
        "flex flex-row",
        // Condicionais:
        {
          "text-base rounded-md py-4 px-14": size === "normal", // normal size
          "text-sm rounded-lg py-3 px-16": size === "small", // small size

          "bg-black text-white": state === "fill", // fill
        }
      )}
    >
      {text} {/* Texto do botão */}
      {Icon && <Icon />} {/* Ícone do botão */}
    </button>
  )
}
