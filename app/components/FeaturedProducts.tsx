"use client"

import Image from "next/image"
import Link from "next/link"
import { useCartStore } from "@/lib/store/cartStore"
import { useState } from "react"
import ProductQuickView from "./ProductQuickView"

const products=[

{
id:1,
slug:"mandala1",
name:"Mandala Wall Art – Classic",
price:2999,
image:"/product/mandala1.jpg"
},

{
id:2,
slug:"mandala2",
name:"Mandala Wall Art – Premium",
price:3499,
image:"/product/mandala2.jpg"
},

{
id:3,
slug:"mandala3",
name:"Mandala Wall Art – Royal",
price:3999,
image:"/product/mandala3.jpg"
}

]

export default function FeaturedProducts(){

const addToCart = useCartStore((state)=>state.addToCart)

const [selectedProduct,setSelectedProduct]=useState(null)

return(

<section className="bg-white">

<div className="max-w-7xl mx-auto px-8">

<h2 className="text-4xl font-semibold tracking-tight text-center mb-20">
Featured Products
</h2>

<div className="grid md:grid-cols-3 gap-14">

{products.map(product=>(

<div
key={product.id}
className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-500 overflow-hidden"
>

<div className="relative h-80 overflow-hidden">

<Link href={`/product/${product.slug}`}>

<Image
src={product.image}
alt={product.name}
fill
className="object-cover group-hover:scale-105"
/>

</Link>

<button
onClick={()=>setSelectedProduct(product)}
className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition shadow"
>
Quick View
</button>

</div>

<div className="p-6">

<h3 className="text-lg font-medium mb-1">
{product.name}
</h3>

<p className="text-gray-500 text-sm mb-5">
₹{product.price}
</p>

<button
onClick={()=>addToCart(product)}
className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
>
Add to Cart
</button>

</div>

</div>

))}

</div>

</div>

<ProductQuickView
product={selectedProduct}
onClose={()=>setSelectedProduct(null)}
/>

</section>

)

}