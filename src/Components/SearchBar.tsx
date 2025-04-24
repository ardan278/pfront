import {
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaCodepen,
  FaDev,
  FaTwitterSquare,
  FaYoutube
} from 'react-icons/fa';
import './Styles/SearchBar.css'; // Update path as needed
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
    <div className="search-wrapper" ref={searchRef}>
      <div className="search-icon" onClick={toggleExpand}>
        <FaSearch />
      </div>
      
      {expanded && (
        <div className="search-panel">
          <div className="search-input-wrapper">
            <FaSearch className="search-input-icon" />
            <input 
              type="text"
              className="search-input"
              placeholder="Search..."
              value={query}
              onChange={handleSearch}
              ref={inputRef}
            />
            <FaTimes className="search-close-icon" onClick={toggleExpand} />
          </div>
          
          {results.length > 0 && (
            <div className="search-results">
              {results.map((result, index) => (
                <div 
                  key={`${result.type}-${result.title}-${index}`} 
                  className="search-result-item"
                  onClick={() => handleResultClick(result.path)}
                >
                  <div className="result-icon-container">
                    {getResultIcon(result.type)}
                  </div>
                  <div className="result-content">
                    <div className="result-title">{result.title}</div>
                    {result.subtext && <div className="result-subtext">{result.subtext}</div>}
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
