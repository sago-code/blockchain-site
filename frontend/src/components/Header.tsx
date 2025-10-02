import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export default function Header() {
  const { isLogged, user, logout } = useAuth();

  return (
    <header className="border-bottom">
      <nav className="navbar navbar-expand-lg container">
        <Link to="/" className="navbar-brand fw-bold">BlockChainPro</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="mainNav" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink to="/" end className="nav-link">Inicio</NavLink></li>
            <li className="nav-item"><NavLink to="/blockchain" className="nav-link">Blockchain</NavLink></li>
            <li className="nav-item"><NavLink to="/form-demo" className="nav-link">Formularios</NavLink></li>
          </ul>
          <div className="d-flex gap-2">
            {isLogged ? (
              <>
                <span className="navbar-text">Hola, <strong>{user?.name}</strong></span>
                <button className="btn btn-outline-danger btn-sm" onClick={logout}>Salir</button>
              </>
            ) : (
              <NavLink to="/login" className="btn btn-primary btn-sm">Iniciar sesión</NavLink>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
