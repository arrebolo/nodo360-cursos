import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Economía de Bitcoin - Bitcoin desde Cero | Nodo360',
  description: 'Comprende la economía de Bitcoin: escasez programada, deflación, política monetaria fija, Stock-to-Flow, y por qué Bitcoin es oro digital 2.0.',
  keywords: 'economía bitcoin, escasez bitcoin, deflación, stock to flow, oro digital, política monetaria',
  openGraph: {
    title: 'Economía de Bitcoin - Bitcoin desde Cero',
    description: 'La revolución monetaria más predecible de la historia',
    type: 'article',
  }
};

export default function Leccion33() {
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
              Módulo 3 • Lección 3 de 3
            </div>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">

        {/* Título */}
        <div className="mb-8">
          <div className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
            Módulo 3: La Red Bitcoin
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Economía de Bitcoin
          </h1>
          <p className="text-xl text-gray-300">
            Dinero diseñado por código, no por políticos
          </p>
        </div>

        {/* Introducción */}
        <section className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Una Nueva Forma de Dinero</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Bitcoin representa un experimento económico sin precedentes: <strong className="text-white">dinero con una política monetaria completamente predecible y transparente</strong>, escrito en código inmutable y verificable por cualquiera.
            </p>
            <p>
              Por primera vez en la historia, tenemos un activo monetario cuya oferta es absolutamente conocida y no puede ser manipulada por gobiernos, bancos centrales o cualquier entidad.
            </p>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mt-6">
              <p className="text-orange-300 font-medium">
                💡 Mientras los bancos centrales pueden imprimir dinero fiat a voluntad (causando inflación), Bitcoin tiene un calendario de emisión fijo hasta el año 2140.
              </p>
            </div>
          </div>
        </section>

        {/* Los 21 Millones */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Los 21 Millones</h2>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                El límite de <strong className="text-white">21 millones de bitcoins</strong> es la característica definitoria de Bitcoin. Esta escasez absoluta está programada en el código y es verificada por cada nodo de la red.
              </p>

              <div className="bg-gray-900/50 rounded-lg p-6 my-6">
                <h3 className="text-white font-bold mb-4">Estado actual (2024):</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-gray-800 rounded p-3">
                    <span className="text-sm">Bitcoins en circulación:</span>
                    <span className="text-orange-400 font-bold">~19.5 millones</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 rounded p-3">
                    <span className="text-sm">Porcentaje minado:</span>
                    <span className="text-orange-400 font-bold">~93%</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 rounded p-3">
                    <span className="text-sm">Quedan por minar:</span>
                    <span className="text-orange-400 font-bold">~1.5 millones</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 rounded p-3">
                    <span className="text-sm">Último BTC minado:</span>
                    <span className="text-orange-400 font-bold">~Año 2140</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-blue-300 font-bold mb-2">¿Por qué 21 millones?</h4>
                <p className="text-sm mb-2">
                  Satoshi Nakamoto nunca explicó completamente por qué eligió 21 millones. Es un número arbitrario pero con propiedades útiles:
                </p>
                <ul className="text-sm space-y-1">
                  <li>→ Es divisible en 100 millones de unidades (satoshis)</li>
                  <li>→ Genera escasez sin ser excesivamente limitado</li>
                  <li>→ El ritmo de emisión se duplica perfectamente cada halving</li>
                </ul>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mt-4">
                <h4 className="text-purple-300 font-bold mb-2">Divisibilidad extrema:</h4>
                <p className="text-sm mb-3">
                  Aunque "solo" habrá 21 millones de BTC, cada bitcoin es divisible hasta 8 decimales:
                </p>
                <div className="bg-gray-900/50 rounded p-4 font-mono text-xs space-y-2">
                  <div>1 BTC = 1.00000000 BTC</div>
                  <div>1 satoshi = 0.00000001 BTC</div>
                  <div className="text-orange-400 mt-2">Total de satoshis = 2,100,000,000,000,000</div>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Eso es 2.1 cuatrillones de satoshis - suficiente para la economía global.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Escasez vs Abundancia */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Escasez Digital Absoluta</h2>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                Antes de Bitcoin, todo lo digital era infinitamente copiable (música, videos, texto). Bitcoin logró crear <strong className="text-white">escasez digital verificable</strong> - algo que no se puede copiar ni falsificar.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-3 text-center">Dinero Fiat</h3>
                  <div className="text-center text-4xl mb-3">💵</div>
                  <ul className="text-xs space-y-2">
                    <li className="flex items-start gap-1">
                      <span className="text-red-400">✗</span>
                      <span>Oferta ilimitada</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-red-400">✗</span>
                      <span>Inflacionario</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-red-400">✗</span>
                      <span>Controlado por gobiernos</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-red-400">✗</span>
                      <span>Política monetaria opaca</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-3 text-center">Oro</h3>
                  <div className="text-center text-4xl mb-3">🪙</div>
                  <ul className="text-xs space-y-2">
                    <li className="flex items-start gap-1">
                      <span className="text-yellow-400">~</span>
                      <span>Escaso pero desconocido</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-yellow-400">~</span>
                      <span>Se extrae más cada año</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-green-400">✓</span>
                      <span>Sin dueño</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-red-400">✗</span>
                      <span>Difícil de transportar</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-3 text-center">Bitcoin</h3>
                  <div className="text-center text-4xl mb-3">₿</div>
                  <ul className="text-xs space-y-2">
                    <li className="flex items-start gap-1">
                      <span className="text-green-400">✓</span>
                      <span>Escasez absoluta conocida</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-green-400">✓</span>
                      <span>Desinflacionario</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-green-400">✓</span>
                      <span>Sin dueño</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-green-400">✓</span>
                      <span>Verificable + Portable</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="text-orange-300 text-sm">
                  <strong>Bitcoin como &quot;Oro Digital 2.0&quot;:</strong> Bitcoin combina la escasez del oro con la portabilidad y verificabilidad del dinero digital. Es el primer activo verdaderamente escaso en el mundo digital.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stock-to-Flow */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Stock-to-Flow (S2F)</h2>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                El <strong className="text-white">Stock-to-Flow</strong> es una métrica que mide la escasez de un activo. Se calcula dividiendo el stock existente (supply total) entre el flow (producción anual).
              </p>

              <div className="bg-gray-900/50 rounded-lg p-6 my-4">
                <div className="text-center mb-4">
                  <div className="inline-block bg-blue-500/20 rounded-lg p-4">
                    <div className="text-blue-300 font-mono text-lg">S2F = Stock / Flow</div>
                    <div className="text-gray-400 text-xs mt-2">Cuanto mayor el número, más escaso el activo</div>
                  </div>
                </div>

                <h3 className="text-white font-bold mb-3">Comparativa S2F (2024):</h3>
                <div className="space-y-2">
                  <div className="bg-gray-800 rounded p-3 flex justify-between items-center">
                    <span className="text-sm">Plata</span>
                    <span className="text-gray-400 font-mono">~22</span>
                  </div>
                  <div className="bg-gray-800 rounded p-3 flex justify-between items-center">
                    <span className="text-sm">Oro</span>
                    <span className="text-yellow-400 font-mono">~62</span>
                  </div>
                  <div className="bg-gray-800 rounded p-3 flex justify-between items-center">
                    <span className="text-sm">Bitcoin (post-halving 2024)</span>
                    <span className="text-orange-400 font-mono font-bold">~120</span>
                  </div>
                  <div className="bg-gray-800 rounded p-3 flex justify-between items-center">
                    <span className="text-sm">Bitcoin (2032, post-halving)</span>
                    <span className="text-orange-500 font-mono font-bold">~500+</span>
                  </div>
                  <div className="bg-gray-800 rounded p-3 flex justify-between items-center">
                    <span className="text-sm">Bitcoin (2140)</span>
                    <span className="text-green-400 font-mono font-bold">∞</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-blue-300 font-bold mb-2">¿Qué significa esto?</h4>
                <p className="text-sm">
                  Bitcoin ya tiene un S2F superior al oro (el activo monetario más escaso históricamente). Con cada halving, el S2F de Bitcoin aumenta, haciéndolo progresivamente más escaso. En 2140, cuando se mine el último bitcoin, su S2F será infinito - ninguna nueva oferta entrará al mercado jamás.
                </p>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-4">
                <p className="text-yellow-300 text-sm">
                  <strong>Nota:</strong> El modelo S2F ha sido controvertido y no todos los economistas están de acuerdo en su validez predictiva. Sin embargo, ilustra bien la escasez programada de Bitcoin comparada con otros activos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inflación vs Deflación */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Desinflación Programada</h2>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                Bitcoin es <strong className="text-white">desinflacionario</strong>: su tasa de inflación (nuevos bitcoins creados) disminuye con el tiempo hasta llegar a 0% en 2140.
              </p>

              <div className="bg-gray-900/50 rounded-lg p-6 my-4">
                <h3 className="text-white font-bold mb-4">Tasa de inflación de Bitcoin:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">2012:</span>
                    <span className="text-red-400">~25% anual</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">2016:</span>
                    <span className="text-orange-400">~8.3% anual</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">2020:</span>
                    <span className="text-yellow-400">~3.6% anual</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold">2024:</span>
                    <span className="text-green-400 font-bold">~1.7% anual</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">2028:</span>
                    <span className="text-blue-400">~0.8% anual</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">2140:</span>
                    <span className="text-purple-400 font-bold">0% (deflación pura)</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-500/10 to-green-500/10 border border-gray-600 rounded-lg p-6">
                <h3 className="text-white font-bold mb-4">Comparación con dinero fiat:</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>USD (Dólar):</span>
                      <span className="text-red-400">~3-7% anual (2020-2023)</span>
                    </div>
                    <div className="text-xs text-gray-400">La Fed puede imprimir sin límite teórico</div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>EUR (Euro):</span>
                      <span className="text-red-400">~5-10% anual (2021-2023)</span>
                    </div>
                    <div className="text-xs text-gray-400">BCE expandió balance en trillones durante COVID</div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Bitcoin:</span>
                      <span className="text-green-400">1.7% → 0% (predecible)</span>
                    </div>
                    <div className="text-xs text-gray-400">Política monetaria fija e inmutable</div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="text-orange-300 text-sm">
                  <strong>Implicación:</strong> Con el tiempo, si la demanda de Bitcoin se mantiene o aumenta, y la oferta nueva disminuye constantemente, la presión de precios es alcista. Esto es economía básica de oferta y demanda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valor y Adopción */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">¿De Dónde Viene el Valor?</h2>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-4 text-gray-300">
              <p>
                El valor de Bitcoin viene de sus propiedades únicas como dinero digital y de la red de personas que acuerdan usarlo como reserva de valor o medio de intercambio.
              </p>

              <div className="space-y-3 mt-6">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-2">1. Escasez verificable</h3>
                  <p className="text-sm">
                    Solo 21 millones, no más. No se puede inflar la oferta.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-2">2. Descentralización</h3>
                  <p className="text-sm">
                    Sin punto central de falla. Imparable y resistente a censura.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-2">3. Portabilidad</h3>
                  <p className="text-sm">
                    Puedes mover millones al otro lado del mundo en minutos.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-2">4. Divisibilidad</h3>
                  <p className="text-sm">
                    Divisible hasta 8 decimales (100 millones de satoshis por BTC).
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-2">5. Verificabilidad</h3>
                  <p className="text-sm">
                    Cualquiera puede verificar todas las transacciones y reglas.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-2">6. Durabilidad</h3>
                  <p className="text-sm">
                    Mientras exista internet, Bitcoin existirá.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-2">7. Fungibilidad</h3>
                  <p className="text-sm">
                    Cada bitcoin es intercambiable con otro bitcoin.
                  </p>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
                <h4 className="text-blue-300 font-bold mb-2">Efecto de red:</h4>
                <p className="text-sm">
                  Como el teléfono o internet, Bitcoin se vuelve más valioso mientras más personas lo usan. Cada nuevo usuario, empresa o institución que adopta Bitcoin fortalece la red y aumenta su utilidad.
                </p>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mt-4">
                <h4 className="text-purple-300 font-bold mb-2">Curva de adopción:</h4>
                <p className="text-sm mb-2">
                  Bitcoin está en transición de ser un activo especulativo a convertirse en:
                </p>
                <ul className="text-sm space-y-1">
                  <li>→ Reserva de valor (como oro digital)</li>
                  <li>→ Cobertura contra inflación</li>
                  <li>→ Sistema de pagos global</li>
                  <li>→ Herramienta de soberanía financiera</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Críticas económicas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Críticas Económicas Comunes</h2>

          <div className="space-y-4">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <span className="text-red-400">❌</span>
                <span>&quot;Bitcoin es demasiado volátil para ser dinero&quot;</span>
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-white">Respuesta:</strong> Bitcoin está en fase de monetización. El oro también fue volátil en sus primeras décadas. A medida que la capitalización de mercado aumenta, la volatilidad históricamente disminuye.
              </p>
              <p className="text-gray-400 text-xs">
                Volatilidad anual: 2012 (~200%) → 2024 (~40-60%). La tendencia es a la baja.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <span className="text-red-400">❌</span>
                <span>&quot;La deflación incentiva el acaparamiento&quot;</span>
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-white">Respuesta:</strong> La gente sigue gastando en necesidades y deseos incluso con moneda deflacionaria. La tecnología (laptops, smartphones) se vuelve más barata cada año, pero la gente sigue comprando. El dinero sano premia el ahorro sobre el consumismo desmedido.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <span className="text-red-400">❌</span>
                <span>&quot;No tiene valor intrínseco&quot;</span>
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-white">Respuesta:</strong> El dinero fiat tampoco tiene &quot;valor intrínseco&quot;. El valor viene del consenso social y de las propiedades que hacen algo útil como dinero. Bitcoin tiene propiedades monetarias superiores al dinero fiat: escasez, descentralización, portabilidad.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <span className="text-red-400">❌</span>
                <span>&quot;Solo se usa para actividad ilegal&quot;</span>
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-white">Respuesta:</strong> Estudios muestran que menos del 1% de las transacciones Bitcoin son ilícitas. El efectivo sigue siendo el favorito para crimen. Bitcoin es seudónimo pero todas las transacciones son públicas - es una pésima herramienta para criminales.
              </p>
              <p className="text-gray-400 text-xs">
                El uso principal de Bitcoin hoy: ahorro, inversión, remesas, y protección contra inflación.
              </p>
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
                <span>Bitcoin tiene un suministro máximo fijo de 21 millones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Es el primer activo con escasez digital absolutamente verificable</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Su tasa de inflación disminuye constantemente hasta llegar a 0%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>El modelo Stock-to-Flow sugiere que Bitcoin es más escaso que el oro</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>El valor viene de sus propiedades monetarias superiores</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Bitcoin representa una alternativa al sistema monetario fiat inflacionario</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Navegación */}
        <nav className="flex justify-between items-center pt-8 border-t border-gray-700">
          <Link
            href="/cursos/bitcoin-desde-cero/leccion/3-2"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span>←</span>
            <span>Anterior: La Red Bitcoin</span>
          </Link>

          <Link
            href="/cursos/bitcoin-desde-cero"
            className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
          >
            <span>Volver al Curso</span>
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
