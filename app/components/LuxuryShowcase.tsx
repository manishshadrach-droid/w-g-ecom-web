"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function LuxuryShowcase(){

const slides = [
"/featured-bg/luxury1.jpg",
"/featured-bg/luxury2.jpg",
"/featured-bg/luxury3.jpg",
"/featured-bg/luxury4.jpg"
]

const [current,setCurrent] = useState(0)

useEffect(()=>{

const interval = setInterval(()=>{
setCurrent(prev => (prev + 1) % slides.length)
},5000)

return ()=>clearInterval(interval)

},[])

return(

<section className="max-w-7xl mx-auto px-8 py-16">

<div className="grid md:grid-cols-3 gap-6">

{/* LEFT SLIDER */}

<div className="relative md:col-span-2 bg-black rounded-xl overflow-hidden aspect-[16/10]">

{slides.map((slide,i)=>(
<Image
key={i}
src={slide}
alt="Luxury decor"
fill
className={`object-contain p-10 transition-opacity duration-[1500ms] ${
i===current ? "opacity-100" : "opacity-0"
}`}
/>
))}

<div className="absolute bottom-10 left-10 text-white">

<p className="text-sm mb-2 opacity-80">
Luxury Decor Story
</p>

<h2 className="text-4xl font-semibold">
Discover Timeless Interiors
</h2>

</div>

</div>


{/* RIGHT TOP TILE */}

<Link
href="/shop"
className="bg-[#C6A969]rounded-xl flex items-center justify-center text-2xl font-semibold hover:bg-yellow-300 transition"
>

Go Shopping →

</Link>


{/* RIGHT BOTTOM TILE */}

<div className="bg-yellow-400 rounded-xl flex items-center justify-center text-lg font-medium">

Store: Pokar Home

</div>

</div>

</section>

)

}