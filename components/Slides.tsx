'use client'

import { useState } from 'react'

interface Slide {
  titulo: string
  contenido: React.ReactNode
  backgroundColor?: string
}

interface SlidesProps {
  slides: Slide[]
}

export default function Slides({ slides }: SlidesProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

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

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const slide = slides[currentSlide]

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header slides */}
      <div className="bg-nodo-azul text-white px-6 py-4 rounded-t-xl flex justify-between items-center">
        <h3 className="text-lg font-semibold">📊 Presentación interactiva</h3>
        <div className="text-nodo-verde text-sm">
          Navega con las flechas ← →
        </div>
      </div>

      {/* Slide actual */}
      <div 
        className="relative min-h-[600px] flex flex-col items-center justify-center p-12 rounded-b-xl"
        style={{ 
          backgroundColor: slide.backgroundColor || '#1c1f3d',
        }}
      >
        {/* Contenido del slide */}
        <div className="text-center text-white max-w-4xl">
          {slide.contenido}
        </div>

        {/* Controles de navegación */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-8">
          {/* Botón anterior */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-3 rounded-full transition ${
              currentSlide === 0
                ? 'bg-gray-600 cursor-not-allowed opacity-50'
                : 'bg-nodo-naranja hover:bg-orange-600'
            } text-white`}
            aria-label="Slide anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Indicadores de slides */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-nodo-naranja'
                    : 'w-2 bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Botón siguiente */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-3 rounded-full transition ${
              currentSlide === slides.length - 1
                ? 'bg-gray-600 cursor-not-allowed opacity-50'
                : 'bg-nodo-naranja hover:bg-orange-600'
            } text-white`}
            aria-label="Slide siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Contador */}
        <div className="absolute top-8 right-8 bg-black/30 px-4 py-2 rounded-full text-white text-sm">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Atajos de teclado info */}
      <div className="mt-4 text-center text-sm text-gray-600">
        💡 También puedes usar las teclas ← y → del teclado
      </div>
    </div>
  )
}
