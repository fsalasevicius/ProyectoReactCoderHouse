import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Header/Carousel';

const Home = () => {
    return (
      <>
        <div className="carritoContenedor">
          <Link to="/cart">
            <div className="contador">
            </div>
            <i className="fas fa-shopping-bag"></i>
          </Link>
        </div>
        <div>
          <Carousel/>
        </div>
      </>
    )
}

export default Home

