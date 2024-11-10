import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white text-black w-full h-[90px] flex justify-between items-center px-6 sm:px-10 mx-auto">
      {/* Logo and Company Name Container */}
      <div className="flex items-center space-x-1">
        <img
          src="https://s3-alpha-sig.figma.com/img/6549/72c7/8275938ae7c450acb269d99fafe89fb6?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pJiXbEB6wUexLlbxTXCuEHWHdqUX3Pzh5vbFzvk4gPFMs7R3gsSq-hyVfRQOyJlca7LsvNmFu9fRtoD9jl1hlBS3zBuiB0oAJckAe6XY6acQUGji1q1SUFg041QFMaK1p1kxscPRY3G6K0f-OmS97fSDeHT7x0iKq9rsr050NsRbqeTgrRyinSU4OtZB3phRzRYFzuF5Jb8TV~fXzKKo~SR2MVoLtmjYwD7YydLN~397BGaHdcVJv1ljNhY8K4Y2aS8m1KkFp6Ke-k71QGiv3phJyqJoPvZTVoLaA~oOH4xBgsKJCYkDV5Tphix91pGYXlupkJPeEUp6wMWbT95E1g__"
          alt="Logo"
          className="w-[52px] h-[60px]"
        />
        <span className="text-xl font-bold ">Brainy Sensei</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <a href="/" className="hover:text-gray-600">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-600">
            About
          </a>
        </li>
        <li>
          <a href="/services" className="hover:text-gray-600">
            Services
          </a>
        </li>
        <li>
          <a href="/portfolio" className="hover:text-gray-600">
            Portfolio
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-gray-600">
            Contact
          </a>
        </li>
      </ul>

      {/* Get in Touch Button */}
      <button className="bg-orange-500 text-white py-2 px-4 rounded-md hidden md:block">
        Get In Touch
      </button>

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden">
        <button className="bg-orange-500 text-white p-2 rounded-full">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
