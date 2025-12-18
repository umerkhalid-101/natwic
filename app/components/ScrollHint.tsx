"use client"

import styles from "../page.module.css"

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function smoothScrollTo(targetY: number, duration = 1100) {
  const startY = window.scrollY
  const diff = targetY - startY
  const start = performance.now()

  const step = (now: number) => {
    const t = Math.min(1, (now - start) / duration)
    const eased = easeInOutCubic(t)
    window.scrollTo(0, startY + diff * eased)
    if (t < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export default function ScrollHint() {
  return (
    <button
      type="button"
      className={styles.scrollHint}
      onClick={() => {
        const el = document.getElementById("social-proof")
        if (!el) return
        const y = el.getBoundingClientRect().top + window.scrollY - 86
        smoothScrollTo(y, 1200) // slower = bigger number
      }}
    >
      <span className={styles.scrollText}>Scroll</span>
      <span className={styles.scrollDot} aria-hidden="true" />
    </button>
  )
}
