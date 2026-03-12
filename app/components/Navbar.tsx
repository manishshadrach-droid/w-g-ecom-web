"use client"

import Link from "next/link"
import { useCartStore } from "@/lib/store/cartStore"
import { useEffect, useState } from "react"
import { ShoppingBag } from "lucide-react"

export default function Navbar(){

const items = useCartStore((state)=>state.items)
const toggleCart = useCartStore((state)=>state.toggleCart)

const [scrolled,setScrolled] = useState(false)
const [megaOpen,setMegaOpen] = useState(false)

useEffect(()=>{

const handleScroll = ()=>{
setScrolled(window.scrollY > 20)
}

window.addEventListener("scroll",handleScroll)

return ()=> window.removeEventListener("scroll",handleScroll)

},[])

return(

<header
className={`fixed top-0 w-full z-50 transition-all duration-500
${scrolled
? "bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm"
: "bg-transparent"
}`}
>

<div className="max-w-7xl mx-auto px-10 py-6 grid grid-cols-3 items-center">

{/* LOGO */}

<div className="flex items-center">

<h1 className="navbar-brand">
POKAR
</h1>

</div>
{/* NAVIGATION */}

<nav className="hidden md:flex justify-center gap-14 text-[13px] tracking-[0.25em] uppercase text-gray-800">

<Link href="/" className="hover:text-[#C6A969] transition">
Home
</Link>

<div
className="relative"
onMouseEnter={()=>setMegaOpen(true)}
onMouseLeave={()=>setMegaOpen(false)}
>

<span className="cursor-pointer hover:text-[#C6A969] transition">
Shop
</span>

{megaOpen &&(

<div className="absolute left-1/2 -translate-x-1/2 top-12 w-[720px] bg-white text-black p-10 rounded-2xl shadow-2xl grid grid-cols-3 gap-10 border border-gray-100">

<div>

<h4 className="font-semibold mb-4 text-sm tracking-wide">
Wall Decor
</h4>

<Link href="/product/mandala1" className="block mb-2 hover:text-[#C6A969] transition">
Mandala Art
</Link>

<Link href="/product/mandala2" className="block mb-2 hover:text-[#C6A969] transition">
Sacred Geometry
</Link>

</div>

<div>

<h4 className="font-semibold mb-4 text-sm tracking-wide">
Table Decor
</h4>

<Link href="#" className="block mb-2 hover:text-[#C6A969] transition">
Centerpieces
</Link>

<Link href="#" className="block mb-2 hover:text-[#C6A969] transition">
Decor Bowls
</Link>

</div>

<div>

<h4 className="font-semibold mb-4 text-sm tracking-wide">
Collections
</h4>

<Link href="#collection" className="block mb-2 hover:text-[#C6A969] transition">
Premium Collection
</Link>

<Link href="#products" className="block mb-2 hover:text-[#C6A969] transition">
Best Sellers
</Link>

</div>

</div>

)}

</div>

<Link href="#collection" className="hover:text-[#C6A969] transition">
Collections
</Link>

<Link href="#about" className="hover:text-[#C6A969] transition">
About
</Link>

</nav>

{/* CART */}

<div className="flex justify-end">

<button
onClick={toggleCart}
className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#C6A969] text-black hover:scale-105 hover:bg-[#b89a58] transition shadow-md"

>

<ShoppingBag size={18}/>

{items.length>0 &&(

<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
{items.length}
</span>

)}

</button>

</div>

</div>

</header>

)

}
