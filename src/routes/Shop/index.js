import React from 'react';
import Menu from '../../components/Menu';
import book01 from '../../assets/book-01.jpg';

const Shop = () => (
  <>
  <Menu />
  <div className="about-home">
    <div className="shop__item-info">
      <h3>Summer Drops</h3>
      <div style={{ maxWidth: 550 }}>
        <img
          src={book01}
          alt="book open"
          className="img-fluid about-home__img"
          loading="lazy"
        />
      </div>
      <p><i>Mixed media</i></p>
      <p>A book by sisters Amanda Baeza and Milena Baeza.</p>
      <p>Book in english. Hardcover with golden foil details.<br />
        140 pages (includes cover) full color (digital print), A5 format.<br />
        Printed July 2023.</p>
      <p><b>18€</b></p>
      <button className="course__button" disabled>
        SOLD OUT
      </button>
    </div>
  </div>
  </>
);

export default Shop;
