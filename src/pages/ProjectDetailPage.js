import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../data/projects';
import './ProjectDetailPage.css';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);
  const [showVideo, setShowVideo] = useState(project?.video ? true : false);

  useEffect(() => {
    if (project) {
      document.title = `${project.name} | Treun`;
    }
  }, [project]);

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

  const hasImages = project.images && project.images.length > 0;
  const hasVideo = !!project.video;
  const altText = (index) => `${project.name} - ${project.type} - ${project.location} - image ${index + 1} - Treun`;

  const prevImage = () => {
    setShowVideo(false);
    setCurrentImage(prev => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setShowVideo(false);
    setCurrentImage(prev => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

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

            <div className="project-gallery">
              {hasVideo || hasImages ? (
                <>
                  <div className="slideshow-main">
                    {showVideo ? (
                      <video
                        src={`/images/projects/${project.folder}/${project.video}`}
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="slideshow-image"
                      />
                    ) : (
                      <>
                        <button className="slide-arrow slide-prev" onClick={prevImage}>&#8249;</button>
                        <img
                          src={`/images/projects/${project.folder}/${project.images[currentImage]}`}
                          alt={altText(currentImage)}
                          className="slideshow-image"
                        />
                        <button className="slide-arrow slide-next" onClick={nextImage}>&#8250;</button>
                        <div className="slide-counter">{currentImage + 1} / {project.images.length}</div>
                      </>
                    )}
                  </div>

                  <div className="slideshow-thumbs">
                    {hasVideo && (
                      <div
                        className={`thumb-item ${showVideo ? 'active' : ''}`}
                        onClick={() => setShowVideo(true)}
                      >
                        <video
                          src={`/images/projects/${project.folder}/${project.video}`}
                          muted
                          className="thumb-video"
                        />
                        <div className="thumb-play">▶</div>
                      </div>
                    )}
                    {hasImages && project.images.map((image, index) => (
                      <div
                        key={index}
                        className={`thumb-item ${!showVideo && index === currentImage ? 'active' : ''}`}
                        onClick={() => { setShowVideo(false); setCurrentImage(index); }}
                      >
                        <img
                          src={`/images/projects/${project.folder}/${image}`}
                          alt={altText(index)}
                        />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="no-images">Images coming soon.</div>
              )}
            </div>

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
