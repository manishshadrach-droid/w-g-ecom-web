"use client"

import Image from "next/image"
import Link from "next/link"

export default function ShopTheRoom() {

const rooms = [

{
title:"Living Room Styling",
image:"/product/chair.jpg"
},

{
title:"Dining Table Decor",
image:"/product/lounge.jpg"
},

{
title:"Lounge Room Styling",
image:"/product/sofa.jpg"
}

]

return(

<section className="bg-[#0f0f0f] text-white">

<div className="max-w-7xl mx-auto px-8 py-32">

{/* Section Header */}

<div className="text-center mb-20">

<h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-4">
Shop The Room
</h2>

<p className="text-gray-400 max-w-xl mx-auto text-lg">
Explore curated interior inspirations and shop the pieces that bring each space to life.
</p>

</div>


{/* Room Grid */}

<div className="grid md:grid-cols-3 gap-10">

{rooms.map((room,i)=>(

<div
key={i}
className="group relative overflow-hidden rounded-2xl"
>

{/* Room Image */}

<Image
src={room.image}
alt={room.title}
width={600}
height={500}
className="h-[440px] w-full object-cover transition duration-700 group-hover:scale-110"
/>


{/* Cinematic Overlay */}

<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"/>


{/* Text Content */}

<div className="absolute bottom-0 left-0 right-0 p-8">

<h3 className="text-xl font-semibold mb-2 tracking-wide">
{room.title}
</h3>

<p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition duration-500">
View Inspiration
</p>

</div>

</div>

))}

</div>

</div>

</section>

)

}