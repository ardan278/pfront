import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
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
    { to: "/#products", label: "Products" },
    { to: "/#about", label: "About" },
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
              {navItems.map(({ to, label }, index) => {
                // Inject the dropdown right after the "About" item
                if (label === "About") {
                  return (
                    <React.Fragment key={label}>
                      <Nav.Link
                        as={HashLink}
                        smooth
                        to={to}
                        className={`fs-6 px-3 py-2 nav-link-hover text-light ${getIsActive(to) ? "active" : ""}`}
                      >
                        {label}
                      </Nav.Link>
                      <NavDropdown title="More" id="nav-dropdown" className="fs-6 text-light px-3">
                        <NavDropdown.Item as={HashLink} smooth to="/services">
                          Services
                        </NavDropdown.Item>
                        <NavDropdown.Item as={HashLink} smooth to="/forms">
                          Forms
                        </NavDropdown.Item>
                      </NavDropdown>
                    </React.Fragment>
                  );
                }

                return (
                  <Nav.Link
                    key={label}
                    as={HashLink}
                    smooth
                    to={to}
                    className={`fs-6 px-3 py-2 nav-link-hover text-light ${getIsActive(to) ? "active" : ""}`}
                  >
                    {label}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Background slider */}
      <div className="nav-slider h-screen w-full relative flex flex-col items-center justify-center">
        {/* Background slides go here */}
      </div>
    </>
  );
};

export default NavbarComponent;
