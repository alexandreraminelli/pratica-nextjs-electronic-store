import ButtonLink from "@/app/ui/components/buttons/ButtonLink"
import { otherBanners } from "@/data/constants/homepage/banner/banner" // dados dos banners
import BannerModel from "@/data/model/banners/BannerModel"
import Image from "next/image"

/**
 * Grupo de banners da tela inicial.
 *
 * @author Alexandre Raminelli
 */
export default function BannerGroup() {
  return (
    <div>
      {otherBanners.map((banner, index) => (
        <Banner key={index} banner={banner} />
      ))}
    </div>
  )
}

/**
 * Props do componente `Banner`.
 *
 * @author Alexandre Raminelli
 */
interface BannerProps {
  /** Objeto com as informações do banner. */
  banner: BannerModel
}

/**
 * Banner da tela inicial.
 *
 * @author Alexandre Raminelli
 */
function Banner(
  { banner }: BannerProps // props
) {
  const { product, description, button, link, image, imageMobSize = { w: 200, h: 200 }, imageDesktop, imageDeskSize = { w: 200, h: 200 } } = banner
  /** Texto alternativo da imagem. */
  const altTextImg: string = `Photo of a ${product}.`

  return (
    <section>
      {/* Content */}
      <div>
        {/* Texto */}
        <h3>{product}</h3>
        <p>{description}</p>

        {/* Botão */}
        {button && <ButtonLink text="Shop Now" href={link} state="black-stroke" />}
      </div>

      {/* Imagem */}
      <figure>
        {/* Img mobile */}
        <Image
          src={image}
          alt={altTextImg}
          // size
          width={imageMobSize.w}
          height={imageMobSize.h}
        />
        {/* Img desktop */}
        {imageDesktop && (
          <Image
            src={imageDesktop}
            alt={altTextImg}
            // size
            width={imageDeskSize.w}
            height={imageDeskSize.h}
          />
        )}
      </figure>
    </section>
  )
}
