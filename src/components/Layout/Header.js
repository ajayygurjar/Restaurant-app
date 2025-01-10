
import React from 'react';
import './Header.css';

const Header = () => {
    const cartValue=0
  return (
    <header className="header">
      <h1>ReactMeals</h1>
      <div>
        <span>🛒</span>
        <span>Your Cart {cartValue}</span> 
      </div>
    </header>
  );
};

export default Header;

