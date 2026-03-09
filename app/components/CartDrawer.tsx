"use client"

import { useCartStore } from "@/lib/store/cartStore"

export default function CartDrawer() {

  const items = useCartStore((state) => state.items)
  const isOpen = useCartStore((state) => state.isOpen)
  const toggleCart = useCartStore((state) => state.toggleCart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const clearCart = useCartStore((state) => state.clearCart)

  if (!isOpen) return null

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="fixed inset-0 z-50 flex">

      {/* overlay */}
      <div
        className="flex-1 bg-black/40"
        onClick={toggleCart}
      />

      {/* drawer */}
      <div className="w-[400px] bg-white shadow-xl p-6 flex flex-col">

        <h2 className="text-2xl font-semibold mb-6">
          Your Cart
        </h2>

        <div className="flex-1 overflow-y-auto">

          {items.length === 0 && (
            <p className="text-gray-500">
              Your cart is empty
            </p>
          )}

          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 mb-4 border-b pb-4"
            >

              <img
                src={item.image}
                className="w-16 h-16 object-cover rounded"
              />

              <div className="flex-1">
                <p className="font-medium">
                  {item.name}
                </p>

                <p className="text-sm text-gray-600">
                  ₹{item.price} × {item.quantity}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>

            </div>
          ))}

        </div>

        <div className="border-t pt-4">

          <p className="font-semibold mb-4">
            Total: ₹{total}
          </p>

          <button
            className="w-full bg-black text-white py-3 rounded-lg mb-2"
          >
            Checkout
          </button>

          <button
            onClick={clearCart}
            className="w-full border py-3 rounded-lg"
          >
            Clear Cart
          </button>

        </div>

      </div>

    </div>
  )
}