"use client"

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
      <MegaHero />

      {/* LUXURY SHOWCASE */}
      <LuxuryShowcase />

      {/* COLLECTION GRID */}
      <CollectionGrid />

      {/* SHOP THE ROOM */}
      <ShopTheRoom />

      {/* SHOP BY ROOM */}
      <ShopByRoom />

      {/* BRAND STORY */}
      <BrandStory />

      {/* TESTIMONIALS */}
      <Testimonials />

    </main>

  )

}