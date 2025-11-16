import React from 'react'

const Footer1 = () => {
  return (
    <>
        <section className="bg-gray-200 pb-15">
      {/* <!-- Decorative Top Wave --> */}
      <svg
        className="relative block w-full h-12"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113.64,31.08,1200,56.86V0Z"
          fill="#FFFFFF"
        ></path>
      </svg>

      {/* <!-- Section Header --> */}
      <div className="text-center mb-2">
        <p className="text-4xl font-bold text-gray-800">Get in Touch</p>
        <p className="pt-4 text-gray-700">
          Have a question or need assistance? We’re here to help you every step
          of the way.
        </p>
      </div>

      {/* <!-- Contact Form & Info --> */}
      <div className="flex justify-center space-x-10">
        {/* <!-- Contact Form --> */}
        <div
          className="border-t-4 border-blue-600 rounded-xl shadow-lg transform hover:-translate-y-1 bg-white duration-300 w-110 h-115 p-3"
        >
          <form className="space-y-4">
            <select
              name="inquiry"
              className="w-full bg-gray-100 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Select Inquiry</option>
              <option>Appointment</option>
              <option>Billing</option>
              <option>General Inquiry</option>
            </select>

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full bg-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="mt-5 text-white rounded-lg bg-blue-600 w-full hover:bg-blue-700 h-[40px] font-semibold tracking-wide"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* <!-- Contact Info --> */}
        <div
          className="border-t-4 border-blue-600 bg-blue-900 text-white p-8 rounded-xl space-y-4 shadow-lg transform hover:-translate-y-1 duration-300 w-120 h-70"
        >
          <h3 className="font-semibold text-xl mb-4">Contact Information</h3>

          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-blue-300"></i>
              123 Duden Road, Dental City, DC 12345
            </p>

            <p className="flex items-center gap-2">
              <i className="fas fa-phone text-blue-300"></i>
              + (123) 456 7890
            </p>

            <p className="flex items-center gap-2">
              <i className="fas fa-envelope text-blue-300"></i>
              <a href="mailto:info@dentacare.com" className="hover:underline"
                >info@dentacare.com</a
              >
            </p>

            <p className="flex items-center gap-2">
              <i className="fas fa-clock text-blue-300"></i>
              Mon-Fri: 9AM - 5PM
            </p>
          </div>
        </div>
      </div>
    </section>


    </>
  )
}

export default Footer1