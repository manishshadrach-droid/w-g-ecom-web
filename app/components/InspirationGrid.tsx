"use client"

import Image from "next/image"

export default function InspirationGrid(){

const images=[
"/inspiration/insp1.jpg",
"/inspiration/insp2.jpg",
"/inspiration/insp3.jpg",
"/inspiration/insp4.jpg",
"/inspiration/insp5.jpg",
"/inspiration/insp6.jpg"
]

return(

<section className="max-w-7xl mx-auto px-8 py-28">

<h2 className="text-4xl font-semibold tracking-tight text-center mb-20">
Design Inspiration
</h2>

<div className="grid md:grid-cols-3 gap-6">

{images.map((img,i)=>(

<div
key={i}
className="relative h-80 rounded-xl overflow-hidden group"
>

<Image
src={img}
alt="Decor inspiration"
fill
className="object-cover group-hover:scale-105 transition duration-700"
/>

</div>

))}

</div>

</section>

)

}