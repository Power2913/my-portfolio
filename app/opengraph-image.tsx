import { ImageResponse } from "next/og";

export const alt = "Shakti Raghav — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social preview card (WhatsApp, LinkedIn, X) generated at build time.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0c10",
          color: "#e8ecf1",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#c8f05a",
              color: "#0a0c10",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            SR
          </div>
          <div style={{ fontSize: 30, fontWeight: 600 }}>Shakti Raghav</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 26, color: "#c8f05a", letterSpacing: 2 }}>
            FULL-STACK DEVELOPER — SYSTEM DESIGN · SAAS · DATA
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>
            <span>Design the system.</span>
            <span>Build the product.</span>
            <span style={{ color: "#c8f05a" }}>Ship it at scale.</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 24, color: "#aeb8c6" }}>
          <span>4+ years</span>
          <span>Lead developer · Cosmos Connect</span>
          <span>35M+ records search</span>
        </div>
      </div>
    ),
    size
  );
}
