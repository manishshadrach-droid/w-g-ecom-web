"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import WaterRipple from "./WaterRipple"

export default function MegaHero() {

  const [pos, setPos] = useState({ x: 50, y: 50 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {

    const rect = e.currentTarget.getBoundingClientRect()

    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setPos({ x, y })

  }

  return (

    <section
      onMouseMove={handleMove}
      className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center"
    >

      {/* Background Image */}

      <Image
        src="/hero/hero-new.jpg"
        alt="Luxury Interior"
        fill
        priority
        sizes="100vw"
        className="object-cover hero-zoom brightness-[0.9] contrast-110"
      />

      {/* Water Ripple */}

      <WaterRipple />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/40" />

      {/* Floating Dust */}

      <div className="hero-dust">

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>

      {/* Cursor Light */}

      <div
        className="hero-distortion"
        style={{
          "--x": `${pos.x}%`,
          "--y": `${pos.y}%`
        } as React.CSSProperties}
      />

      {/* Hero Content */}

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="relative z-10 text-center px-6">

          {/* Brand */}

          <motion.div
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:1 }}
            className="mb-6"
          >

            <div className="hero-brand smoke-container">

              <span>P</span>
              <span>O</span>
              <span>K</span>
              <span>A</span>
              <span>R</span>

            </div>

          </motion.div>

          {/* Subtitle */}

          <motion.h2
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.3 }}
            className="text-white/90 tracking-[0.5em] uppercase text-sm mb-8"
          >
            Luxury Home Décor
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.6 }}
            className="text-gray-200 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Discover handcrafted décor pieces designed to transform
            modern living spaces into timeless luxury environments.
          </motion.p>

          {/* Button */}

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.9 }}
          >

            <Link
              href="/shop"
              className="inline-block bg-[#C6A969] text-black px-10 py-4 rounded-md text-sm tracking-[0.2em] uppercase hover:bg-[#b89a58] transition"
            >
              Explore Collection
            </Link>

          </motion.div>

        </div>

      </div>

    </section>

  )

}