import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Styles/NavBar.css";
import { HashLink } from 'react-router-hash-link';


const NavbarComponent: React.FC = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/forms", label: "Forms" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
    { to: "/event-calendar", label: "Calendars" },
  ];

  return (
    <Navbar expand="lg" variant="dark" bg="dark" fixed="top" className="px-3 shadow-sm">
      <Container fluid>
        {/* Brand Logo */}
        <Navbar.Brand as={NavLink} to="/" className="fs-3 fw-semibold text-light">
          VTSTechCorp
        </Navbar.Brand>

        {/* Toggle for Mobile View */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {navItems.map(({ to, label }) => (
              <Nav.Link
                as={HashLink}
                to={to}
                key={to}
                end // Ensures exact match for root route "/"
                className="fs-6 px-3 py-2 text-light nav-link-hover"
                >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;