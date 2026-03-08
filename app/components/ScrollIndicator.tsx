"use client"

import { useEffect, useState } from "react"

export default function ScrollIndicator() {

  const [scroll,setScroll] = useState(0)

  useEffect(()=>{

    const handleScroll = () => {

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const scrollPosition = window.scrollY

      const progress = (scrollPosition / totalHeight) * 100

      setScroll(progress)

    }

    window.addEventListener("scroll",handleScroll)

    return () => window.removeEventListener("scroll",handleScroll)

  },[])


  const scrollTop = () => {

    window.scrollTo({
      top:0,
      behavior:"smooth"
    })

  }


  return (

    <>
    
      {/* PROGRESS BAR */}

      <div
        className="fixed top-0 left-0 h-[3px] bg-yellow-500 z-[60] transition-all"
        style={{ width:`${scroll}%` }}
      />


      {/* BACK TO TOP BUTTON */}

      <button
        onClick={scrollTop}
        className="fixed bottom-20 right-6 bg-black text-white w-10 h-10 rounded-full shadow-lg hover:scale-110 transition"
      >
        ↑
      </button>

    </>

  )

}