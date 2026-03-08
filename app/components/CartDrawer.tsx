"use client"

import { useCartStore } from "@/lib/store/cartStore"

export default function CartDrawer() {

  const cart = useCartStore((state) => state.cart)
  const isOpen = useCartStore((state) => state.isOpen)
  const toggleCart = useCartStore((state) => state.toggleCart)

  if (!isOpen) return null

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="fixed inset-0 z-50 flex">

      {/* Overlay */}
      <div
        className="flex-1 bg-black/40"
        onClick={toggleCart}
      />

      {/* Drawer */}
      <div className="w-96 bg-white p-8 shadow-2xl overflow-y-auto">

        <h2 className="text-2xl font-semibold mb-6">
          Your Cart
        </h2>

        {cart.length === 0 && (
          <p className="text-gray-500">
            Your cart is empty
          </p>
        )}

        {cart.map((item, index) => (

          <div
            key={index}
            className="flex justify-between items-center border-b py-4"
          >

            <div>
              <p className="font-medium">
                {item.name}
              </p>

              <p className="text-gray-500 text-sm">
                ₹{item.price}
              </p>
            </div>

          </div>

        ))}

        {cart.length > 0 && (

          <div className="mt-8">

            <div className="flex justify-between font-semibold mb-4">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
              Checkout
            </button>

          </div>

        )}

      </div>

    </div>
  )
}