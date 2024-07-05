// App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import CartPage from './pages/CartPage';

const initialPictures = [
  { id: 1, title: 'Sunset', url: 'https://via.placeholder.com/150', price: 10 },
  { id: 2, title: 'Mountains', url: 'https://via.placeholder.com/150', price: 15 },
  // Add more pictures as needed
];

function App() {
  const [pictures, setPictures] = useState(initialPictures);
  const [cartItems, setCartItems] = useState([]);

  const addPicture = (newPicture) => {
    setPictures([...pictures, newPicture]);
  };

  const removePurchasedPictures = (purchasedPictures) => {
    setPictures(pictures.filter(item => !purchasedPictures.includes(item)));
    setCartItems(cartItems.filter(item => !purchasedPictures.includes(item)));
  };

  return (
    <Router>
      <div className="p-4 bg-[#121117]">
        <nav className="mb-4 flex justify-start space-x-4 text-sm font-semibold">
          <div className="Brand text-lg">JonChoice</div>
          <RouterLink to="/" className="text-blue-500 hover:text-blue-700">Home</RouterLink>
          <RouterLink to="/upload" className="text-blue-500 hover:text-blue-700">Upload</RouterLink>
          <RouterLink to="/cart" className="text-blue-500 hover:text-blue-700">Cart</RouterLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home pictures={pictures} cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/upload" element={<Upload addPicture={addPicture} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removePurchasedPictures={removePurchasedPictures} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
