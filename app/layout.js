import './globals.css'

export const metadata = {
  title: 'Check In | Brannon Exchange',
  description: 'Check in and out of the Brannon Exchange',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
