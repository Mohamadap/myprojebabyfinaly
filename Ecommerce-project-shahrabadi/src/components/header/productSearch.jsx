import React, { useState } from 'react';
import { product } from '../../assets/data/data';

export function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    const searchTermInt = parseInt(searchTerm);
    const filteredProducts = product.filter(product => {
      const isNameMatched = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const isIdMatched = product.id === searchTermInt;
      return isNameMatched || isIdMatched;
    });

    setSearchResults(filteredProducts);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search for a product" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div>
        {searchResults.map((product, index) => (
          <div className='product-box' key={index}>
            <div className='product-img'>
              <img src={product.image} alt={product.name} />
            </div>
            <div className='product-details'>
              <div className='product-name'>{product.name}</div>
              <div className='product-price'>{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}