import React from "react";


const ProductGrid1 = () => {
  return (
    <section className="w-full mt-16 px-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Product Overview</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Category Links */}
        <div className="flex gap-6 flex-wrap text-lg">
          <a href="#" className="underline">
            All Products
          </a>
          <a href="#" className="hover:underline">
            Women
          </a>
          <a href="#" className="hover:underline">
            Men
          </a>
          <a href="#" className="hover:underline">
            Bag
          </a>
          <a href="#" className="hover:underline">
            Shoes
          </a>
          <a href="#" className="hover:underline">
            Watches
          </a>
        </div>

        {/* Buttons: Filter + Search */}
        <div className="flex gap-3 mt-5 md:mt-0">
          <button className="border px-4 py-2 flex items-center gap-2">
            <i className="fa-solid fa-filter"></i>
            Filter
          </button>

          <button className="border px-4 py-2 flex items-center gap-2">
            <i className="fa-solid fa-magnifying-glass"></i>
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid1;
