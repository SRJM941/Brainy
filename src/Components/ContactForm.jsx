import { FiPhoneCall } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { BiSolidMap } from "react-icons/bi";
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";


import React from 'react';

const ContactForm = () => {
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/4bd6/2a4d/4e2d83d5fba98fe99484d53f364895fd?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mErJpqUAmwq3hYZXvwRSpn-JCN6gSC9XFY7eOSchobQ2pSpuZ9eiZAIbIJ4PN~WcjgyCT7BZDtJ1VThIFLmhDgmCXHOXl6Qhx1WIx58s7B4Ip2rHI1BnMVJpAv8k8CgmY6UNEPuEy04A-T-i-1tBkY~YnPk-tkZkNoSfJw2jTvCPIHZo8r6mu4izpuQrNiLS0AHs3PVEd~sTK21Z400pCk-oe0sq71T9K0RTOIzPVsUsDuK-5vHE9hlqCHJvTA5RUxxak261uJbFlX6v0Cn~QTyNQsXpJg1iqYA3oRdzognJTiBBMoEPxkINuq40y0McySLXUXMz2DiEsLtGAvRHTw__')`,
        }}
      ></div>

      {/* Overlay with Background Color */}
      <div className="absolute inset-0 bg-[#0E1F51E5] opacity-90"></div>

      {/* Title Section */}
      <div className="relative z-10 text-center mb-8 mt-4">
        <h2 className="text-2xl font-bold text-[#F45E31]">Get In Touch</h2>
        <h3 className="text-4xl font-bold text-white mt-0">Hey! Let's Talk</h3>
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto flex flex-col lg:flex-row items-start justify-between px-4 lg:px-8 gap-8">
        
        {/* Form Section */}
        <div className="bg-white ml-12 rounded-lg shadow-lg p-6 w-full lg:w-2/3 h-[450px] z-10">
  <form className="mt-8 space-y-4 flex flex-col items-start">
    <input
  type="text"
  placeholder="Name"
  className="w-[670px] max-w-full px-4 py-3 bg-[#F7F7F7] rounded-lg focus:outline-none focus:border-orange-500"
  style={{ height: '50px' }}
/>
    <input
      type="email"
      placeholder="Email"
      className="w-[670px] max-w-full px-4 py-3 bg-[#F7F7F7] rounded-lg focus:outline-none focus:border-orange-500"
      style={{ height: '50px' }}
    />
    <input
      type="tel"
      placeholder="Phone"
      className="w-[670px] max-w-full px-4 py-3 bg-[#F7F7F7] rounded-lg focus:outline-none focus:border-orange-500"
      style={{ height: '50px' }}
    />
    <textarea
      placeholder="Your Message"
      className="w-[670px] max-w-full px-4 py-3 bg-[#F7F7F7] rounded-lg focus:outline-none focus:border-orange-500"
      style={{ height: '100px' }}
    ></textarea>
    
    {/* Aligning button to the left */}
    <button
      className="mt-4 w-[110px] h-[45px] bg-[#F45E31] text-white font-semibold rounded-md hover:bg-orange-600 transition"
      style={{ borderRadius: '5px' }}
    >
      Send Now
    </button>
  </form>
</div>


        {/* Contact Information */}
        <div className="bg-white mr-12 rounded-lg shadow-lg p-8 w-full lg:w-[360px] h-[450px] space-y-6 z-10">
  {/* Call Anytime */}
  <div className="flex items-center space-x-4 w-full h-[70px] px-4">
    <span className="text-[#F45E31] text-2xl w-[57px] h-[70px] flex items-center justify-center rounded-lg bg-[#F7F7F7]">
      <FiPhoneCall className="text-2xl"/>
    </span>
    <div className="flex flex-col justify-start">
      <h4 className="text-lg font-semibold text-[#F45E31]">Call Anytime</h4>
      <p className="text-gray-700">+91 8130587803</p>
    </div>
  </div>

  {/* Send Email */}
  <div className="flex items-center space-x-4 w-full h-[70px] px-4">
    <span className="text-[#F45E31] text-2xl w-[90px] h-[70px] flex items-center justify-center rounded-lg bg-[#F7F7F7]">
      <IoMdMail className="text-2xl"/>
    </span>
    <div className="flex flex-col justify-start">
      <h4 className="text-lg font-semibold text-[#F45E31]">Send Email</h4>
      <p className="text-gray-700">support@brainysensei.com</p>
    </div>
  </div>

  {/* Visit Us */}
  <div className="flex items-center space-x-4 w-full h-[70px] px-4">
    <span className="text-[#F45E31] text-2xl w-[135px] h-[70px] flex items-center justify-center rounded-lg bg-[#F7F7F7]">
      <BiSolidMap className="text-2xl"/>
    </span>
    <div className="flex flex-col justify-start">
      <h4 className="text-lg font-semibold text-[#F45E31]">Visit Us</h4>
      <p className="text-gray-700">
        59-60, Block E, Noida Sector 3, Noida, Uttar Pradesh 201301
      </p>
    </div>
  </div>

  {/* Follow Us Section */}
  <div className="text-center">
    <h4 className="text-lg font-semibold text-[#0E1F51]">Follow us</h4>
    <div className="flex items-center justify-start space-x-4 mt-3">
      {/* Social Media Icons */}
      <a href="#" className="bg-[#F45E31] flex items-center justify-center h-[55px] w-[55px] p-2 rounded-md text-white hover:bg-[#F45E31]">
        <LuLinkedin className="text-2xl"/>
      </a>
      <a href="#" className="bg-[#F45E31] flex items-center justify-center h-[55px] w-[55px] p-2 rounded-md text-white hover:bg-[#F45E31]">
        <FaInstagram className="text-2xl"/>
      </a>
      <a href="#" className="bg-[#F45E31] flex items-center justify-center h-[55px] w-[55px] p-2 rounded-md text-white hover:bg-[#F45E31]">
        <SlSocialTwitter className="text-2xl"/>
      </a>
    </div>
  </div>
</div>




      </div>
    </section>
  );
};

export default ContactForm;



