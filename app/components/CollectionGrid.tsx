"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const slides = [
"/featured-bg/luxury1.jpg",
"/featured-bg/luxury2.jpg",
"/featured-bg/luxury3.jpg",
"/featured-bg/luxury4.jpg"
]

export default function CollectionGrid(){

const [current,setCurrent] = useState(0)

useEffect(()=>{

const interval = setInterval(()=>{
setCurrent(prev => (prev + 1) % slides.length)
},6000)

return ()=>clearInterval(interval)

},[])

return(

<section className="bg-[#F7F5F2] py-40">

<div className="max-w-6xl mx-auto px-6">

{/* Title */}

<div className="text-center mb-20">

<h2 className="section-title mb-4">
Explore Collections
</h2>

<p className="section-subtitle">
Timeless décor pieces crafted to elevate modern interiors.
</p>

</div>


{/* Gallery Frame */}

<div className="flex justify-center">

<div className="relative w-full max-w-[850px] aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl bg-white">

{/* Images */}

{slides.map((slide,i)=>(

<Image
key={i}
src={slide}
alt="Luxury Decor"
fill
priority
className={`object-cover transition-opacity duration-[2000ms] ${
i===current ? "opacity-100" : "opacity-0"
}`}
/>

))}

{/* Gold Frame */}

<div className="absolute inset-0 border border-[#C6A969]/30 rounded-2xl pointer-events-none"/>

{/* Caption */}

<div className="absolute bottom-8 left-8 text-white">

<p className="text-xs tracking-[0.4em] uppercase opacity-90">
Signature Collection
</p>

</div>

</div>

</div>

</div>

</section>

)

}