import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import companylogo from '../assets/images/logo.webp'

const Header = (props) => {
  const navigate = useNavigate()
  const cartCount = 3

  return (
    <header className={`h-[75px] container mx-auto flex items-center justify-between px-4 text-white `}>
      {/* Left: Menu icon - only on mobile */}
      <div className='flex-1 flex items-center justify-start md:hidden'>
        <MenuOutlined className='text-2xl cursor-pointer' />
      </div>

      {/* Center: Company Logo */}
      <div className='flex-1 flex items-center justify-center md:justify-start'>
        <img
          src={companylogo}
          alt='Company Logo'
          onClick={() => navigate('/')}
          className='w-[120px] object-contain cursor-pointer'
        />
      </div>

      {/* Right: Nav (desktop) + Cart */}
      <div className='flex-1 flex items-center justify-end gap-6'>
        <nav
          className='hidden md:flex gap-6 text-xl'
          style={{ fontFamily: 'HelveticaNowText-Medium, sans-serif' }}
        >
          <a href='shop' className='hover:text-primary transition'>Shop</a>
          <a href='about' className='hover:text-primary transition'>About</a>
          <a href='contact' className='hover:text-primary transition'>Contact</a>
        </nav>

        {/* Shopping Cart Icon */}
        <div className='relative cursor-pointer' onClick={() => navigate('/cart')}>
          <ShoppingCartOutlined className='text-3xl' />
          {cartCount > 0 && (
            <span className={`absolute -top-1 -right-2 ${props.darkcolor?'bg-[#008cff] text-white':'bg-red-500'}  text-xs w-5 h-5 flex items-center justify-center rounded-full`}>
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
