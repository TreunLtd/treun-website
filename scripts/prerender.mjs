// Build-time SEO prerender for treun.co.nz (runs after `react-scripts build`).
//
// The site is a client-rendered React app, so without this every URL serves the
// same empty index.html with the homepage title/description. This script writes
// a static HTML file per route with its own <title>, meta description, canonical,
// Open Graph tags, JSON-LD schema and real page text inside #root. React replaces
// that text on load; crawlers that don't run JavaScript read it directly.
// It also writes build/sitemap.xml.
//
// Content comes from src/data/*.js, so editing those files updates both the live
// pages and this output. To add a page: add it to `pages` below.

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const BUILD = process.env.BUILD_PATH ? path.resolve(process.env.BUILD_PATH) : path.join(ROOT, 'build');
const SITE = 'https://treun.co.nz';
const TODAY = new Date().toISOString().slice(0, 10);

// src/data files are ES modules without "type":"module", so import a temp .mjs copy
async function loadData(rel) {
  const src = fs.readFileSync(path.join(ROOT, 'src/data', rel), 'utf8');
  const tmp = path.join(os.tmpdir(), `treun-${rel.replace(/\W/g, '_')}-${process.pid}.mjs`);
  fs.writeFileSync(tmp, src);
  const mod = await import(pathToFileURL(tmp).href);
  fs.unlinkSync(tmp);
  return mod;
}

const projects = (await loadData('projects.js')).default;
const faqs = (await loadData('faqs.js')).default;
const { pmServices, constructionServices } = await loadData('services.js');

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function clip(s, max = 160) {
  s = s.replace(/\s+/g, ' ').trim();
  if (s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:\-–—]$/, '') + '…';
}

// ---------- Schema ----------
const ORG_ID = `${SITE}/#organization`;
const PERSON_ID = `${SITE}/#matt-chernishov`;

const organization = {
  '@type': 'GeneralContractor',
  '@id': ORG_ID,
  name: 'Treun',
  legalName: 'Treun Limited',
  url: SITE,
  logo: `${SITE}/brand/treun-logo-blue.svg`,
  image: `${SITE}/images/photo_of_Matt.jpg`,
  description:
    'Project management and construction across residential, commercial, civil and infrastructure projects in Auckland and Northland.',
  slogan: 'Built on strength.',
  telephone: '+64 27 646 4624',
  email: 'matt@treun.co.nz',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Algies Bay, Warkworth',
    addressRegion: 'Auckland',
    postalCode: '0920',
    addressCountry: 'NZ',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Auckland' },
    { '@type': 'AdministrativeArea', name: 'Northland' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '07:00',
    closes: '17:00',
  },
  founder: { '@id': PERSON_ID },
  sameAs: [
    'https://www.linkedin.com/company/treun-project-management',
    'https://www.linkedin.com/company/treun-works',
  ],
};

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Matt Chernishov',
  jobTitle: 'Director',
  worksFor: { '@id': ORG_ID },
  image: `${SITE}/images/photo_of_Matt.jpg`,
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Massey University' },
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'Master of Business Administration (MBA)' },
    { '@type': 'EducationalOccupationalCredential', name: 'Licensed Building Practitioner — Carpentry' },
  ],
};

const website = { '@type': 'WebSite', '@id': `${SITE}/#website`, url: SITE, name: 'Treun', publisher: { '@id': ORG_ID } };

const crumbs = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, url], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + url })),
});

const serviceSchema = (list, url) =>
  list.map((s) => ({
    '@type': 'Service',
    name: s.title,
    description: s.text,
    provider: { '@id': ORG_ID },
    areaServed: ['Auckland', 'Northland'],
    url: SITE + url,
  }));

// ---------- Static body content ----------
const nav = `<nav><a href="/">Home</a> · <a href="/project-management">Project management</a> · <a href="/construction">Construction</a> · <a href="/all-projects">Projects</a> · <a href="/about">About</a> · <a href="/faq">FAQs</a> · <a href="/contact">Contact</a></nav>`;
const footer = `<p>Treun Limited · Algies Bay, Warkworth · <a href="tel:+64276464624">027 646 4624</a> · <a href="mailto:matt@treun.co.nz">matt@treun.co.nz</a></p>`;
const wrap = (inner) => `<div class="prerender">${nav}<main>${inner}</main>${footer}</div>`;
const sections = (list) => list.map((s) => `<h2>${esc(s.title)}</h2><p>${esc(s.text)}</p>`).join('');
const projectLinks = (list) =>
  `<ul>${list.map((p) => `<li><a href="/project/${p.id}">${esc(p.name)}</a> — ${esc(p.type)}</li>`).join('')}</ul>`;

