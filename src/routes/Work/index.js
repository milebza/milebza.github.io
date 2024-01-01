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
import stillLife01 from '../../assets/still-life-01.jpg';
import stillLife02 from '../../assets/still-life-02.jpg';
import lfw01 from '../../assets/lfw-01.png';
import lfw02 from '../../assets/lfw-02.jpg';
import ribbon01 from '../../assets/ribbon-01.jpg';
import beatrizJardinha01 from '../../assets/beatriz-jardinha-01.jpg';
import beatrizJardinha02 from '../../assets/beatriz-jardinha-02.jpg';
import beatrizJardinha03 from '../../assets/beatriz-jardinha-03.gif';
import folclore01 from '../../assets/folclore-01.jpg';
import undressCode01 from '../../assets/undress-code-01.gif';
import omer01 from '../../assets/omer-01.gif';

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
          <p className="work__desc"><i>B among poppy flowers,</i> Photo Vogue, spring 2021</p>
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
            ><i>Inés & Inês,</i></NavLink> summer 2022
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
            to="/archive/project"
            ><i>Beatriz Jardinha</i></NavLink>, summer 2023</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={undressCode01}
            alt="girl at the beach"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/project"
            ><i>Undress Code</i></NavLink>, summer 2023</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={lfw01}
            alt="backstage at lfw"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/project"
            ><i>Backstage pictures for LFW,</i></NavLink>, spring 2022</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={sianSwim01}
            alt="girl floating"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><i>Sian Swimwear,</i> spring 2022</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={work48}
            alt="wet skin"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><i>B after a swim</i>, summer 2022</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={work07}
            alt="water sparkle"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><i>Sparkles</i>, spring 2021</p>
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
            to="/archive/project"
            ><i>Folklore</i></NavLink>, coming soon</p>
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
            ><i>Beatriz Jardinha</i></NavLink>, summer 2023</p>
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
            ><i>Ninfa handmade</i></NavLink>, winter 2022</p>
      </div>

      <div className="work__img-wrapper">
            <img
              src={pastelDreams01}
              alt="girl holding"
              className="img-fluid"
              loading="lazy"
            />
            <p className="work__desc"><NavLink
            to="/archive/project"
            ><i>Pastel Dreams</i></NavLink> for Mulieris Magazine, Issue 4, spring 2022</p>
        </div>

        <div className="work__img-wrapper">
            <img
              src={work02}
              alt="nature lanscape"
              className="img-fluid"
              loading="lazy"
            />
            <p className="work__desc"><i>Train trip to Lyon from Paris</i>, spring 2023</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={palmiza01}
            alt="girls laying"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/project"
            ><i>Palmiza</i></NavLink>, summer 2022</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={work11}
            alt="swimming pool"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><i>Swimming pool,</i> Póvoa do Lanhoso, winter 2023</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={work10}
            alt="disco witch"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/project"
            ><i>Disco Witch campaign for Non Manon</i></NavLink>, autumn 2021</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={work04}
            alt="girls floating in water"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><i>Sisters floating in water</i>, summer 2020</p>
      </div>

      <div className="work__img-wrapper">
          <img
            src={omer01}
            alt="tablescape"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/project"
            ><i>Omer Gilony for Dolce Vita event</i></NavLink>, summer 2023</p>
        </div>
    </div>

    {/** COLUMN 03 */}
    <div className="u-col-3">
    <div className="work__img-wrapper">
          <img
            src={stillLife02}
            alt="stil life"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/project"
            ><i>Still life II</i></NavLink>, at home, autumn 2023</p>
      </div>
      <div className="work__img-wrapper">
          <img
            src={stillLife01}
            alt="stil life"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/project"
            ><i>Still life I</i></NavLink>, at home, autumn 2022</p>
      </div>

      <div className="work__img-wrapper">
          <img
            src={ribbon01}
            alt="girl in the grass"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/project"
            ><i>Ribbon</i></NavLink>, spring 2023</p>
      </div>

      <div className="work__img-wrapper">
          <img
            src={lfw02}
            alt="backstage at lfw"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/project"
            ><i>Backstage pictures for Maria do Carmo Studio</i></NavLink>, autumn 2023</p>
      </div>

      <div className="work__img-wrapper">
          <img
            src={beatrizJardinha03}
            alt="girl in a terrace"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><NavLink
            to="/archive/project"
            ><i>Beatriz Jardinha</i></NavLink>, summer 2023</p>
        </div>

      <div className="work__img-wrapper">
          <img
            src={work08}
            alt="girl laying in a rock"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><i>Balm for the soul</i> for Curated by GIRLS, summer 2022</p>
      </div>

      <div className="work__img-wrapper">
          <img
            src={work09}
            alt="cactus"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><i>Cactus in Lanzarote</i>, summer 2022</p>
      </div>

      <div className="work__img-wrapper">
          <img
            src={work12}
            alt="tangled legs"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc"><i>Tangled legs of A & F</i>, summer 2020</p>
      </div>
    </div>
    </div>
    </div>
  </>
);

export default Work;
