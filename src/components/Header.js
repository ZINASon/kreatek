import React from 'react';

export default function Header(props) {
  //search countCartItems from props
  const { countCartItems } = props;
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Acilla Shopping</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {//check count cart item
          countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin">SignIn</a>
      </div>
    </header>
  );
}
