import NavLink from "./NavLink"

/**
 * Modelo de dados para menus contextuais, representando um link principal e links relacionados.
 *
 * @author Alexandre Raminelli
 */
export default interface ContextualMenu {
  /**
   * Link principal do menu contextual.
   * Representa o tópico ou seção principal do menu.
   */
  mainLink: NavLink
  /**
   * Lista de links relacionados ao link principal.
   * Estes links fornecem acesso à tópicos ou recursos adicionais relacionados ao link principal.
   */
  subLinks: NavLink[]
}
