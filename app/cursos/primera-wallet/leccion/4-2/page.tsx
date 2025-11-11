import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mejores Prácticas de Seguridad | Tu Primera Wallet - Nodo360',
  description: 'Aprende las mejores prácticas de seguridad para proteger tus Bitcoins: protección de seed phrase, seguridad de dispositivos, higiene digital y checklist pre-transacción.',
  keywords: 'seguridad bitcoin, seed phrase backup, 2FA, protección wallet, mejores prácticas cripto, higiene digital',
  openGraph: {
    title: 'Mejores Prácticas de Seguridad | Tu Primera Wallet',
    description: 'Domina las mejores prácticas de seguridad para proteger tus Bitcoins de forma efectiva.',
  }
}

export default function Leccion4_2() {
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
          <span className="text-white">Lección 4.2</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded">
              MÓDULO 4: SEGURIDAD
            </div>
            <div className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded">
              20 minutos
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 via-red-300 to-orange-400 bg-clip-text text-transparent">
            Mejores Prácticas de Seguridad
          </h1>

          <p className="text-xl text-gray-400">
            Implementa hábitos de seguridad probados para proteger tus Bitcoins a largo plazo
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
              <span>Proteger tu seed phrase con múltiples métodos de backup</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>Asegurar tus dispositivos contra amenazas comunes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>Implementar higiene digital efectiva (passwords, 2FA)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>Usar el checklist pre-transacción para evitar errores costosos</span>
            </li>
          </ul>
        </div>

        {/* Contenido principal */}
        <div className="prose prose-invert max-w-none">

          {/* Sección 1: Protección Seed Phrase */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              🔐 Protección de tu Seed Phrase
            </h2>

            <div className="bg-red-900/40 border-2 border-red-500 rounded-xl p-6 mb-6">
              <p className="text-red-200 font-bold mb-2">
                ⚠️ RECUERDA: Tu seed phrase = Tus Bitcoins
              </p>
              <p className="text-red-200 text-sm">
                Si alguien obtiene tu seed phrase, puede robar todos tus fondos. Si TÚ pierdes tu seed phrase, pierdes acceso a tus fondos para siempre. No hay "recuperar contraseña" en Bitcoin.
              </p>
            </div>

            {/* LO QUE SÍ DEBES HACER */}
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                ✅ LO QUE SÍ DEBES HACER
              </h3>

              <div className="space-y-4">
                <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-300 font-bold mb-2">1. Escribe en papel (método básico)</h4>
                  <ul className="text-green-100 text-sm space-y-1 ml-4">
                    <li>• Usa papel de calidad (no se deshace fácilmente)</li>
                    <li>• Escribe con bolígrafo/pluma permanente (no lápiz)</li>
                    <li>• Escribe CLARAMENTE cada palabra</li>
                    <li>• Verifica palabra por palabra antes de guardar</li>
                    <li>• Guarda en lugar seco, oscuro, protegido de fuego/agua</li>
                  </ul>
                </div>

                <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-300 font-bold mb-2">2. Graba en metal (método avanzado)</h4>
                  <ul className="text-green-100 text-sm space-y-1 ml-4">
                    <li>• Usa placas de acero inoxidable o titanio</li>
                    <li>• Servicios: Blockplate, CryptoSteel, BillFodl</li>
                    <li>• Resistente a fuego, agua, corrosión</li>
                    <li>• Ideal para cantidades grandes o largo plazo</li>
                  </ul>
                </div>

                <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-300 font-bold mb-2">3. Múltiples copias en lugares diferentes</h4>
                  <ul className="text-green-100 text-sm space-y-1 ml-4">
                    <li>• Copia 1: En tu casa (lugar seguro, no obvio)</li>
                    <li>• Copia 2: Casa de familiar de confianza o caja fuerte bancaria</li>
                    <li>• Copia 3 (opcional): Otro país o ubicación geográfica diferente</li>
                    <li>• Distribuye el riesgo: si una ubicación tiene problemas, tienes respaldo</li>
                  </ul>
                </div>

                <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-300 font-bold mb-2">4. Considera una passphrase (palabra 25)</h4>
                  <ul className="text-green-100 text-sm space-y-1 ml-4">
                    <li>• Añade una palabra extra que memorizas (no escribes)</li>
                    <li>• Ejemplo: seed phrase de 24 palabras + passphrase "MiPerroFirulais2023"</li>
                    <li>• Incluso si roban tu seed, necesitan la passphrase</li>
                    <li>• <strong className="text-yellow-300">CUIDADO:</strong> Si olvidas la passphrase, pierdes TODO</li>
                  </ul>
                </div>

                <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-300 font-bold mb-2">5. Usa sobres/bolsas anti-manipulación</h4>
                  <ul className="text-green-100 text-sm space-y-1 ml-4">
                    <li>• Guarda el papel en sobres con sellos de seguridad</li>
                    <li>• Si alguien abre el sobre, verás que fue manipulado</li>
                    <li>• Disponibles en Amazon: "tamper evident bags"</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* LO QUE NO DEBES HACER */}
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                ❌ LO QUE NUNCA DEBES HACER
              </h3>

              <div className="space-y-4">
                <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-red-300 font-bold mb-2">❌ NO escribas en computadora/teléfono</h4>
                  <p className="text-red-100 text-sm">
                    Keyloggers, malware, backups en la nube pueden capturar tu seed phrase. Solo papel o metal.
                  </p>
                </div>

                <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-red-300 font-bold mb-2">❌ NO tomes fotografías</h4>
                  <p className="text-red-100 text-sm">
                    Las fotos se sincronizan con la nube (iCloud, Google Photos). Si hackean tu cuenta, pierdes tus Bitcoins.
                  </p>
                </div>

                <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-red-300 font-bold mb-2">❌ NO lo guardes en email/notas del teléfono</h4>
                  <p className="text-red-100 text-sm">
                    Emails son hackeables. Notas del teléfono se sincronizan. No hay excepciones.
                  </p>
                </div>

                <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-red-300 font-bold mb-2">❌ NO lo compartas con nadie (salvo plan de herencia)</h4>
                  <p className="text-red-100 text-sm">
                    Ni tu pareja, ni tu mejor amigo. Si necesitan acceso, usa multisig o plan de herencia formal.
                  </p>
                </div>

                <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-red-300 font-bold mb-2">❌ NO uses "password managers" normales</h4>
                  <p className="text-red-100 text-sm">
                    LastPass, 1Password están bien para passwords normales, pero NO para seed phrases. Demasiado riesgo si hackean el servicio.
                  </p>
                </div>

                <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-red-300 font-bold mb-2">❌ NO la "memorices" como único backup</h4>
                  <p className="text-red-100 text-sm">
                    Un golpe en la cabeza, demencia, estrés extremo = puedes olvidarla. SIEMPRE ten backup físico.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 2: Seguridad de Dispositivos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              💻 Seguridad de tus Dispositivos
            </h2>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-xl p-6 mb-6">
              <p className="text-blue-200 mb-4">
                Tu wallet es tan segura como el dispositivo donde la usas. Protege tus dispositivos con estas prácticas:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-300 font-bold mb-2">🔒 Bloqueo y cifrado</h4>
                  <ul className="text-blue-100 text-sm space-y-1 ml-4">
                    <li>• Activa PIN/contraseña/biometría para desbloquear</li>
                    <li>• Usa contraseñas LARGAS (mínimo 8 caracteres, mejor 12+)</li>
                    <li>• Activa cifrado de disco completo (FileVault en Mac, BitLocker en Windows)</li>
                    <li>• Tiempo de bloqueo automático: 1-5 minutos</li>
                  </ul>
                </div>

                <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-300 font-bold mb-2">🔄 Actualizaciones</h4>
                  <ul className="text-blue-100 text-sm space-y-1 ml-4">
                    <li>• Mantén sistema operativo actualizado (Windows, macOS, iOS, Android)</li>
                    <li>• Actualiza apps de wallet cuando haya nuevas versiones</li>
                    <li>• Activa actualizaciones automáticas de seguridad</li>
                    <li>• Reinicia el dispositivo después de actualizaciones importantes</li>
                  </ul>
                </div>

                <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-300 font-bold mb-2">🛡️ Antivirus y antimalware</h4>
                  <ul className="text-blue-100 text-sm space-y-1 ml-4">
                    <li>• Windows: usa Windows Defender (incluido) o Malwarebytes</li>
                    <li>• Mac: Malwarebytes o Avast (aunque macOS ya es bastante seguro)</li>
                    <li>• Android: Google Play Protect + Malwarebytes Mobile</li>
                    <li>• iOS: generalmente no necesitas (sandboxing fuerte)</li>
                    <li>• Escanea semanalmente y después de descargar archivos sospechosos</li>
                  </ul>
                </div>

                <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-300 font-bold mb-2">📱 Apps solo de fuentes oficiales</h4>
                  <ul className="text-blue-100 text-sm space-y-1 ml-4">
                    <li>• iOS: solo App Store oficial</li>
                    <li>• Android: solo Google Play Store (evita APKs de internet)</li>
                    <li>• Desktop: descarga SOLO del sitio oficial de la wallet</li>
                    <li>• Verifica que el dominio sea correcto (electrum.org, no electrurn.org)</li>
                  </ul>
                </div>

                <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-300 font-bold mb-2">🌐 Seguridad de red</h4>
                  <ul className="text-blue-100 text-sm space-y-1 ml-4">
                    <li>• NO uses WiFi público para transacciones de Bitcoin</li>
                    <li>• Si necesitas usar WiFi público, usa VPN (Mullvad, ProtonVPN)</li>
                    <li>• Cambia la contraseña de tu router de casa (no uses la que viene por defecto)</li>
                    <li>• Considera una red separada para dispositivos con cripto (si tienes cantidades grandes)</li>
                  </ul>
                </div>

                <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-300 font-bold mb-2">🗑️ Limpieza y mantenimiento</h4>
                  <ul className="text-blue-100 text-sm space-y-1 ml-4">
                    <li>• Desinstala apps que no usas</li>
                    <li>• Revisa permisos de apps (¿realmente necesita acceso a tu cámara?)</li>
                    <li>• No hagas jailbreak/root a menos que sepas EXACTAMENTE qué haces</li>
                    <li>• Al vender/regalar dispositivo: factory reset + cifrado</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 3: Higiene Digital */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              🧼 Higiene Digital
            </h2>

            {/* Passwords */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">🔑 Contraseñas Fuertes</h3>

              <div className="space-y-4">
                <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="text-purple-300 font-bold mb-2">✓ Cómo crear contraseñas fuertes</h4>
                  <ul className="text-purple-100 text-sm space-y-1 ml-4">
                    <li>• Mínimo 12 caracteres (mejor 16+)</li>
                    <li>• Mezcla: mayúsculas, minúsculas, números, símbolos</li>
                    <li>• NO uses información personal (nombre, cumpleaños, mascotas)</li>
                    <li>• NO reutilices contraseñas entre servicios</li>
                    <li>• Usa frases con símbolos: "MiPerro#Firulais$Come@3pm!"</li>
                  </ul>
                </div>

                <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="text-purple-300 font-bold mb-2">🔐 Password Managers (para passwords normales)</h4>
                  <p className="text-purple-100 text-sm mb-2">
                    Usa un password manager para gestionar tus contraseñas (NO para seed phrases):
                  </p>
                  <ul className="text-purple-100 text-sm space-y-1 ml-4">
                    <li>• Bitwarden (open source, recomendado)</li>
                    <li>• 1Password (muy popular)</li>
                    <li>• KeePassXC (offline, más privado)</li>
                  </ul>
                  <p className="text-purple-200 text-sm mt-3 bg-purple-900/50 p-2 rounded">
                    <strong>Importante:</strong> Usa una master password MUY fuerte y activa 2FA en tu password manager.
                  </p>
                </div>

                <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-red-300 font-bold mb-2">❌ Ejemplos de contraseñas MALAS</h4>
                  <ul className="text-red-100 text-sm space-y-1 ml-4">
                    <li>• "password123" - demasiado común</li>
                    <li>• "Juan1990" - información personal</li>
                    <li>• "qwerty" - patrón de teclado obvio</li>
                    <li>• Misma password para Gmail, exchange, y wallet - NUNCA</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2FA */}
            <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">🔐 Autenticación de Dos Factores (2FA)</h3>

              <div className="space-y-4">
                <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-300 font-bold mb-2">✓ Usa 2FA basado en apps (MEJOR)</h4>
                  <p className="text-green-100 text-sm mb-2">
                    Apps de 2FA generan códigos temporales que cambian cada 30 segundos:
                  </p>
                  <ul className="text-green-100 text-sm space-y-1 ml-4">
                    <li>• <strong>Google Authenticator</strong> - simple, funciona offline</li>
                    <li>• <strong>Authy</strong> - con backup en la nube (más conveniente)</li>
                    <li>• <strong>Aegis</strong> (Android) - open source, sin nube</li>
                  </ul>
                  <p className="text-green-200 text-sm mt-3 bg-green-900/50 p-2 rounded">
                    Activa 2FA en: Email, exchanges, password manager, cualquier servicio con tus finanzas.
                  </p>
                </div>

                <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-red-300 font-bold mb-2">❌ Evita 2FA por SMS</h4>
                  <p className="text-red-100 text-sm">
                    SMS 2FA es vulnerable a SIM swap attacks. Solo úsalo si no hay alternativa de app.
                  </p>
                </div>

                <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-4">
                  <h4 className="text-yellow-300 font-bold mb-2">⚠️ Backup codes</h4>
                  <p className="text-yellow-100 text-sm">
                    Cuando actives 2FA, GUARDA los backup codes en papel. Si pierdes el teléfono, necesitarás esos códigos para recuperar acceso.
                  </p>
                </div>
              </div>
            </div>

            {/* Email Security */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">📧 Seguridad de Email</h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl flex-shrink-0">📨</span>
                  <div>
                    <h4 className="text-white font-bold mb-1">Usa email dedicado para cripto</h4>
                    <p className="text-cyan-100">
                      Crea un email SOLO para exchanges y wallets. No lo uses para redes sociales o suscripciones. Reduce superficie de ataque.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl flex-shrink-0">🔒</span>
                  <div>
                    <h4 className="text-white font-bold mb-1">Usa proveedores seguros</h4>
                    <p className="text-cyan-100">
                      ProtonMail (cifrado end-to-end) o Gmail con 2FA activado. Evita emails desconocidos o de países con leyes débiles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl flex-shrink-0">🚫</span>
                  <div>
                    <h4 className="text-white font-bold mb-1">No hagas clic en links de emails</h4>
                    <p className="text-cyan-100">
                      Escribe manualmente las URLs. El 90% de phishing empieza con un email con link malicioso.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 4: Checklist Pre-Transacción */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              ✅ Checklist Pre-Transacción
            </h2>

            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/20 border-2 border-yellow-500/40 rounded-xl p-6 mb-6">
              <p className="text-yellow-200 mb-4 font-bold">
                🚨 Antes de CADA transacción importante, verifica estos 6 puntos:
              </p>

              <div className="space-y-3">
                <div className="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-bold">1. ¿Verifiqué la dirección manualmente?</h4>
                      <p className="text-gray-300 text-sm">
                        Primeros 6 caracteres + últimos 6 caracteres, o dirección completa para montos grandes.
                      </p>
                    </div>
                  </label>
                </div>

                <div className="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-bold">2. ¿El monto es correcto?</h4>
                      <p className="text-gray-300 text-sm">
                        Verifica que estás enviando la cantidad correcta (¡cuidado con los decimales!).
                      </p>
                    </div>
                  </label>
                </div>

                <div className="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-bold">3. ¿El fee es razonable?</h4>
                      <p className="text-gray-300 text-sm">
                        No urgente: 1-10 sat/vB. Normal: 10-30 sat/vB. Urgente: 50+ sat/vB. Verifica en mempool.space.
                      </p>
                    </div>
                  </label>
                </div>

                <div className="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-bold">4. ¿Estoy en un lugar seguro?</h4>
                      <p className="text-gray-300 text-sm">
                        No WiFi público, no con gente mirando tu pantalla, no con prisa.
                      </p>
                    </div>
                  </label>
                </div>

                <div className="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-bold">5. ¿Es un monto grande?</h4>
                      <p className="text-gray-300 text-sm">
                        Si es {'>'}$500: haz un envío de prueba de $10 primero. Si funciona, envía el resto.
                      </p>
                    </div>
                  </label>
                </div>

                <div className="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-5 h-5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-bold">6. ¿Tengo un backup de mi wallet?</h4>
                      <p className="text-gray-300 text-sm">
                        Si tu dispositivo muere justo después de enviar, ¿puedes recuperar tu wallet? Verifica que tu seed phrase esté segura.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="bg-green-900/30 border border-green-500/40 rounded-lg p-4 mt-6">
                <p className="text-green-200 font-bold text-center">
                  ✅ Si marcaste todos los checks, puedes proceder con confianza
                </p>
              </div>
            </div>
          </section>

          {/* Hábitos de Seguridad */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              🔄 Hábitos de Seguridad a Largo Plazo
            </h2>

            <div className="bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 border border-indigo-500/30 rounded-xl p-6">
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 text-xl flex-shrink-0">📅</span>
                  <div>
                    <h4 className="text-white font-bold mb-1">Auditoría trimestral</h4>
                    <p className="text-indigo-100">
                      Cada 3 meses: verifica que tus backups estén en buen estado, revisa tus passwords, actualiza software.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 text-xl flex-shrink-0">📚</span>
                  <div>
                    <h4 className="text-white font-bold mb-1">Mantente informado</h4>
                    <p className="text-indigo-100">
                      Sigue a expertos en Twitter/X, lee r/Bitcoin, únete a comunidades. Las amenazas evolucionan constantemente.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 text-xl flex-shrink-0">🧪</span>
                  <div>
                    <h4 className="text-white font-bold mb-1">Practica recuperación</h4>
                    <p className="text-indigo-100">
                      Una vez al año: restaura tu wallet en otro dispositivo usando tu seed phrase. Asegúrate de que el proceso funcione.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 text-xl flex-shrink-0">💭</span>
                  <div>
                    <h4 className="text-white font-bold mb-1">Piensa antes de actuar</h4>
                    <p className="text-indigo-100">
                      La mayoría de errores vienen de decisiones impulsivas. Si sientes presión para actuar rápido, es una red flag.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-indigo-400 text-xl flex-shrink-0">🎓</span>
                  <div>
                    <h4 className="text-white font-bold mb-1">Comparte conocimiento</h4>
                    <p className="text-indigo-100">
                      Enseña a amigos/familia estas prácticas. Cada persona educada es una menos que cae en scams.
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
                  <strong className="text-white">Protección seed phrase:</strong> Papel/metal múltiples copias, nunca digital, considera passphrase, usa sobres anti-manipulación.
                </p>
                <p>
                  <strong className="text-white">Seguridad dispositivos:</strong> Cifrado, actualizaciones, antivirus, apps oficiales, WiFi seguro, limpieza regular.
                </p>
                <p>
                  <strong className="text-white">Higiene digital:</strong> Passwords únicos y fuertes (password manager), 2FA por app (no SMS), email dedicado para cripto.
                </p>
                <p>
                  <strong className="text-white">Checklist pre-transacción:</strong> Verificar dirección, monto, fee, seguridad del entorno, envío de prueba para cantidades grandes, backup de wallet.
                </p>
                <p>
                  <strong className="text-white">Hábitos largo plazo:</strong> Auditorías trimestrales, mantenerse informado, practicar recuperación, pensar antes de actuar.
                </p>
                <p className="text-green-300 font-bold bg-green-900/30 p-3 rounded mt-4">
                  ✅ Implementar estas prácticas reduce tu riesgo en un 95%+. La seguridad es un proceso continuo, no un evento único.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Navegación */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-800">
          <Link
            href="/cursos/primera-wallet/leccion/4-1"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span>←</span>
            <span>Lección anterior</span>
          </Link>

          <Link
            href="/cursos/primera-wallet/leccion/4-3"
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
