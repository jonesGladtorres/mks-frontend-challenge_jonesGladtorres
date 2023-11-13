import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['300','400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MKS Front end challenge',
  description: 'Este projeto é um teste técnico de jonesGladtorres para a MKS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
