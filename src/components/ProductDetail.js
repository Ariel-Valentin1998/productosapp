//import React from 'react';
import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  //const url = '`https://fakestoreapi.com/products/${id}`';  
  const [product, setProduct] = useState({ rating: { count: 0 } })
  //function que regrasa todos los productos
  const fetchApi = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const responseJSON = await response.json()
    setProduct(responseJSON)
  }
  useEffect(() => {
    fetchApi()
  }, [id]);

  const VerDetail = () => {
    return (

      <div className='body'>
        <div className='containerDetail'>
          <div className='container1'>
            <NavLink className="back" to={`/`}>
              <div className="backDiv">
                <span style={{ marginLeft: 1 }}><strong>&nbsp;Volver</strong></span>
              </div>
            </NavLink>
          </div>
          <div className='container1'>
            <div className='card-product'>
              <img src={product.image} />
            </div>
          </div>

          <div className='container2'> <strong></strong>
            <div className='informacion'>
              <p> <strong>{product.title}</strong></p>
              <div className='precan'>
                <div className='box-precio'>
                  <p><strong>Cantidad de piezas:</strong><br></br>{product.rating.count}</p>
                </div>
                <div className='box-precio'>
                  <p> <strong>Precio:</strong><br></br>${product.price}</p>
                </div>
              </div>
            </div>
            <div className='detalle'>
            <p> <strong>Detalle del producto:</strong></p>
            <h6> <strong>{product.description}</strong></h6>
            </div>
          </div>
          <br></br>
        </div>
      </div>
    );
  }
  return (
    <div className='body'>
      <VerDetail />
    </div>
  );

}
export default ProductDetail