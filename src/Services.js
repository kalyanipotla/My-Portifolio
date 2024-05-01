import React from "react";
import { BsFillPhoneFill } from "react-icons/bs";
import { BsLaptopFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
const Services = () => {
  return (
    <>
      <h1 className="text-center  text-3xl font-bold text-[#ff0080]  mt-20">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5  mx-5 md:mx-10 lg:mx-10 mt-5 md:mt-10 ">
        <div class="max-w-sm p-6 bg-white  rounded-lg hover:bg-[#029ce4] hover:text-white  ">
          <BsFillPhoneFill className="w-6 h-10  text-[#ff0080]  text-center mx-auto" />
          <h5 class="mb-2 text-2xl font-bold text-black ">
            Software Developer
          </h5>

          <p class="mb-3 font-normal text-black">
            Checkout My Work and Skills and feel free to get in touch if you
            want to work with me
          </p>
        </div>

        <div class="max-w-sm p-6 bg-white hover:bg-[#029ce4] hover:text-white  rounded-lg">
          <BsLaptopFill className="w-6 h-10 text-[#ff0080]  text-center mx-auto "/>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Frontend Developer
          </h5>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Checkout My Work and Skills and feel free to get in touch if you
            want to work with me.
          </p>
        </div>

        <div class="max-w-sm p-6 bg-white rounded hover:bg-[#029ce4] hover:text-white  rounded-lg">
          <FaCode className="w-6 h-10  text-[#ff0080] text-center mx-auto"/>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Web Developer
          </h5>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Checkout My Work and Skills and feel free to get in touch if you
            want to work with me.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
