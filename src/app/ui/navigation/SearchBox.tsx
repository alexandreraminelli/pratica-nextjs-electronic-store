import { SearchIcon } from "lucide-react" // ícone de lupa

/**
 * Interface dos props do componente `SearchBox`.
 * @author Alexandre Raminelli
 */
interface SearchBoxProps {
  /** ID do input para vinculação com o label. */
  inputId: string
  /** Texto do placeholder. (opcional) */
  placeholder?: string
  /** Classes CSS personalizadas. (opcional) */
  className?: string
}

/**
 * Caixa de pesquisa.
 * @author Alexandre Raminelli
 */
export default function SearchBox({ inputId, placeholder = "Search", className }: SearchBoxProps) {
  return (
    <div
      role="searchbox"
      // styles:
      className={`
        flex flex-row gap-2
        bg-color-22 rounded-lg
        *:py-4
        cursor-text
        ${className}
        `}
    >
      {/* Label para SEO e screen readers */}
      <label htmlFor={inputId} className="ps-4">
        <span className="sr-only">Search in store</span>
        {/* Ícone */}
        <SearchIcon className="text-light-14" aria-hidden="true" />
      </label>
      {/* Input */}
      <input
        type="text"
        id={inputId}
        placeholder={placeholder}
        // Estilos:
        className="
        bg-transparent text-foreground 
        placeholder:opacity-50 placeholder:text-light-17 placeholder:text-sm
        text-base font-medium
        outline-none
        pe-4
        "
      />
    </div>
  )
}
