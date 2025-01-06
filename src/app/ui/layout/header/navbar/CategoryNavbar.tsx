/**
 * Props do componente `CategoryNavbar`.
 *
 * @author Alexandre Raminelli
 */
interface CategoryNavbarProps {
  /** Classes personalizadas. (opcional) */
  className?: string
}

/**
 * Navbar de categorias.
 * Possui os links de navegação para as principais categoria de produtos da loja.
 *
 * @author Alexandre Raminelli
 */
export default function CategoryNavbar({ className }: CategoryNavbarProps) {
  return (
    <nav
      className={`
      bg-dark-03
      text-white
      ${className}
    `}
    >
      <p>Category Navbar</p>
    </nav>
  )
}
