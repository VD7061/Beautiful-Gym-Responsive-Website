  import React, { useEffect } from "react";

  import gymimage1 from "../../assets/contentpic1.jpg";
  import gymimage2 from "../../assets/contentpic2.jpg";

  import { motion } from "framer-motion";
  import useInView from "../../hooks/useInView";
  import { fadeInUp ,fadeInLeft , fadeInRight } from "../../hooks/variants";


  const Content = () => {

    
    
    const [setRef1, inView1] = useInView({ threshold: 0.1 });
    const [setRef2, inView2] = useInView({ threshold: 0.1 });
    const [setRef3, inView3] = useInView({ threshold: 0.1 });
    const [setRef4, inView4] = useInView({ threshold: 0.1 });
    const [setRef5, inView5] = useInView({ threshold: 0.1 });
    return (
      <>
    
        <section id="content" className="min-h-screen bg-black">
        <div className="flex flex-col md:flex-row justify-start items-start">
          <motion.div
            className="px-4 md:px-20 py-12 md:py-48"
            ref={setRef1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={fadeInUp(0.1)}
          >
            <h1 style={{ fontSize: "57px" }} className="text-white font-anton">
              WE'RE A HIGH QUALITY GYM DEDICATED TO
              <span style={{ display: "block" }}>
                AFFORDABLE HEALTH AND WELLNESS.
              </span>
            </h1>
          </motion.div>
          <motion.div
            className="px-4 md:ml-10 py-12 md:py-48"
            ref={setRef2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={fadeInUp(0.2)}
          >
            <p
              style={{ fontSize: "19px" }}
              className="font-bold text-white md:w-[600px]"
            >
              Gorila Fitness is a gym where you come as you are, and do your best.
              Our membership offers both digital and in-club programming aimed at
              helping you achieve your fitness goals. Discover all of our club's
              offerings below.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center px-4 py-12 ">
          <motion.div
            className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0"
            ref={setRef3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={fadeInUp(0.3)}
          >
            <img
              src={gymimage1}
              alt="gymimage1"
              className="w-full max-w-xs md:max-w-none"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/3 flex justify-center"
            ref={setRef4}
            initial="hidden"
            animate={inView4 ? "visible" : "hidden"}
            variants={fadeInUp(0.4)}
          >
            <img
              src={gymimage2}
              alt="gymimage2"
              className="w-full max-w-xs md:max-w-none lg:mb-56 lg:mr-40"
            />
          </motion.div>
        </div>
        <motion.div
            
            ref={setRef5}
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={fadeInUp(0.5)}
            
            className="flex flex-col justify-center items-center px-4 py-12">
          <div className="text-center flex flex-col justify-center items-center text-md text-white">
            <h1
              style={{ fontSize: "57px" }}
              className="text-white font-anton mb-8"
            >
              AMENITIES
            </h1>
            <p className="text-center mb-10">
              At Klipsan Fitness, we're always expanding our amenities to meet the
              needs of our community.
              <br />
              Something you'd like to see added to our list? Submit a request.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center text-xs">
            <div className="flex flex-col justify-center items-center md:flex-row md:items-start">
              <ul className="text-white text-center space-y-4 mx-4 md:mx-10">
                <li className="relative">
                  Modern Facilities
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden">
                    <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
                  </div>
                </li>
                <li className="relative">
                  Premium Classes
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
                  </div>
                </li>
                <li className="relative">
                  Personal Trainers
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
                  </div>
                </li>
                <li className="relative">
                  Rockwall
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
                  </div>
                </li>
                <li className="relative">
                  Boxing Ring
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
                  </div>
                </li>
              </ul>

              <ul className="text-white text-center space-y-4 mx-4 md:mx-10">
                <li className="relative">
                  Juice Bar
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden">
                    <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
                  </div>
                </li>
                <li className="relative">
                  Personal Nutritiousness
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
                  </div>
                </li>
                <li className="relative">
                  Monthly Guest Passes
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
                  </div>
                </li>
                <li className="relative">
                  Basketball Courts
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
                  </div>
                </li>
                <li className="relative">
                  Lockers
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
      </>
    );
  };

  export default Content;
