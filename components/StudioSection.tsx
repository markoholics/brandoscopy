const stats = [
  { value: "8", label: "Years in practice" },
  { value: "60+", label: "Names shaped" },
  { value: "1", label: "Studio, Mumbai" },
];

export default function StudioSection() {
  return (
    <section id="studio" style={{ borderTop: "1px solid #EBC2BF", background: "#FAF6EE", padding: "120px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#5F101C", marginBottom: 64, fontWeight: 500 }}>
          The Studio
        </p>

        <div
          className="studio-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, marginBottom: 96 }}
        >
          <div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                color: "#2c1215",
                lineHeight: 1.05,
                marginBottom: 40,
              }}
            >
              An independent brand atelier in Mumbai.
            </h2>
            <div style={{ width: 40, height: 2, background: "#5F101C" }} />
          </div>

          <div>
            {[
              "BrandoScopy is an independent brand atelier in Mumbai, founded by Mohammad H. Rahman, who believes Indian personal brands deserve the same craft as the houses they often sit beside.",
              "Mohammad H. Rahman spent years watching Indian talent and luxury brands produce work that deserved far more than the market gave them back. Not because the talent wasn't there. Because the craft around it was missing: the long-horizon thinking, the editorial restraint, the understanding that a name is architecture, not decoration.",
              "He founded BrandoScopy to close that gap. The studio sits at the intersection of two worlds he knows intimately: the international standard he absorbed living and studying in the UK, and the Bombay creative scene he came back to build inside. That duality is not incidental. It is the lens through which every commission is shaped.",
              "The work is never about visibility for its own sake. It is about building something that holds: a reputation that compounds, an identity that the room feels before it is explained.",
              "The studio remains intentionally small: a tight team operating from a single boutique glass-walled office, taking no more than a handful of commissions a year. Our work has shaped Indian television names, entrepreneurs, Indian luxury hospitality and interiors groups and a few names you will never read here.",
              "We do not pitch. We do not advertise. Every client comes by introduction.",
            ].map((para, i) => (
              <p key={i} style={{ fontSize: 16, lineHeight: 1.88, color: "#9a7578", marginBottom: 28 }}>
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "#EBC2BF",
            border: "1px solid #EBC2BF",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{ background: "#FAF6EE", padding: "52px 40px", textAlign: "center", transition: "background 0.3s" }}
            >
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(52px, 6vw, 80px)",
                  fontWeight: 300,
                  color: "#5F101C",
                  lineHeight: 1,
                  marginBottom: 12,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.value}
              </p>
              <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9a7578" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
