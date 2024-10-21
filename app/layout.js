import { ToastContainer } from 'react-toastify'
import Image from 'next/image'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'

export const metadata = {
  title: 'Check In | Brannon Exchange',
  description: 'Check in and out of the Brannon Exchange',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='h-screen flex flex-col max-w-[1000px] mx-auto'>
        <header className='h-72 pt-3 pb-6 w-full flex justify-center'>
          <Image
            src='/logo-beige.png'
            alt='Brannon Exchange'
            className='object-contain'
            width={1000}
            height={1000}
          />
        </header>
        <section className='flex justify-center flex-grow pb-4'>
          {children}
        </section>
        <ToastContainer position='top-left' />
      </body>
    </html>
  )
}
