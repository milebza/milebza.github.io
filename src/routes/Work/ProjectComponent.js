import React from 'react';

import Menu from '../../components/Menu';

const ProjectComponent = ({ title, client, location, projectType, year, content }) => (
  <>
  <Menu />
  <div className="project">
    <div className="project__info">
      <h3>{title}</h3>
      <div className="project__description">
        <ul className="project__list">
          <li>CLIENT</li>
          <li>LOCATION</li>
          <li>PROJECT</li>
          <li>YEAR</li>
        </ul>
        <ul className="project__list">
          <li>{client}</li>
          <li>{location}</li>
          <li>{projectType}</li>
          <li>{year}</li>
        </ul>
      </div>
    </div>
  <div className="project__content">
    <div className="project__picture-list">
    { content.map(picture =>
      <div className="project__img">
        <img
          src={picture}
          alt="project content"
          className="img-fluid"
          loading="lazy"
        />
      </div>
    )}
    </div>
  </div>
  </div>
  </>
);

export default ProjectComponent;
