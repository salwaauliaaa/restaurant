import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="text-content">
        <h1>Silahkan Menikmati Makanan Lezat Anda
          Semoga Berkesan.</h1>
        <p>
          Restoran kami menyajikan hidangan terbaik di kota. Rasakan kelezatan setiap gigitannya!
        </p>
      </div>
      <div className="image-content">
        <img src="/images/home.png" alt="Delicious Food" />
      </div>
    </section>
  );
};

export default Home;
