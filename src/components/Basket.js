import React from 'react';

export default function Basket(props) {
  //fetch cart items, function onAdd and onRemove from props : extracting props
  const { cartItems, onAdd, onRemove } = props;
  //define variabls
  const sold = 100;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 300 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  //const giftPrice = item.qty * item.price_g
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
      {//render list of element then for each element
      cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.title}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} * ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {//summary part
      cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">
              <strong> Total Price</strong>
            </div>
            <div className="col-1 text-right">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <div className="col-2">
            <strong> Gift Price</strong>
          </div>
          <div className="col-1 text-right">
            <strong>$</strong>
          </div>
          <hr />
          <div className="row">
            <button onClick={() => alert('Implement Checkout')}>
              Checkout
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
/*
tantque(gift=true)
if (price_g*item.qty > solde)
total_price = price*item.qty
else if (price_g*item.qty < solde)
total_price = price_g*qty
else 
total_price = price*item.qty
*/
