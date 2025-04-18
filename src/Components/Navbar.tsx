import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Styles/NavBar.css";

const NavbarComponent: React.FC = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname + location.hash);

  useEffect(() => {
    setActivePath(location.pathname + location.hash);
  }, [location]);

  const getIsActive = (to: string): boolean => {
    return activePath === to;
  };

  const navItems = [
    { to: "/#home", label: "Home" },
    { to: "/#about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/forms", label: "Forms" },
    { to: "/contact", label: "Contact" },
    { to: "/event-calendar", label: "Calendars" },
  ];

  return (
    <>
      <Navbar expand="lg" variant="dark" bg="dark" fixed="top" className="px-3 shadow-sm">
        <Container fluid>
          <Navbar.Brand as={HashLink} to="/" className="fs-3 fw-semibold text-light">
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
                  key={`${to}-${label}`}
                  className={`fs-6 px-3 py-2 nav-link-hover text-light ${getIsActive(to) ? "active" : ""}`}
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Background slider */}
      <div className="nav-slider h-screen w-full relative flex flex-col items-center justify-center">
        {/* <div className="nav-slide bg-slide-1"></div>
        <div className="nav-slide bg-slide-2"></div>
        <div className="nav-slide bg-slide-3"></div>
        <div className="nav-slide bg-slide-1"></div> */}
      </div>
    </>
  );
};

export default NavbarComponent;
