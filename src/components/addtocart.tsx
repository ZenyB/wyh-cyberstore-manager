'use client'
import { useState } from "react";

export const AddToCartButton = ({ productId, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleAddToCart = () => {
    //onAddToCart(productId, quantity);
    // You can implement the logic to add the product to the cart here
  };

  return (
    <div className="mt-4">
      <button onClick={handleAddToCart} className="mt-2 bg-blue-500 text-white p-2 rounded-md">
        Add to bill
      </button>
    </div>
  );
};
