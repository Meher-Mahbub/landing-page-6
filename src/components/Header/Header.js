import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/work">latest work</Link>
        <Link to="/blog">blog</Link>
        <Link to="/schedule">schedule call</Link>
      </nav>

      <div className="header-quote">
        <div className="quote-divider"></div>
        <p>
          Ham followed now ecstatic use speaking exercise may
          <br />
          repeated. Himself he evident oh greatly my on inhabit general <br />
          concern.
        </p>
      </div>
    </header>
  );
}
