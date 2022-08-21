import Link from 'next/link'

function Navigation() {
  return (
    <nav className="navigation container">
      <div className="logo">
        <Link href="/">
          <a className="" href="#">
            <img alt="Pokedex App" src="/images/pokedex-logo.png" width="120" />
          </a>
        </Link>
      </div>

      <div className="nav-items">
        <Link href="/">
          <a className="button is-ghost">Home</a>
        </Link>
        <Link href="/about">
          <a className="button is-ghost">About</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
