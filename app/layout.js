import { ToastContainer } from 'react-toastify'
import './globals.css'

export const metadata = {
  title: 'Check In | Brannon Exchange',
  description: 'Check in and out of the Brannon Exchange',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='h-screen flex flex-col'>
        <header className='h-72 pt-3 pb-6 w-full flex justify-center'>
          <img
            src='/logo-beige.jpg'
            alt='Brannon Exchange'
            className='object-contain'
          />
        </header>
        <section className='flex justify-center'>{children}</section>
        <ToastContainer position='bottom left' />
      </body>
    </html>
  )
}
