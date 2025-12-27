import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
// import logo from '../assets/logo.jpg';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // const scrollToSection = (id: string) => {
  //   const navbarHeight = 64; // h-16 = 64px

  //   const el = document.getElementById(id);
  //   if (el) {
  //     const y =
  //       el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

  //     window.scrollTo({ top: y, behavior: 'smooth' });
  //     setIsOpen(false);
  //   }
  // };

  const navigateAndScroll = (id: string) => {
    navigate(`/#${id}`);
    setIsOpen(false);
  };

  return (
    <nav
      className='
        fixed top-0 left-0 w-full z-50
        bg-[rgba(0,21,41,0.8)]
        backdrop-blur-[10px]
        border-b border-white/10
        shadow-[0_4px_20px_rgba(0,0,0,0.15)]
      '
    >
      {/* NAVBAR */}
      <div className='w-full px-4'>
        <div className='flex items-center justify-between h-16 max-w-7xl mx-auto'>
          <Link
            to='/'
            className='flex items-center gap-2 text-xl font-bold text-white'
          >
            <img
              src='/nav_logo.jpeg'
              alt='Logo'
              className='h-12 w-16 rounded-sm'
            />
            <span>AB Institute</span>
          </Link>

          {/* Desktop */}
          <div className='hidden md:flex items-center gap-8 text-white'>
            <button onClick={() => navigate('/')} className='hover:opacity-80'>
              About
            </button>
            <Link to='/pricing' className='hover:opacity-80'>
              Course
            </Link>

            <Link to='/pricing' className='hover:opacity-80'>
              Pricing
            </Link>
            <button
              onClick={() => navigateAndScroll('testimonials')}
              className='hover:opacity-80'
            >
              Success Stories
            </button>

            <button
              onClick={() => navigateAndScroll('faq')}
              className='hover:opacity-80'
            >
              FAQ
            </button>

            <Button
              onClick={() =>
                (window.location.href = 'https://abdash.netlify.app/auth')
              }
              className='
                bg-white/90 text-[#001529]
                hover:bg-white
                backdrop-blur
              '
            >
              Login
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(true)}
            className='md:hidden text-white'
          >
            <Menu className='h-6 w-6' />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-[100] md:hidden ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`
            absolute top-0 left-0 w-full sm:w-[320px]
            bg-[rgba(0,21,41,0.9)]
            backdrop-blur-[12px]
            text-white
            shadow-2xl
            transform transition-transform duration-300
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          {/* Header */}
          <div className='flex items-center justify-between h-16 px-4 border-b border-white/10'>
            <span className='text-lg font-semibold'>Menu</span>
            <button onClick={() => setIsOpen(false)}>
              <X className='h-6 w-6 text-white' />
            </button>
          </div>

          {/* CONTENT */}
          <div className='px-6 py-8 flex flex-col items-center gap-6'>
            <button
              onClick={() => navigateAndScroll('about')}
              className='hover:opacity-80'
            >
              About
            </button>
            <Link
              to='/pricing'
              onClick={() => setIsOpen(false)}
              className='hover:opacity-80'
            >
              Course
            </Link>

            <Link
              to='/pricing'
              onClick={() => setIsOpen(false)}
              className='hover:opacity-80'
            >
              Pricing
            </Link>
            <button
              onClick={() => navigateAndScroll('testimonials')}
              className='hover:opacity-80'
            >
              Success Stories
            </button>

            <button
              onClick={() => navigateAndScroll('faq')}
              className='hover:opacity-80'
            >
              FAQ
            </button>

            <Button
              onClick={() =>
                (window.location.href = 'https://abdash.netlify.app/auth')
              }
              className='
                bg-white/90 text-[#001529]
                hover:bg-white
                w-full mt-4
                backdrop-blur
              '
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
