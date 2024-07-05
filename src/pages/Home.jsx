// Home.jsx

import React from 'react';
import Picture from '../components/Picture';

function Home({ pictures, cartItems, setCartItems }) {
  const isInCart = (picture) => {
    return cartItems.some(item => item.id === picture.id);
  };

  const addToCart = (picture) => {
    if (!isInCart(picture)) {
      setCartItems([...cartItems, picture]);
    }
  };

  const removeFromCart = (picture) => {
    const updatedCart = cartItems.filter(item => item.id !== picture.id);
    setCartItems(updatedCart);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {pictures.map((picture) => (
        <div key={picture.id} className="border rounded-lg overflow-hidden shadow-lg">
          <Picture picture={picture} />
          <div className="p-4">
            <p className="text-lg font-semibold">{picture.title}</p>
            <p className="text-gray-600">${picture.price}</p>
            {isInCart(picture) ? (
              <button
                onClick={() => removeFromCart(picture)}
                className="bg-red-500 text-white py-1 px-4 mt-2 rounded hover:bg-red-600 transition-colors duration-300"
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={() => addToCart(picture)}
                className="bg-blue-500 text-white py-1 px-4 mt-2 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
