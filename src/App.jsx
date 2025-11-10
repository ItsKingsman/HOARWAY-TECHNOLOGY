import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-900">
         <ToastContainer />
        <Navbar />

        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
