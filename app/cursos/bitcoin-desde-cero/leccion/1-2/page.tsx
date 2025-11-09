import Link from 'next/link'
import Slides from '@/components/Slides'
import DownloadCard from '@/components/DownloadCard'
import LessonNavigation from '@/components/LessonNavigation'

// Slides de la lección
const slides = [
  {
    titulo: '¿Qué es Bitcoin?',
    contenido: (
      <div>
        <h1 className="text-5xl font-bold mb-6">¿Qué es Bitcoin?</h1>
        <p className="text-2xl text-gray-300 mb-8">
          Lección 1.2 • Módulo 1: Fundamentos
        </p>
        <div className="flex justify-center gap-6 text-lg">
          <span>⏱️ 12 minutos</span>
          <span>🎯 Principiante</span>
          <span>📄 3 PDFs</span>
        </div>
      </div>
    ),
    backgroundColor: '#1c1f3d'
  },
  {
    titulo: 'Definición simple',
    contenido: (
      <div>
        <h2 className="text-4xl font-bold mb-8 text-nodo-naranja">Bitcoin en una frase</h2>
        <div className="bg-black/30 rounded-xl p-8 max-w-3xl mx-auto">
          <p className="text-3xl font-bold text-nodo-verde mb-6">
            Bitcoin es dinero digital que funciona sin bancos
          </p>
          <p className="text-xl text-gray-300 mt-6">
            Puedes enviarlo a cualquier persona en el mundo, en minutos, sin que nadie pueda bloquearte.
          </p>
        </div>
        <div className="mt-10 text-xl max-w-2xl mx-auto">
          <p className="mb-4">✅ Es tuyo de verdad</p>
          <p className="mb-4">✅ Nadie puede quitártelo</p>
          <p>✅ Funciona 24/7/365</p>
        </div>
      </div>
    ),
    backgroundColor: '#2a2f52'
  },
  {
    titulo: 'Bitcoin es tres cosas',
    contenido: (
      <div>
        <h2 className="text-4xl font-bold mb-8 text-nodo-naranja">Bitcoin es 3 cosas a la vez</h2>
        <div className="space-y-6 text-left max-w-3xl mx-auto text-xl">
          <div className="bg-black/30 rounded-xl p-6">
            <p className="text-2xl font-bold text-nodo-verde mb-3">1. Una RED 🌐</p>
            <p>Miles de computadoras conectadas en todo el mundo verificando transacciones</p>
          </div>
          <div className="bg-black/30 rounded-xl p-6">
            <p className="text-2xl font-bold text-nodo-cyan mb-3">2. Un PROTOCOLO 📋</p>
            <p>Las reglas matemáticas que todos siguen (como el inglés es un protocolo para comunicarse)</p>
          </div>
          <div className="bg-black/30 rounded-xl p-6">
            <p className="text-2xl font-bold text-nodo-naranja mb-3">3. Una MONEDA 💰</p>
            <p>Las unidades de valor que se transfieren (BTC o bitcoins)</p>
          </div>
        </div>
      </div>
    ),
    backgroundColor: '#1c1f3d'
  },
  {
    titulo: 'Características principales',
    contenido: (
      <div>
        <h2 className="text-4xl font-bold mb-8 text-nodo-naranja">Características únicas de Bitcoin</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg">
          <div className="bg-black/30 rounded-lg p-6">
            <p className="text-3xl mb-3">🌍</p>
            <p className="font-bold text-xl mb-2 text-nodo-verde">Descentralizado</p>
            <p>No hay un servidor central. Miles de nodos lo mantienen funcionando.</p>
          </div>
          <div className="bg-black/30 rounded-lg p-6">
            <p className="text-3xl mb-3">💎</p>
            <p className="font-bold text-xl mb-2 text-nodo-verde">Escaso</p>
            <p>Solo existirán 21 millones de BTC. Ni uno más.</p>
          </div>
          <div className="bg-black/30 rounded-lg p-6">
            <p className="text-3xl mb-3">🔓</p>
            <p className="font-bold text-xl mb-2 text-nodo-verde">Transparente</p>
            <p>Todas las transacciones son públicas y verificables.</p>
          </div>
          <div className="bg-black/30 rounded-lg p-6">
            <p className="text-3xl mb-3">🔐</p>
            <p className="font-bold text-xl mb-2 text-nodo-verde">Seguro</p>
            <p>Protegido por criptografía de nivel militar.</p>
          </div>
        </div>
      </div>
    ),
    backgroundColor: '#2a2f52'
  },
  {
    titulo: 'Diferencias con dinero tradicional',
    contenido: (
      <div>
        <h2 className="text-4xl font-bold mb-8 text-nodo-naranja">Bitcoin vs Dinero Tradicional</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-lg">
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
            <p className="text-2xl font-bold mb-4 text-red-400">💵 Dinero Tradicional</p>
            <div className="space-y-3 text-left">
              <p>❌ Lo controlan bancos centrales</p>
              <p>❌ Pueden imprimir infinito</p>
              <p>❌ Necesitas intermediarios</p>
              <p>❌ Horarios limitados</p>
              <p>❌ Pueden congelar tu cuenta</p>
              <p>❌ Comisiones altas</p>
            </div>
          </div>
          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
            <p className="text-2xl font-bold mb-4 text-nodo-verde">₿ Bitcoin</p>
            <div className="space-y-3 text-left">
              <p>✅ Nadie lo controla</p>
              <p>✅ Máximo 21 millones</p>
              <p>✅ Tú eres tu propio banco</p>
              <p>✅ 24/7/365</p>
              <p>✅ Nadie puede bloquearte</p>
              <p>✅ Comisiones bajas</p>
            </div>
          </div>
        </div>
      </div>
    ),
    backgroundColor: '#1c1f3d'
  },
  {
    titulo: 'Quién lo controla',
    contenido: (
      <div>
        <h2 className="text-4xl font-bold mb-8 text-nodo-naranja">¿Quién controla Bitcoin?</h2>
        <div className="text-2xl space-y-8 max-w-2xl mx-auto">
          <div className="bg-black/30 rounded-xl p-8">
            <p className="text-4xl font-bold text-nodo-verde mb-6">Nadie y todos a la vez</p>
            <div className="text-lg space-y-4 text-left">
              <p>🚫 <strong>No hay CEO</strong> ni empresa dueña</p>
              <p>🚫 <strong>No hay banco central</strong> que lo emita</p>
              <p>🚫 <strong>No hay gobierno</strong> que lo controle</p>
              <p className="text-nodo-cyan pt-4">✅ El control está <strong>distribuido</strong> entre miles de participantes</p>
            </div>
          </div>
          <p className="text-xl text-gray-300">
            Las reglas las sigue todo el mundo. Si alguien intenta hacer trampa, la red lo rechaza automáticamente.
          </p>
        </div>
      </div>
    ),
    backgroundColor: '#2a2f52'
  },
  {
    titulo: 'Los 21 millones de BTC',
    contenido: (
      <div>
        <h2 className="text-4xl font-bold mb-8 text-nodo-naranja">Escasez programada: 21 millones</h2>
        <div className="bg-black/30 rounded-xl p-8 max-w-3xl mx-auto">
          <p className="text-5xl font-bold text-nodo-verde mb-8">21,000,000 BTC</p>
          <p className="text-2xl mb-8">Esta es la cantidad máxima que existirá JAMÁS</p>
          <div className="space-y-4 text-xl text-left">
            <p>📊 <strong>Ya minados:</strong> ~19.6 millones (93%)</p>
            <p>⏳ <strong>Por minar:</strong> ~1.4 millones (7%)</p>
            <p>📅 <strong>Último bitcoin:</strong> Año 2140</p>
            <p className="text-nodo-cyan pt-4">💡 Cada 4 años se reduce a la mitad la emisión (Halving)</p>
          </div>
        </div>
        <p className="text-xl text-gray-300 mt-8">
          A diferencia del euro o dólar, <strong>nadie puede imprimir más bitcoins</strong>
        </p>
      </div>
    ),
    backgroundColor: '#1c1f3d'
  },
  {
    titulo: 'Divisibilidad',
    contenido: (
      <div>
        <h2 className="text-4xl font-bold mb-8 text-nodo-naranja">Bitcoin es divisible hasta 8 decimales</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="bg-black/30 rounded-xl p-8 text-left">
            <p className="text-3xl font-bold text-nodo-verde mb-6">1 Bitcoin = 100,000,000 satoshis</p>
            <div className="space-y-4 text-xl">
              <p>💰 <strong>1 BTC</strong> = 1.00000000 bitcoins</p>
              <p>💵 <strong>0.01 BTC</strong> = 1 céntimo de bitcoin</p>
              <p>🪙 <strong>0.00000001 BTC</strong> = 1 satoshi (la unidad más pequeña)</p>
            </div>
          </div>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
            <p className="text-xl mb-3">💡 <strong>Ejemplo práctico:</strong></p>
            <p className="text-lg text-gray-300">
              Si 1 BTC vale $50,000, entonces 1 satoshi vale $0.0005 (medio céntimo).
              Puedes enviar transacciones de cantidades muy pequeñas.
            </p>
          </div>
        </div>
      </div>
    ),
    backgroundColor: '#2a2f52'
  },
  {
    titulo: 'Blockchain básico',
    contenido: (
      <div>
        <h2 className="text-4xl font-bold mb-8 text-nodo-naranja">¿Qué es la Blockchain?</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-xl">
          <p className="text-2xl text-nodo-verde font-bold">
            Es un libro contable gigante que todos pueden ver
          </p>
          <div className="bg-black/30 rounded-xl p-8 text-left space-y-4">
            <p>📖 <strong>Libro contable:</strong> Registra todas las transacciones</p>
            <p>🔗 <strong>Cadena de bloques:</strong> Cada bloque contiene ~2,000 transacciones</p>
            <p>⏱️ <strong>Bloques cada 10 min:</strong> Nuevas transacciones confirmadas</p>
            <p>🔐 <strong>Inmutable:</strong> Una vez escrito, no se puede borrar</p>
            <p>🌍 <strong>Distribuido:</strong> Miles de copias idénticas en todo el mundo</p>
          </div>
          <p className="text-lg text-gray-300">
            Imagina un Excel gigante donde cada fila es una transacción, 
            y este Excel está copiado en 50,000 computadoras sincronizadas.
          </p>
        </div>
      </div>
    ),
    backgroundColor: '#1c1f3d'
  },
  {
    titulo: 'Minería simplificada',
    contenido: (
      <div>
        <h2 className="text-4xl font-bold mb-8 text-nodo-naranja">¿Qué es la minería?</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-xl">
          <p className="text-2xl text-nodo-verde font-bold mb-6">
            Los mineros son los contables de Bitcoin
          </p>
          <div className="space-y-4 text-left">
            <div className="bg-black/30 rounded-lg p-6">
              <p className="font-bold mb-2">1️⃣ Verifican transacciones</p>
              <p className="text-lg text-gray-300">Comprueban que no haya fraude ni doble gasto</p>
            </div>
            <div className="bg-black/30 rounded-lg p-6">
              <p className="font-bold mb-2">2️⃣ Crean bloques nuevos</p>
              <p className="text-lg text-gray-300">Agrupan transacciones cada 10 minutos</p>
            </div>
            <div className="bg-black/30 rounded-lg p-6">
              <p className="font-bold mb-2">3️⃣ Reciben recompensas</p>
              <p className="text-lg text-gray-300">Bitcoins nuevos + comisiones por su trabajo</p>
            </div>
          </div>
          <p className="text-nodo-cyan font-bold mt-6">
            💻 Usan computadoras potentes resolviendo problemas matemáticos
          </p>
        </div>
      </div>
    ),
    backgroundColor: '#2a2f52'
  },
  {
    titulo: 'Resumen',
    contenido: (
      <div>
        <h2 className="text-4xl font-bold mb-8 text-nodo-verde">¡Excelente! Ya sabes qué es Bitcoin</h2>
        <div className="text-xl space-y-6 max-w-3xl mx-auto text-left">
          <div className="bg-black/30 rounded-xl p-8 space-y-3">
            <p>✓ Bitcoin es red + protocolo + moneda</p>
            <p>✓ Descentralizado, escaso y transparente</p>
            <p>✓ Nadie lo controla, todos lo verifican</p>
            <p>✓ Máximo 21 millones de BTC</p>
            <p>✓ Divisible en 100 millones de satoshis</p>
            <p>✓ Blockchain = libro contable distribuido</p>
            <p>✓ Mineros verifican y crean nuevos bloques</p>
          </div>
          <div className="bg-gradient-to-r from-nodo-azul to-gray-800 rounded-xl p-6 text-center">
            <p className="text-nodo-naranja font-bold text-2xl mb-3">Siguiente lección:</p>
            <p className="text-3xl">Historia de Bitcoin</p>
            <p className="text-gray-300 text-base mt-2">Quién lo creó y por qué</p>
          </div>
        </div>
      </div>
    ),
    backgroundColor: '#1c1f3d'
  }
]

