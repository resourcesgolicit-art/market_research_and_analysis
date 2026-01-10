import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  BarChart3,
  TrendingUp,
  LineChart,
  Lightbulb,
  ShieldAlert,
  Video,
  ArrowRight,
} from 'lucide-react';
import candlestickImage from '@/assets/candlestick-patterns.jpg';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: BarChart3,
    title: 'Advanced Candle Stick Pattern Techniques',
    description:
      'Decode market sentiment through multicandle formations used by institutions.',
  },
  {
    icon: TrendingUp,
    title: 'Advanced Strategy Workbook',
    description:
      'Plan, test & record your setups in a structured digital workbook',
  },
  {
    icon: LineChart,
    title: 'F&O Trading Strategy',
    description:
      'Join live Options trading practical analysis classes (decoding options key points)',
  },
  {
    icon: ShieldAlert,
    title: 'Risk Calculator Sheets',
    description:
      'Manage capital, exposure & position size like a professional.',
  },
  {
    icon: Lightbulb,
    title: 'Pro Trader Hacks',
    description: 'Execution shortcuts & automation methods for faster trading.',
  },
  {
    icon: Video,
    title: '12 Webinars in 2 Weeks (6 Theory + 6 Practical)',
    description: 'Compact, high-impact program for serious learners.',
  },
];

const CourseFeatures = () => {
  return (
    <section id='why-us' className='py-20 bg-secondary'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12 animate-fade-in'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary mb-4'>
            Why Us
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            A comprehensive curriculum designed for the Indian stock market,
            from basics to advanced strategies
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='hover:shadow-lg transition-shadow animate-fade-in'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className='bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <feature.icon className='h-6 w-6 text-accent' />
                </div>
                <CardTitle className='text-primary'>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-base'>
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='mt-16 bg-card rounded-2xl overflow-hidden shadow-xl'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* LEFT CONTENT */}
            <div className='p-6 sm:p-8 md:p-12 flex flex-col justify-center'>
              <h3 className='text-2xl md:text-3xl font-bold text-primary mb-6'>
                Master Advanced Candlestick Patterns Like a Pro
              </h3>

              <div className='space-y-4 text-foreground max-w-xl'>
                {/* Item */}
                <div className='flex items-start gap-3'>
                  <div className='bg-success rounded-full p-1 mt-1 shrink-0'>
                    <svg
                      className='h-4 w-4 text-success-foreground'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <p className='leading-relaxed'>
                    20+ essential candlestick patterns explained with Indian
                    market examples
                  </p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='bg-success rounded-full p-1 mt-1 shrink-0'>
                    <svg
                      className='h-4 w-4 text-success-foreground'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <p className='leading-relaxed'>
                    Live chart analysis sessions to practice pattern recognition
                  </p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='bg-success rounded-full p-1 mt-1 shrink-0'>
                    <svg
                      className='h-4 w-4 text-success-foreground'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <p className='leading-relaxed'>
                    Trade setup strategies with entry and exit signals
                  </p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='bg-success rounded-full p-1 mt-1 shrink-0'>
                    <svg
                      className='h-4 w-4 text-success-foreground'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <p className='leading-relaxed'>
                    Risk management and position sizing for each pattern
                  </p>
                </div>

                {/* CTA BUTTON */}
                <Button
                  onClick={() =>
                    (window.location.href = 'https://dash.abinstitute.co.in')
                  }
                  size='lg'
                  className='
    mt-6
    w-full
    bg-accent hover:bg-accent/90
    text-accent-foreground
    px-4 py-4
    shadow-lg hover:shadow-xl transition-all

    flex items-center justify-center gap-2
    !h-auto !overflow-visible
    text-center leading-normal
  '
                >
                  {/* MOBILE TEXT */}
                  <span className='block sm:hidden text-sm font-semibold'>
                    Understand Market Moves
                  </span>

                  {/* DESKTOP TEXT */}
                  <span className='hidden sm:block text-base md:text-lg font-semibold'>
                    Understand How Patterns Drive Real Market Moves
                  </span>

                  <ArrowRight className='h-5 w-5 shrink-0' />
                </Button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className='w-full h-64 sm:h-80 md:h-full'>
              <img
                src={candlestickImage}
                alt='Candlestick pattern examples'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;
