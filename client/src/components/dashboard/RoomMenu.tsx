'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { setActiveRoom, rooms } from '@/store/activeRoomSlice';
import { useDispatch, useSelector } from '@/store/hooks';
import { Check, Circle, DotIcon } from 'lucide-react';

export const DesktopRoomMenu = () => {
  const dispatch = useDispatch();

  const activeRoom = useSelector((state) => state.activeRoom);

  return (
    <div className='w-full max-w-7xl mx-auto rounded-md md:flex gap-4 h-10 hidden'>
      {rooms.map((room, index) => (
        <Button
          key={index}
          className={cn(
            'flex-1 rounded-md flex items-center justify-center text-sm font-semibold   focus:ring-indigo-600 transition-all duration-300',
            activeRoom === room
              ? 'bg-gradient-to-br from-indigo-600 to-violet-600 text-white'
              : 'hover:bg-neutral-400 bg-neutral-300 text-neutral-700',
          )}
          onClick={() => dispatch(setActiveRoom(room))}>
          {room}
        </Button>
      ))}
    </div>
  );
};

export const MobileRoomMenu = () => {
  const dispatch = useDispatch();

  const activeRoom = useSelector((state) => state.activeRoom);

  return (
    <div className='flex w-full justify-between md:hidden col-span-12'>
      <h2 className='text-neutral-700 text-xl font-semibold'>Choose a room</h2>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'outline'} size={'sm'}>
            {activeRoom}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-44'>
          <DropdownMenuLabel>Rooms</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {rooms.map((room, index) => (
            <DropdownMenuItem
              key={index}
              onClick={() => dispatch(setActiveRoom(room))}
              className='relative py-1.5 pl-8 pr-2 '>
              <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
                <Check
                  strokeWidth={3}
                  className={cn(
                    'h-4 w-4 text-indigo-600 opacity-0',
                    activeRoom === room && 'opacity-100',
                  )}
                />
              </span>
              {room}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
