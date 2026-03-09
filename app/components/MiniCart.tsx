"use client"

import Link from "next/link"
import { useCartStore } from "@/lib/store/cartStore"

export default function MiniCart() {

  const items = useCartStore((state) => state.items)
  const isOpen = useCartStore((state) => state.isOpen)
  const toggleCart = useCartStore((state) => state.toggleCart)

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <div className="relative">

      <button
        onClick={toggleCart}
        className="relative"
      >
        🛒

        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-2 py-1">
            {totalItems}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-4 w-80 bg-white shadow-lg rounded-xl p-4 z-50">

          <h3 className="font-semibold mb-4">
            Your Cart
          </h3>

          {items.length === 0 && (
            <p className="text-gray-500">
              Cart is empty
            </p>
          )}

          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 mb-3"
            >

              <img
                src={item.image}
                className="w-12 h-12 object-cover rounded"
              />

              <div className="flex-1">
                <p className="text-sm font-medium">
                  {item.name}
                </p>

                <p className="text-xs text-gray-600">
                  ₹{item.price} × {item.quantity}
                </p>
              </div>

            </div>
          ))}

          <Link
            href="/cart"
            className="block mt-4 bg-black text-white text-center py-2 rounded-lg"
          >
            View Cart
          </Link>

        </div>
      )}

    </div>
  )
}