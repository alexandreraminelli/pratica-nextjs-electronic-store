import { mainBanner } from "@/data/constants/homepage/banner/banner" // dados do banner
import Image from "next/image"
import ButtonLink from "@/app/ui/components/buttons/ButtonLink"

const { product, slogan, description, image, link } = mainBanner

/**
 * Banner principal da página inicial.
 *
 * @author Alexandre Raminelli
 */
export default function MainBanner() {
  return (
    <section
      className="
      flex flex-col items-center md:flex-row
      bg-raisinblack
      pd-container pt-22 md:pt-0
      gap-12
      "
    >
      {/* Content */}
      <div className="flex flex-col items-center md:items-start gap-8">
        {/* Texto */}
        <div className="flex flex-col gap-4 text-center md:text-start">
          {/* Slogan */}
          <p className="text-white/40 font-semibold text-2xl">{slogan}</p>
          {/* Título */}
          <h3 className="text-white font-thin text-7xl lg:text-8xl">{product}</h3>
          {/* Descrição */}
          <p className="text-light-18 font-medium text-lg">{description}</p>
        </div>

        {/* Botão */}
        <ButtonLink href={link} text="Shop Now" state="white-stroke" />
      </div>
      <figure>
        {/* Imagem mobile */}
        <Image
          src={image}
          alt="Imagem de um IPhone 14 Pro"
          // sizes:
          width={321}
          height={289}
          // styles:
          className="w-full"
        />
      </figure>
    </section>
  )
}
