import React from 'react';
import HeroProfile from './HeroProfile';
import HeroDescription from './HeroDescription';

const Hero = () => {
  return (
    <div className= 'flex w-full h-[1024px] p-[0px_80px] justify-center items-center gap-[40px] shrink-[0]'>
      <HeroDescription/>
      <HeroProfile/>    
    </div>
  )
}

export default Hero;