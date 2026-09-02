import React, { useEffect } from 'react';
import CaseStudyCard from '../components/CaseStudyCard';
import projects from '../data/projects';
import './AllProjectsPage.css';

export default function AllProjectsPage() {

  useEffect(() => {
    document.title = 'Projects | Treun Auckland';
  }, []);

  return (
    <div className="all-projects-page">
      <section className="all-projects-hero">
        <div className="all-projects-hero-content">
          <h1>All Projects</h1>
          <p>Complete portfolio across infrastructure, residential, and commercial sectors.</p>
        </div>
      </section>

      <section className="all-projects-content">
        <div className="section-container">
          <div className="projects-grid">
            {projects.map(project => (
              <CaseStudyCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
