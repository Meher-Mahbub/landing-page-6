import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-title">mathelda.</div>
        <div className="brand-sub">ui designer</div>
      </div>
      <nav className="sidebar-subnav">
        <Link to="/process">my process</Link>
        <Link to="/clients">my clients</Link>
        <Link to="/pricing">pricing</Link>
      </nav>

      <div className="sidebar-divider" />

      <nav className="sidebar-socials">
        <Link to="/facebook">fb</Link>
        <Link to="/twitter">tw</Link>
        <Link to="/linkedin">in</Link>
      </nav>
    </aside>
  );
}
