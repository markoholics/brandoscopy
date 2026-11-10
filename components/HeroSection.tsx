import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 640,
        overflow: "hidden",
        background: "#F1E9E2",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/hero-main.jpg"
          alt="BrandoScopy — Brand Atelier Mumbai"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 18%" }}
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(250,246,238,0.18) 0%, rgba(250,246,238,0.08) 35%, rgba(250,246,238,0.92) 100%)",
        }}
      />

      {/* Top labels */}
      <div
        style={{
          position: "absolute",
          top: 88,
          left: 0,
          right: 0,
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#5F101C",
            fontWeight: 500,
          }}
        >
          Brand Atelier · Mumbai
        </p>
        <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9a7578" }}>
          Est. 2017
        </p>
      </div>

      {/* Hero content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px 88px",
        }}
      >
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(52px, 7.5vw, 108px)",
            fontWeight: 300,
            lineHeight: 0.98,
            letterSpacing: "-0.02em",
            color: "#2c1215",
            maxWidth: 960,
            marginBottom: 40,
            fontStyle: "italic",
          }}
        >
          We sculpt personal
          <br />
          and luxury brands.
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "15px 40px",
              background: "#5F101C",
              color: "#FAF6EE",
              textDecoration: "none",
              fontWeight: 600,
              transition: "opacity 0.2s",
            }}
          >
            Begin a Project
          </a>
          <a
            href="#work"
            style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#2c1215",
              textDecoration: "none",
              borderBottom: "1px solid #9a7578",
              paddingBottom: 2,
              transition: "border-color 0.2s",
            }}
          >
            View Selected Work →
          </a>
        </div>
      </div>

      {/* Vertical line accent */}
      <div style={{ position: "absolute", right: 32, bottom: 88, zIndex: 2 }}>
        <div
          style={{
            width: 1,
            height: 56,
            background: "linear-gradient(to bottom, transparent, #5F101C)",
          }}
        />
      </div>
    </section>
  );
}
