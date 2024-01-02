import Image from 'next/image'
import React from 'react'
import { ReactDOM } from 'react'
import Sibebar from '@/components/sidebar'
import Link from 'next/link'
import { ProductCard } from '@/components/productCard'

const sampleProduct = {
  id: 1,
  name: "Sample Product",
  image: "/path/to/product-image.jpg",
  price: 19.99,
  brand: "Sample Brand",
};

export default function Home() {
  return (
  <div > {/* Set white background for the page */}
      <main>
        <p>asas</p>
        <ProductCard product={sampleProduct}></ProductCard>
        <ProductCard product={sampleProduct}></ProductCard>
        <ProductCard product={sampleProduct}></ProductCard>
        <ProductCard product={sampleProduct}></ProductCard>
        <ProductCard product={sampleProduct}></ProductCard>
      </main>
    </div>
  )
}
