import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sibebar from '@/components/sidebar'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=" w-screen h-screen flex">
    <Sibebar/>
    <div className=" pt-8 px-5 pr-8 w-full bg-background-normal">
        {children}
    </div>
</div>
  )
}
