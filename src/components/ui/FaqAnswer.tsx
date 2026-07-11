import type { ReactNode } from "react";
import { AlertTriangle, Check, CircleDot } from "lucide-react";
import { cn } from "@/lib/cn";

type Block =
  | { type: "paragraph"; body: string }
  | { type: "callout"; label: string; body: string }
  | { type: "bullet"; label: string | null; body: string }
  | { type: "checklist"; body: string }
  | { type: "note"; body: string }
  | { type: "alert"; body: string }
  | { type: "lead"; body: string };

type RenderBlock =
  | Block
  | { type: "checklist-group"; items: string[] };

const INSURER_CLASS: Record<string, string> = {
  VšZP: "text-insurer-vszp-text",
  Dôvera: "text-insurer-dovera-text",
  Union: "text-insurer-union-text",
};

function parseBlocks(text: string): Block[] {
  return text
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      if (block.startsWith("☐ ")) {
        return { type: "checklist" as const, body: block.slice(2) };
      }

      if (block.startsWith("• ")) {
        const content = block.slice(2);
        const colonIdx = content.indexOf(": ");
        if (colonIdx > 0 && colonIdx < 90) {
          return {
            type: "bullet" as const,
            label: content.slice(0, colonIdx),
            body: content.slice(colonIdx + 2),
          };
        }
        return { type: "bullet" as const, label: null, body: content };
      }

      const calloutMatch = block.match(/^([^:\n]{3,90}):\s([\s\S]+)$/);
      if (calloutMatch) {
        return {
          type: "callout" as const,
          label: calloutMatch[1],
          body: calloutMatch[2],
        };
      }

      if (/155.*112|112.*155/.test(block) || /^V prípade náhleho ohrozenia/i.test(block) || /^In case of life-threatening/i.test(block)) {
        return { type: "alert" as const, body: block };
      }

      if (/^\([^)]+\)\.?$/.test(block)) {
        return { type: "note" as const, body: block };
      }

      if (/^(Áno|Yes),/i.test(block)) {
        return { type: "lead" as const, body: block };
      }

      return { type: "paragraph" as const, body: block };
    });
}

function groupBlocks(blocks: Block[]): RenderBlock[] {
  const grouped: RenderBlock[] = [];
  let checklistItems: string[] = [];

  const flushChecklist = () => {
    if (checklistItems.length > 0) {
      grouped.push({ type: "checklist-group", items: checklistItems });
      checklistItems = [];
    }
  };

  for (const block of blocks) {
    if (block.type === "checklist") {
      checklistItems.push(block.body);
      continue;
    }

    flushChecklist();
    grouped.push(block);
  }

  flushChecklist();
  return grouped;
}

function enrichText(text: string): ReactNode[] {
  const parts = text.split(/(Moji lekári|VšZP|Dôvera|Union|ZDRAVIE\+|ZDRAVIE|\b155\b|\b112\b)/g);

  return parts.map((part, index) => {
    if (part === "Moji lekári") {
      return (
        <span key={index} className="font-semibold text-primary">
          {part}
        </span>
      );
    }
    if (part in INSURER_CLASS) {
      return (
        <span key={index} className={cn("font-semibold", INSURER_CLASS[part])}>
          {part}
        </span>
      );
    }
    if (part === "ZDRAVIE+" || part === "ZDRAVIE") {
      return (
        <span
          key={index}
          className="inline-flex rounded-md border border-primary/20 bg-blue-soft/80 px-1.5 py-0.5 text-[0.9em] font-bold tracking-wide text-primary"
        >
          {part}
        </span>
      );
    }
    if (part === "155" || part === "112") {
      return (
        <span key={index} className="font-bold tabular-nums text-ink">
          {part}
        </span>
      );
    }
    return part;
  });
}

function FaqAnswerChecklist({ items }: { items: string[] }) {
  return (
    <ul className="faq-answer-checklist" role="list">
      {items.map((item, index) => (
        <li key={index} className="faq-answer-checklist-item">
          <span className="faq-answer-checklist-icon" aria-hidden="true">
            <Check className="h-3.5 w-3.5" strokeWidth={2.75} />
          </span>
          <span className="text-body-sm leading-relaxed text-muted">{enrichText(item)}</span>
        </li>
      ))}
    </ul>
  );
}

function FaqAnswerBlock({ block }: { block: RenderBlock }) {
  if (block.type === "checklist-group") {
    return <FaqAnswerChecklist items={block.items} />;
  }

  switch (block.type) {
    case "lead":
      return (
        <p className="faq-answer-lead">
          <Check className="faq-answer-lead-icon h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden="true" />
          <span>{enrichText(block.body)}</span>
        </p>
      );
    case "callout":
      return (
        <div className="faq-answer-callout">
          <span className="faq-answer-callout-label">{block.label}</span>
          <p className="faq-answer-callout-body">{enrichText(block.body)}</p>
        </div>
      );
    case "bullet":
      return (
        <div className="faq-answer-bullet">
          <CircleDot className="faq-answer-bullet-icon h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
          <div className="min-w-0">
            {block.label ? (
              <p className="faq-answer-bullet-title">{block.label}</p>
            ) : null}
            <p className={cn("text-body-sm leading-relaxed text-muted", block.label && "mt-1")}>
              {enrichText(block.body)}
            </p>
          </div>
        </div>
      );
    case "alert":
      return (
        <p className="faq-answer-alert">
          <AlertTriangle className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
          <span>{enrichText(block.body)}</span>
        </p>
      );
    case "note":
      return (
        <p className="faq-answer-note text-body-sm italic leading-relaxed text-muted">
          {enrichText(block.body)}
        </p>
      );
    default:
      return <p className="text-body leading-relaxed text-muted">{enrichText(block.body)}</p>;
  }
}

export function FaqAnswer({ text }: { text: string }) {
  const blocks = groupBlocks(parseBlocks(text));

  return (
    <div className="faq-answer flex flex-col gap-3">
      {blocks.map((block, index) => (
        <FaqAnswerBlock key={index} block={block} />
      ))}
    </div>
  );
}
