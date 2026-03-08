"use client"

export default function Testimonials(){

const testimonials=[

{
name:"Ananya Mehta",
role:"Interior Designer",
quote:"Beautiful craftsmanship and elegant décor pieces that elevate interiors."
},

{
name:"Rohit Kapoor",
role:"Architect",
quote:"The mandala collection adds a perfect blend of tradition and modern design."
},

{
name:"Neha Shah",
role:"Home Stylist",
quote:"Exceptional quality and visually stunning décor elements."
}

]

return(

<section className="bg-gray-100 py-28">

<div className="max-w-7xl mx-auto px-8">

<h2 className="text-4xl font-semibold tracking-tight text-center mb-20">
What Designers Say
</h2>

<div className="grid md:grid-cols-3 gap-10">

{testimonials.map((t,i)=>(

<div
key={i}
className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
>

<p className="text-gray-600 mb-6">
“{t.quote}”
</p>

<h4 className="font-medium">
{t.name}
</h4>

<p className="text-sm text-gray-500">
{t.role}
</p>

</div>

))}

</div>

</div>

</section>

)

}