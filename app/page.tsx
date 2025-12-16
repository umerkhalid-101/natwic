import Link from "next/link"

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Natwic is alive</h1>

      <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </main>
  )
}
