import React from 'react';
import HeroProfile from './HeroProfile';
import HeroDescription from './HeroDescription';
import Prism from './Prism';

const Hero = () => {
  return (
    // 1. Kontainer utama: Dibuat `relative` untuk menjadi acuan posisi bagi background.
    // Properti flex, justify-center, dll. dipindahkan ke kontainer konten.
    <div className="relative w-full h-[1100px] overflow-hidden">

      {/* 2. Latar belakang: Diposisikan `absolute` untuk keluar dari alur normal. */}
      {/* - `inset-0` adalah shortcut untuk `top-0`, `right-0`, `bottom-0`, `left-0`.
          - `z-0` menempatkannya di lapisan belakang. */}
      <div className="absolute inset-0 z-0">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>

      {/* 3. Kontainer Konten: Wrapper baru ini yang akan mengatur layout flex. */}
      {/* - `relative` dan `z-10` memastikan konten ini berada di atas background.
          - Semua properti flexbox dari parent lama dipindahkan ke sini. */}
      <div className="relative z-10 flex w-full h-full p-[0px_80px] justify-center items-center gap-[40px]">
          <div className='flex w-full h-full p-[0px_80px] justify-between items-center gap-[40px]'>
            <HeroDescription />
            <HeroProfile />
          </div>
      </div>

    </div>
  );
};

export default Hero;