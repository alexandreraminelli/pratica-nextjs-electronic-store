import { SearchIcon } from "lucide-react" // ícone de lupa

/**
 * Interface dos props do componente `SearchBox`.
 * @author Alexandre Raminelli
 */
interface SearchBoxProps {
  /** Texto do placeholder. (opcional) */
  placeholder?: string
  /** Classes CSS personalizadas. (opcional) */
  className?: string
}

/**
 * Caixa de pesquisa.
 * @author Alexandre Raminelli
 */
export default function SearchBox({ placeholder = "Search", className }: SearchBoxProps) {
  return (
    <div
      role="searchbox"
      // styles:
      className={`
        flex flex-row
        bg-color-22 rounded-lg
        p-4 gap-2
        ${className}
        `}
    >
      {/* Label para SEO e screen readers */}
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      {/* Ícone */}
      <SearchIcon className="text-color-14" />
      {/* Input */}
      <input
        type="text"
        placeholder={placeholder}
        // Estilos:
        className="
        bg-transparent text-color-17
        text-sm font-medium
        focus-within:
        "
      />
    </div>
  )
}
