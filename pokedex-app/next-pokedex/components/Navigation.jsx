function Navigation() {
  return (
    <nav
      className="navigation navbar container"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img alt="Pokedex App" src="/images/pokedex-logo.png" width="120" />
        </a>
        <a
          role="button"
          class="navbar-burger is-active"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
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
