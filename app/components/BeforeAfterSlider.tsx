"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function BeforeAfterSlider(){

const [showAfter,setShowAfter]=useState(false)

useEffect(()=>{

const interval=setInterval(()=>{
setShowAfter(prev=>!prev)
},3000)

return ()=>clearInterval(interval)

},[])

return(

<div className="relative h-[520px] w-full rounded-xl overflow-hidden">

<Image
src="/before.jpg"
alt="Before"
fill
className={`object-cover transition-opacity duration-1000 ${
showAfter ? "opacity-0" : "opacity-100"
}`}
/>

<Image
src="/after.jpg"
alt="After"
fill
className={`object-cover transition-opacity duration-1000 ${
showAfter ? "opacity-100" : "opacity-0"
}`}
/>

</div>

)

}