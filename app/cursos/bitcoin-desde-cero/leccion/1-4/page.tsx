'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Leccion14() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "¿Cómo funciona Bitcoin?",
      subtitle: "La tecnología detrás de la revolución",
      content: "Vamos a entender de forma simple cómo funciona Bitcoin por dentro, sin tecnicismos complicados"
    },
    {
      title: "El Problema a Resolver",
      subtitle: "¿Por qué es difícil crear dinero digital?",
      content: "En el mundo físico, no puedes gastar dos veces el mismo billete. Pero en digital, ¿cómo evitas que alguien copie y pegue el mismo dinero digital infinitas veces? Este es el 'problema del doble gasto'."
    },
    {
      title: "La Solución: La Blockchain",
      subtitle: "Un libro de contabilidad público",
      content: "Bitcoin resuelve esto con una blockchain: un registro público donde TODOS pueden ver TODAS las transacciones. Es como un libro de contabilidad gigante que todos pueden revisar pero nadie puede modificar."
    },
    {
      title: "¿Qué es un Bloque?",
      subtitle: "Los ladrillos de la blockchain",
      content: "Imagina una caja que contiene:\n\n📦 Un conjunto de transacciones (pagos)\n🔗 Una referencia al bloque anterior\n🔢 Un número único (el 'hash')\n⏰ Fecha y hora\n\nCada 10 minutos se crea un nuevo bloque."
    },
    {
      title: "¿Por qué se llama 'Blockchain'?",
      subtitle: "Cadena de bloques",
      content: "Cada bloque nuevo se conecta al anterior formando una CADENA. Es imposible cambiar un bloque viejo sin romper toda la cadena. Por eso es tan seguro.\n\nBloque 1 → Bloque 2 → Bloque 3 → Bloque 4..."
    },
    {
      title: "¿Cómo se Crea un Bloque?",
      subtitle: "El proceso de minería",
      content: "Los 'mineros' son computadoras especializadas que:\n\n1️⃣ Recopilan transacciones pendientes\n2️⃣ Las agrupan en un bloque\n3️⃣ Resuelven un problema matemático muy difícil\n4️⃣ El primero en resolverlo gana el derecho a añadir el bloque\n5️⃣ Recibe una recompensa en Bitcoin"
    },
    {
      title: "Minería: La Lotería Matemática",
      subtitle: "Trabajo de prueba (Proof of Work)",
      content: "Los mineros compiten resolviendo un acertijo que solo se puede resolver por fuerza bruta (probando millones de combinaciones). Es como buscar una aguja en un pajar digital. El primero en encontrarla, gana."
    },
    {
      title: "¿Por qué Minar?",
      subtitle: "Los incentivos del sistema",
      content: "Recompensa actual por bloque: 3.125 BTC (≈$290,000 USD)\n\nEsta recompensa se reduce a la mitad cada 4 años ('halving'). Así Bitcoin controla su inflación y garantiza que solo existirán 21 millones de BTC."
    },
    {
      title: "¿Qué es una Transacción?",
      subtitle: "Moviendo Bitcoin en la red",
      content: "Una transacción Bitcoin es básicamente:\n\n👤 Dirección origen (de quién)\n👤 Dirección destino (para quién)\n💰 Cantidad (cuánto)\n💵 Fee (comisión para el minero)\n🔐 Firma digital (prueba de autorización)"
    },
    {
      title: "El Flujo de una Transacción",
      subtitle: "De tu wallet al bloque",
      content: "1️⃣ Creas la transacción en tu wallet\n2️⃣ La firmas con tu clave privada\n3️⃣ Se envía a la 'mempool' (sala de espera)\n4️⃣ Los mineros la toman de ahí\n5️⃣ La incluyen en el siguiente bloque\n6️⃣ ¡Confirmada! Ya está en la blockchain"
    },
    {
      title: "Confirmaciones",
      subtitle: "¿Cuándo es 'oficial' mi pago?",
      content: "Después de que tu transacción entra en un bloque, se le llama '1 confirmación'.\n\nCada nuevo bloque añade otra confirmación:\n\n✅ 1 confirmación = Visible\n✅ 3 confirmaciones = Bastante seguro\n✅ 6 confirmaciones = Muy seguro (estándar)\n\nCada confirmación = 10 minutos aprox."
    },
    {
      title: "Descentralización",
      subtitle: "No hay jefe, no hay CEO",
      content: "Bitcoin no tiene:\n❌ Servidor central\n❌ Empresa que lo controla\n❌ CEO o fundador activo\n❌ Punto único de falla\n\n✅ Miles de nodos en todo el mundo\n✅ Cualquiera puede participar\n✅ Nadie puede apagarlo"
    },
    {
      title: "Los Nodos",
      subtitle: "Los vigilantes de la red",
      content: "Un nodo es una computadora que:\n\n📥 Descarga la blockchain completa\n✅ Verifica todas las transacciones\n📢 Retransmite transacciones válidas\n🚫 Rechaza transacciones inválidas\n\nHay más de 15,000 nodos públicos hoy."
    },
    {
      title: "Consenso de la Red",
      subtitle: "¿Quién decide qué es válido?",
      content: "Bitcoin funciona por consenso:\n\n• La mayoría de los nodos deben estar de acuerdo\n• Siguen las mismas reglas (el código)\n• Si alguien hace trampa, los demás lo ignoran\n• No hay autoridad central que decida\n\nLa red se autorregula."
    },
    {
      title: "¿Se Puede Hackear Bitcoin?",
      subtitle: "La seguridad de la red",
      content: "Para hackear Bitcoin necesitarías:\n\n🔐 Controlar el 51% del poder de minería mundial\n💰 Invertir miles de millones de dólares\n⚡ Consumir energía de países enteros\n🧮 Vencer a miles de mineros simultáneamente\n\nEn 16 años, nunca ha sido hackeado."
    },
    {
      title: "Resumen: ¿Cómo Funciona?",
      subtitle: "Todo junto",
      content: "1️⃣ Transacciones se crean y firman\n2️⃣ Van a la mempool (esperan)\n3️⃣ Mineros las incluyen en bloques\n4️⃣ Compiten por resolver el acertijo\n5️⃣ El ganador añade el bloque a la cadena\n6️⃣ Todos los nodos verifican que sea válido\n7️⃣ El bloque se confirma\n8️⃣ Repite cada ~10 minutos, 24/7"
    }
  ]

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm border-b border-blue-500/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cursos/bitcoin-desde-cero" className="text-blue-400 hover:text-blue-300 transition-colors">
              ← Volver al curso
            </Link>
            <div className="text-white font-semibold">
              Lección 1.4 de 22
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-blue-300 mb-2">
              <span>Progreso de la lección</span>
              <span>{currentSlide + 1} / {slides.length}</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Slide Content */}
          <div className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8 md:p-12 min-h-[500px] flex flex-col justify-center">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold mb-4">
                Módulo 1: Fundamentos
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-300 font-medium">
                {slides[currentSlide].subtitle}
              </h2>
            </div>

            <div className="text-gray-200 text-lg md:text-xl leading-relaxed whitespace-pre-line">
              {slides[currentSlide].content}
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center gap-2 mt-8 flex-wrap">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'w-8 bg-blue-500' 
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                currentSlide === 0
                  ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
              }`}
            >
              ← Anterior
            </button>

            {currentSlide === slides.length - 1 ? (
              <Link
                href="/cursos/bitcoin-desde-cero/leccion/1-5"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all"
              >
                Completar lección →
              </Link>
            ) : (
              <button
                onClick={nextSlide}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all"
              >
                Siguiente →
              </button>
            )}
          </div>

          {/* Additional Resources */}
          <div className="mt-12 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📚 Recursos Adicionales
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">🎨</span>
                <div>
                  <strong className="text-white">Diagrama Interactivo: Cómo funciona una transacción</strong>
                  <p className="text-sm text-gray-400">Visualiza el flujo completo de una transacción Bitcoin</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">⛏️</span>
                <div>
                  <strong className="text-white">Video: ¿Qué es la minería Bitcoin?</strong>
                  <p className="text-sm text-gray-400">Explicación visual del proceso de minería (10 min)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">🔗</span>
                <div>
                  <strong className="text-white">Explorador de Blockchain en Vivo</strong>
                  <p className="text-sm text-gray-400">Ve bloques y transacciones en tiempo real en mempool.space</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">📖</span>
                <div>
                  <strong className="text-white">Artículo: Consenso en Bitcoin</strong>
                  <p className="text-sm text-gray-400">Profundiza en cómo la red llega a consenso</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Interactive Demo */}
          <div className="mt-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-500 rounded-r-xl p-6">
            <div className="flex gap-3">
              <span className="text-3xl">🧪</span>
              <div>
                <h4 className="text-green-300 font-bold mb-2">Actividad Práctica</h4>
                <p className="text-gray-300 mb-3">
                  Visita <strong>mempool.space</strong> y observa:
                </p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Bloques creándose en tiempo real (cada ~10 min)</li>
                  <li>• Transacciones esperando en la mempool</li>
                  <li>• El tamaño de los fees (comisiones)</li>
                  <li>• La dificultad de minería actual</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-blue-500/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-400 text-sm">
            <p>© 2025 Nodo360 - Educación Bitcoin y Web3</p>
            <p className="mt-2">Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
