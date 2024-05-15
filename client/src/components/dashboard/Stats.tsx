import { cn } from '@/lib/utils';
import { LucideIcon, ThermometerIcon, DropletsIcon, ZapIcon } from 'lucide-react';

interface iStat {
  name: string;
  value: string;
  Icon: LucideIcon;
  cc: string;
}

const Stat = ({ name, value, Icon, cc }: iStat) => {
  return (
    <div className={cn('col-span-4 md:col-span-2 row-span-2 dashboard-tile', cc)}>
      <div className='flex gap-2 items-start flex-col'>
        <div className='flex gap-2 items-center'>
          <Icon
            size='36'
            className='p-2 rounded-full bg-white bg-opacity-20 text-white shrink-0'
            strokeWidth={1.5}
          />
          <h5 className='text-white text-sm'>{name}</h5>
        </div>

        <p className='text-white opacity-80 text-2xl text-center'>{value}</p>
      </div>
    </div>
  );
};

export const Stats = () => {
  const stats = [
    {
      name: 'Temperature',
      value: '22°C',
      Icon: ThermometerIcon,
      cc: 'bg-gradient-to-br from-violet-500 to-indigo-500 border-violet-600',
    },
    {
      name: 'Humidity',
      value: '45%',
      Icon: DropletsIcon,
      cc: 'bg-gradient-to-br from-emerald-500 to-green-600 border-emerald-600',
    },
    {
      name: 'Energy usage',
      value: 'Low',
      Icon: ZapIcon,
      cc: 'bg-gradient-to-br from-teal-600 to-green-600 border-teal-700',
    },
  ];

  return (
    <>
      {stats.map((stat, index) => (
        <Stat key={index} {...stat} />
      ))}
    </>
  );
};
