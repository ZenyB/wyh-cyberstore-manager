'use client'
import Link from "next/link";
import Image from "next/image";
import { AddToCartButton } from "./addtocart";

export const ProductCard = ({ product }) => {
  return (
    <div className="card" style={{ width: "300px", height: "400px" }}>
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          width={300}
          height={300}
          alt={product.name}
          className="Srounded shadow object-cover"
        />
        <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.price}</p>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button className="btn bg-blue-800">Button</button>
      </div>

      </Link>
    </div>
  );
};