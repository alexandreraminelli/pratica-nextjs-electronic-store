import FooterBanner from "@/app/ui/components/banners/FooterBanner"
import HomeBanners from "@/app/ui/pages/homepage/banners/HomeBanners"
import BrowseByCategory from "@/app/ui/sections/BrowseByCategory"

/**
 * Página inicial do site.
 * @author Alexandre Raminelli Junior
 */
export default function HomePage() {
  return (
    <main>
      {/* Banners */}
      <HomeBanners />

      {/* Browse by Category */}
      <BrowseByCategory />

      {/* Products */}

      {/* Banners Recommendation */}

      {/* Discount Products */}

      {/* Footer Banner */}
      <FooterBanner />
    </main>
  )
}
