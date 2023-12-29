import React, { useEffect, useState } from 'react';

function Filtro() {
  
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState('');

  const products = [
    {
      '123456': {
        product_name: 'Pepsi',
        datos_query : ["data"],
        price_range: 30,
        different_market: 15,
        
      },
    },
    {
      '234567': {
        product_name: 'Coca-Cola',
        datos_query : ["data"],
        price_range: 40,
        different_market: 25,
      }
    },
    {
      '345678': {
        product_name: '7 Up',
        datos_query : ["data"],
        price_range: 50,
        different_market: 5,
      }
    },
    {
      '456789': {
        product_name: 'Fanta',
        datos_query : ["data"],
        price_range: 20,
        different_market: 35,
      },
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = products
        .map(item => Object.values(item)[0])
        .filter(product =>
          product.product_name.toLowerCase().includes(filter.toLowerCase())
        );

      setFilteredProducts(filtered);
    }, 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [filter]);

  const handleInputChange = event => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar"
        value={filter}
        onChange={handleInputChange}
      />
      {filteredProducts.map((product, index) => (
        <div key={index}>
          <h3>{product.product_name}</h3>
          <p>Rango de precios: {product.price_range}</p>
          <p>Mercados diferentes: {product.different_market}</p>
        </div>
      ))}
    </div>
  );
}

export default Filtro;
