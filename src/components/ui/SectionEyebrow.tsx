import React from "react";

interface SectionEyebrowProps {
  children: React.ReactNode;
  theme?: "navy" | "gold" | "white" | "gold-dark";
  line?: boolean;
  className?: string;
}

export function SectionEyebrow({
  children,
  theme = "navy",
  line = true,
  className = "",
}: SectionEyebrowProps) {
  // WCAG 2.2 AA Verified Colors:
  // "gold": #EDC455 for dark surfaces (9.85:1 contrast against #171C56 and #0F1238)
  // "gold-dark": #8B6C20 for light surfaces (4.53:1 contrast against #FFFFFF)
  // "navy": #171C56 for light surfaces (15.6:1 contrast against #FFFFFF)
  // "white": #FFFFFF for dark surfaces (15.6:1 contrast against #171C56)
  const colorClass =
    theme === "gold"
      ? "text-[#EDC455]"
      : theme === "gold-dark"
      ? "text-[#8B6C20]"
      : theme === "white"
      ? "text-[#FFFFFF]"
      : "text-[#171C56]";

  const lineColor =
    theme === "gold" || theme === "white" || theme === "gold-dark"
      ? "bg-[#EDC455]"
      : "bg-[#EDC455]";

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {line && <span className={`inline-block h-[1px] w-6 sm:w-8 ${lineColor}`} aria-hidden="true" />}
      <span
        className={`text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] uppercase ${colorClass}`}
      >
        {children}
      </span>
    </div>
  );
}
