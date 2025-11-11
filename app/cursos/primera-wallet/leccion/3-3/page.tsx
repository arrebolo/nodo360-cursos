import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lección 3.3: Fees y Confirmaciones | Tu Primera Wallet - Nodo360',
  description: 'Entiende los fees de Bitcoin, cómo elegir el fee correcto, qué son las confirmaciones, transacciones atascadas (RBF y CPFP) y cómo usar mempool.space.',
  keywords: 'fees bitcoin, confirmaciones bitcoin, sat/vB, RBF, CPFP, mempool.space, transacciones atascadas, prioridad transacción, comisiones bitcoin',
  openGraph: {
    title: 'Fees y Confirmaciones en Bitcoin | Tu Primera Wallet',
    description: 'Aprende cómo funcionan los fees de Bitcoin, cómo elegir el fee correcto y qué hacer si una transacción se atasca.',
    type: 'article',
  }
}

export default function Leccion33WalletPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/cursos" className="hover:text-green-400 transition-colors">Cursos</Link>
            <span>/</span>
            <Link href="/cursos/primera-wallet" className="hover:text-green-400 transition-colors">Tu Primera Wallet</Link>
            <span>/</span>
            <span className="text-white">Lección 3.3</span>
          </nav>

          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
              MÓDULO 3
            </span>
            <span className="text-gray-400 text-sm">15 minutos</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Fees y Confirmaciones
          </h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-12">
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-3">📚 En esta lección aprenderás:</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Qué son los fees y por qué NO son porcentaje</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Cómo elegir el fee correcto (bajo/medio/alto)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Qué son las confirmaciones (0, 1, 3, 6+)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Transacciones atascadas: RBF y CPFP</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Cómo usar mempool.space</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="prose prose-invert max-w-none">

          <h2 className="text-2xl font-bold text-white mb-4">💸 ¿Qué son los Fees?</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Los <strong className="text-white">fees</strong> (o comisiones) son el pago que haces a los mineros para que incluyan tu transacción en un bloque. Piensa en ello como una "propina" para priorizar tu transacción.
          </p>

          <div className="bg-orange-900/30 border-2 border-orange-500 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">⚠️ IMPORTANTE: Los fees NO son porcentaje</h3>
            <p className="text-orange-300 mb-3">
              A diferencia de PayPal o tarjetas de crédito, <strong>los fees de Bitcoin NO dependen del monto</strong> que envíes. Dependen del <strong>tamaño en bytes</strong> de tu transacción.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-900/20 border border-red-500/30 rounded p-4">
                <p className="text-red-300 text-sm">❌ NO funciona así:</p>
                <p className="text-gray-400 text-xs mt-2">Enviar $100 = $3 fee</p>
                <p className="text-gray-400 text-xs">Enviar $10,000 = $300 fee</p>
              </div>
              <div className="bg-green-900/20 border border-green-500/30 rounded p-4">
                <p className="text-green-300 text-sm">✓ Funciona así:</p>
                <p className="text-gray-400 text-xs mt-2">Enviar $100 = $1.50 fee</p>
                <p className="text-gray-400 text-xs">Enviar $10,000 = $1.50 fee</p>
              </div>
            </div>
            <p className="text-orange-300 text-sm mt-4">
              💡 Puedes enviar un millón de dólares por el mismo fee que $10. ¡Por eso Bitcoin es genial para grandes transferencias!
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">📊 ¿De Qué Depende el Fee?</h2>

          <div className="space-y-4 mb-12">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">1. Tamaño de la transacción (en bytes)</h3>
              <p className="text-gray-300 text-sm mb-3">
                Una transacción típica pesa 200-250 bytes. Si tienes muchos "inputs" (pagos recibidos previamente), la transacción pesará más y el fee será mayor.
              </p>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded p-3">
                <p className="text-blue-300 text-xs">
                  💡 Analogía: Es como enviar un paquete por correo - cuanto más pesa, más cuesta enviarlo (sin importar el valor de lo que hay dentro)
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">2. Congestión de la red</h3>
              <p className="text-gray-300 text-sm mb-3">
                Cuando hay muchas transacciones esperando (mempool lleno), los fees suben porque los mineros priorizan las que pagan más.
              </p>
              <div className="space-y-2 mt-4">
                <div className="flex justify-between items-center bg-green-900/20 rounded p-3">
                  <span className="text-gray-300 text-sm">Red tranquila 😴</span>
                  <span className="text-green-400 text-sm font-bold">$0.50 - $2</span>
                </div>
                <div className="flex justify-between items-center bg-yellow-900/20 rounded p-3">
                  <span className="text-gray-300 text-sm">Red normal 😐</span>
                  <span className="text-yellow-400 text-sm font-bold">$2 - $5</span>
                </div>
                <div className="flex justify-between items-center bg-red-900/20 rounded p-3">
                  <span className="text-gray-300 text-sm">Red congestionada 🔥</span>
                  <span className="text-red-400 text-sm font-bold">$10 - $50+</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">3. Urgencia que tengas</h3>
              <p className="text-gray-300 text-sm">
                Tú eliges cuánto pagar basado en qué tan rápido necesitas que se confirme tu transacción.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">⚡ Cómo Elegir el Fee Correcto</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-500/40 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🐌</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Fee Bajo (Low Priority)</h3>
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-green-600 text-white text-xs rounded">1-5 sat/vB</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    <strong className="text-white">Tiempo estimado:</strong> 1-24 horas (o más)
                  </p>
                  <div className="bg-green-900/20 rounded p-3">
                    <p className="text-green-300 text-sm font-bold mb-2">✓ Úsalo cuando:</p>
                    <ul className="text-green-300 text-xs space-y-1">
                      <li>→ No tienes prisa</li>
                      <li>→ La red está tranquila</li>
                      <li>→ Quieres ahorrar en fees</li>
                      <li>→ Mueves fondos entre tus propias wallets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⚡</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Fee Medio (Medium Priority)</h3>
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded">10-30 sat/vB</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    <strong className="text-white">Tiempo estimado:</strong> 10-60 minutos
                  </p>
                  <div className="bg-blue-900/20 rounded p-3">
                    <p className="text-blue-300 text-sm font-bold mb-2">✓ Úsalo cuando:</p>
                    <ul className="text-blue-300 text-xs space-y-1">
                      <li>→ Quieres confirmación en la próxima hora</li>
                      <li>→ Es tu primera transacción (recomendado)</li>
                      <li>→ Pagas a alguien y quieren ver confirmación pronto</li>
                      <li>→ Balance entre costo y velocidad</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-red-800/20 border-2 border-orange-500/40 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🚀</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Fee Alto (High Priority)</h3>
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-red-600 text-white text-xs rounded">50+ sat/vB</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    <strong className="text-white">Tiempo estimado:</strong> 10-30 minutos
                  </p>
                  <div className="bg-orange-900/20 rounded p-3">
                    <p className="text-orange-300 text-sm font-bold mb-2">✓ Úsalo cuando:</p>
                    <ul className="text-orange-300 text-xs space-y-1">
                      <li>→ NECESITAS confirmación urgente</li>
                      <li>→ La red está muy congestionada</li>
                      <li>→ Compras en comercio que espera confirmación rápida</li>
                      <li>→ No te importa pagar extra por velocidad</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">✅ ¿Qué son las Confirmaciones?</h2>

          <p className="text-gray-300 mb-6">
            Una <strong className="text-white">confirmación</strong> significa que tu transacción fue incluida en un bloque minado. Cada nuevo bloque que se mina después añade una confirmación más.
          </p>

          <div className="space-y-4 mb-12">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">0️⃣</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">0 Confirmaciones (Unconfirmed)</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    La transacción está en el mempool esperando ser minada. Es visible en la red pero aún no está en la blockchain.
                  </p>
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded p-3">
                    <p className="text-yellow-300 text-xs">
                      ⚠️ Existe un pequeño riesgo de doble gasto. No aceptes pagos grandes sin confirmación.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">1️⃣</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">1 Confirmación</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    La transacción fue incluida en un bloque. Ya está en la blockchain.
                  </p>
                  <div className="bg-blue-900/20 rounded p-3">
                    <p className="text-blue-300 text-xs">
                      ✓ Suficiente para pagos pequeños ($10-100). El riesgo de reversión es muy bajo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-500/40 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">3️⃣</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">3 Confirmaciones</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Tres bloques después. Confirmación estándar para la mayoría de exchanges y servicios.
                  </p>
                  <div className="bg-green-900/20 rounded p-3">
                    <p className="text-green-300 text-xs">
                      ✓ Seguro para pagos medianos ($100-1000). Prácticamente imposible de revertir.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">6️⃣</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">6+ Confirmaciones</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    El estándar de oro. Considerado completamente irreversible.
                  </p>
                  <div className="bg-purple-900/20 rounded p-3">
                    <p className="text-purple-300 text-xs">
                      ✓ Para pagos grandes ($1000+). Máxima seguridad. Los exchanges esperan 6 confirmaciones para depósitos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-12">
            <h3 className="text-lg font-bold text-white mb-3">⏱️ ¿Cuánto tiempo toma cada confirmación?</h3>
            <p className="text-gray-300 text-sm mb-3">
              En promedio, se mina un bloque cada 10 minutos. Por lo tanto:
            </p>
            <div className="space-y-2">
              <div className="flex justify-between items-center bg-gray-900/50 rounded p-3">
                <span className="text-gray-300 text-sm">1 confirmación</span>
                <span className="text-blue-400 text-sm">~10 minutos</span>
              </div>
              <div className="flex justify-between items-center bg-gray-900/50 rounded p-3">
                <span className="text-gray-300 text-sm">3 confirmaciones</span>
                <span className="text-blue-400 text-sm">~30 minutos</span>
              </div>
              <div className="flex justify-between items-center bg-gray-900/50 rounded p-3">
                <span className="text-gray-300 text-sm">6 confirmaciones</span>
                <span className="text-blue-400 text-sm">~60 minutos</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">😰 Transacciones Atascadas</h2>

          <p className="text-gray-300 mb-6">
            Si elegiste un fee muy bajo y la red se congestiona, tu transacción puede quedar "atascada" en el mempool por horas o días.
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>🔄</span>
                <span>RBF (Replace-By-Fee)</span>
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Si activaste RBF al enviar, puedes "reemplazar" tu transacción atascada con una nueva que paga fee más alta.
              </p>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded p-4">
                <p className="text-blue-300 text-sm font-bold mb-2">Cómo usar RBF:</p>
                <ol className="text-blue-300 text-xs space-y-1">
                  <li>1. En tu wallet, busca la transacción pendiente</li>
                  <li>2. Tap en "Bump Fee" o "Aumentar Fee"</li>
                  <li>3. Elige un fee más alto</li>
                  <li>4. La transacción se reemplaza con la nueva</li>
                </ol>
              </div>
              <div className="bg-orange-900/20 rounded p-3 mt-3">
                <p className="text-orange-300 text-xs">
                  ⚠️ No todas las wallets soportan RBF. BlueWallet sí lo soporta.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>👶</span>
                <span>CPFP (Child-Pays-For-Parent)</span>
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Si recibes una transacción atascada, puedes "acelerar" gastando esos fondos con un fee alto. El minero minará ambas transacciones juntas.
              </p>
              <div className="bg-purple-900/20 border border-purple-500/30 rounded p-4">
                <p className="text-purple-300 text-xs">
                  💡 Es más avanzado. Lo usa principalmente el receptor de la transacción atascada.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>⏳</span>
                <span>Simplemente esperar</span>
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Si no tienes urgencia, espera. Eventualmente:
              </p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>→ La red se descongestiona y tu transacción se confirma</li>
                <li>→ O después de ~2 semanas, la transacción se descarta del mempool y los fondos vuelven a tu wallet</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">📊 Usar mempool.space</h2>

          <p className="text-gray-300 mb-6">
            <strong className="text-white">mempool.space</strong> es el mejor explorador de bloques para ver el estado de la red en tiempo real.
          </p>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-white mb-4">¿Qué puedes ver en mempool.space?</h3>

            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded p-4">
                <h4 className="text-white font-bold text-sm mb-2">📈 Estado actual del mempool</h4>
                <p className="text-gray-300 text-xs">
                  Cuántas transacciones están esperando y qué fees se están pagando en este momento
                </p>
              </div>

              <div className="bg-gray-900/50 rounded p-4">
                <h4 className="text-white font-bold text-sm mb-2">💰 Fees recomendados</h4>
                <p className="text-gray-300 text-xs mb-2">
                  Te dice cuánto debes pagar para:
                </p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Alto (next block):</span>
                    <span className="text-green-400">50 sat/vB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Medio (30 min):</span>
                    <span className="text-yellow-400">20 sat/vB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Bajo (1 hora):</span>
                    <span className="text-blue-400">10 sat/vB</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded p-4">
                <h4 className="text-white font-bold text-sm mb-2">🔍 Buscar tu transacción</h4>
                <p className="text-gray-300 text-xs">
                  Pega tu TXID para ver estado, confirmaciones, fee pagado, y más
                </p>
              </div>

              <div className="bg-gray-900/50 rounded p-4">
                <h4 className="text-white font-bold text-sm mb-2">⏱️ Tiempo de espera estimado</h4>
                <p className="text-gray-300 text-xs">
                  Te dice aproximadamente cuánto tardará tu transacción según el fee que pagaste
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-white mb-3">💡 Consejo Pro: Revisa mempool.space ANTES de enviar</h3>
            <p className="text-gray-300 text-sm">
              Antes de hacer una transacción, ve a mempool.space para ver qué fees se están pagando ahora. Así sabrás si es buen momento para enviar (fees bajos) o si deberías esperar.
            </p>
          </div>

        </section>

        <section className="my-12 bg-gray-800/50 border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">📝 Resumen de la Lección</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Los fees de Bitcoin <strong className="text-white">NO son porcentaje</strong> - dependen del tamaño en bytes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Elige fee según urgencia: bajo (horas), medio (30-60 min), alto (10-30 min)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span><strong className="text-white">1 confirmación</strong> es suficiente para pagos pequeños</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span><strong className="text-white">6 confirmaciones</strong> son el estándar para pagos grandes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Si tu transacción se atasca, usa RBF para aumentar el fee</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Usa mempool.space para ver fees en tiempo real</span>
            </li>
          </ul>
        </section>

        <section className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-800">
          <Link href="/cursos/primera-wallet/leccion/3-2" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors">
            ← Lección Anterior
          </Link>

          <Link href="/cursos/primera-wallet" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
            Completar Curso →
          </Link>
        </section>

      </article>
    </main>
  )
}
