import React from 'react';
import ProjectComponent from '../ProjectComponent';

import inesInes01 from '../../../assets/2022-ines-ines/ines-ines-01.jpg';
import inesInes02 from '../../../assets/2022-ines-ines/ines-ines-02.jpg';
import inesInes03 from '../../../assets/2022-ines-ines/ines-ines-03.jpg';
import inesInes04 from '../../../assets/2022-ines-ines/ines-ines-04.jpg';
import inesInes05 from '../../../assets/2022-ines-ines/ines-ines-05.jpg';
import inesInes06 from '../../../assets/2022-ines-ines/ines-ines-06.jpg';
import inesInes08 from '../../../assets/2022-ines-ines/ines-ines-08.jpg';
import inesInes09 from '../../../assets/2022-ines-ines/ines-ines-09.jpg';
import inesInes10 from '../../../assets/2022-ines-ines/ines-ines-10.jpg';
import inesInes11 from '../../../assets/2022-ines-ines/ines-ines-11.jpg';
import inesInes12 from '../../../assets/2022-ines-ines/ines-ines-12.jpg';
import inesInes13 from '../../../assets/2022-ines-ines/ines-ines-13.jpg';
import inesInes14 from '../../../assets/2022-ines-ines/ines-ines-14.jpg';

const content = [
  inesInes01,
  inesInes03,
  inesInes02,
  inesInes04,
  inesInes05,
  inesInes08,
  inesInes06,
  inesInes10,
  inesInes09,
  inesInes11,
  inesInes12,
  inesInes13,
  inesInes14,
]

const InesInes = () => (
  <ProjectComponent
    title="Inés & Inês"
    client="We Are Models"
    location="Lisbon, Portugal"
    projectType="Test Shoot"
    year="2022"
    content={content}
  />
);

export default InesInes;
