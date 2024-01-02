'use client'
import Image from 'next/image'
import React, {useEffect, useRef, useState} from 'react'
import { ReactDOM } from 'react'
import Sibebar from '@/components/sidebar'
import Link from 'next/link'
import { ProductCard } from '@/components/productCard'
import { Navbar,Button,ButtonGroup } from 'flowbite-react'
import SearchInput from '@/components/searchbar'


const sampleProduct = {
  id: 1,
  name: "Sample Product",
  image: "/path/to/product-image.jpg",
  price: 19.99,
  brand: "Sample Brand",
};

export default function Statistic() {
  const [tab,setTab ]= useState(0);
  const onClickHandle = (num) =>{
    setTab(num);
    console.log(num);
  };
  return (
  <div className='flex-col'> {/* Set white background for the page */}
      <main>
        <div className='flex-col'>
        <div className=' flex-col fixed top-0 '>
        <div className='flex-col'>
            <label className=' font-bold text-2xl'>Quan ly cai gi do </label>
            <div className='flex-row mt-2'>
            <Button.Group>
              <Button onClick={()=>onClickHandle(0)} color="gray">Quản lý nhân viên</Button>
              <Button onClick={()=>onClickHandle(1)} color="gray">Tính lương</Button>
            </Button.Group>
            </div>
        </div>
        </div>
        <div className=' flex-col fixed top-1 right-0 mt-2'>
          <Navbar>
          <SearchInput></SearchInput>   
        <div className="flex md:order-2">
            <Button>Get started</Button>
            <Navbar.Toggle />
        </div>
          </Navbar>
        </div>
        </div>

        <div className='flex-1 top-16'>
        {tab === 0 ? (<>
          <p>Employee management content here</p>
          <ProductCard product={sampleProduct}></ProductCard>
          <ProductCard product={sampleProduct}></ProductCard>
        </>
        ) : (
      <>
      <ProductCard product={sampleProduct}></ProductCard>
      <ProductCard product={sampleProduct}></ProductCard>
      {/* ... other product cards for salary calculation */}
      </>
  )}
</div>    
        </main>
    </div>
  )
}
