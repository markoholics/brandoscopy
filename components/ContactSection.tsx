"use client";

import { useState } from "react";
import { submitContact } from "@/app/actions";

export default function ContactSection() {
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const result = await submitContact(formData);
    setStatus(result);
    setLoading(false);
    if (result.success) (e.target as HTMLFormElement).reset();
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 0",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #EBC2BF",
    color: "#2c1215",
    fontSize: 15,
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.25s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 10,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#9a7578",
    marginBottom: 6,
  };

  return (
    <section id="contact" style={{ borderTop: "1px solid #EBC2BF", background: "#F1E9E2", padding: "120px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <div
          className="contact-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "start" }}
        >
          {/* Left column */}
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#5F101C", marginBottom: 24, fontWeight: 500 }}>
              Begin a Project
            </p>
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
              Every commission
              <br />
              starts with a conversation.
            </h2>

            <div
              style={{
                padding: "32px 36px",
                borderLeft: "2px solid #5F101C",
                background: "#FAF6EE",
                marginBottom: 48,
              }}
            >
              <p
                className="font-display"
                style={{ fontSize: 18, fontStyle: "italic", fontWeight: 300, color: "#2c1215", lineHeight: 1.7 }}
              >
                &ldquo;The studio takes no more than a handful of commissions a year. If you are here, someone already thought you belonged.&rdquo;
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
              {[
                "Every brief treated with full discretion",
                "Response within 48 hours",
                "Introduction-only engagements",
              ].map((text) => (
                <div key={text} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ color: "#5F101C", fontSize: 8, marginTop: 5 }}>✦</span>
                  <p style={{ fontSize: 14, color: "#9a7578", lineHeight: 1.6 }}>{text}</p>
                </div>
              ))}
            </div>

            <div>
              <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9a7578", marginBottom: 8 }}>
                Direct
              </p>
              <a
                href="mailto:office@brandoscopy.in"
                style={{
                  fontSize: 15,
                  color: "#2c1215",
                  textDecoration: "none",
                  borderBottom: "1px solid #EBC2BF",
                  paddingBottom: 2,
                  transition: "border-color 0.2s",
                }}
              >
                office@brandoscopy.in
              </a>
            </div>
          </div>

          {/* Right column — form */}
          <div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input required name="name" placeholder="Your name" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Company</label>
                  <input name="company" placeholder="Brand or project" style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Email *</label>
                <input type="email" required name="email" placeholder="your@email.com" style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>Nature of engagement</label>
                <select
                  name="engagement_type"
                  style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
                >
                  <option value="">Select one</option>
                  <option>Celebrity Identity</option>
                  <option>Founder Positioning</option>
                  <option>Luxury House</option>
                  <option>Heritage Brand</option>
                  <option>Cultural Icon</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Tell us about the project</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="A brief description of who you are and what you are hoping to build..."
                  style={{ ...inputStyle, resize: "none", lineHeight: 1.7 }}
                />
              </div>

              {status && (
                <p
                  style={{
                    fontSize: 13,
                    color: status.success ? "#5F101C" : "#c0392b",
                    letterSpacing: "0.04em",
                  }}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: "16px 40px",
                  background: "#5F101C",
                  color: "#FAF6EE",
                  border: "1px solid #5F101C",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontWeight: 600,
                  transition: "all 0.2s",
                  alignSelf: "flex-start",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? "Sending…" : "Send Introduction →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
