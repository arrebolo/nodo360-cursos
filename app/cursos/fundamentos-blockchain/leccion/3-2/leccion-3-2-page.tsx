import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Proof of Stake (PoS) - Fundamentos de Blockchain | Nodo360',
  description: 'Descubre cómo funciona Proof of Stake, el mecanismo de consenso alternativo a PoW. Aprende sobre staking, validadores, Ethereum 2.0 y sus ventajas.',
  keywords: 'proof of stake, pos, staking, ethereum 2.0, validadores, consenso blockchain, eth staking',
  openGraph: {
    title: 'Proof of Stake (PoS) - Fundamentos de Blockchain',
    description: 'El mecanismo de consenso que está transformando las blockchains: más eficiente y sostenible',
    type: 'article',
  }
};

export default function Leccion32() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cursos/fundamentos-blockchain" className="text-purple-400 hover:text-purple-300 transition-colors">
              ← Volver al curso
            </Link>
            <div className="text-gray-400 text-sm">
              Módulo 3 • Lección 2 de 3
            </div>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        
        {/* Título */}
        <div className="mb-8">
          <div className="inline-block px-4 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mb-4">
            Módulo 3: Consenso y Validación
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proof of Stake (PoS)
          </h1>
          <p className="text-xl text-gray-300">
            La evolución del consenso: más eficiente, escalable y sostenible
          </p>
        </div>

        {/* Introducción */}
        <section className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">¿Qué es Proof of Stake?</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong className="text-white">Proof of Stake (PoS)</strong> o "Prueba de Participación" es un mecanismo de consenso alternativo al Proof of Work. En lugar de competir con poder computacional, los validadores son seleccionados para crear bloques en función de la cantidad de criptomonedas que tienen "en juego" (staked).
            </p>
            <p>
              La idea fundamental es simple: si tienes una participación económica significativa en la red, tienes incentivos para comportarte honestamente. Actuar maliciosamente significaría perder tu propia inversión.
            </p>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mt-6">
              <p className="text-purple-300 font-medium">
                💡 Analogía: En lugar de demostrar que gastaste electricidad (PoW), demuestras que tienes "piel en el juego" bloqueando tu propio dinero como garantía.
              </p>
            </div>
          </div>
        </section>

        {/* Diferencias clave con PoW */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Diferencias clave con Proof of Work</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-bold">Característica</th>
                  <th className="px-6 py-4 text-left text-blue-400 font-bold">Proof of Work</th>
                  <th className="px-6 py-4 text-left text-purple-400 font-bold">Proof of Stake</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4 font-medium text-white">Selección</td>
                  <td className="px-6 py-4">Poder computacional</td>
                  <td className="px-6 py-4">Cantidad de tokens en stake</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4 font-medium text-white">Energía</td>
                  <td className="px-6 py-4">Alto consumo</td>
                  <td className="px-6 py-4">99.95% menos energía</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4 font-medium text-white">Hardware</td>
                  <td className="px-6 py-4">ASICs especializados</td>
                  <td className="px-6 py-4">Computadora normal</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4 font-medium text-white">Inversión inicial</td>
                  <td className="px-6 py-4">Muy alta (equipo + electricidad)</td>
                  <td className="px-6 py-4">Media (solo tokens)</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4 font-medium text-white">Velocidad</td>
                  <td className="px-6 py-4">~10 min/bloque (Bitcoin)</td>
                  <td className="px-6 py-4">~12 seg/bloque (Ethereum)</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4 font-medium text-white">Escalabilidad</td>
                  <td className="px-6 py-4">Limitada (~7 tx/s)</td>
                  <td className="px-6 py-4">Mayor potencial (hasta miles tx/s)</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4 font-medium text-white">Penalización</td>
                  <td className="px-6 py-4">Pérdida de electricidad gastada</td>
                  <td className="px-6 py-4">Slashing (pérdida de tokens)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cómo funciona PoS */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">¿Cómo funciona Proof of Stake?</h2>
          
          <div className="space-y-6">
            {/* Paso 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Hacer staking</h3>
                  <p className="text-gray-300 mb-3">
                    Para convertirse en validador, debes "bloquear" (stake) una cantidad mínima de criptomonedas en un smart contract. Esta cantidad varía según la blockchain:
                  </p>
                  <div className="bg-gray-900/50 rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Ethereum 2.0:</span>
                      <span className="text-purple-400 font-mono">32 ETH (~$60,000 USD)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Cardano:</span>
                      <span className="text-purple-400 font-mono">Sin mínimo para delegar</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Polkadot:</span>
                      <span className="text-purple-400 font-mono">~250 DOT</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Solana:</span>
                      <span className="text-purple-400 font-mono">Sin mínimo técnico</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-3">
                    Tus tokens quedan bloqueados y no los puedes usar mientras estés validando.
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Selección del validador</h3>
                  <p className="text-gray-300 mb-3">
                    El protocolo selecciona validadores para proponer nuevos bloques. La selección suele ser pseudo-aleatoria pero ponderada por:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">→</span>
                      <span><strong className="text-white">Cantidad en stake:</strong> Más tokens = mayor probabilidad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">→</span>
                      <span><strong className="text-white">Tiempo en stake:</strong> Antigüedad puede dar ventaja</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">→</span>
                      <span><strong className="text-white">Aleatoriedad:</strong> Para evitar predicción y manipulación</span>
                    </li>
                  </ul>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mt-4">
                    <p className="text-purple-300 text-sm">
                      <strong>Nota:</strong> Algunos sistemas como Ethereum rotan validadores frecuentemente para maximizar la descentralización.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Proponer y validar bloques</h3>
                  <p className="text-gray-300 mb-3">
                    Una vez seleccionado, el validador:
                  </p>
                  <ol className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 font-bold">A.</span>
                      <span>Recopila transacciones pendientes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 font-bold">B.</span>
                      <span>Crea un bloque candidato</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 font-bold">C.</span>
                      <span>Lo firma digitalmente con su clave privada</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 font-bold">D.</span>
                      <span>Lo propaga a la red</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 font-bold">E.</span>
                      <span>Otros validadores verifican y aprueban el bloque</span>
                    </li>
                  </ol>
                  <p className="text-gray-400 text-sm mt-4">
                    No hay "competencia" como en PoW. El validador seleccionado simplemente crea el bloque.
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Recompensas</h3>
                  <p className="text-gray-300 mb-3">
                    Si el validador actúa correctamente, recibe recompensas:
                  </p>
                  <div className="space-y-3 text-gray-300">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <p className="font-medium text-white mb-2">✅ Recompensas por validar:</p>
                      <ul className="space-y-1 text-sm ml-4">
                        <li>→ Nuevos tokens emitidos (inflación)</li>
                        <li>→ Fees de las transacciones</li>
                        <li>→ MEV (Maximal Extractable Value) en algunos casos</li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-400">
                      Rendimientos típicos: 4-10% APY dependiendo de la red
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Penalizaciones (Slashing)</h3>
                  <p className="text-gray-300 mb-3">
                    Si un validador actúa maliciosamente o es negligente, sufre <strong className="text-white">slashing</strong>: pérdida de una parte de sus tokens en stake.
                  </p>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="font-medium text-white mb-3">Conductas que causan slashing:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400">❌</span>
                        <span><strong className="text-white">Double signing:</strong> Firmar dos bloques distintos para la misma altura</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400">❌</span>
                        <span><strong className="text-white">Estar offline:</strong> No responder cuando te toca validar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400">❌</span>
                        <span><strong className="text-white">Validar transacciones inválidas:</strong> Aprobar bloques fraudulentos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400">❌</span>
                        <span><strong className="text-white">Ataques coordinados:</strong> Intentar reorganizar la cadena</span>
                      </li>
                    </ul>
                    <p className="text-red-300 mt-4 text-sm">
                      <strong>Penalización típica:</strong> Pérdida de 0.5 ETH hasta la totalidad de tu stake (32 ETH) en casos graves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Staking: Solo vs Pools */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Formas de hacer Staking</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🏠</span>
                <span>Solo Staking</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Ejecutas tu propio nodo validador en tu hardware.
              </p>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-green-400 font-medium mb-2">✅ Ventajas:</p>
                  <ul className="space-y-1 text-gray-300 ml-4">
                    <li>→ Control total de tus fondos</li>
                    <li>→ Máximas recompensas (sin comisiones)</li>
                    <li>→ Contribuyes directamente a descentralización</li>
                    <li>→ Sin confianza en terceros</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p className="text-red-400 font-medium mb-2">❌ Desventajas:</p>
                  <ul className="space-y-1 text-gray-300 ml-4">
                    <li>→ Requiere mínimo 32 ETH (~$60k)</li>
                    <li>→ Conocimientos técnicos necesarios</li>
                    <li>→ Hardware dedicado 24/7</li>
                    <li>→ Riesgo de slashing si fallas</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🏊</span>
                <span>Staking Pools</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Delegas tus tokens a un validador profesional.
              </p>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-green-400 font-medium mb-2">✅ Ventajas:</p>
                  <ul className="space-y-1 text-gray-300 ml-4">
                    <li>→ Puedes participar con cualquier cantidad</li>
                    <li>→ Sin conocimientos técnicos</li>
                    <li>→ Sin hardware ni mantenimiento</li>
                    <li>→ Liquidez inmediata (en algunos casos)</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p className="text-red-400 font-medium mb-2">❌ Desventajas:</p>
                  <ul className="space-y-1 text-gray-300 ml-4">
                    <li>→ Comisiones (5-25% de recompensas)</li>
                    <li>→ Debes confiar en el operador</li>
                    <li>→ Menos contribución a descentralización</li>
                    <li>→ Riesgo de mal comportamiento del pool</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-3">Liquid Staking</h3>
            <p className="text-gray-300 mb-3">
              Una innovación reciente: servicios como Lido, Rocket Pool y otros te permiten hacer staking y recibir un token derivado (ej: stETH) que puedes usar en DeFi mientras tus ETH siguen generando rendimientos.
            </p>
            <p className="text-blue-300 text-sm">
              <strong>Ventaja principal:</strong> No sacrificas liquidez por rendimiento.
            </p>
          </div>
        </section>

        {/* Ethereum 2.0 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Ethereum 2.0: La Gran Transición</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                El caso más importante de Proof of Stake es <strong className="text-white">Ethereum</strong>, que completó su transición de PoW a PoS el 15 de septiembre de 2022 (evento conocido como "The Merge").
              </p>

              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Impacto de The Merge</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">-99.95%</div>
                    <div className="text-sm text-gray-400">Reducción en consumo energético</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">-90%</div>
                    <div className="text-sm text-gray-400">Reducción en emisión de ETH</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">4-10%</div>
                    <div className="text-sm text-gray-400">APY para stakers</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Características de Ethereum PoS:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 text-xl">→</span>
                    <div>
                      <strong className="text-white">Época y Slots:</strong>
                      <p className="text-sm text-gray-400">32 slots de 12 segundos = 1 época (6.4 minutos)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 text-xl">→</span>
                    <div>
                      <strong className="text-white">Comités:</strong>
                      <p className="text-sm text-gray-400">Los validadores se dividen en comités para cada slot</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 text-xl">→</span>
                    <div>
                      <strong className="text-white">Finalidad:</strong>
                      <p className="text-sm text-gray-400">Un bloque es "finalizado" después de 2 épocas (~13 minutos)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 text-xl">→</span>
                    <div>
                      <strong className="text-white">Beacon Chain:</strong>
                      <p className="text-sm text-gray-400">Coordina todos los validadores y gestiona el consenso</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-300 text-sm">
                  <strong>Dato importante:</strong> Actualmente hay más de 1 millón de validadores en Ethereum, con más de 32 millones de ETH en stake (~$60 mil millones USD).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ventajas y Desventajas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Ventajas y Desventajas de PoS</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <span>✅</span>
                <span>Ventajas</span>
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">●</span>
                  <span><strong className="text-white">Eficiencia energética:</strong> 99.95% menos energía que PoW</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">●</span>
                  <span><strong className="text-white">Mayor escalabilidad:</strong> Facilita sharding y otras mejoras</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">●</span>
                  <span><strong className="text-white">Menor barrera de entrada:</strong> No necesitas hardware costoso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">●</span>
                  <span><strong className="text-white">Velocidad:</strong> Bloques más rápidos y finalidad más rápida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">●</span>
                  <span><strong className="text-white">Rendimientos pasivos:</strong> Los holders pueden ganar con sus tokens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">●</span>
                  <span><strong className="text-white">Costo de ataque:</strong> Atacar es económicamente destructivo</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                <span>❌</span>
                <span>Desventajas</span>
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">●</span>
                  <span><strong className="text-white">Menos probado:</strong> Historia más corta que PoW</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">●</span>
                  <span><strong className="text-white">Riesgo de centralización:</strong> Los ricos se vuelven más ricos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">●</span>
                  <span><strong className="text-white">Nothing at stake:</strong> Problema teórico de validación múltiple</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">●</span>
                  <span><strong className="text-white">Bloqueo de liquidez:</strong> Tokens no disponibles durante stake</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">●</span>
                  <span><strong className="text-white">Complejidad:</strong> Protocolos más complejos = más vectores de ataque</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">●</span>
                  <span><strong className="text-white">Distribución inicial:</strong> Depende de cómo se distribuyeron los tokens</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Resumen */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>📌</span>
              <span>Resumen de la lección</span>
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">→</span>
                <span>PoS selecciona validadores según tokens en stake, no poder computacional</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">→</span>
                <span>Es 99.95% más eficiente energéticamente que PoW</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">→</span>
                <span>Los validadores pueden perder sus tokens por mal comportamiento (slashing)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">→</span>
                <span>Ethereum completó su transición a PoS en septiembre 2022</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">→</span>
                <span>Puedes hacer staking solo, en pools, o con liquid staking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">→</span>
                <span>Es más escalable que PoW pero tiene diferentes trade-offs de seguridad</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Navegación */}
        <nav className="flex justify-between items-center pt-8 border-t border-gray-700">
          <Link 
            href="/cursos/fundamentos-blockchain/leccion/3-1"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span>←</span>
            <span>Anterior: Proof of Work</span>
          </Link>
          
          <Link 
            href="/cursos/fundamentos-blockchain/leccion/3-3"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            <span>Siguiente: Otros Mecanismos</span>
            <span>→</span>
          </Link>
        </nav>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-12 py-8 bg-gray-900/50">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Nodo360 - Educación en Blockchain y Bitcoin</p>
        </div>
      </footer>
    </div>
  );
}
