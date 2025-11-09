import Link from 'next/link'

const modulos = [
  {
    numero: 1,
    titulo: 'Fundamentos',
    lecciones: [
      { id: '1-1', titulo: 'Por qué necesitamos Bitcoin', duracion: '10 min', completada: false },
      { id: '1-2', titulo: '¿Qué es Bitcoin?', duracion: '12 min', completada: false },
      { id: '1-3', titulo: 'Historia de Bitcoin', duracion: '15 min', completada: false },
      { id: '1-4', titulo: 'Cómo funciona Bitcoin', duracion: '18 min', completada: false },
      { id: '1-5', titulo: 'Bitcoin vs otras criptomonedas', duracion: '12 min', completada: false },
    ]
  },
  {
    numero: 2,
    titulo: 'Empezar a Usar',
    lecciones: [
      { id: '2-1', titulo: 'Tipos de wallets', duracion: '14 min', completada: false },
      { id: '2-2', titulo: 'Tu primera wallet paso a paso', duracion: '20 min', completada: false },
      { id: '2-3', titulo: 'Recibir Bitcoin', duracion: '10 min', completada: false },
      { id: '2-4', titulo: 'Enviar Bitcoin', duracion: '12 min', completada: false },
      { id: '2-5', titulo: 'Seguridad básica', duracion: '15 min', completada: false },
    ]
  },
]

export default function CursoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-nodo-azul border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-3xl font-bold text-white">
            NODO<span className="text-nodo-naranja">360</span>
          </Link>
        </div>
      </header>

      {/* Hero del curso */}
      <div className="bg-gradient-to-r from-nodo-azul to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-2 bg-nodo-verde/20 rounded-full mb-4">
            <span className="text-nodo-verde font-semibold text-sm">CURSO COMPLETO</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bitcoin desde Cero
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Aprende todo sobre Bitcoin: qué es, cómo funciona y cómo usarlo de forma segura.
            22 lecciones prácticas sin tecnicismos.
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <span className="text-nodo-naranja">⏱️</span>
              <span>~5 horas total</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-nodo-verde">📚</span>
              <span>22 lecciones</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-nodo-cyan">🎯</span>
              <span>Nivel principiante</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">📄</span>
              <span>PDFs descargables</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido del curso */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Progreso */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-700 font-semibold">Tu progreso</span>
            <span className="text-nodo-naranja font-bold">0%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-gradient-to-r from-nodo-naranja to-nodo-verde h-3 rounded-full" style={{width: '0%'}}></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">0 de 22 lecciones completadas</p>
        </div>

        {/* Módulos */}
        <div className="space-y-8">
          {modulos.map((modulo) => (
            <div key={modulo.numero} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-nodo-azul text-white px-6 py-4">
                <h2 className="text-2xl font-bold">
                  Módulo {modulo.numero}: {modulo.titulo}
                </h2>
                <p className="text-gray-300 text-sm mt-1">
                  {modulo.lecciones.length} lecciones
                </p>
              </div>

              <div className="divide-y divide-gray-200">
                {modulo.lecciones.map((leccion, index) => (
                  <Link
                    key={leccion.id}
                    href={`/cursos/bitcoin-desde-cero/leccion/${leccion.id}`}
                    className="block px-6 py-4 hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          leccion.completada 
                            ? 'bg-nodo-verde text-nodo-azul' 
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          {leccion.completada ? '✓' : index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 hover:text-nodo-naranja transition">
                            {leccion.titulo}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {leccion.duracion}
                          </p>
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Resto de módulos (placeholder) */}
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">
              📦 Módulos 3, 4 y 5 próximamente
            </p>
            <p className="text-sm text-gray-500">
              Estamos preparando contenido de calidad para ti
            </p>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-600">
            <p className="text-2xl font-bold text-nodo-azul mb-4">
              NODO<span className="text-nodo-naranja">360</span>
            </p>
            <p className="mb-4">Educación Bitcoin de calidad en español</p>
            <p className="text-sm text-nodo-verde">© 2025 Nodo360. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
