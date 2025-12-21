"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const navItems = ["Services", "Work", "About", "Contact"] as const

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="siteHeader">
      <div className="siteHeaderInner">
        {/* Left: Logo */}
        <Link href="/" className="siteLogo" aria-label="Home">
          <img src="/logo.svg" alt="Natwic" className="siteLogoImg" />
        </Link>

        {/* Center: Desktop nav */}
        <nav className="siteNav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="navLink">
              {item}
            </Link>
          ))}
        </nav>

        {/* Right: reserved space on desktop, menu button on mobile */}
        <div className="siteHeaderRight">
          <button
            className="siteMenuBtn"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <span className="siteMenuText">Menu</span>
            <span className="siteMenuIcon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`mobileNavPanel ${open ? "isOpen" : ""}`}>
        <nav className="mobileNav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="mobileNavLink"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
