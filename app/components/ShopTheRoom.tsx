"use client"

import Image from "next/image"

export default function ShopTheRoom() {

const rooms = [

{
title:"Living Room Styling",
image:"/product/mandala1.jpg"
},

{
title:"Dining Table Decor",
image:"/product/mandala2.jpg"
},

{
title:"Minimal Wall Art",
image:"/product/mandala3.jpg"
}

]

return(

<section className="bg-[#111] text-white">

<div className="max-w-7xl mx-auto px-8 py-28">

<h2 className="text-4xl font-semibold tracking-tight text-center mb-20">
Shop The Room
</h2>

<div className="grid md:grid-cols-3 gap-10">

{rooms.map((room,i)=>(

<div
key={i}
className="group relative overflow-hidden rounded-xl"
>

<Image
src={room.image}
alt={room.title}
width={500}
height={400}
className="h-[420px] w-full object-cover group-hover:scale-105 transition duration-700"
/>

<div className="absolute inset-0 bg-black/30 flex items-end p-6">

<h3 className="text-lg font-medium">
{room.title}
</h3>

</div>

</div>

))}

</div>

</div>

</section>

)

}