import React from 'react';
import './Menu.css'; 

const Menu = () => {
  return (
    <section id="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        <div className="menu-item">
          <img src="/images/menu-item-1.png" alt="Starter" />
          <h3>Magnam Tiste</h3>
        </div>
        <div className="menu-item">
          <img src="/images/menu-item-2.png" alt="Breakfast" />
          <h3>Aut Luia</h3> 
        </div>
        <div className="menu-item">
          <img src="/images/menu-item-3.png" alt="Lunch" />
          <h3>Est Eligendi</h3>
        </div>
        <div className="menu-item">
          <img src="/images/menu-item-4.png" alt="Dinner" />
          <h3>Eos Luibusdam</h3>
        </div>
        <div className="menu-item">
          <img src="/images/menu-item-5.png" alt="Dessert" />
          <h3>Eos Luibusdam</h3>
        </div>
        <div className="menu-item">
          <img src="/images/menu-item-6.png" alt="Drinks" />
          <h3>Laboriosam Direva</h3>
        </div>
      </div>
    </section>
  );
}

export default Menu;
