"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Services.module.css";

type Service = {
  id: string;
  tab: string;
  title: string;
  kicker: string;
  body: string[];
  productsTitle: string;
  products: string[];
  graphic: string;
};

const svg = (s: string) =>
  `url("data:image/svg+xml;utf8,${encodeURIComponent(s)}")`;

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function Services() {
  const services: Service[] = useMemo(
    () => [
      {
        id: "branding",
        tab: "Branding",
        title: "Branding as your foundation.",
        kicker:
          "A clear, professional brand that explains who you are and why you matter.",
        body: [
          "We define your positioning, messaging, and visual identity so your business feels established and intentional across every touchpoint.",
          "This is not about decoration. It is about clarity and trust.",
        ],
        productsTitle: "Products",
        products: ["Positioning", "Messaging", "Visual identity", "Brand system"],
        graphic: svg(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700">
            <defs>
              <radialGradient id="g" cx="30%" cy="20%" r="70%">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85"/>
                <stop offset="60%" stop-color="#ffffff" stop-opacity="0.0"/>
              </radialGradient>
            </defs>
            <rect width="900" height="700" fill="#f0eeea"/>
            <rect width="900" height="700" fill="url(#g)" opacity="0.55"/>
            <g fill="#000" opacity="0.06">
              <path d="M140 120 C140 60 210 40 270 60 L610 170 C680 195 700 250 675 315 L560 610 C535 675 470 700 410 685 L200 630 C130 610 110 560 125 500 Z"/>
              <circle cx="450" cy="360" r="210" opacity="0.05"/>
            </g>
            <g opacity="0.04">
              <circle cx="720" cy="90" r="180" fill="#000"/>
              <circle cx="80" cy="640" r="160" fill="#000"/>
            </g>
          </svg>
        `),
      },
      {
        id: "website",
        tab: "Website Development",
        title: "Website as your proof.",
        kicker:
          "A website that reflects the quality of your work and makes taking the next step feel natural.",
        body: [
          "We design and build modern, focused websites that communicate value clearly and remove hesitation.",
          'Every page has a purpose. Nothing exists "just to fill space."',
        ],
        productsTitle: "Products",
        products: [
          "UX structure",
          "Web design",
          "Build and launch",
          "Performance and SEO basics",
        ],
        graphic: svg(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85"/>
                <stop offset="70%" stop-color="#ffffff" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <rect width="900" height="700" fill="#f0eeea"/>
            <rect width="900" height="700" fill="url(#g)" opacity="0.6"/>
            <g stroke="#000" opacity="0.05" stroke-width="2">
              <line x1="120" y1="0" x2="120" y2="700"/>
              <line x1="230" y1="0" x2="230" y2="700"/>
              <line x1="340" y1="0" x2="340" y2="700"/>
              <line x1="450" y1="0" x2="450" y2="700"/>
              <line x1="560" y1="0" x2="560" y2="700"/>
              <line x1="670" y1="0" x2="670" y2="700"/>
              <line x1="780" y1="0" x2="780" y2="700"/>
              <line x1="0" y1="110" x2="900" y2="110"/>
              <line x1="0" y1="220" x2="900" y2="220"/>
              <line x1="0" y1="330" x2="900" y2="330"/>
              <line x1="0" y1="440" x2="900" y2="440"/>
              <line x1="0" y1="550" x2="900" y2="550"/>
              <line x1="0" y1="660" x2="900" y2="660"/>
            </g>
            <g fill="#000" opacity="0.05">
              <circle cx="520" cy="380" r="260"/>
              <circle cx="160" cy="120" r="220" opacity="0.03"/>
            </g>
          </svg>
        `),
      },
      {
        id: "social",
        tab: "Social Media Marketing",
        title: "Social as your credibility.",
        kicker: "A consistent, credible social presence that reinforces trust.",
        body: [
          "We align how your business shows up socially so it supports your brand instead of confusing it.",
          "This is not about virality. It is about legitimacy.",
        ],
        productsTitle: "Products",
        products: [
          "Content pillars",
          "Profile alignment",
          "Posting system",
          "Brand consistency",
        ],
        graphic: svg(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700">
            <defs>
              <radialGradient id="g" cx="70%" cy="30%" r="75%">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85"/>
                <stop offset="65%" stop-color="#ffffff" stop-opacity="0"/>
              </radialGradient>
            </defs>
            <rect width="900" height="700" fill="#f0eeea"/>
            <rect width="900" height="700" fill="url(#g)" opacity="0.55"/>
            <g fill="#000" opacity="0.055">
              <circle cx="330" cy="330" r="110"/>
              <path d="M330 330 L540 330 A170 170 0 0 1 500 290 Z"/>
              <path d="M330 330 L478 478 A170 170 0 0 1 438 438 Z"/>
              <path d="M330 330 L330 540 A170 170 0 0 1 290 500 Z"/>
              <path d="M330 330 L182 478 A170 170 0 0 1 222 438 Z"/>
              <path d="M330 330 L120 330 A170 170 0 0 1 160 290 Z"/>
              <path d="M330 330 L182 182 A170 170 0 0 1 222 222 Z"/>
              <path d="M330 330 L330 120 A170 170 0 0 1 290 160 Z"/>
              <path d="M330 330 L478 182 A170 170 0 0 1 438 222 Z"/>
            </g>
            <circle cx="330" cy="330" r="260" fill="#000" opacity="0.03"/>
          </svg>
        `),
      },
      {
        id: "email",
        tab: "Email Marketing",
        title: "Email as your follow through.",
        kicker:
          "Clear, professional communication that builds confidence over time.",
        body: [
          "We help structure email systems that nurture leads, follow up properly, and sound human, not automated.",
          "Consistency builds trust. Silence breaks it.",
        ],
        productsTitle: "Products",
        products: [
          "Lead nurture",
          "Follow up sequences",
          "Lead handoff",
          "Basic segmentation",
        ],
        graphic: svg(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700">
            <defs>
              <radialGradient id="g" cx="40%" cy="35%" r="80%">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85"/>
                <stop offset="60%" stop-color="#ffffff" stop-opacity="0"/>
              </radialGradient>
            </defs>
            <rect width="900" height="700" fill="#f0eeea"/>
            <rect width="900" height="700" fill="url(#g)" opacity="0.55"/>
            <g fill="#000" opacity="0.055">
              <circle cx="360" cy="360" r="250" opacity="0.045"/>
              <circle cx="360" cy="360" r="120" opacity="0.06"/>
              <rect x="345" y="150" width="30" height="190" rx="16" transform="rotate(0 360 360)" />
              <rect x="345" y="150" width="30" height="190" rx="16" transform="rotate(51.4 360 360)" />
              <rect x="345" y="150" width="30" height="190" rx="16" transform="rotate(102.8 360 360)" />
              <rect x="345" y="150" width="30" height="190" rx="16" transform="rotate(154.2 360 360)" />
              <rect x="345" y="150" width="30" height="190" rx="16" transform="rotate(205.6 360 360)" />
              <rect x="345" y="150" width="30" height="190" rx="16" transform="rotate(257 360 360)" />
              <rect x="345" y="150" width="30" height="190" rx="16" transform="rotate(308.4 360 360)" />
            </g>
          </svg>
        `),
      },
    ],
    []
  );

  const trackRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // progress smoothing
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const isMobile = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 980px)").matches;
  };

  const scrollToIndex = (idx: number) => {
    const el = slideRefs.current[idx];
    if (!el) return;

    if (isMobile()) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    el.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  const prev = () => scrollToIndex(Math.max(0, activeIndex - 1));
  const next = () =>
    scrollToIndex(Math.min(services.length - 1, activeIndex + 1));

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafActiveIdx = 0;

    const computeTargetProgress = () => {
      const maxX = Math.max(1, track.scrollWidth - track.clientWidth);
      const p = clamp(track.scrollLeft / maxX, 0, 1);
      targetProgressRef.current = p;
    };

    const updateActiveIndex = () => {
      // Desktop: based on closest slide to center
      if (!isMobile()) {
        const mid = track.scrollLeft + track.clientWidth / 2;

        let bestIdx = 0;
        let bestDist = Number.POSITIVE_INFINITY;

        for (let i = 0; i < slideRefs.current.length; i++) {
          const el = slideRefs.current[i];
          if (!el) continue;

          const slideMid = el.offsetLeft + el.clientWidth / 2;
          const d = Math.abs(slideMid - mid);
          if (d < bestDist) {
            bestDist = d;
            bestIdx = i;
          }
        }

        setActiveIndex(bestIdx);
        return;
      }

      // Mobile vertical: based on which slide top is closest to viewport top (with a small offset)
      const offset = 90; // accounts for the tabs area above
      let bestIdx = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      for (let i = 0; i < slideRefs.current.length; i++) {
        const el = slideRefs.current[i];
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top - offset);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      }

      setActiveIndex(bestIdx);
    };

    const render = () => {
      // Smooth the bar instead of jumping
      currentProgressRef.current = lerp(
        currentProgressRef.current,
        targetProgressRef.current,
        0.14
      );

      track.style.setProperty(
        "--p",
        String(currentProgressRef.current.toFixed(5))
      );

      rafRef.current = window.requestAnimationFrame(render);
    };

    const onScroll = () => {
      computeTargetProgress();

      cancelAnimationFrame(rafActiveIdx);
      rafActiveIdx = requestAnimationFrame(() => {
        updateActiveIndex();
      });
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (isMobile()) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };

    // initial
    computeTargetProgress();
    updateActiveIndex();

    // listeners
    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("keydown", onKeyDown);

    // start render loop
    rafRef.current = window.requestAnimationFrame(render);

    // also update on resize
    const onResize = () => {
      computeTargetProgress();
      updateActiveIndex();
    };
    window.addEventListener("resize", onResize);

    return () => {
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);

      cancelAnimationFrame(rafActiveIdx);

      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [services.length, activeIndex]);

  return (
    <section id="services" className={styles.wrap}>
      <div className={styles.shell}>
        <div className={styles.top}>
          <div>
            <h2 className={styles.h2}>
              Who we <span className={styles.are}>are</span>
            </h2>

            <p className={styles.lead}>
              We do not sell disconnected services. We build credible digital
              systems that support how your business actually wins clients.
            </p>
          </div>

          <div>
            <p className={styles.rightTopTitle}>
              Winning businesses look credible before they ever speak to a lead.
            </p>
            <p className={styles.rightTopBody}>
              We tighten your positioning, presence, and follow up so the
              business feels established, consistent, and easy to trust.
            </p>
          </div>
        </div>

        <div className={styles.tabs}>
          <div className={styles.progressWrap} aria-hidden="true">
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} />
            </div>
          </div>

          <div className={styles.tabsRow}>
            {services.map((s, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={s.id}
                  type="button"
                  className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
                  onClick={() => scrollToIndex(idx)}
                  aria-current={isActive ? "true" : "false"}
                >
                  {s.tab}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.trackWrap}>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={prev}
          disabled={activeIndex === 0}
          aria-label="Previous service"
        >
          ‹
        </button>

        <div
          ref={trackRef}
          className={styles.track}
          aria-label="Services"
          role="region"
          tabIndex={0}
        >
          {services.map((s, idx) => (
            <article
              key={s.id}
              ref={(el) => {
                slideRefs.current[idx] = el;
              }}
              className={styles.slide}
            >
              <div className={styles.card}>
                <div
                  className={styles.ghost}
                  style={{ backgroundImage: s.graphic }}
                  aria-hidden="true"
                />

                <div className={styles.text}>
                  <p className={styles.kicker}>
                    {String(idx + 1).padStart(2, "0")} /{" "}
                    {String(services.length).padStart(2, "0")}
                  </p>

                  <h3 className={styles.serviceTitle}>{s.title}</h3>

                  <p className={styles.serviceBody}>{s.kicker}</p>
                  {s.body.map((line, i) => (
                    <p key={i} className={styles.serviceBody}>
                      {line}
                    </p>
                  ))}
                </div>

                <aside className={styles.aside}>
                  <p className={styles.sideTitle}>{s.productsTitle}</p>
                  <div className={styles.list}>
                    {s.products.map((item) => (
                      <div key={item} className={styles.listItem}>
                        {item}
                      </div>
                    ))}
                  </div>
                </aside>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={next}
          disabled={activeIndex === services.length - 1}
          aria-label="Next service"
        >
          ›
        </button>
      </div>
    </section>
  );
}
