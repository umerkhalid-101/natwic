import Link from "next/link"

export default function Contact() {
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
            <h1 className="h1">Contact</h1>
            <p className="p">
              Email us at <a href="mailto:hello@natwic.com">hello@natwic.com</a>
            </p>

            <div className="buttonRow">
              <a className="primary" href="mailto:hello@natwic.com">
                Email hello@natwic.com
              </a>
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
