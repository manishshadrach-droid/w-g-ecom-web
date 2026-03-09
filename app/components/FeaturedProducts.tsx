"use client"

import { useState } from "react"
import Link from "next/link"
import { Product } from "@/types/product"

export default function FeaturedProducts() {

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const products: Product[] = [
    {
      id: 1,
      slug: "mandala1",
      name: "Handcrafted Metal Mandala Wall Art",
      price: 2499,
      image: "/product/mandala1.jpg",
    },
    {
      id: 2,
      slug: "mandala2",
      name: "Gold Finish Lotus Urli Bowl",
      price: 1899,
      image: "/product/mandala2.jpg",
    },
    {
      id: 3,
      slug: "mandala3",
      name: "Decorative Mandala Wall Frame",
      price: 2999,
      image: "/product/mandala3.jpg",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <h2 className="text-3xl font-bold mb-10 text-center">
        Featured Collection
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {products.map((product) => (

          <div
            key={product.id}
            className="relative bg-white rounded-2xl shadow-sm overflow-hidden group"
          >

            <Link href={`/product/${product.slug}`}>

              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover group-hover:scale-105 transition"
              />

              <div className="p-4">

                <h3 className="font-medium text-lg">
                  {product.name}
                </h3>

                <p className="font-semibold">
                  ₹{product.price}
                </p>

              </div>

            </Link>

            <button
              onClick={() => setSelectedProduct(product)}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition shadow"
            >
              Quick View
            </button>

          </div>

        ))}

      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white p-8 rounded-xl max-w-md">

            <h3 className="text-xl font-semibold mb-4">
              {selectedProduct.name}
            </h3>

            <img
              src={selectedProduct.image}
              className="mb-4 rounded-lg"
            />

            <p className="font-semibold mb-4">
              ₹{selectedProduct.price}
            </p>

            <button
              onClick={() => setSelectedProduct(null)}
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </section>
  )
}