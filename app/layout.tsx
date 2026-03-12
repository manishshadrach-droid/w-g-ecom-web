import "./globals.css"
import type { Metadata } from "next"

import { Yatra_One, Cinzel_Decorative } from "next/font/google"

import Navbar from "./components/Navbar"
import CartDrawer from "./components/CartDrawer"
import Footer from "./components/Footer"
import ScrollIndicator from "./components/ScrollIndicator"
import WhatsAppFloat from "./components/WhatsAppFloat"
import MiniCart from "./components/MiniCart"


/* Sanskrit-style hero font */

const yatra = Yatra_One({
  weight: "400",
  subsets: ["latin","devanagari"],
  variable: "--font-cursive",
  display: "swap"
})


/* Navbar brand font */

const cinzelDecor = Cinzel_Decorative({
  subsets:["latin"],
  weight:["700","900"],
  variable:"--font-cinzelDecor",
  display:"swap"
})


export const metadata: Metadata = {
  title: "पोकर | Pokar Home Decors",
  description: "Premium handcrafted décor for modern interiors",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="en" className={`${yatra.variable} ${cinzelDecor.variable}`}>

      <body className="bg-white text-black antialiased">

        <Navbar />

        <main>
          {children}
        </main>

        <CartDrawer />

        <ScrollIndicator />

        <Footer />

        <WhatsAppFloat />

        <MiniCart />

      </body>

    </html>

  )

}