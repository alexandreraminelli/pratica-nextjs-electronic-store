import ButtonLink from "@/app/ui/components/buttons/ButtonLink"
import { otherBanners } from "@/data/constants/homepage/banner/banner" // dados dos banners
import BannerModel from "@/data/model/banners/BannerModel"
import Image from "next/image"
import clsx from "clsx"

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
  const { product, description, button, link, image, imageMobSize = { w: 200, h: 200 }, imageDesktop, imageDeskSize = { w: 200, h: 200 }, style } = banner
  /** Texto alternativo da imagem. */
  const altTextImg: string = `Photo of a ${product}.`

  return (
    <section
      className={clsx(
        "flex flex-col-reverse items-center pd-container gap-6 py-10 text-center", // estilos gerais
        {
          "bg-color-36": style === 1 || style === 4, // 1º e 4º banner
          "bg-dark-43": style === 2, // 2º banner
          "bg-background": style === 3, // 3º banner
        }
      )}
    >
      {/* Content */}
      <div className="flex flex-col items-center gap-4">
        {/* Texto */}
        {/* Título */}
        <h3
          className={clsx("font-light text-4xl", {
            "text-white": style === 2,
            "text-foreground": style !== 2,
          })}
        >
          {product}
        </h3>
        {/* Descrição */}
        <p className="font-medium text-base text-color-18">{description}</p>

        {/* Botão */}
        {button && <ButtonLink text="Shop Now" href={link} state="stroke" />}
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
          // styles:
          className={imageDesktop && "lg:hidden"}
        />
        {/* Img desktop */}
        {imageDesktop && (
          <Image
            src={imageDesktop}
            alt={altTextImg}
            // size
            width={imageDeskSize.w}
            height={imageDeskSize.h}
            // styles
            className="max-lg:hidden"
          />
        )}
      </figure>
    </section>
  )
}
