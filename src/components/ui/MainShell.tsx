const MAIN_ORBS = [
  { width: 520, height: 520, top: "-12%", left: "-14%", background: "rgba(46,158,107,0.07)" },
  { width: 460, height: 460, top: "6%", right: "-12%", background: "rgba(21,99,156,0.08)" },
  { width: 400, height: 400, top: "34%", left: "-10%", background: "rgba(21,99,156,0.06)" },
  { width: 360, height: 360, top: "52%", right: "-8%", background: "rgba(46,158,107,0.05)" },
  { width: 440, height: 440, top: "72%", left: "18%", background: "rgba(21,99,156,0.05)" },
  { width: 320, height: 320, top: "88%", right: "12%", background: "rgba(46,158,107,0.04)" },
  { width: 400, height: 400, top: "92%", left: "-10%", background: "rgba(21,99,156,0.05)" },
  { width: 340, height: 340, top: "96%", right: "8%", background: "rgba(46,158,107,0.04)" },
] as const;

export function MainShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-shell relative">
      <div className="main-shell-backdrop" aria-hidden="true">
        <div className="main-shell-gradient" />
        <div className="main-shell-grid" />
        {MAIN_ORBS.map((orb, index) => (
          <span key={index} className="orb main-shell-orb" style={orb} />
        ))}
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
