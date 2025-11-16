import React from 'react'

const Services2 = ({ whitetee1, whitetee, whit2, tooth }) => {
  return (
    <>
      <section className="py-14 bg-white">
        <div className="w-[1000px] mx-auto px-6">
          <div className="text-center flex gap-6">
            <div className="w-[250px] bg-gradient-to-b from-gray-50 to-white p-2 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <img
                src={whitetee1}
                alt="Teeth Whitening Service"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Teeth Whitening
              </h3>
            </div>

            <div className="w-[250px] bg-gradient-to-b from-gray-50 to-white p-2 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <img
                src={whitetee}
                alt="Teeth Cleaning Service"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Teeth Cleaning
              </h3>
            </div>

            <div className="w-[250px] bg-gradient-to-b from-gray-50 to-white p-2 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <img
                src={whit2}
                alt="Quality Brackets Service"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Quality Brackets
              </h3>
            </div>

            <div className="w-[250px] bg-gradient-to-b from-gray-50 to-white p-2 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <img
                src={tooth}
                alt="Dental Implants Service"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Dental Implants
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services2