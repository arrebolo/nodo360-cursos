import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lección 2.2: Hash y Criptografía | Fundamentos de Blockchain - Nodo360',
  description: 'Descubre cómo las funciones hash y la criptografía aseguran blockchain y hacen posible la confianza sin intermediarios.',
  keywords: 'funciones hash, SHA-256, criptografía blockchain, clave pública, clave privada, firmas digitales, seguridad criptográfica',
  openGraph: {
    title: 'Hash y Criptografía | Fundamentos de Blockchain',
    description: 'Aprende cómo las funciones hash, SHA-256 y la criptografía de clave pública aseguran blockchain.',
    type: 'article',
  }
}

export default function Leccion22BlockchainPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/cursos" className="hover:text-blue-400 transition-colors">Cursos</Link>
            <span>/</span>
            <Link href="/cursos/fundamentos-blockchain" className="hover:text-blue-400 transition-colors">Fundamentos de Blockchain</Link>
            <span>/</span>
            <span className="text-white">Lección 2.2</span>
          </nav>
          
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">MÓDULO 2</span>
            <span className="text-gray-400 text-sm">20 minutos</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white">Hash y Criptografía</h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <section className="mb-12">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-3">📚 En esta lección aprenderás:</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>Qué son las funciones hash y cómo funcionan</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>SHA-256: el algoritmo detrás de Bitcoin</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>Criptografía de clave pública y privada</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>Firmas digitales y verificación</span></li>
            </ul>
          </div>
        </section>

        <section className="prose prose-invert max-w-none">
          
          <h2 className="text-2xl font-bold text-white mb-4">🔐 Funciones Hash</h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Una <strong className="text-white">función hash</strong> es como una máquina que convierte cualquier información (texto, archivo, imagen) en una <strong className="text-blue-400">huella digital única</strong> de tamaño fijo.
          </p>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">💡 Analogía Simple</h3>
            <p className="text-gray-300">
              Imagina una licuadora mágica: metes cualquier cosa (una manzana, un libro, un coche) y siempre sale exactamente 250ml de líquido único e irrepetible. Si cambias aunque sea un átomo del objeto original, el líquido resultante será completamente diferente.
            </p>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">Propiedades de una Buena Función Hash</h3>

          <div className="space-y-4 mb-8">
            
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded">
              <h4 className="text-lg font-bold text-white mb-2">1. Determinística</h4>
              <p className="text-gray-300 text-sm">La misma entrada SIEMPRE produce el mismo hash.</p>
              <div className="bg-black/50 rounded p-3 mt-2 font-mono text-xs">
                <p className="text-gray-400">Input: "Hola Mundo"</p>
                <p className="text-green-400">Hash: a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e</p>
                <p className="text-gray-400 mt-2">Siempre el mismo resultado</p>
              </div>
            </div>

            <div className="bg-green-900/20 border-l-4 border-green-500 p-5 rounded">
              <h4 className="text-lg font-bold text-white mb-2">2. Tamaño Fijo</h4>
              <p className="text-gray-300 text-sm">Sin importar el tamaño de la entrada, el hash siempre tiene la misma longitud.</p>
              <div className="bg-black/50 rounded p-3 mt-2 font-mono text-xs">
                <p className="text-gray-400">Input: "Hola"</p>
                <p className="text-green-400">Hash: 64 caracteres hexadecimales (256 bits)</p>
                <p className="text-gray-400 mt-2">Input: "Todo el texto de Don Quijote"</p>
                <p className="text-green-400">Hash: 64 caracteres hexadecimales (256 bits)</p>
              </div>
            </div>

            <div className="bg-purple-900/20 border-l-4 border-purple-500 p-5 rounded">
              <h4 className="text-lg font-bold text-white mb-2">3. Efecto Avalancha</h4>
              <p className="text-gray-300 text-sm">Un cambio mínimo en la entrada produce un hash completamente diferente.</p>
              <div className="bg-black/50 rounded p-3 mt-2 font-mono text-xs">
                <p className="text-gray-400">Input: "Hola Mundo"</p>
                <p className="text-green-400 text-[10px]">Hash: a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e</p>
                <p className="text-gray-400 mt-2">Input: "Hola mundo" (m minúscula)</p>
                <p className="text-red-400 text-[10px]">Hash: 3c0a8c5f15fb57c7f6e02ab1c97d0485b7b3e2b5d6e8c9f4a1d2b3c4e5f67890</p>
                <p className="text-yellow-400 mt-2 text-xs">¡Completamente diferente!</p>
              </div>
            </div>

            <div className="bg-orange-900/20 border-l-4 border-orange-500 p-5 rounded">
              <h4 className="text-lg font-bold text-white mb-2">4. Unidireccional</h4>
              <p className="text-gray-300 text-sm">Es imposible calcular la entrada original a partir del hash (función de un solo sentido).</p>
              <div className="bg-black/50 rounded p-3 mt-2">
                <p className="text-green-400 text-sm">✓ Fácil: Texto → Hash</p>
                <p className="text-red-400 text-sm mt-1">✗ Imposible: Hash → Texto</p>
              </div>
            </div>

            <div className="bg-red-900/20 border-l-4 border-red-500 p-5 rounded">
              <h4 className="text-lg font-bold text-white mb-2">5. Resistente a Colisiones</h4>
              <p className="text-gray-300 text-sm">Es prácticamente imposible encontrar dos entradas diferentes que produzcan el mismo hash.</p>
              <div className="bg-black/50 rounded p-3 mt-2 text-xs">
                <p className="text-gray-400">Probabilidad de colisión en SHA-256:</p>
                <p className="text-red-400">1 en 2^256 ≈ 1 en 10^77</p>
                <p className="text-gray-400 mt-1 text-[10px]">Más difícil que encontrar un átomo específico en el universo</p>
              </div>
            </div>

          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">🔢 SHA-256: El Corazón de Bitcoin</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            <strong className="text-white">SHA-256</strong> (Secure Hash Algorithm 256-bit) es el algoritmo hash que usa Bitcoin. Fue diseñado por la NSA y publicado en 2001.
          </p>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Características de SHA-256</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Produce un hash de <strong className="text-white">256 bits (64 caracteres hexadecimales)</strong></li>
              <li>• Es <strong className="text-white">extremadamente rápido</strong> de calcular</li>
              <li>• Es <strong className="text-white">computacionalmente imposible</strong> de revertir</li>
              <li>• Nunca ha sido crackeado desde su creación</li>
              <li>• Se usa en minería, direcciones y firmas de Bitcoin</li>
            </ul>
          </div>

          <div className="bg-black/50 border border-blue-500/30 rounded-lg p-6 mb-8 font-mono">
            <h4 className="text-white font-bold mb-3 text-base">Ejemplo Práctico:</h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="text-gray-400">Input:</p>
                <p className="text-green-400 break-all">Satoshi Nakamoto</p>
              </div>
              <div>
                <p className="text-gray-400">SHA-256 Output:</p>
                <p className="text-blue-400 break-all text-[10px]">a0dc65ffca799873cbea0ac274015b9526505daaaed385155425f7337704883e</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">🔑 Criptografía de Clave Pública</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            La <strong className="text-white">criptografía asimétrica</strong> o de clave pública es el sistema que permite enviar y recibir Bitcoin de forma segura sin necesidad de compartir información secreta.
          </p>

          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">El Sistema de Dos Llaves</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-900/30 rounded-lg p-5">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span>🔓</span> Clave Pública
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>✓ Se puede compartir con cualquiera</li>
                  <li>✓ Como tu número de cuenta bancaria</li>
                  <li>✓ Otros la usan para enviarte Bitcoin</li>
                  <li>✓ Se deriva de la clave privada</li>
                </ul>
              </div>

              <div className="bg-red-900/30 rounded-lg p-5">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span>🔐</span> Clave Privada
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>✗ NUNCA la compartas</li>
                  <li>✗ Como tu PIN o contraseña</li>
                  <li>✗ Solo tú la conoces</li>
                  <li>✗ Control total de tus fondos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">💡 Analogía del Buzón</h3>
            <p className="text-gray-300 mb-3">
              Tu <strong className="text-blue-400">clave pública</strong> es como la ranura de un buzón de correos: cualquiera puede depositar cartas (enviar Bitcoin), pero solo tú tienes la <strong className="text-red-400">clave privada</strong> para abrir el buzón y acceder al contenido.
            </p>
            <p className="text-gray-400 text-sm">
              Si pierdes tu clave privada, es como perder la llave del buzón: nadie puede ayudarte a recuperarla, ni siquiera Bitcoin.
            </p>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">Generación de Claves</h3>

          <div className="bg-black/50 border border-gray-700 rounded-lg p-6 mb-8">
            <div className="space-y-4 font-mono text-xs">
              <div>
                <p className="text-gray-400 mb-1">1. Clave Privada (256 bits - número aleatorio):</p>
                <p className="text-red-400 break-all text-[10px]">E9873D79C6D87DC0FB6A5778633389F4453213303DA61F20BD67FC233AA33262</p>
              </div>
              <div className="text-center text-blue-400">↓ Aplicar ECDSA (curva elíptica) ↓</div>
              <div>
                <p className="text-gray-400 mb-1">2. Clave Pública (512 bits):</p>
                <p className="text-green-400 break-all text-[10px]">04bfcab8722991ae774db48f934ca79cfb7dd991229153b9f732ba5334aafcd8e7266e47076996b55a14bf9913ee3145ce0cfc1372ada8ada74bd287450313534a</p>
              </div>
              <div className="text-center text-blue-400">↓ Aplicar SHA-256 y RIPEMD-160 ↓</div>
              <div>
                <p className="text-gray-400 mb-1">3. Dirección Bitcoin (Base58Check):</p>
                <p className="text-orange-400 break-all">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">✍️ Firmas Digitales</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Las <strong className="text-white">firmas digitales</strong> permiten demostrar que eres el dueño de una dirección sin revelar tu clave privada.
          </p>

          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Cómo Funciona el Firmado</h3>
            
            <div className="space-y-4 text-gray-300">
              <div className="bg-purple-900/30 rounded p-4">
                <p className="font-bold text-white mb-2">Paso 1: Crear la Firma</p>
                <p className="text-sm">Cuando envías Bitcoin, tu wallet combina:</p>
                <ul className="text-sm mt-2 ml-4 space-y-1">
                  <li>• Tu clave privada</li>
                  <li>• Los datos de la transacción</li>
                  <li>• Un número aleatorio</li>
                </ul>
                <p className="text-sm mt-2">Resultado: Una firma digital única para esa transacción</p>
              </div>

              <div className="bg-purple-900/30 rounded p-4">
                <p className="font-bold text-white mb-2">Paso 2: Verificación</p>
                <p className="text-sm">Cualquiera puede verificar tu firma usando:</p>
                <ul className="text-sm mt-2 ml-4 space-y-1">
                  <li>• Tu clave pública</li>
                  <li>• La firma</li>
                  <li>• Los datos de la transacción</li>
                </ul>
                <p className="text-sm mt-2">Si coincide = transacción válida ✓</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">🔒 Propiedades de las Firmas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong className="text-white">Auténticas:</strong> Solo tú puedes crear la firma (tienes la clave privada)</li>
              <li>• <strong className="text-white">Verificables:</strong> Cualquiera puede verificarla (con tu clave pública)</li>
              <li>• <strong className="text-white">Únicas:</strong> Cada transacción tiene una firma diferente</li>
              <li>• <strong className="text-white">Inmutables:</strong> Si cambias la transacción, la firma no valida</li>
              <li>• <strong className="text-white">No reutilizables:</strong> No se puede copiar a otra transacción</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">⚡ Por Qué Es Tan Seguro</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">Matemáticamente Seguro</h3>
              <p className="text-gray-300 text-sm">
                Romper SHA-256 o ECDSA requeriría probar 2^256 posibilidades. Con las supercomputadoras más potentes actuales, tomaría más tiempo que la edad del universo.
              </p>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">Sin Puntos Débiles</h3>
              <p className="text-gray-300 text-sm">
                No hay "puerta trasera" ni forma de recuperar claves perdidas. Es seguridad absoluta, pero también responsabilidad absoluta.
              </p>
            </div>

          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-white mb-3">🎯 Concepto Clave</h3>
            <p className="text-gray-300">
              La criptografía de blockchain no se basa en "mantener secretos", sino en <strong className="text-yellow-400">hacer que romperla sea matemáticamente imposible</strong>. No importa que todo sea público y verificable, porque la seguridad proviene de las matemáticas, no de la oscuridad.
            </p>
          </div>

        </section>

        <section className="my-12 bg-gray-800/50 border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">📝 Resumen de la Lección</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span>Las <strong className="text-white">funciones hash</strong> crean huellas digitales únicas e irreversibles</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span><strong className="text-white">SHA-256</strong> es el algoritmo hash de Bitcoin</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span><strong className="text-white">Clave pública:</strong> dirección para recibir (compartible)</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span><strong className="text-white">Clave privada:</strong> control de fondos (secreta)</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span>Las <strong className="text-white">firmas digitales</strong> prueban propiedad sin revelar claves</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span>La seguridad es <strong className="text-white">matemáticamente inquebrantable</strong></span></li>
          </ul>
        </section>

        <section className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-800">
          <Link href="/cursos/fundamentos-blockchain/leccion/2-1" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors">
            ← Lección Anterior
          </Link>
          <Link href="/cursos/fundamentos-blockchain/leccion/2-3" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
            Siguiente Lección →
          </Link>
        </section>

      </article>
    </main>
  )
}
