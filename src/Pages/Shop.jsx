import {useState} from 'react'
import Header from "../components/Header"
import { FaStar } from 'react-icons/fa';
import Footer from '../components/Footer';
import image_1 from '../assets/ProductImage/Image_1.png'

const Shop = () => {
  const [packSize, setPackSize] = useState(6);
  const [quantity, setQuantity] = useState(1);
  return (
    <div className=''>
       <div className="bg-[#FE5E33]">
         <Header darkcolor={true}/>
       </div>
       <div className=" pt-22 w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 justify-center">
      {/* Left Section - Image + Thumbnails */}
      <div className="flex flex-1 flex-col gap-10 items-center">
        <img
          src={image_1}
          alt="Grape Can"
          className="rounded-xl w-full h-[450px] object-cover"
        />

        {/* Thumbnails */}
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((_, idx) => (
            <div key={idx} className="w-16 h-16 bg-gray-300 rounded-lg" />
          ))}
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="flex-1 text-center lg:text-left">
        {/* Rating */}
        <div className="flex items-center justify-center lg:justify-start mb-2">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-xl" />
          ))}
          <FaStar className="text-yellow-400/50 text-xl" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-purple-700 uppercase">MR. RUCKUS - GRAPE</h1>
        <p className="text-gray-600 mt-2 mb-4">What makes us a “Misfit” in the soda industry.</p>

        {/* Pack Options */}
        <div className="flex gap-4 mb-4 justify-center lg:justify-start">
          <button
            onClick={() => setPackSize(6)}
            className={`px-4 py-2 rounded-md font-semibold ${
              packSize === 6 ? 'bg-black text-white' : 'bg-white text-black border'
            }`}
          >
            Pack of 6
          </button>
          <button
            onClick={() => setPackSize(12)}
            className={`px-4 py-2 rounded-md font-semibold ${
              packSize === 12 ? 'bg-black text-white' : 'bg-white text-black border'
            }`}
          >
            Pack of 12
          </button>
        </div>

        {/* Price and Quantity */}
        <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
          <span className="text-2xl font-bold">₹{packSize === 6 ? 450 : 850}.00</span>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-16 px-2 py-1 border rounded text-center"
          />
        </div>

        {/* Add to Cart Button */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-5 px-6 rounded-full w-full">
          ADD TO CART
        </button>

        {/* Flavour */}
        <div className="mt-6">
          <h2 className="font-bold text-lg mb-2">FLAVOURS</h2>
          <div className="inline-block p-2 border-2 border-purple-600 rounded-lg">
            <img src={''} alt="Grape" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
    <div className='w-full mt-12 bg-[#7E27FF]'>
        <Footer/>
      </div>
    </div>
  )
}

export default Shop
