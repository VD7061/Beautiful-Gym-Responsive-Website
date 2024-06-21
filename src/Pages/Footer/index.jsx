import React, { useEffect } from 'react';
import Pic1 from '../../assets/pic1.jpg';
import Pic2 from '../../assets/pic2.jpg';
import Pic3 from '../../assets/pic3.jpg';
import Pic4 from '../../assets/pic4.jpg';
import Pic5 from '../../assets/pic5.jpg';
import Pic6 from '../../assets/pic6.jpg';
import FormButton from '../../Components/Buttons/formButton';

import { motion } from "framer-motion";
import useInView from "../../hooks/useInView";
import { fadeInUp ,fadeInLeft , fadeInRight, scaleIn } from "../../hooks/variants";



const Contact = () => {

  const [setRef1, inView1] = useInView({ threshold: 0.1 });
  const [setRef2, inView2] = useInView({ threshold: 0.1 });
  const [setRef3, inView3] = useInView({ threshold: 0.1 });
  const [setRef4, inView4] = useInView({ threshold: 0.1 });
  const [setRef5, inView5] = useInView({ threshold: 0.1 });
 
 
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center bg-black ">
      <div className="w-full mt-20">
        <motion.div
         
          ref={setRef1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={fadeInUp(0.1)} 
          className="text-white flex flex-col items-center"
        >
          <h1 className='text-center text-2xl md:text-4xl font-anton'>
            GUWAHATI
          </h1>
          <br />
          <p className="text-center text-white">
            Adabari Tiniali
            <span className="block">
              <div>Opposite of Uco-Bank</div>
              <div>Guwahati-12</div>
              <div>Email- Gorilla@gmail.com</div>
              <div>Phone- 1233423454</div>
            </span>
          </p>
        </motion.div>
      </div>
      <div className="w-full mt-10"
       >
        <motion.div
          
          ref={setRef2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={fadeInUp(0.2)} 
          className="grid grid-cols-6 lg:grid-cols-12 gap-0"
        >
          <img src={Pic1} alt='' className="col-span-2 h-48 md:h-96 object-cover" />
          <img src={Pic2} alt='' className="col-span-2 h-48 md:h-96 object-cover" />
          <img src={Pic3} alt='' className="col-span-2 h-48 md:h-96 object-cover" />
          <img src={Pic4} alt='' className="col-span-2 h-48 md:h-96 object-cover" />
          <img src={Pic5} alt='' className="col-span-2 h-48 md:h-96 object-cover" />
          <img src={Pic6} alt='' className="col-span-2 h-48 md:h-96 object-cover" />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full mt-10 md:mt-20">
        <motion.div
          
          ref={setRef3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={fadeInUp(0.3)}  className="col-span-1 md:col-span-8 px-4 md:px-10" >
          <h1 className='text-2xl md:text-4xl font-anton text-white'>
            STAY UPDATED
          </h1>
          <br />
          <p className="text-white text-xs md:text-sm ">
            Sign up to be the first to find out when we add new classes, amenities, and more. We respect 
            <span className="block">
              <div>your privacy and will never share your information with any third-party vendors.</div>
            </span>
          </p>
        </motion.div>
        <div className="col-span-1 md:col-span-4 px-4 md:px-10">
          
          <motion.div
          
          ref={setRef4}
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={fadeInUp(0.4)}  className="flex flex-col md:flex-row items-center md:mt-12  "
         >
            <input
              placeholder='Enter your email'
              type="text"
              id="email"
              className="w-full md:w-2/3 border border-gray-400 p-2 mb-4 md:mb-0  mt-5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <FormButton
              name="Submit"
              size="large"
              className="w-full md:w-auto ml-0 md:ml-5 bg-transparent border-2 border-white hover:bg-white text-white hover:text-black rounded-full font-bold  mt-5 transition-colors duration-300"
            />
          </motion.div>
          
        </div>
  
      </div>
      <motion.hr
       ref={setRef5}
       initial="hidden"
       animate={inView5 ? "visible" : "hidden"}
       variants={fadeInUp(0.5)} 
       
       style={{width:"95vw"}} className=" border-t-2 border-gray-500 my-10" />
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.1687644845647!2d91.68215727541366!3d26.158632677104666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5b30c4885ad5%3A0x4f03abdddbfe69c4!2sGorilla%20fitness!5e0!3m2!1sen!2sin!4v1718999541869!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: '10px solid white' }}
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  className='mb-5'
  
></iframe>

    </section>
  )
}

export default Contact;
