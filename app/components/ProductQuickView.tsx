"use client"

import Image from "next/image"

export default function ProductQuickView({product,onClose}:any){

if(!product) return null

return(

<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

<div className="bg-white rounded-xl p-8 max-w-lg w-full relative">

<button
onClick={onClose}
className="absolute top-4 right-4 text-gray-500 hover:text-black"
>
✕
</button>

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

<p className="text-gray-600 mb-4">
₹{product.price}
</p>

<button className="bg-black text-white px-6 py-3 rounded-lg w-full">
Add to Cart
</button>

</div>

</div>

)

}