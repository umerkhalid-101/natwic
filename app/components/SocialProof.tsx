"use client"

import { useEffect, useRef, useState } from "react"
import styles from "../page.module.css"

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [stage, setStage] = useState(0) // 0 none, 1 h1, 2 p, 3 logos

  const logos = [
    { name: "ZWILT", src: "/ZWILT.svg" },
    { name: "SALAMS", src: "/SALAMS.svg" },
    { name: "RPD", src: "/RPD.svg" },
    { name: "MAILMUNCH", src: "/MAILMUNCH.svg" },
    { name: "FOLIONOMICS", src: "/FOLIONOMICS.svg" },
    { name: "FEROUCHI", src: "/FEROUCHI.svg" },
    { name: "CAYANAO", src: "/cayanao_logo.svg" },
    { name: "BT", src: "/BT.svg" },
    { name: "BEYONDHUT", src: "/BEYONDHUT.svg" },
    { name: "AXD", src: "/AXD.svg" },
  ]

  // duplicate for smooth infinite marquee
  const marquee = [...logos, ...logos]

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    let raf = 0

    const clamp01 = (n: number) => Math.max(0, Math.min(1, n))

    const update = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight || 1

      // progress = 0 when section top is at bottom of screen
      // progress = 1 when section top is near top (past header)
      const start = vh * 0.85
      const end = vh * 0.20
      const progress = clamp01((start - r.top) / (start - end))

      // stages based on progress
      // tweak these thresholds if you want it earlier/later
      let nextStage = 0
      if (progress > 0.38) nextStage = 1  // H1
      if (progress > 0.72) nextStage = 2  // P1 + rule
      if (progress > 0.98) nextStage = 3  // logos

      setStage(nextStage)
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

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
    <section
      id="social-proof"
      ref={sectionRef}
      className={styles.socialProof}
      data-stage={stage}
    >
      <div className={styles.socialProofInner}>
        <p className={styles.spEyebrow}>Trusted by</p>

        <h2 className={styles.spDisplayAggressive}>
          Service businesses
          <br />
          ready to <span className={styles.spAccent}>move upmarket</span>
        </h2>

        <p className={styles.spSubtext}>
          Based in the UK and UAE. Working with businesses that value quality and clarity.
        </p>

        <div className={styles.spRule} aria-hidden="true" />

        <div className={styles.logoMarquee} aria-label="Client logos">
          <div className={styles.logoMarqueeTrack}>
            {marquee.map((logo, idx) => (
              <div className={styles.logoPill} key={`${logo.name}-${idx}`}>
                <img className={styles.logoImg} src={logo.src} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
