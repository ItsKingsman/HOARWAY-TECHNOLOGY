import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { totals } = useCart();

  return (
    <header className="border-b bg-white sticky top-0 z-10">
      <nav className="container max-w-6xl mx-auto px-4 flex items-center justify-between py-3">
        <Link to="/" className="text-xl font-bold">
          E‑Commerce
        </Link>
        <div className="flex items-center gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `btn btn-secondary ${isActive ? "ring-1 ring-neutral-300" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `btn btn-secondary relative ${
                isActive ? "ring-1 ring-neutral-300" : ""
              }`
            }
          >
            {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
           {/* <i className="fa-light fa-cart-shopping text-yellow-500 text-lg"></i> */}
           <i class="fa-solid fa-cart-shopping text-lg"></i>
           
            <span className="absolute -top-2 -right-2 badge">
              {totals.totalItems}
            </span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
