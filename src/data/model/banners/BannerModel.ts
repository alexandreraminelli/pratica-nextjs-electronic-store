/**
 * Modelo de conteúdo do banner.
 *
 * @author Alexandre Raminelli
 */
export default interface BannerModel {
  /** Produto exibido no banner. */
  product: string
  /** Breve descrição. */
  description: string
  /** Slogan do produto. */
  slogan?: string

  /** Imagem do produto. */
  image: string
  /** Imagem para desktop. (opcional) */
  imageDesktop?: string

  /** Link pra página do produto. */
  link: string
}
