// App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import CartPage from './pages/CartPage'; // Import CartPage

const initialPictures = [
  { id: 1, title: 'Sunset', url: 'https://img.freepik.com/free-vector/gradient-tropical-sunset-background_52683-131844.jpg', price: 10 },
  { id: 2, title: 'Mountains', url: 'https://cdn.britannica.com/36/178136-050-7F77D46B/village-Alpine-valley-canton-Saint-Moritz-Engadin.jpg', price: 15 },
  // Add more pictures as needed
];

function App() {
  const [pictures, setPictures] = useState(initialPictures);
  const [cartItems, setCartItems] = useState([]);

  const addPicture = (newPicture) => {
    setPictures([...pictures, newPicture]);
  };

  const removePurchasedPictures = (purchasedPictures) => {
    setCartItems(cartItems.filter(item => !purchasedPictures.includes(item)));
  };

  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <RouterLink to="/" className="mr-4">Home</RouterLink>
          <RouterLink to="/upload" className="mr-4">Upload</RouterLink>
          <RouterLink to="/cart" className="mr-4">Cart</RouterLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home pictures={pictures} setCartItems={setCartItems} />} />
          <Route path="/upload" element={<Upload addPicture={addPicture} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removePurchasedPictures={removePurchasedPictures} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
