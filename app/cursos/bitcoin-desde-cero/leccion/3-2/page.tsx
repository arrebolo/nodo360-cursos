import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'La Red Bitcoin - Bitcoin desde Cero | Nodo360',
  description: 'Comprende cómo funciona la red peer-to-peer de Bitcoin, qué son los nodos, tipos de nodos (full nodes, light clients), y cómo se propagan las transacciones.',
  keywords: 'red bitcoin, nodos bitcoin, full node, peer to peer, p2p, mempool, propagación transacciones',
  openGraph: {
    title: 'La Red Bitcoin - Bitcoin desde Cero',
    description: 'La arquitectura descentralizada que hace Bitcoin imparable',
    type: 'article',
  }
};

export default function Leccion32() {
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
              Módulo 3 • Lección 2 de 3
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
            La Red Bitcoin
          </h1>
          <p className="text-xl text-gray-300">
            Una red global sin dueño ni punto central de falla
          </p>
        </div>

        {/* Introducción */}
        <section className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Red Peer-to-Peer (P2P)</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Bitcoin funciona como una <strong className="text-white">red peer-to-peer</strong> (entre pares), similar a cómo funcionaba Napster o BitTorrent. No hay servidores centrales: cada participante (nodo) se conecta directamente con otros nodos, formando una red distribuida globalmente.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span>❌</span>
                  <span>Sistema Centralizado</span>
                </h3>
                <div className="text-center mb-3">
                  <div className="inline-block bg-red-900/30 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <div className="flex justify-center gap-2">
                    <span className="text-2xl">👤</span>
                    <span className="text-2xl">👤</span>
                    <span className="text-2xl">👤</span>
                  </div>
                </div>
                <ul className="text-xs space-y-1 text-gray-400">
                  <li>→ Punto único de falla</li>
                  <li>→ Puede ser censurado</li>
                  <li>→ Control por una entidad</li>
                </ul>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span>✓</span>
                  <span>Red P2P (Bitcoin)</span>
                </h3>
                <div className="text-center mb-3">
                  <div className="flex justify-center gap-2 mb-2">
                    <span className="text-2xl">👤</span>
                    <span className="text-2xl">👤</span>
                  </div>
                  <div className="flex justify-center gap-2">
                    <span className="text-2xl">👤</span>
                    <span className="text-2xl">👤</span>
                  </div>
                </div>
                <ul className="text-xs space-y-1 text-gray-400">
                  <li>→ Sin punto central de falla</li>
                  <li>→ Resistente a censura</li>
                  <li>→ Nadie controla la red</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
              <p className="text-orange-300 font-medium text-sm">
                💡 Esto significa que para "apagar" Bitcoin, tendrías que apagar decenas de miles de computadoras en más de 100 países simultáneamente - prácticamente imposible.
              </p>
            </div>
          </div>
        </section>

        {/* Qué es un nodo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">¿Qué es un Nodo?</h2>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                Un <strong className="text-white">nodo</strong> es una computadora que ejecuta el software de Bitcoin y mantiene una copia de la blockchain. Los nodos son los guardianes de las reglas de Bitcoin: verifican que todas las transacciones y bloques cumplan con el protocolo.
              </p>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 my-6">
                <h3 className="text-blue-300 font-bold mb-3">Funciones principales de un nodo:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 text-xl">1.</span>
                    <div>
                      <h4 className="text-white font-medium">Validar transacciones</h4>
                      <p className="text-sm">Verificar que las transacciones cumplan las reglas (firmas válidas, sin doble gasto, etc.)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 text-xl">2.</span>
                    <div>
                      <h4 className="text-white font-medium">Validar bloques</h4>
                      <p className="text-sm">Comprobar que los bloques nuevos sigan las reglas de consenso</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 text-xl">3.</span>
                    <div>
                      <h4 className="text-white font-medium">Propagar información</h4>
                      <p className="text-sm">Transmitir transacciones y bloques válidos a otros nodos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 text-xl">4.</span>
                    <div>
                      <h4 className="text-white font-medium">Mantener historial</h4>
                      <p className="text-sm">Almacenar toda la historia de transacciones (blockchain completa)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-300 text-sm">
                  <strong>Importante:</strong> Los nodos NO necesitan minar. Son diferentes de los mineros. Cualquiera puede ejecutar un nodo, incluso en una Raspberry Pi de $50.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de nodos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Tipos de Nodos</h2>

          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>💪</span>
                <span>Full Nodes (Nodos Completos)</span>
              </h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-sm">
                  Un full node descarga y valida TODA la blockchain desde el bloque génesis (2009) hasta el presente. Es la forma más segura de usar Bitcoin porque no confías en nadie más.
                </p>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Requisitos:</h4>
                  <ul className="text-sm space-y-1">
                    <li>→ ~500-600 GB de espacio en disco</li>
                    <li>→ Conexión a internet decente (sin límite de datos)</li>
                    <li>→ Computadora o Raspberry Pi (4GB+ RAM recomendado)</li>
                    <li>→ Sincronización inicial: 1-7 días dependiendo del hardware</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
                    <p className="text-green-300 font-medium text-xs mb-1">Ventajas:</p>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>✓ Máxima seguridad y privacidad</li>
                      <li>✓ Verificación independiente</li>
                      <li>✓ Contribuyes a la descentralización</li>
                    </ul>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded p-3">
                    <p className="text-red-300 font-medium text-xs mb-1">Desventajas:</p>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>→ Requiere espacio y ancho de banda</li>
                      <li>→ Sincronización inicial lenta</li>
                      <li>→ Más técnico de configurar</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded p-3 mt-3">
                  <p className="text-orange-300 text-xs">
                    <strong>Software popular:</strong> Bitcoin Core, Bitcoin Knots, Umbrel, MyNode, RaspiBlitz
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>📱</span>
                <span>Light Clients (SPV Wallets)</span>
              </h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-sm">
                  Los <strong className="text-white">Simplified Payment Verification (SPV)</strong> clients no descargan toda la blockchain. Solo descargan las cabeceras de los bloques y verifican que sus transacciones estén incluidas en bloques válidos.
                </p>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Características:</h4>
                  <ul className="text-sm space-y-1">
                    <li>→ Solo descargan ~100 MB de datos</li>
                    <li>→ Listos para usar en minutos</li>
                    <li>→ Ideales para dispositivos móviles</li>
                    <li>→ Confían parcialmente en los nodos completos</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
                    <p className="text-green-300 font-medium text-xs mb-1">Ventajas:</p>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>✓ Rápidos y ligeros</li>
                      <li>✓ Perfectos para móviles</li>
                      <li>✓ Fáciles de usar</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-3">
                    <p className="text-yellow-300 font-medium text-xs mb-1">Limitaciones:</p>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>→ Menos privacidad</li>
                      <li>→ Confían en full nodes</li>
                      <li>→ Menos seguridad que full node</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded p-3 mt-3">
                  <p className="text-orange-300 text-xs">
                    <strong>Ejemplos:</strong> BlueWallet, Muun, Electrum (en modo SPV)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>⛏️</span>
                <span>Mining Nodes</span>
              </h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-sm">
                  Nodos que además de validar transacciones, también participan activamente en la minería. Son full nodes con hardware especializado (ASICs) conectado.
                </p>
                <div className="bg-gray-900/50 rounded p-3">
                  <p className="text-xs text-gray-400">
                    Todos los mining nodes son full nodes, pero no todos los full nodes son mining nodes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🔌</span>
                <span>Pruned Nodes</span>
              </h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-sm">
                  Nodos que validan toda la blockchain pero solo mantienen los bloques más recientes. Después de validar bloques antiguos, los eliminan para ahorrar espacio.
                </p>
                <div className="bg-gray-900/50 rounded p-4">
                  <ul className="text-sm space-y-1">
                    <li>→ Solo requieren ~10-50 GB de espacio</li>
                    <li>→ Misma seguridad que full node</li>
                    <li>→ No pueden ayudar a otros nodos a sincronizar desde el inicio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo se propagan las transacciones */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Propagación de Transacciones</h2>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-6 text-gray-300">
              <p>
                Cuando creas una transacción, esta se propaga por la red Bitcoin de nodo en nodo hasta que todos los nodos la conocen. Este proceso toma solo unos segundos.
              </p>

              <div className="bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-white font-bold mb-4">Flujo de una transacción:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold text-sm">1</div>
                    <div>
                      <h4 className="text-white font-medium">Creación</h4>
                      <p className="text-sm">Creas y firmas la transacción en tu wallet</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold text-sm">2</div>
                    <div>
                      <h4 className="text-white font-medium">Broadcast</h4>
                      <p className="text-sm">Tu nodo/wallet envía la transacción a los nodos con los que está conectado</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold text-sm">3</div>
                    <div>
                      <h4 className="text-white font-medium">Validación</h4>
                      <p className="text-sm">Cada nodo que recibe la transacción la valida (firma, saldo, formato)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold text-sm">4</div>
                    <div>
                      <h4 className="text-white font-medium">Mempool</h4>
                      <p className="text-sm">Si es válida, se añade al mempool (memoria temporal) del nodo</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold text-sm">5</div>
                    <div>
                      <h4 className="text-white font-medium">Re-transmisión</h4>
                      <p className="text-sm">El nodo propaga la transacción a todos sus peers</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold text-sm">6</div>
                    <div>
                      <h4 className="text-white font-medium">Minado</h4>
                      <p className="text-sm">Un minero incluye tu transacción en el siguiente bloque</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold text-sm">7</div>
                    <div>
                      <h4 className="text-white font-medium">Confirmación</h4>
                      <p className="text-sm">El bloque se propaga y tu transacción queda confirmada</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-blue-300 font-bold mb-2">¿Qué es el Mempool?</h4>
                <p className="text-sm">
                  El mempool (memory pool) es la "sala de espera" de transacciones. Cada nodo mantiene su propia lista de transacciones válidas pero aún no confirmadas. Los mineros seleccionan transacciones del mempool para incluir en el siguiente bloque, típicamente priorizando las que pagan fees más altas.
                </p>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="text-orange-300 text-sm">
                  <strong>Curiosidad:</strong> Una transacción se propaga a casi toda la red global en menos de 5 segundos. Esta rapidez es clave para evitar ataques de doble gasto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Consenso */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Reglas de Consenso</h2>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                Las <strong className="text-white">reglas de consenso</strong> son las leyes fundamentales de Bitcoin que todos los nodos deben seguir. Estas reglas están escritas en el software y son verificadas automáticamente por cada nodo.
              </p>

              <div className="bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-white font-bold mb-3">Ejemplos de reglas de consenso:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>Solo existirán 21 millones de bitcoins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>Los bloques se minan aproximadamente cada 10 minutos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>No puedes gastar bitcoins que no tienes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>No puedes gastar la misma moneda dos veces (doble gasto)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>Las transacciones deben estar firmadas correctamente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">✓</span>
                    <span>El tamaño de bloque está limitado</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <h4 className="text-purple-300 font-bold mb-2">¿Quién decide las reglas?</h4>
                <p className="text-sm mb-2">
                  Los usuarios que ejecutan nodos completos. Si un minero o entidad intenta romper las reglas, los nodos simplemente rechazan sus bloques. Esto hace que Bitcoin sea verdaderamente descentralizado.
                </p>
                <p className="text-xs text-gray-400 italic">
                  "No votes for my freedom. No votes for my property." - Bitcoin es un sistema opt-in donde cada participante valida las reglas por sí mismo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué ejecutar un nodo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">¿Por qué ejecutar tu propio nodo?</h2>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-green-300 font-bold mb-3 flex items-center gap-2">
                  <span>✓</span>
                  <span>Soberanía financiera</span>
                </h3>
                <p className="text-gray-300 text-sm">
                  No confías en nadie más para verificar tus transacciones. Tú validas todas las reglas.
                </p>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-green-300 font-bold mb-3 flex items-center gap-2">
                  <span>✓</span>
                  <span>Máxima privacidad</span>
                </h3>
                <p className="text-gray-300 text-sm">
                  No revelas qué direcciones te pertenecen a terceros. Tu nodo consulta tu propio historial.
                </p>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-green-300 font-bold mb-3 flex items-center gap-2">
                  <span>✓</span>
                  <span>Contribuyes a la descentralización</span>
                </h3>
                <p className="text-gray-300 text-sm">
                  Cada nodo adicional hace la red más robusta y resistente a ataques y censura.
                </p>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-green-300 font-bold mb-3 flex items-center gap-2">
                  <span>✓</span>
                  <span>Votas con tu nodo</span>
                </h3>
                <p className="text-gray-300 text-sm">
                  En caso de propuestas de cambio al protocolo, tu nodo es tu voto. Solo aceptas las reglas que tú apruebas.
                </p>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mt-6">
                <p className="text-orange-300 text-sm font-medium">
                  "Don't trust, verify" - La filosofía Bitcoin es que no debes confiar ciegamente en nadie. Tu nodo te permite verificar todo por ti mismo.
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
                <span>Bitcoin funciona como una red P2P sin servidores centrales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Los nodos validan transacciones y bloques según reglas de consenso</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Full nodes ofrecen máxima seguridad y privacidad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Light clients son convenientes para uso móvil</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Las transacciones se propagan globalmente en segundos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Ejecutar tu propio nodo te da soberanía total</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Navegación */}
        <nav className="flex justify-between items-center pt-8 border-t border-gray-700">
          <Link
            href="/cursos/bitcoin-desde-cero/leccion/3-1"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span>←</span>
            <span>Anterior: Minería</span>
          </Link>

          <Link
            href="/cursos/bitcoin-desde-cero/leccion/3-3"
            className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
          >
            <span>Siguiente: Economía de Bitcoin</span>
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
