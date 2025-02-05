import ButtonLink from "@/app/ui/components/buttons/ButtonLink"
import { bigSummerSaleBanner } from "@/data/constants/homepage/banner/banner" // dados do banner

// desestruturação
const { title, subtitle, href } = bigSummerSaleBanner

/**
 * Banner da tela inicial exibido acima do footer.
 *
 * @author Alexandre Raminelli
 */
export default function FooterBanner() {
  return (
    <aside
      className="flex flex-col justify-center items-center text-center py-26 gap-10 px-container
      max-md:bg-bigSummerSale-mobile md:bg-bigSummerSale-desktop
      bg-no-repeat bg-cover bg-center 
      max-md:aspect-[375/512] md:aspect[45/14]"
    >
      <div className="flex flex-col gap-3">
        {/* Título */}
        <h2 className="text-white font-thin text-5xl leading-11 md:text-7xl">
          {title.normal} <strong className="font-medium">{title.bolder}</strong>
        </h2>

        {/* Subtítulo */}
        <p className="font-normal text-base text-light-48">{subtitle}</p>
      </div>

      {/* Botão */}
      <ButtonLink href={href} text="Shop Now" state="white-stroke" />
    </aside>
  )
}
