import { ImageResponse } from "next/og";
import { profile } from "@/content";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "88px",
          background: "#0d1117",
          color: "#e4e8ee",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 600,
            color: "#7fb8ff",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          {profile.name} · {profile.title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.15,
            marginTop: 28,
            maxWidth: 980,
          }}
        >
          {profile.headline} {profile.headlineAccent}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#8d98a8",
            marginTop: 32,
          }}
        >
          {profile.location} · {profile.chips.slice(0, 5).join(" · ")}
        </div>
      </div>
    ),
    { ...size },
  );
}
