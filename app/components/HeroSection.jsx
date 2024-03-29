"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';




const HeroSection = () => {
  return (
    <section>
      <div className = "grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className ="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hi, I'm {" "} 
            </span>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Stefan V. Codrean',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'a student passionate about coding',
        2000,
        'a Gym Enthusiast',
        2000

      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />

          </h1>
            <p className = "text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"> Description</p>
            <div>
              <button className="px-6 py-3 w-full sm:w-fit mr-4 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Resume</button>
            </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="mt-8 lg:mt-16 rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image  
            src = "/images/profile-pic.jpg"
            alt="profile image"
            className = "absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={240}
            height={240}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
