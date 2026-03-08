"use client"

import { useCartStore } from "@/lib/store/cartStore"

interface Product {
  id: number
  name: string
  price: number
  image: string
  slug: string
}

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addToCart = useCartStore((state) => state.addToCart)

  const handleAddToCart = () => {
    addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    })
    alert(`${product.name} added to cart!`)
  }

  return (
    <button
      onClick={handleAddToCart}
      className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
    >
      Add to Cart
    </button>
  )
}