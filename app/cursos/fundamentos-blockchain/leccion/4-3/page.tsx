import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Casos de Uso de Smart Contracts - Fundamentos de Blockchain | Nodo360',
  description: 'Descubre aplicaciones reales de smart contracts: DeFi, NFTs, DAOs, tokens ERC-20/721/1155 y los protocolos más importantes del ecosistema.',
  keywords: 'defi, nfts, daos, erc20, erc721, uniswap, aave, opensea, tokens, ethereum',
  openGraph: {
    title: 'Casos de Uso de Smart Contracts - Fundamentos de Blockchain',
    description: 'De DeFi a NFTs: las aplicaciones que están transformando las finanzas y la propiedad digital',
    type: 'article',
  }
};

export default function Leccion43() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900">
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cursos/fundamentos-blockchain" className="text-orange-400 hover:text-orange-300 transition-colors">
              ← Volver al curso
            </Link>
            <div className="text-gray-400 text-sm">
              Módulo 4 • Lección 3 de 3
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        
        <div className="mb-8">
          <div className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
            Módulo 4: Smart Contracts
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Casos de Uso: DeFi, NFTs y DAOs
          </h1>
          <p className="text-xl text-gray-300">
            Aplicaciones reales que están transformando el mundo
          </p>
        </div>

        <section className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Smart Contracts en Acción</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Los smart contracts han dado vida a un ecosistema completo de aplicaciones descentralizadas. Desde finanzas sin bancos hasta arte digital único, estas aplicaciones están redefiniendo industrias enteras y creando nuevas formas de valor y organización.
            </p>
            <p>
              En esta lección exploraremos las tres categorías más importantes: <strong className="text-white">DeFi</strong> (finanzas descentralizadas), <strong className="text-white">NFTs</strong> (tokens no fungibles) y <strong className="text-white">DAOs</strong> (organizaciones autónomas descentralizadas).
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">DeFi: Finanzas Descentralizadas</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">¿Qué es DeFi?</h3>
              <p className="text-gray-300 mb-4">
                <strong className="text-white">DeFi</strong> es el ecosistema de servicios financieros construidos con smart contracts. Ofrece alternativas descentralizadas a bancos, brokers, exchanges y otros intermediarios financieros tradicionales.
              </p>
              
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
                <h4 className="text-white font-bold mb-2">Características clave de DeFi:</h4>
                <ul className="text-blue-300 text-sm space-y-1">
                  <li>→ Sin permisos: Cualquiera puede participar</li>
                  <li>→ Sin custodia: Tú controlas tus fondos</li>
                  <li>→ Transparente: Todo es público</li>
                  <li>→ Composable: Los protocolos se combinan como LEGO</li>
                  <li>→ 24/7: Funciona sin parar</li>
                </ul>
              </div>

              <h4 className="text-lg font-bold text-white mb-4">Principales categorías:</h4>

              <div className="bg-gray-900/50 rounded-lg p-6 mb-4">
                <h5 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔄</span>
                  <span>Exchanges Descentralizados (DEXs)</span>
                </h5>
                <p className="text-gray-300 text-sm mb-3">
                  Plataformas para intercambiar criptomonedas directamente entre usuarios, sin intermediario central.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• <strong className="text-white">Uniswap:</strong> Automated Market Maker líder</li>
                  <li>• <strong className="text-white">Curve:</strong> Especializado en stablecoins</li>
                  <li>• <strong className="text-white">PancakeSwap:</strong> Líder en BSC</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-6 mb-4">
                <h5 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">💰</span>
                  <span>Préstamos (Lending)</span>
                </h5>
                <p className="text-gray-300 text-sm mb-3">
                  Prestar tus criptomonedas para ganar intereses, o tomar prestado usando tus cripto como garantía.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• <strong className="text-white">Aave:</strong> Líder en préstamos DeFi</li>
                  <li>• <strong className="text-white">Compound:</strong> Pionero del lending</li>
                  <li>• <strong className="text-white">MakerDAO:</strong> Creador de DAI stablecoin</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-6">
                <h5 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🪙</span>
                  <span>Stablecoins</span>
                </h5>
                <p className="text-gray-300 text-sm mb-3">
                  Criptomonedas diseñadas para mantener un valor estable, típicamente 1:1 con el dólar.
                </p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
                    <p className="text-white text-sm font-medium mb-1">Respaldadas por fiat</p>
                    <p className="text-gray-400 text-xs">USDT, USDC</p>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded p-3">
                    <p className="text-white text-sm font-medium mb-1">Sobre-colateralizadas</p>
                    <p className="text-gray-400 text-xs">DAI</p>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded p-3">
                    <p className="text-white text-sm font-medium mb-1">Algorítmicas</p>
                    <p className="text-gray-400 text-xs">Mediante algoritmos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">NFTs: Tokens No Fungibles</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">¿Qué son los NFTs?</h3>
              <p className="text-gray-300 mb-4">
                Un <strong className="text-white">NFT (Non-Fungible Token)</strong> es un token único e indivisible que representa la propiedad de un activo digital o físico. A diferencia de las criptomonedas (donde 1 ETH = 1 ETH), cada NFT es único.
              </p>

              <h4 className="text-lg font-bold text-white mb-4">Casos de uso de NFTs:</h4>

              <div className="bg-gray-900/50 rounded-lg p-6 mb-4">
                <h5 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  <span>Arte Digital y Coleccionables</span>
                </h5>
                <p className="text-gray-300 text-sm mb-3">
                  El uso más conocido. Artistas pueden vender obras digitales con prueba de autenticidad.
                </p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>→ <strong className="text-white">Beeple:</strong> Vendió un NFT por $69 millones</li>
                  <li>→ <strong className="text-white">CryptoPunks:</strong> 10,000 personajes únicos</li>
                  <li>→ <strong className="text-white">Bored Ape Yacht Club:</strong> Colección con comunidad</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-6 mb-4">
                <h5 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎮</span>
                  <span>Gaming y Metaverso</span>
                </h5>
                <p className="text-gray-300 text-sm mb-3">
                  Items, personajes y terrenos virtuales como NFTs que puedes poseer y comerciar.
                </p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>→ <strong className="text-white">Axie Infinity:</strong> Criaturas NFT que batallan</li>
                  <li>→ <strong className="text-white">Decentraland:</strong> Parcelas de terreno virtual</li>
                  <li>→ Propiedad real de items in-game</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-6">
                <h5 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎫</span>
                  <span>Utilidad y Acceso</span>
                </h5>
                <p className="text-gray-300 text-sm mb-3">
                  NFTs como tickets, membresías o certificados.
                </p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>→ <strong className="text-white">Tickets de eventos:</strong> Previenen falsificaciones</li>
                  <li>→ <strong className="text-white">Membresías:</strong> Acceso a comunidades exclusivas</li>
                  <li>→ <strong className="text-white">Certificados:</strong> Diplomas y licencias</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h4 className="text-white font-bold mb-4">Estándares de NFTs:</h4>
              <div className="space-y-3">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <h5 className="text-white font-medium mb-2">ERC-721: NFTs Únicos</h5>
                  <p className="text-gray-400 text-sm">El estándar original. Cada token es único con su propio ID.</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <h5 className="text-white font-medium mb-2">ERC-1155: Multi-Token</h5>
                  <p className="text-gray-400 text-sm">Un contrato puede tener múltiples tipos de tokens. Usado en gaming.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">DAOs: Organizaciones Autónomas Descentralizadas</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">¿Qué es una DAO?</h3>
              <p className="text-gray-300 mb-4">
                Una <strong className="text-white">DAO (Decentralized Autonomous Organization)</strong> es una organización gobernada por smart contracts y sus miembros, sin jerarquía tradicional ni control centralizado. Las decisiones se toman mediante votación on-chain.
              </p>
              
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 mb-6">
                <p className="text-cyan-300 font-medium mb-2">
                  💡 Imagina una empresa donde:
                </p>
                <ul className="text-cyan-300 text-sm space-y-1">
                  <li>→ No hay CEO ni junta directiva</li>
                  <li>→ Los holders de tokens votan decisiones</li>
                  <li>→ Las reglas están en código inmutable</li>
                  <li>→ El tesoro es controlado por smart contracts</li>
                  <li>→ Todo es transparente y auditable</li>
                </ul>
              </div>

              <h4 className="text-lg font-bold text-white mb-4">Componentes de una DAO:</h4>

              <div className="space-y-4">
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h5 className="text-white font-bold mb-3">🪙 Token de Gobernanza</h5>
                  <p className="text-gray-300 text-sm">
                    Los holders pueden proponer y votar cambios. Generalmente: 1 token = 1 voto.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h5 className="text-white font-bold mb-3">🗳️ Votación On-chain</h5>
                  <p className="text-gray-300 text-sm">
                    Los votos se registran en blockchain. Cuando una propuesta pasa, el smart contract la ejecuta automáticamente.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h5 className="text-white font-bold mb-3">💰 Tesoro (Treasury)</h5>
                  <p className="text-gray-300 text-sm">
                    Fondos controlados por la DAO. Solo pueden gastarse si la comunidad vota a favor.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h4 className="text-lg font-bold text-white mb-4">Ejemplos de DAOs:</h4>

              <div className="space-y-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <h5 className="text-white font-bold mb-2">🦄 Uniswap DAO</h5>
                  <p className="text-gray-400 text-sm">
                    Gobernanza del exchange descentralizado más grande. Holders de UNI votan cambios.
                  </p>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h5 className="text-white font-bold mb-2">🔵 MakerDAO</h5>
                  <p className="text-gray-400 text-sm">
                    Controla el stablecoin DAI. Holders de MKR votan parámetros de riesgo.
                  </p>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <h5 className="text-white font-bold mb-2">📸 Nouns DAO</h5>
                  <p className="text-gray-400 text-sm">
                    Subasta un NFT diario. Los proceeds van al tesoro para proyectos creativos.
                  </p>
                </div>
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
                <span>DeFi ofrece servicios financieros sin bancos: exchanges, préstamos, stablecoins</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>NFTs permiten propiedad verificable de activos digitales únicos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>DAOs son organizaciones gobernadas por código y votación de la comunidad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Estas aplicaciones mueven miles de millones de dólares y tienen millones de usuarios</span>
              </li>
            </ul>
          </div>
        </section>

        <nav className="flex justify-between items-center pt-8 border-t border-gray-700">
          <Link 
            href="/cursos/fundamentos-blockchain/leccion/4-2"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span>←</span>
            <span>Anterior: Ethereum y la EVM</span>
          </Link>
          
          <Link 
            href="/cursos/fundamentos-blockchain"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-lg transition-colors font-bold"
          >
            <span>✓ Curso completado</span>
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
