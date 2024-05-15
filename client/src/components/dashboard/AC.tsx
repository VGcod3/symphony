import { ThermometerIcon, DropletsIcon, SettingsIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const AirConditioner = () => {
  return (
    <div className='col-span-12 xl:col-span-3 md:col-span-6 row-span-4 bg-gradient-to-br from-red-500 border-red-600 to-orange-500 rounded-lg flex flex-col dashboard-tile'>
      <h4 className='text-xl text-white font-semibold'>Air Conditioner</h4>

      <h6 className='text-md text-white text-opacity-80'>Living room</h6>

      <div className='flex gap-1 flex-1 my-2 flex-col'>
        <div className='flex gap-2 items-center'>
          <ThermometerIcon
            size='42'
            className='p-2 rounded-full bg-red-700 text-white'
            strokeWidth={1.5}
          />
          <h5 className='text-lg text-white'>Temperature</h5>
          <p className='text-white opacity-80 text-2xl'>22°C</p>
        </div>
        <div className='flex gap-2 items-center'>
          <DropletsIcon
            size='42'
            className='p-2 rounded-full bg-red-700 text-white'
            strokeWidth={1.5}
          />
          <h5 className='text-lg text-white'>Humidity</h5>
          <p className='text-white opacity-80 text-2xl'>45%</p>
        </div>
      </div>

      <Button
        className='btn btn-primary bg-red-700 hover:bg-red-800 focus:ring-red-600'
        size={'sm'}>
        <SettingsIcon size='16' className='mr-1' />
        Edit AC settings
      </Button>
    </div>
  );
};
