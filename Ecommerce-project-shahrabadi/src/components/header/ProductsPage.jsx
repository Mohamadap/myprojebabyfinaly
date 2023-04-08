import React, { useState } from 'react';
import { product } from "../../assets/data/data";
import '../../Productsearchcss.css'

export const ProductsPage = () => {
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
    <>
    
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search for a product" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div>
        {searchResults.length > 0 ? searchResults.map((product, index) => (
          <div key={index}>
            <img src={product.cover} alt="" />
            <h2>{product.name}</h2>
            <p>{product.price + "$"}</p>
          </div>
        )) : searchTerm === '' ? null : product.map((product, index) => (
          <div key={index}>
            <img src={product.cover} alt="" />
            <h2>{product.name}</h2>
            <p>{product.price + "$"}</p>
          </div>
          
        ))}
        
      </div>
    
    
 </>   
  );
}