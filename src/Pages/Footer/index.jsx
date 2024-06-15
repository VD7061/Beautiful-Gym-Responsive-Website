import React, { useEffect } from 'react';
import Pic1 from '../../assets/pic1.jpg';
import Pic2 from '../../assets/pic2.jpg';
import Pic3 from '../../assets/pic3.jpg';
import Pic4 from '../../assets/pic4.jpg';
import Pic5 from '../../assets/pic5.jpg';
import Pic6 from '../../assets/pic6.jpg';
import FormButton from '../../Components/Buttons/formButton';
import Aos from 'aos';
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
      offset: 200,
    });
  }, []);
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center bg-black ">
      <div className="w-full mt-20">
        <div className="text-white flex flex-col items-center"
        data-aos="fade-up"
        data-aos-duration="1000">
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
        </div>
      </div>
      <div className="w-full mt-10"
       data-aos="fade-up"
       data-aos-duration="900">
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-0"
        >
          <img src={Pic1} alt='' className="col-span-2 h-48 md:h-96 object-cover" />
          <img src={Pic2} alt='' className="col-span-2 h-48 md:h-96 object-cover" />
          <img src={Pic3} alt='' className="col-span-2 h-48 md:h-96 object-cover" />
          <img src={Pic4} alt='' className="col-span-2 h-48 md:h-96 object-cover" />
          <img src={Pic5} alt='' className="col-span-2 h-48 md:h-96 object-cover" />
          <img src={Pic6} alt='' className="col-span-2 h-48 md:h-96 object-cover" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full mt-10 md:mt-20">
        <div className="col-span-1 md:col-span-8 px-4 md:px-10" data-aos="fade-left"
         data-aos-duration="800">
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
        </div>
        <div className="col-span-1 md:col-span-4 px-4 md:px-10">
          
          <div className="flex flex-col md:flex-row items-center md:mt-12  "
          data-aos="fade-right"
          data-aos-duration="800">
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
          </div>
          
        </div>
  
      </div>
      <hr  style={{width:"95vw"}} className=" border-t-2 border-gray-500 my-10" />
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.1687644845647!2d91.68215727541366!3d26.158632677104666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5b30c4885ad5%3A0x4f03abdddbfe69c4!2sGorilla%20fitness!5e0!3m2!1sen!2sin!4v1718487617465!5m2!1sen!2sin"
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
