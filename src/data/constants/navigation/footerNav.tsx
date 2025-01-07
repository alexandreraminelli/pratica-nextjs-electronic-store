import ContextualMenu from "@/data/model/navigation/ContextualMenu"

/**
 * Links do footer navigation.
 *
 * @author Alexandre Raminelli
 */
export const footerNavigation: ContextualMenu[] = [
  // Serviços
  {
    mainLink: { text: "Services", href: "/services" },
    subLinks: [
      { text: "Bonus program", href: "/bonus-program" },
      { text: "Gift cards", href: "/gift-cards" },
      { text: "Credit and payment", href: "/credit-and-payment" },
      { text: "Service contracts", href: "/service-contracts" },
      { text: "Non-cash account", href: "/non-cash-account" },
      { text: "Payment", href: "/payment" },
    ],
  },
  // Assistência ao consumidor
  {
    mainLink: { text: "Assistance to the buyer", href: "assistance" },
    subLinks: [
      { text: "Find an order", href: "/find-an-order" },
      { text: "Terms of delivery", href: "/terms-of-delivery" },
      { text: "Exchange and return of goods", href: "/exchange-and-return" },
      { text: "Guarantee", href: "/guarantee" },
      { text: "Frequently asked questions (FAQ)", href: "/faq" },
      { text: "Terms of use of the site", href: "/terms-of-use" },
    ],
  },
]
