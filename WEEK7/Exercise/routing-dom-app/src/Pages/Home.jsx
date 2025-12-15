import React from 'react'
import { Link } from 'react-router-dom';

function Home () {
  return (
    <>
    <div className='p-10 text-center'>
      <h1 className='text-4x1 font-bold mb-4'>Welcome to Homepage</h1>
      

      <Link to="/Items" className='mt-6 inline-block bg-blue-400 text-white px-3 rounded-lg shadow-md hover:bg-blue-700 transition'>
      Go to items page
      </Link>
      </div>

    </>
  );
}

export default Home;