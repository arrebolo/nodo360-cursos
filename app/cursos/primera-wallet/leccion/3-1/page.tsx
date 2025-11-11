import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lección 3.1: Cómo Recibir Bitcoin | Tu Primera Wallet - Nodo360',
  description: 'Aprende a recibir Bitcoin de forma segura: tipos de direcciones, generar QR, buenas prácticas de privacidad y errores comunes a evitar.',
  keywords: 'recibir bitcoin, direcciones bitcoin, native segwit, bech32, código QR bitcoin, tipos de direcciones, legacy, taproot, privacidad bitcoin',
  openGraph: {
    title: 'Cómo Recibir Bitcoin de Forma Segura | Tu Primera Wallet',
    description: 'Guía completa sobre tipos de direcciones Bitcoin, cómo generar QR y mejores prácticas de privacidad al recibir.',
    type: 'article',
  }
}

export default function Leccion31WalletPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/cursos" className="hover:text-green-400 transition-colors">Cursos</Link>
            <span>/</span>
            <Link href="/cursos/primera-wallet" className="hover:text-green-400 transition-colors">Tu Primera Wallet</Link>
            <span>/</span>
            <span className="text-white">Lección 3.1</span>
          </nav>

          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
              MÓDULO 3
            </span>
            <span className="text-gray-400 text-sm">12 minutos</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Cómo Recibir Bitcoin
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
                <span>Qué son las direcciones Bitcoin y cómo funcionan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Tipos de direcciones (Legacy, SegWit, Native SegWit)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Cómo generar tu dirección y código QR</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Buenas prácticas de privacidad al recibir</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="prose prose-invert max-w-none">

          <h2 className="text-2xl font-bold text-white mb-4">📬 ¿Qué es una Dirección Bitcoin?</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Una <strong className="text-white">dirección Bitcoin</strong> es como tu número de cuenta bancaria o tu dirección de email. Es un identificador único que le das a alguien para que te envíe Bitcoin.
          </p>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-white mb-3">💡 Analogía Simple</h3>
            <p className="text-gray-300">
              Piensa en tu dirección Bitcoin como tu <strong className="text-green-400">dirección postal</strong>:
            </p>
            <ul className="text-gray-300 text-sm mt-3 space-y-2">
              <li>→ Cualquiera puede enviarte algo si conoce tu dirección</li>
              <li>→ Es seguro compartirla públicamente</li>
              <li>→ Puedes tener múltiples direcciones (como tener casa, oficina, etc.)</li>
              <li>→ Solo tú puedes abrir el "buzón" (gastar los fondos)</li>
            </ul>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-white mb-3">Ejemplo de dirección Bitcoin:</h3>
            <div className="bg-gray-900/50 rounded p-4 font-mono text-sm break-all mb-3">
              <div className="text-gray-400 text-xs mb-1">Native SegWit (recomendada):</div>
              <div className="text-green-400">bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq</div>
            </div>
            <p className="text-blue-300 text-sm">
              Las direcciones tienen entre 26 y 62 caracteres alfanuméricos
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">🔤 Tipos de Direcciones Bitcoin</h2>

          <p className="text-gray-300 mb-6">
            Existen varios tipos de direcciones Bitcoin. Cada tipo tiene sus características y ventajas.
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">1️⃣</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Legacy (P2PKH)</h3>
                  <div className="bg-gray-900/50 rounded p-3 font-mono text-sm mb-3">
                    <span className="text-gray-400">Empieza con:</span> <span className="text-orange-400">1...</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    El formato original de Bitcoin (2009). Aún funciona perfectamente pero genera fees más altas.
                  </p>
                  <div className="bg-gray-900 rounded p-3">
                    <div className="text-gray-400 text-xs mb-1">Ejemplo:</div>
                    <div className="text-orange-400 font-mono text-xs break-all">1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="px-3 py-1 bg-yellow-900/30 text-yellow-400 text-xs rounded">Antigua</span>
                <span className="px-3 py-1 bg-red-900/30 text-red-400 text-xs rounded">Fees altas</span>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">2️⃣</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">SegWit (P2SH)</h3>
                  <div className="bg-gray-900/50 rounded p-3 font-mono text-sm mb-3">
                    <span className="text-gray-400">Empieza con:</span> <span className="text-blue-400">3...</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    Introducida en 2017. Reduce fees comparado con Legacy y es compatible con casi todos los servicios.
                  </p>
                  <div className="bg-gray-900 rounded p-3">
                    <div className="text-gray-400 text-xs mb-1">Ejemplo:</div>
                    <div className="text-blue-400 font-mono text-xs break-all">3J98t1WpEZ73CNmYviecrnyiWrnqRhWNLy</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-xs rounded">Moderna</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-400 text-xs rounded">Fees medias</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-500/40 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">3️⃣</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Native SegWit / Bech32 (P2WPKH)</h3>
                  <div className="bg-gray-900/50 rounded p-3 font-mono text-sm mb-3">
                    <span className="text-gray-400">Empieza con:</span> <span className="text-green-400">bc1q...</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    El formato más moderno y eficiente. <strong className="text-white">Genera las fees más bajas</strong> y es resistente a errores tipográficos.
                  </p>
                  <div className="bg-gray-900 rounded p-3 mb-3">
                    <div className="text-gray-400 text-xs mb-1">Ejemplo:</div>
                    <div className="text-green-400 font-mono text-xs break-all">bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq</div>
                  </div>
                  <div className="bg-green-900/30 border border-green-500/30 rounded p-3">
                    <p className="text-green-300 text-sm font-bold">
                      ✓ Este es el formato que deberías usar en 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="px-3 py-1 bg-green-600 text-white text-xs rounded font-bold">RECOMENDADA</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-400 text-xs rounded">Fees más bajas</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-xs rounded">Moderna</span>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">4️⃣</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Taproot (P2TR)</h3>
                  <div className="bg-gray-900/50 rounded p-3 font-mono text-sm mb-3">
                    <span className="text-gray-400">Empieza con:</span> <span className="text-purple-400">bc1p...</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    El formato más nuevo (activado en 2021). Mejora privacidad y eficiencia, especialmente para contratos complejos y multisig.
                  </p>
                  <div className="bg-gray-900 rounded p-3">
                    <div className="text-gray-400 text-xs mb-1">Ejemplo:</div>
                    <div className="text-purple-400 font-mono text-xs break-all">bc1pxwww0ct9ue7e8tdnlmug5m2tamfn7q06sahstg39ys4c9f3340qqxrdu9k</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="px-3 py-1 bg-purple-900/30 text-purple-400 text-xs rounded">Experimental</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-xs rounded">Privacidad++</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">📱 Cómo Generar tu Dirección (Paso a Paso)</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Abre tu wallet</h3>
                  <p className="text-gray-300 text-sm">Abre BlueWallet (o tu wallet preferida)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Tap en "Recibir"</h3>
                  <p className="text-gray-300 text-sm">Busca el botón "Recibir" o "Receive"</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Verás tu dirección y código QR</h3>
                  <p className="text-gray-300 text-sm mb-3">La wallet te mostrará:</p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>→ Un código QR (para escanear)</li>
                    <li>→ Tu dirección en texto (bc1q...)</li>
                    <li>→ Botones para copiar y compartir</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Comparte tu dirección</h3>
                  <p className="text-gray-300 text-sm mb-3">Opciones para compartir:</p>
                  <div className="space-y-2">
                    <div className="bg-green-900/20 border border-green-500/30 rounded p-3">
                      <p className="text-green-300 text-sm">✓ Mostrar QR para escanear (en persona)</p>
                    </div>
                    <div className="bg-green-900/20 border border-green-500/30 rounded p-3">
                      <p className="text-green-300 text-sm">✓ Copiar dirección y enviar por mensaje</p>
                    </div>
                    <div className="bg-green-900/20 border border-green-500/30 rounded p-3">
                      <p className="text-green-300 text-sm">✓ Compartir imagen del QR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Espera el pago</h3>
                  <p className="text-gray-300 text-sm">Cuando alguien envíe, verás la transacción "pendiente" en tu wallet. En 10-60 minutos se confirmará.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">🛡️ Buenas Prácticas de Privacidad</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>🔄</span>
                <span>Usa direcciones nuevas para cada pago</span>
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Por privacidad, es recomendable generar una dirección nueva para cada transacción. Las wallets modernas hacen esto automáticamente.
              </p>
              <div className="bg-blue-900/30 rounded p-3">
                <p className="text-blue-300 text-sm">
                  💡 Reusar la misma dirección permite que cualquiera vea TODAS tus transacciones en esa dirección
                </p>
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>✓</span>
                <span>Es seguro compartir tu dirección públicamente</span>
              </h3>
              <p className="text-gray-300 text-sm">
                A diferencia de tu seed phrase o claves privadas, tu dirección Bitcoin está diseñada para ser compartida. Solo permite RECIBIR, no gastar.
              </p>
            </div>

            <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>⚠️</span>
                <span>No compartas tu dirección junto con información personal</span>
              </h3>
              <p className="text-gray-300 text-sm">
                Evita postear tu dirección Bitcoin junto con tu nombre real, email o fotos en redes sociales. Mantén tu identidad y tus bitcoins separados.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">❌ Errores Comunes al Recibir</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl">✗</span>
                <div>
                  <h3 className="text-white font-bold mb-2">Confundir Bitcoin con otras cryptos</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    Tu dirección Bitcoin solo sirve para recibir Bitcoin. NO puedes recibir Ethereum, USDT u otras cryptos en una dirección Bitcoin.
                  </p>
                  <p className="text-red-400 text-xs">
                    Si envían otra crypto a tu dirección Bitcoin, se perderá para siempre.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl">✗</span>
                <div>
                  <h3 className="text-white font-bold mb-2">Dar una dirección de exchange como "tu dirección"</h3>
                  <p className="text-gray-300 text-sm">
                    Si alguien te pregunta tu dirección y tú les das la dirección de depósito de Binance/Coinbase, técnicamente no es "tu" dirección (el exchange controla esas claves).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl">✗</span>
                <div>
                  <h3 className="text-white font-bold mb-2">Copiar mal la dirección</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    Usa siempre el botón "Copiar" o comparte el QR. NO escribas la dirección a mano (26-62 caracteres, es fácil equivocarse).
                  </p>
                  <div className="bg-green-900/20 rounded p-2 mt-2">
                    <p className="text-green-300 text-xs">
                      ✓ Buenas noticias: Las direcciones tienen checksum. Si una dirección está mal escrita, las wallets la rechazan automáticamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">✅ Lo que SÍ puedes hacer</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-400">→</span>
                <span>Recibir pagos de múltiples personas en la misma dirección</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">→</span>
                <span>Recibir pagos ilimitados (no hay límite de transacciones)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">→</span>
                <span>Generar direcciones nuevas cuando quieras (son gratis)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">→</span>
                <span>Todas las direcciones de tu wallet pertenecen a la misma seed</span>
              </li>
            </ul>
          </div>

        </section>

        <section className="my-12 bg-gray-800/50 border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">📝 Resumen de la Lección</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Tu dirección Bitcoin es como tu número de cuenta - puedes compartirla</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span><strong className="text-white">Usa Native SegWit (bc1q...)</strong> para fees más bajas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Genera direcciones nuevas para cada pago (mejor privacidad)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Comparte tu dirección por QR o copiando (nunca a mano)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Solo puedes recibir Bitcoin en direcciones Bitcoin</span>
            </li>
          </ul>
        </section>

        <section className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-800">
          <Link href="/cursos/primera-wallet/leccion/2-3" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors">
            ← Lección Anterior
          </Link>

          <Link href="/cursos/primera-wallet/leccion/3-2" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
            Siguiente Lección →
          </Link>
        </section>

      </article>
    </main>
  )
}
