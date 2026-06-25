"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className="navbar"
      style={{
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.07)" : "none",
      }}
    >
      <div className="container" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
        <a href="#" className="nav-logo">TOUSEEF</a>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: "flex" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>

        <a
          href="https://www.linkedin.com/in/touseef-ali-45788324b"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ padding: "10px 22px", fontSize: "14px" }}
        >
          ↓ Connect on LinkedIn
        </a>
      </div>
    </nav>
  );
}
