import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="p-10">
        <h1 className="text-3x1 font-bold mb-4">About Page</h1>

        <Link to="/Items" className="text-blue-600 underline hover:text-blue-800">
        Go to Items
        </Link>


      </div>
    </>
  );
}

export default About;
