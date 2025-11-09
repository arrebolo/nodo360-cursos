import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-nodo-azul to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-3xl font-bold text-white">
              NODO<span className="text-nodo-naranja">360</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:text-nodo-naranja transition">
                Inicio
              </Link>
              <Link href="/cursos" className="text-white hover:text-nodo-naranja transition">
                Cursos
              </Link>
              <Link href="/recursos" className="text-white hover:text-nodo-naranja transition">
                Recursos
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-nodo-verde/20 rounded-full mb-6">
            <span className="text-nodo-verde font-semibold text-sm">EDUCACIÓN BITCOIN</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Aprende Bitcoin
            <br />
            <span className="text-nodo-naranja">desde Cero</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            El curso más completo en español para entender Bitcoin, cómo funciona
            y cómo usarlo de forma segura.
          </p>

          <Link
            href="/cursos/bitcoin-desde-cero"
            className="inline-block bg-nodo-naranja hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition transform hover:scale-105"
          >
            Empezar Curso Gratis →
          </Link>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <div className="text-4xl font-bold text-nodo-naranja mb-2">22</div>
              <div className="text-gray-300">Lecciones</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <div className="text-4xl font-bold text-nodo-verde mb-2">5</div>
              <div className="text-gray-300">Módulos</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <div className="text-4xl font-bold text-nodo-cyan mb-2">100%</div>
              <div className="text-gray-300">Gratis</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-400">
            <p className="text-2xl font-bold text-white mb-4">
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
