import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ethereum y la EVM - Fundamentos de Blockchain | Nodo360',
  description: 'Descubre Ethereum como plataforma de smart contracts. Aprende cómo funciona la Máquina Virtual de Ethereum, el sistema de gas, Solidity y el ciclo de vida de los contratos.',
  keywords: 'ethereum, evm, máquina virtual ethereum, solidity, gas, smart contracts, web3, dapps',
  openGraph: {
    title: 'Ethereum y la EVM - Fundamentos de Blockchain',
    description: 'La plataforma que hizo posibles los smart contracts para todos',
    type: 'article',
  }
};

export default function Leccion42() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900">
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cursos/fundamentos-blockchain" className="text-orange-400 hover:text-orange-300 transition-colors">
              ← Volver al curso
            </Link>
            <div className="text-gray-400 text-sm">
              Módulo 4 • Lección 2 de 3
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
            Ethereum y la EVM
          </h1>
          <p className="text-xl text-gray-300">
            La plataforma que democratizó los smart contracts
          </p>
        </div>

        <section className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">¿Qué es Ethereum?</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong className="text-white">Ethereum</strong> es una blockchain programable creada por Vitalik Buterin en 2015. A diferencia de Bitcoin, que está diseñado principalmente para transferencias de valor, Ethereum fue construido desde cero como una <strong className="text-white">plataforma de computación descentralizada</strong> donde cualquiera puede desplegar y ejecutar smart contracts.
            </p>
            <p>
              La visión de Ethereum es ser un "ordenador mundial" - una máquina virtual global que nunca se apaga, no puede ser censurada, y ejecuta aplicaciones de forma descentralizada.
            </p>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mt-6">
              <p className="text-orange-300 font-medium">
                💡 Si Bitcoin es "dinero digital", Ethereum es "un ordenador mundial descentralizado" donde puedes ejecutar cualquier programa.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">La Máquina Virtual de Ethereum (EVM)</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">¿Qué es la EVM?</h3>
                <p className="text-gray-300 mb-4">
                  La <strong className="text-white">EVM (Ethereum Virtual Machine)</strong> es el motor de ejecución de Ethereum. Es un entorno de ejecución Turing-completo que ejecuta el bytecode de los smart contracts de forma determinista.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-300 text-sm">
                    <strong>Turing-completo</strong> significa que puede ejecutar cualquier programa computable (con suficientes recursos). Esto la hace extremadamente flexible y poderosa.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">Características de la EVM:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-xl">→</span>
                    <div>
                      <strong className="text-white">Determinista:</strong>
                      <p className="text-sm text-gray-400 mt-1">Dado el mismo estado inicial y transacción, siempre produce el mismo resultado</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-xl">→</span>
                    <div>
                      <strong className="text-white">Aislada:</strong>
                      <p className="text-sm text-gray-400 mt-1">Ejecuta en un sandbox sin acceso directo a la red, sistema de archivos o hardware</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-xl">→</span>
                    <div>
                      <strong className="text-white">Replicada:</strong>
                      <p className="text-sm text-gray-400 mt-1">Corre en miles de nodos simultáneamente, todos llegando al mismo resultado</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">El Sistema de Gas</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">¿Qué es el Gas?</h3>
              <p className="text-gray-300 mb-4">
                El <strong className="text-white">gas</strong> es la unidad que mide el costo computacional de ejecutar operaciones en la EVM. Cada operación (sumar números, escribir en storage, etc.) tiene un costo en gas.
              </p>
              
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-4">
                <p className="text-orange-300 font-medium mb-2">
                  💡 Analogía: El gas es como la gasolina de un auto:
                </p>
                <ul className="text-orange-300 text-sm space-y-1 ml-4">
                  <li>→ Operaciones simples = poco gas (ciudad)</li>
                  <li>→ Operaciones complejas = mucho gas (carretera)</li>
                  <li>→ El precio del gas varía según la demanda</li>
                </ul>
              </div>

              <h3 className="text-lg font-bold text-white mb-3">¿Por qué existe el gas?</h3>
              <div className="space-y-3 text-gray-300">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <strong className="text-white">1. Prevenir spam:</strong>
                  <p className="text-sm mt-1">Sin costo, cualquiera podría enviar infinitas transacciones y colapsar la red</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <strong className="text-white">2. Evitar loops infinitos:</strong>
                  <p className="text-sm mt-1">Un contrato con un bucle infinito consumiría todo el gas y se detendría</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <strong className="text-white">3. Compensar a validadores:</strong>
                  <p className="text-sm mt-1">El gas les paga por usar sus recursos computacionales</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Cómo funciona el precio del gas</h3>
              
              <div className="bg-gray-900/50 rounded-lg p-6 mb-4">
                <div className="font-mono text-sm space-y-2">
                  <div className="text-gray-400">Costo total = <span className="text-orange-400">Gas usado</span> × <span className="text-blue-400">Precio del gas</span></div>
                  <div className="text-gray-500">Ejemplo:</div>
                  <div className="text-white">21,000 gas × 50 gwei = 0.00105 ETH</div>
                  <div className="text-gray-500">(~$2-3 USD)</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2">Gas usado</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>→ Transferencia simple: 21,000 gas</li>
                    <li>→ Token transfer: 50,000-80,000 gas</li>
                    <li>→ Swap en Uniswap: 100,000-150,000 gas</li>
                    <li>→ Deploy contrato: 200,000-2M+ gas</li>
                  </ul>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2">Precio del gas</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>→ Medido en gwei</li>
                    <li>→ Varía según demanda de red</li>
                    <li>→ Red tranquila: 10-30 gwei</li>
                    <li>→ Red congestionada: 100-500+ gwei</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Solidity: El lenguaje de Ethereum</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <div className="space-y-6">
              <div>
                <p className="text-gray-300 mb-4">
                  <strong className="text-white">Solidity</strong> es el lenguaje de programación más popular para escribir smart contracts en Ethereum. Fue diseñado específicamente para la EVM y tiene sintaxis similar a JavaScript/C++.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">Ejemplo básico de contrato:</h3>
                <div className="bg-black rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm font-mono">
                    <code>
                      <span className="text-purple-400">// SPDX-License-Identifier: MIT</span>{'\n'}
                      <span className="text-blue-400">pragma solidity</span> <span className="text-green-400">^0.8.0</span>;{'\n\n'}
                      
                      <span className="text-blue-400">contract</span> <span className="text-yellow-400">SimpleStorage</span> {'{'}{'\n'}
                      {'  '}<span className="text-blue-400">uint256</span> <span className="text-blue-400">public</span> favoriteNumber;{'\n\n'}
                      
                      {'  '}<span className="text-blue-400">function</span> <span className="text-green-400">store</span>(<span className="text-blue-400">uint256</span> _favoriteNumber) <span className="text-blue-400">public</span> {'{'}{'\n'}
                      {'    '}favoriteNumber = _favoriteNumber;{'\n'}
                      {'  '}{'}'}{'\n'}
                      {'}'}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-400 font-bold mb-3">✅ Características</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>→ Tipado estático</li>
                    <li>→ Herencia de contratos</li>
                    <li>→ Librerías reutilizables</li>
                    <li>→ Eventos para logging</li>
                  </ul>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-400 font-bold mb-3">📚 Conceptos clave</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>→ <strong className="text-white">State variables:</strong> En blockchain</li>
                    <li>→ <strong className="text-white">view/pure:</strong> Solo lectura</li>
                    <li>→ <strong className="text-white">payable:</strong> Recibe ETH</li>
                    <li>→ <strong className="text-white">events:</strong> Para logs</li>
                  </ul>
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
                <span>Ethereum es una blockchain programable diseñada para smart contracts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>La EVM es el motor que ejecuta los contratos de forma determinista</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>El gas mide el costo computacional y previene spam</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">→</span>
                <span>Solidity es el lenguaje más popular para escribir contratos</span>
              </li>
            </ul>
          </div>
        </section>

        <nav className="flex justify-between items-center pt-8 border-t border-gray-700">
          <Link 
            href="/cursos/fundamentos-blockchain/leccion/4-1"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span>←</span>
            <span>Anterior: Intro Smart Contracts</span>
          </Link>
          
          <Link 
            href="/cursos/fundamentos-blockchain/leccion/4-3"
            className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
          >
            <span>Siguiente: Casos de Uso</span>
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
