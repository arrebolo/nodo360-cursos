import Link from 'next/link'
import Slides from '@/components/Slides'
import DownloadCard from '@/components/DownloadCard'
import LessonNavigation from '@/components/LessonNavigation'

// Slides de la lección
const slides = [
  {
    titulo: 'Por qué necesitamos Bitcoin',
    contenido: (
      <div>
        <h1 className="text-5xl font-bold mb-6">Por qué necesitamos Bitcoin</h1>
        <p className="text-2xl text-gray-300 mb-8">
          Lección 1.1 • Módulo 1: Fundamentos
        </p>
        <div className="flex justify-center gap-6 text-lg">
          <span>⏱️ 10 minutos</span>
          <span>🎯 Principiante</span>
          <span>📄 3 PDFs</span>
        </div>
      </div>
    ),
    backgroundColor: '#1c1f3d'
  },
  {
    titulo: 'El problema del dinero actual',
    contenido: (
      <div>
        <h2 className="text-4xl font-bold mb-8 text-nodo-naranja">El problema del dinero actual</h2>
        <div className="text-left max-w-2xl mx-auto space-y-6 text-xl">
          <p className="flex items-start gap-4">
            <span className="text-3xl">💸</span>
            <span><strong>Inflación:</strong> Tu dinero vale menos cada año</span>
          </p>
          <p className="flex items-start gap-4">
            <span className="text-3xl">🏦</span>
            <span><strong>Control bancario:</strong> No es realmente tuyo</span>
          </p>
          <p className="flex items-start gap-4">
            <span className="text-3xl">🚫</span>
            <span><strong>Censura:</strong> Pueden congelar tu cuenta</span>
          </p>
          <p className="flex items-start gap-4">
            <span className="text-3xl">🌍</span>
            <span><strong>Fronteras:</strong> Difícil enviar dinero internacionalmente</span>
          </p>
        </div>
      </div>
    ),
    backgroundColor: '#2a2f52'
  },
  {
    titulo: 'Inflación: El impuesto invisible',
    contenido: (
      <div>
        <h2 className="text-4xl font-bold mb-8 text-nodo-naranja">Inflación: El impuesto invisible</h2>
        <div className="bg-black/30 rounded-xl p-8 max-w-2xl mx-auto">
          <p className="text-2xl mb-6">Si tienes <span className="text-nodo-verde font-bold">10,000€</span> ahorrados:</p>
          <div className="space-y-4 text-xl text-left">
            <p>📅 <strong>Año 1:</strong> Valen 10,000€</p>
            <p>📅 <strong>Año 5:</strong> Valen ~8,500€ (poder adquisitivo real)</p>
            <p>📅 <strong>Año 10:</strong> Valen ~7,000€</p>
            <p>📅 <strong>Año 20:</strong> Valen ~5,000€</p>
          </div>
          <p className="text-nodo-naranja font-bold mt-8 text-xl">
            ⚠️ Pierdes la mitad de tu dinero en 20 años sin hacer nada
          </p>
        </div>
      </div>
    ),
    backgroundColor: '#1c1f3d'
  },
  {
    titulo: 'El dinero no es tuyo realmente',
    contenido: (
      <div>
        <h2 className="text-4xl font-bold mb-8 text-nodo-naranja">El dinero en el banco no es tuyo</h2>
        <div className="text-xl space-y-6 max-w-2xl mx-auto text-left">
          <p>Cuando tienes dinero en el banco:</p>
          <div className="bg-black/30 rounded-lg p-6 space-y-4">
            <p>❌ No tienes los billetes físicos</p>
            <p>❌ El banco lo presta a otros (solo guarda el 10%)</p>
            <p>❌ Necesitas su permiso para usarlo</p>
            <p>❌ Pueden congelar tu cuenta sin aviso</p>
            <p>❌ Horarios limitados (9:00-17:00)</p>
            <p>❌ Comisiones por todo</p>
          </div>
          <p className="text-nodo-verde font-bold text-center mt-6">
            ¿Y si el banco quiebra? 💥
          </p>
        </div>
      </div>
    ),
    backgroundColor: '#2a2f52'
  },
  {
    titulo: 'Censura financiera',
    contenido: (
      <div>
        <h2 className="text-4xl font-bold mb-8 text-nodo-naranja">Censura financiera: Casos reales</h2>
        <div className="space-y-6 text-xl max-w-3xl mx-auto">
          <div className="bg-black/30 rounded-lg p-6">
            <p className="font-bold mb-2">🇨🇦 Canadá 2022</p>
            <p>Gobierno congeló cuentas de manifestantes pacíficos sin juicio</p>
          </div>
          <div className="bg-black/30 rounded-lg p-6">
            <p className="font-bold mb-2">🇦🇷 Argentina</p>
            <p>Corralitos: Límite de $250/día para sacar TU dinero</p>
          </div>
          <div className="bg-black/30 rounded-lg p-6">
            <p className="font-bold mb-2">🌍 Transferencias internacionales</p>
            <p>Bloqueadas, demoradas o con comisiones del 10%+</p>
          </div>
          <p className="text-nodo-verde font-bold mt-8">
            Tu dinero, sus reglas 🤔
          </p>
        </div>
      </div>
    ),
    backgroundColor: '#1c1f3d'
  },
  {
    titulo: 'Quién controla el dinero',
    contenido: (
      <div>
        <h2 className="text-4xl font-bold mb-8 text-nodo-naranja">¿Quién controla el dinero?</h2>
        <div className="text-2xl space-y-8 max-w-2xl mx-auto">
          <div>
            <p className="text-nodo-verde font-bold mb-4">🏛️ Bancos Centrales</p>
            <p className="text-lg">Imprimen todo el dinero que quieren</p>
          </div>
          <div>
            <p className="text-nodo-verde font-bold mb-4">🏦 Bancos Comerciales</p>
            <p className="text-lg">Deciden quién puede tener cuenta</p>
          </div>
          <div>
            <p className="text-nodo-verde font-bold mb-4">💳 Procesadores de pago</p>
            <p className="text-lg">Pueden bloquear tus transacciones</p>
          </div>
          <p className="text-nodo-cyan font-bold mt-8">
            Tú no controlas nada 😕
          </p>
        </div>
      </div>
    ),
    backgroundColor: '#2a2f52'
  },
  {
    titulo: 'La solución',
    contenido: (
      <div>
        <h2 className="text-4xl font-bold mb-8 text-nodo-naranja">¿Existe una solución?</h2>
        <div className="text-2xl space-y-8 max-w-2xl mx-auto">
          <p className="text-3xl">Imagina un dinero que:</p>
          <div className="text-left space-y-4 bg-black/30 rounded-xl p-8">
            <p>✅ No puede inflarse (escasez fija)</p>
            <p>✅ Tú lo controlas 100%</p>
            <p>✅ Nadie puede congelarlo</p>
            <p>✅ Funciona globalmente</p>
            <p>✅ Disponible 24/7/365</p>
            <p>✅ Comisiones mínimas</p>
          </div>
          <p className="text-4xl font-bold text-nodo-verde mt-8">
            Ese dinero existe 💡
          </p>
        </div>
      </div>
    ),
    backgroundColor: '#1c1f3d'
  },
  {
    titulo: 'Bitcoin es la respuesta',
    contenido: (
      <div>
        <h2 className="text-5xl font-bold mb-8">
          <span className="text-nodo-naranja">Bitcoin</span> es la respuesta
        </h2>
        <div className="text-xl max-w-2xl mx-auto space-y-6">
          <p className="text-2xl">
            Un sistema de dinero digital que:
          </p>
          <div className="bg-black/30 rounded-xl p-8 text-left space-y-4">
            <p>🔐 <strong>Descentralizado:</strong> Sin bancos, sin gobiernos</p>
            <p>💎 <strong>Escaso:</strong> Solo 21 millones de BTC</p>
            <p>🌍 <strong>Global:</strong> Funciona en todo el mundo</p>
            <p>🔓 <strong>Sin censura:</strong> Nadie puede bloquearte</p>
            <p>⚡ <strong>Rápido:</strong> Transacciones en minutos</p>
          </div>
        </div>
      </div>
    ),
    backgroundColor: '#2a2f52'
  },
  {
    titulo: 'Lo que aprenderás',
    contenido: (
      <div>
        <h2 className="text-4xl font-bold mb-8 text-nodo-naranja">En este curso aprenderás</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-lg">
          <div className="bg-black/30 rounded-lg p-6">
            <p className="text-2xl mb-3">📚 Módulo 1</p>
            <p>Qué es Bitcoin y cómo funciona</p>
          </div>
          <div className="bg-black/30 rounded-lg p-6">
            <p className="text-2xl mb-3">💼 Módulo 2</p>
            <p>Cómo empezar a usarlo</p>
          </div>
          <div className="bg-black/30 rounded-lg p-6">
            <p className="text-2xl mb-3">🛒 Módulo 3</p>
            <p>Dónde y cómo comprarlo</p>
          </div>
          <div className="bg-black/30 rounded-lg p-6">
            <p className="text-2xl mb-3">🔒 Módulo 4</p>
            <p>Seguridad avanzada</p>
          </div>
        </div>
        <p className="text-nodo-verde font-bold mt-8 text-2xl">
          ¡Vamos a empezar! 🚀
        </p>
      </div>
    ),
    backgroundColor: '#1c1f3d'
  },
  {
    titulo: 'Siguiente paso',
    contenido: (
      <div>
        <h2 className="text-4xl font-bold mb-8 text-nodo-verde">¡Excelente! 🎉</h2>
        <div className="text-xl space-y-6 max-w-2xl mx-auto">
          <p className="text-2xl">Ahora ya sabes <strong>POR QUÉ</strong> necesitamos Bitcoin</p>
          <div className="bg-black/30 rounded-xl p-8">
            <p className="text-nodo-naranja font-bold text-2xl mb-4">Siguiente lección:</p>
            <p className="text-3xl">¿Qué es Bitcoin?</p>
          </div>
          <p className="text-lg text-gray-300">
            Descarga los PDFs de esta lección y continúa abajo 👇
          </p>
        </div>
      </div>
    ),
    backgroundColor: '#2a2f52'
  }
]

