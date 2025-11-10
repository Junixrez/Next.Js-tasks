"use client";

import { useState, useEffect } from "react";
import ProductCard from "../productCard";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();
      setData(products);
    }
    fetchProducts();
  }, []);

  return (
    <div className=" m-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
