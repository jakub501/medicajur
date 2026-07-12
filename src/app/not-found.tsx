import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="sk">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f8fb",
          color: "#14283a",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
          padding: "clamp(1.25rem, 4vw, 2rem)",
        }}
      >
        <div style={{ maxWidth: "24rem", width: "100%" }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#15639c",
            }}
          >
            MEDICA JUR
          </p>
          <h1
            style={{
              fontSize: "clamp(2.75rem, 12vw, 3.5rem)",
              margin: "12px 0 8px",
              lineHeight: 1,
            }}
          >
            404
          </h1>
          <p style={{ color: "#5a6e7e", marginBottom: 24, lineHeight: 1.5 }}>
            Stránka sa nenašla · Page not found
          </p>
          <Link
            href="/sk"
            style={{
              display: "inline-block",
              background: "#15639c",
              color: "#fff",
              fontWeight: 700,
              padding: "12px 22px",
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            Späť na úvod / Back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
