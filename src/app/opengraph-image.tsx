import { ImageResponse } from "next/og";

export const alt = "Karan Upadhyay — Full-Stack & Applied AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#09090b",
          color: "#fafafa",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 96 }}>Karan Upadhyay</div>
        <div style={{ fontSize: 40, color: "#a1a1aa", marginTop: 24 }}>
          Full-Stack &amp; Applied AI Engineer
        </div>
        <div style={{ fontSize: 28, color: "#71717a", marginTop: 16 }}>
          React Native · Node.js · Python · LLM Agents
        </div>
      </div>
    ),
    size,
  );
}
