import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`fixed w-full z-20 top-0 transition-all duration-500 ${isScrolled ? "bg-black" : "bg-transparent"}`}>
      <div className="flex justify-between items-center py-4 px-6 md:px-12">
        <div className="font-anton text-xl cursor-pointer flex items-center text-white whitespace-nowrap">
          <span className="tracking-normal">Gorila Fitness</span>
        </div>

        <div className="flex items-center space-x-4 md:hidden text-white">
          <FaInstagram />
          <FaFacebook />
          <FaYoutube />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white p-2 focus:outline-none">
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        <nav className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:transform-none md:static md:flex md:flex-row md:bg-transparent md:space-x-6`}>
          {isOpen && (
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-white p-2 focus:outline-none md:hidden">
              <FaTimes className="text-2xl" />
            </button>
          )}
          <a href="#home" className="text-white text-lg md:text-xs py-2 px-4 md:py-0 md:px-0 hover:text-gray-600" onClick={(e) => { e.preventDefault(); scrollToSection("#home"); setIsOpen(false); }}>Home</a>
          <a href="#content" className="text-white text-lg md:text-xs py-2 px-4 md:py-0 md:px-0 hover:text-gray-600" onClick={(e) => { e.preventDefault(); scrollToSection("#content"); setIsOpen(false); }}>Content</a>
          <a href="#pricing" className="text-white text-lg md:text-xs py-2 px-4 md:py-0 md:px-0 hover:text-gray-600" onClick={(e) => { e.preventDefault(); scrollToSection("#pricing"); setIsOpen(false); }}>Visit</a>
          <a href="#about" className="text-white text-lg md:text-xs py-2 px-4 md:py-0 md:px-0 hover:text-gray-600" onClick={(e) => { e.preventDefault(); scrollToSection("#about"); setIsOpen(false); }}>About</a>
          <a href="#contact" className="text-white text-lg md:text-xs py-2 px-4 md:py-0 md:px-0 hover:text-gray-600" onClick={(e) => { e.preventDefault(); scrollToSection("#contact"); setIsOpen(false); }}>Contact Details</a>

          <div className="flex space-x-4 mt-4 md:mt-0 text-white md:hidden">
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
          </div>
        </nav>

        <div className="hidden md:flex items-center space-x-4 text-white">
          <FaInstagram />
          <FaFacebook />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
