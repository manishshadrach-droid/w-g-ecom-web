"use client"

import Image from "next/image"

export default function BrandStory() {

return(

<section className="max-w-7xl mx-auto px-8 py-28 grid md:grid-cols-2 gap-16 items-center">

<Image
src="/hero/hero.jpg"
alt="Craftsmanship"
width={700}
height={500}
className="rounded-xl shadow-lg"
/>

<div>

<h2 className="text-4xl font-semibold tracking-tight mb-6">
Crafted With Passion
</h2>

<p className="text-gray-600 mb-6 leading-relaxed">
At Pokar Home, every décor piece is thoughtfully designed to bring warmth,
artistry, and elegance into modern living spaces. Our artisans combine
traditional craftsmanship with contemporary aesthetics to create pieces
that transform homes into inspiring environments.
</p>

<p className="text-gray-600 leading-relaxed">
Each product reflects attention to detail, quality materials, and timeless
design philosophy.
</p>

</div>

</section>

)

}