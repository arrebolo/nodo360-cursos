import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/.next/'],
    },
    sitemap: 'https://nodo360-cursos.vercel.app/sitemap.xml',
  }
}
