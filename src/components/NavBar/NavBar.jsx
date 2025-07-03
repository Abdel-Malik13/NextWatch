import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <nav className="navbar navbar-expand-lg" data-bs-theme="light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Films
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/series"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Séries
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Favoris
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
