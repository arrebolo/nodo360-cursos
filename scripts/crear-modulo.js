// scripts/crear-modulo.js
// Script de automatización para crear módulos de curso
// Uso: node scripts/crear-modulo.js <curso> <modulo> <num-lecciones>

const fs = require('fs');
const path = require('path');

// Colores para la terminal
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[36m',
  red: '\x1b[31m',
  yellow: '\x1b[33m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Obtener argumentos
const [,, curso, modulo, numLecciones] = process.argv;

if (!curso || !modulo || !numLecciones) {
  log('❌ Uso: node scripts/crear-modulo.js <curso> <modulo> <num-lecciones>', 'red');
  log('📝 Ejemplo: node scripts/crear-modulo.js fundamentos-blockchain 4 3', 'blue');
  process.exit(1);
}

const basePath = path.join(process.cwd(), 'app', 'cursos', curso, 'leccion');

log(`🚀 Creando módulo ${modulo} del curso ${curso} con ${numLecciones} lecciones...`, 'blue');

// Verificar que existe el directorio base
if (!fs.existsSync(basePath)) {
  log(`❌ Error: No existe el directorio ${basePath}`, 'red');
  log('💡 Asegúrate de que el curso existe primero', 'yellow');
  process.exit(1);
}

// Crear directorios para cada lección
const leccionesCreadas = [];

for (let i = 1; i <= parseInt(numLecciones); i++) {
  const leccionPath = path.join(basePath, `${modulo}-${i}`);
  
  try {
    if (!fs.existsSync(leccionPath)) {
      fs.mkdirSync(leccionPath, { recursive: true });
      log(`📁 Directorio creado: ${modulo}-${i}`, 'green');
      leccionesCreadas.push(`${modulo}-${i}`);
    } else {
      log(`⚠️  Ya existe: ${modulo}-${i}`, 'yellow');
    }
  } catch (error) {
    log(`❌ Error creando ${leccionPath}: ${error.message}`, 'red');
    process.exit(1);
  }
}

log('\n✅ Estructura de módulo creada exitosamente!', 'green');
log('\n📂 Lecciones creadas:', 'blue');
leccionesCreadas.forEach(leccion => log(`   - ${leccion}`, 'blue'));

log('\n🎯 Siguiente paso:', 'yellow');
log('   Usa Claude Code con este prompt:', 'yellow');
log('\n---', 'blue');
log(`Crea el contenido completo del módulo ${modulo} del curso ${curso}.`, 'reset');
log(`Lecciones: ${leccionesCreadas.join(', ')}`, 'reset');
log('Usa la misma estructura y estilo que los módulos anteriores.', 'reset');
log('Optimiza para SEO y asegura que no haya errores JSX.', 'reset');
log('---\n', 'blue');

// Crear archivo de metadata del módulo
const metadataPath = path.join(basePath, `modulo-${modulo}-info.json`);
const metadata = {
  curso,
  modulo: parseInt(modulo),
  numLecciones: parseInt(numLecciones),
  lecciones: leccionesCreadas,
  creado: new Date().toISOString(),
  estado: 'pendiente'
};

fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
log(`💾 Metadata guardada en: modulo-${modulo}-info.json`, 'green');
