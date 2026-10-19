import React, { useEffect, useState } from 'react';
import PageHero from '../components/PageHero';
import CaseStudyCard from '../components/CaseStudyCard';
import projects from '../data/projects';
import { isPmProject, isConstructionProject } from '../data/serviceFilters';
import './AllProjectsPage.css';

const filters = [
  { key: 'all', label: 'All projects', test: () => true },
  { key: 'project-management', label: 'Project Management', test: isPmProject },
  { key: 'construction', label: 'Construction', test: isConstructionProject },
];

// Read ?filter=construction etc. so other pages can link straight to a view
const initialFilter = () => {
  const param = new URLSearchParams(window.location.search).get('filter');
  return filters.some((f) => f.key === param) ? param : 'all';
};

export default function AllProjectsPage() {
  const [active, setActive] = useState(initialFilter);

  useEffect(() => {
    document.title = 'Projects | Treun | Auckland & Northland';
  }, []);

  const choose = (key) => {
    setActive(key);
    const url = key === 'all' ? '/all-projects' : `/all-projects?filter=${key}`;
    window.history.replaceState(null, '', url);
  };

  const current = filters.find((f) => f.key === active);
  const shown = projects.filter(current.test);

  return (
    <div className="all-projects-page">
      <PageHero
        eyebrow="Treun — Projects"
        title="Our projects"
        intro="We're incredibly proud of the projects we've delivered over our 20 or so years in this industry."
      />

      <section className="all-projects-content">
        <div className="all-projects-container">
          <div className="project-filters" role="tablist" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f.key}
                role="tab"
                aria-selected={active === f.key}
                className={active === f.key ? 'project-filter active' : 'project-filter'}
                onClick={() => choose(f.key)}
              >
                {f.label}
                <span className="project-filter-count">{projects.filter(f.test).length}</span>
              </button>
            ))}
          </div>

          <div className="all-projects-grid">
            {shown.map((project) => (
              <CaseStudyCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
