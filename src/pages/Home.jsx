import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";

export default function Home() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    // console.log("Search query:", q);
    // console.log("Selected category:", cat);
    const result = products.filter((p) => {
      const matchQ = p.name.toLowerCase().includes(q.toLowerCase());
      const matchC = cat === "All" || p.category === cat;
      return matchQ && matchC;
    });

    console.log("Filtered result:", result);
    return result;
  }, [q, cat, products]);

  return (
    <main className="container py-6">
      <div className="grid md:grid-cols-3 gap-3 mb-6">
        <input
          className="input"
          placeholder="Search products..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select
          className="select"
          value={cat}
          onChange={(e) => setCat(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
