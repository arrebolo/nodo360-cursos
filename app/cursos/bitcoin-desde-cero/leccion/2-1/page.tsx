import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Direcciones y Wallets de Bitcoin - Bitcoin desde Cero | Nodo360',
  description: 'Aprende qué son las direcciones Bitcoin, cómo funcionan las wallets, tipos de wallets (hot, cold, hardware) y cómo proteger tus bitcoins de forma segura.',
  keywords: 'bitcoin wallet, direcciones bitcoin, billetera bitcoin, cold wallet, hot wallet, hardware wallet, seguridad bitcoin',
  openGraph: {
    title: 'Direcciones y Wallets de Bitcoin - Bitcoin desde Cero',
    description: 'Tu identidad en la red Bitcoin: direcciones y carteras',
    type: 'article',
  }
};

export default function Leccion21() {
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
              Módulo 2 • Lección 1 de 3
            </div>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        
        {/* Título */}
        <div className="mb-8">
          <div className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
            Módulo 2: Cómo funciona Bitcoin
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Direcciones y Wallets
          </h1>
          <p className="text-xl text-gray-300">
            Tu identidad digital en la red Bitcoin
          </p>
        </div>

        {/* Introducción */}
        <section className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">¿Qué es una dirección Bitcoin?</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Una <strong className="text-white">dirección Bitcoin</strong> es como tu número de cuenta bancaria en la red de Bitcoin. Es un identificador único que te permite recibir bitcoins. A diferencia de una cuenta bancaria tradicional, puedes tener tantas direcciones como quieras, y son completamente anónimas (no llevan tu nombre).
            </p>
            <p>
              Las direcciones Bitcoin son cadenas alfanuméricas que típicamente comienzan con 1, 3 o bc1, y tienen entre 26 y 62 caracteres.
            </p>
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm break-all">
              <div className="text-gray-400 mb-2">Ejemplo de dirección:</div>
              <div className="text-orange-400">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</div>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mt-6">
              <p className="text-orange-300 font-medium">
                💡 Analogía: Si Bitcoin fuera el correo postal, tu dirección Bitcoin sería tu dirección de casa. Cualquiera puede enviarte cartas (bitcoins) si conoce tu dirección, pero solo tú puedes abrir el buzón (gastar los bitcoins).
              </p>
            </div>
          </div>
        </section>

        {/* Tipos de direcciones */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Tipos de Direcciones Bitcoin</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">Legacy (P2PKH)</h3>
              <div className="bg-gray-900/50 rounded p-3 font-mono text-sm mb-3">
                <span className="text-gray-400">Empieza con:</span> <span className="text-orange-400">1...</span>
              </div>
              <p className="text-gray-300 text-sm mb-2">
                El formato original de direcciones Bitcoin. Aún funcional pero genera fees más altas.
              </p>
              <p className="text-gray-400 text-xs">
                Ejemplo: 1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">SegWit (P2SH)</h3>
              <div className="bg-gray-900/50 rounded p-3 font-mono text-sm mb-3">
                <span className="text-gray-400">Empieza con:</span> <span className="text-orange-400">3...</span>
              </div>
              <p className="text-gray-300 text-sm mb-2">
                Formato introducido con SegWit. Reduce fees y permite transacciones más eficientes.
              </p>
              <p className="text-gray-400 text-xs">
                Ejemplo: 3J98t1WpEZ73CNmYviecrnyiWrnqRhWNLy
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">Native SegWit (Bech32)</h3>
              <div className="bg-gray-900/50 rounded p-3 font-mono text-sm mb-3">
                <span className="text-gray-400">Empieza con:</span> <span className="text-orange-400">bc1...</span>
              </div>
              <p className="text-gray-300 text-sm mb-2">
                El formato más moderno y eficiente. Genera las fees más bajas y es resistente a errores tipográficos.
              </p>
              <p className="text-gray-400 text-xs">
                Ejemplo: bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq
              </p>
              <div className="bg-green-500/10 border border-green-500/30 rounded p-3 mt-3">
                <p className="text-green-300 text-xs">
                  ✓ Recomendado: Este es el formato que deberías usar en 2024
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">Taproot (P2TR)</h3>
              <div className="bg-gray-900/50 rounded p-3 font-mono text-sm mb-3">
                <span className="text-gray-400">Empieza con:</span> <span className="text-orange-400">bc1p...</span>
              </div>
              <p className="text-gray-300 text-sm mb-2">
                El formato más nuevo (2021). Mejora privacidad y eficiencia, especialmente para contratos complejos.
              </p>
              <p className="text-gray-400 text-xs">
                Ejemplo: bc1pxwww0ct9ue7e8tdnlmug5m2tamfn7q06sahstg39ys4c9f3340qqxrdu9k
              </p>
            </div>
          </div>
        </section>

        {/* Qué es una wallet */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">¿Qué es una Wallet (Billetera)?</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                Una <strong className="text-white">wallet o billetera</strong> es una aplicación que gestiona tus claves privadas y direcciones Bitcoin. Importante: <strong className="text-white">la wallet NO guarda los bitcoins</strong> - los bitcoins siempre están en la blockchain. La wallet solo guarda las llaves que te dan acceso a ellos.
              </p>
              
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 my-6">
                <h3 className="text-white font-bold mb-3">Conceptos clave:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-blue-300 font-medium mb-2">🔑 Clave privada (Private Key)</h4>
                    <p className="text-sm">
                      Es como la contraseña de tu cuenta. Con ella puedes gastar tus bitcoins. <strong className="text-white">NUNCA la compartas con nadie.</strong> Si alguien la obtiene, puede robar todos tus bitcoins.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-blue-300 font-medium mb-2">🔓 Clave pública (Public Key)</h4>
                    <p className="text-sm">
                      Se deriva matemáticamente de tu clave privada. Se usa para generar tu dirección Bitcoin. Puede compartirse públicamente sin riesgo.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-blue-300 font-medium mb-2">📝 Seed phrase (Frase semilla)</h4>
                    <p className="text-sm">
                      Una lista de 12 o 24 palabras que funciona como backup de todas tus claves privadas. Con estas palabras puedes recuperar tu wallet en cualquier momento. <strong className="text-white">Guárdala en un lugar seguro y NUNCA en digital.</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-300 text-sm font-medium">
                  ⚠️ Regla de oro: "Not your keys, not your coins" (No tus llaves, no tus monedas). Si no controlas las claves privadas, no controlas realmente tus bitcoins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de wallets */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Tipos de Wallets</h2>
          
          <div className="space-y-6">
            {/* Hot Wallets */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                <span>Hot Wallets (Calientes)</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Wallets conectadas a internet. Convenientes para uso diario pero menos seguras.
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-900/50 rounded p-4">
                  <h4 className="text-white font-medium mb-2">Mobile Wallets (Móvil)</h4>
                  <p className="text-gray-400 text-sm mb-2">Apps en tu smartphone. Perfectas para pagos del día a día.</p>
                  <p className="text-orange-400 text-xs">Ejemplos: BlueWallet, Muun, Phoenix</p>
                </div>
                
                <div className="bg-gray-900/50 rounded p-4">
                  <h4 className="text-white font-medium mb-2">Desktop Wallets (Escritorio)</h4>
                  <p className="text-gray-400 text-sm mb-2">Programas en tu computadora. Más control y funciones avanzadas.</p>
                  <p className="text-orange-400 text-xs">Ejemplos: Electrum, Sparrow Wallet, Bitcoin Core</p>
                </div>
                
                <div className="bg-gray-900/50 rounded p-4">
                  <h4 className="text-white font-medium mb-2">Web Wallets (Navegador)</h4>
                  <p className="text-gray-400 text-sm mb-2">Accesibles desde cualquier navegador. Las menos seguras.</p>
                  <p className="text-orange-400 text-xs">Ejemplos: Blockchain.com (aunque no recomendado)</p>
                  <p className="text-red-400 text-xs mt-1">⚠️ Solo para pequeñas cantidades</p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded">
                <p className="text-yellow-300 text-xs">
                  <strong>Uso recomendado:</strong> Solo para cantidades pequeñas que uses regularmente (como el efectivo en tu cartera física)
                </p>
              </div>
            </div>

            {/* Cold Wallets */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">❄️</span>
                <span>Cold Wallets (Frías)</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Wallets sin conexión a internet. Máxima seguridad para ahorros a largo plazo.
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-900/50 rounded p-4">
                  <h4 className="text-white font-medium mb-2">Hardware Wallets</h4>
                  <p className="text-gray-400 text-sm mb-2">Dispositivos físicos especializados. El estándar de oro para seguridad.</p>
                  <p className="text-orange-400 text-xs mb-2">Ejemplos: Ledger, Trezor, Coldcard, BitBox</p>
                  <div className="bg-green-500/10 border border-green-500/30 rounded p-2 mt-2">
                    <p className="text-green-300 text-xs">
                      ✓ Las claves privadas nunca salen del dispositivo, incluso al firmar transacciones
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded p-4">
                  <h4 className="text-white font-medium mb-2">Paper Wallets (Papel)</h4>
                  <p className="text-gray-400 text-sm mb-2">Claves impresas en papel. Simple pero requiere cuidado extremo.</p>
                  <p className="text-red-400 text-xs">⚠️ Vulnerable a daño físico, fuego, agua. Ya no muy recomendado.</p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded">
                <p className="text-green-300 text-xs">
                  <strong>Uso recomendado:</strong> Para ahorros importantes o holdings a largo plazo (como una caja fuerte)
                </p>
              </div>
            </div>

            {/* Custodial vs Non-custodial */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Custodial vs Non-custodial</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                  <h4 className="text-white font-bold mb-2">❌ Custodial</h4>
                  <p className="text-gray-400 text-sm mb-3">Una empresa controla tus claves privadas por ti.</p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>→ Ejemplo: Exchanges (Binance, Coinbase)</li>
                    <li>→ Fácil de usar</li>
                    <li>→ Puedes recuperar contraseña</li>
                    <li className="text-red-400">→ La empresa puede bloquear tu cuenta</li>
                    <li className="text-red-400">→ Vulnerable a hacks del exchange</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
                  <h4 className="text-white font-bold mb-2">✓ Non-custodial</h4>
                  <p className="text-gray-400 text-sm mb-3">TÚ controlas tus claves privadas.</p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>→ Ejemplo: BlueWallet, Electrum, Ledger</li>
                    <li className="text-green-400">→ Soberanía total sobre tus fondos</li>
                    <li className="text-green-400">→ Nadie puede bloquearte</li>
                    <li>→ Si pierdes la seed, pierdes todo</li>
                    <li>→ Más responsabilidad</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 bg-orange-500/10 border border-orange-500/30 rounded">
                <p className="text-orange-300 text-xs">
                  <strong>Recomendación:</strong> Usa wallets non-custodial siempre que sea posible. Solo deja en exchanges lo que vayas a tradear activamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mejores prácticas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Mejores Prácticas de Seguridad</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <h3 className="text-white font-medium mb-1">Haz backup de tu seed phrase</h3>
                  <p className="text-gray-400 text-sm">Escríbela en metal o papel resistente. Guárdala en un lugar seguro, idealmente en múltiples ubicaciones.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <h3 className="text-white font-medium mb-1">Nunca compartas tu seed phrase</h3>
                  <p className="text-gray-400 text-sm">Ningún servicio legítimo te pedirá tu seed. Si alguien la pide, es una estafa.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <h3 className="text-white font-medium mb-1">Usa hardware wallet para grandes cantidades</h3>
                  <p className="text-gray-400 text-sm">Si tienes más de $1000 en Bitcoin, invierte en un hardware wallet (~$60-150).</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <h3 className="text-white font-medium mb-1">Verifica siempre las direcciones</h3>
                  <p className="text-gray-400 text-sm">Antes de enviar, verifica al menos los primeros y últimos 4 caracteres de la dirección.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <h3 className="text-white font-medium mb-1">Empieza con pequeñas cantidades</h3>
                  <p className="text-gray-400 text-sm">Practica primero con cantidades pequeñas hasta que te sientas cómodo.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl">✗</span>
                <div>
                  <h3 className="text-white font-medium mb-1">Nunca guardes la seed digitalmente</h3>
                  <p className="text-gray-400 text-sm">No en fotos, no en emails, no en la nube. Solo en papel o metal físico.</p>
                </div>
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
                <span>Las direcciones Bitcoin son identificadores únicos para recibir bitcoins</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Las wallets guardan tus claves privadas, no los bitcoins mismos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Hot wallets para uso diario, cold wallets para ahorros</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Prefiere wallets non-custodial donde tú controlas las claves</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>La seed phrase es tu backup - guárdala como oro</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Hardware wallets son el estándar de oro para seguridad</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Navegación */}
        <nav className="flex justify-between items-center pt-8 border-t border-gray-700">
          <Link 
            href="/cursos/bitcoin-desde-cero/leccion/1-5"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span>←</span>
            <span>Anterior: Por qué Bitcoin</span>
          </Link>
          
          <Link 
            href="/cursos/bitcoin-desde-cero/leccion/2-2"
            className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
          >
            <span>Siguiente: Transacciones</span>
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
