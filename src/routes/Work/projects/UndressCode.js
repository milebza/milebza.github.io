import React from 'react';
import ProjectComponent from '../ProjectComponent';

const content = () => (
  <div className="project__video-content">
    <div className="project__video-wrapper">
      <iframe
        title="Undress Code video"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/38fPng97uKo" frameborder="0" allowfullscreen/>
    </div>

    <div className="project__reel-wrapper">
      <iframe
        title="Undress Code reel"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/tDBZXBOzoT8" frameborder="0" allowfullscreen/>
    </div>
  </div>
)

const UndressCode = () => (
  <ProjectComponent
    title="Undress Code"
    client="Undress Code"
    location="Lisbon, Portugal"
    projectType="Video (digicam)"
    year="2023"
    content={content}
  />
);

export default UndressCode;
