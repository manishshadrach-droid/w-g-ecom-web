"use client"

import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    slug: "mandala1",
    name: "Mandala Wall Art – Classic",
    price: 2999,
    image: "/product/mandala1.jpg",
  },
  {
    id: 2,
    slug: "mandala2",
    name: "Mandala Wall Art – Premium",
    price: 3499,
    image: "/product/mandala2.jpg",
  },
  {
    id: 3,
    slug: "mandala3",
    name: "Mandala Wall Art – Royal",
    price: 3999,
    image: "/product/mandala3.jpg",
  },
]

export default function RelatedProducts({ currentSlug }: any) {

  const related = products.filter(p => p.slug !== currentSlug)

  return (

<section className="max-w-7xl mx-auto px-8 py-24">

<h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">
You May Also Like
</h2>

<div className="grid md:grid-cols-3 gap-10">

{related.map(product => (

<Link
key={product.id}
href={`/product/${product.slug}`}
className="group"
>

<div className="relative h-72 overflow-hidden rounded-xl">

<Image
src={product.image}
alt={product.name}
fill
className="object-cover group-hover:scale-105 transition duration-700"
/>

</div>

<h3 className="mt-4 font-medium">
{product.name}
</h3>

<p className="text-gray-500 text-sm">
₹{product.price}
</p>

</Link>

))}

</div>

</section>

  )
}