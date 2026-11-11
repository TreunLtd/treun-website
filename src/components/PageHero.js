import React from 'react';
import './PageHero.css';

/*
  Standard page header used across the site.
  Optional `image` adds a photo behind a Structural Blue overlay.
*/
export default function PageHero({ eyebrow, title, intro, image }) {
  const style = image
    ? {
        backgroundImage: `linear-gradient(90deg, rgba(46,64,78,0.92) 0%, rgba(46,64,78,0.65) 60%, rgba(46,64,78,0.5) 100%), url('${image}')`,
      }
    : undefined;

  return (
    <section className={image ? 'page-hero page-hero--image' : 'page-hero'} style={style}>
      <div className="page-hero-inner">
        {eyebrow && <p className="page-hero-eyebrow">{eyebrow}</p>}
        <span className="treun-line"></span>
        <h1>{title}</h1>
        <span className="treun-line"></span>
        {intro && <p className="page-hero-intro">{intro}</p>}
      </div>
    </section>
  );
}
