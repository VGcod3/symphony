'use client';

import { Switch } from '@/components/ui/switch';
import { LucideIcon, ZapIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface iDevice {
  name: string;
  description: string;
  statuses: string[];
  active: string;
  Icon: LucideIcon;
}

const Device = ({
  name,
  description,
  Icon,
}: {
  name: string;
  description: string;
  Icon: LucideIcon;
}) => {
  return (
    <div className='col-span-12 space-y-1'>
      <div className='grid grid-cols-12 gap-3 items-center'>
        <Icon
          size='42'
          className='p-2 rounded-full bg-indigo-600 text-white col-span-3'
          strokeWidth={1.5}
        />
        <div className='col-span-6'>
          <h5 className='text-lg text-neutral-600'>{name}</h5>
          <Button
            size={'sm'}
            className='p-0.5 px-2 text-xs bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-600 dark:focus-visible:ring-offset-indigo-600 dark:data-[state=unchecked]:bg-indigo-400'>
            Edit
          </Button>
        </div>
        <Switch className='col-span-3 focus-visible:ring-indigo-600 data-[state=checked]:bg-indigo-600' />
      </div>
      <p className='text-neutral-700 opacity-80 text-sm'>{description}</p>
    </div>
  );
};

const devices: iDevice[] = [
  {
    name: 'Living room',
    description: 'Lights, TV, AC, curtains',
    statuses: ['On', 'Off'],
    active: 'On',
    Icon: ZapIcon,
  },
  {
    name: 'Bedroom',
    description: 'Lights, TV, AC, curtains',
    statuses: ['On', 'Off'],
    active: 'Off',
    Icon: ZapIcon,
  },
  {
    name: 'Kitchen',
    description: 'Lights, TV, AC, curtains',
    statuses: ['On', 'Off'],
    active: 'On',
    Icon: ZapIcon,
  },
  {
    name: 'Bathroom',
    description: 'Lights, TV, AC, curtains',
    statuses: ['On', 'Off'],
    active: 'On',
    Icon: ZapIcon,
  },
];

export const Devices = () => {
  return (
    <div className='col-span-12 xl:col-span-3 md:col-span-6 row-span-8 bg-white border-neutral-400 dashboard-tile flex flex-col'>
      {/* <div className='col-span-12 xl:col-span-3 md:col-span-6 row-span-8 bg-gradient-to-br from-indigo-500 to-violet-500 border-indigo-600 dashboard-tile flex flex-col'> */}
      <h4 className='text-2xl text-neutral-600 font-semibold'>Devices</h4>
      <div className='grid grid-cols-12 flex-1 my-2 gap-2'>
        {devices.map((automation, index) => (
          <Device key={index} {...automation} />
        ))}
      </div>
      <Button
        className='bg-gradient-to-br from-indigo-600 to-violet-600 hover:bg-indigo-700 focus:ring-indigo-600'
        size={'sm'}>
        Add new device
      </Button>
    </div>
  );
};
