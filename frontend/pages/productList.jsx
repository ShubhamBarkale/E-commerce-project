import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";

function ProductList() {
  const [product, setProduct] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;

  useEffect(() => {
    fetch(`${BASEURL}/api/product/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      
      <h1 className="text-3xl font-bold text-center mb-8">
        Product List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        
        {product.length > 0 ? (
          product.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products available.
          </p>
        )}

      </div>
    </div>
  );
}

export default ProductList;