import { useEffect, useState } from "react";

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/product/")
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching products:", error)
      );
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold underline">
        <div className="container mx-auto p-4">
          {product.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded shadow mb-4"
            >
              <h2 className="text-xl font-semibold">
                {product.name}
              </h2>

              <p className="text-gray-600">
                {product.description}
              </p>

              <p className="text-gray-800 font-bold">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </h1>
    </div>
  );
}

export default App;