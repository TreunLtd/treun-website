import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import projects from '../data/projects';
import './ProjectDetailPage.css';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];
  // Open the gallery on the card photo if one is set
  const [currentImage, setCurrentImage] = useState(() =>
    Math.max(0, project?.cover ? project.images.indexOf(project.cover) : 0)
  );
  const [showVideo, setShowVideo] = useState(project?.video ? true : false);

  const imageCount = project?.images?.length || 0;

  const prevImage = useCallback(() => {
    setShowVideo(false);
    setCurrentImage((prev) => (prev === 0 ? imageCount - 1 : prev - 1));
  }, [imageCount]);

  const nextImage = useCallback(() => {
    setShowVideo(false);
    setCurrentImage((prev) => (prev === imageCount - 1 ? 0 : prev + 1));
  }, [imageCount]);

  useEffect(() => {
    if (project) {
      document.title = `${project.name} | Treun Projects`;
    }
  }, [project]);

  // Left / right arrow keys move through the photos
  useEffect(() => {
    if (!imageCount) return undefined;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [imageCount, prevImage, nextImage]);

  if (!project) {
    return (
      <div className="project-detail-page">
        <PageHero eyebrow="Treun — Projects" title="Project not found" />
        <div className="project-not-found">
          <a href="/all-projects" className="btn btn-blue">
            <span aria-hidden="true">&lt;</span> All projects
          </a>
        </div>
      </div>
    );
  }

  const hasImages = imageCount > 0;
  const hasVideo = !!project.video;
  const imagePath = (file) => `/images/projects/${project.folder}/${file}`;
  const altText = (i) => `${project.name} - ${project.type} - ${project.location} - image ${i + 1} - Treun`;
  const cover = project.cover || (hasImages ? project.images[0] : null);

  const prevProject = projects[(index - 1 + projects.length) % projects.length];
  const nextProject = projects[(index + 1) % projects.length];

  const meta = [
    { label: 'Project value', value: project.value },
    { label: 'Project type', value: project.type },
    { label: 'Client', value: project.client },
    { label: 'Timeline', value: project.timeline },
  ].filter((m) => m.value);

  const sections = [
    { title: 'Challenge', text: project.challenge },
    { title: 'Approach', text: project.approach },
    { title: 'Outcome', text: project.outcome },
  ].filter((s) => s.text);

  return (
    <div className="project-detail-page">
      <PageHero
        eyebrow={project.type}
        title={project.name}
        intro={project.location}
        image={cover ? imagePath(cover) : undefined}
      />

      <section className="project-detail-content">
        <div className="project-detail-container">
          <a href="/all-projects" className="project-back">
            <span aria-hidden="true">&lt;</span> All projects
          </a>

          <div className="detail-grid">
            <div className="project-gallery">
              {hasVideo || hasImages ? (
                <>
                  <div className="slideshow-main">
                    {showVideo ? (
                      <video
                        src={imagePath(project.video)}
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="slideshow-image"
                      />
                    ) : (
                      <>
                        <img
                          src={imagePath(project.images[currentImage])}
                          alt={altText(currentImage)}
                          className="slideshow-image"
                        />
                        {imageCount > 1 && (
                          <>
                            <button className="slide-arrow slide-prev" onClick={prevImage} aria-label="Previous photo">
                              &lt;
                            </button>
                            <button className="slide-arrow slide-next" onClick={nextImage} aria-label="Next photo">
                              &gt;
                            </button>
                          </>
                        )}
                        <div className="slide-counter">
                          {currentImage + 1} / {imageCount}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="slideshow-thumbs">
                    {hasVideo && (
                      <button
                        className={`thumb-item ${showVideo ? 'active' : ''}`}
                        onClick={() => setShowVideo(true)}
                        aria-label="Play video"
                      >
                        <video src={imagePath(project.video)} muted className="thumb-video" />
                        <span className="thumb-play" aria-hidden="true">▶</span>
                      </button>
                    )}
                    {hasImages &&
                      project.images.map((image, i) => (
                        <button
                          key={image}
                          className={`thumb-item ${!showVideo && i === currentImage ? 'active' : ''}`}
                          onClick={() => {
                            setShowVideo(false);
                            setCurrentImage(i);
                          }}
                          aria-label={`Show photo ${i + 1}`}
                        >
                          <img src={imagePath(image)} alt="" loading="lazy" />
                        </button>
                      ))}
                  </div>
                </>
              ) : (
                <div className="no-images">Images coming soon.</div>
              )}
            </div>

            <div className="project-details">
              <dl className="project-meta">
                {meta.map((m) => (
                  <div className="meta-item" key={m.label}>
                    <dt>{m.label}</dt>
                    <dd>{m.value}</dd>
                  </div>
                ))}
              </dl>

              {sections.map((s) => (
                <div className="project-section" key={s.title}>
                  <h2>{s.title}</h2>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          <nav className="project-pager" aria-label="More projects">
            <a href={`/project/${prevProject.id}`} className="pager-link pager-prev">
              <span className="pager-label">
                <span aria-hidden="true">&lt;</span> Previous project
              </span>
              <span className="pager-name">{prevProject.name}</span>
            </a>
            <a href={`/project/${nextProject.id}`} className="pager-link pager-next">
              <span className="pager-label">
                Next project <span aria-hidden="true">&gt;</span>
              </span>
              <span className="pager-name">{nextProject.name}</span>
            </a>
          </nav>
        </div>
      </section>

      <section className="project-cta">
        <div className="project-detail-container project-cta-inner">
          <div>
            <h2>Have a project like this?</h2>
            <p>Let's talk about how we can help.</p>
          </div>
          <a href="/contact" className="btn btn-stone">
            Get in touch <span className="btn-arrow" aria-hidden="true">&gt;</span>
          </a>
        </div>
      </section>
    </div>
  );
}
