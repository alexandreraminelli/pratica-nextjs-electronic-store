import ButtonLink from "@/app/ui/components/buttons/ButtonLink"
import { otherBanners } from "@/data/constants/homepage/banner/banner" // dados dos banners
import BannerModel from "@/data/model/banners/BannerModel"
import clsx from "clsx"
import Image from "next/image"

/**
 * Grupo de banners da tela inicial.
 *
 * @author Alexandre Raminelli
 */
export default function BannerGroup() {
  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
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
  const { product, description, button, link, image, imageMobSize = { w: 200, h: 200 }, imageDesktop, imageDeskSize = { w: 344, h: 344 }, style } = banner
  /** Texto alternativo da imagem. */
  const altTextImg: string = `Photo of a ${product}.`

  return (
    <section
      className={clsx(
        "flex flex-col-reverse items-center max-md-pd-container gap-6 max-lg:py-10 text-center lg:justify-between", // estilos gerais
        {
          "bg-color-36 lg:col-span-1 lg:row-span-1 lg:col-start-1 lg:row-start-2 lg:col-end-2 lg:row-end-3": style === 1, // 1
          "bg-dark-43 lg:col-spa1 lg:row-span-1 lg:col-start-2 lg:row-start-2 lg:col-end-3 lg:row-end-3": style === 2, // 2
          "bg-background lg:col-span-2 lg:row-span-1 lg:col-start-1 lg:row-start-1 lg:col-end-3 lg:row-end-2": style === 3, // 3
          "bg-color-36 lg:flex-row lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-1 lg:col-end-5 lg:row-end-3 lg:ps-14": style === 4, // 4

          "lg:flex-row-reverse lg:pe-12": style !== 4, // exceto 4
        }
      )}
    >
      {/* Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-start gap-4 lg:py-2">
        {/* Texto */}
        {/* Título */}
        <h3
          className={clsx("font-light text-4xl", {
            "lg:text-3xl": style === 1 || style === 2,
            "text-white": style === 2,
            "text-foreground": style !== 2,
            "lg:text-5xl": style === 3,
            "lg:text-6xl": style === 4,
          })}
        >
          {product}
        </h3>
        {/* Descrição */}
        <p className="font-medium text-base lg:text-sm text-color-18">{description}</p>

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
            className="max-lg:hidden h-full"
          />
        )}
      </figure>
    </section>
  )
}
