import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fundamentos de Blockchain - Curso Gratuito | Nodo360',
  description: 'Entiende la tecnología que impulsa Bitcoin y las criptomonedas del futuro. Curso gratuito con 10 módulos prácticos y certificado.',
  keywords: 'curso blockchain, aprender blockchain, blockchain gratis, tecnología blockchain, curso criptomonedas',
}

// Datos del curso
const curso = {
  titulo: 'Fundamentos de Blockchain',
  subtitulo: 'La Tecnología del Futuro',
  descripcion: 'Entiende la tecnología que impulsa Bitcoin y las criptomonedas del futuro. Aprende cómo funciona blockchain, sus casos de uso y aplicaciones prácticas.',
  nivel: 'Principiante',
  duracion: '7 horas',
  modulos: 10,
  lecciones: 28,
  estudiantes: 1890,
  calificacion: 4.7,
  idioma: 'Español',
  tipo: 'gratuito',
  actualizacion: 'Noviembre 2025',
}

const modulos = [
  {
    numero: 1,
    titulo: 'Introducción a Blockchain',
    lecciones: [
      { numero: '1.1', titulo: '¿Qué es Blockchain?', duracion: '14 min', tipo: 'video' },
      { numero: '1.2', titulo: 'Historia y Evolución', duracion: '12 min', tipo: 'video' },
      { numero: '1.3', titulo: 'Por qué es Revolucionario', duracion: '10 min', tipo: 'lectura' },
    ]
  },
  {
    numero: 2,
    titulo: 'Cómo Funciona',
    lecciones: [
      { numero: '2.1', titulo: 'Bloques y Cadenas', duracion: '18 min', tipo: 'video' },
      { numero: '2.2', titulo: 'Hash y Criptografía', duracion: '22 min', tipo: 'video' },
      { numero: '2.3', titulo: 'Nodos y Red P2P', duracion: '16 min', tipo: 'interactivo' },
    ]
  },
  {
    numero: 3,
    titulo: 'Consenso y Validación',
    lecciones: [
      { numero: '3.1', titulo: 'Proof of Work', duracion: '20 min', tipo: 'video' },
      { numero: '3.2', titulo: 'Proof of Stake', duracion: '18 min', tipo: 'video' },
      { numero: '3.3', titulo: 'Otros Mecanismos', duracion: '15 min', tipo: 'lectura' },
    ]
  },
  {
    numero: 4,
    titulo: 'Smart Contracts',
    lecciones: [
      { numero: '4.1', titulo: 'Introducción a Smart Contracts', duracion: '16 min', tipo: 'video' },
      { numero: '4.2', titulo: 'Ethereum y la EVM', duracion: '20 min', tipo: 'video' },
      { numero: '4.3', titulo: 'Casos de Uso', duracion: '14 min', tipo: 'interactivo' },
    ]
  },
]

const recursos = [
  { 
    icono: '📘', 
    titulo: 'Guía Blockchain', 
    descripcion: 'Conceptos fundamentales explicados visualmente',
    pdf: '/pdfs/guia-blockchain.pdf'
  },
  { 
    icono: '🔗', 
    titulo: 'Casos de Uso', 
    descripcion: 'Aplicaciones reales de blockchain en distintas industrias',
    pdf: '/pdfs/casos-uso-blockchain.pdf'
  },
  { 
    icono: '⚙️', 
    titulo: 'Glosario Técnico', 
    descripcion: 'Términos y conceptos clave de la tecnología blockchain',
    pdf: '/pdfs/glosario-blockchain.pdf'
  },
]

const instructor = {
  nombre: 'Equipo Nodo360',
  descripcion: 'Expertos en Bitcoin y blockchain con más de 5 años educando en español',
  estudiantes: '5,000+',
  cursos: '6',
}

