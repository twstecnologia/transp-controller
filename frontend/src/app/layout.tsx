import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Transp Controller',
  description: 'Controle de entregas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="">{children}</body>
    </html>
  )
}
