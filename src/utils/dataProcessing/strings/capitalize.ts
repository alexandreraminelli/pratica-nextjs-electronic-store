/**
 * Função que capitaliza as letras de uma string.
 * Transforma apenas a primeira letra em um
 *
 * @param string A string a ser capitalizada.
 * @returns A string capitalizada.
 *
 * @author Alexandre Raminelli
 */
export default function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
