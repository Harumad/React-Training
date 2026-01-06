import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-400 text-white p-4 flex gap-6">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  );
}
