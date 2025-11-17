"use client";
import Image from 'next/image';
import React from 'react'
import { TypewriterClass } from 'typewriter-effect';
import Typewriter from 'typewriter-effect';
import { BsArrowRight } from "react-icons/bs";
import ParticlesHero from './ParticleBackground';




const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesHero />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center">
  <Image 
    src="/images/s1.jpg" 
    alt="heroimage" 
    width={130} 
    height={130} 
    className="rounded-full border-8 border-[#0c0c48aa]"
  />


        <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>
          Creating web products, <br /> brands,
          <span className='text-cyan-200'>and experiences.</span>
        </h1>
        <h2 className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>
          Hi! I'm Hirusha Maduranga - A passionate 
          <span className='text-cyan-200 font-bold'>
            <Typewriter
  options={{
    strings: ['Frontend Developer',
                'Backend Developer', 
                'Web Developer'],
    autoStart: true,
    loop: true,
    deleteSpeed:50,
    wrapperClassName:"pl-2",
  }}
/>
         
          </span>
        </h2>
        <button className="mt-6 px-10 bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium">
          <span> See My Work</span>
          <BsArrowRight  className="w-5 h-10 ml-2 inline-block"/>

        </button>
      </div>
    </div>
  );
};

export default Hero
