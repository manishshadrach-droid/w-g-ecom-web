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
      <head>
        {/* Luxury Typography */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap"
        />

        {/* Responsive viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="bg-[#F7F5F2] text-[#111111] antialiased">

                <Navbar />

        <main className="min-h-screen">
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