"use client";

import styles from "./Portfolio.module.css";

const projects = [
  {
    title: "Harper & West",
    category: "Branding → Website",
    description:
      "Full repositioning for a UK accounting firm that needed to feel established online.",
    highlights: [
      "Rebuilt the visual identity and messaging system",
      "Planned and designed a focused 8-page site",
      "Brought calm, credible visuals to every touchpoint",
    ],
    location: "London, UK",
    year: "2024",
  },
  {
    title: "Safi Clinics",
    category: "Branding → Social",
    description:
      "Clarified the story for a healthcare group expanding across the UAE with new services.",
    highlights: [
      "Defined positioning and service hierarchy",
      "Created a flexible visual language",
      "Aligned social presence to match the in-person experience",
    ],
    location: "Dubai, UAE",
    year: "2024",
  },
  {
    title: "Northline Logistics",
    category: "Website → Email",
    description:
      "Redesigned the sales site and built follow-up sequences to make next steps obvious.",
    highlights: [
      "Simplified value props for multiple buyer types",
      "Built a modular site ready for future services",
      "Implemented lead nurture with human, confident copy",
    ],
    location: "Manchester, UK",
    year: "2025",
  },
];

export default function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Portfolio</p>

        <div className={styles.headerRow}>
          <div>
            <h2 className={styles.h2}>Proof of work worth showing.</h2>
            <p className={styles.lede}>
              A sample of how Natwic rebuilds credibility across brand, web, and ongoing
              marketing.
            </p>
          </div>

          <div className={styles.aside}>
            <p>
              Each engagement pairs strategy with delivery. We define the positioning, build the
              assets, and ensure the story stays consistent across channels.
            </p>
            <p className={styles.subtext}>
              The result: prospects experience one clear, confident version of your business.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <p className={styles.category}>{project.category}</p>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                </div>
                <div className={styles.meta}>
                  <span>{project.location}</span>
                  <span aria-hidden="true" className={styles.dot}>
                    •
                  </span>
                  <span>{project.year}</span>
                </div>
              </div>

              <p className={styles.description}>{project.description}</p>

              <ul className={styles.list}>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
