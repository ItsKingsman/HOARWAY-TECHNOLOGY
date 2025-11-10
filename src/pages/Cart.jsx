import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQty, removeFromCart, totals, clearCart } = useCart();
  const [placingOrder, setPlacingOrder] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    setPlacingOrder(true);
    setTimeout(() => {
      clearCart();
      navigate("/success");
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <main className="container py-10 text-center">
        <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-gray-600">
          Add products from the Home page to start shopping!
        </p>
      </main>
    );
  }

  return (
    <main className="container py-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <div className="overflow-x-auto border rounded-2xl shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3 text-center">Quantity</th>
              <th className="p-3 text-right">Subtotal</th>
              <th className="p-3"></th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-600">
                      {item.description}
                    </div>
                  </div>
                </td>

                <td className="p-3">{item.price}</td>

                <td className="p-3 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span className="min-w-[30px]">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, +1)}
                      className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </td>

                <td className="p-3 text-right font-semibold">
                  {item.price * item.qty}
                </td>

                <td className="p-3 text-center">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center border-t pt-4">
        <div className="text-gray-700">
          <p>
            Total Items:{" "}
            <span className="font-semibold">{totals.totalItems}</span>
          </p>
        </div>
        <div className="text-xl font-bold">
          Grand Total: {totals.grandTotal}
        </div>
      </div>

      <div className="mt-8 text-right">
        <button
          onClick={handlePlaceOrder}
          disabled={placingOrder}
          className={`btn px-6 py-3 rounded-xl font-semibold ${
            placingOrder
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800 active:scale-95 transition"
          }`}
        >
          {placingOrder ? "Placing Order..." : "Place Order"}
        </button>
      </div>
    </main>
  );
}
