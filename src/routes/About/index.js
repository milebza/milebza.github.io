import React from 'react';

import work34 from '../../assets/work-34.jpg';
import about1 from '../../assets/about-pic-01.jpg';
import about2 from '../../assets/about-pic-02.jpg';

import Menu from '../../components/Menu';

const About = () => (
  <>
    <Menu />
    <div className="about-home">

      <div className="u-grid">
        <div className="about-home__col-2">
          <img
            src={about2}
            alt="portfolio"
            className="img-fluid about-home__img"
            loading="lazy"
          />
        </div>
        <div className="about-home__col-2">
          <img
            src={about1}
            alt="portfolio"
            className="img-fluid about-home__img"
            loading="lazy"
          />
        </div>
      </div>

      <div className="about-home__section">
        <p>
          Photographer based in Lisbon, Portugal and available worldwide.
        </p>
        <p>
        Contact:{' '}
        <a href="mailto:hello@milenabaeza.com">hello@milenabaeza.com</a>
        </p>
        <p> ⊹ </p>
        <p className="about-home__short-p"><i>
        Milena was born in 1992 and grew up in two different hemispheres (via Viña del Mar-Lisboa),{' '}
        eventually settling in Portugal in 2000. In recent years she dove deep{' '}
        into the medium of photography bringing plasticity, bold colours and shapes to her work.{' '}
        She portraits her subjects in intimate settings and explores themes like identity,{' '}
        vulnerability and natural beauty. Both her parents are artists, so being creative was something natural{' '}
        between her and her three siblings. The four of them founded the zine Mr. Spoqui,{' '}
        active for five years. It was a monthly zine with a collection of their thoughts, drawings, short stories,{' '}
        photographs and mixed media around a specific theme. For her, creativity has always been a tool for self-exploration{' '}
        and getting to know oneself. As a photographer she works in the fashion field as well as develops personal stories.
        </i></p>
        <p>
        <a
            href="https://www.instagram.com/milena.baeza/"
            target="_blank"
            rel="noreferrer"
          >@milena.baeza</a>
        </p>
      </div>
      <div className="u-flex">
        <div className="">
          <img
            src={work34}
            alt="portfolio"
            className="img-fluid"
            loading="lazy"
          />
        </div>
      </div>
      <div className="about-home__section">
        <p className="about-home__small-text">
          <p>SELECT CLIENTS</p>
          <p className="about-home__cv-items">
          <span>Beatriz Jardinha</span>
          <span>Ninfa Handmade</span>
          <span>MERRMA</span>
          <span>Maria do Carmo Studio</span>
          <span>Non Manon</span>
          <span>PALMIZA</span>
          <span>Oceanchild</span>
          <span>Lisboa Fashion Week</span>
          </p>
          <br /><br />
          <p>SELECT PUBLICATIONS</p>
          <p className="about-home__cv-items">
          <span>Summer Drops <i>(book)</i></span>
          <span>Mulieris Magazine, Issue 04, Belt of Venus <i>(print)</i></span>
          <span>Curated by GIRLS</span>
          <span>Photo Vogue</span>
          <span>C41 Magazine</span>
          <span>EMC Magazine</span>
          {/* Entrevista <a href="https://contraluzweb.wordpress.com/2022/05/08/milena-baeza/" target="_blank" rel="noreferrer">
          CONTRALUZ
          </a><br /> */}
          <span>Mr. Spoqui, all Issues <i>(print)</i></span>
          </p>
          <br /><br />
          <p>EXHIBITIONS</p>
          <p className="about-home__cv-items">
            <span>ImageNation, Paris, 2023</span>
            <span>DOBRA, Lisboa, 2021</span>
          </p>
        </p>
      </div>
      <br />
      <p><small>© all rights reserved</small></p>
    </div>
  </>
);

export default About;
