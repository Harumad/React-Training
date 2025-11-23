import React from 'react'


const categories = [
  {
    title: "Women",
    subtitle: "Spring 2018",
    img: "https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp",
  },
  {
    title: "Men",
    subtitle: "Spring 2018",
    img: "https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp",
  },
  {
    title: "Accessories",
    subtitle: "Spring 2018",
    img: "https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg.webp",
  },
];

const Category = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-16">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="relative bg-cover bg-center w-full h-[220px] md:h-[260px] lg:h-[300px] cursor-pointer transition-all duration-300 hover:opacity-80 shadow-md rounded"
          style={{ backgroundImage: `url(${cat.img})` }}
        >
          <div className="absolute top-6 left-6 text-white drop-shadow-lg">
            <h2 className="text-3xl font-bold">{cat.title}</h2>
            <p className="text-lg">{cat.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Category;
