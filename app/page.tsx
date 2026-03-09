import MegaHero from "./components/MegaHero"
import FeaturedProducts from "./components/FeaturedProducts"
import BeforeAfterSlider from "./components/BeforeAfterSlider"
import ShopTheRoom from "./components/ShopTheRoom"
import ShopByRoom from "./components/ShopByRoom"
import BrandStory from "./components/BrandStory"
import Testimonials from "./components/Testimonials"
import InspirationGrid from "./components/InspirationGrid"
import ScrollReveal from "./components/ScrollReveal"
import PageTransition from "./components/PageTransition"
import { Product } from "@/types/product"

import Link from "next/link"
import Image from "next/image"

export default function HomePage(){

return(

<main className="pt-24">

<MegaHero/>

<ScrollReveal>
<section id="products">
<FeaturedProducts/>
</section>
</ScrollReveal>

<ScrollReveal>
<ShopTheRoom/>
</ScrollReveal>

<ScrollReveal>
<ShopByRoom/>
</ScrollReveal>

<ScrollReveal>
<BrandStory/>
</ScrollReveal>

<ScrollReveal>

<section className="max-w-7xl mx-auto px-8 py-24">

<h2 className="text-4xl font-semibold tracking-tight mb-16 text-center">
Transform Your Space
</h2>

<BeforeAfterSlider/>

</section>

</ScrollReveal>

<ScrollReveal>
<Testimonials/>
</ScrollReveal>

<ScrollReveal>
<InspirationGrid/>
</ScrollReveal>

</main>

)

}