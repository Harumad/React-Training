import React from 'react'

const Blog = ({ doc5, doc6, doc7 }) => {
  return (
    <>
      <h2 className="text-4xl font-extrabold text-center text-gray-800 tracking-tight mb-4">
        Latest Blog Posts
      </h2>
      <p className="text-gray-600 text-center mb-12 w-[700px] mx-auto leading-relaxed">
        Stay informed with the latest dental care tips, news, and professional
        advice.
      </p>

      <div className="flex gap-6 justify-center">
        <div className="w-[300px] bg-white p-4 rounded-2xl shadow-lg border-t-4 border-indigo-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-center h-[220px] mb-4">
            <img
              src={doc5}
              alt="Tooth Removal"
              className="w-[220px] h-[220px] rounded object-cover"
            />
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Top 5 Tips for a Brighter Smile
          </h3>
          <p className="text-gray-600 mb-4 leading-snug">
            Learn simple and effective ways to keep your smile healthy and
            radiant every day.
          </p>
          <a href="#" className="font-bold text-indigo-600 hover:underline">
            Read more
          </a>
        </div>

        <div className="w-[300px] bg-white p-4 rounded-2xl shadow-lg border-t-4 border-indigo-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-center h-[220px] mb-4">
            <img
              src={doc6}
              alt="Dental X-ray"
              className="w-[220px] h-[220px] rounded object-cover"
            />
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Benefits of Regular Checkups
          </h3>
          <p className="text-gray-600 mb-4 leading-snug">
            Discover why regular dentist visits are essential for long-term oral
            health.
          </p>
          <a href="#" className="font-bold text-indigo-600 hover:underline">
            Read more
          </a>
        </div>

        <div className="w-[300px] bg-white p-4 rounded-2xl shadow-lg border-t-4 border-indigo-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-center h-[220px] mb-4">
            <img
              src={doc7}
              alt="Dental Implants"
              className="w-[220px] h-[220px] rounded object-cover"
            />
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Understanding Dental Implants
          </h3>
          <p className="text-gray-600 mb-4 leading-snug">
            Everything you should know about dental implants and how they
            restore confidence.
          </p>
          <a href="#" className="font-bold text-indigo-600 hover:underline">
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default  Blog;