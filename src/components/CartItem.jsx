import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { updateQty, removeFromCart } = useCart();

  return (
    <div className="grid grid-cols-12 items-center gap-3 border-b py-3">
      <div className="col-span-3 sm:col-span-2">
        <img
          src={item.image}
          alt={item.name}
          className="h-16 w-24 object-cover rounded-xl"
        />
      </div>
      <div className="col-span-5 sm:col-span-4">
        <div className="font-semibold">{item.name}</div>
        <div className="text-sm text-neutral-600">{item.description}</div>
      </div>
      <div className="col-span-4 sm:col-span-2 font-medium">{item.price}</div>
      <div className="col-span-6 sm:col-span-2 flex items-center gap-2">
        <button
          className="btn btn-ghost px-3"
          onClick={() => updateQty(item.id, -1)}
        >
          -
        </button>
        <span className="w-8 text-center">{item.qty}</span>
        <button
          className="btn btn-ghost px-3"
          onClick={() => updateQty(item.id, +1)}
        >
          +
        </button>
      </div>
      <div className="col-span-6 sm:col-span-1 font-semibold">
        {item.qty * item.price}
      </div>
      <div className="col-span-12 sm:col-span-1">
        <button
          className="text-red-600 hover:underline"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
