import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lección 1.1: Hot Wallets vs Cold Wallets | Tu Primera Wallet - Nodo360',
  description: 'Aprende las diferencias entre hot wallets y cold wallets, cuándo usar cada una y cómo proteger tus Bitcoin.',
}

export default function Leccion11WalletPage() {
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
            <span className="text-white">Lección 1.1</span>
          </nav>
          
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
              MÓDULO 1
            </span>
            <span className="text-gray-400 text-sm">10 minutos</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Hot Wallets vs Cold Wallets
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
                <span>Qué son las hot wallets y cold wallets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Ventajas y desventajas de cada tipo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Cuándo usar cada una según tus necesidades</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Ejemplos prácticos de cada tipo de wallet</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contenido Principal */}
        <section className="prose prose-invert max-w-none">
          
          <h2 className="text-2xl font-bold text-white mb-4">🔥 ¿Qué es una Hot Wallet?</h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Una <strong className="text-white">hot wallet</strong> es una billetera de criptomonedas que <strong className="text-green-400">está conectada a internet</strong>. Es como tener dinero en tu billetera física o en tu cuenta bancaria online: accesible y lista para usar en cualquier momento.
          </p>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-white mb-3">💡 Analogía Simple</h3>
            <p className="text-gray-300">
              Piensa en una hot wallet como el <strong className="text-green-400">efectivo que llevas en tu bolsillo</strong>: conveniente para gastos diarios, pero no querrías llevar todos tus ahorros ahí.
            </p>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">✅ Ventajas de Hot Wallets</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-bold text-white mb-2">Rápidas y Convenientes</h4>
              <p className="text-gray-300 text-sm">Acceso instantáneo desde cualquier dispositivo</p>
            </div>
            
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <div className="text-2xl mb-2">📱</div>
              <h4 className="font-bold text-white mb-2">Fáciles de Usar</h4>
              <p className="text-gray-300 text-sm">Interfaces intuitivas, ideales para principiantes</p>
            </div>
            
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <div className="text-2xl mb-2">🔄</div>
              <h4 className="font-bold text-white mb-2">Transacciones Rápidas</h4>
              <p className="text-gray-300 text-sm">Perfectas para pagos cotidianos</p>
            </div>
            
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <div className="text-2xl mb-2">💰</div>
              <h4 className="font-bold text-white mb-2">Gratuitas o Baratas</h4>
              <p className="text-gray-300 text-sm">La mayoría no tienen costo inicial</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">❌ Desventajas de Hot Wallets</h3>
          
          <div className="space-y-3 mb-8">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚨</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Mayor Riesgo de Hackeo</h4>
                  <p className="text-gray-300 text-sm">Al estar conectadas a internet, son vulnerables a ataques</p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎣</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Phishing y Malware</h4>
                  <p className="text-gray-300 text-sm">Expuestas a intentos de robo mediante engaños</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-white mb-3">💼 Ejemplos de Hot Wallets</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong className="text-white">Wallets móviles:</strong> BlueWallet, Muun, Wallet of Satoshi</li>
              <li>• <strong className="text-white">Wallets de escritorio:</strong> Electrum, Sparrow</li>
              <li>• <strong className="text-white">Wallets web:</strong> Exchanges como Binance, Coinbase</li>
              <li>• <strong className="text-white">Wallets de navegador:</strong> MetaMask (para Ethereum)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">🧊 ¿Qué es una Cold Wallet?</h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Una <strong className="text-white">cold wallet</strong> es una billetera <strong className="text-green-400">completamente desconectada de internet</strong>. Es como tener tu dinero en una caja fuerte: extremadamente seguro, pero menos conveniente para el uso diario.
          </p>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-white mb-3">💡 Analogía Simple</h3>
            <p className="text-gray-300">
              Una cold wallet es como <strong className="text-green-400">una caja fuerte en tu casa</strong>: máxima seguridad para tus ahorros importantes, pero necesitas estar en casa para acceder a ella.
            </p>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">✅ Ventajas de Cold Wallets</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <div className="text-2xl mb-2">🔒</div>
              <h4 className="font-bold text-white mb-2">Máxima Seguridad</h4>
              <p className="text-gray-300 text-sm">Sin conexión = sin hackeos remotos</p>
            </div>
            
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <div className="text-2xl mb-2">🛡️</div>
              <h4 className="font-bold text-white mb-2">Control Total</h4>
              <p className="text-gray-300 text-sm">Tú eres el único con acceso a tus claves</p>
            </div>
            
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <div className="text-2xl mb-2">💎</div>
              <h4 className="font-bold text-white mb-2">Ideal para HODL</h4>
              <p className="text-gray-300 text-sm">Perfecta para almacenar a largo plazo</p>
            </div>
            
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <div className="text-2xl mb-2">😴</div>
              <h4 className="font-bold text-white mb-2">Tranquilidad Mental</h4>
              <p className="text-gray-300 text-sm">Duermes tranquilo sabiendo que están seguras</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">❌ Desventajas de Cold Wallets</h3>
          
          <div className="space-y-3 mb-8">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🐌</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Menos Convenientes</h4>
                  <p className="text-gray-300 text-sm">Requieren más pasos para hacer transacciones</p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💵</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Costo Inicial</h4>
                  <p className="text-gray-300 text-sm">Hardware wallets pueden costar 50-200€</p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Curva de Aprendizaje</h4>
                  <p className="text-gray-300 text-sm">Requieren más conocimiento técnico</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-white mb-3">🔐 Ejemplos de Cold Wallets</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong className="text-white">Hardware wallets:</strong> Ledger Nano, Trezor, Coldcard</li>
              <li>• <strong className="text-white">Paper wallets:</strong> Claves impresas en papel</li>
              <li>• <strong className="text-white">Steel wallets:</strong> Seed phrase grabada en metal</li>
              <li>• <strong className="text-white">Air-gapped computers:</strong> PC nunca conectada a internet</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">⚖️ Comparación Directa</h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800">
                  <th className="border border-gray-700 p-4 text-left text-white">Característica</th>
                  <th className="border border-gray-700 p-4 text-left text-white">Hot Wallet 🔥</th>
                  <th className="border border-gray-700 p-4 text-left text-white">Cold Wallet 🧊</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr>
                  <td className="border border-gray-700 p-4">Conexión a Internet</td>
                  <td className="border border-gray-700 p-4">Sí ✓</td>
                  <td className="border border-gray-700 p-4 text-green-400">No ✗</td>
                </tr>
                <tr className="bg-gray-800/30">
                  <td className="border border-gray-700 p-4">Seguridad</td>
                  <td className="border border-gray-700 p-4">Media ⚠️</td>
                  <td className="border border-gray-700 p-4 text-green-400">Alta 🔒</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4">Conveniencia</td>
                  <td className="border border-gray-700 p-4 text-green-400">Alta ⚡</td>
                  <td className="border border-gray-700 p-4">Baja 🐌</td>
                </tr>
                <tr className="bg-gray-800/30">
                  <td className="border border-gray-700 p-4">Costo</td>
                  <td className="border border-gray-700 p-4 text-green-400">Gratis 💚</td>
                  <td className="border border-gray-700 p-4">50-200€ 💰</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4">Uso ideal</td>
                  <td className="border border-gray-700 p-4">Gastos diarios</td>
                  <td className="border border-gray-700 p-4 text-green-400">Ahorros</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">🎯 ¿Cuál Elegir?</h2>

          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">La Estrategia Ideal: Usa Ambas 💡</h3>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔥</span>
                <div>
                  <p className="font-bold text-white">Hot Wallet (5-10% de tus fondos)</p>
                  <p className="text-sm">Para gastos cotidianos, compras, pagos frecuentes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧊</span>
                <div>
                  <p className="font-bold text-white">Cold Wallet (90-95% de tus fondos)</p>
                  <p className="text-sm">Para ahorros a largo plazo, HODL, cantidades grandes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-white mb-3">🎯 Regla de Oro</h3>
            <p className="text-gray-300 mb-3">
              <strong className="text-white">"No pongas todos los huevos en la misma canasta"</strong>
            </p>
            <p className="text-gray-300">
              Diversifica tu almacenamiento según la cantidad y el propósito. Cuanto más Bitcoin tengas, más importante es usar una cold wallet.
            </p>
          </div>

        </section>

        {/* Resumen */}
        <section className="my-12 bg-gray-800/50 border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">📝 Resumen de la Lección</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span><strong className="text-white">Hot wallets:</strong> Conectadas a internet, convenientes pero menos seguras</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span><strong className="text-white">Cold wallets:</strong> Offline, máxima seguridad pero menos prácticas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span><strong className="text-white">Estrategia ideal:</strong> Combinar ambas según tus necesidades</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span><strong className="text-white">Hot wallet:</strong> 5-10% para gastos diarios</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span><strong className="text-white">Cold wallet:</strong> 90-95% para ahorros a largo plazo</span>
            </li>
          </ul>
        </section>

        {/* Navegación */}
        <section className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-800">
          <Link 
            href="/cursos/primera-wallet"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
          >
            ← Volver al Curso
          </Link>
          
          <Link 
            href="/cursos/primera-wallet/leccion/1-2"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
          >
            Siguiente Lección →
          </Link>
        </section>

      </article>
    </main>
  )
}
