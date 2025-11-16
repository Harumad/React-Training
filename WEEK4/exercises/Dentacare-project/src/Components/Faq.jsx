import React from 'react'

const Faq = () => {
  return (
    <>
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-[1000px] mx-auto px-6">
        {/* <!-- Heading --> */}
        <h2
          className="text-4xl font-extrabold text-center text-gray-800 mb-4 tracking-tight"
        >
          Frequently Asked Questions
        </h2>
        <p
          className="text-gray-600 text-center mb-12 w-[700px] mx-auto leading-relaxed"
        >
          Get quick answers to the most common questions about our dental care
          and services.
        </p>

        {/* <!-- FAQs --> */}
        <div className="space-y-8">
          {/* <!-- FAQ 1 --> */}
          <details
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600"
          >
            <summary className="text-lg font-semibold text-gray-800 cursor-pointer">
              How often should I visit the dentist?
            </summary>
            <p className="text-gray-600 mt-2 leading-snug">
              We recommend visiting every six months for routine checkups and
              cleanings to keep your teeth and gums healthy.
            </p>
          </details>

          {/* <!-- FAQ 2 --> */}
          <details
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600"
          >
            <summary className="text-lg font-semibold text-gray-800 cursor-pointer">
              Does teeth whitening hurt?
            </summary>
            <p className="text-gray-600 mt-2 leading-snug">
              Our professional whitening treatments are gentle, safe, and
              typically cause little to no discomfort or sensitivity.
            </p>
          </details>

          {/* <!-- FAQ 3 --> */}
          <details
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600"
          >
            <summary className="text-lg font-semibold text-gray-800 cursor-pointer">
              What should I do in a dental emergency?
            </summary>
            <p className="text-gray-600 mt-2 leading-snug">
              If you experience a dental emergency, contact us immediately at
              <strong>+ (123) 456 7890</strong> for prompt assistance.
            </p>
          </details>
        </div>
      </div>
    </section>

    </>
  )
}

export default Faq