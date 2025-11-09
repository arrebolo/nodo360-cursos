import Link from 'next/link'

interface DownloadCardProps {
  icon: string
  title: string
  description: string
  pdfUrl: string
  filename: string
}

export default function DownloadCard({ icon, title, description, pdfUrl, filename }: DownloadCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-nodo-azul mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 min-h-[48px]">{description}</p>
      <Link
        href={pdfUrl}
        download={filename}
        className="inline-block bg-nodo-naranja hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105"
      >
        Descargar PDF
      </Link>
    </div>
  )
}
