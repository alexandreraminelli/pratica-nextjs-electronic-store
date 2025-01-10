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
    <aside>
      <div>
        {/* Título */}
        <h2>
          {title.normal} <strong>{title.bolder}</strong>
        </h2>

        {/* Subtítulo */}
        <p>{subtitle}</p>
      </div>

      {/* Botão */}
      <ButtonLink href={href} text="Shop Now" state="white-stroke" />
    </aside>
  )
}
