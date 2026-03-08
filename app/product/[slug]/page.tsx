import ProductGallery from "@/app/components/ProductGallery"
import RelatedProducts from "@/app/components/RelatedProducts"

const products = [

{
id:1,
slug:"mandala1",
name:"Mandala Wall Art – Classic",
price:2999,
images:[
"/product/mandala1.jpg",
"/product/mandala2.jpg",
"/product/mandala3.jpg"
],
description:"Elegant handcrafted mandala décor designed for modern interiors."
},

{
id:2,
slug:"mandala2",
name:"Mandala Wall Art – Premium",
price:3499,
images:[
"/product/mandala2.jpg",
"/product/mandala1.jpg",
"/product/mandala3.jpg"
],
description:"Premium mandala art crafted with intricate detailing."
},

{
id:3,
slug:"mandala3",
name:"Mandala Wall Art – Royal",
price:3999,
images:[
"/product/mandala3.jpg",
"/product/mandala1.jpg",
"/product/mandala2.jpg"
],
description:"Royal edition mandala wall décor with luxury finish."
}

]

export default async function ProductPage({ params }: any) {

const { slug } = await params

const product = products.find(p => p.slug === slug)

if(!product){
return <div className="p-20 text-center">Product not found</div>
}

return (

<>

<div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16">

{/* PRODUCT GALLERY */}

<ProductGallery images={product.images}/>


{/* PRODUCT DETAILS */}

<div>

<h1 className="text-4xl font-semibold tracking-tight mb-4">
{product.name}
</h1>

<p className="text-gray-600 mb-6">
{product.description}
</p>

<p className="text-2xl font-medium mb-6">
₹{product.price}
</p>

<button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
Add to Cart
</button>

</div>

</div>


{/* RELATED PRODUCTS */}

<RelatedProducts currentSlug={slug}/>

</>

)

}