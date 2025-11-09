# 🚀 NODO360 CURSOS - Plataforma Next.js

## ✅ LO QUE TIENES

Una plataforma de cursos completa construida con Next.js 14, Tailwind CSS y TypeScript.

**INCLUYE:**
- ✅ Página de inicio profesional
- ✅ Página índice del curso "Bitcoin desde Cero"
- ✅ Lección 1.1 COMPLETA y funcional
- ✅ Sistema de slides integradas (sin iframes)
- ✅ Navegación entre lecciones
- ✅ Componentes reutilizables
- ✅ Diseño responsive completo
- ✅ Colores Nodo360 configurados

---

## 📦 INSTALACIÓN LOCAL (para desarrollo)

### 1. Instalar Node.js

Si no lo tienes:
- Ve a https://nodejs.org/
- Descarga la versión LTS
- Instala

### 2. Instalar dependencias

```bash
cd nodo360-cursos
npm install
```

Esto instalará Next.js, React, Tailwind y todo lo necesario.

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

Abre http://localhost:3000 en tu navegador.

---

## 🌐 DEPLOYMENT A VERCEL (RECOMENDADO)

### Opción A: Desde GitHub (automático)

1. **Sube el código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Nodo360 Cursos"
   git remote add origin https://github.com/tu-usuario/nodo360-cursos.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a https://vercel.com
   - Click en "Import Project"
   - Conecta tu repositorio de GitHub
   - Vercel detecta Next.js automáticamente
   - Click en "Deploy"

3. **Configura el dominio:**
   - En Vercel → Settings → Domains
   - Añade: cursos.nodo360.com
   - Copia los registros DNS que te da Vercel

4. **En Hostalia (tu hosting):**
   - Panel → DNS
   - Añade registro CNAME:
     - Nombre: cursos
     - Valor: cname.vercel-dns.com
   - Guarda cambios

5. **¡Listo!**
   - En 5-10 minutos: cursos.nodo360.com funciona
   - Cada vez que hagas push a GitHub = actualización automática

---

### Opción B: Deploy manual desde CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
cd nodo360-cursos
vercel

# Sigue las instrucciones interactivas
```

---

## 📁 ESTRUCTURA DEL PROYECTO

```
nodo360-cursos/
├── app/
│   ├── page.tsx                    # Página inicio
│   ├── layout.tsx                  # Layout global
│   ├── globals.css                 # Estilos globales
│   └── cursos/
│       └── bitcoin-desde-cero/
│           ├── page.tsx            # Índice del curso
│           └── leccion/
│               └── 1-1/
│                   └── page.tsx    # Lección 1.1
│
├── components/
│   ├── Slides.tsx                  # Slides integradas
│   ├── DownloadCard.tsx            # Tarjeta descarga PDF
│   └── LessonNavigation.tsx        # Navegación lecciones
│
├── public/
│   ├── pdfs/                       # PDFs (añade aquí)
│   └── images/                     # Imágenes
│
├── package.json                    # Dependencias
├── tsconfig.json                   # Config TypeScript
├── tailwind.config.ts              # Config Tailwind
└── next.config.js                  # Config Next.js
```

---

## 🎨 COLORES NODO360 CONFIGURADOS

En `tailwind.config.ts`:

```typescript
colors: {
  'nodo-azul': '#1c1f3d',      // Azul oscuro
  'nodo-naranja': '#F7931A',   // Bitcoin orange
  'nodo-verde': '#00ff88',     // Verde tech
  'nodo-cyan': '#00d4ff',      // Cyan acentos
}
```

Usa en cualquier componente:
```tsx
<div className="bg-nodo-azul text-nodo-naranja">
```

---

## 📄 AÑADIR PDFs

1. Crea tus PDFs
2. Ponlos en `public/pdfs/`
3. Ya están accesibles en `/pdfs/tu-archivo.pdf`

---

## ➕ AÑADIR MÁS LECCIONES

### 1. Crea la carpeta:
```bash
mkdir app/cursos/bitcoin-desde-cero/leccion/1-2
```

### 2. Copia la plantilla:
```bash
cp app/cursos/bitcoin-desde-cero/leccion/1-1/page.tsx \
   app/cursos/bitcoin-desde-cero/leccion/1-2/page.tsx
