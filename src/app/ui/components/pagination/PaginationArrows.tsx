import { ChevronLeftIcon, ChevronRightIcon, LucideIcon } from "lucide-react"

/**
 * Setas de paginação.
 *
 * @author Alexandre Raminelli
 */
export default function PaginationArrows() {
  return (
    <div className="flex flex-row gap-4">
      {/* Anterior */}
      <PaginationArrowButton Icon={ChevronLeftIcon} />
      {/* Próximo */}
      <PaginationArrowButton Icon={ChevronRightIcon} />
    </div>
  )
}

/**
 * Props de `PaginationArrowButton`.
 *
 * @author Alexandre Raminelli
 */
interface PaginationArrowButtonProps {
  /** Ícone do botão. */
  Icon: LucideIcon
}
/**
 * Botão de seta de paginação.
 *
 * @author Alexandre Raminelli
 */
function PaginationArrowButton(
  { Icon }: PaginationArrowButtonProps // props
) {
  return (
    <button aria-label="button">
      <Icon strokeWidth={1.5} className="size-8" />
    </button>
  )
}
