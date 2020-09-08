import React from 'react'
import banner from '../images/banner.jpg'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src={banner}
        alt=""
      />
      <div className="home_row">
        <Product
          id='123456789'
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pellentesque neque.'
          price={11.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
        />
        <Product
          id='987654321'
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pellentesque neque.'
          price={239}
          rating={5}
          image='https://media.nisbets.com/asset/core/prodimage/largezoom/de032_(1).jpg'
        />
      </div>

      <div className="home_row">
        <Product
          id='123456789'
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pellentesque neque.'
          price={11.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
        />
        <Product
          id='123456789'
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pellentesque neque.'
          price={11.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
        />
        <Product
          id='123456789'
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pellentesque neque.'
          price={11.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
        />
      </div>
      
    </div>
  )
}

export default Home
