import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nodo360 | Cursos Bitcoin',
  description: 'Educación Bitcoin de calidad en español',
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
