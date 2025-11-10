import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Proof of Work (PoW) - Fundamentos de Blockchain | Nodo360',
  description: 'Aprende cómo funciona Proof of Work, el mecanismo de consenso de Bitcoin. Entiende la minería, dificultad, consumo energético y seguridad del sistema.',
  keywords: 'proof of work, pow, minería bitcoin, consenso blockchain, hash, dificultad minería, seguridad blockchain',
  openGraph: {
    title: 'Proof of Work (PoW) - Fundamentos de Blockchain',
    description: 'Descubre cómo funciona el mecanismo de consenso que asegura Bitcoin y otras criptomonedas',
    type: 'article',
  }
};

export default function Leccion31() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cursos/fundamentos-blockchain" className="text-blue-400 hover:text-blue-300 transition-colors">
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
          <div className="inline-block px-4 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium mb-4">
            Módulo 3: Consenso y Validación
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proof of Work (PoW)
          </h1>
          <p className="text-xl text-gray-300">
            El mecanismo de consenso que asegura Bitcoin y otras blockchains
          </p>
        </div>

        {/* Introducción */}
        <section className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">¿Qué es Proof of Work?</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong className="text-white">Proof of Work (PoW)</strong> o "Prueba de Trabajo" es el mecanismo de consenso original de Bitcoin, creado por Satoshi Nakamoto en 2008. Es el sistema que permite que miles de nodos distribuidos lleguen a un acuerdo sobre el estado de la blockchain sin necesidad de confiar entre ellos.
            </p>
            <p>
              La idea fundamental es simple pero brillante: para añadir un nuevo bloque a la cadena, debes demostrar que has gastado recursos computacionales reales (electricidad y hardware). Esto hace extremadamente costoso atacar la red.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
              <p className="text-blue-300 font-medium">
                💡 Analogía: Es como resolver un rompecabezas difícil. Resolverlo toma mucho esfuerzo, pero verificar que la solución es correcta es instantáneo.
              </p>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">¿Cómo funciona el Proof of Work?</h2>
          
          <div className="space-y-6">
            {/* Paso 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Recopilar transacciones</h3>
                  <p className="text-gray-300 mb-3">
                    Los mineros recopilan transacciones pendientes del mempool (piscina de memoria) y las agrupan para crear un nuevo bloque candidato.
                  </p>
                  <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-400">
                    Bloque candidato = [Tx1, Tx2, Tx3, ..., TxN]
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Añadir el header del bloque</h3>
                  <p className="text-gray-300 mb-3">
                    Se crea el encabezado del bloque que incluye:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">→</span>
                      <span><strong className="text-white">Versión</strong> del protocolo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">→</span>
                      <span><strong className="text-white">Hash del bloque anterior</strong> (enlace con la cadena)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">→</span>
                      <span><strong className="text-white">Merkle Root</strong> (resumen de todas las transacciones)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">→</span>
                      <span><strong className="text-white">Timestamp</strong> (marca de tiempo)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">→</span>
                      <span><strong className="text-white">Target de dificultad</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">→</span>
                      <span><strong className="text-white">Nonce</strong> (número aleatorio que se va cambiando)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">El desafío: encontrar el hash correcto</h3>
                  <p className="text-gray-300 mb-3">
                    Aquí viene la "prueba de trabajo". El minero debe encontrar un nonce (número aleatorio) que, al hacer el hash SHA-256 del header completo, produzca un resultado que comience con un número específico de ceros.
                  </p>
                  <div className="bg-gray-900/50 rounded-lg p-4 space-y-2 font-mono text-sm">
                    <div className="text-red-400">❌ Nonce 1: hash = 9a3f2b... (no válido)</div>
                    <div className="text-red-400">❌ Nonce 2: hash = 7d8e1c... (no válido)</div>
                    <div className="text-red-400">❌ Nonce 3: hash = 5b2a9f... (no válido)</div>
                    <div className="text-gray-500">... millones de intentos ...</div>
                    <div className="text-green-400">✅ Nonce 47,283,951: hash = 0000000a1b2c... (¡válido!)</div>
                  </div>
                  <p className="text-gray-400 text-sm mt-3">
                    Mientras más ceros se requieran al inicio, más difícil es encontrar el nonce correcto.
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
                  <h3 className="text-xl font-bold text-white mb-3">Propagación y recompensa</h3>
                  <p className="text-gray-300 mb-3">
                    Una vez encontrado el nonce correcto:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>El minero transmite el bloque a toda la red</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Otros nodos verifican rápidamente que el hash es válido</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>El bloque se añade a la blockchain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>El minero recibe la recompensa (actualmente 3.125 BTC + fees)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dificultad de minería */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Dificultad de minería</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                La <strong className="text-white">dificultad</strong> es un parámetro que se ajusta automáticamente cada 2,016 bloques (aproximadamente cada 2 semanas) para mantener un tiempo promedio de 10 minutos por bloque.
              </p>
              
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 my-6">
                <h3 className="text-xl font-bold text-white mb-4">¿Cómo se ajusta?</h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong className="text-white">Si los bloques se minaron muy rápido:</strong></p>
                  <p className="pl-4">→ La dificultad AUMENTA (se requieren más ceros en el hash)</p>
                  <p className="pl-4">→ Ejemplo: pasar de 18 ceros a 19 ceros al inicio del hash</p>
                  
                  <p className="mt-4"><strong className="text-white">Si los bloques se minaron muy lento:</strong></p>
                  <p className="pl-4">→ La dificultad DISMINUYE (se requieren menos ceros)</p>
                  <p className="pl-4">→ Ejemplo: pasar de 19 ceros a 18 ceros</p>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">Ejemplo numérico</h3>
                <div className="space-y-2 font-mono text-sm">
                  <p className="text-gray-400">Dificultad baja (más fácil):</p>
                  <p className="text-green-400">Target: 0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF</p>
                  <p className="text-gray-500 text-xs">Cualquier hash que empiece con 4 ceros o más es válido</p>
                  
                  <p className="text-gray-400 mt-4">Dificultad alta (más difícil):</p>
                  <p className="text-red-400">Target: 0000000000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF</p>
                  <p className="text-gray-500 text-xs">Necesitas al menos 13 ceros al inicio para que sea válido</p>
                </div>
              </div>

              <div className="mt-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-300">
                  <strong>Dato curioso:</strong> En 2009, Satoshi Nakamoto podía minar bloques con una laptop. Hoy se necesitan equipos especializados (ASICs) que cuestan miles de dólares y consumen muchísima energía.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Consumo energético */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Consumo energético</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-6 text-gray-300">
              <p>
                Una de las críticas más comunes al Proof of Work es su alto consumo energético. Veamos los números:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-red-400 mb-3">La crítica</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>→ Bitcoin consume ~120 TWh/año</li>
                    <li>→ Comparable al consumo de países pequeños</li>
                    <li>→ Aproximadamente 0.5% de la electricidad mundial</li>
                    <li>→ Gran huella de carbono si se usa energía fósil</li>
                  </ul>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3">La defensa</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>→ Ese consumo asegura una red de $600B+</li>
                    <li>→ &gt;50% usa energía renovable</li>
                    <li>→ Aprovecha energía que se desperdiciaría</li>
                    <li>→ Comparado con el sistema bancario tradicional es menor</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mt-6">
                <h3 className="text-lg font-bold text-white mb-3">Contexto importante</h3>
                <p className="text-gray-300 mb-3">
                  El debate sobre energía es complejo. Muchos mineros se localizan cerca de fuentes de energía renovable (hidroeléctrica, geotérmica, solar) porque buscan electricidad barata.
                </p>
                <p className="text-gray-300">
                  Además, el consumo energético NO crece linealmente con el precio de Bitcoin. La eficiencia de los equipos mejora constantemente, compensando el aumento de mineros.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-6 mt-6">
                <h3 className="text-lg font-bold text-white mb-3">Comparación</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Bitcoin (PoW):</span>
                    <span className="text-white font-mono">~120 TWh/año</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Sistema bancario tradicional:</span>
                    <span className="text-white font-mono">~260 TWh/año</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Oro (minería + procesamiento):</span>
                    <span className="text-white font-mono">~240 TWh/año</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">YouTube:</span>
                    <span className="text-white font-mono">~245 TWh/año</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seguridad del sistema */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Seguridad del sistema</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-6 text-gray-300">
              <p>
                El Proof of Work hace que atacar Bitcoin sea económicamente inviable. Veamos por qué:
              </p>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4">El Ataque del 51%</h3>
                <p className="text-gray-300 mb-4">
                  El único ataque teóricamente posible es el "51% attack": si un atacante controla más del 51% del poder de minería (hashrate), podría:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>→ Revertir transacciones recientes (double-spend)</li>
                  <li>→ Prevenir confirmación de nuevas transacciones</li>
                  <li>→ Reorganizar bloques recientes</li>
                </ul>
                <p className="text-red-400 font-bold mt-4">
                  Pero NO podría: robar bitcoins de wallets ajenas, crear bitcoins de la nada, o cambiar las reglas del protocolo.
                </p>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">¿Por qué es prácticamente imposible?</h3>
                <div className="space-y-4 text-gray-300">
                  <p><strong className="text-white">Costo prohibitivo:</strong></p>
                  <ul className="space-y-2 ml-4">
                    <li>→ Necesitarías hardware por valor de ~$10-20 mil millones</li>
                    <li>→ Consumo eléctrico masivo (imposible conseguir tanta energía)</li>
                    <li>→ Los fabricantes de ASICs no te venderían tanto equipo</li>
                  </ul>

                  <p className="mt-4"><strong className="text-white">Incentivos alineados:</strong></p>
                  <ul className="space-y-2 ml-4">
                    <li>→ Si atacas, el precio de BTC caería drásticamente</li>
                    <li>→ Tu hardware valdría cero</li>
                    <li>→ Es más rentable minar honestamente</li>
                  </ul>

                  <p className="mt-4"><strong className="text-white">Detección inmediata:</strong></p>
                  <ul className="space-y-2 ml-4">
                    <li>→ La comunidad detectaría el ataque en minutos</li>
                    <li>→ Se podría hacer un hard fork para anular tu ataque</li>
                    <li>→ Pérdida total de tu inversión</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">Seguridad en números</h3>
                <p className="text-gray-300 mb-3">
                  El hashrate total de Bitcoin en 2024 supera los 500 EH/s (exahashes por segundo). Esto significa:
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-400">
                  500,000,000,000,000,000,000 hashes por segundo
                </div>
                <p className="text-gray-300 mt-3">
                  Es literalmente el cálculo distribuido más grande jamás construido por la humanidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ventajas y Desventajas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Ventajas y Desventajas</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <span>✅</span>
                <span>Ventajas</span>
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">●</span>
                  <span><strong className="text-white">Probado:</strong> Funciona desde 2009 sin interrupciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">●</span>
                  <span><strong className="text-white">Seguro:</strong> Nunca ha sido hackeado exitosamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">●</span>
                  <span><strong className="text-white">Descentralizado:</strong> Cualquiera puede minar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">●</span>
                  <span><strong className="text-white">Sin permisos:</strong> No necesitas aprobación de nadie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">●</span>
                  <span><strong className="text-white">Objetivo:</strong> No hay subjetividad en la validación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">●</span>
                  <span><strong className="text-white">Resistente a censura:</strong> Imposible bloquear</span>
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
                  <span><strong className="text-white">Alto consumo energético:</strong> Crítica ambiental</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">●</span>
                  <span><strong className="text-white">Escalabilidad limitada:</strong> ~7 transacciones por segundo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">●</span>
                  <span><strong className="text-white">Hardware especializado:</strong> Los ASICs dominan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">●</span>
                  <span><strong className="text-white">Centralización minera:</strong> Pools grandes tienen ventaja</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">●</span>
                  <span><strong className="text-white">Tiempo de confirmación:</strong> ~10 minutos por bloque</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">●</span>
                  <span><strong className="text-white">Barreras de entrada:</strong> Inversión inicial alta</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Resumen */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>📌</span>
              <span>Resumen de la lección</span>
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">→</span>
                <span>Proof of Work es el mecanismo de consenso original de Bitcoin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">→</span>
                <span>Los mineros compiten por resolver un problema criptográfico difícil</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">→</span>
                <span>La dificultad se ajusta automáticamente cada 2 semanas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">→</span>
                <span>El consumo energético es alto pero proporcional a la seguridad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">→</span>
                <span>Un ataque del 51% es teóricamente posible pero económicamente inviable</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">→</span>
                <span>Es el sistema de consenso más probado y seguro hasta la fecha</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Navegación */}
        <nav className="flex justify-between items-center pt-8 border-t border-gray-700">
          <Link 
            href="/cursos/fundamentos-blockchain/leccion/2-3"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span>←</span>
            <span>Anterior: Redes P2P</span>
          </Link>
          
          <Link 
            href="/cursos/fundamentos-blockchain/leccion/3-2"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <span>Siguiente: Proof of Stake</span>
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
