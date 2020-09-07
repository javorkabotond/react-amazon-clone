import React from 'react';
import './Product.css';
function Product(props) {
  return (
    <div className='product'>
    <div className="product_info">
      <p>{props.title}</p>
        <p className="product_price">
          <small>£</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product_rating">
          {
            Array(props.rating)
            .fill()
            .map(()=> (
              <p>*</p>
            ))
          }
          
        </div>
    </div>
      <img src={props.image}/>
      <button>Add to basket</button>
    </div>
  )
}

export default Product
