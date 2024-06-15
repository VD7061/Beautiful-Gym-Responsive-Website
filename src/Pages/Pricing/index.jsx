import React, { useEffect } from 'react'
import PricingForm from '../../Components/PricingForm/pricingForm'
import Aos from 'aos';
import "aos/dist/aos.css";

const Pricing = () => {
  
useEffect(() => {
  Aos.init({
    once: false,
    mirror: true,
    anchorPlacement: "top-bottom",
    offset: 200,
  });
}, []);

  return (
    <section id="pricing" className="h-screen flex items-center justify-center bg-white p-10">
      <div className="grid lg:grid-cols-2 lg:gap-20 md:grid-cols-1 gap-10 ">
        {/* Left column */}
        <div className='p-3'
        data-aos="fade-left"
        data-aos-duration="1000">
          <h1 className="text-4xl mb-4 font-anton">SCHEDULE A VISIT</h1>
          <p>
          Take a free 30-minute tour of either of our locations to help you decide if Gorilla is the right gym for you. You'll have the opportunity to try equipment, observe classes, and get direct answers to all of your questions.
          </p>
        </div>

        {/* Right column */}
        <div className=''data-aos="fade-right"
        data-aos-duration="1000">
          <PricingForm />
        </div>
      </div>
    </section>
  )
}

export default Pricing
