import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useInView from "../../hooks/useInView";
import {  scaleIn } from "../../hooks/variants";

const About = () => {
  const [setRef1, inView1] = useInView({ threshold: 0.1 });

  return (
    <section
      id="about"
      className=" min-h-screen flex items-center justify-center"
      style={{
        height: "70vh",
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
        variants={scaleIn(0.1)}
        className=" w-1/2 flex flex-col items-center justify-center"
      >
        <p className="text-5xl font-anton text-white text-center ">&#8220;</p>
        <h1 className="text-5xl font-anton text-white text-center">
          GORILLA FITNESS IS CENTRAL IN HELPING ME GAIN THE STAMINA FOR MY
          RECENT CAMPIONSHIP.
        </h1>
        <p className="text-sm font-anton text-white text-center mt-6">
          {" "}
          - Aman Aziz{" "}
        </p>
      </motion.div>
    </section>
  );
};

export default About;
