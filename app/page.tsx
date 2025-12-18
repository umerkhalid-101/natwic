import Link from "next/link"
import Header from "./components/Header"
import styles from "./page.module.css"

export default function Page() {
  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero}>
        {/* Big halftone circle in the center */}
        <div className={styles.halftoneWrap} aria-hidden="true">
          <svg className={styles.halftoneSvg} viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1.2" cy="1.2" r="0.9" fill="currentColor" />
              </pattern>

              <radialGradient id="fadeRing" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="28%" stopColor="white" stopOpacity="0.05" />
                <stop offset="45%" stopColor="white" stopOpacity="0.55" />
                <stop offset="62%" stopColor="white" stopOpacity="0.55" />
                <stop offset="78%" stopColor="white" stopOpacity="0.10" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>

              <mask id="ringMask">
                <rect width="100%" height="100%" fill="url(#fadeRing)" />
              </mask>
            </defs>

            <circle cx="400" cy="400" r="355" fill="url(#dotGrid)" mask="url(#ringMask)" />
          </svg>
        </div>

        <div className={styles.canvas}>
          {/* Left copy block */}
          <div className={styles.left}>
            <h1 className={styles.h1}>
              Your business has matured.
              <br />
              Your digital presence hasn’t.
            </h1>

            <p className={styles.p}>
              Natwic helps service businesses in the UK and UAE rebuild their brand, website, and digital presence so they look credible, professional, and ready to be hired.
            </p>

            <p className={styles.p2}>
              We focus on clarity, consistency, and trust, not trends or noise.
            </p>

            <div className={styles.ctas}>
              <Link href="/contact" className={styles.primary}>
                Request a consultation
              </Link>
              <Link href="/work" className={styles.secondary}>
                View work
              </Link>
            </div>
          </div>

          {/* Bottom-right “partner strip” area */}
          <div className={styles.bottomRight}>
            <div className={styles.rating}>
              <div className={styles.ratingMark}>GoodFirms</div>
              <div className={styles.ratingSub}>Rated 5 out of 5</div>
            </div>

            <div className={styles.partners}>
              <div className={styles.partnerLabel}>WE HAVE PARTNERED WITH 30+ GLOBAL COMPANIES</div>
              <div className={styles.partnerRow}>
                <span className={styles.logoGhost}>IOS</span>
                <span className={styles.logoGhost}>acodei</span>
                <span className={styles.logoGhost}>DoorFeed</span>
                <span className={styles.logoGhost}>Perlon</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
