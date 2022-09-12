import React from 'react';

// import image
import Image from '../assets/img/lawyer_banner.png';

// import components
import Header from './Header';
import Appointment from './Appointment';

const Banner = () => {
  return (
    <section
      id='home'
      className='lg:h-full lg:max-h-800 bg-gradient-to-b from-[#B0B0B0] to-[#333442]'
    >
      <Header />
      <div className='container mx-auto h-full lg:flex pt-32'>
        {/* left side  */}
        <div className='text-center mx-auto h-full lg:text-left px-8 md:p-0'>
          <h1 className='font-primary font-black text-6xl lg:text-7xl text-primary mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]'>
            Your Problem <br /> <span className='text-accent'>Our Goal.</span>
          </h1>
          <p className='max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            architecto corrupti! Dolores rem dicta officia nam unde modi ad
            omnis.
          </p>
          {/* Appointment */}
          <div className='lg:absolute mx-auto max-w-[445px] lg:mx-0'>
            <Appointment />
          </div>
        </div>
        {/*right side Banner Image */}
        <div className='hidden flex-1 lg:flex lg:flex-col items-end'>
          <img src={Image} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Banner;
