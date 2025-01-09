import BannerModel from "@/data/model/banners/BannerModel"

// Caminhos das imagens
const bannerImgRoute = "/pages/home/banners/"

/**
 * Conteúdo do banner principal.
 *
 * @author Alexandre Raminelli
 */
export const mainBanner: BannerModel = {
  product: "IPhone 14 Pro",
  description: "Created to change everything for the better. For everyone",
  slogan: "Pro.Beyond.",
  image: `${bannerImgRoute}iphone.png`,
  imageDesktop: `${bannerImgRoute}iphone-lg.png`,
  link: "/smartphones", // link de teste
}
