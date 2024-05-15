import { LucideIcon, ShieldCheckIcon, ThermometerIcon, SettingsIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface iNotification {
  name: string;
  description: string;
  Icon: LucideIcon;
}

const Notification = ({ name, description, Icon }: iNotification) => {
  return (
    <div className='col-span-12 space-y-1 flex items-center'>
      <Icon
        size='36'
        className='p-1.5 rounded-full bg-yellow-600 text-white col-span-3 shrink-0'
        strokeWidth={1.5}
      />
      <div className='flex flex-col gap-1 m-1'>
        <h5 className='text-md text-white'>{name}</h5>
        <p className='text-neutral-50 opacity-80 text-xs'>{description}</p>
      </div>
    </div>
  );
};

export const Notifications = () => {
  const notifications: iNotification[] = [
    {
      name: 'Security',
      description: 'Motion detected in the backyard',
      Icon: ShieldCheckIcon,
    },
    {
      name: 'Temperature',
      description: 'Temperature is too high, turn on the AC',
      Icon: ThermometerIcon,
    },
  ];

  return (
    <div className='col-span-12 xl:col-span-3 md:col-span-6 row-span-4 bg-gradient-to-br from-yellow-500 to-amber-500 border-yellow-600 dashboard-tile flex flex-col'>
      <h4 className='text-xl text-white font-semibold'>Notifications</h4>
      <h6 className='text-xs text-white text-opacity-80'>Stay informed about your home</h6>

      <div className='grid grid-cols-12 flex-1 my-2 gap-2'>
        {notifications.map((notification, index) => (
          <Notification key={index} {...notification} />
        ))}
      </div>
      <Button
        className='btn btn-primary bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-600'
        size={'sm'}>
        <SettingsIcon size='16' className='mr-1' />
        Edit notification settings
      </Button>
    </div>
  );
};
