import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className='fixed top-0 left-0 w-full bg-background border-b z-50'>
      {/* NAVBAR */}
      <div className='w-full px-4'>
        <div className='flex items-center justify-between h-16 max-w-7xl mx-auto'>
          <Link to='/' className='flex items-center gap-2 text-xl font-bold'>
            <img src={logo} alt='Logo' className='h-12 w-12 rounded-sm' />
            <span className='text-primary'>AB Institute</span>
          </Link>

          {/* Desktop */}
          <div className='hidden md:flex items-center gap-8'>
            <button onClick={() => navigate('/')}>About</button>
            <button onClick={() => scrollToSection('course')}>Course</button>
            <Link to='/pricing'>Pricing</Link>
            <button onClick={() => scrollToSection('testimonials')}>
              Success Stories
            </button>
            <button onClick={() => scrollToSection('faq')}>FAQ</button>

            <Button
              onClick={() =>
                (window.location.href = 'https://abdash.netlify.app/auth')
              }
              className='bg-[#001F3F] text-white'
            >
              Login
            </Button>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setIsOpen(true)} className='md:hidden'>
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
          className={`absolute top-0 left-0 w-full sm:w-[320px]
          bg-white shadow-2xl transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {/* Header */}
          <div className='flex items-center justify-between h-16 px-4 border-b'>
            <span className='text-lg font-semibold'>Menu</span>
            <button onClick={() => setIsOpen(false)}>
              <X className='h-6 w-6' />
            </button>
          </div>

          {/* CONTENT — NO BLANK SPACE */}
          <div className='px-6 py-8 flex flex-col items-center gap-6'>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('course')}>Course</button>
            <Link to='/pricing' onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <button onClick={() => scrollToSection('testimonials')}>
              Success Stories
            </button>
            <button onClick={() => scrollToSection('faq')}>FAQ</button>

            <Button
              onClick={() =>
                (window.location.href = 'https://abdash.netlify.app/auth')
              }
              className='bg-[#001F3F] text-white w-full mt-4'
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
