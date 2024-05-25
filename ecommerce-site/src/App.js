// src/App.js

import React, { useState } from 'react';
import StripeContext from './StripeContext';
import CheckoutForm from './CheckoutForm';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
  ]);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <StripeContext>
      <div className="App">
        <header className="App-header">
          <h1>React E-Commerce Site</h1>
        </header>
        <main className="App-main">
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <CheckoutForm total={total} />
        </main>
      </div>
    </StripeContext>
  );
};

export default App;
