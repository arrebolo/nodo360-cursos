import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lección 2.1: Bloques y Cadenas | Fundamentos de Blockchain - Nodo360',
  description: 'Aprende la anatomía de un bloque, cómo se enlazan entre sí y cómo se forma la cadena inmutable de blockchain.',
  keywords: 'anatomía bloque blockchain, merkle tree, hash criptográfico, cadena de bloques, inmutabilidad blockchain, estructura bloque',
  openGraph: {
    title: 'Bloques y Cadenas | Anatomía Técnica de Blockchain',
    description: 'Estructura completa de un bloque, árboles de Merkle y cómo se forma la cadena inmutable de blockchain.',
    type: 'article',
  }
}

export default function Leccion21BlockchainPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/cursos" className="hover:text-blue-400 transition-colors">Cursos</Link>
            <span>/</span>
            <Link href="/cursos/fundamentos-blockchain" className="hover:text-blue-400 transition-colors">Fundamentos de Blockchain</Link>
            <span>/</span>
            <span className="text-white">Lección 2.1</span>
          </nav>
          
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">MÓDULO 2</span>
            <span className="text-gray-400 text-sm">18 minutos</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white">Bloques y Cadenas</h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <section className="mb-12">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-3">📚 En esta lección aprenderás:</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>La anatomía completa de un bloque</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>Cómo se enlazan los bloques entre sí</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>Qué son los árboles de Merkle</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>Por qué la cadena es inmutable</span></li>
            </ul>
          </div>
        </section>

        <section className="prose prose-invert max-w-none">
          
          <h2 className="text-2xl font-bold text-white mb-4">🧱 Anatomía de un Bloque</h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Un bloque es como una <strong className="text-white">página en un libro de contabilidad digital</strong>. Cada bloque contiene información estructurada que, una vez escrita, no puede modificarse.
          </p>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Componentes de un Bloque</h3>
            
            <div className="space-y-6">
              
              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded">
                <h4 className="text-lg font-bold text-white mb-2">1. Block Header (Cabecera)</h4>
                <p className="text-gray-300 mb-3">Contiene los metadatos del bloque:</p>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>• <strong className="text-white">Versión:</strong> Versión del protocolo blockchain</p>
                  <p>• <strong className="text-white">Hash del bloque anterior:</strong> Enlace criptográfico al bloque previo</p>
                  <p>• <strong className="text-white">Merkle Root:</strong> Resumen de todas las transacciones</p>
                  <p>• <strong className="text-white">Timestamp:</strong> Fecha y hora de creación</p>
                  <p>• <strong className="text-white">Difficulty Target:</strong> Dificultad de minería</p>
                  <p>• <strong className="text-white">Nonce:</strong> Número usado para minería</p>
                </div>
              </div>

              <div className="bg-green-900/20 border-l-4 border-green-500 p-5 rounded">
                <h4 className="text-lg font-bold text-white mb-2">2. Body (Cuerpo)</h4>
                <p className="text-gray-300 mb-3">Contiene los datos:</p>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>• <strong className="text-white">Transaction Counter:</strong> Número de transacciones</p>
                  <p>• <strong className="text-white">Transactions:</strong> Lista de todas las transacciones incluidas</p>
                  <p>• Puede contener desde cientos hasta miles de transacciones</p>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-black/50 border border-blue-500/30 rounded-lg p-6 mb-8 font-mono text-xs">
            <h4 className="text-white font-bold mb-3 text-base">Ejemplo Simplificado de un Bloque:</h4>
            <pre className="text-gray-300 whitespace-pre-wrap">
{`{
  "block_header": {
    "version": 536870912,
    "previous_hash": "000000000000000000042e4d...",
    "merkle_root": "8b30c5ba100f6f2e5ad1e2a7...",
    "timestamp": 1699545600,
    "difficulty": 59377508590532,
    "nonce": 2573407595
  },
  "transactions": [
    {
      "txid": "a1b2c3d4e5f6...",
      "inputs": [...],
      "outputs": [...]
    },
    // ... más transacciones
  ]
}`}
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">🔗 Cómo Se Enlazan Los Bloques</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            La magia de blockchain está en cómo los bloques se conectan entre sí formando una <strong className="text-blue-400">cadena inmutable</strong>.
          </p>

          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">El Enlace Criptográfico</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Cada bloque contiene el hash del bloque anterior</strong> en su cabecera. Esto crea un enlace criptográfico inquebrantable.
              </p>
              <div className="bg-blue-900/30 rounded p-4 my-4">
                <p className="text-sm">
                  <strong className="text-blue-400">Hash:</strong> Es como una huella digital única. Cualquier cambio mínimo en los datos produce un hash completamente diferente.
                </p>
              </div>
              <p>
                Si intentas modificar un bloque antiguo, su hash cambia. Pero ese hash está guardado en el siguiente bloque, por lo que tendrías que modificar TODOS los bloques posteriores, algo computacionalmente imposible.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Visualización de la Cadena</h3>
            <div className="space-y-3">
              <div className="bg-orange-900/30 border border-orange-500/50 rounded p-4">
                <p className="text-white font-bold">Bloque Génesis (Bloque 0)</p>
                <p className="text-gray-400 text-sm mt-1">Hash: 000000000019d6689c085ae165831e93...</p>
                <p className="text-gray-400 text-sm">Previous Hash: 0000000000000000 (no hay anterior)</p>
              </div>
              <div className="text-center text-blue-400">↓ Enlazado por hash ↓</div>
              <div className="bg-blue-900/30 border border-blue-500/50 rounded p-4">
                <p className="text-white font-bold">Bloque 1</p>
                <p className="text-gray-400 text-sm mt-1">Hash: 00000000839a8e6886ab5951d76f411...</p>
                <p className="text-gray-400 text-sm">Previous Hash: 000000000019d6689c085ae165831e93...</p>
              </div>
              <div className="text-center text-blue-400">↓ Enlazado por hash ↓</div>
              <div className="bg-blue-900/30 border border-blue-500/50 rounded p-4">
                <p className="text-white font-bold">Bloque 2</p>
                <p className="text-gray-400 text-sm mt-1">Hash: 000000006a625f06636b8bb6ac7b960...</p>
                <p className="text-gray-400 text-sm">Previous Hash: 00000000839a8e6886ab5951d76f411...</p>
              </div>
              <div className="text-center text-blue-400">↓ Y así sucesivamente... ↓</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">🌳 Árboles de Merkle</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Los <strong className="text-white">árboles de Merkle</strong> (o hash trees) son una estructura de datos que permite verificar eficientemente grandes volúmenes de información.
          </p>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">¿Cómo Funcionan?</h3>
            <div className="space-y-4 text-gray-300">
              <p>En lugar de guardar todas las transacciones en la cabecera del bloque, se guarda un único hash llamado <strong className="text-blue-400">Merkle Root</strong>.</p>
              
              <div className="bg-black/50 rounded p-4 my-4">
                <p className="text-white font-bold mb-2">Proceso:</p>
                <p className="text-sm">1. Cada transacción se hashea individualmente</p>
                <p className="text-sm">2. Los hashes se agrupan en pares y se hashean juntos</p>
                <p className="text-sm">3. Se repite hasta tener un único hash: el Merkle Root</p>
              </div>

              <p>Este diseño permite:</p>
              <ul className="space-y-2 ml-6">
                <li>✓ <strong className="text-white">Verificación eficiente:</strong> Puedes verificar si una transacción está en el bloque sin descargar todas las transacciones</li>
                <li>✓ <strong className="text-white">Ahorro de espacio:</strong> Los nodos ligeros solo necesitan la cabecera</li>
                <li>✓ <strong className="text-white">Integridad garantizada:</strong> Cualquier cambio en una transacción cambia el Merkle Root</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">💡 Analogía</h3>
            <p className="text-gray-300">
              Imagina un árbol genealógico al revés. En las hojas están todas las transacciones individuales. Cada par de hermanos se combina en un padre, y así hasta llegar a la raíz (root). La raíz es el resumen de toda la familia.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">🔒 Por Qué La Cadena Es Inmutable</h2>

          <div className="space-y-6 mb-8">
            
            <div className="bg-red-900/20 border-l-4 border-red-500 p-6 rounded">
              <h3 className="text-xl font-bold text-white mb-3">Intento de Ataque: Modificar una Transacción</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Paso 1:</strong> Atacante modifica una transacción en el Bloque 100</p>
                <p className="text-red-400">→ El Merkle Root del Bloque 100 cambia</p>
                
                <p><strong className="text-white">Paso 2:</strong> Debe recalcular el hash del Bloque 100</p>
                <p className="text-red-400">→ El hash del Bloque 100 cambia</p>
                
                <p><strong className="text-white">Paso 3:</strong> El Bloque 101 tiene guardado el hash antiguo del Bloque 100</p>
                <p className="text-red-400">→ Debe modificar el Bloque 101 también</p>
                
                <p><strong className="text-white">Paso 4:</strong> Debe recalcular TODOS los bloques hasta el presente</p>
                <p className="text-red-400">→ Miles de bloques a recalcular</p>
                
                <p><strong className="text-white">Paso 5:</strong> Debe hacerlo más rápido que toda la red combinada</p>
                <p className="text-red-400">→ Prácticamente imposible (necesitaría &gt;51% del poder computacional)</p>
              </div>
            </div>

            <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded">
              <h3 className="text-xl font-bold text-white mb-3">✓ Por Qué Funciona La Seguridad</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong className="text-white">Efecto dominó:</strong> Un cambio requiere recalcular toda la cadena</li>
                <li>• <strong className="text-white">Consenso distribuido:</strong> Miles de nodos verifican cada bloque</li>
                <li>• <strong className="text-white">Costo computacional:</strong> Modificar bloques antiguos es exponencialmente más difícil</li>
                <li>• <strong className="text-white">Transparencia:</strong> Todos pueden detectar intentos de manipulación</li>
              </ul>
            </div>

          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">📊 Tamaño y Crecimiento</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">Bitcoin</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>• <strong className="text-white">Tamaño de bloque:</strong> ~1-4 MB</p>
                <p>• <strong className="text-white">Tiempo entre bloques:</strong> ~10 minutos</p>
                <p>• <strong className="text-white">Transacciones por bloque:</strong> 2,000-3,000</p>
                <p>• <strong className="text-white">Blockchain completa:</strong> ~500 GB (Nov 2025)</p>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">Ethereum</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>• <strong className="text-white">Tamaño de bloque:</strong> Variable (~30 KB)</p>
                <p>• <strong className="text-white">Tiempo entre bloques:</strong> ~12 segundos</p>
                <p>• <strong className="text-white">Transacciones por bloque:</strong> 100-300</p>
                <p>• <strong className="text-white">Blockchain completa:</strong> ~1 TB (Nov 2025)</p>
              </div>
            </div>

          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-white mb-3">⚡ Concepto Clave</h3>
            <p className="text-gray-300">
              La cadena de bloques es como un <strong className="text-yellow-400">libro de contabilidad compartido e inalterable</strong>. Cada página (bloque) está sellada criptográficamente y enlazada con la anterior. Intentar modificar una página antigua requeriría reescribir todo el libro, mientras miles de personas verifican que no hagas trampa.
            </p>
          </div>

        </section>

        <section className="my-12 bg-gray-800/50 border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">📝 Resumen de la Lección</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span>Un bloque tiene <strong className="text-white">cabecera (metadata) y cuerpo (transacciones)</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span>Los bloques se enlazan mediante <strong className="text-white">hashes criptográficos</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span>Los <strong className="text-white">árboles de Merkle</strong> permiten verificación eficiente</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span>Modificar un bloque antiguo es <strong className="text-white">prácticamente imposible</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span>La seguridad viene del <strong className="text-white">efecto dominó criptográfico</strong></span></li>
          </ul>
        </section>

        <section className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-800">
          <Link href="/cursos/fundamentos-blockchain/leccion/1-3" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors">
            ← Lección Anterior
          </Link>
          <Link href="/cursos/fundamentos-blockchain/leccion/2-2" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
            Siguiente Lección →
          </Link>
        </section>

      </article>
    </main>
  )
}
