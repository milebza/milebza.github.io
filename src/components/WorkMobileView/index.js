import React from 'react';

import work01 from '../../assets/work-01.jpg';
import work02 from '../../assets/work-02.jpg';
import work48 from '../../assets/work-48.jpg';
import work07 from '../../assets/work-07.jpg';
import work09 from '../../assets/work-09.jpg';
import work10 from '../../assets/work-10.jpg';
import work11 from '../../assets/work-11.jpg';
import pastelDreams01 from '../../assets/pastel-dreams-01.jpg';
import testShoot01 from '../../assets/test-shoot-01.jpg';
import palmiza01 from '../../assets/palmiza-01.jpg';
import lfw02 from '../../assets/lfw-02.jpg';
import beatrizJardinha02 from '../../assets/beatriz-jardinha-02.jpg';
import beatrizJardinha03 from '../../assets/beatriz-jardinha-03.gif';
import folclore01 from '../../assets/folclore-01.jpg';
import undressCode01 from '../../assets/undress-code-01.gif';
import beatrizJardinha04 from '../../assets/beatriz-jardinha-04.jpg';
import behen01 from '../../assets/behen-01.jpg';
import mariaRolling01 from '../../assets/maria-rolling-01.jpg';
import heirlooms01 from '../../assets/heirlooms-01.jpg';
import graziaBulgaria01 from '../../assets/grazia-bulgaria-01.jpg';
import graziaBulgaria02 from '../../assets/grazia-bulgaria-02.jpg';
import magdaButrymPfw01 from '../../assets/magda-butrym-pfw-01.jpg';
import florentinaLeitnerPfw01 from '../../assets/florentina-leitner-pfw-01.jpg';

const WorkMobileView = () => (
    <div className="u-grid">
      {/** COLUMN 01 */}
      <div className="u-col-3">
        <div className="work__img-wrapper">
          <img
            src={heirlooms01}
            alt="A girl rolling on grass, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">
            Editorial <i>Heirlooms</i> for Vogue Portugal, spring 2024
          </p>
        </div>

          <div className="work__img-wrapper">
            <img
              src={graziaBulgaria01}
              alt="Editorial Grazia Bulgaria, captured on film"
              className="img-fluid"
              loading="lazy"
            />
            <p className="work__desc">Editorial <i>In Between Thoughts</i> for Grazia Bulgaria, September print issue, autumn 2025</p>
          </div>

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
            src={magdaButrymPfw01}
            alt="Backstage portrait of a model at Magda Butrym show"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Magda Butrym backstage at PFW SS26, autumn 2025 <a href='https://vein.es/magda-butrym-rewrites-intimacy-at-paris-fashion-week/' rel="noreferrer"  target='_blank'>[link]</a></p>
        </div>

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
            src={work11}
            alt="A swimming pool, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Swimming pool, Póvoa do Lanhoso, winter 2023</p>
        </div>

         <div className="work__img-wrapper">
          <img
            src={mariaRolling01}
            alt="A girl rolling on grass, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">
            Maria rolling on grass, spring 2025
          </p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={florentinaLeitnerPfw01}
            alt="Backstage at Florentina Leitner"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Florentina Leitner backstage at PFW SS26, autumn 2025 <a href='https://vein.es/florentina-leitner-backstage-ss26/' rel="noreferrer"  target='_blank'>[link]</a></p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={graziaBulgaria02}
            alt="Editorial Grazia Bulgaria, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Editorial <i>In Between Thoughts</i> for Grazia Bulgaria, September print issue, autumn 2025</p>
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
            src={behen01}
            alt="Backstage at LFW"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Béhen backstage at LFW, spring 2024 <a href='https://www.behenstudio.com/read/i-dont-want-you-aw24-bts' rel="noreferrer"  target='_blank'>[link]</a></p>
        </div>

        <div className="work__img-wrapper">
          <img
            src={undressCode01}
            alt="Young girl waling between rocks at the beach, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Undress Code, summer 2023  <a href='https://www.youtube.com/watch?v=38fPng97uKo' rel="noreferrer"  target='_blank'>[link]</a></p>
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
              src={pastelDreams01}
              alt="Young girl holding herself, captured on film"
              className="img-fluid"
              loading="lazy"
            />
            <p className="work__desc">Pastel Dreams for Mulieris Magazine, print Issue 4, spring 2022</p>
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
          <p className="work__desc">Beatriz Jardinha, summer 2023 <a rel="noreferrer" href='https://youtu.be/hawCMTmai54' target='_blank'>[link]</a></p>
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
            src={work01}
            alt="Young man among poppy flowers, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">B among poppy flowers, Photo Vogue, spring 2021</p>
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
            src={work09}
            alt="Cactus, captured on film"
            className="img-fluid"
            loading="lazy"
          />
          <p className="work__desc">Cactus in Lanzarote, summer 2022</p>
        </div>

    </div>
    </div>
);

export default WorkMobileView;
