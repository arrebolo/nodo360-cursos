import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://nodo360-cursos.vercel.app'),
  title: 'Nodo360 | Cursos Bitcoin',
  description: 'Educación Bitcoin de calidad en español',
  keywords: 'bitcoin, cursos bitcoin, educación bitcoin, blockchain, criptomonedas, wallet bitcoin',
  openGraph: {
    title: 'Nodo360 | Cursos Bitcoin',
    description: 'Educación Bitcoin de calidad en español',
    url: 'https://nodo360-cursos.vercel.app',
    siteName: 'Nodo360 Cursos',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nodo360 | Cursos Bitcoin',
    description: 'Educación Bitcoin de calidad en español',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  )
}
