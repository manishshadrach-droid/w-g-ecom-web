"use client"

import { useState } from "react"
import Image from "next/image"

export default function ProductGallery({ images }: any) {

const [selected, setSelected] = useState(images[0])

return (

<div>

{/* MAIN IMAGE */}

<div className="relative h-[500px] mb-6 overflow-hidden rounded-xl">

<Image
src={selected}
alt="Product"
fill
className="object-cover hover:scale-105 transition duration-500"
/>

</div>


{/* THUMBNAILS */}

<div className="flex gap-4">

{images.map((img: string, i: number) => (

<div
key={i}
onClick={() => setSelected(img)}
className="relative w-20 h-20 cursor-pointer border rounded-lg overflow-hidden"
>

<Image
src={img}
alt="Thumbnail"
fill
className="object-cover"
/>

</div>

))}

</div>

</div>

)
}