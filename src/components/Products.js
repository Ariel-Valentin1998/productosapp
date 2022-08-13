//import React from 'react';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Products() {
  const url = 'https://fakestoreapi.com/products'
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(data);
  //function que regrasa todos los productos
  const fetchApi = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(data)
    setProducts(data)
  }
  useEffect(() => {
    fetchApi()
  }, []);
  // const [products, setProducts] = useState([]);
  // const [product, setProduct] = useState(setProducts);

  // const initialUrl = 'https://fakestoreapi.com/products';
  // const fetchProducts= (url) => {
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data => setProducts(data))
  //   .catch(error => console.log(error))
  // };
  // useEffect(() => {
  //   fetchProducts(initialUrl);
  // }, []);


  const ListaProducts = () => {
    return (
      <>
      <div className='conteiner'>
        {products.map((item) => (
          <div key={item.id} className='contes '>
            <NavLink className="back" to={`productDetail/${item.id}`}>
                            <div className="backDiv">
                                <span style={{marginLeft : 1}}><strong>&nbsp;Ver</strong></span>
                            </div>
            
            <div className='cards products'>
              <img src={item.image} alt="" />
            </div>
            <div className='informacions'>
              <h1>{item.title}</h1>
            </div>
            <div className='precios'>
              <div className='box-precios'>
                <span className='piezas'>{item.rating.count}</span>
                <span className='precios2'><b>${item.price}</b></span>
              </div>
            </div>
            </NavLink>
          </div>
        ))}
      </div>
      </>
    )
  }
  return (
    <ListaProducts />
  );
}
export default Products