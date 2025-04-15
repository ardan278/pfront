import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavBar.css";

const NavbarComponent: React.FC = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" fixed="top" className="px-3 shadow-sm">
      <Container fluid>
        {/* Brand Logo */}
        <Navbar.Brand href="/" className="fs-3 fw-semibold text-light">
          VTSTechCorp
        </Navbar.Brand>

        {/* Toggle for Mobile View */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {[
              { to: "/home", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
              { to: "/forms", label: "Forms" },
              { to: "/services", label: "Services" },
              { to: "/event-calendar", label: "Calendars" },
            ].map(({ to, label }) => (
              <Nav.Link
                as={NavLink}
                to={to}
                end
                key={to}
                className="fs-5 px-3 py-2 text-light nav-link-hover"
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
