"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: scrolled ? "1px solid #EBC2BF" : "1px solid transparent",
        background: scrolled ? "rgba(250,246,238,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.35s ease",
      }}
    >
      <nav
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: 15,
            fontWeight: 500,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#2c1215",
            textDecoration: "none",
          }}
        >
          BrandoScopy
        </Link>

        <div className="hidden md:flex" style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {["Work", "Services", "Studio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#9a7578",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {item}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a
            href="#contact"
            className="hidden md:block"
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "10px 24px",
              background: "#5F101C",
              color: "#FAF6EE",
              textDecoration: "none",
              transition: "opacity 0.2s",
              whiteSpace: "nowrap",
              fontWeight: 500,
            }}
          >
            Begin a Project →
          </a>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
            aria-label="Toggle menu"
          >
            <span style={{ width: 22, height: 1.5, background: "#2c1215", display: "block" }} />
            <span style={{ width: 22, height: 1.5, background: "#2c1215", display: "block" }} />
            <span style={{ width: 22, height: 1.5, background: "#2c1215", display: "block" }} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          style={{
            background: "#FAF6EE",
            borderTop: "1px solid #EBC2BF",
            padding: "24px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {["Work", "Services", "Studio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 14,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#2c1215",
                textDecoration: "none",
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "12px 24px",
              background: "#5F101C",
              color: "#FAF6EE",
              textDecoration: "none",
              alignSelf: "flex-start",
              fontWeight: 500,
            }}
          >
            Begin a Project →
          </a>
        </div>
      )}
    </header>
  );
}
