import Link from "next/link"

export default function About() {
  return (
    <main className="page">
      <div className="blobs" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="shell">
       <header className="nav">
        <div />

        <nav className="navCenter">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </nav>

        <div />
        </header>

        <section className="contentCenter">
          <div>
            <h1 className="h1">About Natwic</h1>
            <p className="p">
              We are an independent creative studio crafting digital experiences with clarity, beauty, and purpose.
              Brand, UI UX, web development, illustration, and social creative.
            </p>

            <div className="buttonRow">
              <Link className="primary" href="/contact">
                Start a project
              </Link>
              <Link className="secondary" href="/">
                Back home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
