"use client"

import { useCartStore } from "@/lib/store/cartStore"
import Link from "next/link"

export default function CartPage() {

  const items = useCartStore((state) => state.items)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const clearCart = useCartStore((state) => state.clearCart)

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">

        <h1 className="text-3xl font-bold mb-4">
          Your Cart is Empty
        </h1>

        <Link href="/shop" className="btn-primary">
          Continue Shopping
        </Link>

      </div>
    )
  }

  return (

    <div className="min-h-screen bg-gray-50 py-16 px-8">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10">

        <h1 className="text-3xl font-bold mb-8">
          Your Cart
        </h1>

        <div className="space-y-6">

          {items.map((item) => (

            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >

              <div className="flex items-center gap-6">

                <img
                  src={item.image}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div>

                  <h2 className="font-semibold">
                    {item.name}
                  </h2>

                  <p>₹ {item.price}</p>

                  <p>Qty: {item.quantity}</p>

                </div>

              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>

            </div>

          ))}

        </div>

        <div className="mt-10 border-t pt-6 flex justify-between items-center">

          <h2 className="text-2xl font-bold">
            Total: ₹ {total}
          </h2>

          <div className="flex gap-4">

            <button
              onClick={clearCart}
              className="btn-outline"
            >
              Clear Cart
            </button>

            <Link href="/checkout" className="btn-primary">
              Checkout
            </Link>

          </div>

        </div>

      </div>

    </div>

  )
}