import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Otros Mecanismos de Consenso - Fundamentos de Blockchain | Nodo360',
  description: 'Explora mecanismos de consenso alternativos: Proof of Authority, Proof of History, DPoS y más. Comparación completa de ventajas y casos de uso.',
  keywords: 'proof of authority, proof of history, dpos, consenso blockchain, poa, solana, eos, bsc',
  openGraph: {
    title: 'Otros Mecanismos de Consenso - Fundamentos de Blockchain',
    description: 'Más allá de PoW y PoS: descubre los mecanismos de consenso innovadores',
    type: 'article',
  }
};

export default function Leccion33() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cursos/fundamentos-blockchain" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Volver al curso
            </Link>
            <div className="text-gray-400 text-sm">
              Módulo 3 • Lección 3 de 3
            </div>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        
        {/* Título */}
        <div className="mb-8">
          <div className="inline-block px-4 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-4">
            Módulo 3: Consenso y Validación
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Otros Mecanismos de Consenso
          </h1>
          <p className="text-xl text-gray-300">
            Más allá de PoW y PoS: innovación en consenso blockchain
          </p>
        </div>

        {/* Introducción */}
        <section className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Diversidad en el Consenso</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Aunque <strong className="text-white">Proof of Work</strong> y <strong className="text-white">Proof of Stake</strong> son los mecanismos más conocidos, existen muchas otras alternativas diseñadas para casos de uso específicos. Cada uno tiene sus propios trade-offs entre descentralización, velocidad, seguridad y eficiencia.
            </p>
            <p>
              En esta lección exploraremos los mecanismos de consenso alternativos más importantes, sus casos de uso, y cómo diferentes blockchains los implementan para resolver problemas específicos.
            </p>
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 mt-6">
              <p className="text-cyan-300 font-medium">
                💡 Recuerda: No existe el "consenso perfecto". Cada mecanismo optimiza para diferentes prioridades.
              </p>
            </div>
          </div>
        </section>

        {/* Proof of Authority */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Proof of Authority (PoA)</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">¿Qué es?</h3>
                <p className="text-gray-300">
                  En <strong className="text-white">Proof of Authority</strong>, un conjunto preaprobado de validadores (autoridades) son los únicos que pueden crear y validar bloques. La identidad real de estos validadores es conocida y su reputación está en juego.
                </p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">¿Cómo funciona?</h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">1.</span>
                    <span>Un grupo limitado de nodos es designado como "autoridades"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">2.</span>
                    <span>Las autoridades se turnan para crear bloques en orden o por sorteo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">3.</span>
                    <span>Otros nodos verifican la firma del validador autorizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">4.</span>
                    <span>Si un validador actúa maliciosamente, puede ser removido</span>
                  </li>
                </ol>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-green-400 mb-3">✅ Ventajas</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>→ Extremadamente rápido (bloques de 3-5 segundos)</li>
                    <li>→ Alta eficiencia energética</li>
                    <li>→ Throughput muy alto (miles de tx/s)</li>
                    <li>→ Bajo costo de transacción</li>
                    <li>→ Predecible y estable</li>
                  </ul>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-400 mb-3">❌ Desventajas</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>→ Altamente centralizado</li>
                    <li>→ Requiere confiar en las autoridades</li>
                    <li>→ Vulnerable a colusión</li>
                    <li>→ Censura posible</li>
                    <li>→ No es verdaderamente "permissionless"</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">Casos de uso ideales</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">→</span>
                    <span><strong className="text-white">Blockchains privadas empresariales:</strong> Donde la identidad es conocida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">→</span>
                    <span><strong className="text-white">Redes de prueba:</strong> Para desarrollo y testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">→</span>
                    <span><strong className="text-white">Sidechains:</strong> Cadenas secundarias que no requieren máxima descentralización</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-300 text-sm">
                  <strong>Ejemplos:</strong> VeChain, BNB Smart Chain (parcialmente), xDai Chain, Ethereum testnets (Goerli, Sepolia)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Proof of History */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Proof of History (PoH)</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">¿Qué es?</h3>
                <p className="text-gray-300 mb-3">
                  <strong className="text-white">Proof of History</strong> no es realmente un mecanismo de consenso en sí, sino una <strong className="text-white">técnica criptográfica de marca temporal</strong> que crea un registro histórico verificable del orden de eventos. Fue popularizado por Solana.
                </p>
                <p className="text-gray-300">
                  PoH resuelve un problema fundamental: en sistemas distribuidos, es difícil ponerse de acuerdo sobre CUÁNDO ocurrieron las cosas. PoH crea una "fuente de tiempo" criptográficamente verificable.
                </p>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">¿Cómo funciona?</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    PoH usa una <strong className="text-white">Función de Retardo Verificable (VDF)</strong>: una función que toma mucho tiempo calcular pero es rápida de verificar.
                  </p>
                  <ol className="space-y-3 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 font-bold">1.</span>
                      <div>
                        <strong className="text-white">Hashing secuencial:</strong>
                        <p className="text-sm mt-1">Se toma el output de un hash SHA-256 y se usa como input del siguiente</p>
                        <div className="bg-gray-900/50 rounded p-3 mt-2 font-mono text-xs">
                          <div>hash1 = SHA256("solana")</div>
                          <div>hash2 = SHA256(hash1)</div>
                          <div>hash3 = SHA256(hash2)</div>
                          <div className="text-gray-500">... millones de veces por segundo ...</div>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 font-bold">2.</span>
                      <div>
                        <strong className="text-white">Timestamp criptográfico:</strong>
                        <p className="text-sm mt-1">Cada hash actúa como un "tick" del reloj. El número de iteraciones = tiempo transcurrido</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 font-bold">3.</span>
                      <div>
                        <strong className="text-white">Inserción de eventos:</strong>
                        <p className="text-sm mt-1">Las transacciones se insertan periódicamente en esta secuencia de hashes</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 font-bold">4.</span>
                      <div>
                        <strong className="text-white">Verificación:</strong>
                        <p className="text-sm mt-1">Cualquiera puede verificar que los hashes fueron generados en orden correcto</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">Ventaja clave</h3>
                <p className="text-gray-300 mb-3">
                  Con PoH, los validadores no necesitan comunicarse constantemente para ponerse de acuerdo sobre el tiempo. Esto permite:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>→ Procesamiento paralelo masivo</li>
                  <li>→ Menor latencia</li>
                  <li>→ Mayor throughput (~65,000 tx/s en Solana)</li>
                  <li>→ Orden de transacciones sin timestamps externos</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-green-400 mb-3">✅ Ventajas</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>→ Velocidad extrema (400ms bloques)</li>
                    <li>→ Throughput masivo</li>
                    <li>→ Ordenamiento claro de eventos</li>
                    <li>→ Reduce overhead de comunicación</li>
                    <li>→ Escalabilidad horizontal</li>
                  </ul>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-400 mb-3">❌ Desventajas</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>→ Hardware especializado necesario</li>
                    <li>→ Mayor complejidad técnica</li>
                    <li>→ Centralización en nodos potentes</li>
                    <li>→ Punto único de fallo (el reloj PoH)</li>
                    <li>→ Menos probado que PoW/PoS</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-6">
                <p className="text-yellow-300 text-sm">
                  <strong>Nota importante:</strong> Solana combina PoH con Proof of Stake. PoH proporciona el ordenamiento temporal, mientras que PoS se encarga del consenso y la seguridad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Delegated Proof of Stake */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Delegated Proof of Stake (DPoS)</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">¿Qué es?</h3>
                <p className="text-gray-300">
                  <strong className="text-white">DPoS</strong> es una variante de Proof of Stake donde los holders de tokens votan para elegir un pequeño número de <strong className="text-white">delegados</strong> (también llamados "testigos" o "productores de bloques") que se encargan de validar transacciones y crear bloques.
                </p>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">¿Cómo funciona?</h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">1.</span>
                    <div>
                      <strong className="text-white">Votación continua:</strong>
                      <p className="text-sm mt-1">Los holders votan por delegados. El peso del voto es proporcional a tus tokens.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">2.</span>
                    <div>
                      <strong className="text-white">Selección de delegados:</strong>
                      <p className="text-sm mt-1">Los N delegados con más votos (ej: 21 en EOS, 101 en TRON) se convierten en productores de bloques activos.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">3.</span>
                    <div>
                      <strong className="text-white">Producción de bloques:</strong>
                      <p className="text-sm mt-1">Los delegados se turnan para crear bloques (ej: cada 3 segundos).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">4.</span>
                    <div>
                      <strong className="text-white">Recompensas compartidas:</strong>
                      <p className="text-sm mt-1">Los delegados reciben recompensas y suelen compartirlas con quienes votaron por ellos.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">5.</span>
                    <div>
                      <strong className="text-white">Revocación:</strong>
                      <p className="text-sm mt-1">Si un delegado actúa mal, los votantes pueden removerlo en la siguiente ronda.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-green-400 mb-3">✅ Ventajas</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>→ Muy rápido (bloques de 1-3 segundos)</li>
                    <li>→ Alto throughput (miles de tx/s)</li>
                    <li>→ Eficiente energéticamente</li>
                    <li>→ Gobernanza on-chain clara</li>
                    <li>→ Los holders participan en decisiones</li>
                    <li>→ Recompensas para votantes</li>
                  </ul>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-400 mb-3">❌ Desventajas</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>→ Muy centralizado (pocos productores)</li>
                    <li>→ Los ricos tienen más poder de voto</li>
                    <li>→ Posible colusión entre delegados</li>
                    <li>→ Apatía de votantes</li>
                    <li>→ Riesgo de carteles</li>
                    <li>→ Menor resistencia a censura</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-6 mt-6">
                <h3 className="text-lg font-bold text-white mb-3">Comparación de números de delegados</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">EOS:</span>
                    <span className="text-orange-400 font-mono">21 productores de bloques</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">TRON:</span>
                    <span className="text-orange-400 font-mono">27 super representantes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Lisk:</span>
                    <span className="text-orange-400 font-mono">101 delegados activos</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Comparación Ethereum PoS:</span>
                    <span className="text-purple-400 font-mono">&gt;1,000,000 validadores</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-6">
                <p className="text-yellow-300 text-sm">
                  <strong>Ejemplos:</strong> EOS, TRON, Lisk, BitShares, Ark, Steem
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Otros mecanismos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Otros Mecanismos Notables</h2>
          
          <div className="space-y-6">
            {/* Proof of Space */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">🗄️ Proof of Space (PoSpace)</h3>
              <p className="text-gray-300 mb-3">
                Los mineros demuestran que han asignado espacio de almacenamiento en disco para la red. Usado por Chia Network.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-green-400 mb-2">Ventajas:</p>
                  <ul className="space-y-1 text-gray-300 ml-4">
                    <li>→ Menos energía que PoW</li>
                    <li>→ Hardware más accesible</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-400 mb-2">Desventajas:</p>
                  <ul className="space-y-1 text-gray-300 ml-4">
                    <li>→ Desperdicio de espacio de disco</li>
                    <li>→ Puede fomentar granjas de HDDs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Proof of Burn */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">🔥 Proof of Burn (PoB)</h3>
              <p className="text-gray-300 mb-3">
                Los mineros "queman" (destruyen permanentemente) criptomonedas enviándolas a una dirección sin clave privada. A cambio, ganan el derecho de minar bloques.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-green-400 mb-2">Ventajas:</p>
                  <ul className="space-y-1 text-gray-300 ml-4">
                    <li>→ Sin consumo energético</li>
                    <li>→ Reduce oferta total</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-400 mb-2">Desventajas:</p>
                  <ul className="space-y-1 text-gray-300 ml-4">
                    <li>→ Poco usado en la práctica</li>
                    <li>→ Económicamente cuestionable</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Proof of Activity */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">⚡ Proof of Activity (PoA)</h3>
              <p className="text-gray-300 mb-3">
                Combina PoW y PoS: los mineros encuentran un bloque vacío con PoW, luego validadores PoS lo completan con transacciones.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-green-400 mb-2">Ventajas:</p>
                  <ul className="space-y-1 text-gray-300 ml-4">
                    <li>→ Híbrido de seguridades</li>
                    <li>→ Incentivos mixtos</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-400 mb-2">Desventajas:</p>
                  <ul className="space-y-1 text-gray-300 ml-4">
                    <li>→ Complejidad adicional</li>
                    <li>→ Hereda problemas de ambos</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Byzantine Fault Tolerance */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">🛡️ Byzantine Fault Tolerance (BFT)</h3>
              <p className="text-gray-300 mb-3">
                Familia de algoritmos donde los nodos llegan a consenso a través de rondas de votación. Variantes: PBFT, HoneyBadgerBFT, Tendermint BFT.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-green-400 mb-2">Ventajas:</p>
                  <ul className="space-y-1 text-gray-300 ml-4">
                    <li>→ Finalidad instantánea</li>
                    <li>→ Muy rápido</li>
                    <li>→ Alta seguridad teórica</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-400 mb-2">Desventajas:</p>
                  <ul className="space-y-1 text-gray-300 ml-4">
                    <li>→ Escalabilidad limitada</li>
                    <li>→ Comunicación intensiva</li>
                  </ul>
                </div>
              </div>
              <p className="text-yellow-300 text-sm mt-3">
                <strong>Ejemplos:</strong> Cosmos (Tendermint), Hyperledger Fabric
              </p>
            </div>
          </div>
        </section>

        {/* Tabla comparativa completa */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Comparación Completa de Mecanismos</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 text-sm">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="px-4 py-3 text-left text-white font-bold">Mecanismo</th>
                  <th className="px-4 py-3 text-left text-white font-bold">Velocidad</th>
                  <th className="px-4 py-3 text-left text-white font-bold">Energía</th>
                  <th className="px-4 py-3 text-left text-white font-bold">Descentralización</th>
                  <th className="px-4 py-3 text-left text-white font-bold">Seguridad</th>
                  <th className="px-4 py-3 text-left text-white font-bold">Uso Principal</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3 font-medium text-blue-400">PoW</td>
                  <td className="px-4 py-3">Lenta</td>
                  <td className="px-4 py-3 text-red-400">Muy alta</td>
                  <td className="px-4 py-3 text-green-400">Alta</td>
                  <td className="px-4 py-3 text-green-400">Muy alta</td>
                  <td className="px-4 py-3">Bitcoin, Litecoin</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3 font-medium text-purple-400">PoS</td>
                  <td className="px-4 py-3">Rápida</td>
                  <td className="px-4 py-3 text-green-400">Muy baja</td>
                  <td className="px-4 py-3 text-green-400">Alta</td>
                  <td className="px-4 py-3 text-green-400">Alta</td>
                  <td className="px-4 py-3">Ethereum, Cardano</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3 font-medium text-cyan-400">DPoS</td>
                  <td className="px-4 py-3">Muy rápida</td>
                  <td className="px-4 py-3 text-green-400">Muy baja</td>
                  <td className="px-4 py-3 text-red-400">Baja</td>
                  <td className="px-4 py-3 text-yellow-400">Media</td>
                  <td className="px-4 py-3">EOS, TRON</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3 font-medium text-orange-400">PoA</td>
                  <td className="px-4 py-3">Muy rápida</td>
                  <td className="px-4 py-3 text-green-400">Muy baja</td>
                  <td className="px-4 py-3 text-red-400">Muy baja</td>
                  <td className="px-4 py-3 text-yellow-400">Media</td>
                  <td className="px-4 py-3">VeChain, Testnets</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3 font-medium text-pink-400">PoH + PoS</td>
                  <td className="px-4 py-3">Extremadamente rápida</td>
                  <td className="px-4 py-3 text-green-400">Baja</td>
                  <td className="px-4 py-3 text-yellow-400">Media</td>
                  <td className="px-4 py-3 text-yellow-400">Media-Alta</td>
                  <td className="px-4 py-3">Solana</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3 font-medium text-yellow-400">BFT</td>
                  <td className="px-4 py-3">Rápida</td>
                  <td className="px-4 py-3 text-green-400">Muy baja</td>
                  <td className="px-4 py-3 text-yellow-400">Media</td>
                  <td className="px-4 py-3 text-green-400">Alta</td>
                  <td className="px-4 py-3">Cosmos, Hyperledger</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ¿Cuál es mejor? */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">¿Cuál es el mejor mecanismo?</h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                <strong className="text-white">No existe el "mejor" mecanismo de consenso</strong>. Cada uno es óptimo para diferentes escenarios:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Elige PoW si necesitas:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>→ Máxima seguridad probada</li>
                    <li>→ Máxima descentralización</li>
                    <li>→ Resistencia a censura absoluta</li>
                    <li>→ Store of value (como Bitcoin)</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Elige PoS si necesitas:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>→ Eficiencia energética</li>
                    <li>→ Velocidad moderada</li>
                    <li>→ Descentralización significativa</li>
                    <li>→ Plataforma de smart contracts</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Elige DPoS si necesitas:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>→ Velocidad extrema</li>
                    <li>→ Alto throughput</li>
                    <li>→ Gobernanza clara</li>
                    <li>→ Aplicaciones con muchos usuarios</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Elige PoA si necesitas:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>→ Blockchain privada/empresarial</li>
                    <li>→ Identidades conocidas</li>
                    <li>→ Máximo rendimiento</li>
                    <li>→ Ambiente controlado</li>
                  </ul>
                </div>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6 mt-6">
                <p className="text-cyan-300">
                  <strong>Tendencia futura:</strong> Veremos cada vez más blockchains que combinan múltiples mecanismos (híbridos) para aprovechar las ventajas de cada uno y mitigar sus desventajas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resumen */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>📌</span>
              <span>Resumen de la lección</span>
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">→</span>
                <span>Existen muchos mecanismos de consenso más allá de PoW y PoS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">→</span>
                <span>Proof of Authority sacrifica descentralización por velocidad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">→</span>
                <span>Proof of History es una innovación de ordenamiento temporal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">→</span>
                <span>DPoS usa votación para elegir productores de bloques</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">→</span>
                <span>Cada mecanismo tiene trade-offs específicos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">→</span>
                <span>La elección depende del caso de uso y prioridades</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">→</span>
                <span>El futuro probablemente incluirá más mecanismos híbridos</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Navegación */}
        <nav className="flex justify-between items-center pt-8 border-t border-gray-700">
          <Link 
            href="/cursos/fundamentos-blockchain/leccion/3-2"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span>←</span>
            <span>Anterior: Proof of Stake</span>
          </Link>
          
          <Link 
            href="/cursos/fundamentos-blockchain"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-lg transition-colors"
          >
            <span>✓ Módulo completado</span>
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
