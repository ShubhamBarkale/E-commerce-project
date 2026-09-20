function ProductCard({ product }) {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">

      <img
        src={`${BASEURL}${product.image}`}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />

      <h2 className="text-lg font-semibold text-gray-800 mt-3">
        {product.name}
      </h2>

      <p className="text-xl font-bold text-gray-900 mt-2">
        ${product.price}
      </p>

    </div>
  );
}

export default ProductCard;