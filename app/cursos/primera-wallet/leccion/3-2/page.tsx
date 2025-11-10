import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lección 3.2: Cómo Enviar Bitcoin | Tu Primera Wallet - Nodo360',
  description: 'Guía completa para enviar Bitcoin de forma segura: proceso de 8 pasos con verificaciones, envíos de prueba, uso de exploradores de bloques.',
}

export default function Leccion32WalletPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/cursos" className="hover:text-green-400 transition-colors">Cursos</Link>
            <span>/</span>
            <Link href="/cursos/primera-wallet" className="hover:text-green-400 transition-colors">Tu Primera Wallet</Link>
            <span>/</span>
            <span className="text-white">Lección 3.2</span>
          </nav>

          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
              MÓDULO 3
            </span>
            <span className="text-gray-400 text-sm">18 minutos</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Cómo Enviar Bitcoin
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
                <span>Preparación esencial antes de enviar Bitcoin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Proceso de 8 pasos con verificaciones de seguridad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>La regla de oro: envíos de prueba primero</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Cómo verificar transacciones en exploradores de bloques</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-900/30 border-2 border-red-500 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-300 mb-3">⚠️ ADVERTENCIA CRÍTICA</h3>
            <p className="text-red-300 mb-2">
              Las transacciones Bitcoin son <strong>IRREVERSIBLES</strong>. Una vez enviado, no hay botón de "deshacer", no hay servicio al cliente, no hay forma de recuperarlo.
            </p>
            <p className="text-red-300 text-sm">
              Por eso es FUNDAMENTAL seguir cada paso con atención extrema.
            </p>
          </div>
        </section>

        <section className="prose prose-invert max-w-none">

          <h2 className="text-2xl font-bold text-white mb-6">🎯 Preparación Antes de Enviar</h2>

          <div className="space-y-4 mb-12">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>✓</span>
                <span>Verifica que tienes la dirección correcta</span>
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Pide al destinatario que te envíe su dirección por <strong className="text-white">dos canales diferentes</strong> (ejemplo: WhatsApp + Email) para confirmar que es la misma.
              </p>
              <div className="bg-orange-900/20 border border-orange-500/30 rounded p-3">
                <p className="text-orange-300 text-xs">
                  ⚠️ El malware puede cambiar direcciones copiadas. Verificar en dos canales reduce este riesgo.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>✓</span>
                <span>Asegúrate de tener fondos suficientes</span>
              </h3>
              <p className="text-gray-300 text-sm">
                Necesitas el monto a enviar MÁS el fee de transacción. Si intentas enviar todo, la wallet te cobrará el fee y enviará menos del monto total.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>✓</span>
                <span>Elige un momento con tiempo suficiente</span>
              </h3>
              <p className="text-gray-300 text-sm">
                No envíes Bitcoin con prisa. Necesitas concentración total para verificar cada detalle.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>✓</span>
                <span>Ten internet estable</span>
              </h3>
              <p className="text-gray-300 text-sm">
                No uses WiFi pública. Conecta desde tu casa o usa datos móviles.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">📤 Proceso de Envío: 8 Pasos con Verificaciones</h2>

          <div className="space-y-6 mb-12">
            {/* Paso 1 */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Abre tu wallet y tap "Enviar"</h3>
                  <p className="text-gray-300 text-sm">
                    Abre tu wallet (ej: BlueWallet) y busca el botón "Enviar" o "Send"
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Ingresa la dirección del destinatario</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Tienes dos opciones:
                  </p>
                  <div className="space-y-2">
                    <div className="bg-purple-900/20 rounded p-3">
                      <p className="text-purple-300 text-sm">📷 <strong>Escanear QR:</strong> El método más seguro (evita errores de tipeo)</p>
                    </div>
                    <div className="bg-purple-900/20 rounded p-3">
                      <p className="text-purple-300 text-sm">📋 <strong>Pegar dirección:</strong> Usa el botón copiar del destinatario, luego pega</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 3 - CRÍTICO */}
            <div className="bg-gradient-to-br from-red-900/40 to-orange-900/30 border-4 border-red-500/60 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">VERIFICAR LA DIRECCIÓN</h3>
                  <div className="bg-red-900/40 border border-red-500/40 rounded-lg p-4 mb-3">
                    <p className="text-red-300 font-bold mb-2">🔴 PASO CRÍTICO - NUNCA LO SALTES</p>
                    <p className="text-red-300 text-sm">
                      El malware puede cambiar direcciones al copiar/pegar. Verifica MANUALMENTE:
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-900/50 rounded p-4">
                      <p className="text-white font-bold mb-2">Verifica visualmente:</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>✓ Los primeros 6 caracteres</li>
                        <li>✓ Los últimos 6 caracteres</li>
                        <li>✓ Compara con la dirección original</li>
                      </ul>
                    </div>
                    <div className="bg-orange-900/20 rounded p-3">
                      <p className="text-orange-300 text-sm">
                        💡 Lee en voz alta los caracteres para mayor precisión
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-500/40 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Ingresa la cantidad</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Puedes ingresar el monto en:
                  </p>
                  <div className="space-y-2">
                    <div className="bg-green-900/20 rounded p-3">
                      <p className="text-green-300 text-sm">₿ <strong>BTC:</strong> Ejemplo: 0.001 BTC</p>
                    </div>
                    <div className="bg-green-900/20 rounded p-3">
                      <p className="text-green-300 text-sm">💵 <strong>Tu moneda local:</strong> Ejemplo: $50 USD (se convierte automático)</p>
                    </div>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded p-3 mt-3">
                    <p className="text-yellow-300 text-xs">
                      ⚠️ Si envías "todo", recuerda que se descontará el fee. No recibirá el 100% del saldo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border-2 border-cyan-500/40 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Elige el fee de transacción</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    La wallet te sugerirá opciones de fee:
                  </p>
                  <div className="space-y-2">
                    <div className="bg-gray-800 rounded p-3 flex justify-between items-center">
                      <div>
                        <p className="text-white font-bold text-sm">🐌 Bajo</p>
                        <p className="text-gray-400 text-xs">1-24 horas</p>
                      </div>
                      <p className="text-green-400 text-sm">$0.50</p>
                    </div>
                    <div className="bg-gray-800 rounded p-3 flex justify-between items-center">
                      <div>
                        <p className="text-white font-bold text-sm">⚡ Medio</p>
                        <p className="text-gray-400 text-xs">10-60 minutos</p>
                      </div>
                      <p className="text-yellow-400 text-sm">$1.50</p>
                    </div>
                    <div className="bg-gray-800 rounded p-3 flex justify-between items-center">
                      <div>
                        <p className="text-white font-bold text-sm">🚀 Alto</p>
                        <p className="text-gray-400 text-xs">10-30 minutos</p>
                      </div>
                      <p className="text-red-400 text-sm">$3.00</p>
                    </div>
                  </div>
                  <div className="bg-cyan-900/20 rounded p-3 mt-3">
                    <p className="text-cyan-300 text-xs">
                      💡 Para tu primer envío, elige "Medio" para balance entre velocidad y costo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 6 - Revisión Final */}
            <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/30 border-4 border-orange-500/60 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">6</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">REVISIÓN FINAL (Checklist)</h3>
                  <div className="bg-orange-900/40 border border-orange-500/40 rounded-lg p-4 mb-3">
                    <p className="text-orange-300 font-bold mb-2">🔶 ÚLTIMO CONTROL ANTES DE ENVIAR</p>
                  </div>
                  <div className="space-y-2">
                    {[
                      'Dirección correcta (verifica primeros y últimos 6 caracteres)',
                      'Cantidad correcta',
                      'Fee seleccionado',
                      'Suficiente saldo para cubrir monto + fee',
                      'NO estás usando WiFi pública'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-gray-900/50 rounded p-2">
                        <span className="text-orange-400">☐</span>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 7 */}
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-500/40 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">7</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Tap "Enviar" y confirma</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Presiona el botón final "Enviar" o "Send". Algunas wallets pedirán confirmación adicional (PIN, huella, Face ID).
                  </p>
                  <div className="bg-green-900/20 rounded p-3">
                    <p className="text-green-300 text-sm">
                      ✓ La wallet broadcast la transacción a la red Bitcoin
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 8 */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">8</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Confirma que se envió</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Verás la transacción en tu historial con estado "Pendiente" o "Unconfirmed". Guarda el Transaction ID (TXID).
                  </p>
                  <div className="bg-blue-900/20 rounded p-3">
                    <p className="text-blue-300 text-sm">
                      💡 Puedes compartir el TXID con el destinatario para que rastree el pago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">🧪 Regla de Oro: Envíos de Prueba</h2>

          <div className="bg-yellow-900/30 border-2 border-yellow-500 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">⚠️ SIEMPRE HAZ UN ENVÍO DE PRUEBA PRIMERO</h3>
            <p className="text-gray-300 mb-4">
              Si vas a enviar una cantidad grande (más de $100), la mejor práctica es:
            </p>
            <div className="space-y-3">
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded p-4">
                <p className="text-yellow-300 font-bold mb-2">Paso 1: Envío de prueba</p>
                <p className="text-gray-300 text-sm">Envía primero $5-10 a la dirección del destinatario</p>
              </div>
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded p-4">
                <p className="text-yellow-300 font-bold mb-2">Paso 2: Espera confirmación</p>
                <p className="text-gray-300 text-sm">Espera a que el destinatario confirme que lo recibió</p>
              </div>
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded p-4">
                <p className="text-yellow-300 font-bold mb-2">Paso 3: Envío completo</p>
                <p className="text-gray-300 text-sm">Solo entonces envía el monto grande restante</p>
              </div>
            </div>
            <div className="bg-green-900/20 border border-green-500/30 rounded p-4 mt-4">
              <p className="text-green-300 text-sm">
                ✓ Sí, pagas un fee extra por dos transacciones, pero vale TOTALMENTE la pena para montos grandes
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">🔍 Verificar en Exploradores de Bloques</h2>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-white mb-4">¿Qué es un Block Explorer?</h3>
            <p className="text-gray-300 text-sm mb-4">
              Un explorador de bloques es como un "Google" para la blockchain. Te permite buscar cualquier transacción Bitcoin y ver su estado en tiempo real.
            </p>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded p-4 mb-4">
              <p className="text-blue-300 font-bold mb-2">Exploradores populares:</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>→ <strong className="text-white">mempool.space</strong> (el más visual)</li>
                <li>→ <strong className="text-white">blockstream.info</strong> (simple y rápido)</li>
                <li>→ <strong className="text-white">blockchain.com/explorer</strong> (clásico)</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded p-4">
              <p className="text-white font-bold mb-3">Cómo usar un explorador:</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-400">1.</span>
                  <span className="text-gray-300">Copia tu Transaction ID (TXID) de tu wallet</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">2.</span>
                  <span className="text-gray-300">Ve a mempool.space</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">3.</span>
                  <span className="text-gray-300">Pega el TXID en el buscador</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">4.</span>
                  <span className="text-gray-300">Verás: monto, fee, confirmaciones, direcciones involucradas</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">😰 ¿Qué Hacer si Algo Sale Mal?</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">📱 "Mi transacción lleva horas en 'Pendiente'"</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p><strong className="text-white">Causa:</strong> Fee demasiado bajo para las condiciones actuales de la red.</p>
                <p><strong className="text-white">Solución:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>→ Espera (puede tomar horas o días)</li>
                  <li>→ Si tu wallet soporta RBF, puedes "acelerar" pagando fee más alta</li>
                  <li>→ En última instancia, si pasan 2 semanas sin confirmar, la red la descarta</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">❌ "Envié a la dirección equivocada"</h3>
              <div className="bg-red-900/30 border border-red-500/30 rounded p-4">
                <p className="text-red-300 text-sm mb-2">
                  <strong>Realidad dura:</strong> Si enviaste a una dirección válida pero equivocada, tus fondos están perdidos.
                </p>
                <p className="text-red-300 text-sm">
                  No hay forma de revertir la transacción. Por eso es CRÍTICO verificar direcciones.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">💰 "El destinatario dice que no recibió nada"</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p><strong className="text-white">Solución:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>→ Verifica el estado en un block explorer</li>
                  <li>→ Si tiene confirmaciones, el dinero SÍ llegó</li>
                  <li>→ Pide al destinatario que actualice su wallet</li>
                  <li>→ Comparte el TXID para que lo verifiquen</li>
                </ul>
              </div>
            </div>
          </div>

        </section>

        <section className="my-12 bg-gray-800/50 border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">📝 Resumen de la Lección</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Las transacciones Bitcoin son <strong className="text-white">irreversibles</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span><strong className="text-white">SIEMPRE verifica</strong> los primeros y últimos 6 caracteres de la dirección</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Haz envíos de prueba con pequeñas cantidades primero</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Usa exploradores de bloques para verificar transacciones</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>El fee determina la velocidad de confirmación</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Nunca tengas prisa al enviar - la concentración es clave</span>
            </li>
          </ul>
        </section>

        <section className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-800">
          <Link href="/cursos/primera-wallet/leccion/3-1" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors">
            ← Lección Anterior
          </Link>

          <Link href="/cursos/primera-wallet/leccion/3-3" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
            Siguiente Lección →
          </Link>
        </section>

      </article>
    </main>
  )
}
