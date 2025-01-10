/**
 * Modelo de dados para banners de CTA.
 *
 * @author Alexandre Raminelli
 */
export default interface CTABannerModel {
  /** Título de CTA. */
  title: {
    /** Parte normal do título. */
    normal: string
    /** Parte em negrito do título. */
    bolder: string
  }
  /** Subtítulo do CTA. */
  subtitle: string

  /** `href` de redirecionamento do botão do CTA. */
  href: string
}
