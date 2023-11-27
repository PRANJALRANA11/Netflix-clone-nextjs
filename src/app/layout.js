import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Netflix-one place for all tv shows and movies',
  description: 'Find your best movies tv shows',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
    
          {children}
       
      </body>
      
    </html>
  )
}
