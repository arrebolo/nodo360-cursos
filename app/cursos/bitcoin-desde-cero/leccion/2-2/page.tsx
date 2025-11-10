import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo funcionan las Transacciones Bitcoin - Bitcoin desde Cero | Nodo360',
  description: 'Aprende cómo se envía Bitcoin, qué son los inputs y outputs, cómo funcionan las fees, el mempool, y el proceso de confirmación de transacciones.',
  keywords: 'transacciones bitcoin, enviar bitcoin, fees bitcoin, mempool, confirmaciones bitcoin, UTXO, sat/vB',
  openGraph: {
    title: 'Transacciones Bitcoin: Cómo se envía Bitcoin',
    description: 'El viaje de tu Bitcoin de una wallet a otra',
    type: 'article',
  }
};

export default function Leccion22() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900">
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cursos/bitcoin-desde-cero" className="text-orange-400 hover:text-orange-300 transition-colors">
              ← Volver al curso
            </Link>
            <div className="text-gray-400 text-sm">
              Módulo 2 • Lección 2 de 3
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
            Transacciones: Cómo se envía Bitcoin
          </h1>
          <p className="text-xl text-gray-300">
            El viaje de tu Bitcoin de una wallet a otra
          </p>
        </div>

        <section className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">¿Qué es una transacción Bitcoin?</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Una <strong className="text-white">transacción Bitcoin</strong> es una transferencia de valor entre direcciones Bitcoin que se registra en la blockchain. Es el mecanismo fundamental que permite enviar y recibir bitcoins.
            </p>
            <p>
              A diferencia de una transferencia bancaria tradicional, las transacciones Bitcoin son:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">→</span>
                <span><strong className="text-white">Irreversibles:</strong> Una vez confirmada, no se puede deshacer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">→</span>
                <span><strong className="text-white">Sin intermediarios:</strong> No hay banco que pueda bloquearla</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">→</span>
                <span><strong className="text-white">Públicas:</strong> Cualquiera puede ver las transacciones en la blockchain</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">→</span>
                <span><strong className="text-white">Pseudónimas:</strong> Las direcciones no están vinculadas a identidades reales</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Anatomía de una Transacción</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-6">
              <div>
                <p className="text-gray-300 mb-6">
                  Una transacción Bitcoin tiene tres componentes principales:
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-900/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <span className="text-2xl">📥</span>
                      <span>1. Inputs (Entradas)</span>
                    </h3>
                    <p className="text-gray-300 mb-3">
                      Los bitcoins que vas a gastar. Son referencias a outputs de transacciones anteriores que recibiste.
                    </p>
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded p-3">
                      <p className="text-blue-300 text-sm">
                        Piensa en los inputs como billetes que sacas de tu cartera. Si quieres pagar $15 y solo tienes un billete de $20, usas todo el billete (input) y recibes cambio (output adicional).
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <span className="text-2xl">📤</span>
                      <span>2. Outputs (Salidas)</span>
                    </h3>
                    <p className="text-gray-300 mb-3">
                      Las direcciones destino y las cantidades que se envían. Puede haber múltiples outputs en una transacción.
                    </p>
                    <ul className="text-gray-400 text-sm space-y-2">
                      <li>→ <strong className="text-white">Output de pago:</strong> Va al destinatario</li>
                      <li>→ <strong className="text-white">Output de cambio:</strong> Vuelve a tu wallet (lo que sobra)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <span className="text-2xl">💰</span>
                      <span>3. Fee (Comisión)</span>
                    </h3>
                    <p className="text-gray-300 mb-3">
                      La diferencia entre inputs y outputs. Va para el minero que incluya tu transacción en un bloque.
                    </p>
                    <div className="bg-gray-900/80 rounded p-3 font-mono text-sm">
                      <div className="text-gray-400">Fee = Total Inputs - Total Outputs</div>
                      <div className="text-orange-400 mt-2">Ejemplo: 0.01 BTC (input) - 0.0095 BTC (outputs) = 0.0005 BTC (fee)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">UTXOs: El modelo de Bitcoin</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                Bitcoin utiliza el modelo <strong className="text-white">UTXO (Unspent Transaction Output)</strong> o "salida de transacción no gastada". Es diferente al modelo de balance de cuenta que usan los bancos.
              </p>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6 my-6">
                <h3 className="text-white font-bold mb-3">📦 Analogía de las cajas</h3>
                <p className="text-orange-300 mb-3">
                  Imagina que tus bitcoins están en cajas cerradas de diferentes tamaños:
                </p>
                <ul className="text-orange-300 text-sm space-y-2">
                  <li>→ Tienes una caja con 0.5 BTC, otra con 0.3 BTC y otra con 0.2 BTC</li>
                  <li>→ Tu "balance" es 1 BTC, pero son 3 cajas separadas (UTXOs)</li>
                  <li>→ Para pagar 0.6 BTC, debes abrir la caja de 0.5 y la de 0.3 (total 0.8)</li>
                  <li>→ Pagas 0.6, recibes 0.2 de cambio en una nueva caja</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-6">
                <h4 className="text-white font-bold mb-3">Ejemplo práctico:</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500/20 border border-blue-500/50 rounded px-3 py-2">
                      <div className="text-blue-300 font-mono">UTXO 1: 0.5 BTC</div>
                    </div>
                    <span className="text-gray-500">+</span>
                    <div className="bg-blue-500/20 border border-blue-500/50 rounded px-3 py-2">
                      <div className="text-blue-300 font-mono">UTXO 2: 0.3 BTC</div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-center">↓ Quiero enviar 0.6 BTC</div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500/20 border border-green-500/50 rounded px-3 py-2 flex-1">
                      <div className="text-green-300 font-mono text-xs">Output 1: 0.6 BTC → Destinatario</div>
                    </div>
                    <div className="bg-orange-500/20 border border-orange-500/50 rounded px-3 py-2 flex-1">
                      <div className="text-orange-300 font-mono text-xs">Output 2: 0.19 BTC → Mi cambio</div>
                    </div>
                    <div className="bg-red-500/20 border border-red-500/50 rounded px-3 py-2">
                      <div className="text-red-300 font-mono text-xs">Fee: 0.01 BTC</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-4">
                <p className="text-yellow-300 text-sm">
                  <strong>Por qué importa:</strong> Tener muchos UTXOs pequeños significa fees más altas (más inputs = transacción más grande). Es como pagar con muchas monedas vs un solo billete.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Transaction Fees (Comisiones)</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">¿Cómo se calculan las fees?</h3>
              
              <p className="text-gray-300 mb-4">
                Las fees se miden en <strong className="text-white">satoshis por vByte (sat/vB)</strong>:
              </p>

              <div className="bg-gray-900/50 rounded-lg p-6 mb-4">
                <div className="font-mono text-sm space-y-2">
                  <div className="text-gray-400">Fee total = Tamaño de transacción (vBytes) × Fee rate (sat/vB)</div>
                  <div className="text-orange-400 mt-3">Ejemplo:</div>
                  <div className="text-white">Transacción de 250 vBytes × 20 sat/vB = 5,000 sats (~$2)</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded p-4">
                  <h4 className="text-white font-medium mb-2">Factores que afectan el tamaño:</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>→ Número de inputs (más inputs = transacción más grande)</li>
                    <li>→ Número de outputs</li>
                    <li>→ Tipo de dirección (SegWit es más pequeño que Legacy)</li>
                  </ul>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/30 rounded p-4">
                  <h4 className="text-white font-medium mb-2">Factores que afectan el fee rate:</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>→ <strong className="text-white">Congestión de red:</strong> Más demanda = fees más altas</li>
                    <li>→ <strong className="text-white">Urgencia:</strong> Quieres confirmación rápida = paga más</li>
                    <li>→ <strong className="text-white">Competencia:</strong> Compites con otras transacciones por espacio en bloque</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Niveles de prioridad:</h3>
              
              <div className="space-y-3">
                <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-bold">🐌 Baja prioridad (1-5 sat/vB)</h4>
                    <span className="text-green-400 text-sm">Económico</span>
                  </div>
                  <p className="text-gray-400 text-sm">Confirmación en horas o días. Bueno para pagos no urgentes.</p>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-bold">🚶 Media prioridad (10-20 sat/vB)</h4>
                    <span className="text-yellow-400 text-sm">Balanceado</span>
                  </div>
                  <p className="text-gray-400 text-sm">Confirmación en ~30-60 minutos. El estándar para la mayoría.</p>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-bold">🚀 Alta prioridad (50+ sat/vB)</h4>
                    <span className="text-red-400 text-sm">Urgente</span>
                  </div>
                  <p className="text-gray-400 text-sm">Confirmación en el siguiente bloque (~10 min). Para urgencias.</p>
                </div>
              </div>

              <div className="mt-6 bg-orange-500/10 border border-orange-500/30 rounded p-4">
                <p className="text-orange-300 text-sm">
                  <strong>Tip:</strong> Puedes ver las fees actuales en sitios como mempool.space antes de enviar una transacción.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">El Mempool</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                El <strong className="text-white">mempool</strong> (memory pool) es la sala de espera de las transacciones. Cuando envías una transacción, primero va al mempool donde espera a ser incluida en un bloque.
              </p>

              <div className="bg-gray-900/50 rounded-lg p-6 my-6">
                <h4 className="text-white font-bold mb-3">Flujo de una transacción:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <p className="text-white font-medium">Envías la transacción desde tu wallet</p>
                      <p className="text-gray-400 text-sm">Se propaga por la red de nodos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <p className="text-white font-medium">Llega al mempool</p>
                      <p className="text-gray-400 text-sm">Espera junto con miles de otras transacciones</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <p className="text-white font-medium">Mineros seleccionan transacciones</p>
                      <p className="text-gray-400 text-sm">Priorizan las que pagan fees más altas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div>
                      <p className="text-white font-medium">Se incluye en un bloque</p>
                      <p className="text-gray-400 text-sm">¡Primera confirmación!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded p-4">
                <p className="text-blue-300 text-sm">
                  <strong>Estado del mempool:</strong> Cuando la red está congestionada, el mempool se llena y las fees suben. Durante periodos tranquilos, el mempool se vacía y las fees bajan.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Confirmaciones</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                Una <strong className="text-white">confirmación</strong> ocurre cuando tu transacción se incluye en un bloque que se añade a la blockchain. Cada nuevo bloque que se mina después añade otra confirmación.
              </p>

              <div className="bg-gray-900/50 rounded-lg p-6 my-6">
                <h4 className="text-white font-bold mb-4">Nivel de seguridad por confirmaciones:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">0</span>
                    <div>
                      <p className="text-white font-medium">Sin confirmar</p>
                      <p className="text-gray-400 text-sm">Visible pero no final. Puede ser revertida (raro).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">1</span>
                    <div>
                      <p className="text-white font-medium">1 confirmación</p>
                      <p className="text-gray-400 text-sm">Aceptable para pequeñas cantidades o compras cotidianas.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">3</span>
                    <div>
                      <p className="text-white font-medium">3 confirmaciones</p>
                      <p className="text-gray-400 text-sm">Bueno para cantidades medias. ~30 minutos.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">6</span>
                    <div>
                      <p className="text-white font-medium">6 confirmaciones</p>
                      <p className="text-gray-400 text-sm">Considerado final. Estándar para grandes cantidades. ~1 hora.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded p-4">
                <p className="text-orange-300 text-sm">
                  <strong>Regla práctica:</strong> Para cantidades importantes, espera 6 confirmaciones. Para una taza de café, 1 confirmación (o incluso 0) suele ser suficiente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Replace-by-Fee (RBF)</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Replace-by-Fee</strong> permite reemplazar una transacción no confirmada con una nueva versión que paga fees más altas. Útil si tu transacción está atascada.
              </p>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded p-4">
                <h4 className="text-white font-medium mb-2">¿Cuándo usar RBF?</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>→ Tu transacción lleva horas sin confirmar</li>
                  <li>→ Pagaste fees demasiado bajas y quieres acelerar</li>
                  <li>→ La red se congestionó después de enviar</li>
                </ul>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-4 mt-4">
                <p className="text-yellow-300 text-sm">
                  <strong>Nota:</strong> No todas las wallets soportan RBF. Algunas wallets populares que lo soportan: Electrum, BlueWallet, Sparrow.
                </p>
              </div>
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
                <span>Las transacciones tienen inputs, outputs y fees</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Bitcoin usa el modelo UTXO (como cajas de bitcoins)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Las fees se miden en sat/vB y varían según congestión</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>El mempool es la sala de espera de transacciones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>6 confirmaciones = considerado irreversible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>RBF permite acelerar transacciones atascadas</span>
              </li>
            </ul>
          </div>
        </section>

        <nav className="flex justify-between items-center pt-8 border-t border-gray-700">
          <Link 
            href="/cursos/bitcoin-desde-cero/leccion/2-1"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span>←</span>
            <span>Anterior: Direcciones y Wallets</span>
          </Link>
          
          <Link 
            href="/cursos/bitcoin-desde-cero/leccion/2-3"
            className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
          >
            <span>Siguiente: La Blockchain</span>
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
