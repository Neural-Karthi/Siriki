import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import can from '../assets/images/can.webp'
import strip from '../assets/images/strip-1.svg'
import strip1 from '../assets/images/strip-2.svg'

gsap.registerPlugin(ScrollTrigger)

const ScrollingTin = () => {
  const containerRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const scrollDistance = isMobile ? 750 : 1540 // in pixels

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { y: -550 },
        {
          y: scrollDistance,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 50%',
            end: 'bottom bottom',
            scrub: true,
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className='h-[1200px] md:h-[2160px] overflow-hidden w-full flex justify-center items-start relative py-2'
    >
      <img
        ref={imageRef}
        src={can}
        alt='Soda Can'
        className='w-[275px] absolute z-30 md:w-[350px]'
      />
      <div className='absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 z-40 w-full'>
        <img
          src={strip1}
          alt=''
          className='w-full absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2'
        />
        <img src={strip} alt='' className='w-full' />
      </div>
      <div className='absolute bottom-0 z-0'>
        <h1 style={{ fontFamily: 'OntrobucjDemo, sans-serif' }} className='text-[150px] lg:text-[350px] text-[#FE5E33]'>SIRIK</h1>
      </div>
    </div>
  )
}

export default ScrollingTin
