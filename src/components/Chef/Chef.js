import React from 'react';
import './Chef.css';

const chefs = [
  {
    name: " Chef Rafael Santoso",
    position: "Master Chef",
    image: "/images/chefs/chefs-1.jpg",
    description: "Memasak adalah seni yang menghubungkan kita dengan orang lain. Jangan takut untuk berinovasi dan mencoba hal baru! Ingat, bahan berkualitas dan cinta dalam setiap hidangan adalah kunci untuk menciptakan pengalaman kuliner yang tak terlupakan."
  },
  {
    name: "Chef Lila Putri",
    position: "Pâtissier",
    image: "/images/chefs/chefs-2.jpg",
    description: "Di dunia pastry, setiap detil berarti. Jangan ragu untuk bereksperimen dengan rasa dan tekstur! Dengan ketekunan dan kreativitas, kita dapat menciptakan keajaiban manis yang memanjakan semua indera."
  },
  {
    name: "Cook Andra Wijaya",
    position: "Cook",
    image: "/images/chefs/chefs-3.jpg",
    description: "Memasak adalah tentang berbagi rasa dan cerita. Fokuslah pada bahan-bahan segar dan jangan takut untuk berkreasi! Setiap hidangan yang kamu buat bisa menjadi kenangan indah bagi orang-orang yang kamu cintai."
  }
];

const Chef = () => {
  return (
    <section className="chef-section">
      <div className="container">
        <h2 className="chef-heading">Our Chefs</h2>
        <div className="chef-cards">
          {chefs.map((chef, index) => (
            <div className="chef-card" key={index}>
              <img src={chef.image} alt={chef.name} className="chef-image" />
              <h3>{chef.name}</h3>
              <p className="chef-position">{chef.position}</p>
              <p className="chef-description">{chef.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chef;
