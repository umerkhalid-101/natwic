"use client"

import { useEffect, useRef } from "react"
import styles from "./PortfolioText.module.css"

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export default function PortfolioText() {
  const wrapRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    let raf = 0
    let ticking = false

    // ---------
    // Targets (set on scroll/resize)
    // ---------
    const target = {
      scale: 1,
      blur: 0,
      y: 0,
      cueO: 1,
      opacity: 1,
    }

    // ---------
    // Rendered (smoothed every frame)
    // ---------
    const rendered = {
      scale: 1,
      blur: 0,
      y: 0,
      cueO: 1,
      opacity: 1,
    }

    // For velocity-based blur
    let lastY = window.scrollY
    let lastT = performance.now()
    let velSmoothed = 0 // 0..1

    const computeTargetsFromScroll = () => {
      ticking = false

      const vh = window.innerHeight || 1
      const r = wrap.getBoundingClientRect()

      const total = Math.max(1, r.height - vh)

      // slower section timing
      const slowFactor = 2.05

      // scale starts immediately
      const rawScale = clamp(-r.top / (total * slowFactor), 0, 1)

      // everything else waits a bit
      const startOffset = 0.22 * vh
      const progressed = clamp((-r.top - startOffset) / slowFactor, 0, total)
      const raw = progressed / total

      const p = easeInOutCubic(raw)
      const come = easeInOutCubic(clamp((raw - 0.02) / 0.22, 0, 1))

      const fadeOut = clamp((raw - 0.82) / 0.18, 0, 1)
      const leave = easeInOutCubic(fadeOut)

      // Keep visible
      target.opacity = 1

      // ✅ Start smaller → hit 1 → gently grow (all eased)
      const scaleIn = easeInOutCubic(clamp(rawScale / 0.45, 0, 1))
      const scaleOut = easeInOutCubic(clamp((rawScale - 0.45) / 0.55, 0, 1))
      target.scale = 0.78 + scaleIn * 0.22 + scaleOut * 0.36

      // Velocity blur (make it smoother + less jumpy)
      const now = performance.now()
      const y = window.scrollY
      const dt = Math.max(16, now - lastT)
      const dy = Math.abs(y - lastY)

      const v = dy / dt
      const vNorm = clamp(v / 2.2, 0, 1)

      // ✅ lower = smoother (less twitch)
      velSmoothed = lerp(velSmoothed, vNorm, 0.12)

      lastY = y
      lastT = now

      const exitBlur = leave * 4
      const velocityBlur = velSmoothed * 9
      target.blur = clamp(exitBlur + velocityBlur, 0, 20)

      // Drift
      target.y = (1 - come) * 32 + p * -10 + leave * 14

      // Cue fade
      target.cueO = clamp(1 - leave * 1.2, 0, 1)
    }

    // Smooth render loop (runs every frame)
    const render = () => {
      // ✅ tune these:
      // higher = snappier, lower = smoother
      const smooth = 0.10

      rendered.scale = lerp(rendered.scale, target.scale, smooth)
      rendered.blur = lerp(rendered.blur, target.blur, smooth)
      rendered.y = lerp(rendered.y, target.y, smooth)
      rendered.cueO = lerp(rendered.cueO, target.cueO, smooth)
      rendered.opacity = lerp(rendered.opacity, target.opacity, smooth)

      wrap.style.setProperty("--pScale", String(rendered.scale))
      wrap.style.setProperty("--pOpacity", String(rendered.opacity))
      wrap.style.setProperty("--pBlur", `${rendered.blur}px`)
      wrap.style.setProperty("--pY", `${rendered.y}px`)
      wrap.style.setProperty("--cueO", String(rendered.cueO))

      raf = requestAnimationFrame(render)
    }

    const onScrollOrResize = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(computeTargetsFromScroll)
    }

    // init
    computeTargetsFromScroll()
    raf = requestAnimationFrame(render)

    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
    }
  }, [])

  return (
    <section ref={wrapRef} className={styles.wrap} aria-label="Portfolio intro">
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.sticky}>
        <div className={styles.inner}>
          <h2 className={styles.title}>
            <span className={styles.black}>Crafting Competitive</span>
            <br />
            <span className={styles.black}>Digital </span>
            <span className={styles.accent}>Experiences</span>
          </h2>

          <p className={styles.sub}>
            A focused set of work. Clean systems. Real outcomes.
          </p>

          <div className={styles.cue} aria-hidden="true">
            <span className={styles.cueLine} />
            <span className={styles.cueDot} />
          </div>
        </div>
      </div>
    </section>
  )
}
