import React from 'react';
import ServiceDetail from '../components/ServiceDetail';
import { constructionServices as services } from '../data/services';
import { isConstructionProject } from '../data/serviceFilters';


export default function ConstructionPage() {
  return (
    <ServiceDetail
      pageTitle="Construction & Civil Works | Treun | Auckland & Northland"
      eyebrow="Treun — Construction"
      title="Construction"
      tagline="Quality construction for projects big and small."
      intro="From residential subdivisions and builds to complex civil infrastructure, we're laser focused on delivering quality builds. Having developed many of our own projects, we understand the owner's perspective and can translate the construction speak, giving you clarity and confidence along the way."
      heroImage="/images/projects/POIN/POIN_01.jpg"
      services={services}
      projectFilter={isConstructionProject}
      projectsHref="/all-projects?filter=construction"
      otherService={{ href: '/project-management', label: 'Project Management' }}
    />
  );
}
