import React from "react";

const Hero = ({ imgSrc }) => {
  return (
    <>
      <section
        className="pt-20 bg-cover bg-no-repeat pb-10 relative"
        style={{ backgroundImage: `url(${imgSrc})` }}>

          
        <div className="bg-gradient-to-b from-blue-500 to-black/40 absolute inset-0"></div>

        <div className="w-[1000px] mx-auto px-6 relative z-10">
          <div className="text-white w-[900px]">
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight drop-shadow-md">
              Modern Dentistry in a Calm Environment
            </h1>
            <p className="text-lg text-gray-200 mt-4">
              Experience exceptional dental care in a peaceful and professional
              setting designed for your comfort.
            </p>
            <a
              href=""
              className="mt-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-full shadow-lg"
            >
              Make an Appointment
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
