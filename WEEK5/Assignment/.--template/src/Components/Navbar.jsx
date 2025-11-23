const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* LOGO */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png"
            alt="logo"
            className="w-28"
          />
        </a>

        {/* MENU */}
        <nav className="hidden md:flex gap-8 text-[15px] font-medium">
          <a href="#" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Shop
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Features
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Blog
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Contact
          </a>
        </nav>

        {/* ICONS */}
        <div className="flex items-center gap-6 text-xl">
          <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>

          <div className="relative cursor-pointer">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          <div className="relative cursor-pointer">
            <i className="fa-regular fa-heart"></i>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
