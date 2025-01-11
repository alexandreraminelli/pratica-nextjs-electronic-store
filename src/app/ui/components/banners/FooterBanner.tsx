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
    <aside className="flex flex-col items-center text-center py-26 gap-10 pd-container">
      <div className="flex flex-col gap-3">
        {/* Título */}
        <h2 className="font-thin text-5xl leading-11">
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
