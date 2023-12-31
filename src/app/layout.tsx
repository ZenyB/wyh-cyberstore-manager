import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideBar from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={' flex-row h-screen w-screen'}>
        <div className='flex-row h-screen w-screen'>
          <div className=' flex-1 fixed top-0 left-0 bottom-0 z-10'>
            <SideBar ></SideBar>
          </div>
          <div className='flex-1 flex-col overflow-y-auto z-20 ml-64'>
            {children}
          </div>
        </div>
        </body>
    </html>
  )
}
