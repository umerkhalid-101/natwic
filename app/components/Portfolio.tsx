"use client"

import { useEffect, useMemo, useRef } from "react"
import styles from "./Portfolio.module.css"

type Project = {
  id: string
  label: string
  title: string
  desc: string
  href: string
  size: "lg" | "md"
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

function invLerp(a: number, b: number, v: number) {
  if (a === b) return 0
  return clamp((v - a) / (b - a), 0, 1)
}

export default function Portfolio() {
  const placeholderImg =
    "https://images.unsplash.com/photo-1721010836470-e2rlqUNDzms?auto=format&fit=crop&w=2200&q=80"

  const projects: Project[] = useMemo(
    () => [
      {
        id: "p1",
        label: "PRODUCT DESIGN",
        title: "Project One",
        desc: "End to end UX for a transactional flow with measurable drop-off reduction.",
        href: "#",
        size: "lg",
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
        size: "md",
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
        id: "p5",
        label: "MOBILE APP",
        title: "Project Five",
        desc: "Mobile-first IA and UI for high frequency use cases.",
        href: "#",
        size: "md",
      },
      {
        id: "p6",
        label: "BRANDING + WEB",
        title: "Project Six",
        desc: "Brand direction and web experience aligned with positioning.",
        href: "#",
        size: "md",
      },
      {
        id: "p7",
        label: "FINTECH UX",
        title: "Project Seven",
        desc: "Complex flows simplified into a clean, guided experience.",
        href: "#",
        size: "lg",
      },
      {
        id: "p8",
        label: "UX STRATEGY",
        title: "Project Eight",
        desc: "Journey mapping and MVP scope for a new product line.",
        href: "#",
        size: "md",
      },
      {
        id: "p9",
        label: "PROTOTYPING",
        title: "Project Nine",
        desc: "High fidelity prototypes for testing and stakeholder alignment.",
        href: "#",
        size: "md",
      },
    ],
    []
  )

  const wrapRef = useRef<HTMLElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const gridRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const overlay = overlayRef.current
    const grid = gridRef.current
    if (!wrap || !overlay || !grid) return

    let raf = 0
    let active = false

    const reset = () => {
      overlay.classList.remove(styles.overlayActive)
      overlay.style.setProperty("--overlayO", "0")
      overlay.style.setProperty("--hO", "0")
      overlay.style.setProperty("--sO", "0")
      overlay.style.setProperty("--scale", "1")
      overlay.style.setProperty("--titleY", "0px")
      overlay.style.setProperty("--subY", "0px")
      overlay.style.setProperty("--cueO", "0")
      overlay.style.setProperty("--bgO", "0")
      overlay.style.setProperty("--block", "none")

      grid.style.setProperty("--gridO", "0")
      grid.style.setProperty("--gridY", "14px")
      grid.style.setProperty("--gridBlock", "none")
    }

    const update = () => {
      const vh = window.innerHeight || 1
      const r = wrap.getBoundingClientRect()

      if (r.top > vh) {
        if (active) {
          active = false
          reset()
        }
        return
      }

      if (!active) {
        active = true
        overlay.classList.add(styles.overlayActive)
      }

      const start = vh * 1.0
      const end = -vh * 0.9
      const p = clamp((start - r.top) / (start - end), 0, 1)

      const overlayEnter = invLerp(0.00, 0.10, p)

      const fadeIn = invLerp(0.12, 0.30, p)
      const grow = invLerp(0.30, 0.66, p)
      const fadeOut = invLerp(0.66, 0.82, p)

      // grid appears after the text run
      const gridReveal = invLerp(0.84, 0.98, p)

      const textVisible = clamp(fadeIn * (1 - fadeOut), 0, 1)
      const scale = 1 + grow * 0.95
      const titleY = grow * -34
      const subY = grow * -16

      const bgO = clamp((0.92 - gridReveal * 0.92) * overlayEnter, 0, 0.92)

      const overlayFadeOut = invLerp(0.78, 0.96, p)
      const overlayO = overlayEnter * (1 - overlayFadeOut)

      const gridO = gridReveal
      const gridY = (1 - gridReveal) * 18

      overlay.style.setProperty("--overlayO", String(overlayO))
      overlay.style.setProperty("--hO", String(textVisible * overlayO))
      overlay.style.setProperty("--sO", String(textVisible * 0.68 * overlayO))
      overlay.style.setProperty("--scale", String(scale))
      overlay.style.setProperty("--titleY", `${titleY}px`)
      overlay.style.setProperty("--subY", `${subY}px`)
      overlay.style.setProperty("--cueO", String(clamp(1 - p * 2.2, 0, 1) * overlayO))
      overlay.style.setProperty("--bgO", String(bgO))
      overlay.style.setProperty("--block", overlayO > 0.08 ? "auto" : "none")

      grid.style.setProperty("--gridO", String(gridO))
      grid.style.setProperty("--gridY", `${gridY}px`)
      grid.style.setProperty("--gridBlock", gridO > 0.08 ? "auto" : "none")

      raf = requestAnimationFrame(update)
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    reset()
    update()

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <section ref={wrapRef} id="portfolio" className={styles.wrap}>
      {/* Gate overlay */}
      <div ref={overlayRef} className={styles.overlayFixed}>
        <div className={styles.introInner}>
          <h2 className={styles.display}>
            Crafting Competitive
            <br />
            Digital <span className={styles.accent}>Experiences</span>
          </h2>

          <p className={styles.sub}>A focused set of work. Clean systems. Real outcomes.</p>

          <div className={styles.scrollCue} aria-hidden="true">
            <span className={styles.cueLine} />
            <span className={styles.cueDot} />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div ref={gridRef} className={styles.gridWrap}>
        <div className={styles.gridInner}>
          <div className={styles.gridTopSpacer} aria-hidden="true" />

          <div className={styles.grid}>
            {projects.map((p) => (
              <a key={p.id} href={p.href} className={`${styles.card} ${styles[p.size]}`}>
                <div className={styles.media}>
                  <img className={styles.img} src={placeholderImg} alt="" loading="lazy" />
                  <div className={styles.mediaOverlay} />
                </div>

                <div className={styles.content}>
                  <p className={styles.kicker}>{p.label}</p>
                  <div className={styles.row}>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                    <span className={styles.cta}>
                      View case study <span className={styles.arrow} aria-hidden="true">→</span>
                    </span>
                  </div>
                  <p className={styles.desc}>{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
