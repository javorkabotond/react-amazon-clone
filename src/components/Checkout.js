import React from 'react'
import { useStateValue } from '../StateProvider'
import './Checkout.css'

function Checkout() {
  const [{basket}] = useStateValue();

  return (
    <div className='checkout'>
      <img
        className="checkout_ad" 
        src='https://gos3.ibcdn.com/top-1568020025.jpg'
        alt=''
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket.map(itme => (
            <CheckoutProduct 
              item={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Checkout
