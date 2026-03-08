import "./globals.css"
import type { Metadata } from "next"

import Navbar from "./components/Navbar"
import CartDrawer from "./components/CartDrawer"
import Footer from "./components/Footer"
import ScrollIndicator from "./components/ScrollIndicator"
import WhatsAppFloat from "./components/WhatsAppFloat"
import MiniCart from "./components/MiniCart"

export const metadata: Metadata = {
  title: "Pokar Home Decors",
  description: "Premium handcrafted décor for modern interiors",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">

        <Navbar />

        <main>
          {children}
        </main>

        <CartDrawer />

        <ScrollIndicator />

        <Footer />

        <WhatsAppFloat/>

        <MiniCart/>

      </body>
    </html>
  )
}