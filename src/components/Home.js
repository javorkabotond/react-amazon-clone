import React from 'react'
import banner from '../images/banner.jpg'
import './Home.css';

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src={banner}
        alt=""
      />
    </div>
  )
}

export default Home