export default function FundamentosBlockchainPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-b border-blue-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Info */}
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link href="/cursos" className="hover:text-blue-400 transition-colors">
                  Cursos
                </Link>
                <span>/</span>
                <span className="text-white">Fundamentos de Blockchain</span>
              </nav>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
                  GRATUITO
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">
                  PRINCIPIANTE
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded-full border border-purple-500/30">
                  CERTIFICADO
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {curso.titulo}
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                {curso.descripcion}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-white font-bold">{curso.calificacion}</span>
                  <span className="text-gray-400">({curso.estudiantes.toLocaleString()} estudiantes)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">📚</span>
                  <span className="text-white">{curso.modulos} módulos · {curso.lecciones} lecciones</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">🕐</span>
                  <span className="text-white">{curso.duracion} de contenido</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/cursos/fundamentos-blockchain/leccion/1-1"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-center"
                >
                  🚀 Empezar Ahora
                </Link>
                <button className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-colors">
                  ⭐ Guardar Curso
                </button>
              </div>
            </div>

            {/* Right Column - Course Preview */}
            <div className="lg:block hidden">
              <div className="bg-black/40 border border-blue-500/30 rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">⛓️</div>
                    <p className="text-white font-bold">Curso Completo</p>
                    <p className="text-gray-400 text-sm">28 lecciones · 7 horas</p>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">{curso.modulos}</div>
                    <div className="text-sm text-gray-400">Módulos</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">{curso.lecciones}</div>
                    <div className="text-sm text-gray-400">Lecciones</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">3</div>
                    <div className="text-sm text-gray-400">PDFs</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">∞</div>
                    <div className="text-sm text-gray-400">Acceso</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">
          ¿Qué aprenderás?
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Qué es blockchain y cómo funciona',
            'Diferencias entre blockchain públicas y privadas',
            'Mecanismos de consenso (PoW, PoS)',
            'Criptografía aplicada a blockchain',
            'Smart contracts y sus aplicaciones',
            'Casos de uso en distintas industrias',
            'Ethereum y otras plataformas',
            'Seguridad y vulnerabilidades',
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <span className="text-green-400 text-xl">✓</span>
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contenido del Curso */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">
          Contenido del Curso
        </h2>
        <div className="space-y-4">
          {modulos.map((modulo) => (
            <details key={modulo.numero} className="bg-gray-800/50 border border-gray-700 rounded-lg">
              <summary className="cursor-pointer p-6 hover:bg-gray-800/80 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Módulo {modulo.numero}: {modulo.titulo}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {modulo.lecciones.length} lecciones
                    </p>
                  </div>
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="border-t border-gray-700">
                {modulo.lecciones.map((leccion) => (
                  <Link
                    key={leccion.numero}
                    href={`/cursos/fundamentos-blockchain/leccion/${leccion.numero.replace('.', '-')}`}
                    className="flex items-center justify-between p-4 hover:bg-gray-800/50 transition-colors border-b border-gray-700 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">
                        {leccion.tipo === 'video' && '🎥'}
                        {leccion.tipo === 'lectura' && '📖'}
                        {leccion.tipo === 'interactivo' && '💻'}
                      </span>
                      <div>
                        <div className="text-white font-medium">{leccion.titulo}</div>
                        <div className="text-sm text-gray-400">{leccion.duracion}</div>
                      </div>
                    </div>
                    <div className="text-blue-400">▶</div>
                  </Link>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Recursos Descargables */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">
          📚 Recursos Descargables
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recursos.map((recurso, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-all">
              <div className="text-4xl mb-4">{recurso.icono}</div>
              <h3 className="text-xl font-bold text-white mb-2">{recurso.titulo}</h3>
              <p className="text-gray-400 text-sm mb-4">{recurso.descripcion}</p>
              <a 
                href={recurso.pdf}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-400 font-semibold text-sm hover:text-blue-300 transition-colors"
              >
                Descargar PDF →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Instructor */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">
          Tu Instructor
        </h2>
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-4xl">
              👥
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">{instructor.nombre}</h3>
              <p className="text-gray-400 mb-4">{instructor.descripcion}</p>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <div>
                  <div className="text-blue-400 font-bold">{instructor.estudiantes}</div>
                  <div className="text-gray-400 text-sm">Estudiantes</div>
                </div>
                <div>
                  <div className="text-blue-400 font-bold">{instructor.cursos}</div>
                  <div className="text-gray-400 text-sm">Cursos</div>
                </div>
                <div>
                  <div className="text-blue-400 font-bold">4.7 ⭐</div>
                  <div className="text-gray-400 text-sm">Valoración</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para dominar Blockchain?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Comienza ahora y únete a {curso.estudiantes.toLocaleString()} estudiantes
          </p>
          <Link 
            href="/cursos/fundamentos-blockchain/leccion/1-1"
            className="inline-block px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-lg transition-colors"
          >
            🚀 Empezar Primera Lección
          </Link>
        </div>
      </section>
    </main>
  )
}
