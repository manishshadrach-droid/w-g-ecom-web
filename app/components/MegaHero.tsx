"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function MegaHero(){

return(

<section className="relative h-[90vh] flex items-center justify-center text-white">

<Image
src="/hero/hero-new.jpg"
alt="Hero"
fill
className="object-cover"
/>

<div className="absolute inset-0 bg-black/40"/>

<motion.div
initial={{opacity:0, y:40}}
animate={{opacity:1, y:0}}
transition={{duration:1}}
className="relative text-center"
>

<h1 className="text-5xl font-semibold tracking-tight mb-6">
Elevate Your Living Space
</h1>

<p className="text-lg text-gray-200 mb-8">
Timeless décor crafted with artistry and elegance.
</p>

<button className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
Explore Collection
</button>

</motion.div>

</section>

)

}