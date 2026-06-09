import "./globals.css";

/**
 * The visible <html>/<body> shell lives in `app/[locale]/layout.tsx` so the
 * lang attribute can follow the active locale. This root layout is a required
 * pass-through.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
