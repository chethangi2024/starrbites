import React from "react";

interface SectionEyebrowProps {
  children: React.ReactNode;
  theme?: "slate" | "bronze" | "champagne" | "charcoal" | "muted" | "gold" | "navy";
  className?: string;
  line?: boolean;
}

export function SectionEyebrow({
  children,
  theme = "bronze",
  className = "",
  line = true,
}: SectionEyebrowProps) {
  const themeStyles = {
    slate: {
      text: "text-[#526B80]",
      line: "bg-[#526B80]",
    },
    bronze: {
      text: "text-[#A98556]",
      line: "bg-[#A98556]",
    },
    champagne: {
      text: "text-[#D4C3A6]",
      line: "bg-[#D4C3A6]",
    },
    charcoal: {
      text: "text-[#292D30]",
      line: "bg-[#526B80]",
    },
    muted: {
      text: "text-[#77736C]",
      line: "bg-[#526B80]",
    },
    gold: {
      text: "text-[#A98556]",
      line: "bg-[#A98556]",
    },
    navy: {
      text: "text-[#354B5D]",
      line: "bg-[#526B80]",
    },
  }[theme];

  return (
    <div
      className={`inline-flex items-center gap-2.5 text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase font-mono ${themeStyles.text} ${className}`}
    >
      {line && (
        <span
          className={`inline-block w-5 sm:w-6 h-[1.5px] ${themeStyles.line} shrink-0 opacity-80`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </div>
  );
}
