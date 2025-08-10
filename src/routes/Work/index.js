import React from 'react';

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
import ninfa02 from '../../assets/ninfa-02.jpg';
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
            alt="Young man among poppy flowers, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">B among poppy flowers, Photo Vogue, spring 2021</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={testShoot01}
            alt="Two girls wearing contrasting one color clothes laying on grass, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">
            Inés & Inês, summer 2022
          </p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={beatrizJardinha02}
            alt="A pile of rings against a red backdrop, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Beatriz Jardinha, summer 2023</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={undressCode01}
            alt="Young girl waling between rocks at the beach, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Undress Code, summer 2023</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={lfw01}
            alt="Backstage at LFW"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Backstage pictures for LFW, spring 2022</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={sianSwim01}
            alt="Young girl floating on a swimming pool, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Sian Swimwear, spring 2022</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={work48}
            alt="Detailed shot of wet skin, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">B after a swim, summer 2022</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={work07}
            alt="Sun reflection on sea water, captured on film"
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
            alt="Young girl laying in a sofa, captured on film and handprinted"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Folklore, Photo Vogue, winter 2023</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={beatrizJardinha01}
            alt="Portrait of a young girl wearing a necklace, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Beatriz Jardinha, summer 2023</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={ninfa02}
            alt="Young girl looking down, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Ninfa handmade winter 2022</p>
      </div>

      <div className="work__img-wrapper">
            <img
              src={pastelDreams01}
              alt="Young girl holding herself, captured on film"
              className="img-fluid"
              loading="lazy"
            />
            <p className="work__desc">Pastel Dreams for Mulieris Magazine, Issue 4, spring 2022</p>
        </div>

        <div className="work__img-wrapper">
            <img
              src={work02}
              alt="Landscape through a train window, captured on film"
              className="img-fluid"
              loading="lazy"
            />
            <p className="work__desc">Train trip to Lyon from Paris, spring 2023</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={palmiza01}
            alt="Young girl laying at the beach, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Palmiza, summer 2022</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={work11}
            alt="A swimming pool, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Swimming pool, Póvoa do Lanhoso, winter 2023</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={work10}
            alt="Young girl laying down, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Disco Witch campaign for Non Manon, autumn 2021</p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={work04}
            alt="Young girls floating in the water, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Sisters floating in water, summer 2020</p>
      </div>

      <div className="work__img-wrapper">
          <img
            src={omer01}
            alt="Tablescape"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Omer Gilony for Dolce Vita event, summer 2023</p>
        </div>
    </div>

    {/** COLUMN 03 */}
    <div className="u-col-3">
    <div className="work__img-wrapper">
          <img
            src={beatrizJardinha04}
            alt="Necklace around a fork, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Beatriz Jardinha II, winter 2024</p>
      </div>

      <div className="work__img-wrapper">
          <img
            src={behen01}
            alt="Backstage at LFW"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Béhen backstage at LFW, spring 2024 <a href='https://www.behenstudio.com/read/i-dont-want-you-aw24-bts' rel="noreferrer"  target='_blank'>[link]</a></p>
        </div>

      <div className="work__img-wrapper">
          <img
            src={ribbon01}
            alt="Young girl rolling in the grass and laughing, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Ribbon, spring 2023</p>
      </div>

      <div className="work__img-wrapper">
          <img
            src={lfw02}
            alt="Backstage at LFW"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Backstage pictures for Maria do Carmo Studio, autumn 2023</p>
      </div>

      <div className="work__img-wrapper">
          <img
            src={beatrizJardinha03}
            alt="Young girl in a terrace"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Beatriz Jardinha, summer 2023</p>
        </div>

      <div className="work__img-wrapper">
          <img
            src={work08}
            alt="Young girl laying on a rock, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Balm for the soul for Curated by GIRLS, summer 2022</p>
      </div>

      <div className="work__img-wrapper">
          <img
            src={work09}
            alt="Cactus, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Cactus in Lanzarote, summer 2022</p>
      </div>

      <div className="work__img-wrapper">
          <img
            src={work12}
            alt="Tangled legs"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Tangled legs of A & F, summer 2020</p>
      </div>
    </div>
    </div>
      <div className="u-grid">
        <p style={{ paddingLeft: 60 }}><small>© all rights reserved</small></p>
      </div>
    </div>
  </>
);

export default Work;
