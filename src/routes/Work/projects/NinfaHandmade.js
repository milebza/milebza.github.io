import React from 'react';
import ProjectComponent from '../ProjectComponent';

import ninfa01 from '../../../assets/2022-ninfa-handmade/ninfa-01.jpg';
import ninfa02 from '../../../assets/2022-ninfa-handmade/ninfa-02.jpg';
import ninfa04 from '../../../assets/2022-ninfa-handmade/ninfa-04.jpg';
import ninfa05 from '../../../assets/2022-ninfa-handmade/ninfa-05.jpg';
import ninfa06 from '../../../assets/2022-ninfa-handmade/ninfa-06.jpg';
import ninfa07 from '../../../assets/2022-ninfa-handmade/ninfa-07.jpg';
import ninfa08 from '../../../assets/2022-ninfa-handmade/ninfa-08.jpg';
import ninfa09 from '../../../assets/2022-ninfa-handmade/ninfa-09.jpg';
import ninfa10 from '../../../assets/2022-ninfa-handmade/ninfa-10.jpg';
import ninfa11 from '../../../assets/2022-ninfa-handmade/ninfa-11.jpg';
import ninfa12 from '../../../assets/2022-ninfa-handmade/ninfa-12.jpg';

const content = [
  ninfa01,
  ninfa02,
  ninfa04,
  ninfa05,
  ninfa06,
  ninfa07,
  ninfa08,
  ninfa09,
  ninfa10,
  ninfa12,
  ninfa11
]

const NinfaHandmade = () => (
  <ProjectComponent
    title="Ninfa Handmade"
    client="Ninfa Handmade"
    location="Lisbon, Portugal"
    projectType="Social Media Shoot"
    year="2022"
    content={content}
  />
);

export default NinfaHandmade;
