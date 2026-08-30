import React from 'react';
import './CaseStudyCard.css';

export default function CaseStudyCard({ project }) {
  return (
    <div className="case-study-card">
      <div className="card-image">
        <img src={`/images/projects/${project.folder}/${project.images[0]}`} alt={project.name} />
      </div>
      <div className="card-content">
        <h3>{project.name}</h3>
        <p className="card-type">{project.type}</p>
        <p className="card-location">{project.location}</p>
        <p className="card-value">{project.value}</p>
        <p className="card-description">{project.description}</p>
        <a href={`/project/${project.id}`} className="card-link">
          View Project →
        </a>
      </div>
    </div>
  );
}