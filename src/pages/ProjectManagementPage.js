import React from 'react';
import ServiceDetail from '../components/ServiceDetail';

const services = [
  {
    title: 'Feasibility & Options Analysis',
    text: "This is normally the first piece of the puzzle, where we establish whether the vision you have in your head makes sense financially in the long term. We'll assess the site, do preliminary bulk and location modelling and help you to assess your options. Doing this before engaging architects or designers can save significant time and money.",
  },
  {
    title: 'Project Management',
    text: 'From the initial conversation to handing over the keys, our team take ownership of delivering your project. This includes scheduling contractors, controlling the budget, managing the risk, coordinating with stakeholders and communicating openly with you throughout the project.',
  },
  {
    title: 'Design Coordination',
    text: "We'll work closely with architects and engineers to make sure everyone's aligned on the project requirements. Because we are builders, investors and developers ourselves, we can make sure the design reflects your long term financial goals. We'll hold the design team accountable and be part of your design process, all while keeping a close eye on costs and timelines throughout these initial stages.",
  },
  {
    title: 'Procurement & Tender',
    text: "We'll work with you to find the right contractors and suppliers for the job, then manage the ongoing relationships. This includes taking care of the initial tendering process, appointing the right teams, negotiating costs and timings and keeping everyone on track and in the know.",
  },
  {
    title: 'Contract Administration',
    text: "Administration can suck up hours of your week. Our team take care of it all. From reviewing and negotiating contracts to managing day-to-day requirements on site to handling any claims or changes to the project, we'll resolve them as we go and communicate openly throughout.",
  },
];

// Projects where planning, subdivision and management led the work
const isPmProject = (p) => /subdivision|ccc|conversion/i.test(p.type);

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
      otherService={{ href: '/construction', label: 'Construction' }}
    />
  );
}
