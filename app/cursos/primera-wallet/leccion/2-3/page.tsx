import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lección 2.3: Seguridad y Backups | Tu Primera Wallet - Nodo360',
  description: 'Aprende a proteger tus Bitcoin: mejores prácticas de seguridad, backups múltiples, qué hacer en emergencias y errores comunes a evitar.',
}

export default function Leccion23WalletPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/cursos" className="hover:text-green-400 transition-colors">Cursos</Link>
            <span>/</span>
            <Link href="/cursos/primera-wallet" className="hover:text-green-400 transition-colors">Tu Primera Wallet</Link>
            <span>/</span>
            <span className="text-white">Lección 2.3</span>
          </nav>

          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
              MÓDULO 2
            </span>
            <span className="text-gray-400 text-sm">15 minutos</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Seguridad y Backups
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
                <span>Las 5 reglas de oro de seguridad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Cómo hacer backups múltiples</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Amenazas comunes y cómo evitarlas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Qué hacer en caso de emergencia</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="prose prose-invert max-w-none">

          <h2 className="text-2xl font-bold text-white mb-6">🔒 Las 5 Reglas de Oro</h2>

          <div className="space-y-4 mb-12">
            {[
              {
                num: 1,
                title: "Nunca compartas tu seed phrase",
                desc: "Ni con soporte técnico, ni con amigos, ni con nadie. Si alguien te la pide, es 100% estafa."
              },
              {
                num: 2,
                title: "Haz múltiples backups",
                desc: "Un solo backup puede perderse, quemarse o deteriorarse. Necesitas al menos 2 copias en lugares diferentes."
              },
              {
                num: 3,
                title: "Verifica direcciones SIEMPRE",
                desc: "Antes de enviar, verifica los primeros y últimos 4-6 caracteres. El malware puede cambiar direcciones."
              },
              {
                num: 4,
                title: "Empieza con pequeñas cantidades",
                desc: "Haz una transacción de prueba de $10 antes de enviar cantidades grandes."
              },
              {
                num: 5,
                title: "Usa autenticación de dos factores (2FA)",
                desc: "En exchanges, activa 2FA con una app como Google Authenticator, NUNCA con SMS."
              }
            ].map((regla) => (
              <div key={regla.num} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {regla.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{regla.title}</h3>
                    <p className="text-gray-300 text-sm">{regla.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">📋 Estrategia de Backups Múltiples</h2>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Regla 3-2-1</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-2xl font-bold">3</span>
                <div>
                  <p className="text-white font-medium">Tres copias totales</p>
                  <p className="text-gray-400 text-sm">Tu seed en 3 ubicaciones diferentes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-2xl font-bold">2</span>
                <div>
                  <p className="text-white font-medium">Dos tipos de medio</p>
                  <p className="text-gray-400 text-sm">Ejemplo: 2 en papel, 1 en metal</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-2xl font-bold">1</span>
                <div>
                  <p className="text-white font-medium">Una copia off-site</p>
                  <p className="text-gray-400 text-sm">Al menos una fuera de tu casa</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-12">
            <h3 className="text-lg font-bold text-white mb-4">Ejemplo práctico:</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-green-400">→</span>
                <span><strong className="text-white">Copia 1:</strong> Papel laminado en caja fuerte de tu casa</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400">→</span>
                <span><strong className="text-white">Copia 2:</strong> Papel en casa de familiar de confianza</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400">→</span>
                <span><strong className="text-white">Copia 3:</strong> Backup digital encriptado (solo para usuarios avanzados)</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">⚠️ Amenazas Comunes</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span>🎣</span>
                <span>Phishing (Suplantación)</span>
              </h3>
              <div className="space-y-3">
                <p className="text-gray-300 text-sm">
                  Sitios web o emails falsos que se hacen pasar por servicios legítimos para robar tus credenciales.
                </p>
                <div className="bg-red-900/30 rounded p-4">
                  <p className="text-red-300 text-sm font-medium mb-2">Ejemplos:</p>
                  <ul className="text-red-300 text-xs space-y-1">
                    <li>→ Email diciendo "tu cuenta será bloqueada"</li>
                    <li>→ Sitio que parece Binance pero la URL es binánce.com</li>
                    <li>→ "Soporte" pidiendo tu seed para "ayudarte"</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 rounded p-4">
                  <p className="text-green-300 text-sm font-medium mb-2">Cómo protegerte:</p>
                  <ul className="text-green-300 text-xs space-y-1">
                    <li>→ Escribe URLs manualmente, nunca hagas click en links</li>
                    <li>→ Verifica el candado HTTPS y la URL exacta</li>
                    <li>→ Usa marcadores para sitios importantes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span>💰</span>
                <span>Estafas de Inversión</span>
              </h3>
              <div className="space-y-3">
                <p className="text-gray-300 text-sm">
                  Esquemas piramidales o promesas de rendimientos imposibles.
                </p>
                <div className="bg-orange-900/30 rounded p-4">
                  <p className="text-orange-300 text-sm font-medium mb-2">Señales de alerta:</p>
                  <ul className="text-orange-300 text-xs space-y-1">
                    <li>→ Rendimientos garantizados muy altos (ej: 5% diario)</li>
                    <li>→ Necesitas reclutar gente para ganar</li>
                    <li>→ No puedes retirar cuando quieras</li>
                    <li>→ "Solo hoy", presión de tiempo</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span>🦠</span>
                <span>Malware y Keyloggers</span>
              </h3>
              <div className="space-y-3">
                <p className="text-gray-300 text-sm">
                  Software malicioso que roba contraseñas o cambia direcciones al copiar.
                </p>
                <div className="bg-purple-900/30 rounded p-4">
                  <p className="text-purple-300 text-sm font-medium mb-2">Protección:</p>
                  <ul className="text-purple-300 text-xs space-y-1">
                    <li>→ Antivirus actualizado (Malwarebytes, Bitdefender)</li>
                    <li>→ Solo descarga wallets de sitios oficiales</li>
                    <li>→ Verifica SIEMPRE las direcciones antes de enviar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">🚨 Qué Hacer en Emergencias</h2>

          <div className="space-y-4 mb-12">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">📱 Perdí mi teléfono</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p><strong className="text-white">Solución:</strong> Compra nueva wallet app, restaura con tu seed de 12 palabras.</p>
                <div className="bg-green-900/20 rounded p-3 mt-2">
                  <p className="text-green-300 text-xs">✓ Tus bitcoins están seguros en la blockchain, solo necesitas las palabras.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">🔥 Se quemó mi backup</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p><strong className="text-white">Solución:</strong> Si tienes otra copia en diferente ubicación, usa esa.</p>
                <div className="bg-red-900/20 rounded p-3 mt-2">
                  <p className="text-red-300 text-xs">✗ Si no tienes otra copia, tus bitcoins se perdieron. Por eso son críticos múltiples backups.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">🔓 Alguien encontró mi seed</h3>
              <div className="bg-red-900/20 rounded p-4">
                <p className="text-red-300 font-medium text-sm mb-2">⚠️ ACCIÓN URGENTE:</p>
                <ol className="text-red-300 text-sm space-y-1">
                  <li>1. Crea NUEVA wallet inmediatamente</li>
                  <li>2. Transfiere TODOS los fondos a la nueva wallet</li>
                  <li>3. Nunca uses la seed comprometida de nuevo</li>
                </ol>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">🤔 Olvidé mi contraseña de la app</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p><strong className="text-white">Solución:</strong> Desinstala y reinstala la app, restaura con tu seed.</p>
                <div className="bg-blue-900/20 rounded p-3 mt-2">
                  <p className="text-blue-300 text-xs">💡 La seed es más importante que cualquier contraseña. Con la seed puedes recuperar todo.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">📝 Checklist de Seguridad</h2>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-12">
            <div className="space-y-3">
              {[
                "✅ Guardé mi seed phrase en papel en lugar seguro",
                "✅ Hice al menos 2 copias en ubicaciones diferentes",
                "✅ Probé recuperar mi wallet antes de depositar fondos",
                "✅ Nunca tomé foto de mi seed",
                "✅ No guardé mi seed en email, notas o nube",
                "✅ Sé que nadie legítimo me pedirá mi seed",
                "✅ Verifico direcciones antes de enviar (primeros y últimos caracteres)",
                "✅ Empiezo con pequeñas cantidades",
                "✅ Descargo wallets solo de sitios oficiales",
                "✅ Tengo antivirus actualizado"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-900/50 rounded">
                  <span className="text-green-400">□</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">💡 Consejo Final</h3>
            <p className="text-gray-300 mb-4">
              La seguridad en Bitcoin es tu responsabilidad. No hay banco que te proteja, no hay soporte que te ayude si pierdes tu seed. Pero esto también significa <strong className="text-white">libertad total</strong>.
            </p>
            <p className="text-gray-300">
              Tómate el tiempo necesario para hacer las cosas bien. Es mejor ser precavido que lamentarse después.
            </p>
          </div>

        </section>

        <section className="my-12 bg-gray-800/50 border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">📝 Resumen de la Lección</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Nunca compartas tu seed phrase con nadie</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Haz múltiples backups usando la regla 3-2-1</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Cuidado con phishing, estafas y malware</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Verifica direcciones SIEMPRE antes de enviar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Con tu seed puedes recuperar tu wallet en cualquier momento</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>La seguridad es tu responsabilidad, pero también tu libertad</span>
            </li>
          </ul>
        </section>

        <section className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-800">
          <Link href="/cursos/primera-wallet/leccion/2-2" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors">
            ← Lección Anterior
          </Link>

          <Link href="/cursos/primera-wallet" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
            Completar Módulo →
          </Link>
        </section>

      </article>
    </main>
  )
}
