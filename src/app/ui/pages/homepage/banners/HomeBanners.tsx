import MainBanner from "./MainBanner"
import BannerGroup from "./BannerGroup"

/**
 * Banners da página inicial.
 *
 * @author Alexandre Raminelli
 */
export default function HomeBanners() {
  return (
    <section>
      {/* Banner principal */}
      <MainBanner />
      {/* Outros banners */}
      <BannerGroup />
    </section>
  )
}
