type OrbConfig = {
  width: number;
  height: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  color: string;
};

const DESKTOP_ORBS: OrbConfig[] = [
  { width: 520, height: 520, top: "-12%", left: "-14%", color: "rgba(46,158,107,0.14)" },
  { width: 460, height: 460, top: "6%", right: "-12%", color: "rgba(21,99,156,0.16)" },
  { width: 400, height: 400, top: "34%", left: "-10%", color: "rgba(21,99,156,0.12)" },
  { width: 360, height: 360, top: "52%", right: "-8%", color: "rgba(46,158,107,0.10)" },
  { width: 440, height: 440, top: "72%", left: "18%", color: "rgba(21,99,156,0.10)" },
  { width: 320, height: 320, top: "88%", right: "12%", color: "rgba(46,158,107,0.08)" },
  { width: 400, height: 400, top: "92%", left: "-10%", color: "rgba(21,99,156,0.10)" },
  { width: 340, height: 340, top: "96%", right: "8%", color: "rgba(46,158,107,0.08)" },
];

function orbStyle(orb: OrbConfig): React.CSSProperties {
  return {
    width: orb.width,
    height: orb.height,
    top: orb.top,
    left: orb.left,
    right: orb.right,
    bottom: orb.bottom,
    ["--orb-color" as string]: orb.color,
  };
}

export function MainShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-shell relative">
      <div className="main-shell-backdrop" aria-hidden="true">
        <div className="main-shell-gradient" />
        <div className="main-shell-grid" />
        {DESKTOP_ORBS.map((orb, index) => (
          <span
            key={index}
            className="main-shell-orb main-shell-orb--blur hidden lg:block"
            style={orbStyle(orb)}
          />
        ))}
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
