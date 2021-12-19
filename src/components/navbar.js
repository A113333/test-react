import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="links">
          <h1 className="h1Logga">Bli Fri</h1>
          {/* använder  linktaggen för att den inte ska skicka request till server*/}
          <Link to="/">Hem</Link>
          <Link to="/valueList">Värderingslista</Link>
          <Link to="/valuesorter">Värderingssorterare</Link>

          <Link to="/createValue">Skapa</Link>
        </div>
      </nav>
    </div>
  );
}
