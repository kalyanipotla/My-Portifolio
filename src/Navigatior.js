import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navigatior = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-[#003366] p-4 text-xl">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-10 md:mx-60 lg:mx-32 mt-5 md:mt-5 lg:mt-4 sm:mt-3">
        <div className="flex items-center">
          <Link to="/" className="text-[#ff0080]  text-4xl font-bold">
            Kalyani
          </Link>
        </div>
        <div className="md:hidden ml-[105px]">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2 5h20a1 1 0 010 2H2a1 1 0 110-2zm0 6h20a1 1 0 010 2H2a1 1 0 010-2zm0 6h20a1 1 0 010 2H2a1 1 0 110-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          <div className="">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 text-white mr-4 hover:text-[#ff0080]"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block mt-4 md:inline-block md:mt-0 text-white mr-4 hover:text-[#ff0080]"
            >
              About
            </Link>
            <Link
              to="/Services"
              className="block mt-4 md:inline-block md:mt-0 text-white  mr-4 hover:text-[#ff0080]"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-[#ff0080]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigatior;
