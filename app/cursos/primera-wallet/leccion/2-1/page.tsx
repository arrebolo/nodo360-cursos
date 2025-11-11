import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lección 2.1: Cómo elegir tu primera Wallet | Tu Primera Wallet - Nodo360',
  description: 'Guía completa para elegir tu primera wallet Bitcoin: criterios de selección, comparación de wallets populares y recomendaciones según tu perfil.',
  keywords: 'elegir wallet bitcoin, bluewallet, muun wallet, electrum, sparrow wallet, ledger, trezor, coldcard, comparación wallets bitcoin',
  openGraph: {
    title: 'Cómo Elegir tu Primera Wallet Bitcoin | Guía Completa',
    description: 'Criterios esenciales, comparación de wallets móviles y hardware, y recomendaciones según tu nivel de experiencia.',
    type: 'article',
  }
}

export default function Leccion21WalletPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Header con Breadcrumb */}
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/cursos" className="hover:text-green-400 transition-colors">
              Cursos
            </Link>
            <span>/</span>
            <Link href="/cursos/primera-wallet" className="hover:text-green-400 transition-colors">
              Tu Primera Wallet
            </Link>
            <span>/</span>
            <span className="text-white">Lección 2.1</span>
          </nav>

          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
              MÓDULO 2
            </span>
            <span className="text-gray-400 text-sm">15 minutos</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Cómo Elegir tu Primera Wallet
          </h1>
        </div>
      </header>

      {/* Contenido */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Introducción */}
        <section className="mb-12">
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-3">📚 En esta lección aprenderás:</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Criterios clave para elegir una wallet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Comparación de las wallets más populares</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Qué wallet se adapta mejor a tu perfil</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Señales de advertencia: wallets que debes evitar</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contenido Principal */}
        <section className="prose prose-invert max-w-none">

          <h2 className="text-2xl font-bold text-white mb-4">🎯 Criterios para Elegir una Wallet</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Elegir tu primera wallet es una decisión importante. No todas las wallets son iguales, y la mejor opción depende de <strong className="text-green-400">tus necesidades, experiencia y cantidad de fondos</strong>.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🔐</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">1. Seguridad</h3>
                  <p className="text-gray-300 mb-3">
                    El factor más importante. La wallet debe ser <strong className="text-white">non-custodial</strong> (tú controlas las claves) y tener un historial de seguridad probado.
                  </p>
                  <div className="bg-green-900/20 border border-green-500/30 rounded p-3">
                    <p className="text-green-300 text-sm">
                      ✓ Busca: Código abierto, auditorías de seguridad, comunidad activa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">👥</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">2. Facilidad de Uso</h3>
                  <p className="text-gray-300 mb-3">
                    Si eres principiante, una interfaz intuitiva es crucial. No dejes que la complejidad te intimide.
                  </p>
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded p-3">
                    <p className="text-blue-300 text-sm">
                      💡 Las mejores wallets para principiantes tienen tutoriales integrados y diseño simple
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🪙</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">3. Compatibilidad de Criptomonedas</h3>
                  <p className="text-gray-300 mb-3">
                    ¿Solo Bitcoin? ¿O también otras cryptos? Algunas wallets son Bitcoin-only, otras son multi-coin.
                  </p>
                  <div className="bg-orange-900/20 border border-orange-500/30 rounded p-3">
                    <p className="text-orange-300 text-sm">
                      ⚠️ Bitcoin-only wallets suelen ser más seguras (menos superficie de ataque)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💰</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">4. Costo</h3>
                  <p className="text-gray-300 mb-3">
                    Las wallets de software son gratuitas. Las hardware wallets cuestan 50-200€, pero valen la pena para grandes cantidades.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">5. Funcionalidades Extra</h3>
                  <p className="text-gray-300">
                    Lightning Network, soporte multisig, integración con exchanges, staking... Decide qué funciones necesitas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">📱 Wallets Móviles Recomendadas</h2>

          <div className="space-y-6 mb-12">
            {/* BlueWallet */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">BlueWallet</h3>
                  <p className="text-blue-300 text-sm">La más popular para principiantes</p>
                </div>
                <div className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded">
                  RECOMENDADA
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm">✅ Pros</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Interfaz muy intuitiva</li>
                    <li>• Lightning Network integrado</li>
                    <li>• Código abierto</li>
                    <li>• Gratis</li>
                    <li>• iOS y Android</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm">❌ Contras</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Solo móvil (no desktop)</li>
                    <li>• Menos funciones avanzadas</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-900/20 rounded p-3">
                <p className="text-blue-300 text-sm">
                  <strong>Ideal para:</strong> Principiantes que quieren simplicidad y Lightning Network
                </p>
              </div>
            </div>

            {/* Muun */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Muun</h3>
                  <p className="text-purple-300 text-sm">La más fácil de usar</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm">✅ Pros</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• UX excepcional</li>
                    <li>• Lightning automático</li>
                    <li>• Backup en email</li>
                    <li>• Muy segura</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm">❌ Contras</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Fees a veces más altas</li>
                    <li>• Menos control avanzado</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-900/20 rounded p-3">
                <p className="text-purple-300 text-sm">
                  <strong>Ideal para:</strong> Usuarios que priorizan simplicidad sobre todo
                </p>
              </div>
            </div>

            {/* Phoenix */}
            <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Phoenix</h3>
                  <p className="text-orange-300 text-sm">Especializada en Lightning</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm">✅ Pros</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Lightning nativo</li>
                    <li>• Pagos instantáneos</li>
                    <li>• Auto-gestiona canales</li>
                    <li>• Muy rápida</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm">❌ Contras</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Solo Lightning (limitado on-chain)</li>
                    <li>• Fee de setup inicial</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/20 rounded p-3">
                <p className="text-orange-300 text-sm">
                  <strong>Ideal para:</strong> Usuarios que hacen micropagos frecuentes
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">💻 Wallets de Escritorio Recomendadas</h2>

          <div className="space-y-6 mb-12">
            {/* Electrum */}
            <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Electrum</h3>
                  <p className="text-yellow-300 text-sm">El veterano confiable</p>
                </div>
                <div className="px-3 py-1 bg-yellow-600 text-white text-xs font-bold rounded">
                  AVANZADA
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm">✅ Pros</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Muy ligera (SPV)</li>
                    <li>• Control total</li>
                    <li>• Funciones avanzadas</li>
                    <li>• 10+ años probada</li>
                    <li>• Hardware wallet support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm">❌ Contras</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Interfaz anticuada</li>
                    <li>• Curva de aprendizaje</li>
                    <li>• Solo Bitcoin</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-900/20 rounded p-3">
                <p className="text-yellow-300 text-sm">
                  <strong>Ideal para:</strong> Usuarios técnicos que quieren control total
                </p>
              </div>
            </div>

            {/* Sparrow */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Sparrow Wallet</h3>
                  <p className="text-cyan-300 text-sm">La más completa</p>
                </div>
                <div className="px-3 py-1 bg-cyan-600 text-white text-xs font-bold rounded">
                  AVANZADA
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm">✅ Pros</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Interfaz moderna</li>
                    <li>• Multisig nativo</li>
                    <li>• Hardware wallet support</li>
                    <li>• Análisis de transacciones</li>
                    <li>• Privacy tools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm">❌ Contras</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Solo desktop</li>
                    <li>• Puede ser abrumadora</li>
                  </ul>
                </div>
              </div>

              <div className="bg-cyan-900/20 rounded p-3">
                <p className="text-cyan-300 text-sm">
                  <strong>Ideal para:</strong> Power users y configuraciones multisig
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">🔐 Hardware Wallets Recomendadas</h2>

          <div className="space-y-6 mb-12">
            {/* Ledger */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 border border-gray-600 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Ledger Nano S Plus / X</h3>
                  <p className="text-gray-300 text-sm">La más popular (€79-149)</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm">✅ Pros</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Fácil de usar</li>
                    <li>• Soporta 5500+ coins</li>
                    <li>• App móvil excelente</li>
                    <li>• Bluetooth (Nano X)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm">❌ Contras</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• No es código abierto</li>
                    <li>• Historial de data breaches</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Trezor */}
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Trezor One / Model T</h3>
                  <p className="text-green-300 text-sm">100% código abierto (€69-219)</p>
                </div>
                <div className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded">
                  OPEN SOURCE
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm">✅ Pros</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Totalmente open source</li>
                    <li>• Pionera en hardware wallets</li>
                    <li>• Touchscreen (Model T)</li>
                    <li>• Sin historial de hacks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm">❌ Contras</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Más cara</li>
                    <li>• Sin Bluetooth</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Coldcard */}
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/30 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Coldcard Mk4</h3>
                  <p className="text-red-300 text-sm">Bitcoin-only ultra segura ($159)</p>
                </div>
                <div className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded">
                  PARANOID MODE
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm">✅ Pros</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Máxima seguridad</li>
                    <li>• Bitcoin-only</li>
                    <li>• Air-gapped (sin USB)</li>
                    <li>• Multisig fácil</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm">❌ Contras</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Solo Bitcoin</li>
                    <li>• Interfaz menos amigable</li>
                    <li>• Para usuarios avanzados</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">🚫 Wallets que Debes Evitar</h2>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">⚠️ Señales de Alerta</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-red-400">✗</span>
                <p><strong className="text-white">Wallets custodiales sin regulación:</strong> Si ellos controlan tus claves, no son tus cryptos</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400">✗</span>
                <p><strong className="text-white">Wallets cerradas (no open source):</strong> No puedes verificar el código</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400">✗</span>
                <p><strong className="text-white">Promesas de rendimientos garantizados:</strong> Es una estafa</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400">✗</span>
                <p><strong className="text-white">Wallets de empresas desconocidas:</strong> Sin historial = sin confianza</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400">✗</span>
                <p><strong className="text-white">Exchanges que no permiten retirar:</strong> Red flag gigante</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6 mt-12">🎯 Recomendaciones por Perfil</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">👶 Principiante Absoluto</h3>
              <p className="text-gray-300 mb-2">
                <strong className="text-green-400">Primera wallet:</strong> BlueWallet o Muun
              </p>
              <p className="text-gray-400 text-sm">
                Fáciles de usar, seguras, gratis. Perfectas para empezar con pequeñas cantidades.
              </p>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">💼 Usuario Intermedio</h3>
              <p className="text-gray-300 mb-2">
                <strong className="text-blue-400">Combinación:</strong> BlueWallet (móvil) + Ledger Nano S Plus (ahorros)
              </p>
              <p className="text-gray-400 text-sm">
                Hot wallet para gastos diarios, cold wallet para HODL.
              </p>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">🎓 Usuario Avanzado</h3>
              <p className="text-gray-300 mb-2">
                <strong className="text-purple-400">Setup completo:</strong> Sparrow + Coldcard + Multisig
              </p>
              <p className="text-gray-400 text-sm">
                Control total, máxima seguridad, configuraciones avanzadas.
              </p>
            </div>
          </div>

        </section>

        {/* Resumen */}
        <section className="my-12 bg-gray-800/50 border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">📝 Resumen de la Lección</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Prioriza <strong className="text-white">seguridad</strong> y <strong className="text-white">control de claves</strong> sobre todo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span><strong className="text-white">Para empezar:</strong> BlueWallet o Muun (móviles, gratis, fáciles)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span><strong className="text-white">Para cantidades grandes:</strong> Hardware wallet (Ledger, Trezor, Coldcard)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span><strong className="text-white">Evita:</strong> Wallets custodiales de empresas desconocidas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span><strong className="text-white">Estrategia ideal:</strong> Hot wallet para gastos + Cold wallet para ahorros</span>
            </li>
          </ul>
        </section>

        {/* Navegación */}
        <section className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-800">
          <Link
            href="/cursos/primera-wallet/leccion/1-1"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
          >
            ← Lección Anterior
          </Link>

          <Link
            href="/cursos/primera-wallet/leccion/2-2"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
          >
            Siguiente Lección →
          </Link>
        </section>

      </article>
    </main>
  )
}
