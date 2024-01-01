import React from 'react';
import ProjectComponent from '../ProjectComponent';

import still01 from '../../../assets/2023-still-life-ii/still-01.jpg';
import still02 from '../../../assets/2023-still-life-ii/still-02.jpg';
import still03 from '../../../assets/2023-still-life-ii/still-03.jpg';

const content = [
  still01,
  still03,
  still02
]

const StillLifeII = () => (
  <ProjectComponent
    title="Still Life II"
    location="Lisbon, Portugal"
    projectType="Personal photoshoot"
    year="2023"
    content={content}
  />
);

export default StillLifeII;
