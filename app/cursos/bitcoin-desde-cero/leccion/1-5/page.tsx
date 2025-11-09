'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Leccion15() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Bitcoin vs Otras Criptomonedas",
      subtitle: "¿Qué hace a Bitcoin único?",
      content: "Existen miles de criptomonedas. ¿Por qué Bitcoin es diferente? Vamos a descubrir sus propiedades únicas."
    },
    {
      title: "El Origen Importa",
      subtitle: "El único con concepción inmaculada",
      content: "Bitcoin nació sin:\n❌ ICO (venta de tokens)\n❌ Pre-minado\n❌ Fundador conocido\n❌ Empresa detrás\n❌ Marketing inicial\n\n✅ Cualquiera podía minar desde el día 1\n✅ Distribución totalmente justa\n✅ Satoshi desapareció sin vender"
    },
    {
      title: "Escasez Absoluta",
      subtitle: "Solo 21 millones. Nunca más.",
      content: "Bitcoin tiene un suministro máximo FIJO de 21 millones de BTC. Esto está programado en el código y nadie puede cambiarlo.\n\n• Última moneda se minará ≈ año 2140\n• Ya se han minado +19.5 millones\n• Quedan < 1.5 millones por minar\n• Muchos BTC perdidos para siempre"
    },
    {
      title: "El Oro Digital",
      subtitle: "Comparación con oro físico",
      content: "🏆 ORO FÍSICO:\n• Suministro limitado (pero desconocido)\n• Se puede minar más oro\n• Difícil de transportar\n• Costoso de almacenar\n• Difícil de verificar pureza\n\n₿ BITCOIN:\n• Suministro conocido (21M)\n• No se puede crear más\n• Transportable instantáneamente\n• Almacenamiento casi gratis\n• Verificable matemáticamente"
    },
    {
      title: "Divisibilidad Extrema",
      subtitle: "Satoshis: la unidad mínima",
      content: "1 Bitcoin = 100,000,000 satoshis (sats)\n\nEjemplo:\n₿ 1 BTC = 100,000,000 sats\n₿ 0.001 BTC = 100,000 sats\n₿ 0.00000001 BTC = 1 sat\n\nPuedes poseer y enviar cantidades microscópicas. El dinero más divisible jamás creado."
    },
    {
      title: "Portabilidad Total",
      subtitle: "Lleva millones en tu cabeza",
      content: "Con Bitcoin puedes:\n\n🧠 Memorizar tu seed phrase y cruzar fronteras sin nada\n📱 Llevar millones en tu teléfono\n🌍 Enviar dinero a cualquier parte en minutos\n✈️ Sin límites, sin permisos, sin restricciones\n\nIntenta hacer eso con oro, efectivo o inmuebles."
    },
    {
      title: "Verificabilidad Instantánea",
      subtitle: "No confíes, verifica",
      content: "Con Bitcoin:\n\n✅ Cualquiera puede verificar su propia wallet\n✅ No necesitas confiar en bancos\n✅ No necesitas confiar en gobiernos\n✅ Verificas matemáticamente tu saldo\n✅ Puedes correr tu propio nodo\n\n\"Don't trust, verify\" es el lema."
    },
    {
      title: "Resistencia a la Censura",
      subtitle: "Nadie puede bloquearte",
      content: "Bitcoin es resistente a censura porque:\n\n🌐 Es una red global descentralizada\n🚫 Ningún gobierno puede apagarlo\n💪 No hay CEO que presionar\n🗝️ Tus keys, tus coins\n🔓 Transacciones sin permiso\n\nSi tienes las claves, nadie te puede quitar tus BTC."
    },
    {
      title: "Descentralización Real",
      subtitle: "Bitcoin vs Altcoins",
      content: "BITCOIN:\n• Miles de nodos independientes\n• Minería distribuida globalmente\n• Sin fundador activo\n• Sin empresa controladora\n\nALTCOINS:\n• Mayoría en manos de fundadores\n• Servidores centralizados\n• Equipos de desarrollo que controlan todo\n• Pueden cambiar las reglas"
    },
    {
      title: "Efecto de Red",
      subtitle: "El primero, el más grande, el más seguro",
      content: "Bitcoin tiene:\n\n📈 La mayor capitalización de mercado\n⛏️ El hashrate más alto (seguridad)\n👥 La comunidad más grande\n🏦 La mayor adopción institucional\n📰 El mayor reconocimiento de marca\n⏰ 16+ años de funcionamiento probado"
    },
    {
      title: "Inmutabilidad",
      subtitle: "Las reglas no cambian",
      content: "En Bitcoin:\n\n🔒 Las reglas son EXTREMADAMENTE difíciles de cambiar\n👥 Requiere consenso de toda la red\n⚖️ 21 millones es INMUTABLE\n📜 El código es ley\n\nEn otras cryptos:\n🔄 Fundadores cambian reglas cuando quieren\n🎭 \"Actualizaciones\" frecuentes\n💸 Pueden inflar el suministro"
    },
    {
      title: "Bitcoin vs Ethereum",
      subtitle: "Dinero vs Plataforma",
      content: "BITCOIN:\n• Diseñado para SER dinero\n• Simple, robusto, seguro\n• No cambia casi nunca\n• Proof of Work\n\nETHEREUM:\n• Plataforma para aplicaciones\n• Complejo, experimental\n• Cambios constantes\n• Proof of Stake\n\nSon cosas DIFERENTES con objetivos distintos."
    },
    {
      title: "¿Por qué no 'Compro Ethereum mejor'?",
      subtitle: "Los casos de uso son distintos",
      content: "Si quieres:\n\n💰 Preservar valor → Bitcoin\n🛡️ Resistencia a censura → Bitcoin\n📊 Escasez garantizada → Bitcoin\n🎮 DeFi, NFTs, Apps → Ethereum (u otras)\n🔧 Smart contracts complejos → Ethereum (u otras)\n\nNo es Bitcoin VS altcoins.\nEs Bitcoin Y altcoins. Cada una sirve propósitos diferentes."
    },
    {
      title: "'Bitcoin Maximalismo'",
      subtitle: "¿Qué es y por qué existe?",
      content: "Hay quienes creen que:\n\n• Solo Bitcoin importa\n• Todas las altcoins son scams\n• Solo Bitcoin sobrevivirá\n\nRealidad:\n\n✅ Bitcoin ES único en su propósito\n✅ Pero otras cryptos pueden coexistir\n✅ Tienen casos de uso diferentes\n✅ El mercado decidirá\n\nTú decides en qué creer."
    },
    {
      title: "Advertencia: Shitcoins",
      subtitle: "No todo lo que brilla es oro",
      content: "⚠️ CUIDADO CON:\n\n❌ Promesas de hacerte rico rápido\n❌ Tokens de memes sin utilidad\n❌ Proyectos con fundadores anónimos\n❌ \"El nuevo Bitcoin\" cada semana\n❌ Pumps and dumps coordinados\n❌ Rug pulls (creadores desaparecen)\n\nBitcoin tiene 16 años probándose.\nLas altcoins... investiga MUCHO antes."
    },
    {
      title: "¿Entonces solo Bitcoin?",
      subtitle: "Mi primera inversión en crypto",
      content: "RECOMENDACIÓN:\n\n1️⃣ EMPIEZA con Bitcoin\n2️⃣ ENTIENDE qué estás comprando\n3️⃣ NO busques \"el próximo Bitcoin\"\n4️⃣ SI quieres explorar altcoins, que sea DESPUÉS\n5️⃣ NUNCA inviertas más de lo que puedes perder\n\nBitcoin es el activo crypto más probado y seguro."
    },
    {
      title: "Resumen: ¿Por qué Bitcoin?",
      subtitle: "Las propiedades únicas",
      content: "✅ Origen justo (sin pre-minado)\n✅ Escasez absoluta (21M)\n✅ Descentralización real\n✅ Resistente a censura\n✅ Verificable matemáticamente\n✅ Portable (llevas millones en tu cabeza)\n✅ Divisible (hasta satoshis)\n✅ 16+ años funcionando sin parar\n✅ La red más segura\n✅ El efecto de red más grande"
    },
    {
      title: "¡Completaste el Módulo 1! 🎉",
      subtitle: "Fundamentos de Bitcoin",
      content: "Ya entiendes:\n\n✅ Por qué necesitamos Bitcoin\n✅ Qué es Bitcoin\n✅ Su historia completa\n✅ Cómo funciona la tecnología\n✅ Por qué es único vs otras cryptos\n\n¡Felicidades! Estás listo para el Módulo 2:\n'Primeros Pasos con Bitcoin'\n\n🎓 Ahora aprenderás a usar Bitcoin de verdad."
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm border-b border-orange-500/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cursos/bitcoin-desde-cero" className="text-orange-400 hover:text-orange-300 transition-colors">
              ← Volver al curso
            </Link>
            <div className="text-white font-semibold">
              Lección 1.5 de 22
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-orange-300 mb-2">
              <span>Progreso de la lección</span>
              <span>{currentSlide + 1} / {slides.length}</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Slide Content */}
          <div className="bg-black/40 backdrop-blur-md border border-orange-500/30 rounded-2xl p-8 md:p-12 min-h-[500px] flex flex-col justify-center">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-300 text-sm font-semibold mb-4">
                Módulo 1: Fundamentos
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-xl md:text-2xl text-orange-300 font-medium">
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
                      ? 'w-8 bg-orange-500' 
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
                  : 'bg-orange-600 text-white hover:bg-orange-700 transform hover:scale-105'
              }`}
            >
              ← Anterior
            </button>

            {currentSlide === slides.length - 1 ? (
              <Link
                href="/cursos/bitcoin-desde-cero"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold text-lg hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all shadow-lg"
              >
                🎉 ¡Completar Módulo 1! →
              </Link>
            ) : (
              <button
                onClick={nextSlide}
                className="px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-amber-700 transform hover:scale-105 transition-all"
              >
                Siguiente →
              </button>
            )}
          </div>

          {/* Additional Resources */}
          <div className="mt-12 bg-gradient-to-r from-orange-900/30 to-amber-900/30 border border-orange-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📚 Recursos Adicionales
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">📊</span>
                <div>
                  <strong className="text-white">Tabla Comparativa: Bitcoin vs Altcoins</strong>
                  <p className="text-sm text-gray-400">Comparación detallada de propiedades y casos de uso</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">🎥</span>
                <div>
                  <strong className="text-white">Video: ¿Por qué Bitcoin es diferente?</strong>
                  <p className="text-sm text-gray-400">Explicación visual de las propiedades únicas (15 min)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">📖</span>
                <div>
                  <strong className="text-white">Artículo: Bitcoin vs Oro - Análisis completo</strong>
                  <p className="text-sm text-gray-400">Comparativa histórica y técnica</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">⚡</span>
                <div>
                  <strong className="text-white">Lista: Top 10 shitcoins a evitar</strong>
                  <p className="text-sm text-gray-400">Aprende a identificar proyectos sospechosos</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Completion Message */}
          {currentSlide === slides.length - 1 && (
            <div className="mt-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                ¡Felicidades! Completaste el Módulo 1
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                Ya dominas los fundamentos de Bitcoin. Ahora estás listo para comenzar a usar Bitcoin de verdad en el Módulo 2.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/cursos/bitcoin-desde-cero"
                  className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg font-bold hover:from-orange-700 hover:to-amber-700 transform hover:scale-105 transition-all"
                >
                  Ver todos los módulos
                </Link>
                <button
                  className="px-8 py-4 bg-gray-700 text-white rounded-lg font-bold hover:bg-gray-600 transform hover:scale-105 transition-all"
                >
                  Descargar certificado
                </button>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-orange-500/30 mt-16">
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
