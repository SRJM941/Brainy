import React from 'react';
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0E1F51] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mx-12 md:flex-row justify-between items-start md:space-x-8">
          {/* 1st part */}
          <div className="flex-1 mb-8 md:mb-0 flex flex-col items-start">
  <div className="flex items-center space-x-2">
    <img
      src="https://s3-alpha-sig.figma.com/img/6549/72c7/8275938ae7c450acb269d99fafe89fb6?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pJiXbEB6wUexLlbxTXCuEHWHdqUX3Pzh5vbFzvk4gPFMs7R3gsSq-hyVfRQOyJlca7LsvNmFu9fRtoD9jl1hlBS3zBuiB0oAJckAe6XY6acQUGji1q1SUFg041QFMaK1p1kxscPRY3G6K0f-OmS97fSDeHT7x0iKq9rsr050NsRbqeTgrRyinSU4OtZB3phRzRYFzuF5Jb8TV~fXzKKo~SR2MVoLtmjYwD7YydLN~397BGaHdcVJv1ljNhY8K4Y2aS8m1KkFp6Ke-k71QGiv3phJyqJoPvZTVoLaA~oOH4xBgsKJCYkDV5Tphix91pGYXlupkJPeEUp6wMWbT95E1g__"
      alt="Logo"
      className="w-[52px] h-[60px]"
    />
    <span className="text-xl font-bold">Brainy Sensei</span>
  </div>
  <p className="mt-4 text-sm font-light leading-7 tracking-wider text-justify w-full">
    Better insights drive smarter decisions, stronger relationships, and new growth opportunities for long-term success.
  </p>

  <div className="flex items-center justify-start space-x-4 mt-10">
    {/* Social Media Icons */}
    <a href="#" className="bg-[#FFFFFF] flex items-center justify-center h-[45px] w-[45px] p-2 rounded-md text-white hover:bg-[#F45E31]">
      <LuLinkedin className="text-xl text-[#F45E31]"/>
    </a>
    <a href="#" className="bg-[#FFFFFF] flex items-center justify-center h-[45px] w-[45px] p-2 rounded-md text-white hover:bg-[#F45E31]">
      <FaInstagram className="text-xl text-[#F45E31]"/>
    </a>
    <a href="#" className="bg-[#FFFFFF] flex items-center justify-center h-[45px] w-[45px] p-2 rounded-md text-white hover:bg-[#F45E31]">
      <FaTwitter className="text-xl text-[#F45E31]"/>
    </a>
  </div>
</div>


          {/* 2nd part */}
          <div className="flex-1 mt-4 mb-8 md:mb-0 flex flex-col items-start">
  <h2 className="text-lg font-bold mb-4">Services</h2>
  <div className="border-b-4 border-[#FF3E54] w-1/6 mb-4"></div> {/* Half bold color line */}
  <ul className="space-y-4"> {/* Adjusted space-y to 4 */}
    <li><a href="#" className="hover:underline font-light">Software Development</a></li>
    <li><a href="#" className="hover:underline font-light">Generative AI</a></li>
    <li><a href="#" className="hover:underline font-light">LLM and Chatbot Development</a></li>
    <li><a href="#" className="hover:underline font-light">AI Customization</a></li>
    <li><a href="#" className="hover:underline font-light">Tech Team for Your Company</a></li>
    <li><a href="#" className="hover:underline font-light">Edutech Solution</a></li>
  </ul>
</div>


          {/* 3rd part */}
          <div className="flex-1 mb-8 mt-4 md:mb-0 flex flex-col items-start">
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <div className="border-b-4 border-[#FF3E54] w-1/6 mb-4"></div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline font-light">Home</a></li>
              <li><a href="#" className="hover:underline font-light">About</a></li>
              <li><a href="#" className="hover:underline font-light">Services</a></li>
              <li><a href="#" className="hover:underline font-light">Portfolio</a></li>
              <li><a href="#" className="hover:underline font-light">Contact</a></li>
            </ul>
          </div>

          {/* 4th part */}
          <div className="flex-1 mb-8 mt-4 md:mb-0 flex flex-col items-start">
            <h2 className="text-lg font-bold mb-4">Get In Touch</h2>
            <div className="border-b-4 border-[#FF3E54] w-1/6 mb-2"></div>
            <p className="mt-4 text-2xl italic font-light">Better Insights For Business Growth</p>
            
            <form className="w-full flex flex-col">
  <input 
    type="email" 
    placeholder="Email" 
    className="w-full px-4 py-2 mb-4 border rounded-md"
  />
  <div className="flex justify-end w-full"> {/* Align button to the end */}
    <button className="bg-[#F45E31] text-white px-4 py-2 rounded-md w-1/3">
      Submit
    </button>
  </div>
</form>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
