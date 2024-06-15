import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";

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
    <div
      className={`${
        isScrolled ? "bg-black" : "bg-transparent"
      } fixed w-full z-20 top-0 duration-500`}
    >
      <div className="flex justify-between items-center py-4 mx-6 md:mx-12">
        <div className="font-anton text-2xl cursor-pointer flex items-center text-white">
          <span className="tracking-normal">Gorila Fitness</span>
        </div>

        <div className="flex items-center space-x-4 md:hidden text-white">
          <FaInstagram />
          <FaFacebook />
          <FaYoutube />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white p-2 focus:outline-none"
            style={{ position: "relative" }}
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className={`text-2xl `} />
            )}
          </button>
        </div>

        <nav
          className={`${
            isScrolled ? "bg-black" : "bg-transparent"
          } ${
            isOpen
              ? "flex flex-col absolute top-16 left-0 w-full shadow-md"
              : "hidden"
          } md:flex md:items-center md:static md:w-auto md:bg-transparent md:shadow-none md:space-x-1 font-bold`}
        >
          <a
            href="#home"
            className={`text-xs text-white hover:text-gray-600 py-2 px-4 block`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
          >
            Home
          </a>
          <a
            href="#content"
            className={`text-xs text-white hover:text-gray-600 py-2 px-4 block`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#content");
            }}
          >
            Content
          </a>
          <a
            href="#pricing"
            className={`text-xs text-white hover:text-gray-600 py-2 px-4 block`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#pricing");
            }}
          >
            Visit
          </a>
          <a
            href="#about"
            className={`text-xs text-white hover:text-gray-600 py-2 px-4 block`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#about");
            }}
          >
            About
          </a>
          <a
            href="#contact"
            className={`text-xs text-white hover:text-gray-600 py-2 px-4 block`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
          >
            Contact Details
          </a>
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
