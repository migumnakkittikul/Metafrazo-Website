import React, { useState } from 'react';
import logo from './logo.png';
import './NavBar.css';

function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const scrollToComponent = (componentId) => {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="NavBar">
      <header className="NavBar-header">
        {/* make the a component have a cursor: pointer style*/}
        <a style={{cursor: "pointer"}} onClick={() => scrollToComponent('header')}><img src={logo} className="NavBar-logo" alt="logo" /></a>
        <button className="hamburger-menu" onClick={() => setIsNavExpanded(!isNavExpanded)}>
          ☰ {/* Hamburger Icon*/}
        </button>
        <div className={`NavBar-links ${isNavExpanded ? "expanded" : ""}`}>
          <button className="NavBar-button" onClick={() => scrollToComponent('product-demo')}>Product</button>
          <button className="NavBar-button" onClick={() => scrollToComponent('product-visual')}>About Us</button>
        </div>
        <button className="NavBar-button NavBar-login">Login</button>
      </header>
    </div>
  );
}

export default NavBar;
