import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nodo-azul': '#1c1f3d',
        'nodo-naranja': '#F7931A',
        'nodo-verde': '#00ff88',
        'nodo-cyan': '#00d4ff',
      },
    },
  },
  plugins: [],
}
export default config
