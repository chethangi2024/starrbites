import React from "react";

interface SectionEyebrowProps {
  children: React.ReactNode;
  theme?: "navy" | "charcoal" | "gold" | "white" | "gold-dark";
  line?: boolean;
  className?: string;
}

export function SectionEyebrow({
  children,
  theme = "charcoal",
  line = true,
  className = "",
}: SectionEyebrowProps) {
  // WCAG 2.2 AA Verified Contrast:
  // "charcoal" / "navy" / "gold-dark": #242424 text (15.09:1 on #FDFBFF, 5.17:1 on #0099FF) with #EDC455 decorative line
  // "gold": #EDC455 text for dark #242424 surfaces (9.33:1 contrast)
  // "white": #FDFBFF text for dark #242424 surfaces (15.09:1 contrast)
  const colorClass =
    theme === "gold"
      ? "text-[#EDC455]"
      : theme === "white"
      ? "text-[#FDFBFF]"
      : "text-[#242424]";

  const lineColor = "bg-[#EDC455]";

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {line && (
        <span
          className={`inline-block h-[2px] w-6 sm:w-8 ${lineColor}`}
          aria-hidden="true"
        />
      )}
      <span
        className={`text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] uppercase ${colorClass}`}
      >
        {children}
      </span>
    </div>
  );
}
