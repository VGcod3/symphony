'use client';
export const MusicWidget = () => {
  return (
    <div className='col-span-12 xl:col-span-6 align-bottom flex items-end h-full min-h-40 row-span-3'>
      <iframe
        src='https://open.spotify.com/embed/track/0HKQUVdJYgCGbqKXmBLpHa?utm_source=generator&theme=0'
        width='100%'
        height='100%'
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'></iframe>
    </div>
  );
};
