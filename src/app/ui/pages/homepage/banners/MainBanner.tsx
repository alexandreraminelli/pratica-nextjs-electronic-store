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
      flex flex-col
      bg-raisinblack
      pd-container pt-22
      gap-12
      "
    >
      {/* Texto */}
      <div
        className="
        flex flex-col items-center
        text-center
        gap-4"
      >
        {/* Slogan */}
        <p className="text-white/40 font-semibold text-2xl">{slogan}</p>
        {/* Título */}
        <h3 className="text-white font-thin text-7xl">{product}</h3>
        {/* Descrição */}
        <p className="text-lg font-medium text-light-18">{description}</p>

        {/* Botão */}
        <ButtonLink href={link} text="Shop Now" state="white-stroke" />
      </div>
      {/* Imagem */}
      <Image
        src={image}
        alt="Imagem de um IPhone 14 Pro"
        // sizes:
        width={343}
        height={289}
        // styles:
        className="w-full h-full"
      />
    </section>
  )
}
