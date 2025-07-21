import image_data from '../assets/images/Review_Image.png'
const testimonials = [
  {
    name: "Amrita Shinde",
    role: "Banker",
    image: "https://i.pravatar.cc/150?img=47",
    message: `Finally, a drink that's actually healthy and fun! I have tried so many 'healthy' drinks, but they either taste terrible or are packed with hidden ingredients. But Misfits actually gets it right!`,
  },
  {
    name: "Rahul Verma",
    role: "Fitness Coach",
    image: "https://i.pravatar.cc/150?img=12",
    message: `Misfits has become my go-to post-workout drink. It's refreshing, guilt-free, and tastes amazing. Love that it's made with real ingredients.`,
  },
  {
    name: "Sneha Patil",
    role: "Nutritionist",
    image: "https://i.pravatar.cc/150?img=65",
    message: `It’s rare to find a drink that aligns with my values as a nutritionist and also tastes this good. Misfits is doing it right!`,
  },
  {
    name: "Vikram Desai",
    role: "Entrepreneur",
    image: "https://i.pravatar.cc/150?img=33",
    message: `I've replaced soda with Misfits. It’s light, flavorful, and doesn’t leave that artificial aftertaste. Game changer!`,
  },
];

const Reviews = () => {
  return (
    <div className="bg-[#FE5E33] w-full py-10 px-4 md:px-10">
     <div className='container py-5 pb-10 mx-auto text-white'  style={{ fontFamily: 'OntrobucjDemo, sans-serif' }}>
        <h1 className='text-4xl'>Testimonial </h1>
      </div>
      <div className="flex container mx-auto space-x-6 overflow-x-auto no-scrollbar pb-4">
         <div className="min-w-[300px] max-w-[350px] md:max-w-[450px] overflow-hidden h-[400px] md:h-[600px] flex-shrink-0 flex flex-col rounded-3xl bg-white shadow-lg">
           <img src={image_data} alt="" className="w-full h-full object-cover"/>
         </div>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-[350px] md:max-w-[450px] h-[400px] md:h-[600px] flex-shrink-0 flex flex-col rounded-3xl bg-white shadow-lg"
          >
            <div className="flex-1 p-6 md:p-10 text-xl md:text-3xl leading-relaxed">
              <p>"{testimonial.message}"</p>
            </div>
             <div className="px-6 md:px-8 py-6 flex items-center gap-4">
               <img
                 src={testimonial.image}
                 alt={testimonial.name}
                 className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover "
               />
               <div>
                 <h1
                   style={{ fontFamily: 'OntrobucjDemo, sans-serif' }}
                   className="text-lg md:text-xl"
                 >
                   {testimonial.name}
                 </h1>
                 <h2
                   style={{ fontFamily: 'HelveticaNowText-Medium, sans-serif' }}
                   className="text-sm md:text-base opacity-70"
                 >
                   {testimonial.role}
                 </h2>
               </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
