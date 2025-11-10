import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lección 2.2: Configurar tu Wallet paso a paso | Tu Primera Wallet - Nodo360',
  description: 'Tutorial completo para configurar tu primera wallet Bitcoin: instalación, creación, seed phrase, recibir y enviar tu primer Bitcoin.',
}

export default function Leccion22WalletPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/cursos" className="hover:text-green-400 transition-colors">Cursos</Link>
            <span>/</span>
            <Link href="/cursos/primera-wallet" className="hover:text-green-400 transition-colors">Tu Primera Wallet</Link>
            <span>/</span>
            <span className="text-white">Lección 2.2</span>
          </nav>

          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
              MÓDULO 2
            </span>
            <span className="text-gray-400 text-sm">20 minutos</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Configurar tu Wallet Paso a Paso
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
                <span>Instalar y configurar BlueWallet (paso a paso)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Guardar tu seed phrase correctamente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Recibir tu primer Bitcoin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Enviar Bitcoin de forma segura</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="prose prose-invert max-w-none">

          <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-white mb-2">⚠️ Antes de empezar</h3>
            <ul className="text-orange-300 text-sm space-y-1">
              <li>• Ten papel y bolígrafo listos</li>
              <li>• Asegúrate de estar en un lugar privado</li>
              <li>• No tengas prisa (toma el tiempo necesario)</li>
              <li>• Lee cada paso completamente antes de ejecutarlo</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">📱 Paso 1: Descargar BlueWallet</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Abre tu tienda de apps</h3>
                  <p className="text-gray-300 text-sm">App Store (iOS) o Google Play Store (Android)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Busca "BlueWallet"</h3>
                  <p className="text-gray-300 text-sm mb-2">Busca exactamente "BlueWallet"</p>
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded p-3">
                    <p className="text-yellow-300 text-xs">⚠️ Verifica que sea de "Bluewallet Services, S.R.L." - ¡existen apps falsas!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Instala y abre la app</h3>
                  <p className="text-gray-300 text-sm">Descarga, instala y abre BlueWallet</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">🆕 Paso 2: Crear tu Primera Wallet</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Tap "Agregar ahora"</h3>
                  <p className="text-gray-300 text-sm">En la pantalla de inicio, verás un botón azul grande</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Selecciona "Bitcoin"</h3>
                  <p className="text-gray-300 text-sm">No Lightning (eso es para después)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Dale un nombre</h3>
                  <p className="text-gray-300 text-sm">Ejemplo: "Mi Primera Wallet", "Ahorros BTC", etc.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Tap "Crear"</h3>
                  <p className="text-gray-300 text-sm">¡Listo! Tu wallet está creada... pero aún falta lo MÁS IMPORTANTE</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">🔑 Paso 3: Guardar tu Seed Phrase (CRÍTICO)</h2>

          <div className="bg-red-900/30 border-2 border-red-500 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-red-300 mb-3">⚠️ ESTE ES EL PASO MÁS IMPORTANTE</h3>
            <p className="text-red-300 mb-2">
              Sin tu seed phrase, si pierdes el teléfono, <strong>PIERDES TODOS TUS BITCOINS</strong>. No hay forma de recuperarlos.
            </p>
            <p className="text-red-300 text-sm">
              Nadie puede ayudarte. Ni BlueWallet, ni el soporte, ni nadie. Las cryptos se perderán para siempre.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Acceder al backup</h3>
                  <p className="text-gray-300 text-sm">Tap en tu wallet → Menú (⋮) → "Exportar / Backup"</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Ver tu seed</h3>
                  <p className="text-gray-300 text-sm mb-3">Verás 12 palabras en inglés. Estas 12 palabras SON tu wallet.</p>
                  <div className="bg-gray-900/50 rounded p-4 font-mono text-xs">
                    <div className="text-gray-400 mb-2">Ejemplo (NO uses estas):</div>
                    <div className="grid grid-cols-3 gap-2 text-orange-400">
                      <span>1. witch</span>
                      <span>2. collapse</span>
                      <span>3. practice</span>
                      <span>4. feed</span>
                      <span>5. shame</span>
                      <span>6. open</span>
                      <span>7. despair</span>
                      <span>8. creek</span>
                      <span>9. road</span>
                      <span>10. again</span>
                      <span>11. ice</span>
                      <span>12. least</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Escribe en PAPEL</h3>
                  <div className="space-y-3">
                    <div className="bg-green-900/20 border border-green-500/30 rounded p-4">
                      <p className="text-green-300 font-medium text-sm mb-2">✅ Hazlo así:</p>
                      <ul className="text-green-300 text-sm space-y-1">
                        <li>→ Escribe claro y legible</li>
                        <li>→ Numera del 1 al 12</li>
                        <li>→ Verifica cada palabra dos veces</li>
                        <li>→ Respeta el orden exacto</li>
                      </ul>
                    </div>
                    <div className="bg-red-900/20 border border-red-500/30 rounded p-4">
                      <p className="text-red-300 font-medium text-sm mb-2">❌ NUNCA hagas esto:</p>
                      <ul className="text-red-300 text-sm space-y-1">
                        <li>→ Tomar foto con el celular</li>
                        <li>→ Guardar en email o notas</li>
                        <li>→ Enviar por WhatsApp</li>
                        <li>→ Guardar en la nube (Google Drive, iCloud, etc)</li>
                        <li>→ Escribir en computadora</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Verificar que escribiste bien</h3>
                  <p className="text-gray-300 text-sm">Lee palabra por palabra en voz alta comparando con la pantalla</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Guardar en lugar seguro</h3>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>→ Caja fuerte en tu casa</li>
                    <li>→ Lugar secreto y seco</li>
                    <li>→ NUNCA en tu billetera física</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">🧪 Paso 4: Probar la Recuperación (OBLIGATORIO)</h2>

          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-6">
            <p className="text-yellow-300 font-medium">
              🔥 ANTES de depositar bitcoins, DEBES probar que puedes recuperar tu wallet con la seed.
            </p>
          </div>

          <div className="space-y-3 mb-8">
            <div className="bg-gray-800/50 rounded p-4 flex items-center gap-3">
              <span className="text-2xl">1️⃣</span>
              <p className="text-gray-300 text-sm">Elimina la wallet de BlueWallet (Menú → Eliminar)</p>
            </div>
            <div className="bg-gray-800/50 rounded p-4 flex items-center gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-gray-300 text-sm">Agregar ahora → Importar wallet</p>
            </div>
            <div className="bg-gray-800/50 rounded p-4 flex items-center gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-gray-300 text-sm">Escribe las 12 palabras de tu papel (en orden)</p>
            </div>
            <div className="bg-gray-800/50 rounded p-4 flex items-center gap-3">
              <span className="text-2xl">✅</span>
              <p className="text-gray-300 text-sm">Si se recuperó correctamente, ¡tu backup funciona!</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">📥 Paso 5: Recibir tu Primer Bitcoin</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <p className="text-gray-300 mb-4">Para recibir Bitcoin, necesitas compartir tu <strong className="text-white">dirección Bitcoin</strong>.</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-400">1.</span>
                  <p className="text-gray-300 text-sm">Tap en "Recibir" en tu wallet</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400">2.</span>
                  <p className="text-gray-300 text-sm">Verás un código QR y una dirección (bc1...)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400">3.</span>
                  <p className="text-gray-300 text-sm">Comparte el QR o copia la dirección</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400">4.</span>
                  <p className="text-gray-300 text-sm">La otra persona envía Bitcoin a esa dirección</p>
                </div>
              </div>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded p-3 mt-4">
                <p className="text-blue-300 text-sm">💡 Es seguro compartir tu dirección, es pública por diseño</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">📤 Paso 6: Enviar Bitcoin</h2>

          <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6 mb-6">
            <p className="text-orange-300 text-sm">
              ⚠️ Para tu primera transacción, envía una cantidad PEQUEÑA primero para probar
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-purple-400">1.</span>
                  <p className="text-gray-300 text-sm">Tap "Enviar" en tu wallet</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400">2.</span>
                  <p className="text-gray-300 text-sm">Escanea QR o pega la dirección del destinatario</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400">3.</span>
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Verifica los primeros y últimos 4 caracteres de la dirección</p>
                    <div className="bg-red-900/20 border border-red-500/30 rounded p-2">
                      <p className="text-red-300 text-xs">⚠️ CRÍTICO: El malware puede cambiar direcciones al copiar</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400">4.</span>
                  <p className="text-gray-300 text-sm">Ingresa la cantidad a enviar</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400">5.</span>
                  <p className="text-gray-300 text-sm">Elige el fee (bajo/medio/alto = lento/normal/rápido)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400">6.</span>
                  <p className="text-gray-300 text-sm">Revisa TODO una última vez y tap "Enviar"</p>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="my-12 bg-gray-800/50 border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">📝 Resumen de la Lección</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Descarga BlueWallet SOLO desde tiendas oficiales</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Guarda tu seed phrase EN PAPEL, nunca digital</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>PRUEBA recuperar la wallet ANTES de depositar fondos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Verifica direcciones antes de enviar (primeros y últimos 4 caracteres)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Empieza con cantidades pequeñas para probar</span>
            </li>
          </ul>
        </section>

        <section className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-800">
          <Link href="/cursos/primera-wallet/leccion/2-1" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors">
            ← Lección Anterior
          </Link>

          <Link href="/cursos/primera-wallet/leccion/2-3" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
            Siguiente Lección →
          </Link>
        </section>

      </article>
    </main>
  )
}
