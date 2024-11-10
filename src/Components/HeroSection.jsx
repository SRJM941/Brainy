import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[#0E1F51] text-center text-white py-10 h-[220px] flex flex-col justify-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-[#F45E31]">Portfolio</h1>

      {/* Breadcrumb or Path */}
      <p className="mt-2 text-lg">Home / Portfolio</p>
    </section>
  );
};

export default HeroSection;

