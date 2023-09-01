import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';

function App() {
  //
  const { products } = data;
  //State to Manage Cart Items with default enter (empty array)
  const [cartItems, setCartItems] = useState([]);
  //function onAdd to Cart: accept the product that will be added to the cart
  const onAdd = (product) => {
    //check Variable
    const exist = cartItems.find((x) => x.id === product.id);
    //if the product exist find the product in the cart item and increase the quantity of this product
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    }
    //the product does not exist i need to added
    else {
      //array concatination
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  //Remove product from cart
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length} />
      <div className="row">
        <Main onAdd={onAdd} products={products} />
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
