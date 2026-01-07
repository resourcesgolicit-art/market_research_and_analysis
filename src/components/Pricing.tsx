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
import { Check, Clock, Zap } from 'lucide-react';

const Pricing = () => {
  const scrollToEnroll = () => {
    document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id='pricing' className='pt-10 pb-10 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-4 animate-fade-in'>
          <Badge className='mb-2 bg-accent text-accent-foreground border-0'>
            <Zap className='h-4 w-4 mr-1' />
            Limited Time Offer
          </Badge>

          <h2 className='text-3xl md:text-4xl font-bold text-primary mb-2'>
            Master Option Trading Program - Strategy to Execution
          </h2>

          {/* <p className='text-xl text-muted-foreground max-w-2xl mx-auto mb-0'>
            Strategy to Execution
          </p> */}

          <p className='text-xl text-muted-foreground max-w-2xl mx-auto mb-0'>
            Special Launch Pricing
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='border-4 border-accent rounded-xl shadow-2xl overflow-hidden'>
            <Card className='border border-accent/40 rounded-xl'>
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

                {/* IMAGE – FULL WIDTH ON MOBILE */}
                <div className='w-full bg-black/5 rounded-xl shadow-md'>
                  <img
                    src='/cover.jpeg'
                    alt='Course Image'
                    className='
      w-full
      h-auto
      object-contain
      rounded-xl
    '
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
                      <span className='text-xs text-gray-400'>(excl. GST)</span>
                    </div>

                    <span className='text-success font-semibold text-sm'>
                      Save 50% – Limited Time Only!
                    </span>
                  </div>
                </div>
              </CardHeader>

              {/* ✅ CardContent now starts with ZERO GAP */}
              <CardContent className='p-6 pt-4'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <h4 className='font-semibold text-primary mb-4 text-lg'>
                      Course Includes:
                    </h4>
                    <ul className='space-y-3'>
                      {[
                        '12 Live Webinars',
                        'Workbook',
                        'Risk Sheets',
                        'Certificate',
                        'Doubt Clearing Sessions (Sat-Sun)',
                      ].map((item, index) => (
                        <li key={index} className='flex items-start gap-2'>
                          <Check className='h-5 w-5 text-success flex-shrink-0 mt-0.5' />
                          <span className='text-foreground'>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className='font-semibold text-primary mb-4 text-lg'>
                      Bonus Features:
                    </h4>
                    <ul className='space-y-3'>
                      {[
                        'Lifetime Access to Recordings',
                        'Workbook Implementation Workshop',
                        'Live F&O Strategy Execution',
                        'Risk Calculator Hands-on Session',
                        'Pro Trader Hack Session',
                      ].map((item, index) => (
                        <li key={index} className='flex items-start gap-2'>
                          <Check className='h-5 w-5 text-accent flex-shrink-0 mt-0.5' />
                          <span className='text-foreground'>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className='bg-secondary p-6 rounded-lg'>
                  <h4 className='font-semibold text-primary mb-3'>
                    Payment Options:
                  </h4>
                  <p className='text-muted-foreground'>
                    We accept UPI, Credit/Debit Cards, Net Banking, and all
                    major payment methods. Secure checkout with instant access
                    after payment.
                  </p>
                </div>
              </CardContent>

              <CardFooter className='flex flex-col gap-4 pb-8'>
                <Button
                  onClick={() => (
                    (window.location.href = 'https://abdash.netlify.app/auth'),
                    '_blank'
                  )}
                  size='lg'
                  className='w-full bg-accent hover:bg-accent/90 text-accent-foreground text-xl font-bold py-6'
                >
                  Enroll Now for ₹1499
                </Button>
                <pre className='text-sm text-muted-foreground text-center'>
                  *Exclusive of GST
                </pre>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
