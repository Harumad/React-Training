import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 rounded shadow">
      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-3 rounded"
      />

      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="mb-2">GHS {product.price}</p>

      <div className="flex gap-2">
        <Link
          to={`/products/${product.id}`}
          className="text-blue-600 underline"
        >
          View
        </Link>

        <button
          onClick={() => addToCart(product)}
          className="bg-green-600 text-white px-3 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
