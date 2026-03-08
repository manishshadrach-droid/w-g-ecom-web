"use client"

import { useCartStore } from "@/lib/store/cartStore"

export default function MiniCart(){

const cart = useCartStore(state=>state.cart)
const isOpen = useCartStore(state=>state.isCartOpen)
const toggleCart = useCartStore(state=>state.toggleCart)

return(

<div
className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-50 transform transition-transform
${isOpen ? "translate-x-0" : "translate-x-full"}
`}
>

<div className="p-6 border-b flex justify-between">

<h3 className="font-semibold text-lg">
Your Cart
</h3>

<button onClick={toggleCart}>
✕
</button>

</div>

<div className="p-6 space-y-4">

{cart.length===0 && (
<p className="text-gray-500">
Cart is empty
</p>
)}

{cart.map((item,i)=>(
<div key={i} className="flex justify-between">

<p>{item.name}</p>
<p>₹{item.price}</p>

</div>
))}

</div>

</div>

)

}