// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import About from './components/About';


function App() {
  return (
    <div className="App">
        <div>
      <Header />
      <main>
        <About />
        <Menu />
      </main>
      <Footer />
    </div>

    {/* <div className="container">
      <header>
        <div className="logo">
          <h1>Yummy.</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Chefs</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Dropdown</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button className="book-button">Book a Table</button>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h2>Enjoy Your Healthy Delicious Food</h2>
          <p>We are a team of talented designers making websites with Bootstrap.</p>
          <button className="book-button">Booka a Table</button>
          <button className="watch-button">► Watch Video</button>
        </section>
        <section className="food-section">
          <img src="/images/nasgor.png" alt="Delicious Food" />
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Yummy Restaurant. All rights reserved.</p>
      </footer>
    </div> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
