"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        background: "rgba(255,255,255,0.86)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          height: 60,
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
        }}
      >
        {/* LEFT: Logo */}
        <Link
          href="/"
          aria-label="Natwic home"
          style={{
            display: "inline-flex",
            alignItems: "center",
            lineHeight: 0,
          }}
        >
          <img
            src="/logo.svg"
            alt="Natwic"
            style={{
              height: 36,
              width: "auto",
              display: "block",
            }}
          />
        </Link>

        {/* CENTER: Navigation */}
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {["Services", "Work", "About", "Contact"].map((item) => (
            <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="navLink"
            >
                {item}
            </Link>
            ))}

        </nav>

        {/* RIGHT: empty column for perfect centering */}
        <div />
      </div>
    </header>
  )
}
