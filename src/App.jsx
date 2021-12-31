import React from 'react';
import { Navbar, Products, Cart } from './components/index';
import { commerce } from './lib/commerce';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    console.log(data);
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveCart = async productId => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Routes>
        <Route
          path="/"
          element={
            <Products products={products} onAddToCart={handleAddToCart} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleUpdateCartQuantity={handleUpdateCartQuantity}
              handleRemoveCart={handleRemoveCart}
              handleEmptyCart={handleEmptyCart}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
