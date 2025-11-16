import React from 'react'

const Ourteam = ({ doc1, doc2, doc3, doc4}) => {
  return (
    <>
      <h2 className="text-4xl font-extrabold text-center text-gray-800 tracking-tight mb-6">
        Meet Our Expert Team
      </h2>

      <section className="bg-white flex gap-6 justify-center p-6">
        <div className="w-[300px] bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-indigo-600 flex flex-col items-center p-6">
          <div className="mb-4">
            <img
              src={doc1}
              alt="Dr. Patrick Jacobson - Dentist"
              className="w-[250px] h-[250px] rounded-xl mb-4 object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-1">
            Patrick Jacobson
          </h3>
          <p className="text-gray-600">Dentist</p>
        </div>

        <div className="w-[300px] bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-indigo-600 flex flex-col items-center p-6">
          <div className="mb-4">
            <img
              src={doc2}
              alt="Dr. Sarah Thompson - Dentist"
              className="w-[250px] h-[250px] rounded-xl mb-4 object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-1">
            Sarah Thompson
          </h3>
          <p className="text-gray-600">Dentist</p>
        </div>

        <div className="w-[300px] bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-indigo-600 flex flex-col items-center p-6">
          <div className="mb-4">
            <img
              src={doc3}
              alt="Dr. Michael Reed - Dentist"
              className="w-[250px] h-[250px] rounded-xl mb-4 object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-1">
            Michael Reed
          </h3>
          <p className="text-gray-600">Dentist</p>
        </div>

        <div className="w-[300px] bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-indigo-600 flex flex-col items-center p-6">
          <div className="mb-4">
            <img
              src={doc4}
              alt="Dr. Joshua - Dentist"
              className="w-[250px] h-[250px] rounded-xl mb-4 object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-1">Joshua</h3>
          <p className="text-gray-600">Dentist</p>
        </div>
      </section>

      <section className="bg-gray-200 py-16 px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 tracking-tight mb-4">
          What Our Patients Say
        </h2>
        <p className="text-gray-600 text-center mb-12 w-[700px] mx-auto leading-relaxed">
          A small river named Duden flows by their place, offering a truly
          serene dental experience.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg border-l-4 border-indigo-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-gray-600 mb-4 italic">
              "The best dental experience! The staff is friendly, and the
              environment is so calming."
            </p>
            <h3 className="font-semibold text-gray-800">John Doe</h3>
          </div>

          <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg border-l-4 border-indigo-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-gray-600 mb-4 italic">
              "I was nervous at first, but the team made me feel completely
              comfortable. Highly recommend!"
            </p>
            <h3 className="font-semibold text-gray-800">Smith</h3>
          </div>

          <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg border-l-4 border-indigo-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-gray-600 mb-4 italic">
              "Professional and efficient — my teeth have never looked better!"
            </p>
            <h3 className="font-semibold text-gray-800">Emily Johnson</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourteam