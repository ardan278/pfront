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
// Corrected & cleaned up SearchBar.tsx

import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaTimes, FaWpforms, FaMousePointer } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Styles/SearchBar.css';

interface FormEntry {
  title: string;
  path: string;
}

type PageEntry = {
  title: string;
  path: string;
  keywords: string[];
  buttons: string[];
  forms: (string | FormEntry)[];
};

const sitePages: PageEntry[] = [
  {
    title: 'Home',
    path: '/#home',
    keywords: ['home', 'main', 'landing'],
    buttons: ['Services', 'Forms'],
    forms: [],
  },
  {
    title: 'Products',
    path: '/#products',
    keywords: ['products', 'items', 'catalog'],
    buttons: ['Learn More', 'View Details'],
    forms: [],
  },
  {
    title: 'About Us',
    path: '/#about',
    keywords: ['about', 'company', 'info'],
    buttons: ['Contact Us'],
    forms: [],
  },
  {
    title: 'Services',
    path: '/services',
    keywords: ['services', 'offerings', 'solutions'],
    buttons: ['Request Service', 'Get Quote'],
    forms: [
      { title: 'Spare Parts', path: '/sparepartform' },
      { title: 'New Sales', path: '/newsales' },
      { title: 'Service', path: '/service' },
      { title: 'Modernization', path: '/modernization' },
      { title: 'Cab Interior', path: '/contact' },
    ],
  },
  {
    title: 'Forms',
    path: '/forms',
    keywords: ['forms', 'documents', 'applications'],
    buttons: ['Submit', 'Reset'],
    forms: [
      { title: 'Registration Form', path: '/registrationform' },
      { title: 'Installation Form', path: '/installationform' },
      { title: 'Service Form', path: '/serviceform' },
      { title: 'Part Request Form', path: '/partrequestform' },
    ],
  },
  {
    title: 'Contact',
    path: '/contact',
    keywords: ['contact', 'reach', 'email', 'phone'],
    buttons: ['Send Message', 'Clear Form'],
    forms: ['Contact Form'],
  },
  {
    title: 'Calendar',
    path: '/event-calendar',
    keywords: ['calendar', 'events', 'schedule'],
    buttons: ['Add Event', 'View Event'],
    forms: ['Event Registration'],
  },
];

interface SearchResult {
  title: string;
  path: string;
  type: 'page' | 'button' | 'form';
  subtext?: string;
  relevance: number;
}

const SearchBar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (expanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [expanded]);

  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const searchTerms = searchQuery.toLowerCase().split(' ');
    let allResults: SearchResult[] = [];

    sitePages.forEach((page) => {
      let pageRelevance = 0;

      searchTerms.forEach((term) => {
        if (page.title.toLowerCase().includes(term)) pageRelevance += 3;
        page.keywords.forEach((kw) => {
          if (kw.includes(term)) pageRelevance += 1;
        });
      });

      if (pageRelevance > 0) {
        allResults.push({
          title: page.title,
          path: page.path,
          type: 'page',
          relevance: pageRelevance,
        });
      }

      page.buttons.forEach((button) => {
        let buttonRelevance = 0;
        searchTerms.forEach((term) => {
          if (button.toLowerCase().includes(term)) buttonRelevance += 2;
        });

        if (buttonRelevance > 0) {
          allResults.push({
            title: button,
            path: page.path,
            type: 'button',
            subtext: `Button on ${page.title} page`,
            relevance: buttonRelevance,
          });
        }
      });

      page.forms.forEach((form) => {
        const formTitle = typeof form === 'string' ? form : form.title;
        const formPath = typeof form === 'string' ? page.path : form.path;

        let formRelevance = 0;
        searchTerms.forEach((term) => {
          if (formTitle.toLowerCase().includes(term)) formRelevance += 2;
          if (term === 'form') formRelevance += 1;
        });

        if (formRelevance > 0) {
          allResults.push({
            title: formTitle,
            path: formPath,
            type: 'form',
            subtext: `Form on ${page.title} page`,
            relevance: formRelevance,
          });
        }
      });
    });

    allResults.sort((a, b) => b.relevance - a.relevance);
    setResults(allResults);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    performSearch(value);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
  };

  const handleResultClick = (path: string) => {
    navigate(path);
    setExpanded(false);
    clearSearch();
  };

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
    if (!expanded) clearSearch();
  };

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'page':
        return <FaSearch className="result-icon" />;
      case 'button':
        return <FaMousePointer className="result-icon button-icon" />;
      case 'form':
        return <FaWpforms className="result-icon form-icon" />;
      default:
        return <FaSearch className="result-icon" />;
    }
  };

  return (
    <div className={`search-container ${expanded ? 'expanded' : ''}`} ref={searchRef}>
      <button className="search-toggle" onClick={toggleExpand} aria-label={expanded ? 'Close search' : 'Open search'}>
        <FaSearch />
      </button>

      {expanded && (
        <div className="search-expanded">
          <div className="search-input-wrapper">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleSearch}
              className="search-input"
              placeholder="Search pages, buttons, forms..."
            />
            {query && (
              <button className="clear-button" onClick={clearSearch} aria-label="Clear search">
                <FaTimes />
              </button>
            )}
          </div>

          {results.length > 0 && (
            <div className="search-results">
              {results.map((result, index) => (
                <div
                  key={index}
                  className={`search-result-item search-result-${result.type}`}
                  onClick={() => handleResultClick(result.path)}
                >
                  {getResultIcon(result.type)}
                  <div className="result-content">
                    <span className="result-title">{result.title}</span>
                    {result.subtext && <span className="result-subtext">{result.subtext}</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
