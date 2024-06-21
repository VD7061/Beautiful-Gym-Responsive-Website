import React, { useEffect } from 'react'
import PricingForm from '../../Components/PricingForm/pricingForm'
import { motion } from "framer-motion";
import useInView from "../../hooks/useInView";
import { fadeInUp ,fadeInLeft , fadeInRight, scaleIn } from "../../hooks/variants";


const Pricing = () => {
  

  const [setRef1, inView1] = useInView({ threshold: 0.1 });
  const [setRef2, inView2] = useInView({ threshold: 0.1 });
  const [setRef3, inView3] = useInView({ threshold: 0.1 });
  const [setRef4, inView4] = useInView({ threshold: 0.1 });
  const [setRef5, inView5] = useInView({ threshold: 0.1 });

  return (
    <section id="pricing" className="min-h-screen flex items-center justify-center bg-white p-10">
      <div className="grid lg:grid-cols-2 lg:gap-20 md:grid-cols-1 gap-10 ">
        
        <motion.div
         
         ref={setRef1}
         initial="hidden"
         animate={inView1 ? "visible" : "hidden"}
         variants={fadeInUp(0.1)}  className='p-3'
       >
          <h1 className="text-4xl mb-4 font-anton">SCHEDULE A VISIT</h1>
          <p>
          Take a free 30-minute tour of either of our locations to help you decide if Gorilla is the right gym for you. You'll have the opportunity to try equipment, observe classes, and get direct answers to all of your questions.
          </p>  
        </motion.div>

        {/* Right column */}
        <motion.div
         ref={setRef2}
         initial="hidden"
         animate={inView2 ? "visible" : "hidden"}
         variants={fadeInUp(0.2)}
         className=''>
          <PricingForm />
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
