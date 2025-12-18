import Link from "next/link"
import Header from "./components/Header"
import styles from "./page.module.css"

export default function Page() {
  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero}>
        {/* HALFTONE RING */}
        <img
          src="/halftone-ring.svg"
          alt=""
          aria-hidden="true"
          className={styles.ring}
        />

        <div className={styles.canvas}>
          <div className={styles.left}>
            <h1 className={styles.h1}>
              Your business has matured.
              <br />
              Your digital presence hasn’t.
            </h1>

            <p className={styles.p}>
              Natwic helps service businesses in the UK and UAE rebuild their brand,
              website, and digital presence so they look credible, professional,
              and ready to be hired.
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

          <div className={styles.bottomRight}>
            <div className={styles.partnerLabel}>
              WE HAVE PARTNERED WITH 30+ GLOBAL COMPANIES
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
