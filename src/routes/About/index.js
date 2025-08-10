import React from 'react';

import work34 from '../../assets/work-34.jpg';
import about1 from '../../assets/about-pic-01.jpg';
import about8 from '../../assets/about-pic-08.jpg';
import about5 from '../../assets/about-pic-05.JPG';

import Menu from '../../components/Menu';

const About = () => (
  <>
    <Menu />
    <main className="about-home">

      <section className="about-home__show-desktop">
      <div className="u-grid">
        <div className="about-home__col-2">
          <img
            src={about1}
            alt="Girl on her knees at the beach, captured on film"
            className="img-fluid"
            loading="lazy"
            style={{ paddingRight: '5px' }}
          />
        </div>
        <div className="about-home__col-2">
            <img
            src={about8}
            alt="Shell, captured on film"
            className="img-fluid"
            loading="lazy"
            style={{ paddingLeft: '5px' }}
          />
        </div>
      </div>
      </section>

      <section className="about-home__show-mobile">
      <div className="u-grid">
        <div>
          <img
            src={about5}
            alt="Detailed shot of hands holding a bag made of bread, at Lisboa Fashion Week"
            className="img-fluid"
            loading="lazy"
          />
        </div>
      </div>
      </section>

      <section className="about-home__section">
        <p>
          Photographer based between Lisbon and Paris, working on the fashion field
          as well as developing personal stories.<br />
          Offering remote and on-location photoshoots worldwide.
          Portfolio upon request.
        </p>
         <h2 className="about-home__title">For inquiries</h2>
         <p> ⊹ <b>hello@milenabaeza.com</b> <br />
         ⊹  <a
            href="https://www.instagram.com/milena.baeza/"
            target="_blank"
            rel="noreferrer"
          >@milena.baeza</a>
        </p>
        {/* <p className="about-home__short-p">
        Milena was born in 1992 and grew up in two different hemispheres (via Viña del Mar-Lisboa),{' '}
        eventually settling in Portugal in 2000 with her family. In recent years she dove deep{' '}
        into the medium of photography bringing plasticity, bold colours and shapes to her work.{' '}
        She portraits her subjects in intimate settings and explores themes like identity,{' '}
        vulnerability and natural beauty. For her, creativity has always been a tool for self-exploration{' '}
        and getting to know oneself. As a photographer she works in the fashion field as well as develops personal stories.
        </p> */}
      </section>
      <section className="u-flex">
        <div className="">
          <img
            src={work34}
            alt="Two girls laying on grass, captured on film"
            className="img-fluid"
            loading="lazy"
          />
        </div>
      </section>
      <section className="about-home__section">
        <h2 className="about-home__title">Select clients</h2>
        <ul className="about-home__list" aria-label="Client list">
          <li>Vogue Portugal</li>
          <li>Triumph</li>
          <li>Beatriz Jardinha</li>
          <li>Undress Code</li>
          <li>Sian Swimwear</li>
          <li>BÉHEN</li>
          <li>Ninfa Handmade</li>
          <li>PALMIZA</li>
          <li>Maria do Carmo Studio</li>
          <li>Lisboa Fashion Week</li>
          <li>Mulieris Magazine</li>
          <li>Curated by GIRLS</li>
          <li>+ others</li>
          {/* <li>C41 Magazine</li> */}
          {/* <li>Summer Drops, book <i>(sold out)</i></li> */}
          {/* Entrevista <a href="https://contraluzweb.wordpress.com/2022/05/08/milena-baeza/" target="_blank" rel="noreferrer">
          CONTRALUZ
          </a><br /> */}
        </ul>
        <h2 className="about-home__title">Exhibitions</h2>
        <ul className="about-home__list" aria-label="Exhibitions list">
          <li>ImageNation, Paris, 2023</li>
          <li>DOBRA, Lisboa, 2021</li>
        </ul>
      </section>
      <br />
      <p><small>© all rights reserved</small></p>
    </main>
  </>
);

export default About;
