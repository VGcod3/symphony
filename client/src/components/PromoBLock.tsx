import AnimatedWrapper from '@/components/AnimatedWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const offers = [
  {
    name: 'Smart home solutions',
    description: 'Experience the future with our smart home solutions',
    href: '/dashboard',
  },
  {
    name: 'Home automation',
    description: 'Automate your home with our smart devices',
    href: '/dashboard',
  },
  {
    name: 'Security systems',
    description: 'Protect your home with our smart security systems',
    href: '/dashboard',
  },
];

export default function Example() {
  return (
    <div className='bg-white'>
      <div className='flex flex-col border-b border-neutral-200 lg:border-0'>
        <nav aria-label='Offers' className='order-last lg:order-first'>
          <div className='mx-auto max-w-7xl lg:px-8'>
            <ul
              role='list'
              className='grid grid-cols-1 divide-y divide-neutral-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x'>
              {offers.map((offer) => (
                <li key={offer.name} className='flex flex-col'>
                  <a
                    href={offer.href}
                    className='relative flex flex-1 flex-col justify-center bg-white py-6 px-4 text-center focus:z-10'>
                    <p className='text-sm text-neutral-500'>{offer.name}</p>
                    <p className='font-semibold text-neutral-900'>{offer.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className='relative'>
          <div
            aria-hidden='true'
            className='absolute hidden h-full w-1/2 bg-neutral-100 lg:block'
          />
          <div className='relative bg-neutral-100 lg:bg-transparent'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8'>
              <div className='mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64'>
                <div className='lg:pr-16'>
                  <AnimatedWrapper from='left'>
                    <h2 className='text-4xl font-bold tracking-tight text-neutral-700 sm:text-5xl xl:text-6xl'>
                      Welcome to HARMONY
                    </h2>
                  </AnimatedWrapper>
                  <AnimatedWrapper from='left' delay={0.1} toggleMultiple>
                    <p className='mt-4 text-xl text-neutral-600'>
                      Experience the future with our smart home solutions.
                    </p>
                  </AnimatedWrapper>
                  <div className='mt-6'>
                    <AnimatedWrapper from='left' delay={0.3} toggleMultiple>
                      <Link href='/dashboard'>
                        <Button>Go to dashboard</Button>
                      </Link>
                    </AnimatedWrapper>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2'>
            <Image
              width={1920}
              height={380}
              src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
              className='h-full w-full object-cover object-center'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
