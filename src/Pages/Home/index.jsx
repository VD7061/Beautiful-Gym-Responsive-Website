import React from 'react';
import backgroundImage from '../../assets/Background-removebg.png';

import Button from '../../Components/Buttons/button';
import { motion } from "framer-motion";
import useInView from "../../hooks/useInView";
import { fadeInUp } from "../../hooks/variants";

const Home = () => {
  const [setRef1, inView1] = useInView({ threshold: 0.1 });
  const [setRef2, inView2] = useInView({ threshold: 0.1 });
  const [setRef3, inView3] = useInView({ threshold: 0.1 });
  const [setRef4, inView4] = useInView({ threshold: 0.1 });
  const [setRef5, inView5] = useInView({ threshold: 0.1 });

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
          <motion.div
         
         ref={setRef1}
         initial="hidden"
         animate={inView1 ? "visible" : "hidden"}
         variants={fadeInUp(0.1)}>
          <img
            src={backgroundImage}
            alt="background"
            className="max-w-full max-h-full object-cover opacity-50"
          />
          </motion.div>
         
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <motion.div
         
         ref={setRef2}
         initial="hidden"
         animate={inView2 ? "visible" : "hidden"}
         variants={fadeInUp(0.1)}
         
         className="text-center mb-8 lg:absolute lg:bottom-12 lg:left-0 md:mb-0 md:absolute md:left-0 md:ml-20 md:text-left">
            <h1 className="text-4xl md:text-6xl font-anton text-white">
              TRAIN ON YOUR
            </h1>
            <span className="block text-4xl md:text-6xl font-anton text-white">
              OWN TIME.
            </span>
          </motion.div>
          <motion.div
         
         ref={setRef2}
         initial="hidden"
         animate={inView2 ? "visible" : "hidden"}
         variants={fadeInUp(0.2)} className="lg:absolute lg:bottom-12 lg:right-0 md:absolute md:right-0 md:mr-20">
            <Button name="Join Our Gym" size="large" />
          </motion.div>
        </div>
     
      </div>
    </>
  );
};

export default Home;
