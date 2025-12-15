import React from 'react'
import { useParams } from 'react-router-dom';




 function Details() {

    const {id,} =useParams();
  return (
    <div className="p-10 text-center">
      <h1 className="text-3x1 font-bold mb-4">Item Details</h1>
      <p className="text-xl">
        You selected item ID:<span className='font-bold'>{id}</span></p>
    </div>
  );
}
export default Details
