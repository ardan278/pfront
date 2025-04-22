import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import SidebarComponent from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="d-flex flex-column min-vh-100 bg-[#ADB2D4]">
      <Router>
        <SidebarComponent />
          <App />
      </Router>
      <Footer />
    </div>
  </React.StrictMode>
);
