import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CourseFeatures from '@/components/CourseFeatures';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const el = document.getElementById(location.hash.replace('#', ''));

    if (el) {
      const navbarHeight = 64;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      setTimeout(() => {
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <div className='min-h-screen'>
      <Navbar />
      <Hero />
      <About />

      {/* ✅ DEFINITIVE SCROLL TARGET */}
      <section id='pricing'>
        <Pricing />
      </section>

      <CourseFeatures />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
