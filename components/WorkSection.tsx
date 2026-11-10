import Image from "next/image";

const works = [
  {
    img: "/work-1.jpg",
    alt: "Sai Ketan Rao",
    category: "Celebrity Identity",
    year: "2025",
    name: "Sai Ketan Rao",
    desc: "Full personal brand architecture for a rising Indian television name: identity, positioning, and digital presence.",
    paddingBottom: "125%",
  },
  {
    img: "/work-2.jpg",
    alt: "Bombay Dreams",
    category: "Luxury Brand",
    year: "2024",
    name: "Bombay Dreams",
    desc: "Brand identity and spatial narrative for a boutique celeb management agency rooted in the spirit of Bombay.",
    paddingBottom: "110%",
  },
  {
    img: "/work-3.jpg",
    alt: "Amusing Interior",
    category: "Luxury Interiors",
    year: "2025",
    name: "Amusing Interior",
    desc: "Category positioning and editorial identity for one of Delhi's most distinctive luxury interiors groups.",
    paddingBottom: "110%",
  },
  {
    img: "/work-4.jpg",
    alt: "Manraj Singh Sarma",
    category: "Public Figure",
    year: "2025",
    name: "Manraj Singh Sarma",
    desc: "Reputation architecture and strategic presence-building for a public figure stepping into the national conversation.",
    paddingBottom: "125%",
  },
];

export default function WorkSection() {
  return (
    <section id="work" style={{ borderTop: "1px solid #EBC2BF", background: "#FAF6EE", padding: "120px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 72,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#5F101C", marginBottom: 16, fontWeight: 500 }}>
              Selected Work
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
              A few names we can share.
            </h2>
          </div>
          <p style={{ fontSize: 13, color: "#9a7578", lineHeight: 1.7, maxWidth: 280, textAlign: "right" }}>
            Every client comes by introduction.
            <br />
            We do not pitch. We do not advertise.
          </p>
        </div>

        {/* Grid */}
        <div
          className="work-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 1,
            background: "#EBC2BF",
            border: "1px solid #EBC2BF",
          }}
        >
          {works.map((w) => (
            <div key={w.name} className="work-card" style={{ background: "#FAF6EE", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "relative", paddingBottom: w.paddingBottom, overflow: "hidden" }}>
                <Image
                  src={w.img}
                  alt={w.alt}
                  fill
                  loading="lazy"
                  className="work-img"
                  style={{ objectFit: "cover", objectPosition: "center 15%", transition: "transform 0.8s ease" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, transparent 40%, rgba(250,246,238,0.97) 100%)",
                  }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 32 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <p style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#5F101C", fontWeight: 500 }}>
                      {w.category}
                    </p>
                    <p style={{ fontSize: 11, color: "#9a7578", letterSpacing: "0.06em" }}>{w.year}</p>
                  </div>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "clamp(20px, 2.2vw, 28px)",
                      fontWeight: 400,
                      color: "#2c1215",
                      marginBottom: 10,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {w.name}
                  </h3>
                  <p style={{ fontSize: 13, lineHeight: 1.65, color: "#9a7578", maxWidth: 360 }}>{w.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
