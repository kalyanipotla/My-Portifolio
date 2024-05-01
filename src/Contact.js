import React, { useState } from 'react';
import axios from 'axios';
import contact from "./Images/contact.png";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send-email', formData); // Update the URL
      alert('Email sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };
  return (
    <>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-10 md:mx-20 lg:mx-32 mt-5 md:mt-5 lg:mt-4 sm:mt-3">
        <div>
          <img src={contact} alt="image " className=' mt-5'/>
          <br/><br/>
          <h1 className='text-2xl  text-[#ff0080] text-xl font-semibold'>Contact Details</h1><hr className='w-1/3'></hr>
          <p className='relative mt-5'>
      <span className='absolute ml-[-23px] mt-1'>
        <FaPhone className=' text-[#ff0080]' />
      </span>
      +91 6300216971
    </p>
    <p className='relative mt-5'>
    <span className='absolute ml-[-23px] mt-1'>
      <IoMdMail className=' text-[#ff0080]'/>
      </span>
     kalyanipotla123@gmail.com
    </p>
    <p className='relative mt-5'>
    <span className='absolute ml-[-23px] mt-1'>
    <FaEarthAfrica className=' text-[#ff0080]' />
      </span>
      www.linkedin.com/in/potla-kalyani-112352216
    </p>
    <p className='relative mt-5'>
    <span className='absolute ml-[-23px] mt-1'>
    <FaLocationDot className=' text-[#ff0080]'/>
      </span>
      Jagathgirigutta, Hyderabad, Telangana, India.
    </p>
        </div>
        <div className='mt-10'>
            <h1 className='mb-10 text-[#ff0080] text-xl font-semibold'>Get In Touch</h1>
          <label className='mt-10 text-xl'>Full Name</label>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className='w-[90%] h-8 mt-4 mb-3 text-gray-500 rounded-lg p-4 text-md'/><br/>
          <label className='mt-10 text-xl'>Email Id</label><br/>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className='w-[90%] h-8 mt-4 mb-3 text-gray-500 rounded-lg p-4 text-md'/>
          <label className='mt-15 text-xl '>Message</label><br/>
          <textarea rows={2} cols={60} name="message" placeholder="Message" value={formData.message} onChange={handleChange} required className='rounded-lg text-gray-500 p-3 mb-3 mt-4'>Message</textarea>
       <div className='bg-white text-black text-center p-1 w-20 h-10 mx-auto text-md font-bold rounded-lg bg-[#ff0080]  hover:bg-[#029ce4] hover:text-white '>
       <button type="submit" onClick={handleSubmit} className='text-center  mt-1 hover:text-white'>Submit</button>
       </div>
        </div>
      

      
      </div>
    </>
  )
}

export default Contact