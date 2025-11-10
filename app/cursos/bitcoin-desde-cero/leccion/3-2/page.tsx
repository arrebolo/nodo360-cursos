import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Guía práctica: Configurar tu primera Wallet - Bitcoin desde Cero | Nodo360',
  description: 'Guía paso a paso para configurar tu primera wallet Bitcoin: elegir wallet, crear cuenta, guardar seed phrase y hacer tu primera transacción de forma segura.',
  keywords: 'configurar wallet bitcoin, primera wallet, bluewallet, electrum, tutorial wallet, seed phrase setup',
  openGraph: {
    title: 'Configurar tu primera Wallet Bitcoin - Bitcoin desde Cero',
    description: 'Tu primer paso hacia la soberanía financiera',
    type: 'article',
  }
};

export default function Leccion32() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900">
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

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        
        <div className="mb-8">
          <div className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
            Módulo 3: Seguridad y Wallets
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Guía práctica: Configurar tu primera Wallet
          </h1>
          <p className="text-xl text-gray-300">
            Tu primer paso hacia la soberanía financiera
          </p>
        </div>

        <section className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Antes de empezar</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              En esta lección te guiaré paso a paso para configurar tu primera wallet Bitcoin de forma segura. Vamos a usar <strong className="text-white">BlueWallet</strong>, una wallet mobile excelente para principiantes, pero los principios aplican a cualquier wallet.
            </p>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
              <p className="text-orange-300 font-medium mb-2">
                📱 Importante antes de empezar:
              </p>
              <ul className="text-orange-300 text-sm space-y-1">
                <li>→ Ten papel y bolígrafo listos para escribir tu seed</li>
                <li>→ Asegúrate de estar solo (nadie viendo tu pantalla)</li>
                <li>→ Estarás en lugar privado y seguro</li>
                <li>→ Tienes 15-20 minutos sin interrupciones</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Paso 1: Elegir y descargar una wallet</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Wallets recomendadas para principiantes</h3>
            
            <div className="space-y-4">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📱</div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold mb-2">BlueWallet (Recomendada)</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Interfaz simple, soporta Lightning Network, código abierto, gratis.
                    </p>
                    <div className="flex gap-3 text-sm">
                      <a href="https://bluewallet.io" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
                        🌐 Sitio oficial
                      </a>
                      <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded">
                        iOS & Android
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📱</div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold mb-2">Muun</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Muy fácil de usar, excelente UX, Lightning integrado.
                    </p>
                    <div className="flex gap-3 text-sm">
                      <a href="https://muun.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors">
                        🌐 Sitio oficial
                      </a>
                      <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded">
                        iOS & Android
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💻</div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold mb-2">Electrum (Desktop)</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Para usuarios más avanzados, muchas opciones de configuración.
                    </p>
                    <div className="flex gap-3 text-sm">
                      <a href="https://electrum.org" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors">
                        🌐 Sitio oficial
                      </a>
                      <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded">
                        Windows, Mac, Linux
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded p-4 mt-6">
              <p className="text-red-300 text-sm font-medium">
                ⚠️ IMPORTANTE: Solo descarga wallets desde sus sitios oficiales o app stores oficiales (Google Play, App Store). Nunca de links en emails o anuncios.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Paso 2: Instalar BlueWallet</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Abre tu App Store</h3>
                  <p className="text-gray-300 text-sm">
                    Ve a Google Play Store (Android) o App Store (iOS)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Busca "BlueWallet"</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    Verifica que sea del desarrollador "Bluewallet Services, S.R.L."
                  </p>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-3">
                    <p className="text-yellow-300 text-xs">
                      ⚠️ Asegúrate de que sea la app oficial, hay clones fraudulentos
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Instalar y abrir</h3>
                  <p className="text-gray-300 text-sm">
                    Descarga, instala y abre la aplicación
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Paso 3: Crear tu primera wallet</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Tap en "Agregar ahora"</h3>
                  <p className="text-gray-300 text-sm">
                    Al abrir por primera vez, verás un botón para crear tu primera wallet
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Selecciona "Bitcoin"</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    Elige la opción "Bitcoin" (no Lightning por ahora, eso es para más adelante)
                  </p>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded p-3">
                    <p className="text-blue-300 text-xs">
                      💡 La app creará automáticamente una wallet SegWit (las direcciones más modernas y eficientes)
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Dale un nombre</h3>
                  <p className="text-gray-300 text-sm">
                    Ej: "Mi primera wallet", "Ahorros", "Gastos diarios", etc.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Tap "Crear"</h3>
                  <p className="text-gray-300 text-sm">
                    ¡Tu wallet está creada! Pero aún falta lo más importante...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Paso 4: GUARDAR TU SEED PHRASE 🔑</h2>
          
          <div className="bg-red-500/20 border-2 border-red-500 rounded-xl p-8 mb-6">
            <p className="text-red-300 font-bold text-lg mb-2">
              ⚠️ ESTE ES EL PASO MÁS IMPORTANTE
            </p>
            <p className="text-red-300">
              Sin tu seed phrase, si pierdes el teléfono, pierdes TODOS tus bitcoins. No hay forma de recuperarlos.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Acceder al backup</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    Tap en tu wallet → Tres puntos (⋮) → "Exportar/Backup"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Ver tu seed phrase</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Verás 12 palabras en inglés. Estas 12 palabras SON tu wallet.
                  </p>
                  <div className="bg-gray-900/50 rounded p-4 font-mono text-sm">
                    <div className="text-gray-400 mb-2">Ejemplo (NO uses estas palabras):</div>
                    <div className="text-orange-400 grid grid-cols-3 gap-2">
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

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Escribirlas EN PAPEL</h3>
                  <div className="space-y-3">
                    <p className="text-gray-300 text-sm">
                      Toma tu papel y bolígrafo. Escribe las 12 palabras en orden, numeradas.
                    </p>
                    <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
                      <p className="text-green-300 text-sm font-medium mb-2">✅ Hazlo así:</p>
                      <ul className="text-green-300 text-sm space-y-1">
                        <li>→ Escribe claro y legible</li>
                        <li>→ Verifica cada palabra dos veces</li>
                        <li>→ Respeta el orden exacto</li>
                        <li>→ Numera del 1 al 12</li>
                      </ul>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                      <p className="text-red-300 text-sm font-medium mb-2">❌ NUNCA hagas esto:</p>
                      <ul className="text-red-300 text-sm space-y-1">
                        <li>→ Tomar una foto</li>
                        <li>→ Guardar en email o notas</li>
                        <li>→ Enviar por WhatsApp</li>
                        <li>→ Guardar en la nube</li>
                        <li>→ Escribir en computadora</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Verificar que escribiste bien</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    Lee en voz alta cada palabra del papel y verifica que coincida con la pantalla
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Guardar en lugar seguro</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Guarda el papel en un lugar seguro donde solo tú tengas acceso:
                  </p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>→ Caja fuerte personal</li>
                    <li>→ Lugar secreto en tu casa</li>
                    <li>→ Bóveda bancaria (para grandes cantidades)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Paso 5: Probar la recuperación (CRÍTICO)</h2>
          
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-6">
            <p className="text-yellow-300 font-medium">
              🔥 Antes de depositar bitcoins, DEBES probar que puedes recuperar tu wallet con la seed.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-orange-400 text-xl">1.</span>
                <p className="text-gray-300 text-sm">
                  Elimina la wallet de BlueWallet (tap en wallet → tres puntos → Eliminar)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-400 text-xl">2.</span>
                <p className="text-gray-300 text-sm">
                  Crea nueva wallet → "Importar wallet"
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-400 text-xl">3.</span>
                <p className="text-gray-300 text-sm">
                  Escribe las 12 palabras de tu papel (en orden)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">4.</span>
                <p className="text-gray-300 text-sm">
                  Si se recupera correctamente, ¡tu backup funciona! Ya puedes depositar con confianza.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Paso 6: Recibir tu primer Bitcoin</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Obtener tu dirección</h3>
                  <p className="text-gray-300 text-sm">
                    Tap en "Recibir" en tu wallet. Verás un código QR y una dirección (bc1...)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Compartir dirección</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    Copia la dirección o muestra el QR a quien te enviará bitcoins
                  </p>
                  <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
                    <p className="text-green-300 text-xs">
                      ✓ Es seguro compartir tu dirección Bitcoin, es pública por diseño
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Esperar confirmación</h3>
                  <p className="text-gray-300 text-sm">
                    Verás la transacción "pendiente" primero. En ~10-60 minutos se confirmará.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Paso 7: Enviar Bitcoin</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Tap "Enviar"</h3>
                  <p className="text-gray-300 text-sm">
                    En tu wallet, presiona el botón "Enviar"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Pegar dirección destino</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    Escanea QR o pega la dirección del destinatario
                  </p>
                  <div className="bg-red-500/10 border border-red-500/30 rounded p-3">
                    <p className="text-red-300 text-xs font-medium">
                      ⚠️ VERIFICA los primeros y últimos 4 caracteres antes de enviar
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Elegir cantidad</h3>
                  <p className="text-gray-300 text-sm">
                    Escribe la cantidad en BTC o en tu moneda local
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Configurar fee</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    BlueWallet sugiere un fee. Puedes ajustarlo:
                  </p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>→ Bajo: Más barato, más lento (horas)</li>
                    <li>→ Medio: Balanceado (~30 min)</li>
                    <li>→ Alto: Rápido, más caro (~10 min)</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-2">Confirmar y enviar</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    Revisa todo una última vez y tap "Enviar"
                  </p>
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded p-3">
                    <p className="text-orange-300 text-xs">
                      💡 Tip: Para la primera vez, envía una cantidad pequeña de prueba
                    </p>
                  </div>
                </div>
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
                <span>Elige una wallet confiable (BlueWallet, Muun, Electrum)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Descarga solo de fuentes oficiales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Guarda tu seed phrase EN PAPEL, en lugar seguro</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Prueba recuperar la wallet ANTES de depositar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Verifica direcciones antes de enviar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Empieza con pequeñas cantidades</span>
              </li>
            </ul>
          </div>
        </section>

        <nav className="flex justify-between items-center pt-8 border-t border-gray-700">
          <Link 
            href="/cursos/bitcoin-desde-cero/leccion/3-1"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span>←</span>
            <span>Anterior: Proteger Bitcoins</span>
          </Link>
          
          <Link 
            href="/cursos/bitcoin-desde-cero/leccion/3-3"
            className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
          >
            <span>Siguiente: Recuperación y Backups</span>
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
