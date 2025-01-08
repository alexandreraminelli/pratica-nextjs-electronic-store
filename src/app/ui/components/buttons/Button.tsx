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
  state?: "fill" | "white-stroke" | "black-stroke"
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
        "flex flex-row gap-2 items-center justify-center cursor-pointer hover:shadow-md transition-all",
        // Condicionais:
        {
          "text-base rounded-md py-4 px-14": size === "normal", // normal size
          "text-sm rounded-lg py-3 px-16": size === "small", // small size

          "bg-black text-white hover:bg-zinc-700": state === "fill", // fill
          border: state === "white-stroke" || state === "black-stroke", // stroke
          "border-white text-white hover:bg-zinc-500": state === "white-stroke", // white stroke
          "border-black text-black hover:bg-zinc-600 hover:text-white": state === "black-stroke", // black stroke
        }
      )}
    >
      {text} {/* Texto do botão */}
      {Icon && <Icon />} {/* Ícone do botão */}
    </button>
  )
}
