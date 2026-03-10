import MegaHero from "./components/MegaHero"
import LuxuryShowcase from "./components/LuxuryShowcase"
import CollectionGrid from "./components/CollectionGrid"
import ShopTheRoom from "./components/ShopTheRoom"
import ShopByRoom from "./components/ShopByRoom"
import BrandStory from "./components/BrandStory"
import Testimonials from "./components/Testimonials"


export default function HomePage() {

return (

<main className="pt-24">

{/* HERO */}

<MegaHero/>

{/* IKEA STYLE PROMO SECTION */}

<LuxuryShowcase/>

{/* PRODUCT COLLECTION GRID */}

<CollectionGrid/>

{/* SHOP THE ROOM */}

<ScrollReveal>
<ShopTheRoom/>
</ScrollReveal>

{/* SHOP BY ROOM */}

<ScrollReveal>
<ShopByRoom/>
</ScrollReveal>

{/* BRAND STORY */}

<ScrollReveal>
<BrandStory/>
</ScrollReveal>

{/* TESTIMONIALS */}

<ScrollReveal>
<Testimonials/>
</ScrollReveal>

</main>

)

}