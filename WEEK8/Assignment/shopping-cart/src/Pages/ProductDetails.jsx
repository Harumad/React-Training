import { useParams, Link } from "react-router-dom";
import products from "../Data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="p-6">Product not found</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="mb-4">Price: GHS {product.price}</p>

      <Link
        to="/products"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Back to Products
      </Link>
    </div>
  );
}

export default ProductDetails;
