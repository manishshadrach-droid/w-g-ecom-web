"use client"

import Image from "next/image"

export default function ShopByRoom(){

const rooms=[

{
name:"Living Room",
image:"/rooms/living.jpg"
},

{
name:"Dining Room",
image:"/rooms/dining.jpg"
},

{
name:"Bedroom",
image:"/rooms/bedroom.jpg"
},

{
name:"Workspace",
image:"/rooms/workspace.jpg"
}

]

return(

<section className="max-w-7xl mx-auto px-8 py-28">

<h2 className="text-4xl font-semibold tracking-tight text-center mb-20">
Shop By Room
</h2>

<div className="grid md:grid-cols-4 gap-8">

{rooms.map((room,i)=>(

<div
key={i}
className="relative group cursor-pointer overflow-hidden rounded-xl"
>

<Image
src={room.image}
alt={room.name}
width={400}
height={400}
className="h-80 w-full object-cover group-hover:scale-105 transition duration-700"
/>

<div className="absolute inset-0 bg-black/30 flex items-center justify-center">

<h3 className="text-white text-xl font-medium tracking-wide">
{room.name}
</h3>

</div>

</div>

))}

</div>

</section>

)

}