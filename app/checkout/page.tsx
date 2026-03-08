"use client"

import { useCartStore } from "@/lib/store/cartStore"
import { useEffect } from "react"

declare global {
  interface Window {
    Razorpay: any
  }
}

export default function CheckoutPage() {

  const items = useCartStore((state) => state.items)
  const clearCart = useCartStore((state) => state.clearCart)

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  const handlePayment = async () => {

    try {

      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          amount: total
        })
      })

      const data = await res.json()

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: "INR",
        name: "Pokar Home Decors",
        description: "Order Payment",
        order_id: data.id,

        handler: function () {
          clearCart()
          window.location.href = "/success"
        },

        theme: {
          color: "#000000"
        }
      }

      const razor = new window.Razorpay(options)

      razor.open()

    } catch (error) {

      console.error("Payment error:", error)
      alert("Payment initialization failed.")

    }

  }

  if (items.length === 0) {

    return (
      <div className="min-h-screen flex items-center justify-center">

        <h1 className="text-2xl font-bold">
          Your cart is empty
        </h1>

      </div>
    )

  }

  return (

    <div className="min-h-screen bg-gray-50 py-16 px-8">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-10">

        <h1 className="text-3xl font-bold mb-8">
          Checkout
        </h1>

        <div className="space-y-4 mb-8">

          {items.map((item) => (

            <div
              key={item.id}
              className="flex justify-between border-b pb-3"
            >

              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ₹ {item.price * item.quantity}
              </span>

            </div>

          ))}

        </div>

        <div className="border-t pt-6 flex justify-between items-center">

          <h2 className="text-2xl font-bold">
            Total: ₹ {total}
          </h2>

          <button
            onClick={handlePayment}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Pay Now
          </button>

        </div>

      </div>

    </div>

  )
}