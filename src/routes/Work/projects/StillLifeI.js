import React from 'react';
import ProjectComponent from '../ProjectComponent';

import still01 from '../../../assets/2022-still-life-i/still-01.jpg';
import still02 from '../../../assets/2022-still-life-i/still-02.jpg';
import still03 from '../../../assets/2022-still-life-i/still-03.jpg';
import still04 from '../../../assets/2022-still-life-i/still-04.jpg';
import still05 from '../../../assets/2022-still-life-i/still-05.jpg';

const content = [
  still01,
  still02,
  still03,
  still04,
  still05
]

const StillLifeI = () => (
  <ProjectComponent
    title="Still Life I"
    location="Lisbon, Portugal"
    projectType="Personal photoshoot"
    year="2022"
    content={content}
  />
);

export default StillLifeI;
