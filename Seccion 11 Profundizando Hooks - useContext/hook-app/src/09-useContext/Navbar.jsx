import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>

      {/* - Podemos navegar usando enlaces, pero estos haran un full refresh de la pagina lo cual no es recomendable */}
      {/* <a href="/">Home</a>
      <a href="about">About</a>
      <a href="login">Login</a> */}

      {/* Para evitar el full refresh, React router dom proporciona el elemento "Link" */}

      {/* <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="login">Login</Link> */}

      <nav className="navbar navbar-expand">
        <div className="container-fluid">
            <ul className="navbar-nav">
              <NavLink
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>

              <NavLink
                className="nav-link"
                to="/login"
              >
                Login
              </NavLink>

            </ul>
        </div>
      </nav>

    </>
  )
}