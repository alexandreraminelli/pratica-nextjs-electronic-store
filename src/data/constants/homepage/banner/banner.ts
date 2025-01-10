import BannerModel from "@/data/model/banners/BannerModel"

// Caminhos das imagens
const bannerImgRoute = "/pages/home/banners"

/**
 * Conteúdo do banner principal.
 *
 * @author Alexandre Raminelli
 */
export const mainBanner: BannerModel = {
  product: "IPhone 14 Pro",
  description: "Created to change everything for the better. For everyone",
  slogan: "Pro.Beyond.",
  image: `${bannerImgRoute}/iphone.png`,
  imageDesktop: `${bannerImgRoute}/iphone-lg.png`,
  link: "/smartphones", // link de teste
}

/**
 * Conteúdo dos demais banners da tela inicial.
 *
 * @author Alexandre Raminelli
 */
export const otherBanners: BannerModel[] = [
  {
    product: "Apple AirPods Max",
    description: "Computational audio. Listen, it's powerful",
    image: `${bannerImgRoute}/airpods.png`,
    imageMobSize: { w: 192, h: 200 },
    imageDesktop: `${bannerImgRoute}/airpods-clip.png`,
    link: "/headphones",
    style: 1,
  },
  {
    product: "Apple Vision Pro",
    description: "An immersive way to experience entertainment",
    image: `${bannerImgRoute}/visionpro.png`,
    imageMobSize: { w: 325, h: 192 },
    imageDesktop: `${bannerImgRoute}/visionpro-clip.png`,
    link: "/headphones",
    style: 2,
  },
  {
    product: "Playstation 5",
    description: "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
    image: `${bannerImgRoute}/ps5.png`,
    imageMobSize: { w: 200, h: 200 },
    imageDesktop: `${bannerImgRoute}/ps5-clip.png`,
    link: "/gaming",
    style: 3,
  },
  {
    product: "Macbook Air",
    description: "The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.",
    image: `${bannerImgRoute}/macbookair.png`,
    imageMobSize: { w: 331, h: 200 },
    imageDesktop: `${bannerImgRoute}/macbookair-clip.png`,
    link: "/computers",
    button: true,
    style: 4,
  },
]
