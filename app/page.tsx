import Link from "next/link"

export default function Home() {
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
            <h1 className="h1">Natwic will be live soon</h1>
            <p className="p">
              Contact us at <a href="mailto:hello@natwic.com">hello@natwic.com</a>
            </p>

            <div className="card">
              <span className="pill">Branding</span>
              <span className="pill">UI UX</span>
              <span className="pill">Web</span>
              <span className="pill">Illustration</span>
            </div>

            <div className="actions">
              <div className="buttonRow">
                <Link className="primary" href="/contact">
                  Get in touch
                </Link>
                <a className="secondary" href="mailto:hello@natwic.com">
                  Email us
                </a>
              </div>
            </div>

          </div>
        </section>
      </div>
    </main>
  )
}
