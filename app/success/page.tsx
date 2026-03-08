import Link from "next/link"

export default function SuccessPage() {
  return (

    <div className="min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-4xl font-bold mb-4">
        Order Placed Successfully 🎉
      </h1>

      <p className="mb-6">
        Thank you for shopping with Pokar Home
      </p>

      <Link
        href="/shop"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Continue Shopping
      </Link>

    </div>

  )
}