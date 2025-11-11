import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proximamente | Nodo360',
  description: 'Estamos trabajando en nuevas caracteristicas. Vuelve pronto.',
}

export default function ProximamentePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="text-8xl mb-8">🚧</div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Proximamente
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-400 mb-8">
          Estamos trabajando en esto. Volvera pronto con contenido de calidad.
        </p>

        {/* CTA Button */}
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  )
}
