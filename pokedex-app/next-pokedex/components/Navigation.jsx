import Link from "next/link"

function Navigation() {
  return (
    <nav
      className="navigation container"
    >
      <div className="logo">
        <Link
          href="/"
        >
          <a className="navbar-item" href="#">
            <img alt="Pokedex App" src="/images/pokedex-logo.png" width="120" />
          </a>
        </Link>
      </div>

      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <div className="navbar-item">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">About</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
