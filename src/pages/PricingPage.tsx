import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Check,
  Clock,
  Zap,
  Shield,
  Users,
  TrendingUp,
  BookOpen,
  MessageCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const features = [
    '12 Live Webinars',
    'Workbook',
    'Risk Sheets',
    'Certificate',
    'Doubt Clearing Sessions (Sat-Sun)',
  ];

  const bonusFeatures = [
    'Lifetime Access to Recordings',
    'Workbook Implementation Workshop',
    'Live F&O Strategy Execution',
    'Risk Calculator Hands-on Session',
    'Pro Trader Hack Session',
  ];

  const trustElements = [
    { icon: Users, label: '2000+ Students Trained', color: 'text-accent' },
    {
      icon: TrendingUp,
      label: 'Live Interactive Training',
      color: 'text-success',
    },
    {
      icon: BookOpen,
      label: 'Practical Strategy Focus',
      color: 'text-primary',
    },
    { icon: Shield, label: '30-Day Money Back', color: 'text-accent' },
  ];

  return (
    <div className='min-h-screen bg-background'>
      <Navbar />

      <main className='pt-24 pb-20'>
        <div className='container mx-auto px-4'>
          {/* HERO */}
          <div className='text-center mb-10'>
            <Badge className='mb-4 bg-accent text-accent-foreground border-0'>
              <Zap className='h-4 w-4 mr-1' />
              Limited Time Offer
            </Badge>

            <h1 className='text-3xl md:text-4xl font-bold text-primary mb-2'>
              Master Option Trading Program – Strategy to Execution
            </h1>

            <p className='text-xl text-muted-foreground'>
              Special Launch Pricing
            </p>
          </div>

          {/* PRICING CARD */}
          <div className='max-w-4xl mx-auto'>
            <div className='border-4 border-accent rounded-xl shadow-2xl overflow-hidden'>
              <Card className='border border-accent/40 rounded-xl'>
                {/* 🔥 SAME HEADER STRUCTURE AS Pricing.tsx */}
                <CardHeader className='p-4 sm:p-6 pb-4'>
                  {/* GREEN BADGE */}
                  <div className='flex justify-center mb-4'>
                    <Badge className='bg-success text-success-foreground text-sm sm:text-lg px-3 py-2 text-center leading-tight max-w-full'>
                      <Clock className='h-4 w-4 mr-2 shrink-0' />
                      <span className='whitespace-normal'>
                        Only 50 Seats Available This Month
                      </span>
                    </Badge>
                  </div>

                  {/* IMAGE */}
                  <div className='w-full bg-black/5 rounded-xl shadow-md'>
                    <img
                      src='/cover.jpeg'
                      alt='Course'
                      className='w-full h-auto object-contain rounded-xl'
                    />
                  </div>

                  {/* TEXT CONTENT */}
                  <div className='mt-5 flex flex-col gap-2'>
                    <CardTitle className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight'>
                      One Program — Lifetime of Skill
                    </CardTitle>

                    <CardDescription className='text-base sm:text-lg leading-snug'>
                      Everything you need to start trading confidently in the
                      Indian stock market
                    </CardDescription>

                    {/* PRICE */}
                    <div className='flex flex-col gap-1 mt-3'>
                      <span className='text-lg text-muted-foreground line-through'>
                        ₹2,999
                      </span>

                      <div className='flex items-baseline gap-2'>
                        <span className='text-4xl sm:text-5xl font-bold text-accent'>
                          ₹1,499
                        </span>
                        <span className='text-xs text-gray-400'>
                          (excl. GST)
                        </span>
                      </div>

                      <span className='text-success font-semibold text-sm'>
                        Save 50% – Limited Time Only!
                      </span>
                    </div>
                  </div>
                </CardHeader>

                {/* CONTENT */}
                <CardContent className='p-6 space-y-8'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <h4 className='font-semibold text-primary mb-4 text-lg'>
                        Course Includes:
                      </h4>
                      <ul className='space-y-3'>
                        {features.map((item, index) => (
                          <li key={index} className='flex items-start gap-2'>
                            <Check className='h-5 w-5 text-success mt-0.5' />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className='font-semibold text-primary mb-4 text-lg'>
                        Bonus Features:
                      </h4>
                      <ul className='space-y-3'>
                        {bonusFeatures.map((item, index) => (
                          <li key={index} className='flex items-start gap-2'>
                            <Check className='h-5 w-5 text-accent mt-0.5' />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className='bg-secondary p-6 rounded-lg'>
                    <h4 className='font-semibold text-primary mb-3'>
                      Secure Payment Options
                    </h4>
                    <p className='text-muted-foreground'>
                      UPI • Credit/Debit Cards • Net Banking • PhonePe • GPay •
                      Paytm
                    </p>
                  </div>
                </CardContent>

                {/* FOOTER */}
                <CardFooter className='flex flex-col gap-4 pb-8'>
                  <Button
                    size='lg'
                    className='
    w-full
    bg-accent hover:bg-accent/90
    text-accent-foreground
    text-base sm:text-lg
    font-semibold
    py-4
  '
                    onClick={() =>
                      window.open('https://abdash.netlify.app/auth', '_blank')
                    }
                  >
                    Enroll Now – ₹1,499
                  </Button>

                  <Button
                    variant='outline'
                    size='lg'
                    className='w-full border-2 border-success text-success hover:bg-success hover:text-success-foreground'
                    onClick={() =>
                      window.open('https://wa.me/919876543210', '_blank')
                    }
                  >
                    <MessageCircle className='h-5 w-5 mr-2' />
                    WhatsApp Support
                  </Button>

                  <p className='text-sm text-muted-foreground text-center'>
                    * GST applicable as per government norms
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* TRUST */}
          <div className='max-w-4xl mx-auto grid md:grid-cols-4 gap-6 mt-16'>
            {trustElements.map((item, index) => (
              <Card key={index} className='text-center'>
                <CardContent className='pt-6'>
                  <item.icon
                    className={`h-10 w-10 mx-auto mb-3 ${item.color}`}
                  />
                  <p className='font-semibold'>{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* INSTRUCTOR */}
          <div className='max-w-3xl mx-auto text-center mt-20'>
            <h2 className='text-3xl font-bold text-primary mb-4'>
              Learn from Akash Bhattacharjee
            </h2>
            <p className='text-lg text-muted-foreground mb-6'>
              Years of experience in Indian stock markets with a focus on F&O
              and candlestick-based strategies.
            </p>
            <Link to='/#about'>
              <Button variant='outline' size='lg'>
                View Full Profile
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
