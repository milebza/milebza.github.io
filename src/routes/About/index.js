import React from 'react';

import work34 from '../../assets/work-34.jpg';
import about5 from '../../assets/about-pic-05.JPG';
import behen01 from '../../assets/behen-01.jpg';

import Menu from '../../components/Menu';

const About = () => (
  <>
    <Menu />
    <main className="about-home">

      <section className="about-home__show-desktop">
      <div className="u-grid">
        <div>
         <img
            src={behen01}
            alt="Backstage at Béhen LFW"
            className="img-fluid"
            loading="lazy"
          />
          </div>
      </div>
      </section>

      <section className="about-home__show-mobile">
      <div className="u-grid">
        <div>
          <img
            src={about5}
            alt="Detailed shot of hands holding a bag made of bread, at Fashion Week"
            className="img-fluid"
            loading="lazy"
          />
        </div>
      </div>
      </section>

      <section className="about-home__section">
        <p>
          Chilean-portuguese photographer based between Paris and Lisbon. Portfolio upon request.
        </p>
      </section>
      <section className="about-home__section">
        <h2 className="about-home__title">Select clients</h2>
        <p>Vogue Portugal, Grazia Bulgaria, Triumph, Florentina Leitner, Beatriz Jardinha, Undress Code, BÉHEN, PALMIZA, Maria do Carmo Studio, Mulieris Magazine, Curated by GIRLS, + more</p>
        {/* <ul className="about-home__list" aria-label="Client list">
          <li>Vogue Portugal</li>
          <li>Grazia Bulgaria</li>
          <li>Triumph</li>
          <li>Florentina Leitner</li>
          <li>Beatriz Jardinha</li>
          <li>Undress Code</li>
          <li>BÉHEN</li>
          <li>Ninfa Handmade</li>
          <li>PALMIZA</li>
          <li>Maria do Carmo Studio</li>
          <li>Mulieris Magazine</li>
          <li>Curated by GIRLS</li>
          <li>+ more</li>
        </ul> */}
      </section>
      <section>
        <p>For enquiries:<br /> ⊹ <b>hello@milenabaeza.com</b> </p>

        <p> <a
          href="https://www.instagram.com/milena.baeza/"
          target="_blank"
          rel="noreferrer"
        >ig @milena.baeza</a>
        </p>
      </section>
      <br />
      <p><small>© all rights reserved</small></p>
    </main>
  </>
);

export default About;
