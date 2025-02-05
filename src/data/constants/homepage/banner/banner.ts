import ProductBannerModel from "@/data/model/banners/ProductBannerModel"
import CTABannerModel from "@/data/model/banners/CTABannerModel"

// Caminhos das imagens
const bannerImgRoute = "/pages/home/banners"

/**
 * Conteúdo do banner principal.
 * Destaca um produto na tela inicial do site.
 *
 * @author Alexandre Raminelli
 */
export const mainBanner: ProductBannerModel = {
  product: "IPhone 14 Pro",
  description: "Created to change everything for the better. For everyone",
  slogan: "Pro.Beyond.",
  image: `${bannerImgRoute}/iphone.png`,
  imageDesktop: `${bannerImgRoute}/iphone-lg.png`,
  link: "/catalog", // link de teste
}

/**
 * Conteúdo dos demais banners de produtos da tela inicial.
 * Exibidos logo abaixo do banner de produto principal.
 *
 * @author Alexandre Raminelli
 */
export const otherBanners: ProductBannerModel[] = [
  {
    product: "Apple AirPods Max",
    description: "Computational audio. Listen, it's powerful",
    image: `${bannerImgRoute}/airpods.png`,
    imageMobSize: { w: 192, h: 200 },
    imageDesktop: `${bannerImgRoute}/airpods-clip.png`,
    imageDeskSize: { w: 104, h: 272 },
    link: "/headphones",
    style: 1,
  },
  {
    product: "Apple Vision Pro",
    description: "An immersive way to experience entertainment",
    image: `${bannerImgRoute}/visionpro.png`,
    imageMobSize: { w: 325, h: 192 },
    imageDesktop: `${bannerImgRoute}/visionpro-clip.png`,
    imageDeskSize: { w: 136, h: 190 },
    link: "/headphones",
    style: 2,
  },
  {
    product: "Playstation 5",
    description: "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
    image: `${bannerImgRoute}/ps5.png`,
    imageMobSize: { w: 200, h: 200 },
    imageDesktop: `${bannerImgRoute}/ps5-clip.png`,
    imageDeskSize: { w: 344, h: 328 },
    link: "/gaming",
    style: 3,
  },
  {
    product: "Macbook Air",
    description: "The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.",
    image: `${bannerImgRoute}/macbookair.png`,
    imageMobSize: { w: 331, h: 200 },
    imageDesktop: `${bannerImgRoute}/macbookair-clip.png`,
    imageDeskSize: { w: 292, h: 502 },
    link: "/catalog",
    button: true,
    style: 4,
  },
]

/**
 * Banner CTA de Big Summer Sale.
 *
 * @author Alexandre Raminelli
 */
export const bigSummerSaleBanner: CTABannerModel = {
  title: {
    normal: "Big Summer",
    bolder: "Sale",
  },
  subtitle: "Commodo fames vitae vitae leo mauris in. Eu consequat.",
  href: "/catalog",
}
