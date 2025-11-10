import { Link } from "react-router-dom";

export default function Success() {
  return (
    <main className="container flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h2 className="text-2xl font-bold text-gray-800">
        Thank you! Your order has been placed successfully.
      </h2>
      <Link
        to="/"
        className="btn btn-primary mt-8 px-6 py-3 text-lg rounded-xl font-semibold"
      >
        Back to Home
      </Link>
    </main>
  );
}
