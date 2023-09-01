import React from 'react';

export default function Product(props) {
  ///extracting props
  const { product, onAdd } = props;
  //define product
  return (
    <div>
      <div>
        <img className="small" src={product.image} alt=""></img>
        <h2>{product.title}</h2>
        <h5>Price: ${product.price}</h5>
        <h5>Stock: {product.stock}</h5>
        <h5>Price_Gift: ${product.price_g}</h5>
      </div>
      <div>
        <button onClick={() => onAdd(product)}>Add to cart</button>
      </div>
    </div>
  );
}
