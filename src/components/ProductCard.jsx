import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-24 h-24 object-cover mb-4"
      />
      <h2 className="text-lg font-bold text-gray-800 mb-2">{product.title}</h2>
      <p className="text-blue-600 font-semibold mb-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Añadir al carrito
      </button>
    </div>
  );
}

export default ProductCard;
