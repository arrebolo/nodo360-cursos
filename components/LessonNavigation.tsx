import Link from 'next/link'

interface LessonNavigationProps {
  prevLesson?: {
    id: string
    title: string
  }
  nextLesson?: {
    id: string
    title: string
  }
}

export default function LessonNavigation({ prevLesson, nextLesson }: LessonNavigationProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {/* Lección anterior */}
      {prevLesson ? (
        <Link
          href={`/cursos/bitcoin-desde-cero/leccion/${prevLesson.id}`}
          className="bg-nodo-azul hover:bg-opacity-90 text-white p-6 rounded-lg transition-all hover:-translate-x-2 flex items-center"
        >
          <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <div>
            <div className="text-sm text-gray-300 mb-1">Lección anterior</div>
            <div className="font-semibold">{prevLesson.title}</div>
          </div>
        </Link>
      ) : (
        <div className="bg-gray-200 p-6 rounded-lg opacity-50">
          <div className="text-gray-500 text-center">Primera lección del curso</div>
        </div>
      )}

      {/* Siguiente lección */}
      {nextLesson ? (
        <Link
          href={`/cursos/bitcoin-desde-cero/leccion/${nextLesson.id}`}
          className="bg-nodo-naranja hover:bg-orange-600 text-white p-6 rounded-lg transition-all hover:translate-x-2 flex items-center justify-end text-right"
        >
          <div>
            <div className="text-sm text-orange-100 mb-1">Siguiente lección</div>
            <div className="font-semibold">{nextLesson.title}</div>
          </div>
          <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ) : (
        <div className="bg-gray-200 p-6 rounded-lg opacity-50">
          <div className="text-gray-500 text-center">Última lección del módulo</div>
        </div>
      )}
    </div>
  )
}
