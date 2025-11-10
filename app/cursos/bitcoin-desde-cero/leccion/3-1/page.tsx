import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo proteger tus Bitcoins - Bitcoin desde Cero | Nodo360',
  description: 'Aprende las mejores prácticas de seguridad para proteger tus bitcoins: configuración de wallets, autenticación de dos factores, detección de scams y phishing.',
  keywords: 'seguridad bitcoin, proteger bitcoins, scams bitcoin, phishing, 2FA, multisig, mejores prácticas seguridad',
  openGraph: {
    title: 'Cómo proteger tus Bitcoins - Bitcoin desde Cero',
    description: 'Seguridad primero: protege tus bitcoins como oro',
    type: 'article',
  }
};

export default function Leccion31() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900">
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cursos/bitcoin-desde-cero" className="text-orange-400 hover:text-orange-300 transition-colors">
              ← Volver al curso
            </Link>
            <div className="text-gray-400 text-sm">
              Módulo 3 • Lección 1 de 3
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
            Cómo proteger tus Bitcoins
          </h1>
          <p className="text-xl text-gray-300">
            Seguridad primero: sé tu propio banco
          </p>
        </div>

        <section className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">La responsabilidad de la autocustodia</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Cuando tienes Bitcoin, tú eres tu propio banco. Esto significa <strong className="text-white">máxima libertad</strong> pero también <strong className="text-white">máxima responsabilidad</strong>. No hay servicio al cliente al que llamar si pierdes tus claves. No hay botón de "recuperar contraseña". Todo depende de ti.
            </p>
            <p>
              Esta lección te enseñará cómo proteger tus bitcoins de las amenazas más comunes: hackers, estafas, pérdida de claves, y errores humanos.
            </p>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-6">
              <p className="text-red-300 font-medium">
                ⚠️ Regla fundamental: Con gran poder viene gran responsabilidad. Si alguien obtiene tus claves privadas, puede robar TODOS tus bitcoins. No hay manera de revertirlo.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Las 10 Reglas de Oro de la Seguridad</h2>
          
          <div className="space-y-4">
            {[
              {
                num: 1,
                title: "Nunca compartas tu seed phrase",
                desc: "Nadie legítimo te pedirá tu seed. Ni wallets, ni exchanges, ni support. Si alguien la pide, es 100% estafa.",
                color: "red"
              },
              {
                num: 2,
                title: "Guarda tu seed offline",
                desc: "Nunca en fotos, emails, clouds o notas digitales. Solo en papel o metal, en lugares seguros.",
                color: "orange"
              },
              {
                num: 3,
                title: "Usa hardware wallets para grandes cantidades",
                desc: "Si tienes más de $1000, invierte en un Ledger, Trezor o Coldcard (~$60-150).",
                color: "green"
              },
              {
                num: 4,
                title: "Verifica siempre las direcciones",
                desc: "El malware puede cambiar direcciones al copiar/pegar. Verifica los primeros y últimos 4-6 caracteres.",
                color: "yellow"
              },
              {
                num: 5,
                title: "Usa autenticación de dos factores (2FA)",
                desc: "En exchanges y servicios, activa 2FA con una app (Google Authenticator, Authy), nunca SMS.",
                color: "blue"
              },
              {
                num: 6,
                title: "No presumas en redes sociales",
                desc: "No digas cuánto Bitcoin tienes. Te conviertes en objetivo de ataques targeted.",
                color: "purple"
              },
              {
                num: 7,
                title: "Usa emails separados",
                desc: "Ten un email exclusivo para tus cuentas crypto que nunca uses en otro lado.",
                color: "cyan"
              },
              {
                num: 8,
                title: "Cuidado con WiFi públicas",
                desc: "Nunca accedas a tu wallet desde WiFi de cafeterías o aeropuertos sin VPN.",
                color: "pink"
              },
              {
                num: 9,
                title: "Haz pruebas con pequeñas cantidades",
                desc: "Antes de enviar una gran cantidad, prueba con $10 para verificar que todo funciona.",
                color: "lime"
              },
              {
                num: 10,
                title: "Mantén tu software actualizado",
                desc: "Wallets, sistemas operativos, antivirus. Las actualizaciones corrigen vulnerabilidades.",
                color: "teal"
              }
            ].map((rule) => (
              <div key={rule.num} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 bg-${rule.color}-500 rounded-full flex items-center justify-center text-white font-bold`}>
                    {rule.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{rule.title}</h3>
                    <p className="text-gray-300 text-sm">{rule.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Amenazas Comunes y Cómo Evitarlas</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🎣</span>
                <span>Phishing</span>
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">Qué es:</strong> Sitios web o emails falsos que se hacen pasar por servicios legítimos para robarte las credenciales o seed.
                </p>
                
                <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                  <p className="text-red-300 text-sm font-medium mb-2">🚨 Ejemplos comunes:</p>
                  <ul className="text-red-300 text-sm space-y-1">
                    <li>→ Email diciendo "tu cuenta será bloqueada, haz click aquí"</li>
                    <li>→ Sitio que parece Binance pero la URL es bínance.com (con acento)</li>
                    <li>→ "Soporte técnico" pidiendo tu seed phrase para "ayudarte"</li>
                  </ul>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
                  <p className="text-green-300 text-sm font-medium mb-2">✅ Cómo protegerte:</p>
                  <ul className="text-green-300 text-sm space-y-1">
                    <li>→ Escribe manualmente las URLs de exchanges, nunca hagas click en links</li>
                    <li>→ Verifica el candado HTTPS y la URL exacta</li>
                    <li>→ Usa marcadores/favoritos para sitios importantes</li>
                    <li>→ Si recibes email urgente, ve directamente al sitio oficial</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <span>Estafas de inversión</span>
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">Qué es:</strong> Esquemas piramidales o promesas de rendimientos imposibles ("duplica tu Bitcoin en 30 días").
                </p>
                
                <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                  <p className="text-red-300 text-sm font-medium mb-2">🚨 Señales de alerta:</p>
                  <ul className="text-red-300 text-sm space-y-1">
                    <li>→ Rendimientos garantizados muy altos (ej: 5% diario)</li>
                    <li>→ Necesitas reclutar gente para ganar</li>
                    <li>→ No puedes retirar tu dinero cuando quieras</li>
                    <li>→ "Solo hoy", "última oportunidad", presión de tiempo</li>
                  </ul>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded p-4">
                  <p className="text-orange-300 text-sm">
                    <strong>Regla de oro:</strong> Si suena demasiado bueno para ser verdad, probablemente no lo es. No existen rendimientos garantizados en crypto.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🦠</span>
                <span>Malware y Keyloggers</span>
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">Qué es:</strong> Software malicioso que roba contraseñas, cambia direcciones al copiar/pegar, o captura pantallas.
                </p>
                
                <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
                  <p className="text-green-300 text-sm font-medium mb-2">✅ Protección:</p>
                  <ul className="text-green-300 text-sm space-y-1">
                    <li>→ Antivirus actualizado (Malwarebytes, Bitdefender, etc)</li>
                    <li>→ No descargues wallets de sitios no oficiales</li>
                    <li>→ Hardware wallet aísla las claves del computador infectado</li>
                    <li>→ Verifica direcciones en la pantalla de la hardware wallet</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">📱</span>
                <span>SIM Swapping</span>
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">Qué es:</strong> Atacantes convencen a tu operador móvil de transferir tu número a su SIM, obteniendo acceso a tus SMS 2FA.
                </p>
                
                <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
                  <p className="text-green-300 text-sm font-medium mb-2">✅ Protección:</p>
                  <ul className="text-green-300 text-sm space-y-1">
                    <li>→ NUNCA uses SMS para 2FA, usa apps (Google Authenticator, Authy)</li>
                    <li>→ Pon PIN/contraseña en tu cuenta del operador móvil</li>
                    <li>→ Usa email exclusivo para crypto que no esté vinculado al teléfono</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Niveles de Seguridad según Cantidad</h2>
          
          <div className="space-y-4">
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">💵</span>
                <span>Pequeñas cantidades (&lt; $100)</span>
              </h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>→ Mobile wallet de confianza (BlueWallet, Muun, Phoenix)</li>
                <li>→ Guarda backup de seed en papel seguro</li>
                <li>→ Suficiente para uso diario</li>
              </ul>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <span>Cantidades medias ($100 - $10,000)</span>
              </h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>→ Hardware wallet básica (Ledger Nano S, Trezor One)</li>
                <li>→ Seed en metal (Cryptosteel, Billfodl)</li>
                <li>→ Considera múltiples copias de seed en ubicaciones separadas</li>
              </ul>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">💎</span>
                <span>Grandes cantidades (&gt; $10,000)</span>
              </h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>→ Hardware wallet premium (Coldcard, BitBox02)</li>
                <li>→ Considera multisig (2-de-3 o 3-de-5)</li>
                <li>→ Seeds en metal en bóvedas bancarias separadas</li>
                <li>→ Passphrase adicional (25ª palabra)</li>
                <li>→ Testamento y plan de herencia</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Checklist de Seguridad</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-3">
              {[
                "✅ He escrito mi seed phrase en papel/metal",
                "✅ Guardé mi seed en lugar seguro (no digital)",
                "✅ Hice backup en segunda ubicación",
                "✅ Probé recuperar wallet con seed antes de depositar fondos",
                "✅ Activé 2FA en todos los exchanges (app-based, no SMS)",
                "✅ Uso email exclusivo para crypto",
                "✅ Tengo contraseñas únicas y fuertes (password manager)",
                "✅ Antivirus actualizado",
                "✅ Solo descargo wallets de sitios oficiales",
                "✅ Verifico direcciones antes de enviar",
                "✅ Probé con pequeñas cantidades primero",
                "✅ Entiendo que nadie me pedirá mi seed legítimamente"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-900/50 rounded">
                  <span className="text-green-400">□</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
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
                <span>Ser tu propio banco significa máxima responsabilidad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Nunca compartas tu seed phrase con nadie</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Hardware wallets para cantidades significativas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Cuidado con phishing, estafas y malware</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>2FA con apps, nunca SMS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Verifica direcciones antes de enviar</span>
              </li>
            </ul>
          </div>
        </section>

        <nav className="flex justify-between items-center pt-8 border-t border-gray-700">
          <Link 
            href="/cursos/bitcoin-desde-cero/leccion/2-3"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span>←</span>
            <span>Anterior: La Blockchain</span>
          </Link>
          
          <Link 
            href="/cursos/bitcoin-desde-cero/leccion/3-2"
            className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
          >
            <span>Siguiente: Configurar Wallet</span>
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
