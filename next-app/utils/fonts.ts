import {
  Poppins,
  Bebas_Neue,
  Playfair_Display,
  Vidaloka,
  Montserrat,
  Nunito,
  Inter
} from 'next/font/google'

const poppins_init = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const bebasNeue_init = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue'
})

const playfairDisplay_init = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-playfair-display'
})

const vidaloka_init = Vidaloka({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vidaloka'
})

const montserrat_init = Montserrat({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-montserrat'
})

const nunito_init = Nunito({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-nunito'
})

const inter_init = Inter({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-inter'
})

export const poppins = poppins_init.variable
export const bebasNeue = bebasNeue_init.variable
export const playfairDisplay = playfairDisplay_init.variable
export const vidaloka = vidaloka_init.variable
export const montserrat = montserrat_init.variable
export const nunito = nunito_init.variable
export const inter = inter_init.variable
