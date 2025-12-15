import React from 'react'
import {Link} from 'react-router-dom'

const Services = () => {
  return (
    <div className='p-10'>
      <h1 className='text-3x1 font bold mb-4'>Services</h1>
      <Link to="/Items" className='text-blue-600 underline hover:text-blue-800'>
      Go to Items Page
      </Link>
    </div>
  );
}

export default Services
