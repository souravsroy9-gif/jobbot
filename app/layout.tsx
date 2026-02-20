import './globals.css'

export const metadata = {
  title: 'JobBot Pro - Agartala Jobs',
  description: 'Job automation bot for Agartala, Tripura',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
