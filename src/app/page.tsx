'use client'
import Image from 'next/image'
import { Button , CustomFlowbiteTheme,  Tabs} from 'flowbite-react'
import { Console } from 'console'
import {ProductCard} from '@/components/productCard'
import SearchInput from '@/components/searchinput'

const sampleProduct = {
  name: "Sample Product",
  src: "/sample.jpg",
  price: 19.99,
  brand: "Sample Brand",
  sale: 10
};

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col fill-white">
      <div className="z-10 fill-white max-w-5xl w-full font-mono text-sm ">

        <label > Xin chao day la man hinh home</label>
      </div>
    </main>
  )
}
