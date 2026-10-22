import React from 'react';
import ServiceDetail from '../components/ServiceDetail';
import { pmServices as services } from '../data/services';
import { isPmProject } from '../data/serviceFilters';


export default function ProjectManagementPage() {
  return (
    <ServiceDetail
      pageTitle="Project Management | Treun | Auckland & Northland"
      eyebrow="Treun — Project Management"
      title="Project Management"
      tagline="A trusted pair of hands from start to finish."
      intro="Engage us early in a project and we can help with your feasibility study and options analysis. Our role is to work with you to establish the viability of your project and recommend next steps, before you invest time, money and energy into architects and designers. From there, we can oversee the entire project from start to finish, or just the parts you need."
      heroImage="/images/projects/WEST/WEST_05.jpg"
      services={services}
      projectFilter={isPmProject}
      projectsHref="/all-projects?filter=project-management"
      otherService={{ href: '/construction', label: 'Construction' }}
    />
  );
}
