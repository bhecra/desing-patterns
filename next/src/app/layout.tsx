import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://ubits-test-s3-lxp-assets.sandteck.com/assets/styles/css/ubits-styles.min.css" />
      </head>
      <body className={`${inter.className} dark` }>{children}</body>
    </html>
  )
}
