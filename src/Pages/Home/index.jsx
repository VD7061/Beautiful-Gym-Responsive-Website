import React from 'react';
import backgroundImage from '../../assets/Background-removebg.png';

import Button from '../../Components/Buttons/button';

const Home = () => {
  return (
    <>

      <div id="home" className="relative h-screen">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: `linear-gradient(
              90deg,
              hsla(49, 64%, 57%, 1) 0%,
              hsla(29, 30%, 64%, 1) 49%,
              hsla(116, 15%, 64%, 1) 100%
            )`,
          }}
        >
          <img
            src={backgroundImage}
            alt="background"
            className="max-w-full max-h-full object-cover opacity-50"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="text-center mb-8 lg:absolute lg:bottom-12 lg:left-0 md:mb-0 md:absolute md:left-0 md:ml-20 md:text-left">
            <h1 className="text-4xl md:text-6xl font-anton text-white">
              TRAIN ON YOUR
            </h1>
            <span className="block text-4xl md:text-6xl font-anton text-white">
              OWN TIME.
            </span>
          </div>
          <div className="lg:absolute lg:bottom-12 lg:right-0 md:absolute md:right-0 md:mr-20">
            <Button name="Join Our Gym" size="large" />
          </div>
        </div>
     
      </div>
    </>
  );
};

export default Home;
