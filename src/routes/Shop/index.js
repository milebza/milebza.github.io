import React from 'react';
import Menu from '../../components/Menu';
import substack from '../../assets/substack.jpg';

const Shop = () => (
  <>
  <Menu />
  <div className="course__page">
    <div className="shop__item-info">
      <div>
        <img
          src={substack}
          alt="diary page"
          loading="lazy"
          className='img-fluid course__image'
        />
      </div>
      <p>⊹</p>
      <p><i>In service of image making</i></p>
      <p>The diary of a photographer in the fashion industry</p>
      <br />
      <a href='https://inserviceofimagemaking.substack.com/' target='_blank' rel="noreferrer">
        <button className="course__button">
          Enter
        </button>
      </a>
      <br />
      
    </div>
    <br />
      <p><small>© all rights reserved</small></p>
  </div>
  </>
);

export default Shop;
