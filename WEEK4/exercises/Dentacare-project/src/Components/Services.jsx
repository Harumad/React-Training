import React from 'react'

const Services = ({ ambulance, clock,calendar }) => {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="w-[1000px] mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">
            Our Services Keep You Smiling
          </h2>
          <p className="text-gray-600 text-center mb-12 w-[700px] mx-auto">
            Explore professional dental services designed to keep your smile
            healthy, confident, and beautiful.
          </p>

          <div className="flex gap-6">
            <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg border-t-4 border-indigo-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="mb-4">
                <img
                  src={ambulance}
                  className="w-[80px] h-[40px]"
                  alt="Ambulance"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Emergency Cases
              </h3>
              <p className="text-gray-600 mb-4">
                Swift, compassionate care for urgent dental needs.
              </p>
              <p className="font-bold text-indigo-600">+ (123) 456 7890</p>
            </div>

            <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg border-t-4 border-indigo-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="mb-4">
                <img src={clock} className="w-[80px] h-[40px]" alt="Clock" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Opening Hours
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>Mon - Fri: 8:00 - 19:00</li>
                <li>Saturday: 10:00 - 17:00</li>
                <li>Sunday: 10:00 - 16:00</li>
              </ul>
            </div>

            <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg border-t-4 border-indigo-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="mb-4">
                <img
                  src={calendar}
                  className="w-[80px] h-[40px]"
                  alt="Calendar"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Book Appointment
              </h3>
              <form className="space-y-3">
                <select className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                  <option value="">Select Department</option>
                  <option value="">General Dentistry</option>
                  <option value="">Orthodontics</option>
                  <option value="">Dental Implant</option>
                </select>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />

                <div className="flex gap-2">
                  <input
                    type="date"
                    className="w-[160px] p-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                  <input
                    type="time"
                    className="w-[160px] p-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-2 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services