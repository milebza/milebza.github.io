import React from 'react';
import ProjectComponent from '../ProjectComponent';

import beatriz01 from '../../../assets/2023-beatriz-jardinha-model/beatriz-01.jpg';
import beatriz03 from '../../../assets/2023-beatriz-jardinha-model/beatriz-03.jpg';
import beatriz04 from '../../../assets/2023-beatriz-jardinha-model/beatriz-04.jpg';
import beatriz05 from '../../../assets/2023-beatriz-jardinha-model/beatriz-05.jpg';
import beatriz06 from '../../../assets/2023-beatriz-jardinha-model/beatriz-06.jpg';
import beatriz07 from '../../../assets/2023-beatriz-jardinha-model/beatriz-07.jpg';
import beatriz08 from '../../../assets/2023-beatriz-jardinha-model/beatriz-08.jpg';
import beatriz09 from '../../../assets/2023-beatriz-jardinha-model/beatriz-09.jpg';
import beatriz10 from '../../../assets/2023-beatriz-jardinha-model/beatriz-10.jpg';
import beatriz11 from '../../../assets/2023-beatriz-jardinha-model/beatriz-11.jpg';
import beatriz12 from '../../../assets/2023-beatriz-jardinha-model/beatriz-12.jpg';

const content = [
  beatriz07,
  beatriz01,
  beatriz03,
  beatriz05,
  beatriz04,
  beatriz06,
  beatriz08,
  beatriz09,
  beatriz10,
  beatriz11,
  beatriz12,
]

const BeatrizJardinhaModel = () => (
  <ProjectComponent
    title="Beatriz Jardinha"
    client="Beatriz Jardinha"
    location="Lisbon, Portugal"
    projectType="Photoshoot"
    year="2023"
    content={content}
  />
);

export default BeatrizJardinhaModel;
