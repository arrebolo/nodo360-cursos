import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Introducción a Bitcoin - Curso Gratuito | Nodo360',
  description: 'Aprende qué es Bitcoin, cómo funciona y por qué está revolucionando el dinero. Curso gratuito con 8 módulos prácticos y certificado.',
  keywords: 'curso bitcoin, aprender bitcoin, bitcoin gratis, bitcoin para principiantes, curso criptomonedas',
}

// Datos del curso
const curso = {
  titulo: 'Introducción a Bitcoin',
  subtitulo: 'Bitcoin desde Cero',
  descripcion: 'Descubre qué es Bitcoin, cómo funciona y por qué está revolucionando el dinero. Aprende los fundamentos con ejemplos prácticos y recursos descargables.',
  nivel: 'Principiante',
  duracion: '6 horas',
  modulos: 8,
  lecciones: 22,
  estudiantes: 2450,
  calificacion: 4.8,
  idioma: 'Español',
  tipo: 'gratuito',
  actualizacion: 'Noviembre 2025',
}

const modulos = [
  {
    numero: 1,
    titulo: 'Fundamentos',
    lecciones: [
      { numero: '1.1', titulo: '¿Por qué necesitamos Bitcoin?', duracion: '12 min', tipo: 'video', completada: false },
      { numero: '1.2', titulo: '¿Qué es Bitcoin?', duracion: '15 min', tipo: 'video', completada: false },
      { numero: '1.3', titulo: 'Historia de Bitcoin', duracion: '10 min', tipo: 'lectura', completada: false },
    ]
  },
  {
    numero: 2,
    titulo: 'Cómo Funciona Bitcoin',
    lecciones: [
      { numero: '2.1', titulo: 'La Blockchain', duracion: '18 min', tipo: 'video', completada: false },
      { numero: '2.2', titulo: 'Minería y Consenso', duracion: '20 min', tipo: 'video', completada: false },
      { numero: '2.3', titulo: 'Transacciones', duracion: '15 min', tipo: 'interactivo', completada: false },
    ]
  },
  {
    numero: 3,
    titulo: 'Seguridad y Wallets',
    lecciones: [
      { numero: '3.1', titulo: 'Claves Públicas y Privadas', duracion: '12 min', tipo: 'video', completada: false },
      { numero: '3.2', titulo: 'Tipos de Wallets', duracion: '16 min', tipo: 'video', completada: false },
      { numero: '3.3', titulo: 'Cómo Proteger tus Bitcoin', duracion: '14 min', tipo: 'lectura', completada: false },
    ]
  },
]

const recursos = [
  { 
    icono: '📄', 
    titulo: 'Guía Inflación', 
    descripcion: 'Cómo protegerte de la inflación con ejemplos prácticos',
    pdf: '/pdfs/guia-inflacion.pdf'
  },
  { 
    icono: '📊', 
    titulo: 'Historia de Crisis', 
    descripcion: 'Cronología de crisis bancarias desde 1900',
    pdf: '/pdfs/historia-crisis.pdf'
  },
  { 
    icono: '✅', 
    titulo: 'Checklist Dinero', 
    descripcion: 'Evalúa tu exposición a problemas del dinero tradicional',
    pdf: '/pdfs/checklist-dinero.pdf'
  },
]

const instructor = {
  nombre: 'Equipo Nodo360',
  descripcion: 'Expertos en Bitcoin y blockchain con más de 5 años educando en español',
  estudiantes: '5,000+',
  cursos: '6',
}

export default function BitcoinDesdeCeroPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-900/30 to-red-900/30 border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Info */}
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link href="/cursos" className="hover:text-orange-400 transition-colors">
                  Cursos
                </Link>
                <span>/</span>
                <span className="text-white">Bitcoin desde Cero</span>
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
                  <span className="text-orange-400">📚</span>
                  <span className="text-white">{curso.modulos} módulos · {curso.lecciones} lecciones</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">🕐</span>
                  <span className="text-white">{curso.duracion} de contenido</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/cursos/bitcoin-desde-cero/leccion/1-1"
                  className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-colors text-center"
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
              <div className="bg-black/40 border border-orange-500/30 rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎓</div>
                    <p className="text-white font-bold">Curso Completo</p>
                    <p className="text-gray-400 text-sm">22 lecciones · 6 horas</p>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-400">{curso.modulos}</div>
                    <div className="text-sm text-gray-400">Módulos</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-400">{curso.lecciones}</div>
                    <div className="text-sm text-gray-400">Lecciones</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-400">3</div>
                    <div className="text-sm text-gray-400">PDFs</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-400">∞</div>
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
            'Qué es Bitcoin y por qué es importante',
            'Cómo funciona la tecnología blockchain',
            'Diferencias entre Bitcoin y dinero tradicional',
            'Cómo protegerte de la inflación',
            'Historia del dinero y crisis financieras',
            'Seguridad y buenas prácticas con Bitcoin',
            'Cómo crear y usar una wallet',
            'Fundamentos técnicos explicados simple',
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
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="border-t border-gray-700">
                {modulo.lecciones.map((leccion) => (
                  <Link
                    key={leccion.numero}
                    href={`/cursos/bitcoin-desde-cero/leccion/${leccion.numero.replace('.', '-')}`}
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
                    <div className="text-orange-400">
                      {leccion.completada ? '✓' : '▶'}
                    </div>
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
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-orange-500/50 transition-all">
              <div className="text-4xl mb-4">{recurso.icono}</div>
              <h3 className="text-xl font-bold text-white mb-2">{recurso.titulo}</h3>
              <p className="text-gray-400 text-sm mb-4">{recurso.descripcion}</p>
              <a 
                href={recurso.pdf}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-orange-400 font-semibold text-sm hover:text-orange-300 transition-colors"
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
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-4xl">
              👥
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">{instructor.nombre}</h3>
              <p className="text-gray-400 mb-4">{instructor.descripcion}</p>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <div>
                  <div className="text-orange-400 font-bold">{instructor.estudiantes}</div>
                  <div className="text-gray-400 text-sm">Estudiantes</div>
                </div>
                <div>
                  <div className="text-orange-400 font-bold">{instructor.cursos}</div>
                  <div className="text-gray-400 text-sm">Cursos</div>
                </div>
                <div>
                  <div className="text-orange-400 font-bold">4.8 ⭐</div>
                  <div className="text-gray-400 text-sm">Valoración</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para aprender Bitcoin?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Comienza ahora y únete a {curso.estudiantes.toLocaleString()} estudiantes
          </p>
          <Link 
            href="/cursos/bitcoin-desde-cero/leccion/1-1"
            className="inline-block px-12 py-5 bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold rounded-lg transition-colors"
          >
            🚀 Empezar Primera Lección
          </Link>
        </div>
      </section>
    </main>
  )
}
