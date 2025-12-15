import React from 'react'
import { Link } from 'react-router-dom';




const foodItems = [
  { name: "waakye", id: 1 },
  { name: "fufu", id: 2 },
  { name: "banku", id: 3 },
  { name: "kenkey", id: 4 },
  { name: "jollof", id:5 },
];

function Items  () {
  return (
    <>
      <div className="p-10">
        <h1 className="text-3x1 font-bold mb-6">Food Items</h1>
        <div className='grid grid-cols-3 lg:grid-cols-3 gap-6'>
          {foodItems.map((items) => {
            return (
              <Link key={items.id} className='block bg-white border p-6 shadow hover:shadow-lg transition' to={"/items/" + items.id}>
                <h2 className='text-xl font-semibold capitalize'>{items.name}</h2>
              </Link>
            );
          })}
          <Link to="/about">About</Link>;
        </div>
      </div>
    </>
  );
  
}

export default Items;