import React from 'react';
import ProjectComponent from '../ProjectComponent';

const Folklore = () => (
  <ProjectComponent
    title="Folklore"
    location="Póvoa do Lanhoso, Portugal"
    projectType="Editorial"
    year="2023"
    content={() => <p className="u-center" style={{ width: '200px' }}>[ coming soon ]</p>}
  />
);

export default Folklore;
