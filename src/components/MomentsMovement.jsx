import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Import your images
import image_data from '../assets/images/Review_Image.png';
import Image1 from '../assets/images/Image_1.png';
import Image2 from '../assets/images/Image_2.png';
import Image3 from '../assets/images/Image_3.png';
import Image4 from '../assets/images/Image_4.png';

const testimonials = [
  { image: Image1 },
  { image: Image2 },
  { image: Image3 },
  { image: Image4 },
];

const MomentsMovement = () => {
  const sliderRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      const totalWidth = slider.scrollWidth / 2;

      // Set the initial position to mid-way to eliminate visible space
      gsap.set(slider, {
        x: -totalWidth,
      });

      // Animate it to the right continuously
      gsap.to(slider, {
        x: 0,
        duration: 40,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const renderCards = () => (
    <>
      {/* Static first image */}
      <div className="testimonial-card min-w-[300px] max-w-[350px] md:max-w-[450px] h-[400px] md:h-[600px] flex-shrink-0 flex flex-col rounded-3xl bg-white shadow-lg overflow-hidden">
        <img src={image_data} alt="Main" className="w-full h-full object-cover" />
      </div>

      {/* Dynamic testimonial cards */}
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="testimonial-card min-w-[300px] max-w-[350px] md:max-w-[450px] h-[400px] md:h-[600px] flex-shrink-0 flex flex-col rounded-3xl bg-white shadow-lg overflow-hidden"
        >
          <img
            src={testimonial.image}
            alt={`testimonial-${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </>
  );

  return (
    <div className="w-full py-10 px-4 md:px-10 overflow-hidden bg-[#FFF2DD]">
      <div className="container py-5 pb-10 mx-auto text-[#13006F]" style={{ fontFamily: 'OntrobucjDemo, sans-serif' }}>
        <h1 className="text-4xl 2xl:text-5xl">Moments From the Movement</h1>
      </div>

      <div className="relative container mx-auto overflow-hidden">
        {/* Use gap-0 to eliminate any spacing between cards */}
        <div ref={sliderRef} className="flex gap-5 w-max">
          {renderCards()}
          {renderCards() /* Duplicate for seamless loop */}
        </div>
      </div>
    </div>
  );
};

export default MomentsMovement;
