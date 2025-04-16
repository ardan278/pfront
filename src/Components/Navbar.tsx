import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "./Styles/NavBar.css";

const NavbarComponent: React.FC = () => {
  const navItems = [
    { to: "/#home", label: "Home" },
    { to: "/#about", label: "About" },
    { to: "/forms", label: "Forms" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
    { to: "/event-calendar", label: "Calendars" },
  ];

  return (
    <Navbar expand="lg" variant="dark" bg="dark" fixed="top" className="px-3 shadow-sm">
      <Container fluid>
        <Navbar.Brand as={HashLink} to="/#home" className="fs-3 fw-semibold text-light">
          VTSTechCorp
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {navItems.map(({ to, label }) => (
              <Nav.Link
                as={HashLink}
                smooth
                to={to}
                key={to}
                className="fs-6 px-3 py-2 nav-link-hover text-light"
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
