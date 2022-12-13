import React, { useState} from 'react';
import Header from './components/layout/Header'
import AvailableMenu from './components/Meals/AvailableMenu';
import Cart from './components/cart/Cart'
import CartProvider from './store/CartProvider';

function App() {
  
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart = {showCartHandler}></Header>
      <main>
        <AvailableMenu />
      </main>
    </CartProvider>
  );
}

export default App;
