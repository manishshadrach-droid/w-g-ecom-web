"use client"

import { useState } from "react"
import { useCartStore } from "@/lib/store/cartStore"

interface Product {
  id: number
  name: string
  price: number
  image: string
}

export default function AddToCartButton({
  product,
}: {
  product: Product
}) {

  const addToCart = useCartStore((state) => state.addToCart)
  const [qty, setQty] = useState(1)

  const increase = () => setQty(qty + 1)

  const decrease = () => {
    if (qty > 1) setQty(qty - 1)
  }

  const handleAdd = () => {

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: qty
    })

  }

  return (

    <div className="flex items-center gap-6">

      {/* Quantity selector */}

      <div className="flex items-center border rounded-lg">

        <button
          onClick={decrease}
          className="px-4 py-2"
        >
          -
        </button>

        <span className="px-4">
          {qty}
        </span>

        <button
          onClick={increase}
          className="px-4 py-2"
        >
          +
        </button>

      </div>

      {/* Add to cart */}

      <button
        onClick={handleAdd}
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>

    </div>

  )
}