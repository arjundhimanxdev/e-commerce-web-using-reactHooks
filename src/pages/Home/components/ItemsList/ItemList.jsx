import { useState } from "react";
import { useCart } from "../../../../hooks/useCart.js";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { cart, addToCart } = useCart();

  (async () => {
    if (items.length === 0 && !error && loading) {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
          throw new Error("failed to fetch items");
        }
        const data = await res.json();
        setItems(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  })();

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-orange-500 mb-8 text-center">
          Our Products ({cart?.length})
        </h1>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {items.map((product) => {
            const { id, thumbnail, title, brand, price } = product;
            return (
              <div
                key={id}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={thumbnail}
                  alt={title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                  <p className="text-gray-600 text-sm">{brand}</p>
                  <div className="flex justify-between items-center mt-4">
                    {price <= 6 ? (
                      <p className="text-red-500 text-md font-bold">
                        Item can't be sent
                      </p>
                    ) : (
                      <span className="text-orange-500 font-bold text-lg">
                        ₹{price}
                      </span>
                    )}
                    <button
                      onClick={() => addToCart(product)}   
                      className="cursor-pointer bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
