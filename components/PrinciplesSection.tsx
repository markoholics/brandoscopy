const principles = [
  {
    num: "№ 01",
    title: "Discretion",
    body: "Half of our clients we will never name. The other half came because of those we never named.",
  },
  {
    num: "№ 02",
    title: "Editorial Eye",
    body: "Every touchpoint is treated as intentional: magazine-spread quality, designed to be remembered long after the moment passes.",
  },
  {
    num: "№ 03",
    title: "Long Horizon",
    body: "We build identities meant to outlast trends. Substance over seasonality. The work we deliver is chic and classic.",
  },
];

export default function PrinciplesSection() {
  return (
    <section style={{ borderTop: "1px solid #EBC2BF", background: "#FAF6EE", padding: "120px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Quote */}
        <div style={{ marginBottom: 96, maxWidth: 760 }}>
          <p
            className="font-display"
            style={{
              fontSize: "clamp(22px, 3vw, 38px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.5,
              color: "#2c1215",
              marginBottom: 28,
            }}
          >
            &ldquo;We architect reputations, for the people and houses whose names already carry weight.&rdquo;
          </p>
          <div style={{ width: 40, height: 2, background: "#5F101C" }} />
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 1,
            background: "#EBC2BF",
            border: "1px solid #EBC2BF",
          }}
        >
          {principles.map((p) => (
            <div key={p.num} style={{ background: "#FAF6EE", padding: "56px 48px", transition: "background 0.3s" }}>
              <p style={{ fontSize: 11, letterSpacing: "0.16em", color: "#5F101C", marginBottom: 28, fontWeight: 500 }}>
                {p.num}
              </p>
              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(24px, 2.5vw, 34px)",
                  fontWeight: 400,
                  color: "#2c1215",
                  marginBottom: 20,
                  letterSpacing: "-0.01em",
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#9a7578" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