// ---------- Pages ----------
const pages = [
  {
    url: '/',
    title: 'Treun | Project Management + Construction | Auckland & Northland',
    description:
      'Project management and construction for residential, commercial, civil and infrastructure projects across Auckland and Northland. Based near Warkworth.',
    schema: [organization, website, person],
    body: wrap(
      `<h1>Project management and construction, built on strength.</h1>
<p>Treun delivers project management and construction across residential, commercial, civil and infrastructure projects. Based near Warkworth, we work on projects across Auckland and Northland.</p>
<h2><a href="/project-management">Project management</a></h2><p>Feasibility, options analysis, design coordination, procurement and contract administration.</p>
<h2><a href="/construction">Construction</a></h2><p>Residential and commercial construction, civil works and infrastructure, and subdivisions.</p>
<h2>Featured projects</h2>${projectLinks(projects.filter((p) => p.featured))}`
    ),
  },
  {
    url: '/project-management',
    title: 'Project Management | Treun | Auckland & Northland',
    description:
      'Feasibility, options analysis, design coordination, procurement and contract administration for projects across Auckland and Northland. Engage Treun early.',
    schema: [organization, ...serviceSchema(pmServices, '/project-management'), crumbs([['Home', '/'], ['Project management', '/project-management']])],
    body: wrap(
      `<h1>Project Management</h1><p>Engage us early and we can help with your feasibility study and options analysis, then oversee the entire project from start to finish, or just the parts you need.</p>${sections(pmServices)}`
    ),
  },
  {
    url: '/construction',
    title: 'Construction & Civil Works | Treun | Auckland & Northland',
    description:
      'Residential builds, civil works, earthworks, drainage and subdivision development across Auckland and Northland, from small homes to complex sites.',
    schema: [organization, ...serviceSchema(constructionServices, '/construction'), crumbs([['Home', '/'], ['Construction', '/construction']])],
    body: wrap(
      `<h1>Construction</h1><p>From residential subdivisions and builds to complex civil infrastructure. Having developed many of our own projects, we understand the owner's perspective.</p>${sections(constructionServices)}`
    ),
  },
  {
    url: '/all-projects',
    title: 'Projects | Treun | Auckland & Northland',
    description:
      'Subdivisions, residential builds, civil works and commercial fitouts delivered by Treun across Auckland, Waiheke Island, Warkworth and beyond.',
    schema: [organization, crumbs([['Home', '/'], ['Projects', '/all-projects']])],
    body: wrap(`<h1>Our projects</h1>${projectLinks(projects)}`),
  },
  {
    url: '/about',
    title: 'About | Treun | Project Management + Construction',
    description:
      'Treun is led by Matt Chernishov (MBA, LBP), bringing builder, developer and project manager experience to projects across Auckland and Northland.',
    schema: [organization, person, crumbs([['Home', '/'], ['About', '/about']])],
    body: wrap(
      `<h1>Built on strength.</h1><p>Treun is a Scottish Gaelic word meaning strong. Treun was founded by Matt Chernishov and delivers project management and construction under one brand.</p>
<h2>Matt Chernishov, MBA, LBP — Director</h2><p>Matt holds an MBA from Massey University and is a Licensed Building Practitioner (carpentry). His career spans residential development, commercial builds, offsite and modular construction, and civil infrastructure.</p>
<h2>Our values</h2><p>Strength, Accountability, Practicality, Quality.</p>`
    ),
  },
  {
    url: '/faq',
    title: 'FAQs | Treun | Project Management + Construction',
    description:
      'Answers on service areas, feasibility, owner-builder support, civil works, qualifications and how Treun engages on project management and construction.',
    schema: [
      {
        '@type': 'FAQPage',
        mainEntity: faqs.flatMap((s) =>
          s.questions.map((q) => ({ '@type': 'Question', name: q.q, acceptedAnswer: { '@type': 'Answer', text: q.a } }))
        ),
      },
      crumbs([['Home', '/'], ['FAQs', '/faq']]),
    ],
    body: wrap(
      `<h1>Frequently asked questions</h1>${faqs
        .map((s) => `<h2>${esc(s.category)}</h2>${s.questions.map((q) => `<h3>${esc(q.q)}</h3><p>${esc(q.a)}</p>`).join('')}`)
        .join('')}`
    ),
  },
  {
    url: '/contact',
    title: 'Contact | Treun | Project Management + Construction',
    description:
      'Talk to Treun about your project. Based in Algies Bay, Warkworth. Call 027 646 4624 or email matt@treun.co.nz, Monday to Friday 7am–5pm.',
    schema: [organization, crumbs([['Home', '/'], ['Contact', '/contact']])],
    body: wrap(
      `<h1>Get in touch</h1><p>Have a project in mind? Call <a href="tel:+64276464624">027 646 4624</a> or email <a href="mailto:matt@treun.co.nz">matt@treun.co.nz</a>. Monday to Friday, 7:00am–5:00pm. Based in Algies Bay, Warkworth.</p>`
    ),
  },
  ...projects.map((p) => {
    const url = `/project/${p.id}`;
    const img = p.cover || (p.images && p.images[0]);
    const imgUrl = img ? `${SITE}/images/projects/${p.folder}/${img}` : undefined;
    return {
      url,
      title: `${p.name} | Treun Projects`,
      description: clip(`${p.type} in ${p.location}. ${p.summary || ''}`),
      image: imgUrl,
      schema: [
        crumbs([['Home', '/'], ['Projects', '/all-projects'], [p.name, url]]),
        {
          '@type': 'CreativeWork',
          name: `${p.name} — ${p.type}`,
          about: p.type,
          description: p.summary,
          locationCreated: { '@type': 'Place', name: p.location },
          creator: { '@id': ORG_ID },
          ...(imgUrl ? { image: imgUrl } : {}),
        },
      ],
      body: wrap(
        `<h1>${esc(p.name)}</h1><p>${esc(p.type)} · ${esc(p.location)}${p.timeline ? ` · ${esc(p.timeline)}` : ''}</p>
${p.summary ? `<p>${esc(p.summary)}</p>` : ''}${p.challenge ? `<h2>Challenge</h2><p>${esc(p.challenge)}</p>` : ''}${p.approach ? `<h2>Approach</h2><p>${esc(p.approach)}</p>` : ''}${p.outcome ? `<h2>Outcome</h2><p>${esc(p.outcome)}</p>` : ''}
<p><a href="/all-projects">All projects</a></p>`
      ),
    };
  }),
];

