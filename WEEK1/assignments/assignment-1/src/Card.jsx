// import React from "react";
// import Card from "./Card";



export default function Card ({image,title,description}) {
    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition p-4 w-64 text-center">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition">
          Learn More
        </button>
      </div>
    );

    
}