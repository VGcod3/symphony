import { Devices } from '@/components/dashboard/Devices';
import { Notifications } from '@/components/dashboard/Notifications';
import { Stats } from '@/components/dashboard/Stats';
import { Automations } from '@/components/dashboard/Automations';
import { AirConditioner } from '@/components/dashboard/AC';
import { DesktopRoomMenu, MobileRoomMenu } from '@/components/dashboard/RoomMenu';
import { MusicWidget } from '@/components/dashboard/MusicWidget';

export default function Page() {
  return (
    <div className='flex flex-1 flex-col justify-center px-6 py-6 lg:px-8 gap-4'>
      <DesktopRoomMenu />
      <div className='w-full max-w-7xl mx-auto rounded-md grid-cols-12 md:grid-rows-12 grid gap-4 xl:h-[77vh]'>
        <div className='col-span-12 lg:col-span-6 row-span-3 flex items-end'>
          <h3 className='font-semibold text-4xl md:text-6xl text-neutral-700'>
            Welcome home, Yulik
          </h3>
        </div>
        <MobileRoomMenu />
        <MusicWidget />
        <Devices />
        <AirConditioner />
        <Stats />
        <Automations />
        <Notifications />
      </div>
    </div>
  );
}
