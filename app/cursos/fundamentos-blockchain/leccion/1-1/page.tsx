import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lección 1.1: ¿Qué es Blockchain? | Fundamentos de Blockchain - Nodo360',
  description: 'Aprende qué es blockchain, cómo funciona esta tecnología revolucionaria y por qué está cambiando el mundo.',
  keywords: 'qué es blockchain, cadena de bloques, tecnología blockchain, blockchain español, cómo funciona blockchain, registro distribuido, criptografía',
  openGraph: {
    title: '¿Qué es Blockchain? | Fundamentos de Blockchain',
    description: 'Introducción completa a blockchain: componentes, funcionamiento y diferencias con bases de datos tradicionales.',
    type: 'article',
  }
}

export default function Leccion11BlockchainPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Header con Breadcrumb */}
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/cursos" className="hover:text-blue-400 transition-colors">
              Cursos
            </Link>
            <span>/</span>
            <Link href="/cursos/fundamentos-blockchain" className="hover:text-blue-400 transition-colors">
              Fundamentos de Blockchain
            </Link>
            <span>/</span>
            <span className="text-white">Lección 1.1</span>
          </nav>
          
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">
              MÓDULO 1
            </span>
            <span className="text-gray-400 text-sm">14 minutos</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            ¿Qué es Blockchain?
          </h1>
        </div>
      </header>

      {/* Contenido */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introducción */}
        <section className="mb-12">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-3">📚 En esta lección aprenderás:</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>Qué es blockchain y cómo funciona</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>Los componentes principales de una blockchain</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>Por qué esta tecnología es revolucionaria</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>Diferencias entre blockchain y bases de datos tradicionales</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contenido Principal */}
        <section className="prose prose-invert max-w-none">
          
          <h2 className="text-2xl font-bold text-white mb-4">🔗 ¿Qué es Blockchain?</h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            <strong className="text-white">Blockchain</strong> (cadena de bloques) es una tecnología de registro distribuido que permite almacenar información de forma <strong className="text-blue-400">descentralizada, inmutable y transparente</strong>.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Imagina un libro de contabilidad que, en lugar de estar en un solo lugar, está replicado y sincronizado en miles de computadoras alrededor del mundo. Cada vez que se añade una nueva transacción, todos los participantes verifican y registran el cambio simultáneamente.
          </p>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-white mb-3">💡 Analogía Simple</h3>
            <p className="text-gray-300">
              Piensa en un juego multijugador donde cada jugador tiene una copia exacta del estado del juego. Cuando alguien hace un movimiento, todos verifican que sea válido antes de actualizar sus copias. Si alguien intenta hacer trampa, los demás lo detectan inmediatamente porque su copia no coincide con la mayoría.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">🧩 Componentes Principales</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-800/50 border-l-4 border-blue-500 p-6 rounded">
              <h3 className="text-xl font-bold text-white mb-2">1. Bloques</h3>
              <p className="text-gray-300">
                Cada bloque contiene un conjunto de transacciones, un sello de tiempo, y una referencia criptográfica al bloque anterior. Es como una página en un libro que no puede modificarse una vez escrita.
              </p>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-blue-500 p-6 rounded">
              <h3 className="text-xl font-bold text-white mb-2">2. Cadena</h3>
              <p className="text-gray-300">
                Los bloques están conectados entre sí mediante funciones hash criptográficas, formando una cadena. Cada bloque apunta al anterior, creando un registro histórico inmutable.
              </p>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-blue-500 p-6 rounded">
              <h3 className="text-xl font-bold text-white mb-2">3. Red de Nodos</h3>
              <p className="text-gray-300">
                Miles de computadoras (nodos) mantienen una copia completa de la blockchain. Trabajan juntas para validar nuevas transacciones y mantener el consenso sobre el estado de la red.
              </p>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-blue-500 p-6 rounded">
              <h3 className="text-xl font-bold text-white mb-2">4. Criptografía</h3>
              <p className="text-gray-300">
                Utiliza técnicas criptográficas avanzadas para asegurar las transacciones, proteger la identidad de los usuarios y garantizar la integridad de los datos.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">🆚 Blockchain vs Base de Datos Tradicional</h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800">
                  <th className="border border-gray-700 p-4 text-left text-white">Característica</th>
                  <th className="border border-gray-700 p-4 text-left text-white">Blockchain</th>
                  <th className="border border-gray-700 p-4 text-left text-white">Base de Datos</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr>
                  <td className="border border-gray-700 p-4">Control</td>
                  <td className="border border-gray-700 p-4 text-blue-400">Descentralizado</td>
                  <td className="border border-gray-700 p-4">Centralizado</td>
                </tr>
                <tr className="bg-gray-800/30">
                  <td className="border border-gray-700 p-4">Modificación</td>
                  <td className="border border-gray-700 p-4 text-blue-400">Inmutable</td>
                  <td className="border border-gray-700 p-4">Editable</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4">Transparencia</td>
                  <td className="border border-gray-700 p-4 text-blue-400">Pública</td>
                  <td className="border border-gray-700 p-4">Privada</td>
                </tr>
                <tr className="bg-gray-800/30">
                  <td className="border border-gray-700 p-4">Confianza</td>
                  <td className="border border-gray-700 p-4 text-blue-400">En el protocolo</td>
                  <td className="border border-gray-700 p-4">En el administrador</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">🚀 ¿Por qué es Revolucionaria?</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-bold text-white mb-2">Seguridad</h3>
              <p className="text-gray-300 text-sm">
                Prácticamente imposible de hackear debido a su naturaleza distribuida y criptográfica.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="text-lg font-bold text-white mb-2">Transparencia</h3>
              <p className="text-gray-300 text-sm">
                Todas las transacciones son públicas y verificables por cualquiera.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">Eficiencia</h3>
              <p className="text-gray-300 text-sm">
                Elimina intermediarios, reduciendo costos y tiempos de procesamiento.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-lg font-bold text-white mb-2">Accesibilidad</h3>
              <p className="text-gray-300 text-sm">
                Disponible para cualquier persona con conexión a internet, sin barreras.
              </p>
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-white mb-3">🎯 Concepto Clave</h3>
            <p className="text-gray-300 mb-3">
              La verdadera innovación de blockchain no es solo la tecnología, sino el <strong className="text-blue-400">cambio de paradigma</strong>: pasar de confiar en instituciones centralizadas a confiar en un protocolo matemático verificable por todos.
            </p>
            <p className="text-gray-300">
              Esto abre las puertas a nuevas formas de organización, comercio y colaboración que antes eran imposibles.
            </p>
          </div>

        </section>

        {/* Resumen */}
        <section className="my-12 bg-gray-800/50 border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">📝 Resumen de la Lección</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong className="text-white">Blockchain</strong> es un registro distribuido, inmutable y transparente</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span>Se compone de <strong className="text-white">bloques</strong> conectados en una <strong className="text-white">cadena</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span>Miles de <strong className="text-white">nodos</strong> mantienen copias y verifican transacciones</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span>Ofrece <strong className="text-white">seguridad, transparencia y eliminación de intermediarios</strong></span>
            </li>
          </ul>
        </section>

        {/* Navegación */}
        <section className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-800">
          <Link 
            href="/cursos/fundamentos-blockchain"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
          >
            ← Volver al Curso
          </Link>
          
          <Link 
            href="/cursos/fundamentos-blockchain/leccion/1-2"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Siguiente Lección →
          </Link>
        </section>

      </article>
    </main>
  )
}
