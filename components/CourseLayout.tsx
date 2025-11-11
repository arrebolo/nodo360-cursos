import Link from 'next/link'
import { ReactNode } from 'react'

type ModuleColor = 'green' | 'red' | 'orange' | 'blue' | 'purple' | 'yellow'

interface CourseLayoutProps {
  courseName: string          // e.g., "Tu Primera Wallet"
  courseUrl: string           // e.g., "/cursos/primera-wallet"
  moduleNumber: number        // e.g., 3
  moduleName: string          // e.g., "RECIBIR Y ENVIAR"
  moduleColor: ModuleColor    // Color variant for module badge
  lessonNumber: string        // e.g., "3.1"
  lessonTitle: string         // e.g., "Cómo Recibir Bitcoin"
  duration?: string           // e.g., "12 minutos"
  prevUrl?: string            // previous lesson URL
  nextUrl?: string            // next lesson URL
  children: ReactNode         // lesson content
}

const moduleColorClasses: Record<ModuleColor, string> = {
  green: 'bg-green-500/20 text-green-400 border-green-500/30',
  red: 'bg-red-600 text-white',
  orange: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
}

const nextButtonColorClasses: Record<ModuleColor, string> = {
  green: 'bg-green-600 hover:bg-green-700',
  red: 'bg-red-600 hover:bg-red-700',
  orange: 'bg-orange-600 hover:bg-orange-700',
  blue: 'bg-blue-600 hover:bg-blue-700',
  purple: 'bg-purple-600 hover:bg-purple-700',
  yellow: 'bg-yellow-600 hover:bg-yellow-700'
}

export default function CourseLayout({
  courseName,
  courseUrl,
  moduleNumber,
  moduleName,
  moduleColor,
  lessonNumber,
  lessonTitle,
  duration,
  prevUrl,
  nextUrl,
  children
}: CourseLayoutProps) {
  const moduleColorClass = moduleColorClasses[moduleColor]
  const nextButtonColorClass = nextButtonColorClasses[moduleColor]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Header con Breadcrumb */}
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/cursos" className="hover:text-white transition-colors">
              Cursos
            </Link>
            <span>/</span>
            <Link
              href={courseUrl}
              className="hover:text-white transition-colors"
            >
              {courseName}
            </Link>
            <span>/</span>
            <span className="text-white">Lección {lessonNumber}</span>
          </nav>

          <div className="flex items-center gap-3 mb-2">
            <span className={`px-3 py-1 text-xs font-bold rounded ${moduleColor === 'red' ? 'rounded' : 'rounded-full border'} ${moduleColorClass}`}>
              MÓDULO {moduleNumber}{moduleName && `: ${moduleName}`}
            </span>
            {duration && (
              <span className="text-gray-400 text-sm">{duration}</span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {lessonTitle}
          </h1>
        </div>
      </header>

      {/* Contenido */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}

        {/* Navegación */}
        {(prevUrl || nextUrl) && (
          <section className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-800">
            {prevUrl ? (
              <Link
                href={prevUrl}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
              >
                ← Lección Anterior
              </Link>
            ) : (
              <div /> // Empty div for spacing when no prev button
            )}

            {nextUrl && (
              <Link
                href={nextUrl}
                className={`px-6 py-3 ${nextButtonColorClass} text-white font-semibold rounded-lg transition-colors`}
              >
                Siguiente Lección →
              </Link>
            )}
          </section>
        )}
      </article>
    </main>
  )
}
