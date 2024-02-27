

import { Inter } from 'next/font/google';
import NavBar from './components/navBar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WebDex',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Burned&display=swap" rel="stylesheet" />
      </head>
      <body className={`overflow-x-hidden flex flex-col bg-slate-100 min-h-screen ${inter.className}`}>
        <NavBar />
        <div className='flex-grow p-2'>
          {children}
        </div>
      </body>
    </html>
  )
}
