import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tu Primera Wallet - Curso Gratuito | Nodo360',
  description: 'Aprende a crear, usar y proteger tu wallet de Bitcoin de forma segura. Curso gratuito con 6 módulos prácticos paso a paso.',
  keywords: 'curso wallet bitcoin, wallet segura, aprender bitcoin wallet, billetera bitcoin, curso criptomonedas',
}

// Datos del curso
const curso = {
  titulo: 'Tu Primera Wallet',
  subtitulo: 'Seguridad y Práctica',
  descripcion: 'Aprende a crear, usar y proteger tu wallet de Bitcoin de forma segura. Paso a paso desde la instalación hasta las mejores prácticas de seguridad.',
  nivel: 'Principiante',
  duracion: '4 horas',
  modulos: 6,
  lecciones: 18,
  estudiantes: 3120,
  calificacion: 4.9,
  idioma: 'Español',
  tipo: 'gratuito',
  actualizacion: 'Noviembre 2025',
}

const modulos = [
  {
    numero: 1,
    titulo: 'Tipos de Wallets',
    lecciones: [
      { numero: '1.1', titulo: 'Hot Wallets vs Cold Wallets', duracion: '10 min', tipo: 'video' },
      { numero: '1.2', titulo: 'Custodial vs Non-Custodial', duracion: '12 min', tipo: 'video' },
      { numero: '1.3', titulo: 'Cuál Elegir', duracion: '8 min', tipo: 'lectura' },
    ]
  },
  {
    numero: 2,
    titulo: 'Creando tu Wallet',
    lecciones: [
      { numero: '2.1', titulo: 'Instalación y Configuración', duracion: '15 min', tipo: 'video' },
      { numero: '2.2', titulo: 'Seed Phrase: Tu Llave Maestra', duracion: '20 min', tipo: 'video' },
      { numero: '2.3', titulo: 'Práctica Guiada', duracion: '18 min', tipo: 'interactivo' },
    ]
  },
  {
    numero: 3,
    titulo: 'Recibir y Enviar',
    lecciones: [
      { numero: '3.1', titulo: 'Direcciones Bitcoin', duracion: '12 min', tipo: 'video' },
      { numero: '3.2', titulo: 'Tu Primera Transacción', duracion: '16 min', tipo: 'video' },
      { numero: '3.3', titulo: 'Comisiones y Tiempos', duracion: '10 min', tipo: 'lectura' },
    ]
  },
  {
    numero: 4,
    titulo: 'Seguridad Avanzada',
    lecciones: [
      { numero: '4.1', titulo: 'Backup y Recuperación', duracion: '14 min', tipo: 'video' },
      { numero: '4.2', titulo: 'Multifirma y Hardware Wallets', duracion: '18 min', tipo: 'video' },
      { numero: '4.3', titulo: 'Errores Comunes a Evitar', duracion: '12 min', tipo: 'lectura' },
    ]
  },
]

const recursos = [
  { 
    icono: '🔐', 
    titulo: 'Guía de Seguridad', 
    descripcion: 'Checklist completo para proteger tu wallet',
    pdf: '/pdfs/guia-seguridad-wallet.pdf'
  },
  { 
    icono: '📋', 
    titulo: 'Comparativa Wallets', 
    descripcion: 'Tabla comparativa de las mejores wallets 2025',
    pdf: '/pdfs/comparativa-wallets.pdf'
  },
  { 
    icono: '⚠️', 
    titulo: 'Errores Fatales', 
    descripcion: 'Los 10 errores que pueden hacerte perder tus bitcoin',
    pdf: '/pdfs/errores-wallet.pdf'
  },
]

const instructor = {
  nombre: 'Equipo Nodo360',
  descripcion: 'Expertos en Bitcoin y blockchain con más de 5 años educando en español',
  estudiantes: '5,000+',
  cursos: '6',
}

export default function TuPrimeraWalletPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-b border-green-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Info */}
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link href="/cursos" className="hover:text-green-400 transition-colors">
                  Cursos
                </Link>
                <span>/</span>
                <span className="text-white">Tu Primera Wallet</span>
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
                  100% PRÁCTICO
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
                  <span className="text-green-400">📚</span>
                  <span className="text-white">{curso.modulos} módulos · {curso.lecciones} lecciones</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">🕐</span>
                  <span className="text-white">{curso.duracion} de contenido</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/cursos/primera-wallet/leccion/1-1"
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors text-center"
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
              <div className="bg-black/40 border border-green-500/30 rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🔐</div>
                    <p className="text-white font-bold">Curso Práctico</p>
                    <p className="text-gray-400 text-sm">18 lecciones · 4 horas</p>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">{curso.modulos}</div>
                    <div className="text-sm text-gray-400">Módulos</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">{curso.lecciones}</div>
                    <div className="text-sm text-gray-400">Lecciones</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">3</div>
                    <div className="text-sm text-gray-400">PDFs</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">∞</div>
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
            'Elegir la wallet perfecta para ti',
            'Crear y configurar tu primera wallet',
            'Entender y proteger tu seed phrase',
            'Recibir y enviar Bitcoin de forma segura',
            'Calcular comisiones óptimas',
            'Hacer backup y recuperación',
            'Hardware wallets y seguridad avanzada',
            'Evitar los errores más comunes',
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
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="border-t border-gray-700">
                {modulo.lecciones.map((leccion) => (
                  <Link
                    key={leccion.numero}
                    href={`/cursos/primera-wallet/leccion/${leccion.numero.replace('.', '-')}`}
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
                    <div className="text-green-400">▶</div>
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
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-green-500/50 transition-all">
              <div className="text-4xl mb-4">{recurso.icono}</div>
              <h3 className="text-xl font-bold text-white mb-2">{recurso.titulo}</h3>
              <p className="text-gray-400 text-sm mb-4">{recurso.descripcion}</p>
              <a 
                href={recurso.pdf}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-green-400 font-semibold text-sm hover:text-green-300 transition-colors"
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
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-4xl">
              👥
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">{instructor.nombre}</h3>
              <p className="text-gray-400 mb-4">{instructor.descripcion}</p>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <div>
                  <div className="text-green-400 font-bold">{instructor.estudiantes}</div>
                  <div className="text-gray-400 text-sm">Estudiantes</div>
                </div>
                <div>
                  <div className="text-green-400 font-bold">{instructor.cursos}</div>
                  <div className="text-gray-400 text-sm">Cursos</div>
                </div>
                <div>
                  <div className="text-green-400 font-bold">4.9 ⭐</div>
                  <div className="text-gray-400 text-sm">Valoración</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para crear tu wallet?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Comienza ahora y únete a {curso.estudiantes.toLocaleString()} estudiantes
          </p>
          <Link 
            href="/cursos/primera-wallet/leccion/1-1"
            className="inline-block px-12 py-5 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-lg transition-colors"
          >
            🚀 Empezar Primera Lección
          </Link>
        </div>
      </section>
    </main>
  )
}
