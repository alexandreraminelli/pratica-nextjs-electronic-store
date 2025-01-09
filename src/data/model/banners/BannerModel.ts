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
  /** Tamanho da imagem mobile. */
  imageMobSize?: imgSize
  /** Imagem para desktop. (opcional) */
  imageDesktop?: string
  /** Tamanho da imagem mobile. */
  imageDeskSize?: imgSize

  /** Se deve exibir um botão de "Shop Now". */
  button?: boolean

  /** Link pra página do produto. */
  link: string
}

/** Objeto com tamanho das imagens */
interface imgSize {
  w: number
  h: number
}
