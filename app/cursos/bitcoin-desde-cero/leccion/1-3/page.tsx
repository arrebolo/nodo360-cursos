'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Leccion13() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Historia de Bitcoin",
      subtitle: "Un viaje desde 2008 hasta hoy",
      content: "Descubre cómo nació y evolucionó la primera criptomoneda descentralizada del mundo"
    },
    {
      title: "Antes de Bitcoin",
      subtitle: "Los intentos previos",
      content: "Bitcoin no fue el primer intento de crear dinero digital. Antes existieron proyectos como DigiCash (1989), e-gold (1996) y b-money, pero todos fallaron por ser centralizados o tener problemas legales."
    },
    {
      title: "2008: El Whitepaper",
      subtitle: "Satoshi Nakamoto publica su visión",
      content: "El 31 de octubre de 2008, alguien bajo el pseudónimo 'Satoshi Nakamoto' publica el whitepaper 'Bitcoin: A Peer-to-Peer Electronic Cash System' en una lista de correo de criptografía. Era un documento de 9 páginas que cambiaría el mundo."
    },
    {
      title: "¿Quién es Satoshi Nakamoto?",
      subtitle: "El misterio más grande de Bitcoin",
      content: "Hasta hoy, nadie sabe quién es Satoshi Nakamoto. Podría ser una persona o un grupo. Lo único que sabemos es que desapareció en 2011 y nunca ha movido sus aproximadamente 1 millón de bitcoins."
    },
    {
      title: "2009: Nace Bitcoin",
      subtitle: "3 de enero de 2009",
      content: "Satoshi mina el 'bloque génesis' (bloque 0) e incrusta un mensaje: 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks'. Una crítica directa al sistema financiero tradicional."
    },
    {
      title: "Primera Transacción",
      subtitle: "12 de enero de 2009",
      content: "Satoshi envía 10 bitcoins a Hal Finney, un criptógrafo y uno de los primeros en creer en el proyecto. Esta fue la primera transacción Bitcoin persona a persona de la historia."
    },
    {
      title: "2010: La Pizza más Cara",
      subtitle: "22 de mayo de 2010",
      content: "Laszlo Hanyecz paga 10,000 BTC por dos pizzas. En ese momento valían $41. Hoy esos bitcoins valdrían más de $400 millones. Este día se celebra como 'Bitcoin Pizza Day'."
    },
    {
      title: "2011: Satoshi Desaparece",
      subtitle: "Abril de 2011",
      content: "Satoshi envía su último correo conocido diciendo 'Me he movido a otras cosas'. Desaparece completamente, dejando el proyecto en manos de la comunidad. Bitcoin continúa funcionando sin su creador."
    },
    {
      title: "2013: Primera Burbuja",
      subtitle: "De $13 a $1,100",
      content: "Bitcoin experimenta su primer gran rally, alcanzando $1,100 en noviembre de 2013, para luego caer a $200. Muchos lo declararon muerto, pero siguió funcionando perfectamente."
    },
    {
      title: "2017: La Gran Burbuja",
      subtitle: "Bitcoin alcanza $20,000",
      content: "Bitcoin captura la atención mundial al alcanzar casi $20,000 en diciembre de 2017. Los medios hablan constantemente de 'la fiebre del Bitcoin'. Luego viene otro mercado bajista."
    },
    {
      title: "2020-2021: Adopción Institucional",
      subtitle: "Las grandes empresas entran",
      content: "Tesla, MicroStrategy, Square y otros gigantes compran Bitcoin. El Salvador lo adopta como moneda legal en septiembre de 2021. Bitcoin alcanza $69,000 en noviembre de 2021."
    },
    {
      title: "2022-2024: Maduración",
      subtitle: "Crisis y consolidación",
      content: "Tras la caída de exchanges como FTX, Bitcoin demuestra su resiliencia. Sigue funcionando sin interrupciones. Se aprueban los primeros ETFs de Bitcoin al contado en Estados Unidos en enero de 2024."
    },
    {
      title: "2025 y el Futuro",
      subtitle: "Una historia en construcción",
      content: "Hoy Bitcoin tiene más de 15 años, ha sobrevivido a múltiples 'muertes' declaradas, crisis económicas, prohibiciones de países y ataques de todo tipo. Su red nunca ha dejado de funcionar ni un solo día."
    },
    {
      title: "Lecciones de la Historia",
      subtitle: "Lo que aprendimos",
      content: "1️⃣ Bitcoin funciona sin su creador\n2️⃣ Ha sobrevivido múltiples ciclos\n3️⃣ Cada 'muerte' lo hace más fuerte\n4️⃣ La adopción crece gradualmente\n5️⃣ Es un marathon, no un sprint"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm border-b border-purple-500/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cursos/bitcoin-desde-cero" className="text-purple-400 hover:text-purple-300 transition-colors">
              ← Volver al curso
            </Link>
            <div className="text-white font-semibold">
              Lección 1.3 de 22
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-purple-300 mb-2">
              <span>Progreso de la lección</span>
              <span>{currentSlide + 1} / {slides.length}</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Slide Content */}
          <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 md:p-12 min-h-[500px] flex flex-col justify-center">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 text-sm font-semibold mb-4">
                Módulo 1: Fundamentos
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-xl md:text-2xl text-purple-300 font-medium">
                {slides[currentSlide].subtitle}
              </h2>
            </div>

            <div className="text-gray-200 text-lg md:text-xl leading-relaxed whitespace-pre-line">
              {slides[currentSlide].content}
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'w-8 bg-purple-500' 
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
                  : 'bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-105'
              }`}
            >
              ← Anterior
            </button>

            {currentSlide === slides.length - 1 ? (
              <Link
                href="/cursos/bitcoin-desde-cero/leccion/1-4"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all"
              >
                Completar lección →
              </Link>
            ) : (
              <button
                onClick={nextSlide}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all"
              >
                Siguiente →
              </button>
            )}
          </div>

          {/* Additional Resources */}
          <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📚 Recursos Adicionales
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">📄</span>
                <div>
                  <strong className="text-white">Whitepaper Original de Bitcoin</strong>
                  <p className="text-sm text-gray-400">Lee el documento que inició todo (9 páginas, inglés)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">⏱️</span>
                <div>
                  <strong className="text-white">Línea Temporal Interactiva</strong>
                  <p className="text-sm text-gray-400">Explora los hitos más importantes desde 2008</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">🎥</span>
                <div>
                  <strong className="text-white">Documental: "Banking on Bitcoin"</strong>
                  <p className="text-sm text-gray-400">Historia visual de los primeros años de Bitcoin</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">📖</span>
                <div>
                  <strong className="text-white">Artículo: "El día que Satoshi desapareció"</strong>
                  <p className="text-sm text-gray-400">Análisis del misterio de Nakamoto</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Fun Fact */}
          <div className="mt-8 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-xl p-6">
            <div className="flex gap-3">
              <span className="text-3xl">💡</span>
              <div>
                <h4 className="text-yellow-300 font-bold mb-2">Dato Curioso</h4>
                <p className="text-gray-300">
                  El mensaje en el bloque génesis "Chancellor on brink of second bailout for banks" 
                  era el titular del periódico The Times ese día. Satoshi lo incluyó como prueba 
                  de que Bitcoin no fue pre-minado antes de esa fecha, y como crítica al sistema bancario.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-purple-500/30 mt-16">
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
