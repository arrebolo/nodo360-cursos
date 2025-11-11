import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amenazas Comunes y Cómo Protegerte | Tu Primera Wallet - Nodo360',
  description: 'Aprende a identificar y protegerte de las 7 amenazas más comunes en Bitcoin: phishing, malware, clipboard hijacking, SIM swap, fake support, dust attacks y wrench attacks.',
  keywords: 'bitcoin seguridad, phishing bitcoin, malware crypto, protección wallet, amenazas bitcoin, scams cripto',
  openGraph: {
    title: 'Amenazas Comunes y Cómo Protegerte | Tu Primera Wallet',
    description: 'Identifica y protégete de las amenazas más comunes en Bitcoin. Guía completa de seguridad para principiantes.',
  }
}

export default function Leccion4_1() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            Inicio
          </Link>
          <span className="text-gray-600 mx-2">/</span>
          <Link href="/cursos" className="text-gray-400 hover:text-white transition-colors">
            Cursos
          </Link>
          <span className="text-gray-600 mx-2">/</span>
          <Link href="/cursos/primera-wallet" className="text-gray-400 hover:text-white transition-colors">
            Tu Primera Wallet
          </Link>
          <span className="text-gray-600 mx-2">/</span>
          <span className="text-white">Lección 4.1</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded">
              MÓDULO 4: SEGURIDAD
            </div>
            <div className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded">
              15 minutos
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 via-red-300 to-orange-400 bg-clip-text text-transparent">
            Amenazas Comunes y Cómo Protegerte
          </h1>

          <p className="text-xl text-gray-400">
            Conoce las 7 amenazas más frecuentes en Bitcoin y aprende a reconocerlas antes de que sea demasiado tarde
          </p>
        </div>

        {/* Objetivos */}
        <div className="bg-gradient-to-br from-red-900/30 to-orange-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            🎯 Objetivos de esta lección
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>Identificar las 7 amenazas más comunes en Bitcoin</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>Reconocer señales de alerta antes de caer en una estafa</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>Aplicar las 5 reglas de oro de seguridad</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>Desarrollar un mindset de seguridad para el largo plazo</span>
            </li>
          </ul>
        </div>

        {/* Advertencia inicial */}
        <div className="bg-red-900/40 border-2 border-red-500 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            ⚠️ Antes de empezar
          </h3>
          <div className="space-y-3 text-red-200">
            <p>
              Bitcoin es <strong>seguro por diseño</strong>, pero las personas cometen errores.
            </p>
            <p className="text-sm">
              El 99% de los "hacks" en Bitcoin no son problemas técnicos de Bitcoin, sino errores humanos:
            </p>
            <ul className="text-sm space-y-1 ml-6">
              <li>• Compartir información sensible</li>
              <li>• Caer en estafas de ingeniería social</li>
              <li>• Usar software malicioso</li>
              <li>• No verificar antes de enviar</li>
            </ul>
            <p className="font-bold bg-red-900/60 p-3 rounded mt-4">
              La buena noticia: si conoces las amenazas, puedes evitarlas. ¡Empecemos!
            </p>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="prose prose-invert max-w-none">

          {/* Sección 1: Las 7 Amenazas Más Comunes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              🔴 Las 7 Amenazas Más Comunes
            </h2>

            {/* Amenaza 1: Phishing */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-red-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">🎣 Phishing (Suplantación)</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Atacantes se hacen pasar por servicios legítimos para robar tus credenciales o seed phrase.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
                <p className="text-red-300 font-bold mb-2">❌ Ejemplos reales:</p>
                <ul className="text-red-200 text-sm space-y-2">
                  <li>• Email falso: "Tu wallet fue suspendida, verifica aquí" (con link falso)</li>
                  <li>• Web falsa: binance-security.com en lugar de binance.com</li>
                  <li>• Twitter/X falso: @BlueWaIIet (con i mayúscula en lugar de L minúscula)</li>
                  <li>• Anuncio falso en Google: "Descarga Electrum" {'->'} lleva a sitio con malware</li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-300 font-bold mb-2">✓ Cómo protegerte:</p>
                <ul className="text-green-200 text-sm space-y-1">
                  <li>• Escribe manualmente las URLs (no hagas clic en links)</li>
                  <li>• Verifica el dominio letra por letra</li>
                  <li>• Usa bookmarks/favoritos para sitios importantes</li>
                  <li>• Ningún servicio legítimo te pedirá tu seed phrase NUNCA</li>
                </ul>
              </div>
            </div>

            {/* Amenaza 2: Malware */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-red-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">🦠 Malware (Software Malicioso)</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Software diseñado para robar tus Bitcoins o información sensible de tu dispositivo.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
                <p className="text-red-300 font-bold mb-2">❌ Tipos de malware:</p>
                <ul className="text-red-200 text-sm space-y-2">
                  <li>• <strong>Keylogger</strong>: registra todo lo que escribes (contraseñas, seed phrases)</li>
                  <li>• <strong>Screen capture</strong>: toma fotos de tu pantalla cuando abres la wallet</li>
                  <li>• <strong>Wallet drainer</strong>: vacía automáticamente tus fondos</li>
                  <li>• <strong>Fake wallet app</strong>: app falsa que parece legítima pero roba tus claves</li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-300 font-bold mb-2">✓ Cómo protegerte:</p>
                <ul className="text-green-200 text-sm space-y-1">
                  <li>• Descarga apps SOLO de sitios oficiales</li>
                  <li>• Verifica checksums/hashes de archivos descargados</li>
                  <li>• Mantén tu sistema operativo actualizado</li>
                  <li>• Usa antivirus/antimalware actualizado</li>
                  <li>• Nunca escribas tu seed phrase en computadoras públicas</li>
                </ul>
              </div>
            </div>

            {/* Amenaza 3: Clipboard Hijacking */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-red-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">📋 Clipboard Hijacking</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Malware que cambia direcciones Bitcoin cuando las copias/pegas.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
                <p className="text-red-300 font-bold mb-2">❌ Cómo funciona:</p>
                <div className="text-red-200 text-sm space-y-3">
                  <div>
                    <p className="mb-1">1. Copias una dirección legítima:</p>
                    <code className="bg-black/50 p-2 rounded block text-xs">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</code>
                  </div>
                  <div>
                    <p className="mb-1">2. El malware la cambia silenciosamente al pegar:</p>
                    <code className="bg-black/50 p-2 rounded block text-xs text-red-400">bc1qattacker7x8z3kcm02fdvskl5j8qhacked12345</code>
                  </div>
                  <div>
                    <p>3. Si no verificas, envías tus Bitcoins al atacante</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-300 font-bold mb-2">✓ Cómo protegerte:</p>
                <ul className="text-green-200 text-sm space-y-1">
                  <li>• SIEMPRE verifica manualmente los primeros 6 y últimos 6 caracteres</li>
                  <li>• Para montos grandes, verifica la dirección completa</li>
                  <li>• Haz envíos de prueba pequeños primero</li>
                  <li>• Usa códigos QR cuando sea posible</li>
                </ul>
              </div>
            </div>

            {/* Amenaza 4: SIM Swap */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-red-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">📱 SIM Swap Attack</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Atacantes convencen a tu operadora telefónica para transferir tu número a su SIM card.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
                <p className="text-red-300 font-bold mb-2">❌ Por qué es peligroso:</p>
                <ul className="text-red-200 text-sm space-y-2">
                  <li>• Reciben tus SMS de autenticación (2FA por SMS)</li>
                  <li>• Pueden resetear contraseñas de exchanges</li>
                  <li>• Acceden a tu email si usas recuperación por SMS</li>
                  <li>• Pueden verificar pagos o transferencias a tu nombre</li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-300 font-bold mb-2">✓ Cómo protegerte:</p>
                <ul className="text-green-200 text-sm space-y-1">
                  <li>• NO uses 2FA por SMS (usa apps como Google Authenticator o Authy)</li>
                  <li>• Solicita un PIN/password con tu operadora para cambios</li>
                  <li>• No publiques tu número de teléfono en redes sociales</li>
                  <li>• Usa hardware wallets (no dependen de 2FA)</li>
                </ul>
              </div>
            </div>

            {/* Amenaza 5: Fake Support */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-red-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">🎭 Fake Support / Tech Support Scam</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Estafadores se hacen pasar por soporte técnico para engañarte.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
                <p className="text-red-300 font-bold mb-2">❌ Tácticas comunes:</p>
                <ul className="text-red-200 text-sm space-y-2">
                  <li>• Te contactan por DM: "Hola, soy del soporte de BlueWallet, veo que tienes un problema..."</li>
                  <li>• Te piden que compartas tu pantalla con AnyDesk/TeamViewer</li>
                  <li>• Te dicen que necesitan "validar" tu wallet con tu seed phrase</li>
                  <li>• Crean urgencia: "Tu cuenta será cerrada en 24 horas si no verificas"</li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-300 font-bold mb-2">✓ Cómo protegerte:</p>
                <ul className="text-green-200 text-sm space-y-1">
                  <li>• El soporte NUNCA te contactará primero por DM</li>
                  <li>• NUNCA compartas tu pantalla con nadie</li>
                  <li>• NUNCA des tu seed phrase (ni siquiera al "soporte")</li>
                  <li>• Si necesitas ayuda, contacta TÚ al soporte oficial</li>
                </ul>
              </div>
            </div>

            {/* Amenaza 6: Dust Attacks */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-red-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">6</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">💨 Dust Attack (Ataque de Polvo)</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Envío de cantidades minúsculas de Bitcoin para rastrear tu identidad.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
                <p className="text-red-300 font-bold mb-2">❌ Cómo funciona:</p>
                <ul className="text-red-200 text-sm space-y-2">
                  <li>• Recibes 0.00000546 BTC de la nada (cantidad insignificante)</li>
                  <li>• Si gastas ese "dust" junto con tus otros Bitcoins...</li>
                  <li>• Los atacantes pueden analizar la blockchain y vincular tus direcciones</li>
                  <li>• Objetivo: de-anonimizar usuarios y construir perfiles</li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-300 font-bold mb-2">✓ Cómo protegerte:</p>
                <ul className="text-green-200 text-sm space-y-1">
                  <li>• Ignora cantidades minúsculas que no esperabas recibir</li>
                  <li>• Usa wallets con "coin control" para NO gastar ese dust</li>
                  <li>• Considera ese Bitcoin como "contaminado" y no lo muevas</li>
                  <li>• No es peligroso recibirlo, solo no lo gastes</li>
                </ul>
              </div>
            </div>

            {/* Amenaza 7: Wrench Attack */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-red-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">7</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">🔧 Wrench Attack (Ataque Físico)</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Coerción física para obligarte a revelar tus claves privadas.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
                <p className="text-red-300 font-bold mb-2">❌ El riesgo:</p>
                <ul className="text-red-200 text-sm space-y-2">
                  <li>• Si alguien sabe que tienes Bitcoin y dónde vives...</li>
                  <li>• Pueden usar violencia o amenazas para forzarte a transferir fondos</li>
                  <li>• Bitcoin es irreversible: una vez enviado, no se puede recuperar</li>
                  <li>• Problema creciente a medida que el precio de Bitcoin sube</li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-300 font-bold mb-2">✓ Cómo protegerte:</p>
                <ul className="text-green-200 text-sm space-y-1">
                  <li>• NO presumas cuánto Bitcoin tienes</li>
                  <li>• NO publiques compras caras o viajes lujosos en redes</li>
                  <li>• Considera tener una "wallet señuelo" con poco dinero</li>
                  <li>• Usa multisig: necesitas 2-3 personas para mover fondos</li>
                  <li>• Para cantidades grandes, usa custodios institucionales o multisig</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 2: Señales de Alerta */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              🚨 Señales de Alerta Universales
            </h2>

            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/20 border border-orange-500/30 rounded-xl p-6 mb-6">
              <p className="text-orange-200 mb-4">
                Si detectas CUALQUIERA de estas señales, detente inmediatamente:
              </p>

              <div className="space-y-4">
                <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2">🚩 Alguien te pide tu seed phrase</h4>
                  <p className="text-red-200 text-sm">
                    NUNCA hay razón legítima. Ni soporte, ni tu madre, ni Satoshi resucitado.
                  </p>
                </div>

                <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2">⏰ Crean urgencia artificial</h4>
                  <p className="text-red-200 text-sm">
                    "¡Actúa ahora o perderás todo!" / "Oferta válida por 1 hora" - Los scammers usan presión de tiempo.
                  </p>
                </div>

                <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2">💰 Promesas de ganancias garantizadas</h4>
                  <p className="text-red-200 text-sm">
                    "Duplica tus Bitcoins en 24 horas" / "Rendimientos del 20% mensual garantizado" - Si suena demasiado bueno, es estafa.
                  </p>
                </div>

                <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2">📧 Contacto no solicitado</h4>
                  <p className="text-red-200 text-sm">
                    DMs de "soporte", emails inesperados pidiendo acción, llamadas de "tu banco" - Sospecha SIEMPRE.
                  </p>
                </div>

                <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2">🔗 Links sospechosos</h4>
                  <p className="text-red-200 text-sm">
                    URLs ligeramente diferentes (electrurn.org en lugar de electrum.org), dominios raros (.xyz, .top, .info).
                  </p>
                </div>

                <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2">🎁 Regalos inesperados</h4>
                  <p className="text-red-200 text-sm">
                    "Has ganado 0.5 BTC, haz clic aquí para reclamar" - Nadie regala Bitcoin gratis.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 3: 5 Reglas de Oro */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              🏆 Las 5 Reglas de Oro de Seguridad
            </h2>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border-2 border-yellow-500/40 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">1</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Verifica TODO manualmente</h3>
                    <p className="text-yellow-100 text-sm">
                      Direcciones, URLs, cantidades, destinatarios. Nunca confíes en copiar/pegar ciegamente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border-2 border-yellow-500/40 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">2</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Si tienes dudas, PARA</h3>
                    <p className="text-yellow-100 text-sm">
                      Bitcoin es irreversible. Es mejor tardar 10 minutos en estar seguro que perder todo en 10 segundos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border-2 border-yellow-500/40 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">3</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Tu seed phrase es sagrada</h3>
                    <p className="text-yellow-100 text-sm">
                      NUNCA la escribas en computadora, NUNCA la fotografíes, NUNCA la compartas. Solo papel, metal o dispositivos especializados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border-2 border-yellow-500/40 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">4</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Mantén bajo perfil</h3>
                    <p className="text-yellow-100 text-sm">
                      No presumas cuánto tienes. La mejor seguridad es que nadie sepa que eres un objetivo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border-2 border-yellow-500/40 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">5</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Educa a tu entorno</h3>
                    <p className="text-yellow-100 text-sm">
                      Comparte estas amenazas con amigos/familia. La mayoría de los ataques funcionan porque la gente no los conoce.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 4: Security Mindset */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              🧠 Desarrolla un Security Mindset
            </h2>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6 mb-6">
              <p className="text-purple-200 mb-4">
                La seguridad no es un checklist de una sola vez, es una <strong>mentalidad</strong> que desarrollas con el tiempo:
              </p>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">🤔</span>
                  <div>
                    <h4 className="text-white font-bold mb-1">Piensa como un atacante</h4>
                    <p className="text-purple-200">
                      Pregúntate: "Si yo quisiera robar mis propios Bitcoins, ¿cómo lo haría?" Luego protege esos vectores.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">⏸️</span>
                  <div>
                    <h4 className="text-white font-bold mb-1">Pausa antes de actuar</h4>
                    <p className="text-purple-200">
                      Scammers cuentan con decisiones impulsivas. Respira hondo, verifica dos veces, pregunta a alguien de confianza.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">🔄</span>
                  <div>
                    <h4 className="text-white font-bold mb-1">Actualiza constantemente</h4>
                    <p className="text-purple-200">
                      Los ataques evolucionan. Lee sobre nuevas amenazas, actualiza software, revisa tus prácticas cada 6 meses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">🛡️</span>
                  <div>
                    <h4 className="text-white font-bold mb-1">Capas de seguridad</h4>
                    <p className="text-purple-200">
                      No dependas de una sola defensa. Wallet segura + 2FA + dispositivo limpio + buenas prácticas = mucho más seguro.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">🎓</span>
                  <div>
                    <h4 className="text-white font-bold mb-1">Nunca dejes de aprender</h4>
                    <p className="text-purple-200">
                      Cada ataque exitoso es una lección. Lee post-mortems de hacks, aprende de errores ajenos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Resumen */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                📝 Resumen de la lección
              </h2>
              <div className="space-y-3 text-gray-300 text-sm">
                <p>
                  <strong className="text-white">Las 7 amenazas principales:</strong> Phishing, Malware, Clipboard hijacking, SIM swap, Fake support, Dust attacks, Wrench attacks.
                </p>
                <p>
                  <strong className="text-white">Señales de alerta:</strong> Solicitud de seed phrase, urgencia artificial, promesas irreales, contacto no solicitado, links sospechosos, regalos inesperados.
                </p>
                <p>
                  <strong className="text-white">5 reglas de oro:</strong> Verifica todo, para si dudas, protege tu seed phrase, mantén bajo perfil, educa a otros.
                </p>
                <p>
                  <strong className="text-white">Security mindset:</strong> Piensa como atacante, pausa antes de actuar, actualiza constantemente, usa capas de seguridad, nunca dejes de aprender.
                </p>
                <p className="text-red-300 font-bold bg-red-900/30 p-3 rounded mt-4">
                  ⚠️ Recuerda: La mayoría de pérdidas de Bitcoin son por errores humanos, no por problemas de Bitcoin. ¡Conocer las amenazas es el 80% de la protección!
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Navegación */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-800">
          <Link
            href="/cursos/primera-wallet/leccion/3-3"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span>←</span>
            <span>Lección anterior</span>
          </Link>

          <Link
            href="/cursos/primera-wallet/leccion/4-2"
            className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <span>Siguiente lección</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
