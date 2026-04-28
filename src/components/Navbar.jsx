import { NavLink, useLocation } from 'react-router-dom';

const HOSPITAL = {
  name: 'City Care Hospital',
  tagline: 'Trusted care in Surat',
};

export function Navbar() {
  const location = useLocation();
  const showUrgency = location.pathname !== '/appointment';

  return (
    <>
      {showUrgency ? (
        <div className="urgencyBar">
          <div className="container urgencyInner">
            <div className="urgencyText">🟢 Emergency OPD Open Now — Walk In Anytime</div>
            <div className="urgencyHint">24/7 Emergency • Ambulance on call</div>
          </div>
        </div>
      ) : null}

      <header className="navWrap">
        <div className="container navInner">
          <NavLink to="/" className="brand" aria-label="City Care Hospital Home">
            <div className="brandMark" aria-hidden="true" />
            <div className="brandText">
              <div className="brandName">{HOSPITAL.name}</div>
              <div className="brandTag">{HOSPITAL.tagline}</div>
            </div>
          </NavLink>

          <nav className="navLinks" aria-label="Primary navigation">
            <NavLink
              to="/"
              className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}
            >
              Contact
            </NavLink>
            <NavLink
              to="/appointment"
              className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}
            >
              Appointment
            </NavLink>
          </nav>

          <div className="navRight">
            <NavLink to="/appointment" className="btn btnPrimary mobileCta">
              Book Appointment
            </NavLink>
            <NavLink to="/appointment" className="btn btnPrimary">
              Book Appointment
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}

