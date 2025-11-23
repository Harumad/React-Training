const Footer = () => {
  return (
    <footer className="mt-5 bg-[#464545] w-full p-10 grid md:grid-cols-4 gap-6 text-gray-400 text-center">
      <div>
        <h2 className="text-4xl text-gray-100 font-bold">Categories</h2>
        <p className="pt-5">Women</p>
        <p>Men</p>
        <p>Shoes</p>
        <p>Watches</p>
      </div>

      <div>
        <h2 className="text-4xl text-gray-100 font-bold">Help</h2>
        <p className="pt-5">Track Order</p>
        <p>Returns</p>
        <p>Shipping</p>
        <p>FAQs</p>
      </div>

      <div>
        <h2 className="text-2xl text-gray-100 font-bold">GET IN TOUCH</h2>
        <p className="pt-5">8th floor, 379 Hudson St, New York</p>
        <p>NY 10018</p>
        <p>(+1) 96 716 6879</p>

        <div className="space-x-3 pt-3">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>

      <div>
        <h2 className="text-2xl text-gray-100 font-bold">NEWSLETTER</h2>
        <input
          type="email"
          placeholder="email@example.com"
          className="border-b-2 bg-transparent w-50 mt-4"
        />
        <button className="w-35 h-10 m-3 text-gray-100 rounded-3xl bg-blue-700">
          SUBSCRIBE
        </button>
      </div>
    </footer>
  );
};

export default Footer;
