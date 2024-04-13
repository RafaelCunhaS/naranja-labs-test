import type { Metadata } from 'next'
import './globals.css'
import {
  bebasNeue,
  inter,
  montserrat,
  nunito,
  playfairDisplay,
  poppins,
  vidaloka
} from '@/utils/fonts'
import Topbar from '@/components/shared/Topbar'

export const metadata: Metadata = {
  title: 'Naranja Labs Fullstack',
  description: 'Naranja Labs Fullstack test'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins} ${bebasNeue}
        ${playfairDisplay} ${vidaloka}
        ${montserrat} ${nunito} ${inter}
        mx-40 bg-primary text-black-1 text-lg poppins`}
      >
        <Topbar />
        {children}
      </body>
    </html>
  )
}
