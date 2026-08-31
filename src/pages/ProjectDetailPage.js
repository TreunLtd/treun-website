import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../data/projects';
import './ProjectDetailPage.css';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="project-not-found">
          <h1>Project not found</h1>
          <button onClick={() => navigate(-1)}>← Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <section className="project-detail-hero">
        <div className="project-detail-hero-content">
          <h1>{project.name}</h1>
          <p>{project.location}</p>
        </div>
      </section>

      <section className="project-detail-content">
        <div className="section-container">
          <div className="detail-grid">
            {/* LEFT: Image Gallery */}
            <div className="project-gallery">
              <div className="gallery-grid">
                {project.images.map((image, index) => (
                  <div key={index} className="gallery-item">
                    <img 
                      src={`/images/projects/${project.folder}/${image}`}
                      alt={`${project.name} - Image ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Project Details */}
            <div className="project-details">
              <div className="project-meta">
                <div className="meta-item">
                  <h4>Project Value</h4>
                  <p>{project.value}</p>
                </div>
                <div className="meta-item">
                  <h4>Project Type</h4>
                  <p>{project.type}</p>
                </div>
                <div className="meta-item">
                  <h4>Client</h4>
                  <p>{project.client}</p>
                </div>
                <div className="meta-item">
                  <h4>Timeline</h4>
                  <p>{project.timeline}</p>
                </div>
              </div>

              <div className="project-section">
                <h2>Challenge</h2>
                <p>{project.challenge}</p>
              </div>

              <div className="project-section">
                <h2>Approach</h2>
                <p>{project.approach}</p>
              </div>

              <div className="project-section">
                <h2>Outcome</h2>
                <p>{project.outcome}</p>
              </div>

              <div className="project-nav">
                <button className="back-button" onClick={() => navigate(-1)}>
                  ← Back to Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}