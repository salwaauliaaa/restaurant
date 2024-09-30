import React from 'react';
import './Table.css';

const Table = () => {
  return (
    <section className="table-section">
      <div className="container">
        <div className="table-content">
          <div className="table-img">
            <img src="/images/reservation.jpg" alt="Table Setting" />
          </div>
          <div className="table-form">
            <h2>Book a Table</h2>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Your Phone" required />
                <input type="date" placeholder="Date" required />
              </div>
              <div className="form-group">
                <input type="time" placeholder="Time" required />
                <input type="number" placeholder="# of people" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn-submit">Book a Table</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Table;
