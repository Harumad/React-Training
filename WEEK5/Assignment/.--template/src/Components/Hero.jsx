import React from 'react'


const Hero = () => {
  return (
    <section
      className="w-full h-[80vh] md:h-[90vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg')",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-xl text-gray-800 animate-fadeIn">
          <span className="uppercase tracking-wide text-sm text-gray-600">
            Women Collection 2025
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-3 mb-6">
            New arrivals
          </h1>

          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg inline-block transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;