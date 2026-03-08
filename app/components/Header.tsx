"use client"

import Link from "next/link"
import { useCartStore } from "@/lib/store/cartStore"

export default function Header() {

  const items = useCartStore((state) => state.items)

  const count = items.reduce(
    (acc, item) => acc + item.quantity,
    0
  )

  return (

    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">

      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* LOGO */}

        <Link
          href="/"
          className="text-2xl font-bold"
        >
          Pokar Home
        </Link>

        {/* SEARCH */}

        <input
          type="text"
          placeholder="Search decor..."
          className="border px-4 py-2 rounded-lg w-64"
        />

        {/* NAVIGATION */}

        <nav className="flex items-center gap-8 text-lg">

          <Link href="/" className="hover:text-gray-500">
            Home
          </Link>

          <Link href="/shop" className="hover:text-gray-500">
            Shop
          </Link>

          <Link
            href="/cart"
            className="relative flex items-center gap-2 hover:text-gray-500"
          >
            🛒 Cart

            {count > 0 && (
              <span className="absolute -top-2 -right-4 bg-black text-white text-xs px-2 py-0.5 rounded-full">
                {count}
              </span>
            )}

          </Link>

        </nav>

      </div>

    </header>

  )
}