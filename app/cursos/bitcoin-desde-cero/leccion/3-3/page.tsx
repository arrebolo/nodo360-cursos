import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Recuperación y Backups: Seed phrase - Bitcoin desde Cero | Nodo360',
  description: 'Aprende cómo hacer backups seguros de tu wallet Bitcoin, recuperación con seed phrase, passphrase adicional, multisig y plan de herencia.',
  keywords: 'seed phrase, backup bitcoin, recuperacion wallet, passphrase, multisig, herencia bitcoin, backup metal',
  openGraph: {
    title: 'Recuperación y Backups de Bitcoin - Bitcoin desde Cero',
    description: 'Protege tu Bitcoin para siempre: backups y recuperación',
    type: 'article',
  }
};

export default function Leccion33() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900">
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cursos/bitcoin-desde-cero" className="text-orange-400 hover:text-orange-300 transition-colors">
              ← Volver al curso
            </Link>
            <div className="text-gray-400 text-sm">
              Módulo 3 • Lección 3 de 3
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
            Recuperación y Backups
          </h1>
          <p className="text-xl text-gray-300">
            Asegura tu Bitcoin para generaciones
          </p>
        </div>

        <section className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">El seguro de vida de tu Bitcoin</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Tu seed phrase es literalmente tu dinero en forma de palabras. Si la pierdes, pierdes tus bitcoins. Si alguien la encuentra, puede robarte. Esta lección te enseñará cómo protegerla correctamente y qué hacer en casos de emergencia.
            </p>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mt-6">
              <p className="text-orange-300 font-medium">
                💡 Piensa en tu seed phrase como la llave maestra de una caja fuerte indestructible. La caja está en público (la blockchain), pero solo quien tiene la llave puede abrirla.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Métodos de Backup</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">📄</span>
                <span>Papel (Método básico)</span>
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p className="text-sm">
                  El método más simple y común. Escribe las 12/24 palabras en papel.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
                    <h4 className="text-white font-bold mb-2 text-sm">✅ Ventajas</h4>
                    <ul className="text-xs space-y-1">
                      <li>→ Gratis</li>
                      <li>→ Fácil</li>
                      <li>→ No requiere tecnología</li>
                      <li>→ Perfecto para empezar</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                    <h4 className="text-white font-bold mb-2 text-sm">❌ Desventajas</h4>
                    <ul className="text-xs space-y-1">
                      <li>→ Vulnerable al fuego</li>
                      <li>→ Vulnerable al agua</li>
                      <li>→ Se puede deteriorar con tiempo</li>
                      <li>→ Puede desteñirse la tinta</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded p-4">
                  <p className="text-blue-300 text-sm font-medium mb-2">💡 Mejores prácticas para papel:</p>
                  <ul className="text-blue-300 text-sm space-y-1">
                    <li>→ Usa papel de buena calidad</li>
                    <li>→ Bolígrafo permanente (no lápiz)</li>
                    <li>→ Lamínalo para protegerlo del agua</li>
                    <li>→ Guárdalo en sobre o bolsa impermeable</li>
                    <li>→ Múltiples copias en ubicaciones separadas</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                <span>Metal (Método avanzado)</span>
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p className="text-sm">
                  Graba tu seed en metal indestructible. Resistente a fuego, agua, corrosión y tiempo.
                </p>
                
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h4 className="text-white font-bold mb-3">Productos populares:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400">→</span>
                      <div>
                        <p className="text-white font-medium">Cryptosteel Capsule (~$90)</p>
                        <p className="text-gray-400 text-xs">Cápsula de acero con letras deslizables</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400">→</span>
                      <div>
                        <p className="text-white font-medium">Billfodl (~$90)</p>
                        <p className="text-gray-400 text-xs">Placas de acero inoxidable con letras</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400">→</span>
                      <div>
                        <p className="text-white font-medium">Steelwallet (~$50)</p>
                        <p className="text-gray-400 text-xs">Placas metálicas para grabar</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400">→</span>
                      <div>
                        <p className="text-white font-medium">DIY con punzón (~$20)</p>
                        <p className="text-gray-400 text-xs">Placa de acero + punzón de grabar</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
                    <h4 className="text-white font-bold mb-2 text-sm">✅ Ventajas</h4>
                    <ul className="text-xs space-y-1">
                      <li>→ Resistente al fuego (hasta 1200°C)</li>
                      <li>→ Resistente al agua</li>
                      <li>→ No se deteriora con el tiempo</li>
                      <li>→ Prácticamente indestructible</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                    <h4 className="text-white font-bold mb-2 text-sm">❌ Desventajas</h4>
                    <ul className="text-xs space-y-1">
                      <li>→ Costo inicial ($50-150)</li>
                      <li>→ Más elaborado de configurar</li>
                      <li>→ Permanente (no puedes "borrar")</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded p-4">
                  <p className="text-orange-300 text-sm">
                    <strong>Recomendación:</strong> Si tienes más de $5,000 en Bitcoin, invierte en backup de metal. Es un pequeño precio por seguridad máxima.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Estrategia de Múltiples Backups</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-6 text-gray-300">
              <p>
                Para cantidades significativas, un solo backup no es suficiente. Aquí está la estrategia 3-2-1:
              </p>

              <div className="bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-white font-bold mb-4">Regla 3-2-1:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <div>
                      <p className="text-white font-medium">3 copias totales</p>
                      <p className="text-gray-400 text-sm">Tu seed en 3 lugares diferentes</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <div>
                      <p className="text-white font-medium">2 tipos de medio</p>
                      <p className="text-gray-400 text-sm">Ejemplo: 2 en metal, 1 en papel laminado</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <div>
                      <p className="text-white font-medium">1 copia off-site</p>
                      <p className="text-gray-400 text-sm">Al menos una fuera de tu casa (bóveda bancaria, familiar de confianza)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded p-4">
                <h4 className="text-white font-bold mb-2">Ejemplo práctico:</h4>
                <ul className="text-blue-300 text-sm space-y-2">
                  <li>→ <strong>Copia 1:</strong> Metal en caja fuerte de tu casa</li>
                  <li>→ <strong>Copia 2:</strong> Metal en bóveda bancaria</li>
                  <li>→ <strong>Copia 3:</strong> Papel laminado en casa de familiar de confianza</li>
                </ul>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                <p className="text-red-300 text-sm">
                  <strong>⚠️ Importante:</strong> Todas las copias deben tener la seed COMPLETA. No la dividas en partes (eso no añade seguridad real).
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Passphrase: La 25ª palabra (Opcional)</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                Una <strong className="text-white">passphrase</strong> es una contraseña adicional (la "25ª palabra") que se añade a tu seed de 12/24 palabras. Crea una wallet completamente diferente.
              </p>

              <div className="bg-gray-900/50 rounded-lg p-6 my-6">
                <h4 className="text-white font-bold mb-3">¿Cómo funciona?</h4>
                <div className="font-mono text-sm space-y-2 text-gray-400">
                  <div>Seed: witch collapse practice... (12 palabras)</div>
                  <div className="text-orange-400">+ Passphrase: "Mi frase secreta 2024"</div>
                  <div className="text-green-400">= Wallet completamente diferente</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
                  <h4 className="text-white font-bold mb-2">✅ Ventajas</h4>
                  <ul className="text-sm space-y-2">
                    <li>→ <strong>Protección extra:</strong> Si alguien encuentra tu seed, no puede acceder sin la passphrase</li>
                    <li>→ <strong>Plausible deniability:</strong> Puedes tener una wallet "señuelo" sin passphrase con poco dinero</li>
                    <li>→ <strong>Sin límite de complejidad:</strong> Puede ser tan larga como quieras</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                  <h4 className="text-white font-bold mb-2">❌ Riesgos</h4>
                  <ul className="text-sm space-y-2">
                    <li>→ <strong>Si olvidas la passphrase:</strong> Pierdes acceso PARA SIEMPRE</li>
                    <li>→ <strong>No hay recuperación:</strong> Ninguna wallet puede recuperar tu passphrase</li>
                    <li>→ <strong>Más complejo:</strong> Mayor riesgo de error humano</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-4 mt-4">
                <p className="text-yellow-300 text-sm font-medium mb-2">
                  ⚠️ Solo usa passphrase si:
                </p>
                <ul className="text-yellow-300 text-sm space-y-1">
                  <li>→ Entiendes completamente cómo funciona</li>
                  <li>→ Tienes un sistema confiable para recordarla</li>
                  <li>→ Haces backup también de la passphrase (en lugar separado de la seed)</li>
                  <li>→ Has practicado recuperar la wallet con passphrase</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Multisig: Seguridad Máxima</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Multisig</strong> (multi-firma) requiere múltiples claves privadas para gastar bitcoins. Por ejemplo, una configuración 2-de-3 significa que necesitas 2 de 3 claves para mover fondos.
              </p>

              <div className="bg-gray-900/50 rounded-lg p-6 my-6">
                <h4 className="text-white font-bold mb-4">Configuraciones comunes:</h4>
                <div className="space-y-3">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded p-4">
                    <h5 className="text-white font-medium mb-2">2-de-3 (Recomendada)</h5>
                    <p className="text-gray-400 text-sm mb-2">Necesitas 2 de 3 dispositivos para firmar</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>→ Hardware wallet en casa</li>
                      <li>→ Hardware wallet en bóveda bancaria</li>
                      <li>→ Hardware wallet con familiar de confianza</li>
                    </ul>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
                    <h5 className="text-white font-medium mb-2">3-de-5 (Para grandes cantidades)</h5>
                    <p className="text-gray-400 text-sm">Mayor redundancia, más difícil de perder acceso</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
                  <h4 className="text-white font-bold mb-2 text-sm">✅ Ventajas</h4>
                  <ul className="text-xs space-y-1">
                    <li>→ Protección contra robo de UN dispositivo</li>
                    <li>→ Protección contra pérdida de UN dispositivo</li>
                    <li>→ Múltiples ubicaciones geográficas</li>
                    <li>→ Máxima seguridad</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                  <h4 className="text-white font-bold mb-2 text-sm">❌ Desventajas</h4>
                  <ul className="text-xs space-y-1">
                    <li>→ Más complejo de configurar</li>
                    <li>→ Más costoso (múltiples hardware wallets)</li>
                    <li>→ Menos conveniente para uso diario</li>
                    <li>→ Solo para cantidades grandes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded p-4">
                <p className="text-orange-300 text-sm">
                  <strong>Servicios multisig:</strong> Unchained Capital, Casa, Nunchuk ofrecen soluciones multisig fáciles de usar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Plan de Herencia</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                Si algo te pasa, ¿podrán tus seres queridos acceder a tu Bitcoin? Un plan de herencia es esencial.
              </p>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-4">
                <p className="text-yellow-300 font-medium mb-2">
                  ⚠️ Sin plan de herencia, tus bitcoins se perderán para siempre si algo te sucede.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-6">
                <h4 className="text-white font-bold mb-4">Opciones para herencia:</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-white font-medium mb-2">1. Carta sellada en bóveda</h5>
                    <p className="text-gray-400 text-sm">
                      Instrucciones escritas con la seed en bóveda bancaria. Herederos acceden con certificado de defunción.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-white font-medium mb-2">2. Multisig con familiar</h5>
                    <p className="text-gray-400 text-sm">
                      Configuración 2-de-3 donde un heredero tiene una de las llaves.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-white font-medium mb-2">3. Servicio especializado</h5>
                    <p className="text-gray-400 text-sm mb-2">
                      Casa Covenant, Unchained Capital ofrecen servicios de herencia con time-locks.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-white font-medium mb-2">4. Testamento legal</h5>
                    <p className="text-gray-400 text-sm">
                      Incluye instrucciones en tu testamento (sin revelar la seed en el documento).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded p-4">
                <p className="text-blue-300 text-sm font-medium mb-2">
                  💡 Elementos clave del plan de herencia:
                </p>
                <ul className="text-blue-300 text-sm space-y-1">
                  <li>→ Lista de wallets y exchanges que usas</li>
                  <li>→ Ubicación de seeds (sin escribir las seeds en el testamento)</li>
                  <li>→ Instrucciones de recuperación</li>
                  <li>→ Contacto de experto Bitcoin para asistir a herederos</li>
                  <li>→ Educar a herederos sobre Bitcoin ANTES</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Escenarios de Recuperación</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-white font-bold mb-3">📱 Perdí mi teléfono/computadora</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p><strong>Solución:</strong> Compra nueva wallet, usa "Importar/Recuperar wallet", ingresa tu seed de 12/24 palabras.</p>
                <p className="text-green-300">✓ Tus bitcoins están seguros en la blockchain, solo necesitas las palabras.</p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-white font-bold mb-3">🔥 Se quemó mi backup de papel</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p><strong>Solución:</strong> Si tienes otra copia en diferente ubicación, usa esa. Si no...</p>
                <p className="text-red-300">✗ Tus bitcoins se perdieron. Por eso es crítico tener múltiples backups.</p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-white font-bold mb-3">🤔 Olvidé mi passphrase</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p><strong>Realidad:</strong> No hay forma de recuperarla. Si tienes un backup de la passphrase, úsalo.</p>
                <p className="text-red-300">✗ Sin la passphrase correcta, esos fondos están perdidos para siempre.</p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-white font-bold mb-3">🔓 Alguien encontró mi seed</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p><strong>Acción URGENTE:</strong></p>
                <ol className="text-orange-300 space-y-1">
                  <li>1. Crea NUEVA wallet inmediatamente</li>
                  <li>2. Transfiere TODOS los fondos a la nueva wallet</li>
                  <li>3. Nunca uses la seed comprometida de nuevo</li>
                </ol>
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
                <span>Haz múltiples backups de tu seed (regla 3-2-1)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Considera backup en metal para cantidades grandes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Passphrase añade seguridad extra (si la recuerdas)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Multisig para máxima seguridad en grandes cantidades</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Ten un plan de herencia para tus seres queridos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Practica recuperación ANTES de depositar mucho dinero</span>
              </li>
            </ul>
          </div>
        </section>

        <nav className="flex justify-between items-center pt-8 border-t border-gray-700">
          <Link 
            href="/cursos/bitcoin-desde-cero/leccion/3-2"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span>←</span>
            <span>Anterior: Configurar Wallet</span>
          </Link>
          
          <Link 
            href="/cursos/bitcoin-desde-cero"
            className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
          >
            <span>Volver al curso</span>
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
