"use client"

import Particles from "@tsparticles/react"

export default function SmokeText() {

  return (

    <div className="absolute inset-0 pointer-events-none">

      <Particles
        id="wood-dust"
        className="absolute inset-0"
        options={{

          fullScreen:false,

          particles:{
            number:{ value:70 },

            color:{ value:"#C6A969" },

            opacity:{ value:0.4 },

            size:{
              value:{ min:2, max:5 }
            },

            move:{
              enable:true,
              speed:0.6,
              random:true,
              outModes:{
                default:"out"
              }
            }
          },

          interactivity:{
            events:{
              onHover:{
                enable:true,
                mode:"repulse"
              }
            },

            modes:{
              repulse:{
                distance:120
              }
            }
          }

        }}
      />

    </div>

  )

}