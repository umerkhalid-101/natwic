"use client"

import { useEffect, useRef, useState } from "react"
import styles from "../page.module.css"

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  const [scale, setScale] = useState(0.84)
  const [y, setY] = useState(30)
  const [opacity, setOpacity] = useState(0)

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

  useEffect(() => {
    if (!sectionRef.current) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.12 }
    )

    obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    let raf = 0

    const update = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const vh = window.innerHeight || 1

      const start = vh * 0.95
      const end = vh * 0.18
      const raw = (start - rect.top) / (start - end)
      const p = clamp(raw, 0, 1)

      const eased = p * p

      const nextScale = 0.84 + 0.24 * eased
      const nextY = 30 - 30 * eased
      const nextOpacity = 0.08 + 0.92 * eased

      setScale(nextScale)
      setY(nextY)
      setOpacity(nextOpacity)
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [inView])

  const marqueeLogos = [...logos, ...logos]

  return (
    <section id="social-proof" ref={sectionRef} className={styles.socialProof}>
      <div className={styles.socialProofInner}>
        <p className={styles.spEyebrow}>Trusted by</p>

        <h2
          className={styles.spDisplayAggressive}
          style={{
            transform: `translateY(${y}px) scale(${scale})`,
            opacity,
          }}
        >
          Service businesses
          <br />
          ready to <span className={styles.spAccent}>move upmarket</span>
        </h2>

        <p
          className={styles.spSubtext}
          style={{
            opacity: clamp(opacity - 0.08, 0, 1),
            transform: `translateY(${clamp(y * 0.45, 0, 14)}px)`,
          }}
        >
          Based in the UK and UAE. Working with businesses that value quality and clarity.
        </p>

        <div className={styles.spRule} aria-hidden="true" />

        <div className={styles.logoMarquee} aria-label="Client logos">
          <div className={styles.logoMarqueeTrack}>
            {marqueeLogos.map((logo, idx) => (
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
