export default function Footer() {
  return (
    <footer style={{ background: "#5F101C", padding: "80px 32px 44px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 64, marginBottom: 64 }}
        >
          <div>
            <p style={{ fontSize: 15, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "#FAF6EE", marginBottom: 16 }}>
              BrandoScopy
            </p>
            <p style={{ fontSize: 13, color: "rgba(250,246,238,0.55)", lineHeight: 1.8, maxWidth: 300, marginBottom: 24 }}>
              An independent brand atelier in Mumbai. We sculpt personal and luxury brands for the people and houses whose names carry weight.
            </p>
            <p style={{ fontSize: 11, color: "rgba(250,246,238,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Mumbai · Est. 2017
            </p>
          </div>

          <div>
            <p style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(250,246,238,0.4)", marginBottom: 24 }}>
              Navigate
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {["Work", "Services", "Studio", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    fontSize: 14,
                    color: "rgba(250,246,238,0.55)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(250,246,238,0.4)", marginBottom: 24 }}>
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a
                href="mailto:office@brandoscopy.in"
                style={{ fontSize: 14, color: "rgba(250,246,238,0.55)", textDecoration: "none", transition: "color 0.2s" }}
              >
                office@brandoscopy.in
              </a>
              <p style={{ fontSize: 13, color: "rgba(250,246,238,0.4)" }}>Mumbai, India</p>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(235,194,191,0.2)",
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 11, color: "rgba(250,246,238,0.35)", letterSpacing: "0.06em" }}>
            © 2025 BrandoScopy. All rights reserved.
          </p>
          <p
            className="font-display"
            style={{ fontSize: 12, color: "rgba(250,246,238,0.35)", letterSpacing: "0.08em", fontStyle: "italic" }}
          >
            Every client comes by introduction.
          </p>
        </div>
      </div>
    </footer>
  );
}
