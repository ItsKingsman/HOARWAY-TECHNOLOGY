import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error("Failed to parse cart from localStorage:", err);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Cart updated:", cart);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        // console.log(`Increasing quantity for: ${product.name}`);
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      console.log(`Adding new product: ${product.name}`);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      console.log("Removed item, new cart:", updated);
      return updated;
    });
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p
      )
    );
    console.log(`Updated quantity for product ID: ${id}, change: ${delta}`);
  };

  const clearCart = () => {
    setCart([]);
    // console.log(" Cart cleared");
  };

  const totals = useMemo(() => {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const grandTotal = cart.reduce(
      (sum, item) => sum + item.qty * item.price,
      0
    );
    return { totalItems, grandTotal };
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty, clearCart, totals }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
