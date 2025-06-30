import type { Metadata } from 'next'
import './globals.css'
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"


export const metadata: Metadata = {
  title: {
    default: 'LSG INVESTMENT LIMITED ',
    template: '%s | LSG INVESTMENT LIMITED '
  },
  description: 'Professional portfolio showcasing my work and skills',
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
          <main className="min-h-screen overflow-x-hidden mx-auto">
            <Navbar/>
            {children}
            <Footer/>
          </main>
       </body>
    </html>
  )
} 