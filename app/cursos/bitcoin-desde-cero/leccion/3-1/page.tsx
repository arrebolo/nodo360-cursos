import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Minería de Bitcoin - Bitcoin desde Cero | Nodo360',
  description: 'Descubre cómo funciona la minería de Bitcoin, qué es proof of work, el halving, la dificultad de minado y por qué los mineros son esenciales para la seguridad de la red.',
  keywords: 'minería bitcoin, proof of work, halving bitcoin, dificultad minado, mineros bitcoin, asic miners',
  openGraph: {
    title: 'Minería de Bitcoin - Bitcoin desde Cero',
    description: 'El motor que mantiene segura la red Bitcoin',
    type: 'article',
  }
};

export default function Leccion31() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cursos/bitcoin-desde-cero" className="text-orange-400 hover:text-orange-300 transition-colors">
              ← Volver al curso
            </Link>
            <div className="text-gray-400 text-sm">
              Módulo 3 • Lección 1 de 3
            </div>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">

        {/* Título */}
        <div className="mb-8">
          <div className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
            Módulo 3: La Red Bitcoin
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Minería de Bitcoin
          </h1>
          <p className="text-xl text-gray-300">
            El proceso que mantiene segura la red más robusta del mundo
          </p>
        </div>

        {/* Introducción */}
        <section className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">¿Qué es la minería de Bitcoin?</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              La <strong className="text-white">minería de Bitcoin</strong> es el proceso mediante el cual se añaden nuevas transacciones a la blockchain y se crean nuevos bitcoins. Los mineros utilizan hardware especializado para resolver complejos problemas matemáticos que validan y aseguran las transacciones.
            </p>
            <p>
              A cambio de este trabajo computacional, los mineros reciben dos tipos de recompensas:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Block reward</strong>: Nuevos bitcoins creados (actualmente 6.25 BTC por bloque)</li>
              <li><strong className="text-white">Fees de transacción</strong>: Comisiones pagadas por los usuarios</li>
            </ul>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mt-6">
              <p className="text-orange-300 font-medium">
                💡 Analogía: Los mineros son como los guardianes de un libro de contabilidad global. Cada 10 minutos, uno de ellos es elegido aleatoriamente (basado en su poder de cómputo) para escribir la siguiente página (bloque) en el libro (blockchain).
              </p>
            </div>
          </div>
        </section>

        {/* Proof of Work */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Proof of Work (PoW)</h2>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Proof of Work</strong> (Prueba de Trabajo) es el mecanismo de consenso que Bitcoin utiliza para asegurar la red. Requiere que los mineros demuestren que han gastado energía computacional real para añadir un nuevo bloque.
              </p>

              <h3 className="text-xl font-bold text-white mt-6 mb-3">¿Cómo funciona?</h3>

              <div className="space-y-3">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">1. Agrupar transacciones</h4>
                  <p className="text-sm">
                    Los mineros seleccionan transacciones pendientes del mempool y las agrupan en un bloque candidato (máximo 1-4 MB).
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">2. Buscar el hash correcto</h4>
                  <p className="text-sm mb-2">
                    Los mineros deben encontrar un número (nonce) que, al combinarlo con los datos del bloque y aplicarle la función hash SHA-256, produzca un resultado que empiece con un número específico de ceros.
                  </p>
                  <div className="bg-gray-800 rounded p-3 font-mono text-xs break-all mt-2">
                    <div className="text-gray-400">Ejemplo de hash válido (empieza con muchos ceros):</div>
                    <div className="text-green-400">0000000000000000000c2a3e4f1b9d8e7a6c5d4f3e2a1b0c</div>
                  </div>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">3. Competir por ser el primero</h4>
                  <p className="text-sm">
                    Miles de mineros compiten simultáneamente. El primero que encuentra un hash válido gana el derecho de añadir el bloque y recibir la recompensa.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">4. Validar y propagar</h4>
                  <p className="text-sm">
                    El bloque se propaga por toda la red. Los demás nodos verifican que sea válido y lo añaden a su copia de la blockchain.
                  </p>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
                <h4 className="text-blue-300 font-bold mb-2">¿Por qué es seguro?</h4>
                <p className="text-sm">
                  Para atacar Bitcoin, un actor malicioso necesitaría controlar más del 51% del poder computacional total de la red. Con el hashrate actual, esto costaría miles de millones de dólares y sería económicamente irracional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dificultad */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Ajuste de Dificultad</h2>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                Bitcoin está diseñado para que se mine un nuevo bloque aproximadamente <strong className="text-white">cada 10 minutos</strong>. Para mantener esta frecuencia constante a pesar de que el poder computacional de la red cambia, Bitcoin ajusta automáticamente la dificultad del puzzle criptográfico.
              </p>

              <div className="bg-gray-900/50 rounded-lg p-6 my-4">
                <h3 className="text-white font-bold mb-3">Cómo funciona el ajuste:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Cada 2,016 bloques (aproximadamente 2 semanas), la red evalúa cuánto tiempo tomó minar esos bloques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Si tomó menos de 2 semanas: la dificultad aumenta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Si tomó más de 2 semanas: la dificultad disminuye</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Objetivo: mantener el tiempo promedio en 10 minutos por bloque</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
                  <h4 className="text-green-300 font-bold mb-2">Más mineros se unen</h4>
                  <p className="text-sm">→ Bloques se encuentran más rápido</p>
                  <p className="text-sm">→ Dificultad aumenta en el próximo ajuste</p>
                  <p className="text-sm">→ Vuelve a ~10 min/bloque</p>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                  <h4 className="text-red-300 font-bold mb-2">Mineros abandonan</h4>
                  <p className="text-sm">→ Bloques se encuentran más lento</p>
                  <p className="text-sm">→ Dificultad disminuye en el próximo ajuste</p>
                  <p className="text-sm">→ Vuelve a ~10 min/bloque</p>
                </div>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mt-6">
                <p className="text-orange-300 text-sm">
                  <strong>Dato curioso:</strong> La dificultad de minado de Bitcoin ha aumentado más de 1 trillón de veces desde 2009. Esto refleja el crecimiento masivo en poder computacional dedicado a asegurar la red.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* El Halving */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">El Halving</h2>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                El <strong className="text-white">halving</strong> (o "reducción a la mitad") es un evento programado en el código de Bitcoin donde la recompensa por minar un bloque se reduce a la mitad.
              </p>

              <div className="bg-gray-900/50 rounded-lg p-6 my-4">
                <h3 className="text-white font-bold mb-3">Historia de los Halvings:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500 rounded px-3 py-1 text-sm font-bold text-white min-w-[80px]">2009-2012</div>
                    <div className="text-sm">50 BTC por bloque</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 rounded px-3 py-1 text-sm font-bold text-white min-w-[80px]">2012-2016</div>
                    <div className="text-sm">25 BTC por bloque (1er halving)</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-700 rounded px-3 py-1 text-sm font-bold text-white min-w-[80px]">2016-2020</div>
                    <div className="text-sm">12.5 BTC por bloque (2do halving)</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-800 rounded px-3 py-1 text-sm font-bold text-white min-w-[80px]">2020-2024</div>
                    <div className="text-sm">6.25 BTC por bloque (3er halving)</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-600 rounded px-3 py-1 text-sm font-bold text-white min-w-[80px]">2024-2028</div>
                    <div className="text-sm">3.125 BTC por bloque (4to halving)</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-600 rounded px-3 py-1 text-sm font-bold text-white min-w-[80px]">~2140</div>
                    <div className="text-sm">0 BTC (último bitcoin minado)</div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mt-6 mb-3">¿Por qué existe el halving?</h3>

              <div className="space-y-3">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">1. Escasez programada</h4>
                  <p className="text-sm">
                    Solo existirán 21 millones de bitcoins. El halving asegura que la emisión sea predecible y disminuya con el tiempo.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">2. Desinflación controlada</h4>
                  <p className="text-sm">
                    A diferencia de las monedas fiat donde los bancos centrales pueden imprimir más dinero, Bitcoin tiene una política monetaria fija y transparente.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">3. Transición a fees</h4>
                  <p className="text-sm">
                    Con el tiempo, los mineros dependerán más de las fees de transacción que de la block reward, creando un modelo económico sostenible.
                  </p>
                </div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mt-6">
                <h4 className="text-purple-300 font-bold mb-2">Impacto histórico del precio:</h4>
                <p className="text-sm">
                  Históricamente, los halvings han precedido grandes aumentos de precio (bull runs) debido a la reducción de la oferta nueva entrante al mercado. Sin embargo, esto no garantiza resultados futuros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hardware de minería */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Hardware de Minería</h2>

          <div className="space-y-4">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">CPU Mining (2009-2010)</h3>
              <p className="text-gray-300 text-sm mb-2">
                En los primeros días, se podía minar Bitcoin con el procesador de una computadora normal.
              </p>
              <p className="text-red-400 text-xs">✗ Ya no es rentable ni posible</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">GPU Mining (2010-2013)</h3>
              <p className="text-gray-300 text-sm mb-2">
                Las tarjetas gráficas demostraron ser mucho más eficientes para los cálculos de hashing.
              </p>
              <p className="text-red-400 text-xs">✗ Obsoleto para Bitcoin (pero usado en otras cryptos)</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">ASIC Mining (2013-presente)</h3>
              <p className="text-gray-300 text-sm mb-3">
                Application-Specific Integrated Circuits. Hardware diseñado exclusivamente para minar Bitcoin con máxima eficiencia.
              </p>
              <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
                <p className="text-green-300 text-xs mb-2">✓ La única opción viable hoy</p>
                <div className="text-gray-400 text-xs space-y-1">
                  <div>→ Modelos populares: Antminer S19, Whatsminer M30S</div>
                  <div>→ Costo: $2,000 - $10,000+ por unidad</div>
                  <div>→ Consumo: 3000-3500 watts</div>
                  <div>→ Hashrate: 90-110 TH/s</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mt-4">
            <h4 className="text-yellow-300 font-bold mb-2">¿Puedo minar Bitcoin en casa?</h4>
            <p className="text-gray-300 text-sm mb-3">
              Técnicamente sí, pero probablemente no sea rentable a menos que:
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>→ Tengas acceso a electricidad muy barata (menos de $0.05/kWh)</li>
              <li>→ Vivas en un clima frío (los ASICs generan mucho calor)</li>
              <li>→ Puedas tolerar el ruido (son muy ruidosos, 70-80 dB)</li>
              <li>→ Tengas capital para múltiples unidades</li>
            </ul>
            <p className="text-orange-300 text-xs mt-3">
              Para la mayoría, es más rentable simplemente comprar Bitcoin directamente.
            </p>
          </div>
        </section>

        {/* Mining Pools */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Mining Pools</h2>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                Los <strong className="text-white">mining pools</strong> (piscinas de minería) son grupos de mineros que combinan su poder computacional y comparten las recompensas proporcionalmente a su contribución.
              </p>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-4">
                <h3 className="text-blue-300 font-bold mb-2">¿Por qué existen?</h3>
                <p className="text-sm">
                  Minar en solitario es como comprar un billete de lotería cada 10 minutos. Con mining pools, recibes pagos pequeños pero frecuentes en lugar de esperar potencialmente años para encontrar un bloque.
                </p>
              </div>

              <h3 className="text-xl font-bold text-white mt-6 mb-3">Pools principales:</h3>

              <div className="space-y-2 text-sm">
                <div className="bg-gray-900/50 rounded p-3 flex justify-between items-center">
                  <span>Foundry USA</span>
                  <span className="text-orange-400">~30% del hashrate</span>
                </div>
                <div className="bg-gray-900/50 rounded p-3 flex justify-between items-center">
                  <span>AntPool</span>
                  <span className="text-orange-400">~20% del hashrate</span>
                </div>
                <div className="bg-gray-900/50 rounded p-3 flex justify-between items-center">
                  <span>F2Pool</span>
                  <span className="text-orange-400">~15% del hashrate</span>
                </div>
                <div className="bg-gray-900/50 rounded p-3 flex justify-between items-center">
                  <span>Otros pools</span>
                  <span className="text-orange-400">~35% del hashrate</span>
                </div>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mt-6">
                <p className="text-orange-300 text-sm">
                  <strong>Nota sobre descentralización:</strong> Es importante que ningún pool controle más del 51% del hashrate. La comunidad vigila activamente la distribución del poder de minado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resumen */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>📌</span>
              <span>Resumen de la lección</span>
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>La minería asegura la red mediante Proof of Work</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Los mineros compiten por encontrar hashes válidos cada 10 minutos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>La dificultad se ajusta automáticamente cada 2 semanas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>El halving reduce la recompensa a la mitad cada 4 años</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Los ASICs son el único hardware viable para minar Bitcoin hoy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Los mining pools permiten a mineros pequeños participar</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Navegación */}
        <nav className="flex justify-between items-center pt-8 border-t border-gray-700">
          <Link
            href="/cursos/bitcoin-desde-cero/leccion/2-3"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span>←</span>
            <span>Anterior: Blockchain</span>
          </Link>

          <Link
            href="/cursos/bitcoin-desde-cero/leccion/3-2"
            className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
          >
            <span>Siguiente: La Red Bitcoin</span>
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
