"use client"

import { useMemo } from "react"
import styles from "./Portfolio.module.css"

type Project = {
  id: string
  label: string
  title: string
  desc: string
  href: string
  size: "lg" | "md" | "sm"
  image?: string
}

export default function Portfolio() {
  const fallbackImg = "/placeholder.png"

  const projects: Project[] = useMemo(
    () => [
      {
        id: "p1",
        label: "PRODUCT DESIGN",
        title: "Folionomics",
        desc: "End to end UX for a transactional flow with measurable drop-off reduction.",
        href: "#",
        size: "lg",
        image: "/FolionomicsCover.png",
      },
      {
        id: "p2",
        label: "DESIGN SYSTEM",
        title: "Project Two",
        desc: "Component library and tokens that scale across teams.",
        href: "#",
        size: "md",
      },
      {
        id: "p3",
        label: "UX AUDIT",
        title: "Project Three",
        desc: "Heuristic review and prioritization plan for quick wins.",
        href: "#",
        size: "sm",
      },
      {
        id: "p4",
        label: "WEBSITE DESIGN",
        title: "Project Four",
        desc: "Marketing site refresh focused on clarity, conversion, and speed.",
        href: "#",
        size: "lg",
      },
      {
        id: "p7",
        label: "FINTECH UX",
        title: "Project Seven",
        desc: "Complex flows simplified into a clean, guided experience.",
        href: "#",
        size: "md",
      },
      {
        id: "p8",
        label: "UX STRATEGY",
        title: "Project Eight",
        desc: "Journey mapping and MVP scope for a new product line.",
        href: "#",
        size: "sm",
      },
      {
        id: "p9",
        label: "PROTOTYPING",
        title: "Project Nine",
        desc: "High fidelity prototypes for testing and stakeholder alignment.",
        href: "#",
        size: "lg",
      },
    ],
    []
  )

  return (
    <section id="portfolio" className={styles.wrap} aria-label="Portfolio projects">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.href}
              className={`${styles.card} ${styles[p.size]}`}
            >
              <div className={styles.media}>
                <img
                  className={styles.img}
                  src={p.image ?? fallbackImg}
                  alt={p.title}
                  loading="lazy"
                />
                <div className={styles.mediaOverlay} />
              </div>

              <div className={styles.content}>
                <p className={styles.kicker}>{p.label}</p>

                <div className={styles.row}>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <span className={styles.cta}>
                    View case study <span className={styles.arrow}>→</span>
                  </span>
                </div>

                <p className={styles.desc}>{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
