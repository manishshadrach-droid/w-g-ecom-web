"use client"

import Link from "next/link"

export default function Footer(){

return(

<footer className="bg-[#111] text-white">

<div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-4 gap-12">

{/* BRAND */}

<div>

<h3 className="text-xl font-semibold mb-4">
Pokar Home
</h3>

<p className="text-gray-400 text-sm leading-relaxed">
Premium handcrafted décor pieces designed to elevate
modern interiors with timeless artistry.
</p>

</div>


{/* COLLECTIONS */}

<div>

<h4 className="font-medium mb-4">
Collections
</h4>

<ul className="space-y-2 text-gray-400 text-sm">

<li>
<Link href="/product/mandala1">
Mandala Wall Art
</Link>
</li>

<li>
<Link href="/product/mandala2">
Sacred Geometry
</Link>
</li>

<li>
<Link href="/product/mandala3">
Premium Decor
</Link>
</li>

</ul>

</div>


{/* SUPPORT */}

<div>

<h4 className="font-medium mb-4">
Customer Care
</h4>

<ul className="space-y-2 text-gray-400 text-sm">

<li>Shipping Policy</li>
<li>Returns</li>
<li>Privacy Policy</li>
<li>Contact Us</li>

</ul>

</div>


{/* NEWSLETTER */}

<div>

<h4 className="font-medium mb-4">
Design Inspiration
</h4>

<p className="text-gray-400 text-sm mb-4">
Get décor inspiration and exclusive collection updates.
</p>

<div className="flex">

<input
type="email"
placeholder="Your email"
className="px-4 py-2 text-black rounded-l-lg w-full"
/>

<button className="bg-yellow-500 text-black px-4 rounded-r-lg">
Join
</button>

</div>

</div>

</div>


{/* COPYRIGHT */}

<div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">

© {new Date().getFullYear()} Pokar Home. All rights reserved.

</div>

</footer>

)

}