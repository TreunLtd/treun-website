import React from 'react';
import ServiceDetail from '../components/ServiceDetail';

const services = [
  {
    title: 'Residential Construction',
    text: "This is our bread and butter. With extra butter. From small house builds and residential subdivisions to medium-density developments, we can jump in at whatever capacity you need. Whether that's full delivery or a bit of support for an owner-builder, we've got your back.",
  },
  {
    title: 'Civil Works & Infrastructure',
    text: "We obsess over the things no one sees. Earthworks. Drainage and stormwater. Making sure there's a strong, stable starting point for building on. Bringing solutions for complex terrain. Whatever it is, we'll make sure your site is prepared for the project you've got in mind.",
  },
  {
    title: 'Subdivision Development',
    text: "From smaller residential sites, to large, complex subdivisions, to coordinating the release of new sections, if there's land to be developed, we can help. And because the consent process isn't high on anyone's favourite-things-to-do list, we'll take care of that too.",
  },
  {
    title: 'Innovative Construction Methods',
    text: 'Our team are clued up on the latest construction methods, resulting in a faster and more cost effective construction process. From prefabricated and modular building systems to specialised delivery methods to the use of pre-made insulated panels, our finger is on the pulse.',
  },
];

// Projects where Treun delivered the build or civil works
const isConstructionProject = (p) =>
  /build|construction|earthworks|retaining|fitout|modular/i.test(p.type);

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
      otherService={{ href: '/project-management', label: 'Project Management' }}
    />
  );
}
