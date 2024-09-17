import React from 'react';

const dishes = [
  { name: 'Dish 1', description: 'Delicious dish 1', price: '$10' },
  { name: 'Dish 2', description: 'Delicious dish 2', price: '$15' },
  { name: 'Dish 3', description: 'Delicious dish 3', price: '$20' }
];

function Menu() {
  return (
    <section id="menu">
      <h2>Menu</h2>
      <ul>
        {dishes.map((dish, index) => (
          <li key={index}>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>{dish.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Menu;