import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <nav className="navbar navbar-expand-lg" data-bs-theme="light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Films
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/series">
                  Séries
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">
                  Favoris
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
