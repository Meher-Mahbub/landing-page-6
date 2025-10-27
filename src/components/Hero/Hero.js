import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left-bg" />
      <div className="hero-right-bg" />

      <div className="hero-content">
        <div className="hero-left">
          <img src="/assets/girl.png" alt="Mathelda" className="hero-img" />
          <div className="hero-slogan">
            eat — <br /> breath. <br /> design.
          </div>
        </div>

        <div className="hero-right">
          <h2>Meet Mathelda</h2>
          <p>
            Ham followed now ecstatic use speaking exercise may <br />
            repeated. Himself he evident oh greatly my on inhabit general <br />
            concern.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
}
