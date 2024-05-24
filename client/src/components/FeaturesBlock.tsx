'use client';
import { Clock, CreditCard, LucideCurlyBraces, ShieldCheck, Tag } from 'lucide-react';
import AnimatedWrapper from './AnimatedWrapper';

const features = [
  {
    name: 'Automations',
    description:
      'Create custom automations to make your home work for you. Set up routines to turn on lights, adjust the thermostat, and more, all based on your preferences.',
    icon: Clock,
  },
  {
    name: 'Security',
    description:
      'Protect your home with our security features. Receive notifications when motion is detected, doors are opened, and more.',
    icon: ShieldCheck,
  },
  {
    name: 'Payments',
    description:
      'Easily pay your bills and manage your subscriptions with our payment feature. Keep track of your expenses and never miss a payment.',
    icon: CreditCard,
  },
  {
    name: 'Tags',
    description:
      'Organize your devices with tags. Group devices together and apply automations to multiple devices at once.',
    icon: Tag,
  },
];

export default function FeaturesBlock() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>Welcome to HARMONY</h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl'>
            Control your home with ease
          </p>
          <AnimatedWrapper toggleMultiple>
            <p className='mt-6 text-lg leading-8 text-neutral-600'>
              HARMONY offers a range of features to make your bidding experience seamless. From
              smart home integration to automations, SymphHARMONYony has you covered.
            </p>
          </AnimatedWrapper>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature, index) => (
              <AnimatedWrapper key={feature.name} from={index % 2 ? 'right' : 'left'}>
                <div className='relative pl-16'>
                  <dt className='text-base font-semibold leading-7 text-neutral-900'>
                    <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                      <feature.icon className='h-6 w-6 text-white' aria-hidden='true' />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className='mt-2 text-base leading-7 text-neutral-600'>
                    {feature.description}
                  </dd>
                </div>
              </AnimatedWrapper>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
