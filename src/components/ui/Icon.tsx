import {
  Droplet,
  Syringe,
  ShieldCheck,
  ClipboardCheck,
  Clock,
  Activity,
  Languages,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  droplet: Droplet,
  syringe: Syringe,
  "shield-check": ShieldCheck,
  "clipboard-check": ClipboardCheck,
  clock: Clock,
  activity: Activity,
  languages: Languages,
  stethoscope: Stethoscope,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.85,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = MAP[name] ?? Stethoscope;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
