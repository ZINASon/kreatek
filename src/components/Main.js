import React from 'react';
import Product from './Product';
import { useState } from 'react';
export default function Main(props) {
  const { products, onAdd } = props;
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="searchInput_Container">
        <input
          id="searchInput"
          type="text"
          placeholder="Search here from Acilla..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
      </div>
      <div className="row">
        {products
          .filter((product) => {
            if (searchTerm == '') {
              return product;
            } else if (
              product.title
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return product;
            }
          })
          .map((product) => (
            <div>
              <Product key={product.id} product={product} onAdd={onAdd} />
            </div>
          ))}
      </div>
    </main>
  );
}
