import React from 'react';
import { NavLink } from 'react-router-dom';

import Menu from '../../components/Menu';
import work01 from '../../assets/work-01.jpg';
import work02 from '../../assets/work-02.jpg';
import work04 from '../../assets/work-04.jpg';
import work48 from '../../assets/work-48.jpg';
import work07 from '../../assets/work-07.jpg';
import work12 from '../../assets/work-12.jpg';
import work08 from '../../assets/work-08.jpg';
import work09 from '../../assets/work-09.jpg';
import work10 from '../../assets/work-10.jpg';
import work11 from '../../assets/work-11.jpg';
import ninfa02 from '../../assets/2022-ninfa-handmade/ninfa-02.jpg';
import pastelDreams01 from '../../assets/pastel-dreams-01.jpg';
import sianSwim01 from '../../assets/sian-swim-01.jpg';
import testShoot01 from '../../assets/test-shoot-01.jpg';
import palmiza01 from '../../assets/palmiza-01.jpg';
import lfw01 from '../../assets/lfw-01.png';
import lfw02 from '../../assets/lfw-02.jpg';
import ribbon01 from '../../assets/ribbon-01.jpg';
import beatrizJardinha01 from '../../assets/beatriz-jardinha-01.jpg';
import beatrizJardinha02 from '../../assets/beatriz-jardinha-02.jpg';
import beatrizJardinha03 from '../../assets/beatriz-jardinha-03.gif';
import folclore01 from '../../assets/folclore-01.jpg';
import undressCode01 from '../../assets/undress-code-01.gif';
import omer01 from '../../assets/omer-01.gif';
import beatrizJardinha04 from '../../assets/beatriz-jardinha-04.jpg';
import behen01 from '../../assets/behen-01.jpg';

const Work = () => (
  <>
  <Menu />
    <div className="work">
    <div className="u-grid">
      {/** COLUMN 01 */}
      <div className="u-col-3">
        <div className="work__img-wrapper">
          <img
            src={work01}
            alt="man among poppies"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">B among poppy flowers, Photo Vogue, spring 2021</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={testShoot01}
            alt="girls laying in the grass"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">
            <NavLink
            to="/archive/ines-ines"
            >Inés & Inês,</NavLink> summer 2022
          </p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={beatrizJardinha02}
            alt="still life"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/beatriz-jardinha-ii"
            >Beatriz Jardinha</NavLink>, summer 2023</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={undressCode01}
            alt="girl at the beach"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/undress-code"
            >Undress Code</NavLink>, summer 2023</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={lfw01}
            alt="backstage at lfw"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/lfw"
            >Backstage pictures for LFW</NavLink>, spring 2022</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={sianSwim01}
            alt="girl floating"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Sian Swimwear, spring 2022</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={work48}
            alt="wet skin"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">B after a swim, summer 2022</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={work07}
            alt="water sparkle"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Sparkles, spring 2021</p>
      </div>
      </div>

      {/** COLUMN 02 */}
      <div className="u-col-3">
      <div className="work__img-wrapper">
          <img
            src={folclore01}
            alt="girl laying in a sofa"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/folklore"
            >Folklore</NavLink>, Photo Vogue, winter 2023</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={beatrizJardinha01}
            alt="girl wearing a necklace"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/beatriz-jardinha-i"
            >Beatriz Jardinha</NavLink>, summer 2023</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={ninfa02}
            alt="girl looking down"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/ninfa-handmade"
            >Ninfa handmade</NavLink>, winter 2022</p>
      </div>

      <div className="work__img-wrapper">
            <img
              src={pastelDreams01}
              alt="girl holding"
              className="img-fluid"
              loading="lazy"
            />
            <p className="work__desc"><NavLink
            to="/archive/pastel-dreams"
            >Pastel Dreams for Mulieris Magazine</NavLink>, Issue 4, spring 2022</p>
        </div>

        <div className="work__img-wrapper">
            <img
              src={work02}
              alt="nature lanscape"
              className="img-fluid"
              loading="lazy"
            />
            <p className="work__desc">Train trip to Lyon from Paris, spring 2023</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={palmiza01}
            alt="girls laying"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/palmiza"
            >Palmiza</NavLink>, summer 2022</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={work11}
            alt="swimming pool"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Swimming pool, Póvoa do Lanhoso, winter 2023</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={work10}
            alt="disco witch"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/non-manon"
            >Disco Witch campaign for Non Manon</NavLink>, autumn 2021</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={work04}
            alt="girls floating in water"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Sisters floating in water, summer 2020</p>
      </div>

      <div className="work__img-wrapper">
          <img
            src={omer01}
            alt="tablescape"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/omer-gilony"
            >Omer Gilony for Dolce Vita event</NavLink>, summer 2023</p>
        </div>
    </div>

    {/** COLUMN 03 */}
    <div className="u-col-3">
    <div className="work__img-wrapper">
          <img
            src={beatrizJardinha04}
            alt="stil life"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/beatriz-jardinha-iv"
            >Beatriz Jardinha II</NavLink>, winter 2024</p>
      </div>

      <div className="work__img-wrapper">
          <img
            src={behen01}
            alt="backstage at lfw"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/lfw"
            >Béhen backstage at LFW</NavLink>, spring 2024</p>
        </div>

      <div className="work__img-wrapper">
          <img
            src={ribbon01}
            alt="girl in the grass"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/ribbon"
            >Ribbon</NavLink>, spring 2023</p>
      </div>

      <div className="work__img-wrapper">
          <img
            src={lfw02}
            alt="backstage at lfw"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/maria-do-carmo-studio"
            >Backstage pictures for Maria do Carmo Studio</NavLink>, autumn 2023</p>
      </div>

      <div className="work__img-wrapper">
          <img
            src={beatrizJardinha03}
            alt="girl in a terrace"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/beatriz-jardinha-iii"
            >Beatriz Jardinha</NavLink>, summer 2023</p>
        </div>

      <div className="work__img-wrapper">
          <img
            src={work08}
            alt="girl laying in a rock"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Balm for the soul for Curated by GIRLS, summer 2022</p>
      </div>

      <div className="work__img-wrapper">
          <img
            src={work09}
            alt="cactus"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Cactus in Lanzarote, summer 2022</p>
      </div>

      <div className="work__img-wrapper">
          <img
            src={work12}
            alt="tangled legs"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Tangled legs of A & F, summer 2020</p>
      </div>
    </div>
    </div>
      <div className="work__img-wrapper">
        <br />
        <p><small>© all rights reserved</small></p>
      </div>
    </div>
  </>
);

export default Work;
