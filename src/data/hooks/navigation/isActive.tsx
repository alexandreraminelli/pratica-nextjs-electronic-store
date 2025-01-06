"use client"

import { usePathname } from "next/navigation"

/**
 * Função que detecta se um link está ou não ativo.
 * Retorna `true` se o href do link for pro mesmo endereço da rota atual, caso contrário retorna `false`.
 *
 * @author Alexandre Raminelli
 */
export default function useIsActive(
  /** O endereço do link. */
  href: string
): boolean {
  /** Rota atual. */
  const pathname = usePathname()

  return href === pathname
}
