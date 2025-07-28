import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '../components/Header'
import Icon_1 from '../assets/images/Icons/Icon_1.svg'
import Icon_2 from '../assets/images/Icons/Icon_2.svg'
import Icon_3 from '../assets/images/Icons/Icon_3.svg'
import Icon_4 from '../assets/images/Icons/Icon_4.svg'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import Section_2 from '../components/Section_2' 
import ScrollCards from '../components/ScrollCards'
import MomentsMovement from '../components/MomentsMovement'
import image_data from '../assets/images/Review_Image.png';

const Indexpage = () => {
  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const stripRef = useRef(null)
  const iconsRef = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline()

      // Animate FU*K and SODA from left
      timeline.from('.text-left-entry', {
        x: '-100vw',
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2
      })

      // Animate REGULAR from right
      timeline.from('.text-right-entry', {
        x: '100vw',
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      })

      // Define the looping image animation function
      const animateImage = () => {
        gsap.fromTo(
          imageRef.current,
          { y: '-100%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => {
              gsap.to(imageRef.current, {
                delay: 1,
                y: '100vh',
                duration: 1.5,
                ease: 'power1.in',
                onComplete: animateImage
              })
            }
          }
        )
      }

      // Looping strip animation
      gsap.fromTo(
        stripRef.current,
        { x: 0 },
        {
          x: () => `-${stripRef.current.scrollWidth / 2}px`,
          duration: 120,
          ease: 'linear',
          repeat: -1
        }
      )

      // Trigger image animation after all text animations
      timeline.add(() => {
        gsap.set(imageRef.current, { opacity: 0, y: '-100%' })
        animateImage()
      })

      // Scroll animation for feature icons
      gsap.fromTo(
        iconsRef.current.querySelectorAll('.feature-icon'),
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: iconsRef.current,
            start: 'top 80%',
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className='relative overflow-hidden bg-[#FDF2DD] cursor-default'>
      <div className='absolute top-0 z-50 w-full'>
        <Header />
      </div>

      {/* Section 1 */}
      <div ref={containerRef}>
        <div className='bg-[#FE5E33] h-[100dvh] md:h-[95dvh] overflow-hidden relative'>
          {/* Mobile Text Block */}
          <div className='absolute md:hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[75px] leading-[1.1] text-center z-30'>
            <h1 className='text-white text-left-entry' style={{ fontFamily: 'OntrobucjDemo, sans-serif' }}>Not</h1>
            <h1 className='text-[125px] text-white text-right-entry' style={{ fontFamily: 'OntrobucjDemo, sans-serif' }}>Your</h1>
            <h1 className='text-white text-left-entry' style={{ fontFamily: 'OntrobucjDemo, sans-serif' }}>No2</h1>
          </div>

          {/* Desktop Center REGULAR */}
          <div className='absolute hidden md:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center'>
            <h1 className='text-[100px] sm:text-[150px] md:text-[180px] lg:text-[220px] xl:text-[280px] text-white text-right-entry' style={{ fontFamily: 'OntrobucjDemo, sans-serif' }}>Your</h1>
          </div>

          {/* Falling Image */}
          {/* <img ref={imageRef} src={Sodaimage} alt='falling soda' className="w-[290px] sm:w-[350px] md:w-[400px] lg:w-[475px] absolute mt-32 md:mt-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0" /> */}

          {/* Desktop FU*K and SODA */}
          <div className='absolute hidden md:flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col gap-0 items-center z-50 text-center'>
            <h1 className='text-[70px] sm:text-[60px] md:text-[100px] lg:text-[130px] xl:text-[140px] text-white text-left-entry' style={{ fontFamily: 'OntrobucjDemo, sans-serif' }}>Not</h1>
            <div className='h-[45px] sm:h-[100px] md:h-[180px] lg:h-[220px] xl:h-[240px]' />
            <h1 className='text-[70px] sm:text-[60px] md:text-[100px] lg:text-[130px] xl:text-[140px] text-white text-left-entry' style={{ fontFamily: 'OntrobucjDemo, sans-serif' }}>No2</h1>
          </div>
        </div>
      </div>

      {/* Section 2 - Marquee */}
      <Section_2/>

      {/* Section 4 - Features */}
      <div className='container  mx-auto px-5 pt-14 flex flex-col gap-3 md:gap-6 items-center justify-center'>
        <h1 style={{ fontFamily: 'OntrobucjDemo, sans-serif' }} className='text-[#13006F] text-3xl md:text-6xl font-bold text-center'>From Cravings. Built Without Compromise.</h1>
        <h1 style={{ fontFamily: 'HelveticaNowText-Medium, sans-serif' }} className='text-[#818386] text-xl md:text-4xl font-bold text-center'>P.S. No junk. No guilt. No BS.</h1>
        <div className='py-3'>
          <p className='text-sm md:text-xl text-[#616161] text-center'>
            Most fizzy drinks are fun — until you read the label. Sugar bombs. Chemical sweeteners. Fake flavours. Preservatives you can't pronounce.
            We were done with it. That's where SIRIK comes in. We're not here to cancel soda — we're here to redefine it. SIRIK is a new-age carbonated drink
            built for people who want the fizz, the flavour, the vibe — without the guilt. We use real, natural ingredients like Nannari root,
            known for its cooling and gut-friendly properties, and pair it with Low sugar, no preservatives, prebiotics, and clean flavours that actually taste good.
            Whether you're finishing a workout, grabbing lunch, or just craving something cold — SIRIK gives you that same satisfying soda kick, just cleaner.
          </p>
        </div>

        <div ref={iconsRef} className='flex flex-wrap gap-5 md:gap-20 justify-center'>
          <div className='feature-icon  flex flex-col items-center'>
            <img src={Icon_1} alt='Low Sugar' />
            <p className='text-xl text-center mt-2' style={{ fontFamily: 'HelveticaNowText-Medium, sans-serif' }}>Low Sugar</p>
          </div>
          <div className='feature-icon flex flex-col items-center'>
            <img src={Icon_2} alt='Prebiotic' />
            <p className='text-xl text-center mt-2' style={{ fontFamily: 'HelveticaNowText-Medium, sans-serif' }}>Prebiotic Fibers</p>
          </div>
          <div className='feature-icon flex flex-col items-center'>
            <img src={Icon_3} alt='Low Calorie' />
            <p className='text-xl text-center mt-2' style={{ fontFamily: 'HelveticaNowText-Medium, sans-serif' }}>Low Calorie</p>
          </div>
          <div className='feature-icon flex flex-col items-center'>
            <img src={Icon_4} alt='No Preservatives' />
            <p className='text-xl text-center mt-2' style={{ fontFamily: 'HelveticaNowText-Medium, sans-serif' }}>No Preservatives</p>
          </div>
        </div>
      </div>
      {/* Seaction 3 */}
     <div className="pt-20 px-4 container mx-auto overflow-hidden">
  <div className="bg-white rounded-2xl flex flex-col lg:flex-row py-5 px-4 md:px-8 lg:w-[80%] mx-auto">
    {/* Image Section */}
    <div className="flex-1 mb-6 lg:mb-0">
      <img src={image_data} alt="" className="w-full h-full object-cover rounded-2xl" />
    </div>

    {/* Text Section */}
    <div className="flex-1 lg:p-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left pb-3" style={{ fontFamily: 'OntrobucjDemo, sans-serif' }}>
        Meet the Mind <br className="hidden md:block" />Behind the Madness
      </h1>
      <hr className="my-2 border-gray-300" />
      <p className="text-sm md:text-base lg:text-lg pt-2 text-black/80 leading-relaxed">
        Hey! I’m Srikar YS — a former engineer, full-time flavour rebel, and unapologetic fizz lover.
        I didn’t grow up dreaming about beverages. I wasn’t born with a silver can in my hand. I came from chaos.
        From being let down by others and by the version of myself that forgot my own worth.
        There were moments I felt like I wasn’t even worth holding on to — easy to leave behind, easy to ignore.
        I was pushed down, deep into a place with no light, no clarity — just noise and questions.
        But what I thought was a pit…Turned out to be a forge. “A forge doesn’t save you. It remakes you.” They create weapons. Warriors. Legends.
        That’s where SIRIK was born. Not from a market trend or branding playbook — but from pure, unfiltered fire.
        This isn’t just a beverage brand. It’s proof that you can be broken, underestimated, even forgotten — And still rise. Sharper than ever.
        I didn’t come from a boardroom. I came from the fire.
      </p>
    </div>
  </div>
</div>

      <ScrollCards/>
      
      <div className='overflow-hidden whitespace-nowrap h-[100px] bg-white'>
        <div className='marquee-strip inline-block whitespace-nowrap mt-5 text-black text-3xl font-semibold tracking-wide' ref={stripRef}>
          {[...Array(2)].map((_, outerIdx) => (
            <span key={outerIdx}>
              {Array(10).fill("TRY SIRIK • BUY SIRIK • NATURAL. PREBIOTIC. • AVAILABLE NOW • ZERO GUILT • GUT-LOVING GOODNESS").map((text, i) => (
                <span key={i} className='mx-4 inline-block'>{text}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <Reviews/>
      <MomentsMovement/>
      <div className='w-full bg-[#7E27FF]'>
        <Footer/>
      </div>
    </div>
  )
}

export default Indexpage
