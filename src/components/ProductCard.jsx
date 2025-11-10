import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
    // alert("Added to Cart Successfully");
    toast.success("Added to Cart Successfully");
  };

  return (
    <div className="card h-full flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="h-80 w-full object-cover rounded-xl"
      />
      <div className="mt-3 flex-1">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-neutral-600 mt-1">{product.description}</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-bold">{product.price}</span>
        <button className="btn btn-primary" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
