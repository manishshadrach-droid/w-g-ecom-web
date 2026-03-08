"use client"

import Image from "next/image"

export default function ProductPreview({product,close}:any){

if(!product) return null

return(

<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

<div className="bg-white p-8 rounded-xl max-w-lg w-full">

<Image
src={product.image}
alt={product.name}
width={500}
height={400}
className="rounded-lg mb-6"
/>

<h2 className="text-2xl font-semibold mb-2">
{product.name}
</h2>

<p className="mb-4">
₹{product.price}
</p>

<button
onClick={close}
className="bg-black text-white px-6 py-2 rounded-lg"
>
Close
</button>

</div>

</div>

)
}