import { Link } from 'react-router-dom';

const CONTACT = {
  address: '12, Athwa Lines, Near Citylight, Surat - 395007',
  phone: '+91-98765-43210',
  email: 'care@citycarehospital.com',
};

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerEmergency">
          <div className="footerEmergencyText">Emergency? Visit Emergency OPD immediately or call us now.</div>
          <a className="btn btnPrimary" href="tel:+919876543210">
            Call Emergency
          </a>
        </div>

        <div className="footerGrid">
          <div>
            <div className="footerTitle">City Care Hospital</div>
            <div className="footerSmall">
              Surat-based care with 24/7 Emergency OPD and specialist consultations. Clear explanations,
              respectful communication, and timely next steps for families.
            </div>
            <div className="copyright">
              © {new Date().getFullYear()} City Care Hospital. All rights reserved.
            </div>
          </div>

          <div>
            <div className="footerTitle">Quick Links</div>
            <div className="footerLinks">
              <Link className="footerLink" to="/services">
                Services
              </Link>
              <Link className="footerLink" to="/appointment">
                Book Appointment
              </Link>
              <Link className="footerLink" to="/about">
                About
              </Link>
              <Link className="footerLink" to="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <div className="footerTitle">Contact</div>
            <div className="footerSmall">
              <div>
                <strong>Address:</strong> {CONTACT.address}
              </div>
              <div style={{ marginTop: 10 }}>
                <strong>Phone:</strong> {CONTACT.phone}
              </div>
              <div style={{ marginTop: 10 }}>
                <strong>Email:</strong> {CONTACT.email}
              </div>
              <div style={{ marginTop: 14 }}>
                <Link to="/contact" className="btn btnGhost">
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