export default function Leccion11Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-nodo-azul border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              NODO<span className="text-nodo-naranja">360</span>
            </Link>
            <Link 
              href="/cursos/bitcoin-desde-cero" 
              className="text-white hover:text-nodo-verde transition text-sm"
            >
              ← Volver al curso
            </Link>
          </div>
        </div>
      </header>

      {/* Hero de la lección */}
      <div className="bg-gradient-to-r from-nodo-azul to-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1 bg-nodo-verde/20 rounded-full mb-3">
            <span className="text-nodo-verde font-semibold text-xs">MÓDULO 1: FUNDAMENTOS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Por qué necesitamos Bitcoin
          </h1>
          <div className="flex flex-wrap gap-6 text-sm">
            <span className="flex items-center gap-2">
              <span className="text-nodo-naranja">⏱️</span> 10 minutos
            </span>
            <span className="flex items-center gap-2">
              <span className="text-nodo-verde">📚</span> Lección 1.1
            </span>
            <span className="flex items-center gap-2">
              <span className="text-nodo-cyan">🎯</span> Principiante
            </span>
            <span className="flex items-center gap-2">
              <span className="text-yellow-400">📄</span> 3 PDFs incluidos
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Slides */}
        <section className="mb-16">
          <Slides slides={slides} />
        </section>

        {/* TL;DR */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-orange-50 border-l-4 border-nodo-naranja rounded-lg p-8">
            <h2 className="text-3xl font-bold text-nodo-azul mb-6 flex items-center gap-3">
              <span>⚡</span> En esta lección aprendiste
            </h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-nodo-verde text-2xl">✓</span>
                <span>Por qué el dinero tradicional tiene problemas graves</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nodo-verde text-2xl">✓</span>
                <span>Cómo la inflación destruye tus ahorros silenciosamente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nodo-verde text-2xl">✓</span>
                <span>Por qué no controlas realmente tu dinero en el banco</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nodo-verde text-2xl">✓</span>
                <span>Casos reales de censura financiera en el mundo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nodo-verde text-2xl">✓</span>
                <span>Por qué Bitcoin es la solución a estos problemas</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Artículo completo */}
        <article className="max-w-4xl mx-auto prose prose-lg mb-16">
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            
            <h2 className="text-3xl font-bold text-nodo-azul mb-6">El dinero está roto</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Antes de entender qué es Bitcoin, necesitas entender <strong>por qué</strong> existe Bitcoin. 
              Y la respuesta es simple: el sistema monetario actual tiene problemas fundamentales que afectan 
              directamente a tu bolsillo y tu libertad.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Estos no son problemas pequeños. Son problemas estructurales que llevan décadas empeorando, 
              y que te roban poder adquisitivo cada día que pasa. Veamos los tres problemas principales:
            </p>

            <h3 className="text-2xl font-bold text-nodo-azul mt-8 mb-4">1. Inflación: El impuesto invisible</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              La inflación es la pérdida de valor del dinero con el tiempo. Cada año, tu dinero compra menos cosas. 
              Los bancos centrales (como el BCE o la Reserva Federal) imprimen dinero constantemente, diluyendo 
              el valor de cada euro o dólar que tienes.
            </p>

            <div className="bg-blue-50 border-l-4 border-nodo-cyan p-6 my-6 rounded-r-lg">
              <p className="text-gray-800 mb-3">
                <strong>💡 Ejemplo real:</strong> Si guardaste 10,000€ debajo del colchón en el año 2000:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>📅 En 2000 podías comprar 10,000€ de cosas</li>
                <li>📅 En 2025 esos mismos 10,000€ solo compran lo que antes valía ~4,500€</li>
                <li>📉 Perdiste más del <strong>55% del poder adquisitivo</strong></li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Y esto no es algo que "pasó una vez". Es constante, es implacable, y está diseñado así. 
              Los bancos centrales tienen un objetivo explícito de inflación del 2% anual. Eso significa 
              que <em>quieren</em> que tu dinero valga menos cada año.
            </p>

            <h3 className="text-2xl font-bold text-nodo-azul mt-8 mb-4">2. Control bancario: No es tu dinero</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Cuando depositas dinero en el banco, legalmente ya no es tuyo. Se convierte en una <em>deuda</em> 
              que el banco tiene contigo. El banco puede:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
              <li>Prestarlo a otros (solo guarda el 10% en reserva)</li>
              <li>Limitar cuánto puedes sacar por día</li>
              <li>Cobrar comisiones por usar TU dinero</li>
              <li>Congelar tu cuenta sin explicación previa</li>
              <li>Decidir qué compras son "sospechosas"</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6 rounded-r-lg">
              <p className="text-gray-800">
                <strong>⚠️ Caso real:</strong> Durante la crisis de Chipre en 2013, el gobierno 
                confiscó hasta el 47.5% de los depósitos bancarios de los ciudadanos para "salvar el sistema". 
                La gente se despertó con la mitad de sus ahorros desaparecidos.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Los corralitos (límites de retiro) han ocurrido en Argentina, Grecia, Líbano, Venezuela, 
              y muchos otros países. No es ciencia ficción, es historia reciente.
            </p>

            <h3 className="text-2xl font-bold text-nodo-azul mt-8 mb-4">3. Censura financiera: Ellos deciden</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              El sistema financiero actual puede <em>censurar</em> tus transacciones. Pueden decidir 
              que no te gusta lo que estás comprando, a quién le estás enviando dinero, o simplemente 
              que eres "sospechoso" por algún motivo.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ejemplos reales de censura financiera:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
              <li><strong>WikiLeaks (2010):</strong> Visa, Mastercard y PayPal bloquearon todas las donaciones</li>
              <li><strong>Canadá (2022):</strong> Gobierno congeló cuentas de manifestantes pacíficos sin juicio</li>
              <li><strong>Remesas internacionales:</strong> Comisiones del 10%+ y demoras de días</li>
              <li><strong>OnlyFans (2021):</strong> Procesadores de pago amenazaron con bloquear la plataforma</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Y no hace falta que hagas nada ilegal. Basta con que el banco, el gobierno o el procesador 
              de pagos <em>decidan</em> que no les gusta lo que haces.
            </p>

            <h2 className="text-3xl font-bold text-nodo-azul mt-10 mb-6">¿Existe una alternativa?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Durante décadas, estos problemas parecían inevitables. "Así funcionan las cosas", nos decían. 
              Pero en 2009, una persona (o grupo) bajo el seudónimo de <strong>Satoshi Nakamoto</strong> 
              propuso una solución radical:
            </p>

            <div className="bg-gradient-to-r from-nodo-azul to-gray-800 text-white rounded-xl p-8 my-8">
              <p className="text-2xl font-bold mb-4 text-nodo-verde">Bitcoin: Dinero digital sin intermediarios</p>
              <p className="text-lg mb-4">Un sistema que:</p>
              <ul className="space-y-3 text-lg">
                <li>✅ <strong>No puede inflarse</strong> (máximo 21 millones de BTC)</li>
                <li>✅ <strong>Tú controlas</strong> tu dinero al 100%</li>
                <li>✅ <strong>Nadie puede censurarte</strong> o congelar tus fondos</li>
                <li>✅ <strong>Funciona 24/7/365</strong> en todo el mundo</li>
                <li>✅ <strong>Sin bancos</strong>, sin gobiernos, sin intermediarios</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Por primera vez en la historia, existe un dinero que:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
              <li>No está controlado por ningún gobierno ni empresa</li>
              <li>No puede ser manipulado por bancos centrales</li>
              <li>No requiere confiar en terceros</li>
              <li>Funciona con matemáticas, no con promesas</li>
            </ul>

            <h2 className="text-3xl font-bold text-nodo-azul mt-10 mb-6">Conclusión</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Bitcoin existe porque el dinero tradicional tiene problemas fundamentales que no se pueden arreglar 
              desde dentro del sistema. La inflación, el control bancario y la censura financiera no son bugs, 
              son <em>características</em> del sistema actual.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Bitcoin propone una alternativa radical: un dinero completamente digital, descentralizado, 
              resistente a la censura y con escasez programada. Es la primera vez que tenemos algo así.
            </p>

            <div className="bg-nodo-verde/10 border-l-4 border-nodo-verde p-6 my-6 rounded-r-lg">
              <p className="text-gray-800 font-semibold">
                🎯 <strong>En la próxima lección:</strong> Ahora que entiendes POR QUÉ necesitamos Bitcoin, 
                veremos exactamente QUÉ es Bitcoin y cómo funciona.
              </p>
            </div>

          </div>
        </article>

        {/* Recursos descargables */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-nodo-azul mb-4">
            📚 Recursos de esta lección
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Descarga estos materiales complementarios para reforzar tu aprendizaje
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <DownloadCard
              icon="📄"
              title="Guía Inflación"
              description="Cómo protegerte de la inflación con ejemplos y estrategias prácticas."
              pdfUrl="/pdfs/guia-inflacion.pdf"
              filename="guia-inflacion-nodo360.pdf"
            />
            <DownloadCard
              icon="📊"
              title="Historia de Crisis"
              description="Cronología de crisis bancarias y corralitos en el mundo desde 1900."
              pdfUrl="/pdfs/historia-crisis.pdf"
              filename="historia-crisis-nodo360.pdf"
            />
            <DownloadCard
              icon="✅"
              title="Checklist Dinero"
              description="Evalúa qué tan expuesto estás a los problemas del dinero tradicional."
              pdfUrl="/pdfs/checklist-dinero.pdf"
              filename="checklist-dinero-nodo360.pdf"
            />
          </div>
        </section>

        {/* Navegación */}
        <section className="mb-16">
          <LessonNavigation
            nextLesson={{
              id: '1-2',
              title: '¿Qué es Bitcoin?'
            }}
          />
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-600">
            <p className="text-2xl font-bold text-nodo-azul mb-4">
              NODO<span className="text-nodo-naranja">360</span>
            </p>
            <p className="mb-4">Educación Bitcoin de calidad en español</p>
            <p className="text-sm text-nodo-verde">© 2025 Nodo360. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
