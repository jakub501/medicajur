import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE } from "@/lib/site";

export const alt = `${SITE.brand}, ${SITE.doctor}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoBuffer = await readFile(
    join(process.cwd(), "public/images/logo.png"),
  );
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 48,
          padding: 72,
          background: "linear-gradient(135deg, #0d4674 0%, #15639c 55%, #1b6aa6 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoBase64}
          alt=""
          width={200}
          height={200}
          style={{ objectFit: "contain", borderRadius: 12 }}
        />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 30, opacity: 0.9, lineHeight: 1.35 }}>
            Moderná všeobecná ambulancia vo Svätom Jure
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 20, opacity: 0.75 }}>
            {SITE.address.street}, {SITE.address.city} · {SITE.phone}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
