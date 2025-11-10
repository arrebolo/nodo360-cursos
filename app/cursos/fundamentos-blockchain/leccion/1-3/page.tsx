import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lección 1.3: Por qué es Revolucionario | Fundamentos de Blockchain - Nodo360',
  description: 'Descubre por qué blockchain está transformando industrias y cambiando la forma en que confiamos e intercambiamos valor.',
}

export default function Leccion13BlockchainPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/cursos" className="hover:text-blue-400 transition-colors">Cursos</Link>
            <span>/</span>
            <Link href="/cursos/fundamentos-blockchain" className="hover:text-blue-400 transition-colors">Fundamentos de Blockchain</Link>
            <span>/</span>
            <span className="text-white">Lección 1.3</span>
          </nav>
          
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">MÓDULO 1</span>
            <span className="text-gray-400 text-sm">10 minutos</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white">Por qué es Revolucionario</h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <section className="mb-12">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-3">📚 En esta lección aprenderás:</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>Los 5 pilares revolucionarios de blockchain</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>Problemas del sistema actual que resuelve</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>Casos de uso que antes eran imposibles</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>El impacto social y económico</span></li>
            </ul>
          </div>
        </section>

        <section className="prose prose-invert max-w-none">
          
          <h2 className="text-2xl font-bold text-white mb-4">🚀 Los 5 Pilares Revolucionarios</h2>

          <div className="space-y-6 mb-12">
            
            <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 border-l-4 border-blue-500 p-6 rounded">
              <div className="flex items-start gap-4">
                <div className="text-4xl">1️⃣</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Descentralización</h3>
                  <p className="text-gray-300 mb-3">
                    No hay un punto único de control o fallo. El poder está distribuido entre todos los participantes.
                  </p>
                  <div className="bg-blue-900/20 rounded p-4">
                    <p className="text-sm text-gray-300"><strong className="text-white">Antes:</strong> Bancos centrales, gobiernos y corporaciones controlan todo</p>
                    <p className="text-sm text-gray-300 mt-2"><strong className="text-blue-400">Ahora:</strong> Cada individuo tiene el mismo poder en la red</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 border-l-4 border-green-500 p-6 rounded">
              <div className="flex items-start gap-4">
                <div className="text-4xl">2️⃣</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Transparencia Total</h3>
                  <p className="text-gray-300 mb-3">
                    Todas las transacciones son públicas y verificables por cualquiera, en cualquier momento.
                  </p>
                  <div className="bg-green-900/20 rounded p-4">
                    <p className="text-sm text-gray-300"><strong className="text-white">Antes:</strong> Sistemas opacos donde solo confías en lo que te dicen</p>
                    <p className="text-sm text-gray-300 mt-2"><strong className="text-green-400">Ahora:</strong> "Don't trust, verify" - Verifica tú mismo todo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 border-l-4 border-purple-500 p-6 rounded">
              <div className="flex items-start gap-4">
                <div className="text-4xl">3️⃣</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Inmutabilidad</h3>
                  <p className="text-gray-300 mb-3">
                    Una vez registrado, es prácticamente imposible alterar o borrar información.
                  </p>
                  <div className="bg-purple-900/20 rounded p-4">
                    <p className="text-sm text-gray-300"><strong className="text-white">Antes:</strong> Registros pueden modificarse, borrarse o censurarse</p>
                    <p className="text-sm text-gray-300 mt-2"><strong className="text-purple-400">Ahora:</strong> Historia permanente e inalterable</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-900/30 to-orange-800/30 border-l-4 border-orange-500 p-6 rounded">
              <div className="flex items-start gap-4">
                <div className="text-4xl">4️⃣</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Sin Intermediarios</h3>
                  <p className="text-gray-300 mb-3">
                    Las transacciones ocurren directamente entre pares, sin necesidad de intermediarios.
                  </p>
                  <div className="bg-orange-900/20 rounded p-4">
                    <p className="text-sm text-gray-300"><strong className="text-white">Antes:</strong> Bancos, notarios, plataformas que cobran comisiones</p>
                    <p className="text-sm text-gray-300 mt-2"><strong className="text-orange-400">Ahora:</strong> Peer-to-peer, costos mínimos, sin permisos</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 border-l-4 border-red-500 p-6 rounded">
              <div className="flex items-start gap-4">
                <div className="text-4xl">5️⃣</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Acceso Universal</h3>
                  <p className="text-gray-300 mb-3">
                    Cualquier persona con internet puede participar, sin discriminación ni barreras de entrada.
                  </p>
                  <div className="bg-red-900/20 rounded p-4">
                    <p className="text-sm text-gray-300"><strong className="text-white">Antes:</strong> Necesitas cuenta bancaria, identificación, aprobación</p>
                    <p className="text-sm text-gray-300 mt-2"><strong className="text-red-400">Ahora:</strong> Acceso financiero para los 1.700 millones de no bancarizados</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">⚠️ Problemas del Sistema Actual</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>🏦</span> Centralización del Poder
              </h3>
              <p className="text-gray-300 text-sm mb-2">Pocas entidades controlan el dinero y los datos de millones.</p>
              <p className="text-green-400 text-sm font-semibold">→ Blockchain lo descentraliza</p>
            </div>

            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>🔒</span> Falta de Transparencia
              </h3>
              <p className="text-gray-300 text-sm mb-2">No sabes qué pasa realmente con tu dinero o datos.</p>
              <p className="text-green-400 text-sm font-semibold">→ Blockchain es completamente transparente</p>
            </div>

            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>✂️</span> Censura y Control
              </h3>
              <p className="text-gray-300 text-sm mb-2">Gobiernos y empresas pueden bloquear tus fondos.</p>
              <p className="text-green-400 text-sm font-semibold">→ Blockchain es resistente a censura</p>
            </div>

            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>💸</span> Costos y Fricciones
              </h3>
              <p className="text-gray-300 text-sm mb-2">Transferencias internacionales lentas y caras.</p>
              <p className="text-green-400 text-sm font-semibold">→ Blockchain reduce costos drásticamente</p>
            </div>

            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>📊</span> Manipulación de Datos
              </h3>
              <p className="text-gray-300 text-sm mb-2">Registros pueden alterarse sin dejar rastro.</p>
              <p className="text-green-400 text-sm font-semibold">→ Blockchain es inmutable</p>
            </div>

            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>🚫</span> Exclusión Financiera
              </h3>
              <p className="text-gray-300 text-sm mb-2">Millones sin acceso a servicios bancarios.</p>
              <p className="text-green-400 text-sm font-semibold">→ Blockchain incluye a todos</p>
            </div>

          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">💡 Casos de Uso Antes Imposibles</h2>

          <div className="space-y-4 mb-8">
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-bold text-white mb-2">🌍 Remesas sin Intermediarios</h3>
              <p className="text-gray-300 text-sm">
                Un trabajador en España puede enviar dinero a su familia en América Latina en segundos, por céntimos, sin banco.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-bold text-white mb-2">🎨 Propiedad Digital Verificable</h3>
              <p className="text-gray-300 text-sm">
                Artistas pueden vender arte digital con garantía de autenticidad y recibir regalías automáticas en cada reventa.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-bold text-white mb-2">🏥 Historiales Médicos Seguros</h3>
              <p className="text-gray-300 text-sm">
                Pacientes controlan sus datos médicos y los comparten selectivamente, sin intermediarios centralizados vulnerables.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-bold text-white mb-2">🗳️ Votaciones Transparentes</h3>
              <p className="text-gray-300 text-sm">
                Sistemas electorales verificables donde cada voto puede ser auditado sin revelar la identidad del votante.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-bold text-white mb-2">🏭 Cadenas de Suministro Trazables</h3>
              <p className="text-gray-300 text-sm">
                Seguimiento completo de productos desde su origen hasta el consumidor final, eliminando falsificaciones.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-bold text-white mb-2">💰 Finanzas Programables</h3>
              <p className="text-gray-300 text-sm">
                Préstamos, seguros e inversiones que se ejecutan automáticamente según reglas predefinidas, sin bancos.
              </p>
            </div>

          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">🌐 El Impacto Global</h2>

          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Cambio de Paradigma</h3>
            <p className="text-gray-300 mb-4">
              Blockchain no es solo una mejora tecnológica, es un <strong className="text-blue-400">cambio fundamental</strong> en cómo organizamos la sociedad:
            </p>
            <div className="space-y-3 text-gray-300">
              <p>• <strong className="text-white">De confianza en instituciones</strong> → a confianza en matemáticas</p>
              <p>• <strong className="text-white">De permisos centralizados</strong> → a acceso abierto</p>
              <p>• <strong className="text-white">De opacidad</strong> → a transparencia total</p>
              <p>• <strong className="text-white">De intermediarios necesarios</strong> → a colaboración directa</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">1.7B</div>
              <h4 className="font-bold text-white mb-2">Personas No Bancarizadas</h4>
              <p className="text-gray-400 text-sm">Pueden acceder a servicios financieros</p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">90%</div>
              <h4 className="font-bold text-white mb-2">Reducción de Costos</h4>
              <p className="text-gray-400 text-sm">En remesas y transferencias internacionales</p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">24/7</div>
              <h4 className="font-bold text-white mb-2">Disponibilidad</h4>
              <p className="text-gray-400 text-sm">Sin horarios bancarios ni días festivos</p>
            </div>

          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-white mb-3">⚡ La Verdadera Revolución</h3>
            <p className="text-gray-300">
              Blockchain no es revolucionaria por la tecnología en sí, sino porque <strong className="text-yellow-400">devuelve el control a las personas</strong>. Por primera vez en la historia digital, puedes ser dueño absoluto de tus activos sin necesidad de intermediarios.
            </p>
          </div>

        </section>

        <section className="my-12 bg-gray-800/50 border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">📝 Resumen de la Lección</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span>Blockchain es revolucionaria por su <strong className="text-white">descentralización, transparencia e inmutabilidad</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span>Resuelve problemas críticos del <strong className="text-white">sistema financiero tradicional</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span>Permite casos de uso que <strong className="text-white">antes eran imposibles</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span>Representa un <strong className="text-white">cambio de paradigma</strong> en cómo organizamos la sociedad</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span>Devuelve el <strong className="text-white">control a las personas</strong></span></li>
          </ul>
        </section>

        <section className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-800">
          <Link href="/cursos/fundamentos-blockchain/leccion/1-2" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors">
            ← Lección Anterior
          </Link>
          <Link href="/cursos/fundamentos-blockchain/leccion/2-1" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
            Siguiente Módulo →
          </Link>
        </section>

      </article>
    </main>
  )
}
