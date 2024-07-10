import React from 'react';
import Menu from '../../components/Menu';
import book01 from '../../assets/book-01.jpg';

const Shop = () => (
  <>
  <Menu />
  <div className="about-home">
    <div className="shop__item-info">
      <div>
        <img
          src={book01}
          alt="book open"
          className="img-fluid about-home__img"
          loading="lazy"
        />
      </div>
      <p><i>summer drops</i></p>
      <p>⊹</p>
      <p>A book by sisters Amanda Baeza and Milena Baeza.</p>
      <p>Mixed media.<br />Book in english.<br />Hardcover with golden foil details.<br />
        140 pages (includes cover) full color (digital print), A5 format.</p>
      <p>Printed July 2023.</p>
      <br />
      <button className="course__button" disabled>
        sold out
      </button>
      <br />
      
    </div>
    <br />
      <p><small>© all rights reserved</small></p>
  </div>
  </>
);

export default Shop;