// ---------- Write ----------
const shell = fs.readFileSync(path.join(BUILD, 'index.html'), 'utf8');

function render(page) {
  const canonical = SITE + (page.url === '/' ? '' : page.url);
  const ld = JSON.stringify({ '@context': 'https://schema.org', '@graph': page.schema }).replace(/</g, '\\u003c');
  const head =
    `<title>${esc(page.title)}</title>` +
    `<meta name="description" content="${esc(page.description)}"/>` +
    `<link rel="canonical" href="${canonical}"/>` +
    `<meta property="og:title" content="${esc(page.title)}"/>` +
    `<meta property="og:description" content="${esc(page.description)}"/>` +
    `<meta property="og:url" content="${canonical}"/>` +
    (page.image ? `<meta property="og:image" content="${page.image}"/>` : '') +
    `<script type="application/ld+json">${ld}</script>`;

  let html = shell
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/, '')
    .replace(/<meta property="og:(title|description|url|image)"[^>]*>/g, '')
    .replace('</head>', `${head}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${page.body}</div>`);
  if (!html.includes('class="prerender"')) throw new Error(`#root not found in build/index.html for ${page.url}`);
  return html;
}

for (const page of pages) {
  const out = page.url === '/' ? path.join(BUILD, 'index.html') : path.join(BUILD, page.url, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, render(page));
}

const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  pages.map((p) => `  <url><loc>${SITE}${p.url === '/' ? '/' : p.url}</loc><lastmod>${TODAY}</lastmod></url>`).join('\n') +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(BUILD, 'sitemap.xml'), sitemap);

console.log(`Prerendered ${pages.length} pages + sitemap.xml`);
