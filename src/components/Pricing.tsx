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
            Special Launch Pricing
          </h2>

          <p className='text-xl text-muted-foreground max-w-2xl mx-auto mb-0'>
            Get lifetime access to our comprehensive course at an unbeatable
            price
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='border-4 border-accent rounded-xl shadow-2xl overflow-hidden'>
            <Card className='border border-accent/40 rounded-xl'>
              <CardHeader className='p-6 pb-4'>
                <div className='flex justify-center mb-4'>
                  <Badge className='bg-success text-success-foreground text-lg px-4 py-2 w-fit'>
                    <Clock className='h-5 w-5 mr-2' />
                    Only 50 Seats Available This Month
                  </Badge>
                </div>

                <div className='flex flex-col md:flex-row items-start gap-5'>
                  <img
                    src='/1.jpeg'
                    alt='Course Image'
                    className='w-36 h-48 object-cover rounded-xl shadow-md'
                  />

                  <div className='flex flex-col gap-1'>
                    <CardTitle className='text-3xl md:text-4xl font-bold text-primary leading-tight'>
                      One Program — Lifetime of Skill
                    </CardTitle>

                    <CardDescription className='text-lg leading-snug'>
                      Everything you need to start trading confidently in the
                      Indian stock market
                    </CardDescription>

                    {/* PRICE ROW */}
                    <div className='flex items-center gap-4 mt-1'>
                      <span className='text-2xl text-muted-foreground line-through'>
                        ₹2,999
                      </span>
                      <span className='text-5xl md:text-6xl font-bold text-accent leading-none'>
                        ₹1499
                      </span>
                    </div>

                    {/* SAVE TEXT */}
                    <p className='text-success font-semibold text-lg leading-tight'>
                      Save 50% – Limited Time Only!
                    </p>
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
                        'Live Chart Reading & Pattern Recognition',
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
                  onClick={scrollToEnroll}
                  size='lg'
                  className='w-full bg-accent hover:bg-accent/90 text-accent-foreground text-xl font-bold py-6'
                >
                  Enroll Now for ₹1499
                </Button>
                <pre className='text-sm text-muted-foreground text-center'>
                  30-day money-back guarantee if you're not satisfied.
                  <br />
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
