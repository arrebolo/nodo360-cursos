import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Todos los Cursos | Nodo360',
  description: 'Aprende Bitcoin, Blockchain, DeFi y Web3 desde cero. Cursos gratuitos y premium con contenido actualizado y proyectos prácticos.',
  keywords: 'cursos bitcoin, cursos blockchain, cursos defi, cursos web3, aprender bitcoin, educación cripto',
}

// Datos de los cursos
const cursos = [
  // CURSOS GRATUITOS
  {
    id: 'bitcoin-desde-cero',
    titulo: 'Introducción a Bitcoin',
    descripcion: 'Descubre qué es Bitcoin, cómo funciona y por qué está revolucionando el dinero',
    nivel: 'Principiante',
    duracion: '6 horas',
    modulos: 8,
    estudiantes: 2450,
    tipo: 'gratuito',
    icono: '📄',
    color: 'from-orange-500 to-red-600',
    href: '/cursos/bitcoin-desde-cero',
    tags: ['Bitcoin', 'Fundamentos', 'Dinero'],
  },
  {
    id: 'fundamentos-blockchain',
    titulo: 'Fundamentos de Blockchain',
    descripcion: 'Entiende la tecnología que impulsa Bitcoin y las criptomonedas del futuro',
    nivel: 'Principiante',
    duracion: '7 horas',
    modulos: 10,
    estudiantes: 1890,
    tipo: 'gratuito',
    icono: '📊',
    color: 'from-blue-500 to-purple-600',
    href: '/cursos/fundamentos-blockchain',
    tags: ['Blockchain', 'Tecnología', 'Criptomonedas'],
  },
  {
    id: 'primera-wallet',
    titulo: 'Tu Primera Wallet',
    descripcion: 'Aprende a crear, usar y proteger tu wallet de Bitcoin de forma segura',
    nivel: 'Principiante',
    duracion: '4 horas',
    modulos: 6,
    estudiantes: 3120,
    tipo: 'gratuito',
    icono: '✅',
    color: 'from-green-500 to-emerald-600',
    href: '/cursos/primera-wallet',
    tags: ['Wallet', 'Seguridad', 'Práctica'],
  },
  // CURSOS PREMIUM
  {
    id: 'lightning-network',
    titulo: 'Lightning Network',
    descripcion: 'Domina la segunda capa de Bitcoin para pagos instantáneos y microtransacciones',
    nivel: 'Intermedio',
    duracion: '10 horas',
    modulos: 12,
    estudiantes: 858,
    tipo: 'premium',
    icono: '⚡',
    color: 'from-yellow-500 to-orange-600',
    href: '/cursos/lightning-network',
    tags: ['Lightning', 'Pagos', 'Avanzado'],
  },
  {
    id: 'smart-contracts-solidity',
    titulo: 'Smart Contracts con Solidity',
    descripcion: 'Desarrolla contratos inteligentes en Ethereum desde cero hasta producción',
    nivel: 'Intermedio',
    duracion: '14 horas',
    modulos: 15,
    estudiantes: 1234,
    tipo: 'premium',
    icono: '📝',
    color: 'from-indigo-500 to-blue-600',
    href: '/cursos/smart-contracts-solidity',
    tags: ['Solidity', 'Ethereum', 'Desarrollo'],
  },
  {
    id: 'defi-finanzas-descentralizadas',
    titulo: 'DeFi: Finanzas Descentralizadas',
    descripcion: 'Explora el ecosistema DeFi: DEXs, lending, staking y yield farming',
    nivel: 'Intermedio',
    duracion: '9 horas',
    modulos: 11,
    estudiantes: 967,
    tipo: 'premium',
    icono: '💰',
    color: 'from-pink-500 to-rose-600',
    href: '/cursos/defi-finanzas-descentralizadas',
    tags: ['DeFi', 'Finanzas', 'Trading'],
  },
]

export default function CursosPage() {
  const cursosGratuitos = cursos.filter(c => c.tipo === 'gratuito')
  const cursosPremium = cursos.filter(c => c.tipo === 'premium')

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-900/30 to-red-900/30 border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
              <span className="text-orange-400 text-sm font-semibold">NODO360</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Todos los <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Cursos</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Aprende Bitcoin, Blockchain, DeFi y Web3 desde cero hasta nivel avanzado. 
              Contenido actualizado, proyectos prácticos y certificados.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
              <div className="bg-black/40 border border-orange-500/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-orange-400">{cursos.length}</div>
                <div className="text-sm text-gray-400">Cursos</div>
              </div>
              <div className="bg-black/40 border border-orange-500/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-orange-400">5,000+</div>
                <div className="text-sm text-gray-400">Estudiantes</div>
              </div>
              <div className="bg-black/40 border border-orange-500/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-orange-400">50+</div>
                <div className="text-sm text-gray-400">Horas</div>
              </div>
              <div className="bg-black/40 border border-orange-500/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-orange-400">100%</div>
                <div className="text-sm text-gray-400">Práctico</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cursos Gratuitos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
            <span className="text-green-400 text-sm font-semibold">GRATUITO</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cursos Gratuitos
          </h2>
          <p className="text-gray-400">
            Comienza tu viaje en Bitcoin y blockchain sin costo alguno
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cursosGratuitos.map((curso) => (
            <Link 
              key={curso.id} 
              href={curso.href}
              className="group block"
            >
              <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 h-full">
                {/* Badge Gratuito */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{curso.icono}</div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
                    GRATUITO
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {curso.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {curso.descripcion}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {curso.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-700">
                  <div>
                    <div className="text-orange-400 text-sm font-bold">{curso.modulos}</div>
                    <div className="text-gray-500 text-xs">módulos</div>
                  </div>
                  <div>
                    <div className="text-orange-400 text-sm font-bold">{curso.duracion}</div>
                    <div className="text-gray-500 text-xs">duración</div>
                  </div>
                  <div>
                    <div className="text-orange-400 text-sm font-bold">{curso.estudiantes.toLocaleString()}</div>
                    <div className="text-gray-500 text-xs">estudiantes</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-4 flex items-center text-orange-400 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  Empezar ahora
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Cursos Premium */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
            <span className="text-purple-400 text-sm font-semibold">PREMIUM</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cursos Premium
          </h2>
          <p className="text-gray-400">
            Lleva tus habilidades al siguiente nivel con contenido avanzado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cursosPremium.map((curso) => (
            <Link 
              key={curso.id} 
              href={curso.href}
              className="group block"
            >
              <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 h-full">
                {/* Badge Premium */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{curso.icono}</div>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded-full border border-purple-500/30">
                    PREMIUM
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {curso.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {curso.descripcion}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {curso.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-700">
                  <div>
                    <div className="text-purple-400 text-sm font-bold">{curso.modulos}</div>
                    <div className="text-gray-500 text-xs">módulos</div>
                  </div>
                  <div>
                    <div className="text-purple-400 text-sm font-bold">{curso.duracion}</div>
                    <div className="text-gray-500 text-xs">duración</div>
                  </div>
                  <div>
                    <div className="text-purple-400 text-sm font-bold">{curso.estudiantes.toLocaleString()}</div>
                    <div className="text-gray-500 text-xs">estudiantes</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-4 flex items-center text-purple-400 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  Ver curso
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para dominar Bitcoin y Web3?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a más de 5,000 estudiantes que ya están construyendo su futuro en la economía descentralizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/cursos/bitcoin-desde-cero/leccion/1-1"
              className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-colors"
            >
              Empezar Ahora Gratis
            </Link>
            <Link 
              href="/comunidad"
              className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-colors"
            >
              Unirse a la Comunidad
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