```

### 3. Edita el contenido:
- Cambia los slides
- Cambia el artículo
- Actualiza navegación (prevLesson y nextLesson)

### 4. Actualiza el índice:
Edita `app/cursos/bitcoin-desde-cero/page.tsx`:
- Añade la lección al array `modulos`

---

## 🔧 DESARROLLO DE CONTENIDO

### Para crear una nueva lección:

1. **Define los slides** (array en el componente)
2. **Escribe el artículo** (dentro del `<article>`)
3. **Añade PDFs** (componente DownloadCard)
4. **Configura navegación** (prevLesson/nextLesson)

### Estructura de un slide:

```typescript
{
  titulo: 'Título interno',
  contenido: (
    <div>
      <h2>Título visible</h2>
      <p>Contenido...</p>
    </div>
  ),
  backgroundColor: '#1c1f3d'
}
```

---

## 📊 MÉTRICAS Y ANALYTICS

Para añadir analytics:

1. **Vercel Analytics (gratis):**
   ```bash
   npm install @vercel/analytics
   ```

   En `app/layout.tsx`:
   ```typescript
   import { Analytics } from '@vercel/analytics/react'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     )
   }
   ```

---

## 🚀 COMANDOS ÚTILES

```bash
# Desarrollo local
npm run dev

# Build de producción (testear antes de deploy)
npm run build

# Ejecutar build
npm run start

# Linter
npm run lint
```

---

## ✅ CHECKLIST ANTES DE DEPLOY

```
□ npm run build funciona sin errores
□ Probaste todas las páginas localmente
□ Los links de navegación funcionan
□ Los PDFs están en /public/pdfs/
□ Las imágenes (si las hay) están en /public/images/
□ Colores Nodo360 correctos
□ Responsive funciona (prueba en móvil)
```

---

## 🎯 PRÓXIMOS PASOS

### Inmediato:
1. ✅ Instala dependencias: `npm install`
2. ✅ Ejecuta: `npm run dev`
3. ✅ Abre: http://localhost:3000
4. ✅ Navega por todo
5. ✅ Revisa la Lección 1.1 completa

### Cuando esté OK:
1. Sube a GitHub
2. Deploy en Vercel
3. Configura dominio cursos.nodo360.com
4. ¡Está online!

### Para crecer:
1. Crea Lección 1.2 (duplica 1.1 y edita)
2. Crea Lección 1.3, 1.4, 1.5
3. Completa Módulo 2
4. Añade sistema de progreso (localStorage)
5. Añade comentarios/comunidad

---

## 💡 TIPS PRO

- **Edita en caliente:** Guarda archivos y ve cambios instantáneos
- **Componentes:** Reutiliza Slides, DownloadCard, etc.
- **Tailwind:** Usa clases de Tailwind, no CSS custom
- **TypeScript:** Te ayuda a evitar errores
- **Git:** Commitea frecuentemente

---

## 🆘 PROBLEMAS COMUNES

### "npm install" falla
```bash
# Limpia caché
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Puerto 3000 ocupado
```bash
# Usa otro puerto
npm run dev -- -p 3001
```

### Build falla
```bash
# Revisa errores en terminal
# Usualmente son imports o sintaxis
```

---

## 📞 SOPORTE

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Vercel Docs:** https://vercel.com/docs

---

## 🎉 ¡LISTO!

Tienes una plataforma profesional de cursos con:
- ✅ Primera lección funcional al 100%
- ✅ Sistema de slides sin iframes
- ✅ Navegación completa
- ✅ Diseño responsive
- ✅ Componentes reutilizables
- ✅ Lista para escalar

**Siguiente paso:** `npm install` y `npm run dev`

---

© 2025 Nodo360 | Educación Bitcoin de calidad
