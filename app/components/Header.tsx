"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="siteHeader">
      <div className="siteHeaderInner">
        <Link href="/" className="siteLogo" aria-label="Natwic home">
          Natwic
        </Link>

        <button className="siteMenuBtn" type="button" aria-label="Open menu">
          <span className="siteMenuIcon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="siteMenuText">MENU</span>
        </button>
      </div>
    </header>
  )
}
