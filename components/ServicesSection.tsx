const services = [
  {
    num: "01",
    title: "Celebrities",
    desc: "Personal brand architecture for Indian television names, film actors, and cultural figures whose reputation has outgrown their media presence.",
  },
  {
    num: "02",
    title: "Founders",
    desc: "Positioning and narrative strategy for entrepreneurs and business leaders who need to operate as both operator and public figure simultaneously.",
  },
  {
    num: "03",
    title: "Luxury Houses",
    desc: "Brand identity and editorial direction for hospitality groups, interiors studios, and lifestyle brands that sit at the top of their category.",
  },
  {
    num: "04",
    title: "Heritage Brands",
    desc: "Reinvention strategy and modern editorial identity for houses with legacy to preserve and new audiences to reach — without losing what made them.",
  },
  {
    num: "05",
    title: "Cultural Icons",
    desc: "Long-horizon reputation strategy for public figures whose influence spans industries, geographies, and the cultural conversation itself.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ borderTop: "1px solid #EBC2BF", background: "#F1E9E2", padding: "120px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div
          className="services-header"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            marginBottom: 80,
            alignItems: "end",
          }}
        >
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#5F101C", marginBottom: 16, fontWeight: 500 }}>
              Who we work with
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(32px, 4vw, 58px)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                color: "#2c1215",
                lineHeight: 1.02,
              }}
            >
              Five kinds of work.
              <br />
              One standard.
            </h2>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#9a7578" }}>
            The studio remains intentionally small — a tight team taking no more than a handful of commissions a year. This is not scalability. This is craft.
          </p>
        </div>

        {/* Service rows */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {services.map((s) => (
            <div
              key={s.num}
              className="service-row"
              style={{
                display: "grid",
                gridTemplateColumns: "72px 1fr 2fr",
                gap: 40,
                padding: "40px 32px",
                borderTop: "1px solid #EBC2BF",
                alignItems: "start",
                transition: "background 0.3s",
                marginLeft: -32,
                marginRight: -32,
              }}
            >
              <p style={{ fontSize: 11, color: "#5F101C", letterSpacing: "0.12em", fontWeight: 500, paddingTop: 4, paddingLeft: 32 }}>
                {s.num}
              </p>
              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(20px, 2vw, 26px)",
                  fontWeight: 400,
                  color: "#2c1215",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                }}
              >
                {s.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#9a7578", paddingRight: 32 }}>{s.desc}</p>
            </div>
          ))}
          <div style={{ borderTop: "1px solid #EBC2BF" }} />
        </div>
      </div>
    </section>
  );
}
