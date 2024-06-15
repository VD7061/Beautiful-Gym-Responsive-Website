import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";


const About = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
      offset: 200,
    });
  }, []);
  return (
    <section
      id="about"
      className="flex items-center justify-center"
      style={{
        height: '70vh',
        background: `linear-gradient(
          90deg,
          hsla(49, 64%, 57%, 1) 0%,
          hsla(29, 30%, 64%, 1) 49%,
          hsla(116, 15%, 64%, 1) 100%
        )`,
      }}
    >
      <div className=" w-1/2 flex flex-col items-center justify-center"data-aos="fade-up"
          data-aos-duration="1000">
<p className="text-5xl font-anton text-white text-center ">&#8220;</p>
        <h1 className="text-5xl font-anton text-white text-center">
          GORILLA FITNESS IS CENTRAL IN HELPING ME GAIN THE STAMINA FOR MY RECENT CAMPIONSHIP.
        </h1>
        <p className="text-sm font-anton text-white text-center mt-6"> - Aman Aziz </p>
      </div>
    </section>
  );
}

export default About;
