import { LucideIcon, SunriseIcon, SunsetIcon, LeafIcon, ShieldCheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface iAutomation {
  name: string;
  description: string;
  Icon: LucideIcon;
}

export const Automations = () => {
  const automations: iAutomation[] = [
    {
      name: 'Wake up',
      description: 'Lights on, temperature to 23, coffee machine on',
      Icon: SunriseIcon,
    },
    {
      name: 'Bedtime routine',
      description: 'Lights dim, temperature to 19, doors locked',
      Icon: SunsetIcon,
    },
    {
      name: 'Energy saving',
      description: 'Temperature to 21 when nobody is home, lights off',
      Icon: LeafIcon,
    },
    {
      name: 'Security mode',
      description: 'Locks all doors, turns on cameras, sends notifications',
      Icon: ShieldCheckIcon,
    },
  ];
  return (
    <div className='col-span-12 md:col-span-6 row-span-6 bg-gradient-to-br from-cyan-500 to-sky-500 border-cyan-600 dashboard-tile flex flex-col'>
      <h4 className='text-2xl text-white font-semibold'>Automations</h4>
      <div className='grid grid-cols-12 flex-1 my-2 gap-2'>
        {automations.map((automation, index) => (
          <Automation key={index} {...automation} />
        ))}
      </div>
      <Button
        className='btn btn-primary bg-cyan-700 hover:bg-cyan-800 focus:ring-cyan-600'
        size={'sm'}>
        Add new automation
      </Button>
    </div>
  );
};

export const Automation = ({
  name,
  description,
  Icon,
}: {
  name: string;
  description: string;
  Icon: LucideIcon;
}) => {
  return (
    <div className='col-span-6 space-y-1'>
      <div className='flex gap-3 items-center'>
        <Icon size='42' className='p-2 rounded-full bg-cyan-700 text-white' strokeWidth={1.5} />
        <h5 className='text-lg text-white'>{name}</h5>
      </div>
      <p className='text-neutral-700 opacity-80 text-sm'>{description}</p>
    </div>
  );
};
