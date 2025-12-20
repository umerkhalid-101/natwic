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

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

const svg = (s: string) =>
  `url("data:image/svg+xml;utf8,${encodeURIComponent(s)}")`;

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
            <rect width="900" height="700" fill="#f0eeea"/>
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
        products: ["UX structure", "Web design", "Build and launch", "Performance and SEO basics"],
        graphic: svg(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700">
            <rect width="900" height="700" fill="#f0eeea"/>
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
        products: ["Content pillars", "Profile alignment", "Posting system", "Brand consistency"],
        graphic: svg(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700">
            <rect width="900" height="700" fill="#f0eeea"/>
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
        products: ["Lead nurture", "Follow up sequences", "Lead handoff", "Basic segmentation"],
        graphic: svg(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700">
            <rect width="900" height="700" fill="#f0eeea"/>
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

  const pinRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const progressFillRef = useRef<HTMLDivElement | null>(null);

  // store refs to the 4 graphic nodes so we can apply parallax without rerender
  const ghostRefs = useRef<Array<HTMLDivElement | null>>([]);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const activeIndexRef = useRef(0);

  const mouseRef = useRef({ x: 0, y: 0 }); // normalized -1..1
  const wasPinnedRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const pin = pinRef.current;
    const sticky = stickyRef.current;
    if (!pin || !sticky) return;

    const setHeight = () => {
      const slides = Math.max(services.length - 1, 1);
      const perSlide = window.innerHeight * 0.82;
      pin.style.height = `${sticky.offsetHeight + slides * perSlide}px`;
    };

    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, [services.length]);

  useEffect(() => {
    const sticky = stickyRef.current;
    if (!sticky) return;

    const onMove = (e: MouseEvent) => {
      const r = sticky.getBoundingClientRect();
      const nx = ((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) || 0;
      const ny = ((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) || 0;

      // clamp to keep it subtle
      mouseRef.current.x = clamp(nx, -1, 1);
      mouseRef.current.y = clamp(ny, -1, 1);
    };

    sticky.addEventListener("mousemove", onMove);
    return () => sticky.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const pin = pinRef.current;
    const sticky = stickyRef.current;
    const scroller = scrollerRef.current;
    const fill = progressFillRef.current;
    if (!pin || !sticky || !scroller || !fill) return;

    let raf = 0;
    const slides = Math.max(services.length - 1, 1);

    const speed = 1700;
    const smooth = 0.18;

    const isPinned = () => {
      const rect = pin.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom >= window.innerHeight;
    };

    const setLeaving = () => {
      sticky.classList.add(styles.leaving);
      window.setTimeout(() => sticky.classList.remove(styles.leaving), 260);
    };

    const applyParallax = (prog: number) => {
      const activeIdx = activeIndexRef.current;

      // small parallax. 1 to 2px range.
      const px = mouseRef.current.x * 1.6;
      const py = mouseRef.current.y * 1.2;

      // tiny extra motion based on where you are inside the slide
      const slideFloat = prog * slides;
      const local = slideFloat - Math.round(slideFloat); // around -0.5..0.5
      const wob = Math.sin(local * Math.PI) * 0.7;

      for (let i = 0; i < ghostRefs.current.length; i++) {
        const el = ghostRefs.current[i];
        if (!el) continue;

        if (i === activeIdx) {
          el.style.setProperty("--parx", `${px}px`);
          el.style.setProperty("--pary", `${py + wob}px`);
        } else {
          el.style.setProperty("--parx", `0px`);
          el.style.setProperty("--pary", `0px`);
        }
      }
    };

    const render = () => {
      currentProgressRef.current = lerp(
        currentProgressRef.current,
        targetProgressRef.current,
        smooth
      );

      const prog = currentProgressRef.current;

      const x = prog * slides * window.innerWidth;
      scroller.style.transform = `translate3d(${-x}px, 0, 0)`;
      fill.style.transform = `scaleX(${prog})`;

      const idx = clamp(Math.round(prog * slides), 0, services.length - 1);
      if (idx !== activeIndexRef.current) {
        activeIndexRef.current = idx;
        setActiveIndex(idx);
      }

      applyParallax(prog);

      raf = window.requestAnimationFrame(render);
    };

    const syncFromScrollWhenNotPinned = () => {
      if (isPinned()) return;

      const start = pin.offsetTop;
      const total = Math.max(pin.offsetHeight - sticky.offsetHeight, 0);
      const p =
        total === 0 ? 0 : clamp((window.scrollY - start) / total, 0, 1);
      targetProgressRef.current = p;
    };

    const onWheel = (e: WheelEvent) => {
      if (!isPinned()) return;

      const directionDown = e.deltaY > 0;
      const directionUp = e.deltaY < 0;

      const atStart = targetProgressRef.current <= 0.0001;
      const atEnd = targetProgressRef.current >= 0.9999;

      if (atStart && directionUp) return;
      if (atEnd && directionDown) return;

      e.preventDefault();

      const delta = e.deltaY / speed;
      targetProgressRef.current = clamp(targetProgressRef.current + delta, 0, 1);
    };

    const onScroll = () => {
      const pinnedNow = isPinned();
      if (wasPinnedRef.current && !pinnedNow) setLeaving();
      wasPinnedRef.current = pinnedNow;

      syncFromScrollWhenNotPinned();
    };

    const onResize = () => syncFromScrollWhenNotPinned();

    sticky.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    wasPinnedRef.current = isPinned();
    syncFromScrollWhenNotPinned();
    raf = window.requestAnimationFrame(render);

    return () => {
      sticky.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(raf);
    };
  }, [services.length]);

  const jumpTo = (idx: number) => {
    const max = Math.max(services.length - 1, 1);
    targetProgressRef.current = clamp(idx / max, 0, 1);
  };

  const active = services[activeIndex];

  return (
    <section id="services" className={styles.wrap}>
      <section ref={pinRef} className={styles.pin}>
        <div className={styles.sticky} ref={stickyRef}>
          <div className={styles.topPad}>
            <div className={styles.topGrid}>
              <div>
                <h2 className={styles.h2}>
                  Who we <span className={styles.are}>are</span>
                </h2>

                <p className={styles.lead}>
                  We do not sell disconnected services. We build credible digital systems
                  that support how your business actually wins clients.
                </p>
              </div>

              <div>
                <p className={styles.rightTopTitle}>
                  Winning businesses look credible before they ever speak to a lead.
                </p>
                <p className={styles.rightTopBody}>
                  We tighten your positioning, presence, and follow up so the business feels
                  established, consistent, and easy to trust.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.tabs}>
            <div className={styles.progressWrap}>
              <div className={styles.progressTrack}>
                <div className={styles.progressFill} ref={progressFillRef} />
              </div>
            </div>

            <div className={styles.tabsRow}>
              {services.map((s, idx) => {
                const isActiveTab = idx === activeIndex;
                return (
                  <button
                    key={s.id}
                    className={`${styles.tab} ${isActiveTab ? styles.tabActive : ""}`}
                    onClick={() => jumpTo(idx)}
                    aria-current={isActiveTab ? "true" : "false"}
                  >
                    {s.tab}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.stage}>
            <div className={styles.scroller} ref={scrollerRef}>
              <div className={styles.row}>
                {services.map((s, idx) => {
                  const dist = Math.abs(idx - activeIndex);

                  const opacity = dist === 0 ? 1 : dist === 1 ? 0.35 : 0.12;
                  const blur = dist === 0 ? 0 : dist === 1 ? 1.15 : 2.4;

                  const textLift = dist === 0 ? 0 : dist === 1 ? 10 : 18;
                  const graphicLift = dist === 0 ? 0 : dist === 1 ? 6 : 12;

                  return (
                    <div key={s.id} className={styles.panel}>
                      <div className={styles.innerPanel}>
                        <div
                          ref={(el) => {
                            ghostRefs.current[idx] = el;
                          }}
                          className={`${styles.ghost} ${styles.slideFade}`}
                          style={{
                            backgroundImage: s.graphic,
                            opacity,
                            filter: `blur(${blur}px)`,
                            // lift handled by CSS variable so parallax can layer on top
                            ["--lift"]: `${graphicLift}px`,
                            ["--scale"]: `${dist === 0 ? 1 : 0.99}`,
                          }}
                          aria-hidden="true"
                        />

                        <div
                          className={styles.slideFade}
                          style={{
                            opacity,
                            filter: `blur(${blur}px)`,
                            transform: `translateY(${textLift}px)`,
                          }}
                        >
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

                        <aside
                          className={styles.slideFade}
                          style={{
                            opacity,
                            filter: `blur(${blur}px)`,
                            transform: `translateY(${textLift}px)`,
                          }}
                        >
                          <p className={styles.sideTitle}>{active.productsTitle}</p>
                          <div className={styles.list}>
                            {active.products.map((item) => (
                              <div key={item} className={styles.listItem}>
                                {item}
                              </div>
                            ))}
                          </div>
                        </aside>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
