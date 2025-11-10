import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'La Blockchain de Bitcoin: El registro público - Bitcoin desde Cero | Nodo360',
  description: 'Aprende qué es la blockchain de Bitcoin, cómo funcionan los bloques, la minería, el halving, y por qué este registro es inmutable y descentralizado.',
  keywords: 'blockchain bitcoin, bloques bitcoin, mineria bitcoin, halving, proof of work, nodos bitcoin, descentralización',
  openGraph: {
    title: 'La Blockchain de Bitcoin: El registro público inmutable',
    description: 'El libro de contabilidad que nadie puede falsificar',
    type: 'article',
  }
};

export default function Leccion23() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900">
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cursos/bitcoin-desde-cero" className="text-orange-400 hover:text-orange-300 transition-colors">
              ← Volver al curso
            </Link>
            <div className="text-gray-400 text-sm">
              Módulo 2 • Lección 3 de 3
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        
        <div className="mb-8">
          <div className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
            Módulo 2: Cómo funciona Bitcoin
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            La Blockchain de Bitcoin
          </h1>
          <p className="text-xl text-gray-300">
            El registro público que nadie puede falsificar
          </p>
        </div>

        <section className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">¿Qué es la Blockchain?</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              La <strong className="text-white">blockchain</strong> (cadena de bloques) es un libro de contabilidad digital que registra todas las transacciones Bitcoin que han ocurrido desde su inicio en 2009. Es público, transparente, y nadie puede modificarlo o borrarlo.
            </p>
            <p>
              Imagina un libro de cuentas gigante donde cada página es un "bloque" con transacciones, y todas las páginas están encadenadas en orden cronológico. Cada 10 minutos se añade una nueva página, y una vez escrita, es imposible de cambiar.
            </p>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mt-6">
              <p className="text-orange-300 font-medium">
                💡 Analogía: La blockchain es como un libro de contabilidad público en una plaza del pueblo, donde todos pueden leer las transacciones pero nadie puede arrancar páginas ni modificar lo escrito.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Anatomía de un Bloque</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-6">
              <p className="text-gray-300">
                Cada bloque en la blockchain contiene varios componentes esenciales:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-3">📦 1. Block Header (Encabezado)</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Metadatos del bloque que incluyen:
                  </p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>→ <strong className="text-white">Block height:</strong> Número del bloque (ej: bloque 800,000)</li>
                    <li>→ <strong className="text-white">Timestamp:</strong> Fecha y hora de creación</li>
                    <li>→ <strong className="text-white">Previous block hash:</strong> Enlace al bloque anterior</li>
                    <li>→ <strong className="text-white">Merkle root:</strong> Resumen de todas las transacciones</li>
                    <li>→ <strong className="text-white">Nonce:</strong> Número usado en la minería</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-3">📝 2. Transacciones</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Lista de todas las transacciones incluidas en el bloque. Cada bloque puede contener ~2000-3000 transacciones.
                  </p>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded p-3">
                    <p className="text-blue-300 text-xs">
                      La primera transacción siempre es especial: es la coinbase transaction donde el minero recibe su recompensa.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-3">🔗 3. Hash del Bloque</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Una huella digital única del bloque. Cualquier cambio mínimo en el bloque produce un hash completamente diferente.
                  </p>
                  <div className="font-mono text-xs bg-black rounded p-3 break-all">
                    <div className="text-gray-400 mb-1">Ejemplo de hash:</div>
                    <div className="text-orange-400">000000000000000000021e558e8db6f87f9c96a25aae0012fb1bd1e4d1dfa1d5</div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded p-4 mt-6">
                <p className="text-orange-300 text-sm">
                  <strong>Dato curioso:</strong> El hash de cada bloque comienza con varios ceros. Cuantos más ceros, más difícil fue minarlo. Esto es parte del Proof of Work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">¿Cómo se encadenan los bloques?</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                Cada bloque contiene el hash del bloque anterior, creando una cadena inquebrantable. Si alguien intentara modificar un bloque antiguo, cambiaría su hash, rompiendo el enlace con el siguiente bloque.
              </p>

              <div className="bg-gray-900/50 rounded-lg p-6 my-6">
                <h4 className="text-white font-bold mb-4">Visualización de la cadena:</h4>
                <div className="space-y-3">
                  <div className="bg-blue-500/20 border-l-4 border-blue-500 pl-4 py-3">
                    <div className="font-mono text-sm">
                      <div className="text-blue-300 font-bold">Bloque #800,000</div>
                      <div className="text-gray-400 text-xs mt-1">Hash: 0000000000...abc123</div>
                      <div className="text-gray-400 text-xs">Previous: 0000000000...xyz789</div>
                    </div>
                  </div>
                  <div className="text-center text-orange-400">↓ Enlace criptográfico</div>
                  <div className="bg-blue-500/20 border-l-4 border-blue-500 pl-4 py-3">
                    <div className="font-mono text-sm">
                      <div className="text-blue-300 font-bold">Bloque #800,001</div>
                      <div className="text-gray-400 text-xs mt-1">Hash: 0000000000...def456</div>
                      <div className="text-gray-400 text-xs">Previous: 0000000000...abc123 ← Apunta al anterior</div>
                    </div>
                  </div>
                  <div className="text-center text-orange-400">↓ Enlace criptográfico</div>
                  <div className="bg-blue-500/20 border-l-4 border-blue-500 pl-4 py-3">
                    <div className="font-mono text-sm">
                      <div className="text-blue-300 font-bold">Bloque #800,002</div>
                      <div className="text-gray-400 text-xs mt-1">Hash: 0000000000...ghi789</div>
                      <div className="text-gray-400 text-xs">Previous: 0000000000...def456 ← Apunta al anterior</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                <h4 className="text-white font-bold mb-2">🔒 Por qué es inmutable:</h4>
                <p className="text-red-300 text-sm mb-2">
                  Si un atacante intenta cambiar una transacción en el bloque #800,000:
                </p>
                <ol className="text-red-300 text-sm space-y-1 ml-4">
                  <li>1. El hash del bloque #800,000 cambiaría</li>
                  <li>2. El bloque #800,001 ya no apuntaría al hash correcto</li>
                  <li>3. Tendría que recalcular todos los bloques posteriores</li>
                  <li>4. Imposible: habría que vencer al resto de la red (51% attack)</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Minería: Añadiendo bloques a la cadena</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">¿Qué es la minería?</h3>
              <p className="text-gray-300 mb-4">
                La <strong className="text-white">minería</strong> es el proceso computacional mediante el cual se añaden nuevos bloques a la blockchain. Los mineros compiten por resolver un puzzle matemático, y el primero en resolverlo añade el siguiente bloque y recibe una recompensa.
              </p>

              <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                <h4 className="text-white font-bold mb-4">Proceso de minería:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <p className="text-white font-medium">Recopilar transacciones</p>
                      <p className="text-gray-400 text-sm">El minero selecciona transacciones del mempool</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <p className="text-white font-medium">Crear bloque candidato</p>
                      <p className="text-gray-400 text-sm">Organiza las transacciones y prepara el header</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <p className="text-white font-medium">Resolver el puzzle (Proof of Work)</p>
                      <p className="text-gray-400 text-sm">Probar miles de millones de nonces hasta encontrar un hash válido</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                    <div>
                      <p className="text-white font-medium">Propagar el bloque</p>
                      <p className="text-gray-400 text-sm">Comparte el bloque con el resto de la red</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">5</div>
                    <div>
                      <p className="text-white font-medium">Recibir recompensa</p>
                      <p className="text-gray-400 text-sm">Block reward + fees de las transacciones</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded p-4">
                <p className="text-blue-300 text-sm">
                  <strong>Proof of Work:</strong> El minero debe encontrar un nonce que, al incluirlo en el header del bloque, produzca un hash que comience con cierto número de ceros. Es pura fuerza bruta computacional.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Recompensa del minero</h3>
              <p className="text-gray-300 mb-4">
                Los mineros reciben dos tipos de recompensas por cada bloque minado:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
                  <h4 className="text-white font-bold mb-2">🎁 Block Reward (Subsidy)</h4>
                  <p className="text-gray-400 text-sm mb-2">
                    Nuevos bitcoins creados de la nada. Actualmente: 3.125 BTC por bloque (2024).
                  </p>
                  <p className="text-green-300 text-xs">
                    Esta cantidad se reduce a la mitad cada ~4 años (halving).
                  </p>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded p-4">
                  <h4 className="text-white font-bold mb-2">💰 Transaction Fees</h4>
                  <p className="text-gray-400 text-sm mb-2">
                    Suma de todas las fees de las transacciones incluidas en el bloque.
                  </p>
                  <p className="text-blue-300 text-xs">
                    Varía según congestión, típicamente 0.1-2 BTC adicionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">El Halving</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                El <strong className="text-white">halving</strong> (reducción a la mitad) es un evento programado que ocurre cada 210,000 bloques (aproximadamente cada 4 años) donde la recompensa del bloque se reduce a la mitad.
              </p>

              <div className="bg-gray-900/50 rounded-lg p-6 my-6">
                <h4 className="text-white font-bold mb-4">Historia de halvings:</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
                    <span className="text-gray-400">2009-2012:</span>
                    <span className="text-orange-400 font-bold">50 BTC por bloque</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
                    <span className="text-gray-400">2012-2016:</span>
                    <span className="text-orange-400 font-bold">25 BTC por bloque</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
                    <span className="text-gray-400">2016-2020:</span>
                    <span className="text-orange-400 font-bold">12.5 BTC por bloque</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
                    <span className="text-gray-400">2020-2024:</span>
                    <span className="text-orange-400 font-bold">6.25 BTC por bloque</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-500/20 border border-green-500/50 rounded">
                    <span className="text-white font-bold">2024-2028:</span>
                    <span className="text-green-400 font-bold">3.125 BTC por bloque ← Actual</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-500/10 rounded">
                    <span className="text-gray-400">2028-2032:</span>
                    <span className="text-blue-400 font-bold">1.5625 BTC por bloque</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded">
                    <span className="text-gray-400">~2140:</span>
                    <span className="text-gray-400">0 BTC (último bitcoin minado)</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded p-4">
                <h4 className="text-white font-bold mb-2">¿Por qué existe el halving?</h4>
                <ul className="text-orange-300 text-sm space-y-2">
                  <li>→ <strong>Escasez controlada:</strong> Limita el suministro total a 21 millones de BTC</li>
                  <li>→ <strong>Deflacionario:</strong> Reduce la inflación de Bitcoin gradualmente</li>
                  <li>→ <strong>Incentivo a largo plazo:</strong> Fuerza a los mineros a depender más de fees</li>
                  <li>→ <strong>Efecto precio:</strong> Históricamente ha precedido grandes alzas de precio</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Nodos: Los guardianes de la red</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                Un <strong className="text-white">nodo</strong> es una computadora que mantiene una copia completa de la blockchain y valida todas las transacciones y bloques. Son los verdaderos guardianes de la descentralización de Bitcoin.
              </p>

              <div className="bg-gray-900/50 rounded-lg p-6 my-6">
                <h4 className="text-white font-bold mb-4">Tipos de nodos:</h4>
                <div className="space-y-3">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded p-4">
                    <h5 className="text-white font-medium mb-2">Full Nodes (Nodos completos)</h5>
                    <p className="text-gray-400 text-sm mb-2">
                      Mantienen una copia completa de toda la blockchain (~600 GB en 2024). Validan todas las reglas de consenso.
                    </p>
                    <p className="text-blue-300 text-xs">
                      ✓ No confían en nadie, verifican todo ellos mismos
                    </p>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
                    <h5 className="text-white font-medium mb-2">Pruned Nodes (Nodos podados)</h5>
                    <p className="text-gray-400 text-sm mb-2">
                      Solo guardan bloques recientes (~10-100 GB). Igual de seguros pero ahorran espacio.
                    </p>
                    <p className="text-green-300 text-xs">
                      ✓ Ideal para usuarios con espacio limitado
                    </p>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/30 rounded p-4">
                    <h5 className="text-white font-medium mb-2">Mining Nodes (Nodos mineros)</h5>
                    <p className="text-gray-400 text-sm mb-2">
                      Nodos completos que además minan (crean nuevos bloques).
                    </p>
                    <p className="text-purple-300 text-xs">
                      → Requieren hardware especializado (ASICs)
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-4">
                    <h5 className="text-white font-medium mb-2">Light Nodes / SPV (Wallets ligeras)</h5>
                    <p className="text-gray-400 text-sm mb-2">
                      No guardan la blockchain completa, confían en full nodes para validar.
                    </p>
                    <p className="text-yellow-300 text-xs">
                      ⚠️ Menos seguros pero muy convenientes (apps móviles)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded p-4">
                <h4 className="text-white font-bold mb-2">¿Por qué son importantes los nodos?</h4>
                <ul className="text-orange-300 text-sm space-y-2">
                  <li>→ <strong>Descentralización:</strong> Más nodos = más difícil censurar o atacar</li>
                  <li>→ <strong>Validación:</strong> Verifican que las reglas de Bitcoin se cumplan</li>
                  <li>→ <strong>Soberanía:</strong> Si corres tu nodo, no dependes de nadie</li>
                  <li>→ <strong>Propagación:</strong> Distribuyen transacciones y bloques por la red</li>
                </ul>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded p-4 mt-4">
                <p className="text-green-300 text-sm">
                  <strong>Dato importante:</strong> Puedes correr tu propio nodo con una Raspberry Pi (~$200). Esto te da máxima privacidad y seguridad.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Datos curiosos de la Blockchain</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-white font-bold mb-2">Tamaño actual</h3>
              <p className="text-gray-400 text-sm">
                La blockchain de Bitcoin pesa más de 600 GB (y sigue creciendo ~150 GB/año).
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="text-white font-bold mb-2">Tiempo de bloque</h3>
              <p className="text-gray-400 text-sm">
                Un nuevo bloque se mina cada ~10 minutos en promedio. La dificultad se ajusta cada 2016 bloques.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">🔢</div>
              <h3 className="text-white font-bold mb-2">Bloques totales</h3>
              <p className="text-gray-400 text-sm">
                Se han minado más de 860,000 bloques desde 2009 (a noviembre 2024).
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="text-3xl mb-3">💎</div>
              <h3 className="text-white font-bold mb-2">Bloque Génesis</h3>
              <p className="text-gray-400 text-sm">
                El primer bloque fue minado el 3 de enero de 2009 por Satoshi Nakamoto.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>📌</span>
              <span>Resumen de la lección</span>
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>La blockchain es un registro público inmutable de todas las transacciones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Los bloques se encadenan usando hashes criptográficos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>La minería es el proceso de añadir bloques mediante Proof of Work</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>El halving reduce la emisión de BTC cada 4 años</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Los nodos validan y protegen la descentralización</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Un nuevo bloque se mina cada ~10 minutos</span>
              </li>
            </ul>
          </div>
        </section>

        <nav className="flex justify-between items-center pt-8 border-t border-gray-700">
          <Link 
            href="/cursos/bitcoin-desde-cero/leccion/2-2"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span>←</span>
            <span>Anterior: Transacciones</span>
          </Link>
          
          <Link 
            href="/cursos/bitcoin-desde-cero"
            className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
          >
            <span>Volver al curso</span>
            <span>→</span>
          </Link>
        </nav>

      </main>

      <footer className="border-t border-gray-800 mt-12 py-8 bg-gray-900/50">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Nodo360 - Educación en Blockchain y Bitcoin</p>
        </div>
      </footer>
    </div>
  );
}
