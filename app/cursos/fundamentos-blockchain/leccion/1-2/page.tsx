import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lección 1.2: Historia y Evolución | Fundamentos de Blockchain - Nodo360',
  description: 'Descubre cómo surgió blockchain, desde los primeros conceptos hasta Bitcoin y la evolución de la tecnología.',
}

export default function Leccion12BlockchainPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/cursos" className="hover:text-blue-400 transition-colors">Cursos</Link>
            <span>/</span>
            <Link href="/cursos/fundamentos-blockchain" className="hover:text-blue-400 transition-colors">Fundamentos de Blockchain</Link>
            <span>/</span>
            <span className="text-white">Lección 1.2</span>
          </nav>
          
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">MÓDULO 1</span>
            <span className="text-gray-400 text-sm">12 minutos</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white">Historia y Evolución</h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <section className="mb-12">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-3">📚 En esta lección aprenderás:</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>Los orígenes conceptuales de blockchain</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>El nacimiento de Bitcoin y blockchain</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>Las tres generaciones de blockchain</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-400">✓</span><span>Evolución hasta el presente</span></li>
            </ul>
          </div>
        </section>

        <section className="prose prose-invert max-w-none">
          
          <h2 className="text-2xl font-bold text-white mb-4">🌱 Los Orígenes (Antes de Bitcoin)</h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Aunque blockchain se hizo famosa con Bitcoin en 2009, sus fundamentos vienen de décadas de investigación en criptografía y sistemas distribuidos.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-800/50 border-l-4 border-blue-500 p-6 rounded">
              <h3 className="text-xl font-bold text-white mb-2">1991 - Timestamping de Documentos</h3>
              <p className="text-gray-300 mb-2">
                <strong className="text-blue-400">Stuart Haber y Scott Stornetta</strong> proponen un sistema criptográficamente seguro para marcar documentos con fecha y hora, evitando que puedan ser alterados retroactivamente.
              </p>
              <p className="text-gray-400 text-sm">Este es el primer concepto de "cadena de bloques"</p>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-blue-500 p-6 rounded">
              <h3 className="text-xl font-bold text-white mb-2">1992 - Árboles de Merkle</h3>
              <p className="text-gray-300 mb-2">
                Los mismos autores incorporan <strong className="text-blue-400">árboles de Merkle</strong>, permitiendo que múltiples documentos se agrupen en un solo bloque.
              </p>
              <p className="text-gray-400 text-sm">Tecnología fundamental que usa Bitcoin</p>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-blue-500 p-6 rounded">
              <h3 className="text-xl font-bold text-white mb-2">1998 - B-money</h3>
              <p className="text-gray-300 mb-2">
                <strong className="text-blue-400">Wei Dai</strong> describe "b-money", un sistema de efectivo electrónico anónimo y distribuido.
              </p>
              <p className="text-gray-400 text-sm">Inspiración directa para Bitcoin</p>
            </div>

            <div className="bg-gray-800/50 border-l-4 border-blue-500 p-6 rounded">
              <h3 className="text-xl font-bold text-white mb-2">2004 - Reusable Proof of Work</h3>
              <p className="text-gray-300 mb-2">
                <strong className="text-blue-400">Hal Finney</strong> desarrolla un sistema de prueba de trabajo reutilizable.
              </p>
              <p className="text-gray-400 text-sm">Concepto clave del consenso de Bitcoin</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">🎯 2008-2009: El Nacimiento</h2>

          <div className="bg-gradient-to-r from-orange-900/30 to-yellow-900/30 border border-orange-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">31 de Octubre de 2008</h3>
            <p className="text-gray-300 mb-4">
              Una persona (o grupo) bajo el seudónimo <strong className="text-orange-400">Satoshi Nakamoto</strong> publica el whitepaper: <em>"Bitcoin: A Peer-to-Peer Electronic Cash System"</em>
            </p>
            <p className="text-gray-300">
              Por primera vez, todos los conceptos previos se unen en un sistema funcional que resuelve el <strong className="text-white">problema del doble gasto</strong> sin necesidad de una autoridad central.
            </p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">3 de Enero de 2009</h3>
            <p className="text-gray-300 mb-3">
              Satoshi Nakamoto mina el <strong className="text-blue-400">Bloque Génesis</strong> (Bloque 0) de Bitcoin.
            </p>
            <div className="bg-black/50 p-4 rounded font-mono text-sm text-gray-400 mt-3">
              "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Este mensaje, incluido en el bloque, hace referencia a la crisis financiera de 2008.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">📊 Las Tres Generaciones de Blockchain</h2>

          <div className="space-y-8 mb-8">
            
            <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 border-l-4 border-orange-500 p-6 rounded">
              <div className="flex items-start gap-4">
                <div className="text-4xl">1️⃣</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Primera Generación: Criptomonedas (2009-2013)</h3>
                  <p className="text-gray-300 mb-3">
                    <strong className="text-orange-400">Bitcoin y altcoins</strong> - Enfocada principalmente en transferencias de valor.
                  </p>
                  <div className="space-y-2 text-gray-300">
                    <p>• <strong>Bitcoin</strong> (2009) - El pionero</p>
                    <p>• <strong>Litecoin</strong> (2011) - "Plata digital"</p>
                    <p>• <strong>Ripple</strong> (2012) - Pagos internacionales</p>
                    <p>• Cientos de altcoins experimentales</p>
                  </div>
                  <div className="bg-orange-900/20 rounded p-3 mt-3">
                    <p className="text-sm text-gray-300"><strong>Característica clave:</strong> Blockchain como libro de contabilidad para dinero digital</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-800/20 border-l-4 border-blue-500 p-6 rounded">
              <div className="flex items-start gap-4">
                <div className="text-4xl">2️⃣</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Segunda Generación: Smart Contracts (2014-2017)</h3>
                  <p className="text-gray-300 mb-3">
                    <strong className="text-blue-400">Ethereum</strong> introduce contratos inteligentes y aplicaciones descentralizadas.
                  </p>
                  <div className="space-y-2 text-gray-300">
                    <p>• <strong>Ethereum</strong> (2015) - Computadora mundial</p>
                    <p>• <strong>ICOs</strong> - Nueva forma de financiación</p>
                    <p>• <strong>DApps</strong> - Aplicaciones descentralizadas</p>
                    <p>• <strong>DAOs</strong> - Organizaciones autónomas</p>
                    <p>• <strong>Tokens ERC-20</strong> - Estandarización</p>
                  </div>
                  <div className="bg-blue-900/20 rounded p-3 mt-3">
                    <p className="text-sm text-gray-300"><strong>Característica clave:</strong> Blockchain como plataforma programable</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900/20 to-emerald-800/20 border-l-4 border-green-500 p-6 rounded">
              <div className="flex items-start gap-4">
                <div className="text-4xl">3️⃣</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Tercera Generación: Escalabilidad y Gobernanza (2018-Presente)</h3>
                  <p className="text-gray-300 mb-3">
                    Soluciones para <strong className="text-green-400">escalabilidad, interoperabilidad y sostenibilidad</strong>.
                  </p>
                  <div className="space-y-2 text-gray-300">
                    <p>• <strong>Proof of Stake</strong> - Consenso eficiente</p>
                    <p>• <strong>Sharding</strong> - Particionamiento de datos</p>
                    <p>• <strong>Layer 2</strong> - Lightning, Rollups</p>
                    <p>• <strong>Cross-chain</strong> - Puentes entre blockchains</p>
                    <p>• <strong>DeFi</strong> - Finanzas descentralizadas</p>
                    <p>• <strong>NFTs</strong> - Propiedad digital única</p>
                  </div>
                  <div className="bg-green-900/20 rounded p-3 mt-3">
                    <p className="text-sm text-gray-300"><strong>Característica clave:</strong> Blockchain para adopción masiva y casos de uso reales</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-12">📈 Línea de Tiempo Clave</h2>

          <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
            <div className="space-y-4 text-gray-300">
              <div className="flex gap-4 items-start">
                <span className="text-blue-400 font-bold min-w-[80px]">2009</span>
                <span>Bitcoin - Primera blockchain funcional</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-400 font-bold min-w-[80px]">2011</span>
                <span>Primeras altcoins: Litecoin, Namecoin</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-400 font-bold min-w-[80px]">2013</span>
                <span>Vitalik Buterin propone Ethereum</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-400 font-bold min-w-[80px]">2015</span>
                <span>Lanzamiento de Ethereum</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-400 font-bold min-w-[80px]">2017</span>
                <span>Boom de ICOs y fiebre especulativa</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-400 font-bold min-w-[80px]">2020</span>
                <span>Explosión de DeFi (Finanzas Descentralizadas)</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-400 font-bold min-w-[80px]">2021</span>
                <span>NFTs mainstream, El Salvador adopta Bitcoin</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-400 font-bold min-w-[80px]">2022</span>
                <span>Ethereum migra a Proof of Stake (The Merge)</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-400 font-bold min-w-[80px]">2024-25</span>
                <span>ETFs de Bitcoin, adopción institucional masiva</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-white mb-3">🔮 El Futuro</h3>
            <p className="text-gray-300">
              Blockchain está evolucionando hacia sistemas más <strong className="text-blue-400">eficientes, sostenibles e interoperables</strong>. La cuarta generación probablemente se centrará en integración con IA, identidad digital descentralizada y aplicaciones empresariales a gran escala.
            </p>
          </div>

        </section>

        <section className="my-12 bg-gray-800/50 border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">📝 Resumen de la Lección</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span>Blockchain tiene <strong className="text-white">raíces en investigación</strong> de los años 90</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span><strong className="text-white">Bitcoin (2009)</strong> fue la primera implementación exitosa</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span><strong className="text-white">Primera generación:</strong> Criptomonedas</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span><strong className="text-white">Segunda generación:</strong> Smart Contracts (Ethereum)</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">•</span><span><strong className="text-white">Tercera generación:</strong> Escalabilidad y adopción masiva</span></li>
          </ul>
        </section>

        <section className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-800">
          <Link href="/cursos/fundamentos-blockchain/leccion/1-1" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors">
            ← Lección Anterior
          </Link>
          <Link href="/cursos/fundamentos-blockchain/leccion/1-3" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
            Siguiente Lección →
          </Link>
        </section>

      </article>
    </main>
  )
}
