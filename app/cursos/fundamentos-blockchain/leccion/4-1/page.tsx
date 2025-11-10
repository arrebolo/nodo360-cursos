import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Introducción a Smart Contracts - Fundamentos de Blockchain | Nodo360',
  description: 'Descubre qué son los smart contracts, cómo funcionan y por qué revolucionan los contratos digitales. Aprende sobre inmutabilidad, transparencia y casos de uso.',
  keywords: 'smart contracts, contratos inteligentes, ethereum, blockchain, solidity, contratos digitales, dapps',
  openGraph: {
    title: 'Introducción a Smart Contracts - Fundamentos de Blockchain',
    description: 'Los contratos que se ejecutan automáticamente sin intermediarios',
    type: 'article',
  }
};

export default function Leccion41() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cursos/fundamentos-blockchain" className="text-orange-400 hover:text-orange-300 transition-colors">
              ← Volver al curso
            </Link>
            <div className="text-gray-400 text-sm">
              Módulo 4 • Lección 1 de 3
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
            Introducción a Smart Contracts
          </h1>
          <p className="text-xl text-gray-300">
            Contratos que se ejecutan automáticamente sin intermediarios
          </p>
        </div>

        <section className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">¿Qué es un Smart Contract?</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Un <strong className="text-white">Smart Contract</strong> o "Contrato Inteligente" es un programa informático que se ejecuta automáticamente en una blockchain cuando se cumplen ciertas condiciones predefinidas. Es como un contrato tradicional, pero escrito en código y que se auto-ejecuta sin necesidad de intermediarios.
            </p>
            <p>
              La idea fue propuesta por Nick Szabo en 1994, mucho antes de que Bitcoin existiera. Él lo describió como "un protocolo de transacción computarizado que ejecuta los términos de un contrato". Sin embargo, fue con la llegada de Ethereum en 2015 que los smart contracts se volvieron prácticos y accesibles.
            </p>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mt-6">
              <p className="text-orange-300 font-medium">
                💡 Analogía: Un smart contract es como una máquina expendedora. Introduces dinero (input), seleccionas el producto (condición), y automáticamente recibes tu compra (output). No necesitas confiar en nadie - la máquina ejecuta el "contrato" automáticamente.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">¿Cómo funciona un Smart Contract?</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Escribir el código</h3>
                  <p className="text-gray-300 mb-3">
                    Un desarrollador escribe el contrato en un lenguaje de programación específico para blockchain, como Solidity (para Ethereum).
                  </p>
                  <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-purple-400">// Ejemplo simple en Solidity</div>
                    <div className="text-blue-400">contract</div> <span className="text-white">SimpleStorage</span> {'{'}
                    <div className="ml-4 text-gray-400">uint256 storedData;</div>
                    <div className="ml-4 text-blue-400">function</div> <span className="text-green-400">set</span>(<span className="text-white">uint256 x</span>) {'{'}
                    <div className="ml-8 text-white">storedData = x;</div>
                    <div className="ml-4">{'}'}</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Desplegar en la blockchain</h3>
                  <p className="text-gray-300 mb-3">
                    El contrato se compila y se despliega en la blockchain mediante una transacción. Una vez desplegado, recibe una dirección única.
                  </p>
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                    <p className="text-orange-300 text-sm">
                      <strong>Importante:</strong> Una vez desplegado, el código es inmutable. No se puede modificar ni borrar (excepto en diseños específicos con upgradeable patterns).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Interacción</h3>
                  <p className="text-gray-300 mb-3">
                    Los usuarios interactúan con el contrato enviando transacciones que llaman a sus funciones.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">→</span>
                      <span><strong className="text-white">Transacciones de escritura:</strong> Modifican el estado (cuestan gas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">→</span>
                      <span><strong className="text-white">Llamadas de lectura:</strong> Solo leen datos (gratis)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Ejecución automática</h3>
                  <p className="text-gray-300 mb-3">
                    Cuando se cumplen las condiciones programadas, el contrato se ejecuta automáticamente.
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
                <span>Los smart contracts son programas que se auto-ejecutan en una blockchain</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Son inmutables, transparentes, deterministas y no requieren intermediarios</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Ethereum popularizó los smart contracts a partir de 2015</span>
              </li>
            </ul>
          </div>
        </section>

        <nav className="flex justify-between items-center pt-8 border-t border-gray-700">
          <Link 
            href="/cursos/fundamentos-blockchain/leccion/3-3"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span>←</span>
            <span>Anterior: Otros Mecanismos</span>
          </Link>
          
          <Link 
            href="/cursos/fundamentos-blockchain/leccion/4-2"
            className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
          >
            <span>Siguiente: Ethereum y la EVM</span>
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
