/**
 * Função que converte um preço em centavos para um preço no formato monetário.
 *
 * @param priceInCents Preço em centavos que será convertido no formato monetário.
 * @param [locale="en-US"] Formatação do número baseada no local. Por padrão, a formatação usa o padrão inglês.
 * @param [currency="USD"] Formato da moeda. Por padrão, é o valor `"USD"` (dólar americano, `$).
 *
 * @returns String com o preço no formato monetário.
 *
 * @author Alexandre Raminelli
 */
export default function priceToCurrency(
  /** Preço em centavos. */
  priceInCents: number,
  /** Formatação do número baseada no local. Por padrão, a formatação usa o padrão inglês. */
  locale: string = "en-US",
  /** Formato da moeda. Por padrão, é o valor `"USD"` (dólar americano, `$). */
  currency: string = "USD"
): string {
  /** Preço em float. */
  const price = priceInCents / 100

  // Formatar o preço e retornar string
  return Intl.NumberFormat(locale, { style: "currency", currency: currency }).format(price)
}
