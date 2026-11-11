import React from 'react';
import './CaseStudyCard.css';

export default function CaseStudyCard({ project }) {
  const altText = `${project.name} - ${project.type} - ${project.location} - Treun`;
  // Optional `cover` in projects.js picks the card photo; otherwise the first image is used
  const cover = project.cover || (project.images && project.images[0]);

  return (
    <a href={`/project/${project.id}`} className="case-study-card">
      <div className="card-image">
        {cover ? (
          <img
            src={`/images/projects/${project.folder}/${cover}`}
            alt={altText}
            loading="lazy"
          />
        ) : (
          <div className="placeholder-image"></div>
        )}
      </div>

      <div className="card-content">
        <p className="card-type">{project.type}</p>
        <h3 className="card-title">{project.name}</h3>
        <p className="card-location">{project.location}</p>
        {project.value && <p className="card-value">{project.value}</p>}
        <span className="card-link">
          View project <span aria-hidden="true">&gt;</span>
        </span>
      </div>
    </a>
  );
}
