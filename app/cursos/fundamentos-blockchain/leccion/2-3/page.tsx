import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lección 2.3: Nodos y Red P2P | Fundamentos de Blockchain - Nodo360',
  description: 'Entiende cómo funcionan los nodos, la red peer-to-peer y cómo se mantiene sincronizada la blockchain globalmente.',
  keywords: 'nodos blockchain, red p2p, peer to peer, nodos completos, nodos ligeros, sincronización blockchain, propagación bloques',
  openGraph: {
    title: 'Nodos y Red P2P | Fundamentos de Blockchain',
    description: 'Cómo funcionan los nodos, tipos de nodos y cómo se mantiene sincronizada la red blockchain globalmente.',
    type: 'article',
  }
}

export default function Leccion23BlockchainPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/cursos" className="hover:text-blue-400 transition-colors">Cursos</Link>
            <span>/</span>
            <Link href="/cursos/fundamentos-blockchain" className="hover:text-blue-400 transition-colors">Fundamentos de Blockchain</Link>
            <span>/</span>
            <span className="text-white">Lección 2.3</span>
          </nav>
          
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">MÓDULO 2</span>
            <span className="text-gray-400 text-sm">16 minutos</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white">Nodos y Red P2P</h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <section className="mb-12">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-3">📚 En esta lección aprenderás:</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>Qué son los nodos y para qué sirven</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>Tipos de nodos en la red blockchain</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>Cómo funciona una red peer-to-peer</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>Sincronización y propagación de bloques</span></li>
            </ul>
          </div>
        </section>

        <section className="prose prose-invert max-w-none">
          
          <h2 className="text-2xl font-bold text-white mb-4">🖥️ ¿Qué es un Nodo?</h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Un <strong className="text-white">nodo</strong> es simplemente una computadora que ejecuta el software de blockchain (como Bitcoin Core) y participa en la red validando y propagando transacciones y bloques.
          </p>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">💡 Analogía Simple</h3>
            <p className="text-gray-300">
              Piensa en los nodos como <strong className="text-blue-400">bibliotecarios en una red global de bibliotecas</strong>. Cada bibliotecario tiene una copia completa del mismo libro (la blockchain) y cuando alguien añade una nueva página, todos verifican que sea correcta antes de añadirla a sus copias.
            </p>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">Funciones de un Nodo</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-5">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>✓</span> Validar
              </h4>
              <p className="text-gray-300 text-sm">
                Verifica que todas las transacciones y bloques sigan las reglas del protocolo.
              </p>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-5">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>📡</span> Propagar
              </h4>
              <p className="text-gray-300 text-sm">
                Transmite transacciones y bloques válidos a otros nodos conectados.
              </p>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-5">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>💾</span> Almacenar
              </h4>
              <p className="text-gray-300 text-sm">
                Mantiene una copia de la blockchain (completa o parcial según el tipo).
              </p>
            </div>

            <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-5">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>🔗</span> Conectar
              </h4>
              <p className="text-gray-300 text-sm">
                Se comunica con otros nodos para mantener la red sincronizada.
              </p>
            </div>

          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">📊 Tipos de Nodos</h2>

          <div className="space-y-6 mb-8">
            
            <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 border-l-4 border-blue-500 p-6 rounded">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔷</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Full Nodes (Nodos Completos)</h3>
                  <p className="text-gray-300 mb-3">
                    Mantienen una <strong className="text-blue-400">copia completa</strong> de toda la blockchain desde el bloque génesis.
                  </p>
                  <div className="bg-blue-900/30 rounded p-4 mb-3">
                    <p className="text-white font-bold mb-2">Características:</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Validan TODAS las transacciones y bloques</li>
                      <li>• No confían en nadie, verifican todo ellos mismos</li>
                      <li>• Requieren ~500 GB de almacenamiento (Bitcoin)</li>
                      <li>• Son la columna vertebral de la red</li>
                    </ul>
                  </div>
                  <p className="text-gray-400 text-sm">
                    <strong>Ejemplo:</strong> Bitcoin Core, btcd
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 border-l-4 border-green-500 p-6 rounded">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔶</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Light Nodes (Nodos Ligeros / SPV)</h3>
                  <p className="text-gray-300 mb-3">
                    Solo descargan las <strong className="text-green-400">cabeceras de los bloques</strong>, no todas las transacciones.
                  </p>
                  <div className="bg-green-900/30 rounded p-4 mb-3">
                    <p className="text-white font-bold mb-2">Características:</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Verifican usando Merkle Proofs</li>
                      <li>• Requieren ~10 MB de almacenamiento</li>
                      <li>• Perfectos para móviles</li>
                      <li>• Confían parcialmente en full nodes</li>
                    </ul>
                  </div>
                  <p className="text-gray-400 text-sm">
                    <strong>Ejemplo:</strong> Electrum, Muun Wallet
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 border-l-4 border-purple-500 p-6 rounded">
              <div className="flex items-start gap-4">
                <div className="text-4xl">⛏️</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Mining Nodes (Nodos Mineros)</h3>
                  <p className="text-gray-300 mb-3">
                    Full nodes que además <strong className="text-purple-400">participan en la minería</strong> creando nuevos bloques.
                  </p>
                  <div className="bg-purple-900/30 rounded p-4 mb-3">
                    <p className="text-white font-bold mb-2">Características:</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Realizan Proof of Work</li>
                      <li>• Crean nuevos bloques</li>
                      <li>• Requieren hardware especializado (ASICs)</li>
                      <li>• Reciben recompensas por bloque</li>
                    </ul>
                  </div>
                  <p className="text-gray-400 text-sm">
                    <strong>Ejemplo:</strong> Pools de minería como F2Pool, AntPool
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-900/30 to-orange-800/30 border-l-4 border-orange-500 p-6 rounded">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🗂️</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Archive Nodes (Nodos de Archivo)</h3>
                  <p className="text-gray-300 mb-3">
                    Guardan <strong className="text-orange-400">todos los estados históricos</strong> de la blockchain, no solo el actual.
                  </p>
                  <div className="bg-orange-900/30 rounded p-4 mb-3">
                    <p className="text-white font-bold mb-2">Características:</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Almacenan toda la historia de estados</li>
                      <li>• Útiles para exploradores de blockchain</li>
                      <li>• Requieren TB de almacenamiento</li>
                      <li>• Consultas históricas rápidas</li>
                    </ul>
                  </div>
                  <p className="text-gray-400 text-sm">
                    <strong>Ejemplo:</strong> Etherscan, Blockchair
                  </p>
                </div>
              </div>
            </div>

          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">🌐 Red Peer-to-Peer (P2P)</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Blockchain funciona en una <strong className="text-white">red peer-to-peer</strong>, donde no hay servidores centrales. Todos los nodos son iguales y se comunican directamente entre sí.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">❌ Red Centralizada</h3>
              <div className="bg-black/50 rounded p-4 mb-3 text-center">
                <div className="text-4xl mb-2">🏢</div>
                <p className="text-gray-400 text-sm">Servidor Central</p>
                <div className="flex justify-center gap-2 mt-3">
                  <span>👤</span><span>👤</span><span>👤</span><span>👤</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Punto único de fallo</li>
                <li>• Puede ser censurado</li>
                <li>• Control total de una entidad</li>
              </ul>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">✓ Red P2P (Blockchain)</h3>
              <div className="bg-black/50 rounded p-4 mb-3 text-center">
                <div className="flex justify-center flex-wrap gap-2">
                  <span>👤</span><span>↔️</span><span>👤</span>
                </div>
                <div className="flex justify-center flex-wrap gap-2 mt-2">
                  <span>👤</span><span>↔️</span><span>👤</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Sin punto único de fallo</li>
                <li>• Resistente a censura</li>
                <li>• Control distribuido</li>
              </ul>
            </div>

          </div>

          <h3 className="text-xl font-bold text-white mb-4">Cómo se Descubren los Nodos</h3>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8">
            <p className="text-gray-300 mb-4">
              Cuando inicias un nodo por primera vez, ¿cómo encuentra a otros nodos para conectarse?
            </p>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="bg-blue-900/20 rounded p-3">
                <p className="font-bold text-white">1. DNS Seeds</p>
                <p>Servidores DNS que mantienen listas de nodos activos conocidos</p>
              </div>
              <div className="bg-blue-900/20 rounded p-3">
                <p className="font-bold text-white">2. Hardcoded Nodes</p>
                <p>Lista de nodos confiables incluida en el software</p>
              </div>
              <div className="bg-blue-900/20 rounded p-3">
                <p className="font-bold text-white">3. Peer Exchange</p>
                <p>Los nodos comparten direcciones de otros nodos entre sí</p>
              </div>
              <div className="bg-blue-900/20 rounded p-3">
                <p className="font-bold text-white">4. Manual</p>
                <p>Puedes añadir manualmente direcciones IP de nodos</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">📡 Propagación de Transacciones y Bloques</h2>

          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Flujo de una Transacción</h3>
            
            <div className="space-y-4">
              <div className="bg-blue-900/30 rounded p-4">
                <p className="font-bold text-white mb-2">Paso 1: Creación</p>
                <p className="text-gray-300 text-sm">Usuario crea y firma una transacción en su wallet</p>
              </div>
              
              <div className="text-center text-blue-400">↓</div>
              
              <div className="bg-blue-900/30 rounded p-4">
                <p className="font-bold text-white mb-2">Paso 2: Broadcast</p>
                <p className="text-gray-300 text-sm">La wallet envía la transacción a nodos conectados</p>
              </div>
              
              <div className="text-center text-blue-400">↓</div>
              
              <div className="bg-blue-900/30 rounded p-4">
                <p className="font-bold text-white mb-2">Paso 3: Validación</p>
                <p className="text-gray-300 text-sm">Cada nodo verifica: firma válida, fondos suficientes, no doble gasto</p>
              </div>
              
              <div className="text-center text-blue-400">↓</div>
              
              <div className="bg-blue-900/30 rounded p-4">
                <p className="font-bold text-white mb-2">Paso 4: Mempool</p>
                <p className="text-gray-300 text-sm">Si es válida, se añade al mempool (cola de transacciones pendientes)</p>
              </div>
              
              <div className="text-center text-blue-400">↓</div>
              
              <div className="bg-blue-900/30 rounded p-4">
                <p className="font-bold text-white mb-2">Paso 5: Propagación</p>
                <p className="text-gray-300 text-sm">Los nodos retransmiten a sus vecinos (efecto cascada)</p>
              </div>
              
              <div className="text-center text-blue-400">↓</div>
              
              <div className="bg-green-900/30 rounded p-4">
                <p className="font-bold text-white mb-2">Paso 6: Inclusión en Bloque</p>
                <p className="text-gray-300 text-sm">Un minero incluye la transacción en un nuevo bloque</p>
              </div>
            </div>

            <div className="bg-yellow-900/20 rounded p-4 mt-4">
              <p className="text-sm text-gray-300">
                <strong className="text-white">Tiempo típico:</strong> La transacción llega al 95% de los nodos en menos de 10 segundos
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">Propagación de Bloques</h3>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8">
            <p className="text-gray-300 mb-4">
              Cuando un minero encuentra un nuevo bloque:
            </p>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>1. <strong className="text-white">Anuncia</strong> el nuevo bloque a nodos conectados</p>
              <p>2. Cada nodo <strong className="text-white">valida</strong> el bloque completo</p>
              <p>3. Si es válido, lo <strong className="text-white">añade</strong> a su cadena local</p>
              <p>4. <strong className="text-white">Propaga</strong> el bloque a sus vecinos</p>
              <p>5. En ~12 segundos alcanza el 50% de la red</p>
              <p>6. En ~30 segundos alcanza el 95% de la red</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">🔄 Sincronización de Nodos</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Cuando un nuevo nodo se une a la red o ha estado offline, debe ponerse al día con la blockchain.
          </p>

          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Proceso de Sincronización Inicial</h3>
            <div className="space-y-3 text-gray-300">
              <p>1. <strong className="text-white">Descubrimiento:</strong> Encuentra nodos activos</p>
              <p>2. <strong className="text-white">Headers-First:</strong> Descarga primero todas las cabeceras de bloques</p>
              <p>3. <strong className="text-white">Verificación:</strong> Verifica que la cadena de headers sea válida</p>
              <p>4. <strong className="text-white">Download:</strong> Descarga bloques completos en paralelo de múltiples nodos</p>
              <p>5. <strong className="text-white">Validación:</strong> Valida cada bloque y transacción</p>
              <p>6. <strong className="text-white">Indexado:</strong> Construye índices para búsquedas rápidas</p>
            </div>
            <div className="bg-blue-900/20 rounded p-3 mt-4">
              <p className="text-sm text-gray-300">
                <strong className="text-white">Tiempo:</strong> Sincronizar Bitcoin completo puede tomar 1-7 días dependiendo del hardware y conexión
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">📈 Estado Actual de la Red</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">~17,000</div>
              <h4 className="font-bold text-white mb-2">Nodos Bitcoin</h4>
              <p className="text-gray-400 text-sm">Alcanzables públicamente</p>
              <p className="text-gray-500 text-xs mt-2">(Noviembre 2025)</p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">~7,000</div>
              <h4 className="font-bold text-white mb-2">Nodos Ethereum</h4>
              <p className="text-gray-400 text-sm">Alcanzables públicamente</p>
              <p className="text-gray-500 text-xs mt-2">(Noviembre 2025)</p>
            </div>

          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-white mb-3">🎯 Concepto Clave</h3>
            <p className="text-gray-300">
              Los nodos son los <strong className="text-yellow-400">guardianes de la descentralización</strong>. Cuantos más nodos independientes haya, más difícil es censurar o controlar la red. Ejecutar tu propio nodo significa que no confías en nadie más para validar tus transacciones.
            </p>
          </div>

        </section>

        <section className="my-12 bg-gray-800/50 border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">📝 Resumen de la Lección</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span>Los <strong className="text-white">nodos</strong> validan, almacenan y propagan la blockchain</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span><strong className="text-white">Full nodes</strong> tienen copia completa, <strong className="text-white">light nodes</strong> solo cabeceras</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span>La <strong className="text-white">red P2P</strong> no tiene servidores centrales</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span>Las transacciones se <strong className="text-white">propagan en segundos</strong> a toda la red</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span>Más nodos = <strong className="text-white">más descentralización y seguridad</strong></span></li>
          </ul>
        </section>

        <section className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-800">
          <Link href="/cursos/fundamentos-blockchain/leccion/2-2" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors">
            ← Lección Anterior
          </Link>
          <Link href="/cursos/fundamentos-blockchain/leccion/3-1" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
            Siguiente Módulo →
          </Link>
        </section>

      </article>
    </main>
  )
}
