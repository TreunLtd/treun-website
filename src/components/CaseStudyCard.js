import React from 'react';
import './CaseStudyCard.css';

export default function CaseStudyCard({ project }) {
  return (
    <div className="case-study-card">
      <div className="card-image">
        {project.images && project.images.length > 0 ? (
          <img 
            src={`/images/projects/${project.folder}/${project.images[0]}`}
            alt={project.name}
          />
        ) : (
          <div className="placeholder-image"></div>
        )}
      </div>

      <div className="card-content">
        <h3 className="project-title">{project.name}</h3>
        <p className="project-type">{project.type}</p>
        <p className="project-location">{project.location}</p>
        <p className="project-value">{project.value}</p>
        <p className="project-description">{project.description}</p>
        <a href={`/project/${project.id}`} className="view-project">View Project →</a>
      </div>
    </div>
  );
}
