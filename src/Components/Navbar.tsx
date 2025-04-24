import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Styles/NavBar.css";

const NavbarComponent: React.FC = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname + location.hash);
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActivePath(location.pathname + location.hash);
    setExpanded(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getIsActive = (to: string): boolean => activePath === to;

  const navItems = [
    { to: "/#home", label: "Home" },
    { to: "/#products", label: "Products" },
    { to: "/#about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/forms", label: "Forms" },
    { to: "/contact", label: "Contact" },
    { to: "/event-calendar", label: "Calendars" },
  ];

  // Check if current page is Services or Forms page
  const isLightThemePage = ["/services", "/forms","/contact","/event-calendar"].includes(location.pathname);

  return (
    <>
      <Navbar
        bg={scrolled || isLightThemePage ? "white" : "transparent"}
        variant={scrolled || isLightThemePage ? "light" : "dark"}
        expand="lg"
        fixed="top"
        className={`py-2 px-4 transition-all ${scrolled || isLightThemePage ? "navbar-scrolled" : ""}`}
        expanded={expanded}
      >
        <Container >
          <div className="d-flex align-items-center justify-content-between w-100">
            <Navbar.Brand as={HashLink} to="/#home" className="fs-6 navbar-brand">
              <span className="brand-text mb-4">VTSTechCorp</span>
            </Navbar.Brand>
            
            <div className="d-flex align-items-center" style={{color: "orange"}}>
              <SearchBar />
              <Navbar.Toggle
                aria-controls="navbar-nav"
                onClick={() => setExpanded(!expanded)}
                className="navbar-toggler ms-2"
              />
            </div>
          </div>
          
          <Navbar.Collapse id="navbar-nav" className="justify-content-center align-items-center text-center">
            <Nav className="ms-auto">
              {navItems.map(({ to, label }) => (
                <Nav.Link
                  as={HashLink}
                  smooth
                  to={to}
                  key={to}
                  className={`nav-link ${getIsActive(to) ? "active" : ""}`}
                  onClick={() => {
                    setExpanded(false);
                    if (!to.includes("#")) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;