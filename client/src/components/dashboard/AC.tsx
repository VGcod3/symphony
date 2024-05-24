import { ThermometerIcon, DropletsIcon, SettingsIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const AirConditioner = () => {
  return (
    <div className='col-span-12 xl:col-span-3 md:col-span-6 row-span-4 bg-white border-neutral-400 rounded-lg flex flex-col dashboard-tile'>
      <h4 className='text-xl text-neutral-600 font-semibold'>Air Conditioner</h4>

      <h6 className='text-md text-neutral-600 text-opacity-80'>Living room</h6>

      <div className='flex gap-1 flex-1 my-2 flex-col'>
        <div className='flex gap-2 items-center'>
          <ThermometerIcon
            size='42'
            className='p-2 rounded-full bg-indigo-600 text-white'
            strokeWidth={1.5}
          />
          <h5 className='text-lg text-neutral-500'>Temperature</h5>
          <p className='text-indigo-600 opacity-80 text-2xl'>22°C</p>
        </div>
        <div className='flex gap-2 items-center'>
          <DropletsIcon
            size='42'
            className='p-2 rounded-full bg-indigo-600 text-white'
            strokeWidth={1.5}
          />
          <h5 className='text-lg text-neutral-500'>Humidity</h5>
          <p className='text-indigo-600 opacity-80 text-2xl'>45%</p>
        </div>
      </div>

      <Button
        className='bg-gradient-to-br from-indigo-600 to-violet-600 hover:bg-indigo-700 focus:ring-indigo-600'
        size={'sm'}>
        <SettingsIcon size='16' className='mr-1' />
        Edit AC settings
      </Button>
    </div>
  );
};
