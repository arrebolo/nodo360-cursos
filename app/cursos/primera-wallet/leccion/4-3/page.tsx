import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Qué Hacer en Caso de Emergencia | Tu Primera Wallet - Nodo360',
  description: 'Aprende los protocolos de emergencia para Bitcoin: dispositivo perdido, seed comprometida, dirección errónea, phishing, transacciones sospechosas y planificación de herencia.',
  keywords: 'emergencia bitcoin, dispositivo perdido, seed phrase comprometida, herencia bitcoin, multisig, recuperación wallet',
  openGraph: {
    title: 'Qué Hacer en Caso de Emergencia | Tu Primera Wallet',
    description: 'Protocolos de emergencia y planificación de herencia para Bitcoin. Actúa rápido y correctamente cuando surgen problemas.',
  }
}

export default function Leccion4_3() {
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
          <span className="text-white">Lección 4.3</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded">
              MÓDULO 4: SEGURIDAD
            </div>
            <div className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded">
              22 minutos
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 via-red-300 to-orange-400 bg-clip-text text-transparent">
            Qué Hacer en Caso de Emergencia
          </h1>

          <p className="text-xl text-gray-400">
            Protocolos de acción rápida para emergencias y planificación de herencia para el largo plazo
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
              <span>Conocer los 6 protocolos de emergencia más importantes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>Actuar rápidamente ante situaciones críticas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>Planificar la herencia de tus Bitcoins</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">▸</span>
              <span>Saber cuándo migrar a hardware wallet o multisig</span>
            </li>
          </ul>
        </div>

        {/* Advertencia */}
        <div className="bg-orange-900/40 border-2 border-orange-500 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            🚨 Información Importante
          </h3>
          <p className="text-orange-200 text-sm mb-3">
            Las emergencias con Bitcoin requieren <strong>acción rápida pero calculada</strong>. Actuar mal puede empeorar la situación.
          </p>
          <p className="text-orange-200 text-sm">
            Esta lección te da protocolos claros para cada escenario. Guarda esta página como referencia.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="prose prose-invert max-w-none">

          {/* Sección 1: 6 Protocolos de Emergencia */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              🆘 6 Protocolos de Emergencia
            </h2>

            {/* Emergencia 1: Dispositivo Perdido/Robado */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-red-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">📱 Dispositivo Perdido o Robado</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Tu teléfono/laptop con tu wallet fue robado o lo perdiste.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-red-300 font-bold mb-3">⚡ ACCIONES INMEDIATAS (primeras 2 horas):</h4>
                <ol className="text-red-100 text-sm space-y-2">
                  <li>
                    <strong>1. NO ENTRES EN PÁNICO</strong>
                    <p className="text-xs mt-1">Si tienes tu seed phrase guardada, tus Bitcoins están SEGUROS (el ladrón no puede acceder sin ella).</p>
                  </li>
                  <li>
                    <strong>2. Bloquea el dispositivo remotamente</strong>
                    <p className="text-xs mt-1">
                      • iPhone: icloud.com {'->'} Buscar {'->'} Modo Perdido<br/>
                      • Android: android.com/find {'->'} Bloquear dispositivo
                    </p>
                  </li>
                  <li>
                    <strong>3. Evalúa el riesgo</strong>
                    <p className="text-xs mt-1">
                      • ¿El dispositivo estaba con PIN/contraseña? ✓ Bien<br/>
                      • ¿La wallet tenía password adicional? ✓ Mejor<br/>
                      • ¿Guardaste tu seed en el dispositivo? ❌ PELIGRO
                    </p>
                  </li>
                </ol>
              </div>

              <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-yellow-300 font-bold mb-3">🔄 SI EL RIESGO ES ALTO (siguientes 24 horas):</h4>
                <ol className="text-yellow-100 text-sm space-y-2">
                  <li>
                    <strong>1. Consigue otro dispositivo</strong>
                    <p className="text-xs mt-1">Computadora, teléfono de familiar, tablet.</p>
                  </li>
                  <li>
                    <strong>2. Descarga la misma wallet</strong>
                    <p className="text-xs mt-1">BlueWallet, Electrum, etc. - desde el sitio oficial.</p>
                  </li>
                  <li>
                    <strong>3. Restaura con tu seed phrase</strong>
                    <p className="text-xs mt-1">Ingresa las 12/24 palabras. Tu wallet se recuperará con todos los fondos.</p>
                  </li>
                  <li>
                    <strong>4. Transfiere los fondos a una NUEVA wallet</strong>
                    <p className="text-xs mt-1">Crea una wallet nueva con seed phrase diferente y mueve todos los Bitcoins allí.</p>
                  </li>
                  <li>
                    <strong>5. Considera la seed comprometida</strong>
                    <p className="text-xs mt-1">Nunca uses esa seed phrase antigua de nuevo.</p>
                  </li>
                </ol>
              </div>

              <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-green-300 font-bold mb-2">✓ Prevención futura:</h4>
                <ul className="text-green-100 text-sm space-y-1 ml-4">
                  <li>• Activa "Find My Device" en todos tus dispositivos</li>
                  <li>• Usa PINs/passwords fuertes</li>
                  <li>• NUNCA guardes seed phrase en el dispositivo</li>
                  <li>• Considera hardware wallet para cantidades grandes</li>
                </ul>
              </div>
            </div>

            {/* Emergencia 2: Seed Comprometida */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-red-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">🔓 Seed Phrase Comprometida</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Alguien vio tu seed phrase, la fotografiaste, o la guardaste digitalmente.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/40 border-2 border-red-500 rounded-lg p-4 mb-4">
                <h4 className="text-red-300 font-bold mb-3">🚨 ACCIÓN URGENTE (hacer AHORA MISMO):</h4>
                <ol className="text-red-100 text-sm space-y-2">
                  <li>
                    <strong>1. Abre tu wallet inmediatamente</strong>
                  </li>
                  <li>
                    <strong>2. Crea una wallet completamente NUEVA</strong>
                    <p className="text-xs mt-1">Nueva seed phrase diferente, nunca la compartas.</p>
                  </li>
                  <li>
                    <strong>3. Transfiere TODO el balance a la nueva wallet</strong>
                    <p className="text-xs mt-1">Usa fee alto (50+ sat/vB) para confirmación rápida. Literalmente es una carrera: tú vs el atacante.</p>
                  </li>
                  <li>
                    <strong>4. Una vez confirmada la transacción, destruye la seed antigua</strong>
                    <p className="text-xs mt-1">Quema el papel, borra el archivo, elimina la foto.</p>
                  </li>
                </ol>
              </div>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-orange-300 font-bold mb-2">⚠️ Señales de que tu seed fue comprometida:</h4>
                <ul className="text-orange-100 text-sm space-y-1 ml-4">
                  <li>• Fondos desaparecen sin que tú los hayas movido</li>
                  <li>• Transacciones que no reconoces</li>
                  <li>• Alguien te contacta con información que solo sabrían si vieron tu wallet</li>
                </ul>
              </div>

              <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-green-300 font-bold mb-2">✓ Prevención:</h4>
                <ul className="text-green-100 text-sm space-y-1 ml-4">
                  <li>• NUNCA escribas seed en computadora/teléfono</li>
                  <li>• NUNCA la fotografíes</li>
                  <li>• Usa passphrase (palabra 25) como capa extra</li>
                  <li>• Guarda en sobre anti-manipulación para saber si alguien la vio</li>
                </ul>
              </div>
            </div>

            {/* Emergencia 3: Dirección Incorrecta */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-red-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">📍 Enviaste a Dirección Incorrecta</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Enviaste Bitcoin a una dirección equivocada.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-red-300 font-bold mb-3">❌ La verdad difícil:</h4>
                <p className="text-red-100 text-sm">
                  Bitcoin es <strong>irreversible</strong>. Una vez que la transacción tiene confirmaciones, NO SE PUEDE DESHACER.
                </p>
              </div>

              <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-yellow-300 font-bold mb-3">🔍 Evalúa la situación:</h4>

                <div className="space-y-3 text-sm">
                  <div className="bg-gray-900/50 rounded p-3">
                    <p className="text-yellow-200 font-bold mb-2">Escenario 1: Transacción sin confirmar (0 confirmaciones)</p>
                    <p className="text-yellow-100 mb-2">Hay una PEQUEÑA posibilidad:</p>
                    <ul className="text-yellow-100 ml-4 space-y-1">
                      <li>• Si tu wallet soporta RBF (Replace-By-Fee)</li>
                      <li>• Puedes intentar "cancelar" enviando a TI MISMO con fee más alto</li>
                      <li>• La transacción con fee más alto será confirmada primero</li>
                      <li>• Éxito: 20-40% (depende de network y suerte)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 rounded p-3">
                    <p className="text-red-200 font-bold mb-2">Escenario 2: 1+ confirmaciones</p>
                    <p className="text-red-100 mb-2">Es imposible revertir. Tus opciones:</p>
                    <ul className="text-red-100 ml-4 space-y-1">
                      <li>• Si conoces al destinatario: contacta y pídele que devuelva</li>
                      <li>• Si es una dirección de exchange/empresa: contacta soporte</li>
                      <li>• Si es un scammer: perdiste los fondos (lección cara aprendida)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-green-300 font-bold mb-2">✓ Prevención (la MEJOR solución):</h4>
                <ul className="text-green-100 text-sm space-y-1 ml-4">
                  <li>• Verifica MANUALMENTE primeros 6 + últimos 6 caracteres</li>
                  <li>• Envíos de prueba para montos grandes</li>
                  <li>• Usa códigos QR cuando sea posible</li>
                  <li>• NUNCA tengas prisa al enviar</li>
                </ul>
              </div>
            </div>

            {/* Emergencia 4: Caíste en Phishing */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-red-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">🎣 Caíste en Phishing</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Entraste a un sitio falso o diste información a un scammer.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/40 border-2 border-red-500 rounded-lg p-4 mb-4">
                <h4 className="text-red-300 font-bold mb-3">🚨 QUÉ DISTE:</h4>

                <div className="space-y-3 text-sm">
                  <div className="bg-gray-900/50 rounded p-3">
                    <p className="text-red-200 font-bold">Si diste tu SEED PHRASE:</p>
                    <p className="text-red-100 mt-1">Ver Emergencia #2 arriba - MOVER FONDOS AHORA MISMO.</p>
                  </div>

                  <div className="bg-gray-900/50 rounded p-3">
                    <p className="text-orange-200 font-bold">Si diste credenciales de exchange:</p>
                    <ol className="text-orange-100 mt-1 ml-4 space-y-1">
                      <li>1. Cambia password INMEDIATAMENTE</li>
                      <li>2. Activa 2FA si no lo tenías</li>
                      <li>3. Revisa actividad reciente</li>
                      <li>4. Retira fondos a tu wallet personal</li>
                      <li>5. Contacta soporte del exchange</li>
                    </ol>
                  </div>

                  <div className="bg-gray-900/50 rounded p-3">
                    <p className="text-yellow-200 font-bold">Si solo visitaste el sitio (no diste nada):</p>
                    <ol className="text-yellow-100 mt-1 ml-4 space-y-1">
                      <li>1. Escanea tu dispositivo con antimalware</li>
                      <li>2. Cambia passwords importantes</li>
                      <li>3. Monitorea tu wallet los próximos días</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-green-300 font-bold mb-2">✓ Aprende de esto:</h4>
                <ul className="text-green-100 text-sm space-y-1 ml-4">
                  <li>• Escribe URLs manualmente, no hagas clic en links</li>
                  <li>• Verifica el dominio letra por letra</li>
                  <li>• Usa bookmarks para sitios importantes</li>
                  <li>• Recuerda: NADIE legítimo te pide seed phrase</li>
                </ul>
              </div>
            </div>

            {/* Emergencia 5: Transacción Sospechosa */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-red-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">🕵️ Transacción Sospechosa en tu Wallet</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Ves una transacción que no hiciste.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-yellow-300 font-bold mb-3">🔍 Investiga primero:</h4>
                <ol className="text-yellow-100 text-sm space-y-2">
                  <li>
                    <strong>1. ¿Es una transacción ENTRANTE pequeña?</strong>
                    <p className="text-xs mt-1">Probablemente es un dust attack (inofensivo). Simplemente ignóralo, no lo gastes.</p>
                  </li>
                  <li>
                    <strong>2. ¿Es una transacción SALIENTE que no reconoces?</strong>
                    <p className="text-xs mt-1">🚨 ALGUIEN TIENE ACCESO A TU WALLET. Ir a protocolo de emergencia.</p>
                  </li>
                  <li>
                    <strong>3. Verifica en block explorer</strong>
                    <p className="text-xs mt-1">Copia el txid y búscalo en mempool.space o blockstream.info</p>
                  </li>
                </ol>
              </div>

              <div className="bg-red-900/40 border-2 border-red-500 rounded-lg p-4 mb-4">
                <h4 className="text-red-300 font-bold mb-3">🚨 Si confirmas que fue un robo:</h4>
                <ol className="text-red-100 text-sm space-y-2">
                  <li>1. Si todavía tienes fondos: MUÉVELOS AHORA a nueva wallet</li>
                  <li>2. Tu seed phrase está comprometida - nunca la uses de nuevo</li>
                  <li>3. Escanea todos tus dispositivos con antimalware</li>
                  <li>4. Cambia passwords de todo</li>
                  <li>5. Reporta en Reddit/Twitter para advertir a otros</li>
                </ol>
              </div>

              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-blue-300 font-bold mb-2">📊 Post-mortem (después):</h4>
                <p className="text-blue-100 text-sm mb-2">Analiza cómo pasó:</p>
                <ul className="text-blue-100 text-sm space-y-1 ml-4">
                  <li>• ¿Guardaste seed digitalmente?</li>
                  <li>• ¿Usaste WiFi público?</li>
                  <li>• ¿Descargaste software pirata?</li>
                  <li>• ¿Alguien tuvo acceso físico a tu seed?</li>
                </ul>
                <p className="text-blue-200 text-sm mt-2">Aprende de esto para no repetir el error.</p>
              </div>
            </div>

            {/* Emergencia 6: Planificación de Herencia */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">6</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">🏛️ Herencia: ¿Qué pasa si no estás?</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Planifica ahora para que tus seres queridos puedan acceder a tus Bitcoins si te pasa algo.
                  </p>
                </div>
              </div>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-purple-300 font-bold mb-3">⚠️ El problema:</h4>
                <p className="text-purple-100 text-sm">
                  Si solo TÚ conoces tu seed phrase y te pasa algo, tus Bitcoins se pierden para siempre. Pero si la compartes abiertamente, alguien podría robarlos mientras vives.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-white font-bold">3 Opciones de Herencia:</p>

                {/* Opción 1 */}
                <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-300 font-bold mb-2">✅ Opción 1: Carta Sellada (método simple)</h4>
                  <p className="text-green-100 text-sm mb-3">
                    Para principiantes con cantidades pequeñas-medias (&lt;$10,000).
                  </p>
                  <ol className="text-green-100 text-sm space-y-2 ml-4">
                    <li>
                      <strong>1. Escribe instrucciones claras</strong>
                      <p className="text-xs mt-1">Ejemplo: "Mi Bitcoin está en BlueWallet. La seed phrase de 12 palabras está en [ubicación]. Para recuperar: descarga BlueWallet {'->'} Import Wallet {'->'} ingresa las 12 palabras."</p>
                    </li>
                    <li>
                      <strong>2. Incluye la seed phrase</strong>
                      <p className="text-xs mt-1">Escrita claramente, numerada.</p>
                    </li>
                    <li>
                      <strong>3. Guarda en sobre sellado</strong>
                      <p className="text-xs mt-1">Sobre anti-manipulación + firma en el sello.</p>
                    </li>
                    <li>
                      <strong>4. Deposita en lugar seguro</strong>
                      <p className="text-xs mt-1">Caja fuerte bancaria o con abogado, con instrucciones: "Entregar a [persona] si fallezco".</p>
                    </li>
                  </ol>
                  <p className="text-green-200 text-xs mt-3 bg-green-900/50 p-2 rounded">
                    <strong>Ventaja:</strong> Simple, barato, funciona. <strong>Desventaja:</strong> La persona tiene acceso completo si abre el sobre.
                  </p>
                </div>

                {/* Opción 2 */}
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-300 font-bold mb-2">🔐 Opción 2: Shamir Backup (método avanzado)</h4>
                  <p className="text-blue-100 text-sm mb-3">
                    Para cantidades medias-altas ($10,000-$100,000).
                  </p>
                  <div className="text-blue-100 text-sm space-y-2">
                    <p>
                      Divide tu seed phrase en múltiples partes (ej: 3 partes). Necesitas 2 de 3 para recuperar.
                    </p>
                    <p><strong>Ejemplo:</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>• Parte 1: Con tu pareja</li>
                      <li>• Parte 2: Con tu hermano</li>
                      <li>• Parte 3: En caja fuerte bancaria</li>
                    </ul>
                    <p className="mt-2">
                      Si falleces, pareja + hermano juntan sus partes = recuperan Bitcoin.<br/>
                      Si uno te traiciona, no puede hacer nada solo.
                    </p>
                  </div>
                  <p className="text-blue-200 text-xs mt-3 bg-blue-900/50 p-2 rounded">
                    <strong>Herramientas:</strong> Trezor Model T, Ledger Nano X soportan Shamir Backup nativamente.
                  </p>
                </div>

                {/* Opción 3 */}
                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="text-purple-300 font-bold mb-2">🏦 Opción 3: Multisig + Timelock (método profesional)</h4>
                  <p className="text-purple-100 text-sm mb-3">
                    Para cantidades grandes ({'>'}$100,000) o empresas.
                  </p>
                  <div className="text-purple-100 text-sm space-y-2">
                    <p>
                      Creas una wallet que requiere 2 de 3 firmas para mover fondos:
                    </p>
                    <ul className="ml-4 space-y-1">
                      <li>• Clave 1: Tú (hardware wallet)</li>
                      <li>• Clave 2: Tu heredero (hardware wallet)</li>
                      <li>• Clave 3: Servicio de timelock (Casa, Unchained Capital)</li>
                    </ul>
                    <p className="mt-2">
                      Mientras vives: TÚ + heredero = control total.<br/>
                      Si falleces: Heredero + servicio timelock (después de X meses) = recuperan fondos.
                    </p>
                  </div>
                  <p className="text-purple-200 text-xs mt-3 bg-purple-900/50 p-2 rounded">
                    <strong>Costo:</strong> Hardware wallets ($100-200 cada una) + fee del servicio (~$500-1000/año). Vale la pena para cantidades grandes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 2: Cuándo Migrar */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              📈 Cuándo Migrar a Soluciones Más Seguras
            </h2>

            <div className="bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 border border-indigo-500/30 rounded-xl p-6 mb-6">
              <p className="text-indigo-200 mb-4">
                Las software wallets (BlueWallet, Electrum) son EXCELENTES para empezar. Pero a medida que tus ahorros en Bitcoin crecen, considera upgrades:
              </p>

              <div className="space-y-4">
                {/* Hardware Wallet */}
                <div className="bg-gray-900/50 border border-indigo-500/30 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-indigo-400 text-2xl">🔐</span>
                    <div className="flex-1">
                      <h4 className="text-white font-bold mb-1">Hardware Wallet</h4>
                      <p className="text-indigo-200 text-sm mb-2">
                        Dispositivo físico que guarda tus claves offline.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-green-900/20 border border-green-500/30 rounded p-3">
                      <p className="text-green-300 font-bold mb-2">✅ Cuándo:</p>
                      <ul className="text-green-100 space-y-1 ml-4">
                        <li>• Tienes {'>'}$2,000 en Bitcoin</li>
                        <li>• No necesitas acceso diario</li>
                        <li>• Quieres máxima seguridad</li>
                      </ul>
                    </div>

                    <div className="bg-blue-900/20 border border-blue-500/30 rounded p-3">
                      <p className="text-blue-300 font-bold mb-2">📱 Opciones:</p>
                      <ul className="text-blue-100 space-y-1 ml-4">
                        <li>• Ledger Nano X ($150)</li>
                        <li>• Trezor Model T ($200)</li>
                        <li>• Coldcard Mk4 ($150)</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-indigo-200 text-xs mt-3 bg-indigo-900/50 p-2 rounded">
                    <strong>Beneficio:</strong> Incluso si tu computadora tiene malware, no pueden robar tus claves (están en el dispositivo físico).
                  </p>
                </div>

                {/* Multisig */}
                <div className="bg-gray-900/50 border border-indigo-500/30 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-indigo-400 text-2xl">🔐🔐</span>
                    <div className="flex-1">
                      <h4 className="text-white font-bold mb-1">Multisig (Múltiples Firmas)</h4>
                      <p className="text-indigo-200 text-sm mb-2">
                        Requiere 2 o más dispositivos para aprobar transacciones.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-green-900/20 border border-green-500/30 rounded p-3">
                      <p className="text-green-300 font-bold mb-2">✅ Cuándo:</p>
                      <ul className="text-green-100 space-y-1 ml-4">
                        <li>• Tienes {'>'}$50,000 en Bitcoin</li>
                        <li>• Quieres protección anti-wrench attack</li>
                        <li>• Necesitas plan de herencia robusto</li>
                      </ul>
                    </div>

                    <div className="bg-blue-900/20 border border-blue-500/30 rounded p-3">
                      <p className="text-blue-300 font-bold mb-2">🛠️ Setup:</p>
                      <ul className="text-blue-100 space-y-1 ml-4">
                        <li>• Electrum (DIY)</li>
                        <li>• Sparrow Wallet (DIY)</li>
                        <li>• Casa/Unchained (servicio)</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-indigo-200 text-xs mt-3 bg-indigo-900/50 p-2 rounded">
                    <strong>Ejemplo 2-of-3:</strong> Tienes 3 hardware wallets. Necesitas conectar 2 de ellas para mover Bitcoin. Si pierdes 1, sigues teniendo acceso. Si te roban 1, no pueden hacer nada.
                  </p>
                </div>
              </div>
            </div>

            {/* Roadmap de seguridad */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">🗺️ Roadmap de Seguridad por Cantidad</h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 p-3 bg-blue-900/20 border border-blue-500/30 rounded">
                  <span className="text-blue-400 font-bold whitespace-nowrap">&lt;$1,000:</span>
                  <p className="text-blue-100">Software wallet (BlueWallet, Electrum) + seed en papel + 2FA en exchanges</p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-green-900/20 border border-green-500/30 rounded">
                  <span className="text-green-400 font-bold whitespace-nowrap">$1k-$10k:</span>
                  <p className="text-green-100">Software wallet + seed en metal + passphrase + plan de herencia básico</p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-yellow-900/20 border border-yellow-500/30 rounded">
                  <span className="text-yellow-400 font-bold whitespace-nowrap">$10k-$50k:</span>
                  <p className="text-yellow-100">Hardware wallet (Ledger/Trezor) + múltiples backups geográficos + Shamir backup</p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-orange-900/20 border border-orange-500/30 rounded">
                  <span className="text-orange-400 font-bold whitespace-nowrap">$50k-$250k:</span>
                  <p className="text-orange-100">Multisig 2-of-3 + hardware wallets + plan de herencia con timelock</p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-red-900/20 border border-red-500/30 rounded">
                  <span className="text-red-400 font-bold whitespace-nowrap">{'>'}$250k:</span>
                  <p className="text-red-100">Multisig 3-of-5 + servicios profesionales (Casa, Unchained) + asesoría legal para herencia + seguros</p>
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
                  <strong className="text-white">6 Protocolos de Emergencia:</strong>
                </p>
                <ul className="ml-6 space-y-1">
                  <li>1. Dispositivo perdido: Bloquear remotamente, evaluar riesgo, mover fondos si necesario</li>
                  <li>2. Seed comprometida: Mover fondos INMEDIATAMENTE a nueva wallet</li>
                  <li>3. Dirección incorrecta: Bitcoin es irreversible, prevención es clave</li>
                  <li>4. Phishing: Actuar según qué información diste</li>
                  <li>5. Transacción sospechosa: Investigar y mover fondos si confirmas robo</li>
                  <li>6. Herencia: 3 opciones según cantidad (carta sellada, Shamir, multisig+timelock)</li>
                </ul>
                <p>
                  <strong className="text-white">Migración de seguridad:</strong> Software wallet {'->'} Hardware wallet (&gt;$2k) {'->'} Multisig (&gt;$50k) según tus ahorros crecen.
                </p>
                <p className="text-green-300 font-bold bg-green-900/30 p-3 rounded mt-4">
                  ✅ Guarda esta lección como referencia. En una emergencia, cada segundo cuenta y tener un protocolo claro puede salvar tus Bitcoins.
                </p>
              </div>
            </div>
          </section>

          {/* Felicitaciones */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-500/40 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-white mb-4">
                ¡Felicitaciones!
              </h2>
              <p className="text-green-200 mb-4">
                Has completado el Módulo 4: Seguridad Avanzada
              </p>
              <p className="text-green-100 text-sm">
                Ya conoces las amenazas comunes, las mejores prácticas de seguridad, y los protocolos de emergencia para proteger tus Bitcoins.
              </p>
              <div className="bg-green-900/40 border border-green-500/30 rounded-lg p-4 mt-6">
                <p className="text-white font-bold mb-2">🎓 Has aprendido:</p>
                <ul className="text-green-100 text-sm space-y-1">
                  <li>✓ Las 7 amenazas más comunes en Bitcoin</li>
                  <li>✓ Las 5 reglas de oro de seguridad</li>
                  <li>✓ Mejores prácticas para seed phrase, dispositivos e higiene digital</li>
                  <li>✓ 6 protocolos de emergencia listos para usar</li>
                  <li>✓ 3 opciones de planificación de herencia</li>
                  <li>✓ Cuándo migrar a hardware wallet o multisig</li>
                </ul>
              </div>
              <p className="text-green-300 mt-6 font-bold">
                Ahora tienes las herramientas para proteger tus Bitcoins como un profesional. ¡Sigue aprendiendo y mantente seguro!
              </p>
            </div>
          </section>

        </div>

        {/* Navegación */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-800">
          <Link
            href="/cursos/primera-wallet/leccion/4-2"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span>←</span>
            <span>Lección anterior</span>
          </Link>

          <Link
            href="/cursos/primera-wallet"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <span>Volver al curso</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
