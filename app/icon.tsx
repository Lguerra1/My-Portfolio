import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d1117",
          color: "#7fb8ff",
          fontSize: 34,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        LG
      </div>
    ),
    { ...size },
  );
}
