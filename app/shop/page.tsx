"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const products = [
  {
    id: 1,
    name: "Handcrafted Metal Mandala Wall Art",
    price: 2499,
    image: "/product/mandala1.jpg",
    slug: "mandala",
    category: "wall"
  },
  {
    id: 2,
    name: "Gold Finish Lotus Urli Bowl",
    price: 1899,
    image: "/product/mandala2.jpg",
    slug: "lotus",
    category: "decor"
  },
  {
    id: 3,
    name: "Decorative Mandala Frame",
    price: 2999,
    image: "/product/mandala3.jpg",
    slug: "mandala-frame",
    category: "wall"
  }
]

export default function ShopPage() {

  const [category, setCategory] = useState("all")

  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category)

  return (

    <main className="max-w-7xl mx-auto px-8 py-20">

      <h1 className="text-4xl font-bold text-center mb-12">
        Shop Collection
      </h1>

      {/* FILTER BUTTONS */}

      <div className="flex justify-center gap-6 mb-12">

        <button
          onClick={() => setCategory("all")}
          className="px-4 py-2 border rounded-lg hover:bg-black hover:text-white"
        >
          All
        </button>

        <button
          onClick={() => setCategory("wall")}
          className="px-4 py-2 border rounded-lg hover:bg-black hover:text-white"
        >
          Wall Decor
        </button>

        <button
          onClick={() => setCategory("decor")}
          className="px-4 py-2 border rounded-lg hover:bg-black hover:text-white"
        >
          Home Decor
        </button>

      </div>

      {/* PRODUCT GRID */}

      <div className="grid md:grid-cols-3 gap-10">

        {filtered.map((product) => (

          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >

            <Link
              href={"/product/" + product.slug}
              className="block bg-white rounded-xl shadow hover:shadow-2xl transition overflow-hidden"
            >

              <div className="overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-lg font-semibold mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-700 font-bold">
                  ₹{product.price}
                </p>

              </div>

            </Link>

          </motion.div>

        ))}

      </div>

    </main>

  )
}