import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Star, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-trading.jpg';

const Hero = () => {
  const scrollToEnroll = () => {
    document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='relative min-h-screen flex items-center pt-16'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        <img
          src={heroImage}
          alt='Professional stock trading setup'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80' />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* CENTERED CONTENT */}
        <div className='max-w-3xl mx-auto text-center animate-fade-in flex flex-col items-center'>
          <Badge className='mb-4 bg-success text-success-foreground border-0'>
            <Star className='h-4 w-4 mr-1 fill-current' />
            Limited Time Offer - Only 50 Seats Available
          </Badge>

          <h1 className='text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight'>
            <span className='text-accent'>Master F&O Trading </span>
            with 12 Power-Packed Webinars in 2 Weeks
          </h1>

          <p className='text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed'>
            Join our Advanced Candle Pattern & F&O Strategy Workshop — Now only
            1499 (excl. GST)
            <br />
            Only 50 seats available per batch.
          </p>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 mb-12 justify-center'>
            <Button
              onClick={() =>
                (window.location.href = 'https://abdash.netlify.app/auth')
              }
              size='lg'
              className='bg-accent hover:bg-accent/90 text-accent-foreground text-lg font-bold px-8 py-6 shadow-lg hover:shadow-xl transition-all'
            >
              Enroll Now
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>

            <Button
              onClick={() =>
                document
                  .getElementById('course')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              size='lg'
              variant='outline'
              className='bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8 py-6'
            >
              View Course Details
            </Button>
          </div>

          {/* Stats */}
          <div className='flex flex-wrap justify-center gap-8 text-center'>
            <div className='flex items-center gap-2 text-primary-foreground'>
              <Users className='h-5 w-5 text-accent' />
              <span className='font-semibold'>2000+ Students Trained</span>
            </div>

            <div className='flex items-center gap-2 text-primary-foreground'>
              <Clock className='h-5 w-5 text-accent' />
              <span className='font-semibold'>
                Live Webinar Sessions + Recordings
              </span>
            </div>

            <div className='flex items-center gap-2 text-primary-foreground'>
              <Star className='h-5 w-5 text-accent fill-accent' />
              <span className='font-semibold'>4.8/5 Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