export default function Leccion12Page() {
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
            ¿Qué es Bitcoin?
          </h1>
          <div className="flex flex-wrap gap-6 text-sm">
            <span className="flex items-center gap-2">
              <span className="text-nodo-naranja">⏱️</span> 12 minutos
            </span>
            <span className="flex items-center gap-2">
              <span className="text-nodo-verde">📚</span> Lección 1.2
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
                <span>Qué es Bitcoin: red, protocolo y moneda en uno</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nodo-verde text-2xl">✓</span>
                <span>Sus características únicas: descentralizado, escaso, transparente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nodo-verde text-2xl">✓</span>
                <span>Diferencias fundamentales con el dinero tradicional</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nodo-verde text-2xl">✓</span>
                <span>Por qué solo existirán 21 millones de BTC</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-nodo-verde text-2xl">✓</span>
                <span>Cómo funciona la blockchain y la minería básicamente</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Artículo completo */}
        <article className="max-w-4xl mx-auto prose prose-lg mb-16">
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            
            <h2 className="text-3xl font-bold text-nodo-azul mb-6">Entendiendo Bitcoin desde cero</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              En la lección anterior vimos <strong>por qué</strong> necesitamos Bitcoin. Ahora vamos a responder 
              la pregunta fundamental: <strong>¿qué es exactamente Bitcoin?</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              La respuesta corta: Bitcoin es dinero digital que funciona sin bancos. Pero esta definición, 
              aunque correcta, se queda muy corta. Bitcoin es mucho más que eso.
            </p>

            <h3 className="text-2xl font-bold text-nodo-azul mt-8 mb-4">Bitcoin es tres cosas simultáneamente</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Una de las cosas que más confunde a la gente es que "Bitcoin" se refiere a tres conceptos diferentes 
              que funcionan juntos:
            </p>

            <div className="bg-blue-50 border-l-4 border-nodo-cyan p-6 my-6 rounded-r-lg">
              <p className="text-gray-800 font-bold mb-3">1. Bitcoin es una RED</p>
              <p className="text-gray-700 mb-4">
                Miles de computadoras (llamadas nodos) conectadas entre sí en todo el mundo, verificando 
                transacciones 24/7. No hay un servidor central. La red es peer-to-peer (persona a persona).
              </p>

              <p className="text-gray-800 font-bold mb-3 mt-4">2. Bitcoin es un PROTOCOLO</p>
              <p className="text-gray-700 mb-4">
                Un conjunto de reglas matemáticas que todos los participantes de la red siguen. 
                Es como un idioma común: todos hablan "Bitcoin" y por eso se entienden. El protocolo 
                define cómo se crean los bitcoins, cómo se transfieren, cuántos existirán, etc.
              </p>

              <p className="text-gray-800 font-bold mb-3 mt-4">3. Bitcoin es una MONEDA</p>
              <p className="text-gray-700">
                Las unidades de valor que se transfieren en la red. Cuando dices "tengo 0.5 bitcoins", 
                te refieres a las monedas digitales (representadas como BTC o ₿).
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Estos tres elementos funcionan juntos: la red ejecuta el protocolo para transferir la moneda. 
              Separados no tienen sentido. Juntos, crean un sistema de dinero digital revolucionario.
            </p>

            <h3 className="text-2xl font-bold text-nodo-azul mt-8 mb-4">Características que hacen único a Bitcoin</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Bitcoin tiene propiedades que ningún otro dinero en la historia había tenido:
            </p>

            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>Descentralizado:</strong> No hay una empresa, gobierno o persona que lo controle. 
              El control está distribuido entre todos los participantes. Si un nodo falla, la red sigue funcionando. 
              Si un gobierno lo prohíbe en su país, sigue funcionando en el resto del mundo.
            </p>

            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>Escaso:</strong> Solo existirán 21 millones de bitcoins. Esta cifra está escrita en el código 
              y es matemáticamente imposible crear más. A diferencia del euro o el dólar, donde los bancos centrales 
              pueden imprimir todo lo que quieran, Bitcoin tiene escasez programada.
            </p>

            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>Transparente:</strong> Todas las transacciones son públicas y cualquiera puede verificarlas. 
              La blockchain (cadena de bloques) es un libro contable gigante que todos pueden consultar. 
              Esto elimina la posibilidad de fraude.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Seguro:</strong> Bitcoin usa criptografía de nivel militar. Para hackear Bitcoin necesitarías 
              más poder computacional que todas las supercomputadoras del mundo juntas, multiplicado por millones. 
              Es virtualmente imposible.
            </p>

            <h3 className="text-2xl font-bold text-nodo-azul mt-8 mb-4">¿Quién controla Bitcoin?</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Esta es una de las preguntas más importantes. La respuesta: <strong>nadie y todos a la vez</strong>.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              No hay un CEO de Bitcoin. No hay una empresa Bitcoin Inc. No hay un banco central que lo emita. 
              No hay un gobierno que lo regule. El creador (o creadores) bajo el seudónimo de Satoshi Nakamoto 
              desapareció en 2011 y nadie sabe quién es realmente.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              El control está distribuido entre:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
              <li><strong>Los nodos:</strong> Verifican que todas las transacciones sigan las reglas</li>
              <li><strong>Los mineros:</strong> Añaden nuevas transacciones a la blockchain</li>
              <li><strong>Los usuarios:</strong> Deciden usar Bitcoin voluntariamente</li>
              <li><strong>Los desarrolladores:</strong> Proponen mejoras al código (pero no pueden forzar cambios)</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Si alguien intenta hacer trampa (enviar bitcoins que no tiene, gastar los mismos bitcoins dos veces, etc.), 
              el resto de la red lo detecta y rechaza la transacción fraudulenta. No necesitas confiar en nadie específico 
              porque las matemáticas protegen el sistema.
            </p>

            <h3 className="text-2xl font-bold text-nodo-azul mt-8 mb-4">Los 21 millones: escasez digital</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Solo existirán 21 millones de bitcoins. Jamás. Esta cantidad está escrita en el código de Bitcoin 
              y cambiarla requeriría que todos los participantes de la red estuvieran de acuerdo (cosa prácticamente imposible).
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6 rounded-r-lg">
              <p className="text-gray-800">
                <strong>Estado actual:</strong> Ya se han minado aproximadamente 19.6 millones de BTC (93%). 
                Quedan por minar unos 1.4 millones de BTC (7%). El último bitcoin se minará aproximadamente en el año 2140.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Esta escasez programada convierte a Bitcoin en el primer activo digital verdaderamente escaso de la historia. 
              El oro es escaso físicamente (hay una cantidad limitada en la Tierra), pero Bitcoin es escaso matemáticamente: 
              no importa cuánto poder computacional tengas, no puedes crear más de 21 millones.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Además, cada 4 años ocurre un evento llamado <strong>"halving"</strong> donde la cantidad de bitcoins nuevos 
              que se crean se reduce a la mitad. Esto hace que la emisión de Bitcoin sea cada vez más lenta y predecible.
            </p>

            <h3 className="text-2xl font-bold text-nodo-azul mt-8 mb-4">Divisibilidad: de bitcoins a satoshis</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Aunque solo existirán 21 millones de bitcoins, cada bitcoin es divisible en 100 millones de unidades más pequeñas 
              llamadas <strong>satoshis</strong> (en honor al creador, Satoshi Nakamoto).
            </p>

            <div className="bg-green-50 border-l-4 border-nodo-verde p-6 my-6 rounded-r-lg">
              <p className="text-gray-800 font-bold mb-2">1 Bitcoin = 100,000,000 satoshis</p>
              <p className="text-gray-700">
                Esto significa que en total existirán 2.1 cuatrillones de satoshis (2,100,000,000,000,000 unidades). 
                Suficiente para toda la economía mundial.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Puedes pensar en los satoshis como los céntimos del euro. Así como 1 euro = 100 céntimos, 
              1 bitcoin = 100 millones de satoshis. Esto permite transacciones de cantidades muy pequeñas.
            </p>

            <h3 className="text-2xl font-bold text-nodo-azul mt-8 mb-4">La Blockchain: el libro contable de Bitcoin</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Para que Bitcoin funcione sin bancos, necesita un sistema para registrar quién tiene qué. 
              Ese sistema es la <strong>blockchain</strong> (cadena de bloques).
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Imagina un libro contable gigante donde se apunta cada transacción que ha ocurrido desde el inicio 
              de Bitcoin (enero 2009). Pero en lugar de estar en un banco, este libro está copiado en miles de 
              computadoras en todo el mundo, todas sincronizadas y con la misma información.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Características de la blockchain:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
              <li>Cada 10 minutos se crea un nuevo "bloque" con ~2,000 transacciones</li>
              <li>Los bloques están enlazados criptográficamente formando una "cadena"</li>
              <li>Es imposible modificar transacciones pasadas sin que todos lo noten</li>
              <li>Cualquiera puede verificar cualquier transacción en cualquier momento</li>
              <li>Es pública pero seudónima (ves direcciones, no nombres reales)</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              La blockchain elimina la necesidad de confiar en un banco para llevar la contabilidad. 
              Las matemáticas y el consenso distribuido hacen que hacer trampa sea imposible.
            </p>

            <h3 className="text-2xl font-bold text-nodo-azul mt-8 mb-4">Minería: cómo se crean los bitcoins</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Los <strong>mineros</strong> son participantes especiales de la red que hacen dos trabajos cruciales:
            </p>

            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>1. Verifican transacciones:</strong> Comprueban que quien envía bitcoins realmente los tiene 
              y que no está intentando gastar los mismos bitcoins dos veces.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>2. Crean nuevos bloques:</strong> Agrupan transacciones válidas y las añaden a la blockchain. 
              Este proceso requiere resolver problemas matemáticos muy complejos.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Como recompensa por este trabajo, los mineros reciben:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
              <li>Bitcoins nuevos (actualmente 6.25 BTC por bloque, cada 10 minutos)</li>
              <li>Las comisiones que pagan los usuarios por sus transacciones</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              La minería es competitiva: miles de mineros compiten por resolver el problema matemático primero. 
              El que lo resuelve gana la recompensa. Esto hace que la red sea extremadamente segura: para atacarla 
              necesitarías más del 51% del poder computacional total de todos los mineros, algo prácticamente imposible.
            </p>

            <h2 className="text-3xl font-bold text-nodo-azul mt-10 mb-6">Conclusión</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Bitcoin es un sistema completo de dinero digital que funciona sin intermediarios. Es simultáneamente 
              una red de computadoras, un protocolo con reglas matemáticas, y una moneda digital escasa.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Sus características únicas (descentralización, escasez programada, transparencia y seguridad) lo hacen 
              fundamentalmente diferente del dinero tradicional. Nadie lo controla, pero todos pueden verificarlo.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Con solo 21 millones de unidades pero divisible en 100 millones de partes cada una, Bitcoin puede 
              funcionar como dinero a escala global. La blockchain mantiene el registro de todas las transacciones, 
              y los mineros aseguran la red mientras crean nuevos bitcoins siguiendo reglas matemáticas inmutables.
            </p>

            <div className="bg-nodo-verde/10 border-l-4 border-nodo-verde p-6 my-6 rounded-r-lg">
              <p className="text-gray-800 font-semibold">
                🎯 <strong>En la próxima lección:</strong> Ahora que entiendes QUÉ es Bitcoin, 
                veremos QUIÉN lo creó, CUÁNDO, y la fascinante historia detrás de su nacimiento.
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
              icon="📊"
              title="Infografía Bitcoin"
              description="Diagrama visual explicando qué es Bitcoin y cómo funciona básicamente."
              pdfUrl="/pdfs/infografia-bitcoin.pdf"
              filename="infografia-bitcoin-nodo360.pdf"
            />
            <DownloadCard
              icon="💎"
              title="Guía de Escasez"
              description="Comparativa: Bitcoin vs oro vs dinero fiat. Por qué 21 millones importa."
              pdfUrl="/pdfs/guia-escasez.pdf"
              filename="guia-escasez-nodo360.pdf"
            />
            <DownloadCard
              icon="⛏️"
              title="Minería Explicada"
              description="Cómo funciona la minería de Bitcoin de forma simple y visual."
              pdfUrl="/pdfs/mineria-bitcoin.pdf"
              filename="mineria-bitcoin-nodo360.pdf"
            />
          </div>
        </section>

        {/* Navegación */}
        <section className="mb-16">
          <LessonNavigation
            prevLesson={{
              id: '1-1',
              title: 'Por qué necesitamos Bitcoin'
            }}
            nextLesson={{
              id: '1-3',
              title: 'Historia de Bitcoin'
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
