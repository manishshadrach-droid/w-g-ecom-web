"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {

  return (

    <section
      className="h-[90vh] flex items-center justify-center text-white relative"
      style={{
        backgroundImage: "url('/hero/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative text-center max-w-xl">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mb-6"
        >
          Timeless Interior Luxury
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg mb-8"
        >
          Handcrafted decor pieces designed to transform your living space.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >

          <Link
            href="/shop"
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold"
          >
            Explore Collection
          </Link>

        </motion.div>

      </div>

    </section>

  )

}